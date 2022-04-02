

-- tao cot tsvector  
ALTER TABLE posts ADD COLUMN search_tsv tsvector;

-- tao cot tsvector  
ALTER TABLE posts ADD COLUMN search_doc text;




-- /// function chuyen tieng viet thanh tieng anh
CREATE OR REPLACE FUNCTION vn_unaccent(text)
  RETURNS text AS
$func$
SELECT lower(translate($1,
'áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ¹²³ÀÁẢẠÂẤẦẨẬẪÃÄÅÆàáảạâấầẩẫậãäåæĀāĂẮẰẲẴẶăắằẳẵặĄąÇçĆćĈĉĊċČčĎďĐđÈÉẸÊẾỀỄỆËèéẹêềếễệëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨÌÍỈỊÎÏìíỉịîïĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓỎỌÔỐỒỔỖỘỐỒỔỖỘƠỚỜỞỠỢÕÖòóỏọôốồổỗộơớờỡợởõöŌōŎŏŐőŒœØøŔŕŖŗŘřßŚśŜŝŞşŠšŢţŤťŦŧÙÚỦỤƯỪỨỬỮỰÛÜùúủụûưứừửữựüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽžёЁ',
'aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY123AAAAAAAAAAAAAAaaaaaaaaaaaaaaAaAAAAAAaaaaaaAaCcCcCcCcCcDdDdEEEEEEEEEeeeeeeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIIIIiiiiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOOOOOOOOOOOOOOOOOOooooooooooooooooooOoOoOoEeOoRrRrRrSSsSsSsSsTtTtTtUUUUUUUUUUUUuuuuuuuuuuuuUuUuUuUuUuUuWwYyyYyYZzZzZzеЕ'));
$func$ LANGUAGE sql IMMUTABLE;



-- chinh thuc update du lieu cu
UPDATE posts as p1 set search_tsv = p2.search_tsv, search_doc = p2.search_doc 
FROM (

	SELECT 
	( 
		setweight(to_tsvector(coalesce(vn_unaccent(posts.title), '')), 'A') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(posts.excerpt), '')), 'B') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(posts.text_catalogue), '')), 'A') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(posts.text_content), '')), 'C')
	) as search_tsv
    ,
	(
		coalesce(posts.title, '') || ' ' ||
		coalesce(posts.excerpt, '') || ' ' ||
		coalesce(posts.text_catalogue, '') || ' ' ||
		coalesce(posts.text_content, '')
	) as search_doc
	, 
	posts.id 
    FROM  posts
	
) AS p2
WHERE p1.id = p2.id;





--- tao function 
CREATE OR REPLACE FUNCTION search_post_tsv_trigger_func()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN 
	SELECT 
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.title), '')), 'A') || ' ' ||
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.excerpt), '')), 'B') || ' ' ||
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.text_catalogue), '')), 'A') || ' ' ||
	setweight(to_tsvector(coalesce(vn_unaccent(NEW.text_content), '')), 'C')
    , 
	coalesce(NEW.title, '') || ' ' ||
	coalesce(NEW.excerpt, '') || ' ' ||
	coalesce(NEW.text_catalogue, '') || ' ' ||
	coalesce(NEW.text_content, '')
    INTO NEW.search_tsv, NEW.search_doc
    FROM  posts 
	WHERE posts.id = NEW.id;

    RETURN NEW;
END $$;


---- tao trigger 
CREATE TRIGGER search_post_tsv_trigger BEFORE INSERT OR UPDATE
OF title, excerpt, content ON posts FOR EACH ROW
EXECUTE PROCEDURE search_post_tsv_trigger_func();

--- tao index
CREATE INDEX search_post_idx ON posts USING GIN(search_tsv);



-- test search
-- thu nghiem

-- SELECT id, title from posts
-- WHERE search_tsv @@ to_tsquery('mau|hang'); 



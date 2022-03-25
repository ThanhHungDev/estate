

-- tạo cột tsvector  
ALTER TABLE products ADD COLUMN search_tsv tsvector;

-- tạo cột tsvector  
ALTER TABLE products ADD COLUMN search_doc text;






-- /// function chuyển tiếng việt thành tiếng anh
CREATE OR REPLACE FUNCTION vn_unaccent(text)
  RETURNS text AS
$func$
SELECT lower(translate($1,
'áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ¹²³ÀÁẢẠÂẤẦẨẬẪÃÄÅÆàáảạâấầẩẫậãäåæĀāĂẮẰẲẴẶăắằẳẵặĄąÇçĆćĈĉĊċČčĎďĐđÈÉẸÊẾỀỄỆËèéẹêềếễệëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨÌÍỈỊÎÏìíỉịîïĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓỎỌÔỐỒỔỖỘỐỒỔỖỘƠỚỜỞỠỢÕÖòóỏọôốồổỗộơớờỡợởõöŌōŎŏŐőŒœØøŔŕŖŗŘřßŚśŜŝŞşŠšŢţŤťŦŧÙÚỦỤƯỪỨỬỮỰÛÜùúủụûưứừửữựüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽžёЁ',
'aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY123AAAAAAAAAAAAAAaaaaaaaaaaaaaaAaAAAAAAaaaaaaAaCcCcCcCcCcDdDdEEEEEEEEEeeeeeeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIIIIiiiiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOOOOOOOOOOOOOOOOOOooooooooooooooooooOoOoOoEeOoRrRrRrSSsSsSsSsTtTtTtUUUUUUUUUUUUuuuuuuuuuuuuUuUuUuUuUuUuWwYyyYyYZzZzZzеЕ'));
$func$ LANGUAGE sql IMMUTABLE;




-- chính thwucs update dữ liệu cũ 
UPDATE products as p1 set search_tsv = p2.search_tsv, search_doc = p2.search_doc 
FROM (

	SELECT 
	( 
		setweight(to_tsvector(coalesce(vn_unaccent(products.title), '')), 'A') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(products.excerpt), '')), 'B') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(products.text_catalogue), '')), 'A') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(products.text_content), '')), 'C')
	) as search_tsv
    ,
	(
		coalesce(products.title, '') || ' ' ||
		coalesce(products.excerpt, '') || ' ' ||
		coalesce(products.text_catalogue, '') || ' ' ||
		coalesce(products.text_content, '')
	) as search_doc
	, 
	products.id 
    FROM  products
	
) AS p2
WHERE p1.id = p2.id;




--- tạo function 
CREATE OR REPLACE FUNCTION search_product_tsv_trigger_func()
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
    FROM  products 
	WHERE products.id = NEW.id;

    RETURN NEW;
END $$;


---- tạo trigger 
CREATE TRIGGER search_product_tsv_trigger BEFORE INSERT OR UPDATE
OF title, excerpt, content ON products FOR EACH ROW
EXECUTE PROCEDURE search_product_tsv_trigger_func();

--- tạo index
CREATE INDEX search_product_idx ON products USING GIN(search_tsv);



-- test search
--- thử nghiệm

-- SELECT id, title from products
-- WHERE search_tsv @@ to_tsquery('mau|hang'); 



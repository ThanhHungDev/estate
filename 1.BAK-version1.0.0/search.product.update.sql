
--- update data search cũ có dữ liệu của 2 cột text_catalogue và text_content
update products set text_catalogue = regexp_replace(catalogue, E'<[^>]+>', ' ', 'gi') where id > 0; 
update products set text_content = regexp_replace(content, E'<[^>]+>', ' ', 'gi') where id > 0; 
ALTER TABLE products ADD COLUMN text_content text;
ALTER TABLE products ADD COLUMN text_catalogue text;


--- select ra coi thử dữ liệu ban đầu sẽ ra như nào
SELECT 
	( 
		setweight(to_tsvector(coalesce(vn_unaccent(products.title), '')), 'A') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(products.excerpt), '')), 'B') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(products.text_catalogue), '')), 'A') || ' ' ||
		setweight(to_tsvector(coalesce(vn_unaccent(products.text_content), '')), 'C')
	) as search_tsv
    ,
	(
		coalesce(products.title) || ' ' ||
		coalesce(products.excerpt) || ' ' ||
		coalesce(products.text_catalogue) || ' ' ||
		coalesce(products.text_content)
	) as search_doc
	, 
	products.id 
    FROM  products;



--- chính thwucs update dữ liệu cũ 
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
		coalesce(products.title) || ' ' ||
		coalesce(products.excerpt) || ' ' ||
		coalesce(products.text_catalogue) || ' ' ||
		coalesce(products.text_content)
	) as search_doc
	, 
	products.id 
    FROM  products
	
) AS p2
WHERE p1.id = p2.id;



--- nếu không muốn thì xóa đi 
---remove index 
DROP INDEX IF EXISTS search_product_idx;

-- remove triger 
DROP TRIGGER IF EXISTS search_product_tsv_trigger  on products;

-- remove function 
DROP FUNCTION IF EXISTS search_product_tsv_trigger_func;




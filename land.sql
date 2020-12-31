--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    title character varying(150) NOT NULL,
    slug character varying(150) NOT NULL,
    excerpt character varying(255),
    content text,
    sort integer DEFAULT 1 NOT NULL,
    parent integer,
    background character varying(255),
    description character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: communes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.communes (
    id bigint NOT NULL,
    name character varying(150) NOT NULL,
    slug character varying(150) NOT NULL,
    latitude character varying(255) NOT NULL,
    longitude character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    district_id integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.communes OWNER TO postgres;

--
-- Name: communes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.communes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.communes_id_seq OWNER TO postgres;

--
-- Name: communes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.communes_id_seq OWNED BY public.communes.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    id bigint NOT NULL,
    post_id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255),
    phone character varying(255),
    facebook character varying(255),
    zalo character varying(255),
    address character varying(255),
    website character varying(255),
    latitude character varying(255) NOT NULL,
    longitude character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contacts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_id_seq OWNER TO postgres;

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: device; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.device (
    id bigint NOT NULL,
    ip character varying(255) NOT NULL,
    platform character varying(255),
    browser character varying(255),
    version character varying(255),
    type character varying(255),
    latitude character varying(255),
    longitude character varying(255),
    city character varying(255),
    region character varying(255),
    country character varying(255),
    postal character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.device OWNER TO postgres;

--
-- Name: device_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.device_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.device_id_seq OWNER TO postgres;

--
-- Name: device_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.device_id_seq OWNED BY public.device.id;


--
-- Name: districts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.districts (
    id bigint NOT NULL,
    name character varying(150) NOT NULL,
    slug character varying(150) NOT NULL,
    latitude character varying(255) NOT NULL,
    longitude character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    province_id integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.districts OWNER TO postgres;

--
-- Name: districts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.districts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.districts_id_seq OWNER TO postgres;

--
-- Name: districts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.districts_id_seq OWNED BY public.districts.id;


--
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.failed_jobs OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.failed_jobs_id_seq OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;


--
-- Name: galleries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.galleries (
    id integer NOT NULL,
    post_id integer NOT NULL,
    src character varying(255) NOT NULL,
    alt character varying(255),
    title character varying(255),
    width integer,
    height integer,
    galery character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.galleries OWNER TO postgres;

--
-- Name: galleries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.galleries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galleries_id_seq OWNER TO postgres;

--
-- Name: galleries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.galleries_id_seq OWNED BY public.galleries.id;


--
-- Name: informations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.informations (
    id bigint NOT NULL,
    post_id integer NOT NULL,
    bedroom integer,
    toilet integer,
    legal integer,
    rate_value double precision,
    price character varying(255),
    deposit character varying(255),
    furniture character varying(255),
    floor character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.informations OWNER TO postgres;

--
-- Name: informations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.informations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.informations_id_seq OWNER TO postgres;

--
-- Name: informations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.informations_id_seq OWNED BY public.informations.id;


--
-- Name: lands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lands (
    id bigint NOT NULL,
    name character varying(255),
    type integer DEFAULT 1 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.lands OWNER TO postgres;

--
-- Name: lands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lands_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lands_id_seq OWNER TO postgres;

--
-- Name: lands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lands_id_seq OWNED BY public.lands.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.options (
    id bigint NOT NULL,
    key character varying(150) NOT NULL,
    type integer DEFAULT 1 NOT NULL,
    value_text text,
    value_html text,
    language character varying(10) DEFAULT 'vi'::character varying NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.options OWNER TO postgres;

--
-- Name: options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.options_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.options_id_seq OWNER TO postgres;

--
-- Name: options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.options_id_seq OWNED BY public.options.id;


--
-- Name: permission_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permission_roles (
    role_id integer NOT NULL,
    permission_id integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.permission_roles OWNER TO postgres;

--
-- Name: permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permissions (
    id integer NOT NULL,
    name character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.permissions OWNER TO postgres;

--
-- Name: permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.permissions_id_seq OWNER TO postgres;

--
-- Name: permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;


--
-- Name: post_tag_actives; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_tag_actives (
    id bigint NOT NULL,
    post_id bigint,
    tag_id bigint,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.post_tag_actives OWNER TO postgres;

--
-- Name: post_tag_actives_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_tag_actives_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_tag_actives_id_seq OWNER TO postgres;

--
-- Name: post_tag_actives_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_tag_actives_id_seq OWNED BY public.post_tag_actives.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    contact_id integer NOT NULL,
    category_id integer NOT NULL,
    title character varying(150),
    slug character varying(150),
    type integer DEFAULT 1 NOT NULL,
    stylesheet text,
    javascript text,
    sort integer DEFAULT 0 NOT NULL,
    public integer DEFAULT 0 NOT NULL,
    description character varying(255),
    land_id integer,
    direction integer,
    direction_balcony integer,
    horizontal character varying(255),
    vertical character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    id bigint NOT NULL,
    name character varying(150) NOT NULL,
    slug character varying(150) NOT NULL,
    latitude character varying(255) NOT NULL,
    longitude character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- Name: provinces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provinces_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provinces_id_seq OWNER TO postgres;

--
-- Name: provinces_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provinces_id_seq OWNED BY public.provinces.id;


--
-- Name: reactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reactions (
    id bigint NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    react_id integer NOT NULL,
    type integer NOT NULL,
    content text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.reactions OWNER TO postgres;

--
-- Name: reactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reactions_id_seq OWNER TO postgres;

--
-- Name: reactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reactions_id_seq OWNED BY public.reactions.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255),
    type character varying(255) DEFAULT 'user'::character varying NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id bigint NOT NULL,
    title character varying(255),
    slug character varying(255),
    excerpt character varying(255),
    content text,
    background character varying(255),
    description character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    avatar character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role_id integer NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: communes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communes ALTER COLUMN id SET DEFAULT nextval('public.communes_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Name: device id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device ALTER COLUMN id SET DEFAULT nextval('public.device_id_seq'::regclass);


--
-- Name: districts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.districts ALTER COLUMN id SET DEFAULT nextval('public.districts_id_seq'::regclass);


--
-- Name: failed_jobs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);


--
-- Name: galleries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galleries ALTER COLUMN id SET DEFAULT nextval('public.galleries_id_seq'::regclass);


--
-- Name: informations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.informations ALTER COLUMN id SET DEFAULT nextval('public.informations_id_seq'::regclass);


--
-- Name: lands id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lands ALTER COLUMN id SET DEFAULT nextval('public.lands_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.options ALTER COLUMN id SET DEFAULT nextval('public.options_id_seq'::regclass);


--
-- Name: permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);


--
-- Name: post_tag_actives id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tag_actives ALTER COLUMN id SET DEFAULT nextval('public.post_tag_actives_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: provinces id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces ALTER COLUMN id SET DEFAULT nextval('public.provinces_id_seq'::regclass);


--
-- Name: reactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions ALTER COLUMN id SET DEFAULT nextval('public.reactions_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, title, slug, excerpt, content, sort, parent, background, description, created_at, updated_at) FROM stdin;
1	Căn hộ chung cư	can-ho-chung-cu	\N	\N	1	\N	\N	\N	\N	\N
2	Nhà riêng	nha-rieng	\N	\N	1	\N	\N	\N	\N	\N
3	Nhà biệt thự, liền kề	nha-biet-thu-lien-ke	\N	\N	1	\N	\N	\N	\N	\N
4	Nhà mặt phố	nha-mat-pho	\N	\N	1	\N	\N	\N	\N	\N
5	Đất nền dự án	dat-nen-du-an	\N	\N	1	\N	\N	\N	\N	\N
6	Bán đất	ban-dat	\N	\N	1	\N	\N	\N	\N	\N
7	Trang trại, khu nghỉ dưỡng	trang-trai-khu-nghi-duong	\N	\N	1	\N	\N	\N	\N	\N
8	Kho, nhà xưởng	kho-nha-xuong	\N	\N	1	\N	\N	\N	\N	\N
9	Bất động sản khác	bat-dong-san-khac	\N	\N	1	\N	\N	\N	\N	\N
\.


--
-- Data for Name: communes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.communes (id, name, slug, latitude, longitude, type, district_id, created_at, updated_at) FROM stdin;
1	Phường Phúc Xá	phuong-phuc-xa	21.0467979	105.8481116	Phường	1	\N	\N
4	Phường Trúc Bạch	phuong-truc-bach	21.0452531	105.8415062	Phường	1	\N	\N
6	Phường Vĩnh Phúc	phuong-vinh-phuc	21.0417308	105.8099499	Phường	1	\N	\N
7	Phường Cống Vị	phuong-cong-vi	21.0352802	105.8092161	Phường	1	\N	\N
8	Phường Liễu Giai	phuong-lieu-giai	21.0379972	105.8187558	Phường	1	\N	\N
10	Phường Nguyễn Trung Trực	phuong-nguyen-trung-truc	21.0417971	105.8473777	Phường	1	\N	\N
13	Phường Quán Thánh	phuong-quan-thanh	21.0389429	105.8393044	Phường	1	\N	\N
16	Phường Ngọc Hà	phuong-ngoc-ha	21.0378157	105.8282959	Phường	1	\N	\N
19	Phường Điện Biên	phuong-dien-bien	21.0331477	105.8393044	Phường	1	\N	\N
22	Phường Đội Cấn	phuong-doi-can	21.0353362	105.8238927	Phường	1	\N	\N
25	Phường Ngọc Khánh	phuong-ngoc-khanh	21.0301393	105.8099499	Phường	1	\N	\N
28	Phường Kim Mã	phuong-kim-ma	21.0316443	105.8246266	Phường	1	\N	\N
31	Phường Giảng Võ	phuong-giang-vo	21.0270609	105.8194896	Phường	1	\N	\N
34	Phường Thành Công	phuong-thanh-cong	21.020889	105.8158204	Phường	1	\N	\N
37	Phường Phúc Tân	phuong-phuc-tan	21.0372674	105.8569193	Phường	2	\N	\N
40	Phường Đồng Xuân	phuong-dong-xuan	21.0392122	105.8498353	Phường	2	\N	\N
43	Phường Hàng Mã	phuong-hang-ma	21.0375904	105.8459098	Phường	2	\N	\N
46	Phường Hàng Buồm	phuong-hang-buom	21.0355832	105.8517814	Phường	2	\N	\N
49	Phường Hàng Đào	phuong-hang-dao	21.0346712	105.8499465	Phường	2	\N	\N
52	Phường Hàng Bồ	phuong-hang-bo	21.0348806	105.8477447	Phường	2	\N	\N
55	Phường Cửa Đông	phuong-cua-dong	21.0329168	105.8455428	Phường	2	\N	\N
58	Phường Lý Thái Tổ	phuong-ly-thai-to	21.0309577	105.8547173	Phường	2	\N	\N
61	Phường Hàng Bạc	phuong-hang-bac	21.0329432	105.8528824	Phường	2	\N	\N
64	Phường Hàng Gai	phuong-hang-gai	21.032965	105.8488456	Phường	2	\N	\N
67	Phường Chương Dương Độ	phuong-chuong-duong-do	21.0265395	105.8621601	Phường	2	\N	\N
70	Phường Hàng Trống	phuong-hang-trong	21.0284792	105.8503135	Phường	2	\N	\N
73	Phường Cửa Nam	phuong-cua-nam	21.0252277	105.8426071	Phường	2	\N	\N
76	Phường Hàng Bông	phuong-hang-bong	21.0288979	105.8459098	Phường	2	\N	\N
79	Phường Tràng Tiền	phuong-trang-tien	21.0251629	105.8547173	Phường	2	\N	\N
82	Phường Trần Hưng Đạo	phuong-tran-hung-dao	21.0229634	105.8473777	Phường	2	\N	\N
85	Phường Phan Chu Trinh	phuong-phan-chu-trinh	21.0205376	105.8576533	Phường	2	\N	\N
88	Phường Hàng Bài	phuong-hang-bai	21.021096	105.8517814	Phường	2	\N	\N
91	Phường Phú Thượng	phuong-phu-thuong	21.0838905	105.8084823	Phường	3	\N	\N
94	Phường Nhật Tân	phuong-nhat-tan	21.0764202	105.8260943	Phường	3	\N	\N
97	Phường Tứ Liên	phuong-tu-lien	21.0695076	105.8378366	Phường	3	\N	\N
100	Phường Quảng An	phuong-quang-an	21.063591	105.8260436	Phường	3	\N	\N
103	Phường Xuân La	phuong-xuan-la	21.0596756	105.8040796	Phường	3	\N	\N
106	Phường Yên Phụ	phuong-yen-phu	21.0534309	105.8393044	Phường	3	\N	\N
109	Phường Bưởi	phuong-buoi	21.0530438	105.8128851	Phường	3	\N	\N
112	Phường Thụy Khuê	phuong-thuy-khue	21.046133	105.8246266	Phường	3	\N	\N
115	Phường Thượng Thanh	phuong-thuong-thanh	21.0655013	105.8883137	Phường	4	\N	\N
118	Phường Ngọc Thụy	phuong-ngoc-thuy	21.0588582	105.8583873	Phường	4	\N	\N
121	Phường Giang Biên	phuong-giang-bien	21.0674567	105.9200531	Phường	4	\N	\N
124	Phường Đức Giang	phuong-duc-giang	21.0701691	105.9068373	Phường	4	\N	\N
127	Phường Việt Hưng	phuong-viet-hung	21.0575538	105.9024322	Phường	4	\N	\N
130	Phường Gia Thụy	phuong-gia-thuy	21.048956	105.8862812	Phường	4	\N	\N
133	Phường Ngọc Lâm	phuong-ngoc-lam	21.0448412	105.8686635	Phường	4	\N	\N
136	Phường Phúc Lợi	phuong-phuc-loi	21.0437208	105.9259271	Phường	4	\N	\N
139	Phường Bồ Đề	phuong-bo-de	21.0371784	105.8730678	Phường	4	\N	\N
142	Phường Sài Đồng	phuong-sai-dong	21.0348453	105.9127108	Phường	4	\N	\N
145	Phường Long Biên	phuong-long-bien	21.0186765	105.884813	Phường	4	\N	\N
148	Phường Thạch Bàn	phuong-thach-ban	21.0216695	105.9141793	Phường	4	\N	\N
151	Phường Phúc Đồng	phuong-phuc-dong	21.0407327	105.896559	Phường	4	\N	\N
154	Phường Cự Khối	phuong-cu-khoi	21.0059693	105.896559	Phường	4	\N	\N
157	Phường Nghĩa Đô	phuong-nghia-do	21.0454641	105.8011445	Phường	5	\N	\N
160	Phường Nghĩa Tân	phuong-nghia-tan	21.0450408	105.7921796	Phường	5	\N	\N
163	Phường Mai Dịch	phuong-mai-dich	21.0395659	105.7740712	Phường	5	\N	\N
166	Phường Dịch Vọng	phuong-dich-vong	21.0347067	105.7923394	Phường	5	\N	\N
167	Phường Dịch Vọng Hậu	phuong-dich-vong-hau	21.0339527	105.7850022	Phường	5	\N	\N
169	Phường Quan Hoa	phuong-quan-hoa	21.0367702	105.8011445	Phường	5	\N	\N
172	Phường Yên Hoà	phuong-yen-hoa	21.0218044	105.790872	Phường	5	\N	\N
175	Phường Trung Hoà	phuong-trung-hoa	21.0101531	105.7988345	Phường	5	\N	\N
178	Phường Cát Linh	phuong-cat-linh	21.0289833	105.8297637	Phường	6	\N	\N
181	Phường Văn Miếu	phuong-van-mieu	21.0265584	105.8400383	Phường	6	\N	\N
184	Phường Quốc Tử Giám	phuong-quoc-tu-giam	21.0272556	105.8326992	Phường	6	\N	\N
1879	Xã Cổ Linh	xa-co-linh	22.5512095	105.6200598	Xã	60	\N	\N
187	Phường Láng Thượng	phuong-lang-thuong	21.0220022	105.8040796	Phường	6	\N	\N
190	Phường Ô Chợ Dừa	phuong-o-cho-dua	21.0200535	105.8246266	Phường	6	\N	\N
193	Phường Văn Chương	phuong-van-chuong	21.022491	105.8371026	Phường	6	\N	\N
196	Phường Hàng Bột	phuong-hang-bot	21.0217391	105.8297637	Phường	6	\N	\N
199	Phường Láng Hạ	phuong-lang-ha	21.0153717	105.8128851	Phường	6	\N	\N
202	Phường Khâm Thiên	phuong-kham-thien	21.019454	105.8385705	Phường	6	\N	\N
205	Phường Thổ Quan	phuong-tho-quan	21.0169746	105.834167	Phường	6	\N	\N
208	Phường Nam Đồng	phuong-nam-dong	21.0143557	105.8312314	Phường	6	\N	\N
211	Phường Trung Phụng	phuong-trung-phung	21.0151077	105.8385705	Phường	6	\N	\N
214	Phường Quang Trung	phuong-quang-trung	21.0120152	105.8253604	Phường	6	\N	\N
217	Phường Trung Liệt	phuong-trung-liet	21.0108448	105.822425	Phường	6	\N	\N
220	Phường Phương Liên	phuong-phuong-lien	21.0123495	105.8371026	Phường	6	\N	\N
223	Phường Thịnh Quang	phuong-thinh-quang	21.0083647	105.8180219	Phường	6	\N	\N
226	Phường Trung Tự	phuong-trung-tu	21.0042141	105.8312314	Phường	6	\N	\N
229	Phường Kim Liên	phuong-kim-lien	21.0066938	105.8356348	Phường	6	\N	\N
232	Phường Phương Mai	phuong-phuong-mai	21.0012748	105.8393044	Phường	6	\N	\N
235	Phường Ngã Tư Sở	phuong-nga-tu-so	21.004722	105.8220581	Phường	6	\N	\N
238	Phường Khương Thượng	phuong-khuong-thuong	21.0030438	105.8282959	Phường	6	\N	\N
241	Phường Nguyễn Du	phuong-nguyen-du	21.0187567	105.8459098	Phường	7	\N	\N
244	Phường Bạch Đằng	phuong-bach-dang	21.0132507	105.8657274	Phường	7	\N	\N
247	Phường Phạm Đình Hổ	phuong-pham-dinh-ho	21.0161916	105.8576533	Phường	7	\N	\N
250	Phường Bùi Thị Xuân	phuong-bui-thi-xuan	21.014855	105.8504718	Phường	7	\N	\N
253	Phường Ngô Thì Nhậm	phuong-ngo-thi-nham	21.0166103	105.8532494	Phường	7	\N	\N
256	Phường Lê Đại Hành	phuong-le-dai-hanh	21.0123071	105.8451758	Phường	7	\N	\N
259	Phường Đồng Nhân	phuong-dong-nhan	21.0116144	105.856651	Phường	7	\N	\N
262	Phường Phố Huế	phuong-pho-hue	21.0115168	105.8533481	Phường	7	\N	\N
265	Phường Đống Mác	phuong-dong-mac	21.0112392	105.8602223	Phường	7	\N	\N
268	Phường Thanh Lương	phuong-thanh-luong	21.0068975	105.8715997	Phường	7	\N	\N
271	Phường Thanh Nhàn	phuong-thanh-nhan	21.0053964	105.8569193	Phường	7	\N	\N
274	Phường Cầu Dền	phuong-cau-den	21.0067485	105.8503135	Phường	7	\N	\N
277	Phường Bách Khoa	phuong-bach-khoa	21.0042694	105.8459098	Phường	7	\N	\N
280	Phường Đồng Tâm	phuong-dong-tam	20.9967604	105.8432719	Phường	7	\N	\N
283	Phường Vĩnh Tuy	phuong-vinh-tuy	20.9984853	105.8686635	Phường	7	\N	\N
286	Phường Bạch Mai	phuong-bach-mai	21.0008143	105.8517814	Phường	7	\N	\N
289	Phường Quỳnh Mai	phuong-quynh-mai	20.9999773	105.8605893	Phường	7	\N	\N
292	Phường Quỳnh Lôi	phuong-quynh-loi	21.0003958	105.8561853	Phường	7	\N	\N
295	Phường Minh Khai	phuong-minh-khai	20.9959104	105.8576533	Phường	7	\N	\N
298	Phường Trương Định	phuong-truong-dinh	20.9937815	105.8466875	Phường	7	\N	\N
301	Phường Thanh Trì	phuong-thanh-tri	20.994941	105.8906859	Phường	8	\N	\N
304	Phường Vĩnh Hưng	phuong-vinh-hung	20.9892354	105.8745359	Phường	8	\N	\N
307	Phường Định Công	phuong-dinh-cong	20.9831371	105.8319653	Phường	8	\N	\N
310	Phường Mai Động	phuong-mai-dong	20.9908669	105.8649934	Phường	8	\N	\N
313	Phường Tương Mai	phuong-tuong-mai	20.9885702	105.8510475	Phường	8	\N	\N
316	Phường Đại Kim	phuong-dai-kim	20.9739692	105.8216911	Phường	8	\N	\N
319	Phường Tân Mai	phuong-tan-mai	20.983687	105.848156	Phường	8	\N	\N
322	Phường Hoàng Văn Thụ	phuong-hoang-van-thu	20.9848364	105.8598553	Phường	8	\N	\N
325	Phường Giáp Bát	phuong-giap-bat	20.9836114	105.8422401	Phường	8	\N	\N
328	Phường Lĩnh Nam	phuong-linh-nam	20.9770005	105.896559	Phường	8	\N	\N
331	Phường Thịnh Liệt	phuong-thinh-liet	20.9751142	105.8554513	Phường	8	\N	\N
334	Phường Trần Phú	phuong-tran-phu	20.9723243	105.884813	Phường	8	\N	\N
337	Phường Hoàng Liệt	phuong-hoang-liet	20.9625316	105.8399127	Phường	8	\N	\N
340	Phường Yên Sở	phuong-yen-so	20.9618527	105.8730678	Phường	8	\N	\N
343	Phường Nhân Chính	phuong-nhan-chinh	21.0046148	105.8040796	Phường	9	\N	\N
346	Phường Thượng Đình	phuong-thuong-dinh	21.0006046	105.8158204	Phường	9	\N	\N
349	Phường Khương Trung	phuong-khuong-trung	20.9971504	105.8216911	Phường	9	\N	\N
352	Phường Khương Mai	phuong-khuong-mai	20.9963153	105.8304975	Phường	9	\N	\N
355	Phường Thanh Xuân Trung	phuong-thanh-xuan-trung	20.9959212	105.8040796	Phường	9	\N	\N
358	Phường Phương Liệt	phuong-phuong-liet	20.9925823	105.8393044	Phường	9	\N	\N
361	Phường Hạ Đình	phuong-ha-dinh	20.9866719	105.8099499	Phường	9	\N	\N
364	Phường Khương Đình	phuong-khuong-dinh	20.9887356	105.8187558	Phường	9	\N	\N
367	Phường Thanh Xuân Bắc	phuong-thanh-xuan-bac	20.993579	105.7982094	Phường	9	\N	\N
370	Phường Thanh Xuân Nam	phuong-thanh-xuan-nam	20.9855403	105.7989432	Phường	9	\N	\N
373	Phường Kim Giang	phuong-kim-giang	20.9828413	105.8121513	Phường	9	\N	\N
376	Thị trấn Sóc Sơn	thi-tran-soc-son	21.2538445	105.8495796	Thị trấn	16	\N	\N
379	Xã Bắc Sơn	xa-bac-son	21.3636125	105.8231588	Xã	16	\N	\N
382	Xã Minh Trí	xa-minh-tri	21.3322109	105.7879371	Xã	16	\N	\N
385	Xã Hồng Kỳ	xa-hong-ky	21.3215666	105.8550831	Xã	16	\N	\N
388	Xã Nam Sơn	xa-nam-son	21.3235995	105.8172881	Xã	16	\N	\N
391	Xã Trung Giã	xa-trung-gia	21.3153395	105.8730678	Xã	16	\N	\N
394	Xã Tân Hưng	xa-tan-hung	21.2951248	105.9024322	Xã	16	\N	\N
397	Xã Minh Phú	xa-minh-phu	21.2753602	105.776198	Xã	16	\N	\N
400	Xã Phù Linh	xa-phu-linh	21.2802077	105.8466437	Xã	16	\N	\N
403	Xã Bắc Phú	xa-bac-phu	21.27456	105.9053689	Xã	16	\N	\N
406	Xã Tân Minh	xa-tan-minh	21.2779513	105.8701316	Xã	16	\N	\N
409	Xã Quang Tiến	xa-quang-tien	21.251423	105.8143528	Xã	16	\N	\N
412	Xã Hiền Ninh	xa-hien-ninh	21.2510499	105.7879371	Xã	16	\N	\N
415	Xã Tân Dân	xa-tan-dan	21.2529081	105.7380511	Xã	16	\N	\N
418	Xã Tiên Dược	xa-tien-duoc	21.2428157	105.843708	Xã	16	\N	\N
421	Xã Việt Long	xa-viet-long	21.24707	105.9200531	Xã	16	\N	\N
424	Xã Xuân Giang	xa-xuan-giang	21.2525117	105.8936224	Xã	16	\N	\N
427	Xã Mai Đình	xa-mai-dinh	21.2295659	105.8160445	Xã	16	\N	\N
430	Xã Đức Hoà	xa-duc-hoa	21.2304607	105.8818766	Xã	16	\N	\N
433	Xã Thanh Xuân	xa-thanh-xuan	21.2301005	105.7644596	Xã	16	\N	\N
436	Xã Đông Xuân	xa-dong-xuan	21.2173817	105.8671954	Xã	16	\N	\N
439	Xã Kim Lũ	xa-kim-lu	21.2134343	105.9083056	Xã	16	\N	\N
442	Xã Phú Cường	xa-phu-cuong	21.2046739	105.7879371	Xã	16	\N	\N
445	Xã Phú Minh	xa-phu-minh	21.2024335	105.8114175	Xã	16	\N	\N
448	Xã Phù Lỗ	xa-phu-lo	21.1990662	105.8466437	Xã	16	\N	\N
451	Xã Xuân Thu	xa-xuan-thu	21.1971793	105.896559	Xã	16	\N	\N
454	Thị trấn Đông Anh	thi-tran-dong-anh	21.1611142	105.8495796	Thị trấn	17	\N	\N
457	Xã Xuân Nộn	xa-xuan-non	21.1852265	105.8701316	Xã	17	\N	\N
460	Xã Thuỵ Lâm	xa-thuy-lam	21.1713853	105.8936224	Xã	17	\N	\N
463	Xã Bắc Hồng	xa-bac-hong	21.1766298	105.8084823	Xã	17	\N	\N
466	Xã Nguyên Khê	xa-nguyen-khe	21.1796234	105.8378366	Xã	17	\N	\N
469	Xã Nam Hồng	xa-nam-hong	21.1582993	105.7879371	Xã	17	\N	\N
472	Xã Tiên Dương	xa-tien-duong	21.1538228	105.8349009	Xã	17	\N	\N
475	Xã Vân Hà	xa-van-ha	21.1491333	105.9141793	Xã	17	\N	\N
478	Xã Uy Nỗ	xa-uy-no	21.1431669	105.8554513	Xã	17	\N	\N
481	Xã Vân Nội	xa-van-noi	21.1470888	105.8143528	Xã	17	\N	\N
484	Xã Liên Hà	xa-lien-ha	21.1482071	105.8936224	Xã	17	\N	\N
487	Xã Việt Hùng	xa-viet-hung	21.140921	105.8789403	Xã	17	\N	\N
490	Xã Kim Nỗ	xa-kim-no	21.1371732	105.7967419	Xã	17	\N	\N
493	Xã Kim Chung	xa-kim-chung	21.133051	105.7791327	Xã	17	\N	\N
496	Xã Dục Tú	xa-duc-tu	21.1134405	105.8936224	Xã	17	\N	\N
499	Xã Đại Mạch	xa-dai-mach	21.1183715	105.7606997	Xã	17	\N	\N
502	Xã Vĩnh Ngọc	xa-vinh-ngoc	21.1196638	105.8153566	Xã	17	\N	\N
505	Xã Cổ Loa	xa-co-loa	21.1156865	105.8701316	Xã	17	\N	\N
508	Xã Hải Bối	xa-hai-boi	21.1108103	105.7996769	Xã	17	\N	\N
511	Xã Xuân Canh	xa-xuan-canh	21.0829044	105.8475265	Xã	17	\N	\N
514	Xã Võng La	xa-vong-la	21.1106142	105.7782478	Xã	17	\N	\N
517	Xã Tầm Xá	xa-tam-xa	21.0958665	105.8349009	Xã	17	\N	\N
520	Xã Mai Lâm	xa-mai-lam	21.0876468	105.8906859	Xã	17	\N	\N
523	Xã Đông Hội	xa-dong-hoi	21.0809178	105.8701316	Xã	17	\N	\N
526	Thị trấn Yên Viên	thi-tran-yen-vien	21.0846054	105.9149135	Thị trấn	18	\N	\N
529	Xã Yên Thường	xa-yen-thuong	21.0976543	105.9317349	Xã	18	\N	\N
532	Xã Yên Viên	xa-yen-vien	21.079044	105.9200531	Xã	18	\N	\N
535	Xã Ninh Hiệp	xa-ninh-hiep	21.0762299	105.9494248	Xã	18	\N	\N
538	Xã Đình Xuyên	xa-dinh-xuyen	21.0837124	105.9318012	Xã	18	\N	\N
541	Xã Dương Hà	xa-duong-ha	21.0647433	105.9332698	Xã	18	\N	\N
544	Xã Phù Đổng	xa-phu-dong	21.060339	105.9641124	Xã	18	\N	\N
547	Xã Trung Mầu	xa-trung-mau	21.0606965	105.9905529	Xã	18	\N	\N
550	Xã Lệ Chi	xa-le-chi	21.047983	106.0023054	Xã	18	\N	\N
553	Xã Cổ Bi	xa-co-bi	21.0303618	105.9433771	Xã	18	\N	\N
556	Xã Đặng Xá	xa-dang-xa	21.0287612	105.9611748	Xã	18	\N	\N
559	Xã Phú Thị	xa-phu-thi	21.0276351	105.9729255	Xã	18	\N	\N
562	Xã Kim Sơn	xa-kim-son	21.0259443	105.9905529	Xã	18	\N	\N
565	Thị trấn Trâu Quỳ	thi-tran-trau-quy	21.0078386	105.9376756	Thị trấn	18	\N	\N
568	Xã Dương Quang	xa-duong-quang	21.0085686	105.9905529	Xã	18	\N	\N
571	Xã Dương Xá	xa-duong-xa	21.0024138	105.9641124	Xã	18	\N	\N
574	Xã Đông Dư	xa-dong-du	20.9927022	105.9141793	Xã	18	\N	\N
577	Xã Đa Tốn	xa-da-ton	20.9852277	105.9318012	Xã	18	\N	\N
580	Xã Kiêu Kỵ	xa-kieu-ky	20.9803677	105.9523622	Xã	18	\N	\N
583	Xã Bát Tràng	xa-bat-trang	20.9773791	105.9136226	Xã	18	\N	\N
586	Xã Kim Lan	xa-kim-lan	20.9603693	105.9039005	Xã	18	\N	\N
589	Xã Văn Đức	xa-van-duc	20.9396212	105.8936224	Xã	18	\N	\N
592	Phường Cầu Diễn	phuong-cau-dien	21.0345864	105.7629924	Phường	19	\N	\N
595	Phường Thượng Cát	phuong-thuong-cat	21.0963665	105.7380511	Phường	21	\N	\N
598	Phường Liên Mạc	phuong-lien-mac	21.0831053	105.7556564	Phường	21	\N	\N
601	Phường Đông Ngạc	phuong-dong-ngac	21.0919168	105.7850022	Phường	21	\N	\N
602	Phường Đức Thắng	phuong-duc-thang	21.0798488	105.7747307	Phường	21	\N	\N
604	Phường Thụy Phương	phuong-thuy-phuong	21.0833035	105.7688614	Phường	21	\N	\N
607	Phường Tây Tựu	phuong-tay-tuu	21.0679338	105.7321831	Phường	21	\N	\N
610	Phường Xuân Đỉnh	phuong-xuan-dinh	21.0429936	105.7376668	Phường	21	\N	\N
611	Phường Xuân Tảo	phuong-xuan-tao	21.0634093	105.7952744	Phường	21	\N	\N
613	Phường Minh Khai	phuong-minh-khai	21.0604722	105.7497878	Phường	21	\N	\N
616	Phường Cổ Nhuế 1	phuong-co-nhue-1	21.0506076	105.7909724	Phường	21	\N	\N
617	Phường Cổ Nhuế 2	phuong-co-nhue-2	21.0660875	105.7639698	Phường	21	\N	\N
619	Phường Phú Diễn	phuong-phu-dien	21.047768	105.7615252	Phường	21	\N	\N
620	Phường Phúc Diễn	phuong-phuc-dien	21.04729	105.7512549	Phường	21	\N	\N
622	Phường Xuân Phương	phuong-xuan-phuong	21.0314868	105.7497878	Phường	19	\N	\N
623	Phường Phương Canh	phuong-phuong-canh	21.0426019	105.7395182	Phường	19	\N	\N
625	Phường Mỹ Đình 1	phuong-my-dinh-1	21.0221606	105.771796	Phường	19	\N	\N
626	Phường Mỹ Đình 2	phuong-my-dinh-2	21.0279571	105.771796	Phường	19	\N	\N
628	Phường Tây Mỗ	phuong-tay-mo	21.0088528	105.7439194	Phường	19	\N	\N
631	Phường Mễ Trì	phuong-me-tri	21.0055267	105.7791327	Phường	19	\N	\N
632	Phường Phú Đô	phuong-phu-do	21.0124328	105.7673942	Phường	19	\N	\N
634	Phường Đại Mỗ	phuong-dai-mo	20.9898009	105.7615252	Phường	19	\N	\N
637	Phường Trung Văn	phuong-trung-van	20.989171	105.7835348	Phường	19	\N	\N
640	Thị trấn Văn Điển	thi-tran-van-dien	20.9493584	105.8444419	Thị trấn	20	\N	\N
643	Xã Tân Triều	xa-tan-trieu	20.9712048	105.8010533	Xã	20	\N	\N
646	Xã Thanh Liệt	xa-thanh-liet	20.9674199	105.8143528	Xã	20	\N	\N
649	Xã Tả Thanh Oai	xa-ta-thanh-oai	20.933203	105.8084823	Xã	20	\N	\N
652	Xã Hữu Hoà	xa-huu-hoa	20.945903	105.7967419	Xã	20	\N	\N
655	Xã Tam Hiệp	xa-tam-hiep	20.948923	105.8260943	Xã	20	\N	\N
658	Xã Tứ Hiệp	xa-tu-hiep	20.9461418	105.8554513	Xã	20	\N	\N
661	Xã Yên Mỹ	xa-yen-my	20.9444705	105.8730678	Xã	20	\N	\N
664	Xã Vĩnh Quỳnh	xa-vinh-quynh	20.9315381	105.8260943	Xã	20	\N	\N
667	Xã Ngũ Hiệp	xa-ngu-hiep	20.9282023	105.8613233	Xã	20	\N	\N
670	Xã Duyên Hà	xa-duyen-ha	20.9259739	105.884813	Xã	20	\N	\N
673	Xã Ngọc Hồi	xa-ngoc-hoi	20.9182821	105.843708	Xã	20	\N	\N
676	Xã Vạn Phúc	xa-van-phuc	20.918507	105.9024322	Xã	20	\N	\N
679	Xã Đại áng	xa-dai-ang	20.9115334	105.8231588	Xã	20	\N	\N
682	Xã Liên Ninh	xa-lien-ninh	20.9061376	105.8495796	Xã	20	\N	\N
685	Xã Đông Mỹ	xa-dong-my	20.9221912	105.8725107	Xã	20	\N	\N
688	Phường Quang Trung	phuong-quang-trung	22.8369866	104.9776971	Phường	24	\N	\N
691	Phường Trần Phú	phuong-tran-phu	22.8312057	104.9877174	Phường	24	\N	\N
692	Phường Ngọc Hà	phuong-ngoc-ha	22.8376682	105.012767	Phường	24	\N	\N
694	Phường Nguyễn Trãi	phuong-nguyen-trai	22.81635	104.9811744	Phường	24	\N	\N
697	Phường Minh Khai	phuong-minh-khai	22.8182613	104.9865852	Phường	24	\N	\N
700	Xã Ngọc Đường	xa-ngoc-duong	22.8428654	105.0152086	Xã	24	\N	\N
703	Xã Kim Thạch	xa-kim-thach	22.7910244	105.044052	Xã	30	\N	\N
706	Xã Phú Linh	xa-phu-linh	22.7467745	105.0206757	Xã	30	\N	\N
709	Xã Kim Linh	xa-kim-linh	22.7400477	105.0908147	Xã	30	\N	\N
712	Thị trấn Phó Bảng	thi-tran-pho-bang	23.2472787	105.1902297	Thị trấn	26	\N	\N
715	Xã Lũng Cú	xa-lung-cu	23.3674196	105.3248269	Xã	26	\N	\N
718	Xã Má Lé	xa-ma-le	23.3210039	105.3248269	Xã	26	\N	\N
721	Thị trấn Đồng Văn	thi-tran-dong-van	23.2781471	105.3627336	Thị trấn	26	\N	\N
724	Xã Lũng Táo	xa-lung-tao	23.2856201	105.2721456	Xã	26	\N	\N
727	Xã Phố Là	xa-pho-la	23.2611922	105.1668326	Xã	26	\N	\N
730	Xã Thài Phìn Tủng	xa-thai-phin-tung	23.2600847	105.2955575	Xã	26	\N	\N
733	Xã Sủng Là	xa-sung-la	23.2449728	105.2136302	Xã	26	\N	\N
736	Xã Xà Phìn	xa-xa-phin	23.2531151	105.248737	Xã	26	\N	\N
739	Xã Tả Phìn	xa-ta-phin	23.2345484	105.3189726	Xã	26	\N	\N
742	Xã Tả Lủng	xa-ta-lung	23.2310562	105.3541013	Xã	26	\N	\N
745	Xã Phố Cáo	xa-pho-cao	23.2135961	105.1785307	Xã	26	\N	\N
748	Xã Sính Lủng	xa-sinh-lung	23.2148174	105.2838511	Xã	26	\N	\N
751	Xã Sảng Tủng	xa-sang-tung	23.2142176	105.2311827	Xã	26	\N	\N
754	Xã Lũng Thầu	xa-lung-thau	23.194137	105.169757	Xã	26	\N	\N
757	Xã Hố Quáng Phìn	xa-ho-quang-phin	23.1695429	105.2721456	Xã	26	\N	\N
760	Xã Vần Chải	xa-van-chai	23.1468587	105.2077798	Xã	26	\N	\N
763	Xã Lũng Phìn	xa-lung-phin	23.1335614	105.2838511	Xã	26	\N	\N
766	Xã Sủng Trái	xa-sung-trai	23.119033	105.2545888	Xã	26	\N	\N
769	Thị trấn Mèo Vạc	thi-tran-meo-vac	23.1556005	105.4126652	Thị trấn	27	\N	\N
772	Xã Thượng Phùng	xa-thuong-phung	23.2692777	105.4360963	Xã	27	\N	\N
775	Xã Pải Lủng	xa-pai-lung	23.2507611	105.3892372	Xã	27	\N	\N
778	Xã Xín Cái	xa-xin-cai	23.2205273	105.4595306	Xã	27	\N	\N
781	Xã Pả Vi	xa-pa-vi	23.1979633	105.3950939	Xã	27	\N	\N
784	Xã Giàng Chu Phìn	xa-giang-chu-phin	23.1932844	105.4419546	Xã	27	\N	\N
787	Xã Sủng Trà	xa-sung-tra	23.1997304	105.3189726	Xã	27	\N	\N
790	Xã Sủng Máng	xa-sung-mang	23.1625891	105.3423909	Xã	27	\N	\N
793	Xã Sơn Vĩ	xa-son-vi	23.1606843	105.5357139	Xã	27	\N	\N
796	Xã Tả Lủng	xa-ta-lung	23.1695379	105.3892372	Xã	27	\N	\N
799	Xã Cán Chu Phìn	xa-can-chu-phin	23.1497502	105.471249	Xã	27	\N	\N
802	Xã Lũng Pù	xa-lung-pu	23.1166419	105.5122694	Xã	27	\N	\N
805	Xã Lũng Chinh	xa-lung-chinh	23.1405376	105.3306814	Xã	27	\N	\N
808	Xã Tát Ngà	xa-tat-nga	23.102802	105.4185227	Xã	27	\N	\N
811	Xã Nậm Ban	xa-nam-ban	23.0865683	105.348246	Xã	27	\N	\N
814	Xã Khâu Vai	xa-khau-vai	23.078972	105.4829681	Xã	27	\N	\N
815	Xã Niêm Tòng	xa-niem-tong	23.0285166	105.4653897	Xã	27	\N	\N
817	Xã Niêm Sơn	xa-niem-son	23.0331778	105.4185227	Xã	27	\N	\N
820	Thị trấn Yên Minh	thi-tran-yen-minh	23.1185238	105.1555046	Thị trấn	28	\N	\N
823	Xã Thắng Mố	xa-thang-mo	23.2332348	105.096661	Xã	28	\N	\N
826	Xã Phú Lũng	xa-phu-lung	23.247135	105.0732771	Xã	28	\N	\N
829	Xã Sủng Tráng	xa-sung-trang	23.2077185	105.1200482	Xã	28	\N	\N
832	Xã Bạch Đích	xa-bach-dich	23.2093284	105.044052	Xã	28	\N	\N
835	Xã Na Khê	xa-na-khe	23.1692362	105.0382076	Xã	28	\N	\N
838	Xã Sủng Thài	xa-sung-thai	23.1537393	105.1375908	Xã	28	\N	\N
841	Xã Hữu Vinh	xa-huu-vinh	23.1566831	105.1668326	Xã	28	\N	\N
844	Xã Lao Và Chải	xa-lao-va-chai	23.1118426	105.0908147	Xã	28	\N	\N
847	Xã Mậu Duệ	xa-mau-due	23.0685118	105.2370339	Xã	28	\N	\N
850	Xã Đông Minh	xa-dong-minh	23.0986169	105.1668326	Xã	28	\N	\N
853	Xã Mậu Long	xa-mau-long	23.0679812	105.3014109	Xã	28	\N	\N
856	Xã Ngam La	xa-ngam-la	23.0585396	105.1609838	Xã	28	\N	\N
859	Xã Ngọc Long	xa-ngoc-long	22.9960207	105.3248269	Xã	28	\N	\N
862	Xã Đường Thượng	xa-duong-thuong	22.988851	105.1609838	Xã	28	\N	\N
865	Xã Lũng Hồ	xa-lung-ho	23.0029267	105.2545888	Xã	28	\N	\N
868	Xã Du Tiến	xa-du-tien	22.9309636	105.2779983	Xã	28	\N	\N
871	Xã Du Già	xa-du-gia	22.9378304	105.2077798	Xã	28	\N	\N
874	Thị trấn Tam Sơn	thi-tran-tam-son	23.0703183	104.9797753	Thị trấn	29	\N	\N
877	Xã Bát Đại Sơn	xa-bat-dai-son	23.1464183	104.9739333	Xã	29	\N	\N
880	Xã Nghĩa Thuận	xa-nghia-thuan	23.1531779	104.9038451	Xã	29	\N	\N
883	Xã Cán Tỷ	xa-can-ty	23.0931512	105.044052	Xã	29	\N	\N
886	Xã Cao Mã Pờ	xa-cao-ma-po	23.1133988	104.8337879	Xã	29	\N	\N
889	Xã Thanh Vân	xa-thanh-van	23.1021886	104.9505671	Xã	29	\N	\N
892	Xã Tùng Vài	xa-tung-vai	23.0624265	104.8804893	Xã	29	\N	\N
895	Xã Đông Hà	xa-dong-ha	23.0001987	105.044052	Xã	29	\N	\N
898	Xã Quản Bạ	xa-quan-ba	23.0436923	105.0148322	Xã	29	\N	\N
901	Xã Lùng Tám	xa-lung-tam	23.0444107	105.0674317	Xã	29	\N	\N
904	Xã Quyết Tiến	xa-quyet-tien	23.0069613	104.9739333	Xã	29	\N	\N
907	Xã Tả Ván	xa-ta-van	23.0181558	104.8571368	Xã	29	\N	\N
910	Xã Thái An	xa-thai-an	22.9776775	105.096661	Xã	29	\N	\N
913	Thị trấn Vị Xuyên	thi-tran-vi-xuyen	22.6646052	104.9680914	Thị trấn	30	\N	\N
916	Thị trấn Nông Trường Việt Lâm	thi-tran-nong-truong-viet-lam	22.6308357	104.9564084	Thị trấn	30	\N	\N
919	Xã Minh Tân	xa-minh-tan	22.9649533	104.9272044	Xã	30	\N	\N
922	Xã Thuận Hoà	xa-thuan-hoa	22.9327312	105.0206757	Xã	30	\N	\N
925	Xã Tùng Bá	xa-tung-ba	22.9132117	105.1025075	Xã	30	\N	\N
928	Xã Thanh Thủy	xa-thanh-thuy	22.9332766	104.8532337	Xã	30	\N	\N
931	Xã Thanh Đức	xa-thanh-duc	22.8999477	104.8162784	Xã	30	\N	\N
934	Xã Phong Quang	xa-phong-quang	22.8697204	104.9505671	Xã	30	\N	\N
937	Xã Xín Chải	xa-xin-chai	22.8777937	104.8046066	Xã	30	\N	\N
940	Xã Phương Tiến	xa-phuong-tien	22.8321122	104.8571368	Xã	30	\N	\N
943	Xã Lao Chải	xa-lao-chai	22.8409429	104.7637619	Xã	30	\N	\N
946	Xã Phương Độ	xa-phuong-do	22.8373942	104.9476705	Xã	24	\N	\N
949	Xã Phương Thiện	xa-phuong-thien	22.7913742	104.9740572	Xã	24	\N	\N
952	Xã Cao Bồ	xa-cao-bo	22.7601258	104.8804893	Xã	30	\N	\N
955	Xã Đạo Đức	xa-dao-duc	22.7279899	104.9739333	Xã	30	\N	\N
958	Xã Thượng Sơn	xa-thuong-son	22.6609676	104.8221147	Xã	30	\N	\N
961	Xã Linh Hồ	xa-linh-ho	22.6935647	105.0908147	Xã	30	\N	\N
964	Xã Quảng Ngần	xa-quang-ngan	22.6903527	104.8804893	Xã	30	\N	\N
967	Xã Việt Lâm	xa-viet-lam	22.6563057	104.9330448	Xã	30	\N	\N
970	Xã Ngọc Linh	xa-ngoc-linh	22.6537856	105.0206757	Xã	30	\N	\N
973	Xã Ngọc Minh	xa-ngoc-minh	22.6343384	105.1025075	Xã	30	\N	\N
976	Xã Bạch Ngọc	xa-bach-ngoc	22.5563384	105.0674317	Xã	30	\N	\N
979	Xã Trung Thành	xa-trung-thanh	22.5652275	104.9739333	Xã	30	\N	\N
982	Xã Minh Sơn	xa-minh-son	22.8576679	105.1960795	Xã	31	\N	\N
985	Xã Giáp Trung	xa-giap-trung	22.8020899	105.2897042	Xã	31	\N	\N
988	Xã Yên Định	xa-yen-dinh	22.8075136	105.1142011	Xã	31	\N	\N
991	Thị trấn Yên Phú	thi-tran-yen-phu	22.7615314	105.348246	Thị trấn	31	\N	\N
994	Xã Minh Ngọc	xa-minh-ngoc	22.754259	105.1843801	Xã	31	\N	\N
997	Xã Yên Phong	xa-yen-phong	22.7569369	105.3950939	Xã	31	\N	\N
1000	Xã Lạc Nông	xa-lac-nong	22.7474469	105.2545888	Xã	31	\N	\N
1003	Xã Phú Nam	xa-phu-nam	22.729114	105.4419546	Xã	31	\N	\N
1006	Xã Yên Cường	xa-yen-cuong	22.6895788	105.3716684	Xã	31	\N	\N
1009	Xã Thượng Tân	xa-thuong-tan	22.677761	105.2545888	Xã	31	\N	\N
1012	Xã Đường Âm	xa-duong-am	22.6803814	105.4653897	Xã	31	\N	\N
1015	Xã Đường Hồng	xa-duong-hong	22.6385549	105.4185227	Xã	31	\N	\N
1018	Xã Phiêng Luông	xa-phieng-luong	22.6203843	105.3072646	Xã	31	\N	\N
1021	Thị trấn Vinh Quang	thi-tran-vinh-quang	22.741261	104.6791893	Thị trấn	32	\N	\N
1024	Xã Bản Máy	xa-ban-may	22.8182258	104.571354	Xã	32	\N	\N
1027	Xã Thàng Tín	xa-thang-tin	22.8117116	104.6412925	Xã	32	\N	\N
1030	Xã Thèn Chu Phìn	xa-then-chu-phin	22.8051631	104.7112631	Xã	32	\N	\N
1033	Xã Pố Lồ	xa-po-lo	22.7851696	104.6762738	Xã	32	\N	\N
1036	Xã Bản Phùng	xa-ban-phung	22.7938635	104.5830082	Xã	32	\N	\N
1039	Xã Túng Sán	xa-tung-san	22.7689507	104.7871004	Xã	32	\N	\N
1042	Xã Chiến Phố	xa-chien-pho	22.7842483	104.6238048	Xã	32	\N	\N
1045	Xã Đản Ván	xa-dan-van	22.7797051	104.7345937	Xã	32	\N	\N
1048	Xã Tụ Nhân	xa-tu-nhan	22.7407998	104.652952	Xã	32	\N	\N
1051	Xã Tân Tiến	xa-tan-tien	22.7342614	104.7229279	Xã	32	\N	\N
1054	Xã Nàng Đôn	xa-nang-don	22.7229431	104.5946633	Xã	32	\N	\N
1057	Xã Pờ Ly Ngài	xa-po-ly-ngai	22.6975005	104.6179761	Xã	32	\N	\N
1060	Xã Sán Xả Hồ	xa-san-xa-ho	22.7069722	104.6412925	Xã	32	\N	\N
1063	Xã Bản Luốc	xa-ban-luoc	22.6804399	104.6762738	Xã	32	\N	\N
1066	Xã Ngàm Đăng Vài	xa-ngam-dang-vai	22.7120827	104.7112631	Xã	32	\N	\N
1069	Xã Bản Nhùng	xa-ban-nhung	22.7088062	104.7462603	Xã	32	\N	\N
1072	Xã Tả Sử Choóng	xa-ta-su-choong	22.6833503	104.7695962	Xã	32	\N	\N
1075	Xã Nậm Dịch	xa-nam-dich	22.6771758	104.7112631	Xã	32	\N	\N
1078	Xã Bản Péo	xa-ban-peo	22.651725	104.7345937	Xã	32	\N	\N
1081	Xã Hồ Thầu	xa-ho-thau	22.6318625	104.6354631	Xã	32	\N	\N
1084	Xã Nam Sơn	xa-nam-son	22.6317191	104.6995991	Xã	32	\N	\N
1087	Xã Nậm Tỵ	xa-nam-ty	22.6082763	104.7637619	Xã	32	\N	\N
1090	Xã Thông Nguyên	xa-thong-nguyen	22.5893615	104.7170954	Xã	32	\N	\N
1093	Xã Nậm Khòa	xa-nam-khoa	22.5704243	104.670443	Xã	32	\N	\N
1096	Thị trấn Cốc Pài	thi-tran-coc-pai	22.6903377	104.4432179	Thị trấn	33	\N	\N
1099	Xã Nàn Xỉn	xa-nan-xin	22.7749049	104.5363969	Xã	33	\N	\N
1102	Xã Bản Díu	xa-ban-diu	22.748385	104.571354	Xã	33	\N	\N
1105	Xã Chí Cà	xa-chi-ca	22.7358508	104.4548621	Xã	33	\N	\N
1108	Xã Xín Mần	xa-xin-man	22.7389853	104.4961377	Xã	33	\N	\N
1111	Xã Trung Thịnh	xa-trung-thinh	22.7097434	104.5800946	Xã	33	\N	\N
1114	Xã Thèn Phàng	xa-then-phang	22.71992	104.5014479	Xã	33	\N	\N
1117	Xã Ngán Chiên	xa-ngan-chien	22.7039774	104.5480484	Xã	33	\N	\N
1120	Xã Pà Vầy Sủ	xa-pa-vay-su	22.6945995	104.3966503	Xã	33	\N	\N
1123	Xã Cốc Rế	xa-coc-re	22.6712005	104.5247463	Xã	33	\N	\N
1126	Xã Thu Tà	xa-thu-ta	22.6679758	104.5597007	Xã	33	\N	\N
1129	Xã Nàn Ma	xa-nan-ma	22.6575299	104.4199322	Xã	33	\N	\N
1132	Xã Tả Nhìu	xa-ta-nhiu	22.6744168	104.4898001	Xã	33	\N	\N
1135	Xã Bản Ngò	xa-ban-ngo	22.6426875	104.4548621	Xã	33	\N	\N
1138	Xã Chế Là	xa-che-la	22.6299136	104.5305715	Xã	33	\N	\N
1141	Xã Nấm Dẩn	xa-nam-dan	22.5876159	104.4839765	Xã	33	\N	\N
1144	Xã Quảng Nguyên	xa-quang-nguyen	22.5790502	104.577181	Xã	33	\N	\N
1147	Xã Nà Chì	xa-na-chi	22.5410346	104.4839765	Xã	33	\N	\N
1150	Xã Khuôn Lùng	xa-khuon-lung	22.4965461	104.5247463	Xã	33	\N	\N
1153	Thị trấn Việt Quang	thi-tran-viet-quang	22.4177717	104.8104424	Thị trấn	34	\N	\N
1156	Thị trấn Vĩnh Tuy	thi-tran-vinh-tuy	22.261564	104.8950863	Thị trấn	34	\N	\N
1159	Xã Tân Lập	xa-tan-lap	22.521381	104.8221147	Xã	34	\N	\N
1162	Xã Tân Thành	xa-tan-thanh	22.5549612	104.8980058	Xã	34	\N	\N
1165	Xã Đồng Tiến	xa-dong-tien	22.5142908	105.0206757	Xã	34	\N	\N
1168	Xã Đồng Tâm	xa-dong-tam	22.499878	104.9272044	Xã	34	\N	\N
1171	Xã Tân Quang	xa-tan-quang	22.4905485	104.873842	Xã	34	\N	\N
1174	Xã Thượng Bình	xa-thuong-binh	22.4835645	105.0382076	Xã	34	\N	\N
1177	Xã Hữu Sản	xa-huu-san	22.4168574	105.0674317	Xã	34	\N	\N
1180	Xã Kim Ngọc	xa-kim-ngoc	22.4342697	104.9447261	Xã	34	\N	\N
1183	Xã Việt Vinh	xa-viet-vinh	22.45994	104.8571368	Xã	34	\N	\N
1186	Xã Bằng Hành	xa-bang-hanh	22.4467505	104.9973028	Xã	34	\N	\N
1189	Xã Quang Minh	xa-quang-minh	22.411227	104.8804893	Xã	34	\N	\N
1192	Xã Liên Hiệp	xa-lien-hiep	22.3747848	105.0206757	Xã	34	\N	\N
1195	Xã Vô Điếm	xa-vo-diem	22.3813915	104.9505671	Xã	34	\N	\N
1198	Xã Việt Hồng	xa-viet-hong	22.3734063	104.7871004	Xã	34	\N	\N
1201	Xã Hùng An	xa-hung-an	22.3499795	104.8512993	Xã	34	\N	\N
1204	Xã Đức Xuân	xa-duc-xuan	22.3282806	105.0206757	Xã	34	\N	\N
1207	Xã Tiên Kiều	xa-tien-kieu	22.30143	104.8104424	Xã	34	\N	\N
1210	Xã Vĩnh Hảo	xa-vinh-hao	22.2738231	104.8571368	Xã	34	\N	\N
1213	Xã Vĩnh Phúc	xa-vinh-phuc	22.2570534	104.7871004	Xã	34	\N	\N
1216	Xã Đồng Yên	xa-dong-yen	22.1872392	104.7871004	Xã	34	\N	\N
1219	Xã Đông Thành	xa-dong-thanh	22.2272916	104.8571368	Xã	34	\N	\N
1222	Xã Xuân Minh	xa-xuan-minh	22.5151987	104.7637619	Xã	35	\N	\N
1225	Xã Tiên Nguyên	xa-tien-nguyen	22.5005935	104.670443	Xã	35	\N	\N
1228	Xã Tân Nam	xa-tan-nam	22.4837701	104.6004911	Xã	35	\N	\N
1231	Xã Bản Rịa	xa-ban-ria	22.447868	104.4839765	Xã	35	\N	\N
1234	Xã Yên Thành	xa-yen-thanh	22.4203245	104.5305715	Xã	35	\N	\N
1237	Thị trấn Yên Bình	thi-tran-yen-binh	22.4086337	104.5946633	Thị trấn	35	\N	\N
1240	Xã Tân Trịnh	xa-tan-trinh	22.4242827	104.7404269	Xã	35	\N	\N
1243	Xã Tân Bắc	xa-tan-bac	22.4286046	104.6937674	Xã	35	\N	\N
1246	Xã Bằng Lang	xa-bang-lang	22.3652127	104.6238048	Xã	35	\N	\N
1249	Xã Yên Hà	xa-yen-ha	22.35662	104.7170954	Xã	35	\N	\N
1252	Xã Hương Sơn	xa-huong-son	22.329029	104.7637619	Xã	35	\N	\N
1255	Xã Xuân Giang	xa-xuan-giang	22.3165079	104.6471221	Xã	35	\N	\N
1258	Xã Nà Khương	xa-na-khuong	22.2826937	104.571354	Xã	35	\N	\N
1261	Xã Tiên Yên	xa-tien-yen	22.2889407	104.6937674	Xã	35	\N	\N
1264	Xã Vĩ Thượng	xa-vi-thuong	22.2317343	104.7462603	Xã	35	\N	\N
1267	Phường Sông Hiến	phuong-song-hien	22.6638635	106.2316216	Phường	40	\N	\N
1270	Phường Sông Bằng	phuong-song-bang	22.6627931	106.2698669	Phường	40	\N	\N
1273	Phường Hợp Giang	phuong-hop-giang	22.6656132	106.2566273	Phường	40	\N	\N
1276	Phường Tân Giang	phuong-tan-giang	22.6486318	106.2669247	Phường	40	\N	\N
1279	Phường Ngọc Xuân	phuong-ngoc-xuan	22.6851832	106.2492724	Phường	40	\N	\N
1282	Phường Đề Thám	phuong-de-tham	22.680463	106.2110311	Phường	40	\N	\N
1285	Phường Hoà Chung	phuong-hoa-chung	22.6594332	106.2560534	Phường	40	\N	\N
1288	Phường Duyệt Trung	phuong-duyet-trung	22.6627931	106.2698669	Phường	40	\N	\N
1290	Thị trấn Pác Miầu	thi-tran-pac-miau	22.8378995	105.4948965	Thị trấn	42	\N	\N
1291	Xã Đức Hạnh	xa-duc-hanh	23.0398405	105.5335157	Xã	42	\N	\N
1294	Xã Lý Bôn	xa-ly-bon	14.058324	108.277199	Xã	42	\N	\N
1296	Xã Nam Cao	xa-nam-cao	14.058324	108.277199	Xã	42	\N	\N
1297	Xã Nam Quang	xa-nam-quang	14.058324	108.277199	Xã	42	\N	\N
1300	Xã Vĩnh Quang	xa-vinh-quang	22.9008091	105.5826123	Xã	42	\N	\N
1303	Xã Quảng Lâm	xa-quang-lam	14.058324	108.277199	Xã	42	\N	\N
1304	Xã Thạch Lâm	xa-thach-lam	14.058324	108.277199	Xã	42	\N	\N
1306	Xã Tân Việt	xa-tan-viet	14.058324	108.277199	Xã	42	\N	\N
1309	Xã Vĩnh Phong	xa-vinh-phong	22.8312108	105.5826123	Xã	42	\N	\N
1312	Xã Mông Ân	xa-mong-an	14.058324	108.277199	Xã	42	\N	\N
1315	Xã Thái Học	xa-thai-hoc	14.058324	108.277199	Xã	42	\N	\N
1316	Xã Thái Sơn	xa-thai-son	14.058324	108.277199	Xã	42	\N	\N
1318	Xã Yên Thổ	xa-yen-tho	22.6734435	105.5357139	Xã	42	\N	\N
1321	Thị trấn Bảo Lạc	thi-tran-bao-lac	22.9429885	105.6823124	Thị trấn	43	\N	\N
1324	Xã Cốc Pàng	xa-coc-pang	23.0352733	105.629523	Xã	43	\N	\N
1327	Xã Thượng Hà	xa-thuong-ha	23.0281663	105.6999122	Xã	43	\N	\N
1330	Xã Cô Ba	xa-co-ba	23.0002261	105.7468535	Xã	43	\N	\N
1333	Xã Bảo Toàn	xa-bao-toan	22.968051	105.6060661	Xã	43	\N	\N
1336	Xã Khánh Xuân	xa-khanh-xuan	22.9306743	105.7468535	Xã	43	\N	\N
1339	Xã Xuân Trường	xa-xuan-truong	22.9235319	105.8172881	Xã	43	\N	\N
1342	Xã Hồng Trị	xa-hong-tri	22.909384	105.6705801	Xã	43	\N	\N
1343	Xã Kim Cúc	xa-kim-cuc	22.870565	105.652983	Xã	43	\N	\N
1345	Xã Phan Thanh	xa-phan-thanh	22.8843038	105.7468535	Xã	43	\N	\N
1348	Xã Hồng An	xa-hong-an	22.8284306	105.8407722	Xã	43	\N	\N
1351	Xã Hưng Đạo	xa-hung-dao	22.8246762	105.7057792	Xã	43	\N	\N
1352	Xã Hưng Thịnh	xa-hung-thinh	22.8218244	105.6764461	Xã	43	\N	\N
1354	Xã Huy Giáp	xa-huy-giap	22.8147446	105.7468535	Xã	43	\N	\N
1357	Xã Đình Phùng	xa-dinh-phung	22.763638	105.7938069	Xã	43	\N	\N
1359	Xã Sơn Lập	xa-son-lap	22.712873	105.6060661	Xã	43	\N	\N
1360	Xã Sơn Lộ	xa-son-lo	22.7522443	105.6764461	Xã	43	\N	\N
1363	Thị trấn Thông Nông	thi-tran-thong-nong	22.7845641	105.9832005	Thị trấn	44	\N	\N
1366	Xã Cần Yên	xa-can-yen	22.9075615	105.9171161	Xã	44	\N	\N
1367	Xã Cần Nông	xa-can-nong	22.8995737	105.8818766	Xã	44	\N	\N
1369	Xã Vị Quang	xa-vi-quang	22.9167418	105.9406128	Xã	44	\N	\N
1372	Xã Lương Thông	xa-luong-thong	22.8628068	105.9582372	Xã	44	\N	\N
1375	Xã Đa Thông	xa-da-thong	22.8006363	105.9853062	Xã	44	\N	\N
1378	Xã Ngọc Động	xa-ngoc-dong	22.7998073	105.942163	Xã	44	\N	\N
1381	Xã Yên Sơn	xa-yen-son	14.058324	108.277199	Xã	44	\N	\N
1384	Xã Lương Can	xa-luong-can	14.058324	108.277199	Xã	44	\N	\N
1387	Xã Thanh Long	xa-thanh-long	14.058324	108.277199	Xã	44	\N	\N
1390	Xã Bình Lãng	xa-binh-lang	14.058324	108.277199	Xã	44	\N	\N
1392	Thị trấn Xuân Hòa	thi-tran-xuan-hoa	22.8918648	106.0698963	Thị trấn	45	\N	\N
1393	Xã Lũng Nặm	xa-lung-nam	22.9640837	106.099291	Xã	45	\N	\N
1396	Xã Kéo Yên	xa-keo-yen	22.9497606	106.0698963	Xã	45	\N	\N
1399	Xã Trường Hà	xa-truong-ha	22.9713815	106.0287512	Xã	45	\N	\N
1402	Xã Vân An	xa-van-an	22.9771742	106.140451	Xã	45	\N	\N
1405	Xã Cải Viên	xa-cai-vien	22.9722734	106.1875016	Xã	45	\N	\N
1408	Xã Nà Sác	xa-na-sac	22.9314554	106.022874	Xã	45	\N	\N
1411	Xã Nội Thôn	xa-noi-thon	22.931152	106.1933837	Xã	45	\N	\N
1414	Xã Tổng Cọt	xa-tong-cot	22.910725	106.2227968	Xã	45	\N	\N
1417	Xã Sóc Hà	xa-soc-ha	22.9119198	105.9876149	Xã	45	\N	\N
1420	Xã Thượng Thôn	xa-thuong-thon	22.9077184	106.140451	Xã	45	\N	\N
1423	Xã Vần Dính	xa-van-dinh	22.9113753	106.1051705	Xã	45	\N	\N
1426	Xã Hồng Sĩ	xa-hong-si	22.8821247	106.1639749	Xã	45	\N	\N
1429	Xã Sĩ Hai	xa-si-hai	14.058324	108.277199	Xã	45	\N	\N
1432	Xã Quý Quân	xa-quy-quan	22.8713809	106.0265744	Xã	45	\N	\N
1435	Xã Mã Ba	xa-ma-ba	14.058324	108.277199	Xã	45	\N	\N
1438	Xã Phù Ngọc	xa-phu-ngoc	22.829248	106.1367434	Xã	45	\N	\N
1441	Xã Đào Ngạn	xa-dao-ngan	22.8358168	106.0992374	Xã	45	\N	\N
1444	Xã Hạ Thôn	xa-ha-thon	14.058324	108.277199	Xã	45	\N	\N
1447	Thị trấn Hùng Quốc	thi-tran-hung-quoc	22.8533627	106.3287199	Thị trấn	46	\N	\N
1450	Xã Cô Mười	xa-co-muoi	22.8723231	106.2580983	Xã	46	\N	\N
1453	Xã Tri Phương	xa-tri-phuong	22.8651487	106.3817021	Xã	46	\N	\N
1456	Xã Quang Hán	xa-quang-han	22.8339203	106.293406	Xã	46	\N	\N
1459	Xã Quang Vinh	xa-quang-vinh	22.8445874	106.2397114	Xã	46	\N	\N
1462	Xã Xuân Nội	xa-xuan-noi	22.8149525	106.3640398	Xã	46	\N	\N
1465	Xã Quang Trung	xa-quang-trung	22.8214253	106.415927	Xã	46	\N	\N
1468	Xã Lưu Ngọc	xa-luu-ngoc	22.8144077	106.2794293	Xã	46	\N	\N
1471	Xã Cao Chương	xa-cao-chuong	22.807578	106.3309272	Xã	46	\N	\N
1474	Xã Quốc Toản	xa-quoc-toan	22.7492376	106.3287199	Xã	46	\N	\N
1477	Thị trấn Trùng Khánh	thi-tran-trung-khanh	22.8354437	106.5260001	Thị trấn	47	\N	\N
1480	Xã Ngọc Khê	xa-ngoc-khe	22.8850227	106.5760857	Xã	47	\N	\N
1481	Xã Ngọc Côn	xa-ngoc-con	22.9119081	106.5407299	Xã	47	\N	\N
1483	Xã Phong Nậm	xa-phong-nam	22.8912953	106.5171626	Xã	47	\N	\N
1486	Xã Ngọc Chung	xa-ngoc-chung	22.8783283	106.4759262	Xã	47	\N	\N
1489	Xã Đình Phong	xa-dinh-phong	22.8632829	106.6173415	Xã	47	\N	\N
1492	Xã Lăng Yên	xa-lang-yen	22.8640997	106.4464766	Xã	47	\N	\N
1495	Xã Đàm Thuỷ	xa-dam-thuy	22.8557084	106.6880841	Xã	47	\N	\N
1498	Xã Khâm Thành	xa-kham-thanh	22.855362	106.528946	Xã	47	\N	\N
1501	Xã Chí Viễn	xa-chi-vien	22.8196868	106.6468148	Xã	47	\N	\N
1504	Xã Lăng Hiếu	xa-lang-hieu	22.8359469	106.4887887	Xã	47	\N	\N
1507	Xã Phong Châu	xa-phong-chau	22.8217722	106.5879339	Xã	47	\N	\N
1510	Xã Đình Minh	xa-dinh-minh	22.8277203	106.5517026	Xã	47	\N	\N
1513	Xã Cảnh Tiên	xa-canh-tien	22.8194384	106.5060031	Xã	47	\N	\N
1516	Xã Trung Phúc	xa-trung-phuc	22.7934721	106.458256	Xã	47	\N	\N
1519	Xã Cao Thăng	xa-cao-thang	22.7749212	106.566904	Xã	47	\N	\N
1522	Xã Đức Hồng	xa-duc-hong	22.794336	106.5252636	Xã	47	\N	\N
1525	Xã Thông Hoè	xa-thong-hoe	22.7682371	106.4987525	Xã	47	\N	\N
1528	Xã Thân Giáp	xa-than-giap	22.7548695	106.5363109	Xã	47	\N	\N
1531	Xã Đoài Côn	xa-doai-con	14.058324	108.277199	Xã	47	\N	\N
1534	Xã Minh Long	xa-minh-long	22.8044323	106.7352584	Xã	48	\N	\N
1537	Xã Lý Quốc	xa-ly-quoc	22.7762559	106.7824429	Xã	48	\N	\N
1540	Xã Thắng Lợi	xa-thang-loi	22.7504729	106.7065103	Xã	48	\N	\N
1543	Xã Đồng Loan	xa-dong-loan	22.7646323	106.7293611	Xã	48	\N	\N
1546	Xã Đức Quang	xa-duc-quang	22.7456562	106.6298672	Xã	48	\N	\N
1549	Xã Kim Loan	xa-kim-loan	22.7331027	106.601758	Xã	48	\N	\N
1552	Xã Quang Long	xa-quang-long	22.6889072	106.7352584	Xã	48	\N	\N
1555	Xã An Lạc	xa-an-lac	22.7014808	106.6173415	Xã	48	\N	\N
1558	Thị trấn Thanh Nhật	thi-tran-thanh-nhat	22.6900566	106.6703963	Thị trấn	48	\N	\N
1561	Xã Vinh Quý	xa-vinh-quy	22.6645316	106.6457891	Xã	48	\N	\N
1564	Xã Việt Chu	xa-viet-chu	22.6631737	106.7057733	Xã	48	\N	\N
1567	Xã Cô Ngân	xa-co-ngan	22.6141688	106.6232359	Xã	48	\N	\N
1570	Xã Thái Đức	xa-thai-duc	22.6285099	106.7057733	Xã	48	\N	\N
1573	Xã Thị Hoa	xa-thi-hoa	22.5951003	106.6939803	Xã	48	\N	\N
1576	Thị trấn Quảng Uyên	thi-tran-quang-uyen	22.6925394	106.4420595	Thị trấn	49	\N	\N
1579	Xã Phi Hải	xa-phi-hai	22.7277468	106.4096704	Xã	49	\N	\N
1582	Xã Quảng Hưng	xa-quang-hung	22.7484556	106.4464766	Xã	49	\N	\N
1585	Xã Bình Lăng	xa-binh-lang	22.7203619	106.493598	Xã	49	\N	\N
1588	Xã Quốc Dân	xa-quoc-dan	14.058324	108.277199	Xã	49	\N	\N
1591	Xã Quốc Phong	xa-quoc-phong	22.7036623	106.4407725	Xã	49	\N	\N
1594	Xã Độc Lập	xa-doc-lap	22.7068147	106.4781351	Xã	49	\N	\N
1597	Xã Cai Bộ	xa-cai-bo	22.6724053	106.5576705	Xã	49	\N	\N
1600	Xã Đoài Khôn	xa-doai-khon	22.6868847	106.451726	Xã	49	\N	\N
1603	Xã Phúc Sen	xa-phuc-sen	22.6838473	106.4116675	Xã	49	\N	\N
1606	Xã Chí Thảo	xa-chi-thao	22.6853947	106.4476518	Xã	49	\N	\N
1609	Xã Tự Do	xa-tu-do	22.6461318	106.4089343	Xã	49	\N	\N
1612	Xã Hồng Định	xa-hong-dinh	22.629938	106.4531024	Xã	49	\N	\N
1615	Xã Hồng Quang	xa-hong-quang	22.624012	106.4980246	Xã	49	\N	\N
1618	Xã Ngọc Động	xa-ngoc-dong	22.6273964	106.3875898	Xã	49	\N	\N
1621	Xã Hoàng Hải	xa-hoang-hai	22.6164435	106.416295	Xã	49	\N	\N
1624	Xã Hạnh Phúc	xa-hanh-phuc	22.5999249	106.4381731	Xã	49	\N	\N
1627	Thị trấn Tà Lùng	thi-tran-ta-lung	22.4919891	106.5760857	Thị trấn	50	\N	\N
1630	Xã Triệu ẩu	xa-trieu-au	22.6140007	106.5701927	Xã	50	\N	\N
1633	Xã Hồng Đại	xa-hong-dai	22.6305104	106.5164262	Xã	50	\N	\N
1636	Xã Cách Linh	xa-cach-linh	22.5832323	106.5878723	Xã	50	\N	\N
1639	Xã Đại Sơn	xa-dai-son	22.5471167	106.5466221	Xã	50	\N	\N
1642	Xã Lương Thiện	xa-luong-thien	22.5609387	106.470036	Xã	50	\N	\N
1645	Xã Tiên Thành	xa-tien-thanh	22.5371958	106.4413233	Xã	50	\N	\N
1648	Thị trấn Hoà Thuận	thi-tran-hoa-thuan	22.5328683	106.5171626	Thị trấn	50	\N	\N
1651	Xã Mỹ Hưng	xa-my-hung	22.4969416	106.528946	Xã	50	\N	\N
1654	Thị trấn Nước Hai	thi-tran-nuoc-hai	22.7370366	106.1536828	Thị trấn	51	\N	\N
1657	Xã Dân Chủ	xa-dan-chu	22.8163928	106.0580363	Xã	51	\N	\N
1660	Xã Nam Tuấn	xa-nam-tuan	22.7843976	106.1367035	Xã	51	\N	\N
1663	Xã Đức Xuân	xa-duc-xuan	14.058324	108.277199	Xã	51	\N	\N
1666	Xã Đại Tiến	xa-dai-tien	22.7681741	106.193112	Xã	51	\N	\N
1669	Xã Đức Long	xa-duc-long	22.7584317	106.129884	Xã	51	\N	\N
1672	Xã Ngũ Lão	xa-ngu-lao	22.7261247	106.261552	Xã	51	\N	\N
1675	Xã Trương Lương	xa-truong-luong	22.7222068	106.0603157	Xã	51	\N	\N
1678	Xã Bình Long	xa-binh-long	22.7365628	106.1368758	Xã	51	\N	\N
1681	Xã Nguyễn Huệ	xa-nguyen-hue	22.7161307	106.3284694	Xã	51	\N	\N
1684	Xã Công Trừng	xa-cong-trung	22.6867743	106.0315573	Xã	51	\N	\N
1687	Xã Hồng Việt	xa-hong-viet	22.7259592	106.1494625	Xã	51	\N	\N
1690	Xã Bế Triều	xa-be-trieu	22.723129	106.1696756	Xã	51	\N	\N
1693	Xã Vĩnh Quang	xa-vinh-quang	22.6985905	106.21659	Xã	40	\N	\N
1696	Xã Hoàng Tung	xa-hoang-tung	22.695399	106.1810044	Xã	51	\N	\N
1699	Xã Trương Vương	xa-truong-vuong	22.6670187	106.3404925	Xã	51	\N	\N
1702	Xã Quang Trung	xa-quang-trung	22.6642987	106.3110622	Xã	51	\N	\N
1705	Xã Hưng Đạo	xa-hung-dao	22.685443	106.194248	Xã	40	\N	\N
1708	Xã Bạch Đằng	xa-bach-dang	22.5982306	106.1735323	Xã	51	\N	\N
1711	Xã Bình Dương	xa-binh-duong	22.6182757	106.140451	Xã	51	\N	\N
1714	Xã Lê Chung	xa-le-chung	14.058324	108.277199	Xã	51	\N	\N
1717	Xã Hà Trì	xa-ha-tri	22.6284623	106.3426999	Xã	51	\N	\N
1720	Xã Chu Trinh	xa-chu-trinh	22.59468	106.3059123	Xã	40	\N	\N
1723	Xã Hồng Nam	xa-hong-nam	22.5566583	106.3794942	Xã	51	\N	\N
1726	Thị trấn Nguyên Bình	thi-tran-nguyen-binh	22.6594661	105.9641124	Thị trấn	52	\N	\N
1729	Thị trấn Tĩnh Túc	thi-tran-tinh-tuc	22.6446293	105.8818766	Thị trấn	52	\N	\N
1732	Xã Yên Lạc	xa-yen-lac	22.7629019	105.8583873	Xã	52	\N	\N
1735	Xã Triệu Nguyên	xa-trieu-nguyen	14.058324	108.277199	Xã	52	\N	\N
1738	Xã Ca Thành	xa-ca-thanh	22.714901	105.8172881	Xã	52	\N	\N
1741	Xã Thái Học	xa-thai-hoc	22.6696274	105.9922337	Xã	52	\N	\N
1744	Xã Vũ Nông	xa-vu-nong	22.6779416	105.8585836	Xã	52	\N	\N
1747	Xã Minh Tâm	xa-minh-tam	22.6864689	106.0873532	Xã	52	\N	\N
1750	Xã Thể Dục	xa-the-duc	22.6230856	105.92299	Xã	52	\N	\N
1753	Xã Bắc Hợp	xa-bac-hop	22.6765912	106.0718437	Xã	52	\N	\N
1756	Xã Mai Long	xa-mai-long	22.6500701	105.7703287	Xã	52	\N	\N
1759	Xã Lang Môn	xa-lang-mon	22.6720253	106.0856954	Xã	52	\N	\N
1762	Xã Minh Thanh	xa-minh-thanh	22.6550071	106.0174655	Xã	52	\N	\N
1765	Xã Hoa Thám	xa-hoa-tham	22.595953	106.0757749	Xã	52	\N	\N
1768	Xã Phan Thanh	xa-phan-thanh	22.5989805	105.8172881	Xã	52	\N	\N
1771	Xã Quang Thành	xa-quang-thanh	22.6103076	105.9347384	Xã	52	\N	\N
1774	Xã Tam Kim	xa-tam-kim	22.6031474	106.0052437	Xã	52	\N	\N
1777	Xã Thành Công	xa-thanh-cong	22.5478895	105.8642593	Xã	52	\N	\N
1780	Xã Thịnh Vượng	xa-thinh-vuong	22.5500055	106.1286901	Xã	52	\N	\N
1783	Xã Hưng Đạo	xa-hung-dao	22.5615775	105.9582372	Xã	52	\N	\N
1786	Thị trấn Đông Khê	thi-tran-dong-khe	22.4220178	106.4435319	Thị trấn	53	\N	\N
1789	Xã Canh Tân	xa-canh-tan	22.5855398	106.2264738	Xã	53	\N	\N
1792	Xã Kim Đồng	xa-kim-dong	22.5333897	106.325041	Xã	53	\N	\N
1795	Xã Minh Khai	xa-minh-khai	22.5144232	106.1933837	Xã	53	\N	\N
1798	Xã Thị Ngân	xa-thi-ngan	22.503812	106.4148229	Xã	53	\N	\N
1801	Xã Đức Thông	xa-duc-thong	22.4815778	106.287521	Xã	53	\N	\N
1804	Xã Thái Cường	xa-thai-cuong	22.4864878	106.3588886	Xã	53	\N	\N
1807	Xã Vân Trình	xa-van-trinh	22.4785495	106.4074622	Xã	53	\N	\N
1810	Xã Thụy Hùng	xa-thuy-hung	22.4851467	106.4759262	Xã	53	\N	\N
1813	Xã Quang Trọng	xa-quang-trong	22.449772	106.1463317	Xã	53	\N	\N
1816	Xã Trọng Con	xa-trong-con	22.427987	106.3581527	Xã	53	\N	\N
1819	Xã Lê Lai	xa-le-lai	22.390035	106.4729811	Xã	53	\N	\N
1822	Xã Đức Long	xa-duc-long	22.4403577	106.5171626	Xã	53	\N	\N
1825	Xã Danh Sỹ	xa-danh-sy	22.4663561	106.3228338	Xã	53	\N	\N
1828	Xã Lê Lợi	xa-le-loi	22.390035	106.4729811	Xã	53	\N	\N
1831	Xã Đức Xuân	xa-duc-xuan	22.3975212	106.4288088	Xã	53	\N	\N
1834	Phường Nguyễn Thị Minh Khai	phuong-nguyen-thi-minh-khai	22.1542051	105.8451758	Phường	58	\N	\N
1837	Phường Sông Cầu	phuong-song-cau	22.1436327	105.8202234	Phường	58	\N	\N
1840	Phường Đức Xuân	phuong-duc-xuan	22.1413077	105.843708	Phường	58	\N	\N
1843	Phường Phùng Chí Kiên	phuong-phung-chi-kien	22.1308765	105.8319653	Phường	58	\N	\N
1846	Phường Huyền Tụng	phuong-huyen-tung	22.1717336	105.8583873	Phường	58	\N	\N
1849	Xã Dương Quang	xa-duong-quang	22.165956	105.7996769	Xã	58	\N	\N
1852	Xã Nông Thượng	xa-nong-thuong	22.1120373	105.8172881	Xã	58	\N	\N
1855	Phường Xuất Hóa	phuong-xuat-hoa	22.1050606	105.8877494	Phường	58	\N	\N
1858	Xã Bằng Thành	xa-bang-thanh	22.7011581	105.7233814	Xã	60	\N	\N
1861	Xã Nhạn Môn	xa-nhan-mon	22.6641397	105.629523	Xã	60	\N	\N
1864	Xã Bộc Bố	xa-boc-bo	22.6194565	105.6705801	Xã	60	\N	\N
1867	Xã Công Bằng	xa-cong-bang	22.6247126	105.5591615	Xã	60	\N	\N
1870	Xã Giáo Hiệu	xa-giao-hieu	22.6252869	105.6119301	Xã	60	\N	\N
1873	Xã Xuân La	xa-xuan-la	22.5811557	105.7057792	Xã	60	\N	\N
1876	Xã An Thắng	xa-an-thang	22.5764685	105.7527221	Xã	60	\N	\N
1882	Xã Nghiên Loan	xa-nghien-loan	22.5125049	105.7182472	Xã	60	\N	\N
1885	Xã Cao Tân	xa-cao-tan	22.5249373	105.629523	Xã	60	\N	\N
1888	Thị trấn Chợ Rã	thi-tran-cho-ra	22.4521065	105.7497878	Thị trấn	61	\N	\N
1891	Xã Bành Trạch	xa-banh-trach	22.5028555	105.8004107	Xã	61	\N	\N
1894	Xã Phúc Lộc	xa-phuc-loc	22.4845422	105.8385705	Xã	61	\N	\N
1897	Xã Hà Hiệu	xa-ha-hieu	22.4323552	105.8532494	Xã	61	\N	\N
1900	Xã Cao Thượng	xa-cao-thuong	22.4817955	105.6185272	Xã	61	\N	\N
1903	Xã Cao Trĩ	xa-cao-tri	22.4627926	105.6933121	Xã	61	\N	\N
1906	Xã Khang Ninh	xa-khang-ninh	22.4298126	105.652983	Xã	61	\N	\N
1909	Xã Nam Mẫu	xa-nam-mau	22.4112376	105.6060661	Xã	61	\N	\N
1912	Xã Thượng Giáo	xa-thuong-giao	22.4304491	105.7270487	Xã	61	\N	\N
1915	Xã Địa Linh	xa-dia-linh	22.4116729	105.7336501	Xã	61	\N	\N
1918	Xã Yến Dương	xa-yen-duong	22.3717899	105.7703287	Xã	61	\N	\N
1921	Xã Chu Hương	xa-chu-huong	22.3723267	105.8231588	Xã	61	\N	\N
1924	Xã Quảng Khê	xa-quang-khe	22.3555762	105.6999122	Xã	61	\N	\N
1927	Xã Mỹ Phương	xa-my-phuong	22.320739	105.8172881	Xã	61	\N	\N
1930	Xã Hoàng Trĩ	xa-hoang-tri	22.3114953	105.6764461	Xã	61	\N	\N
1933	Xã Đồng Phúc	xa-dong-phuc	22.3045398	105.7468535	Xã	61	\N	\N
1936	Thị trấn Nà Phặc	thi-tran-na-phac	22.3809008	105.9112424	Thị trấn	62	\N	\N
1939	Xã Thượng Ân	xa-thuong-an	22.5312492	106.0287512	Xã	62	\N	\N
1942	Xã Bằng Vân	xa-bang-van	22.4786377	106.0566017	Xã	62	\N	\N
1945	Xã Cốc Đán	xa-coc-dan	22.4920544	105.9582372	Xã	62	\N	\N
1948	Xã Trung Hoà	xa-trung-hoa	22.4336108	105.8840789	Xã	62	\N	\N
1951	Xã Đức Vân	xa-duc-van	22.442577	106.0463837	Xã	62	\N	\N
1954	Xã Vân Tùng	xa-van-tung	22.4201574	105.981739	Xã	62	\N	\N
1957	Xã Thượng Quan	xa-thuong-quan	22.3874682	106.0757749	Xã	62	\N	\N
1960	Xã Lãng Ngâm	xa-lang-ngam	22.3113599	105.9112424	Xã	62	\N	\N
1963	Xã Thuần Mang	xa-thuan-mang	22.3399347	106.0069004	Xã	62	\N	\N
1966	Xã Hương Nê	xa-huong-ne	22.3066478	105.9582372	Xã	62	\N	\N
1969	Thị trấn Phủ Thông	thi-tran-phu-thong	22.2724243	105.8804085	Thị trấn	63	\N	\N
1972	Xã Phương Linh	xa-phuong-linh	22.2905277	105.8877494	Xã	63	\N	\N
1975	Xã Vi Hương	xa-vi-huong	22.2900013	105.8349009	Xã	63	\N	\N
1978	Xã Sĩ Bình	xa-si-binh	22.257441	105.9288641	Xã	63	\N	\N
1981	Xã Vũ Muộn	xa-vu-muon	22.2602939	105.9582372	Xã	63	\N	\N
1984	Xã Đôn Phong	xa-don-phong	22.2453935	105.7585908	Xã	63	\N	\N
1987	Xã Tú Trĩ	xa-tu-tri	22.2644764	105.8583873	Xã	63	\N	\N
1990	Xã Lục Bình	xa-luc-binh	22.2447932	105.8231588	Xã	63	\N	\N
1993	Xã Tân Tiến	xa-tan-tien	22.2493717	105.8936224	Xã	63	\N	\N
1996	Xã Quân Bình	xa-quan-binh	22.2317198	105.8671954	Xã	63	\N	\N
1999	Xã Nguyên Phúc	xa-nguyen-phuc	22.1954545	105.9112424	Xã	63	\N	\N
2002	Xã Cao Sơn	xa-cao-son	22.1884098	105.981739	Xã	63	\N	\N
2005	Xã Hà Vị	xa-ha-vi	22.2204391	105.8349009	Xã	63	\N	\N
2008	Xã Cẩm Giàng	xa-cam-giang	22.2053446	105.8701316	Xã	63	\N	\N
2011	Xã Mỹ Thanh	xa-my-thanh	22.1490913	105.9112424	Xã	63	\N	\N
2014	Xã Dương Phong	xa-duong-phong	22.1235906	105.6999122	Xã	63	\N	\N
2017	Xã Quang Thuận	xa-quang-thuan	22.1166698	105.7703287	Xã	63	\N	\N
2020	Thị trấn Bằng Lũng	thi-tran-bang-lung	22.1623468	105.6002024	Thị trấn	64	\N	\N
2023	Xã Xuân Lạc	xa-xuan-lac	22.348516	105.5357139	Xã	64	\N	\N
2026	Xã Nam Cường	xa-nam-cuong	22.3700524	105.6119301	Xã	64	\N	\N
2029	Xã Đồng Lạc	xa-dong-lac	22.3207166	105.5826123	Xã	64	\N	\N
2032	Xã Tân Lập	xa-tan-lap	22.2929096	105.629523	Xã	64	\N	\N
2035	Xã Bản Thi	xa-ban-thi	22.2579529	105.5122694	Xã	64	\N	\N
2038	Xã Quảng Bạch	xa-quang-bach	22.2487991	105.6060661	Xã	64	\N	\N
2041	Xã Bằng Phúc	xa-bang-phuc	22.265095	105.6764461	Xã	64	\N	\N
2044	Xã Yên Thịnh	xa-yen-thinh	22.2160719	105.4653897	Xã	64	\N	\N
2047	Xã Yên Thượng	xa-yen-thuong	22.1628213	105.5357139	Xã	64	\N	\N
2050	Xã Phương Viên	xa-phuong-vien	22.2000924	105.629523	Xã	64	\N	\N
2053	Xã Ngọc Phái	xa-ngoc-phai	22.2046767	105.5826123	Xã	64	\N	\N
2056	Xã Rã Bản	xa-ra-ban	22.1670672	105.6705801	Xã	64	\N	\N
2059	Xã Đông Viên	xa-dong-vien	22.1382732	105.6610481	Xã	64	\N	\N
2062	Xã Lương Bằng	xa-luong-bang	22.0977187	105.488828	Xã	64	\N	\N
2065	Xã Bằng Lãng	xa-bang-lang	22.1182143	105.5767493	Xã	64	\N	\N
2068	Xã Đại Sảo	xa-dai-sao	22.1072727	105.629523	Xã	64	\N	\N
2071	Xã Nghĩa Tá	xa-nghia-ta	22.0699703	105.5357139	Xã	64	\N	\N
2074	Xã Phong Huân	xa-phong-huan	22.0822608	105.5884754	Xã	64	\N	\N
2077	Xã Yên Mỹ	xa-yen-my	22.0638045	105.6588485	Xã	64	\N	\N
2080	Xã Bình Trung	xa-binh-trung	21.9980653	105.5591615	Xã	64	\N	\N
2083	Xã Yên Nhuận	xa-yen-nhuan	22.033566	105.6119301	Xã	64	\N	\N
2086	Thị trấn Chợ Mới	thi-tran-cho-moi	21.8809712	105.7791327	Thị trấn	65	\N	\N
2089	Xã Tân Sơn	xa-tan-son	22.0748722	105.9582372	Xã	65	\N	\N
2092	Xã Thanh Vận	xa-thanh-van	22.0679719	105.7938069	Xã	65	\N	\N
2095	Xã Mai Lạp	xa-mai-lap	22.0748924	105.7233814	Xã	65	\N	\N
2098	Xã Hoà Mục	xa-hoa-muc	22.0633397	105.8407722	Xã	65	\N	\N
2101	Xã Thanh Mai	xa-thanh-mai	22.0238948	105.7703287	Xã	65	\N	\N
2104	Xã Cao Kỳ	xa-cao-ky	22.0146458	105.8642593	Xã	65	\N	\N
2107	Xã Nông Hạ	xa-nong-ha	21.9682734	105.8642593	Xã	65	\N	\N
2110	Xã Yên Cư	xa-yen-cu	21.9589806	105.9582372	Xã	65	\N	\N
2113	Xã Nông Thịnh	xa-nong-thinh	21.957234	105.7996769	Xã	65	\N	\N
2116	Xã Yên Hân	xa-yen-han	21.9445053	105.9288641	Xã	65	\N	\N
2119	Xã Thanh Bình	xa-thanh-binh	21.9265172	105.8172881	Xã	65	\N	\N
2122	Xã Như Cố	xa-nhu-co	21.8946489	105.8466437	Xã	65	\N	\N
2125	Xã Bình Văn	xa-binh-van	21.9120536	105.9053689	Xã	65	\N	\N
2128	Xã Yên Đĩnh	xa-yen-dinh	21.9004041	105.7879371	Xã	65	\N	\N
2131	Xã Quảng Chu	xa-quang-chu	21.8528716	105.7996769	Xã	65	\N	\N
2134	Thị trấn Yến Lạc	thi-tran-yen-lac	22.2351473	106.1786787	Thị trấn	66	\N	\N
2137	Xã Vũ Loan	xa-vu-loan	22.3315753	106.1698563	Xã	66	\N	\N
2140	Xã Lạng San	xa-lang-san	22.2616788	106.1169299	Xã	66	\N	\N
2143	Xã Lương Thượng	xa-luong-thuong	22.2716346	106.0757749	Xã	66	\N	\N
2146	Xã Kim Hỷ	xa-kim-hy	22.2532092	106.0287512	Xã	66	\N	\N
2149	Xã Văn Học	xa-van-hoc	22.2812613	106.1522126	Xã	66	\N	\N
2152	Xã Cường Lợi	xa-cuong-loi	22.2752738	106.2110311	Xã	66	\N	\N
2155	Xã Lương Hạ	xa-luong-ha	22.1406595	106.1110501	Xã	66	\N	\N
2158	Xã Kim Lư	xa-kim-lu	22.2133893	106.1933837	Xã	66	\N	\N
2161	Xã Lương Thành	xa-luong-thanh	22.2257425	106.1286901	Xã	66	\N	\N
2164	Xã Ân Tình	xa-an-tinh	22.2073312	106.0816536	Xã	66	\N	\N
2167	Xã Lam Sơn	xa-lam-son	22.2105857	106.1639749	Xã	66	\N	\N
2170	Xã Văn Minh	xa-van-minh	22.1406595	106.1110501	Xã	66	\N	\N
2173	Xã Côn Minh	xa-con-minh	22.1397064	106.0052437	Xã	66	\N	\N
2176	Xã Cư Lễ	xa-cu-le	22.125517	106.1463317	Xã	66	\N	\N
2179	Xã Hữu Thác	xa-huu-thac	22.137829	106.0816536	Xã	66	\N	\N
2182	Xã Hảo Nghĩa	xa-hao-nghia	22.1122952	106.1051705	Xã	66	\N	\N
2185	Xã Quang Phong	xa-quang-phong	22.0910066	106.0287512	Xã	66	\N	\N
2188	Xã Dương Sơn	xa-duong-son	22.0620311	106.0794491	Xã	66	\N	\N
2191	Xã Xuân Dương	xa-xuan-duong	22.0270703	106.0743052	Xã	66	\N	\N
2194	Xã Đổng Xá	xa-dong-xa	22.0376718	106.0120615	Xã	66	\N	\N
2197	Xã Liêm Thuỷ	xa-liem-thuy	21.9704498	106.0757749	Xã	66	\N	\N
2200	Phường Phan Thiết	phuong-phan-thiet	21.8211903	105.2063172	Phường	70	\N	\N
2203	Phường Minh Xuân	phuong-minh-xuan	21.8257593	105.2164798	Phường	70	\N	\N
2206	Phường Tân Quang	phuong-tan-quang	21.8152611	105.212867	Phường	70	\N	\N
2209	Xã Tràng Đà	xa-trang-da	14.058324	108.277199	Xã	70	\N	\N
2212	Phường Nông Tiến	phuong-nong-tien	21.8143308	105.2245838	Phường	70	\N	\N
2215	Phường Ỷ La	phuong-y-la	21.8151651	105.1876157	Phường	70	\N	\N
2216	Phường Tân Hà	phuong-tan-ha	21.8295655	105.1999209	Phường	70	\N	\N
2218	Phường Hưng Thành	phuong-hung-thanh	21.8015866	105.2105348	Phường	70	\N	\N
2221	Thị trấn Nà Hang	thi-tran-na-hang	22.3622017	105.3950939	Thị trấn	72	\N	\N
2227	Xã Sinh Long	xa-sinh-long	22.5402267	105.4075401	Xã	72	\N	\N
2230	Xã Thượng Giáp	xa-thuong-giap	22.612512	105.5064087	Xã	72	\N	\N
2233	Xã Phúc Yên	xa-phuc-yen	22.4565907	105.2170589	Xã	71	\N	\N
2239	Xã Thượng Nông	xa-thuong-nong	22.5688376	105.493223	Xã	72	\N	\N
2242	Xã Xuân Lập	xa-xuan-lap	14.058324	108.277199	Xã	71	\N	\N
2245	Xã Côn Lôn	xa-con-lon	22.5368915	105.4639249	Xã	72	\N	\N
2248	Xã Yên Hoa	xa-yen-hoa	22.5029635	105.484433	Xã	72	\N	\N
2251	Xã Khuôn Hà	xa-khuon-ha	22.4565907	105.2170589	Xã	71	\N	\N
2254	Xã Hồng Thái	xa-hong-thai	14.058324	108.277199	Xã	72	\N	\N
2260	Xã Đà Vị	xa-da-vi	14.058324	108.277199	Xã	72	\N	\N
2263	Xã Khau Tinh	xa-khau-tinh	22.4664288	105.439017	Xã	72	\N	\N
2266	Xã Lăng Can	xa-lang-can	22.4565907	105.2170589	Xã	71	\N	\N
2269	Xã Thượng Lâm	xa-thuong-lam	22.4565907	105.2170589	Xã	71	\N	\N
2275	Xã Sơn Phú	xa-son-phu	22.4034428	105.5020359	Xã	72	\N	\N
2281	Xã Năng Khả	xa-nang-kha	22.3689939	105.3248269	Xã	72	\N	\N
2284	Xã Thanh Tương	xa-thanh-tuong	22.272108	105.424615	Xã	72	\N	\N
2287	Thị trấn Vĩnh Lộc	thi-tran-vinh-loc	22.1475444	105.2721456	Thị trấn	73	\N	\N
2290	Xã Bình An	xa-binh-an	22.4565907	105.2170589	Xã	71	\N	\N
2293	Xã Hồng Quang	xa-hong-quang	22.4565907	105.2170589	Xã	71	\N	\N
2296	Xã Thổ Bình	xa-tho-binh	22.4565907	105.2170589	Xã	71	\N	\N
2299	Xã Phúc Sơn	xa-phuc-son	22.2927356	105.2267944	Xã	73	\N	\N
2302	Xã Minh Quang	xa-minh-quang	22.3317808	105.1829178	Xã	73	\N	\N
2305	Xã Trung Hà	xa-trung-ha	22.2983342	105.1068925	Xã	73	\N	\N
2308	Xã Tân Mỹ	xa-tan-my	22.2502828	105.2150928	Xã	73	\N	\N
2311	Xã Hà Lang	xa-ha-lang	22.2493147	105.1412457	Xã	73	\N	\N
2314	Xã Hùng Mỹ	xa-hung-my	14.058324	108.277199	Xã	73	\N	\N
2317	Xã Yên Lập	xa-yen-lap	14.058324	108.277199	Xã	73	\N	\N
2320	Xã Tân An	xa-tan-an	22.1889049	105.2114362	Xã	73	\N	\N
2323	Xã Bình Phú	xa-binh-phu	22.183991	105.430539	Xã	73	\N	\N
2326	Xã Xuân Quang	xa-xuan-quang	22.1866115	105.2736087	Xã	73	\N	\N
2329	Xã Ngọc Hội	xa-ngoc-hoi	22.1897223	105.332145	Xã	73	\N	\N
2332	Xã Phú Bình	xa-phu-binh	22.1891466	105.3259841	Xã	73	\N	\N
2335	Xã Hòa Phú	xa-hoa-phu	22.1290509	105.1609838	Xã	73	\N	\N
2338	Xã Phúc Thịnh	xa-phuc-thinh	22.1613099	105.234227	Xã	73	\N	\N
2341	Xã Kiên Đài	xa-kien-dai	14.058324	108.277199	Xã	73	\N	\N
2344	Xã Tân Thịnh	xa-tan-thinh	22.1414934	105.2136302	Xã	73	\N	\N
2347	Xã Trung Hòa	xa-trung-hoa	22.1306765	105.2662931	Xã	73	\N	\N
2350	Xã Kim Bình	xa-kim-binh	22.0907192	105.3350723	Xã	73	\N	\N
2353	Xã Hòa An	xa-hoa-an	22.1049948	105.1847968	Xã	73	\N	\N
2356	Xã Vinh Quang	xa-vinh-quang	22.0859177	105.2940941	Xã	73	\N	\N
2359	Xã Tri Phú	xa-tri-phu	22.0577649	105.3760604	Xã	73	\N	\N
2362	Xã Nhân Lý	xa-nhan-ly	22.0572041	105.244689	Xã	73	\N	\N
2365	Xã Yên Nguyên	xa-yen-nguyen	22.0645811	105.1668326	Xã	73	\N	\N
2368	Xã Linh Phú	xa-linh-phu	22.0142256	105.4441515	Xã	73	\N	\N
2371	Xã Bình Nhân	xa-binh-nhan	22.059174	105.282424	Xã	73	\N	\N
2374	Thị trấn Tân Yên	thi-tran-tan-yen	22.0417891	105.0382076	Thị trấn	74	\N	\N
2377	Xã Yên Thuận	xa-yen-thuan	14.058324	108.277199	Xã	74	\N	\N
2380	Xã Bạch Xa	xa-bach-xa	22.2377181	104.9312189	Xã	74	\N	\N
2383	Xã Minh Khương	xa-minh-khuong	22.2261637	104.9695587	Xã	74	\N	\N
2386	Xã Yên Lâm	xa-yen-lam	22.1741088	104.938618	Xã	74	\N	\N
2389	Xã Minh Dân	xa-minh-dan	22.1874865	105.0023241	Xã	74	\N	\N
2392	Xã Phù Lưu	xa-phu-luu	22.164741	105.0133713	Xã	74	\N	\N
2395	Xã Minh Hương	xa-minh-huong	22.131281	105.0988534	Xã	74	\N	\N
2398	Xã Yên Phú	xa-yen-phu	22.0839452	105.027174	Xã	74	\N	\N
2401	Xã Tân Thành	xa-tan-thanh	22.0839452	105.027174	Xã	74	\N	\N
2404	Xã Bình Xa	xa-binh-xa	22.0573662	105.1200482	Xã	74	\N	\N
2407	Xã Thái Sơn	xa-thai-son	22.0194275	105.0908147	Xã	74	\N	\N
2410	Xã Nhân Mục	xa-nhan-muc	22.0236433	105.012068	Xã	74	\N	\N
2413	Xã Thành Long	xa-thanh-long	21.9684795	105.0488555	Xã	74	\N	\N
2416	Xã Bằng Cốc	xa-bang-coc	14.058324	108.277199	Xã	74	\N	\N
2419	Xã Thái Hòa	xa-thai-hoa	21.9718624	105.122358	Xã	74	\N	\N
2422	Xã Đức Ninh	xa-duc-ninh	21.9223826	105.1185864	Xã	74	\N	\N
2425	Xã Hùng Đức	xa-hung-duc	21.8984554	105.069809	Xã	74	\N	\N
2428	Thị trấn Tân Bình	thi-tran-tan-binh	21.6951322	105.2341082	Thị trấn	75	\N	\N
2431	Xã Quí Quân	xa-qui-quan	22.0139404	105.2231378	Xã	75	\N	\N
2434	Xã Lực Hành	xa-luc-hanh	22.0282723	105.197542	Xã	75	\N	\N
2437	Xã Kiến Thiết	xa-kien-thiet	21.9884152	105.311655	Xã	75	\N	\N
2440	Xã Trung Minh	xa-trung-minh	14.058324	108.277199	Xã	75	\N	\N
2443	Xã Chiêu Yên	xa-chieu-yen	21.9795612	105.1595216	Xã	75	\N	\N
2446	Xã Trung Trực	xa-trung-truc	21.9447986	105.2662931	Xã	75	\N	\N
2449	Xã Xuân Vân	xa-xuan-van	21.9418523	105.2239488	Xã	75	\N	\N
2452	Xã Phúc Ninh	xa-phuc-ninh	21.945163	105.180512	Xã	75	\N	\N
2455	Xã Hùng Lợi	xa-hung-loi	21.8981269	105.4668545	Xã	75	\N	\N
2458	Xã Trung Sơn	xa-trung-son	21.875644	105.4287738	Xã	75	\N	\N
2461	Xã Tân Tiến	xa-tan-tien	21.9053464	105.2918992	Xã	75	\N	\N
2464	Xã Tứ Quận	xa-tu-quan	14.058324	108.277199	Xã	75	\N	\N
2467	Xã Đạo Viện	xa-dao-vien	21.8549922	105.3636166	Xã	75	\N	\N
2470	Xã Tân Long	xa-tan-long	21.9447986	105.2662931	Xã	75	\N	\N
2473	Xã Thắng Quân	xa-thang-quan	21.8775414	105.1785307	Xã	75	\N	\N
2476	Xã Kim Quan	xa-kim-quan	21.8478858	105.4382932	Xã	75	\N	\N
2479	Xã Lang Quán	xa-lang-quan	21.9447986	105.2662931	Xã	75	\N	\N
2482	Xã Phú Thịnh	xa-phu-thinh	21.8393816	105.3138503	Xã	75	\N	\N
2485	Xã Công Đa	xa-cong-da	21.9447986	105.2662931	Xã	75	\N	\N
2488	Xã Trung Môn	xa-trung-mon	21.820531	105.1668326	Xã	75	\N	\N
2491	Xã Chân Sơn	xa-chan-son	21.9447986	105.2662931	Xã	75	\N	\N
2494	Xã Thái Bình	xa-thai-binh	21.8016575	105.2750719	Xã	75	\N	\N
2497	Xã Kim Phú	xa-kim-phu	21.7860253	105.1675622	Xã	75	\N	\N
2500	Xã Tiến Bộ	xa-tien-bo	21.7740184	105.3215115	Xã	75	\N	\N
2503	Xã An Khang	xa-an-khang	21.7827558	105.2551539	Xã	70	\N	\N
2506	Xã Mỹ Bằng	xa-my-bang	21.74943	105.0878917	Xã	75	\N	\N
2509	Xã Phú Lâm	xa-phu-lam	21.7664923	105.1317431	Xã	75	\N	\N
2512	Xã An Tường	xa-an-tuong	21.7925306	105.2179174	Xã	70	\N	\N
2515	Xã Lưỡng Vượng	xa-luong-vuong	21.7766403	105.2280485	Xã	70	\N	\N
2518	Xã Hoàng Khai	xa-hoang-khai	21.7606766	105.1903155	Xã	75	\N	\N
2521	Xã Thái Long	xa-thai-long	21.7475709	105.2408345	Xã	70	\N	\N
2524	Xã Đội Cấn	xa-doi-can	21.7278697	105.2294779	Xã	70	\N	\N
2527	Xã Nhữ Hán	xa-nhu-han	21.7217758	105.1178812	Xã	75	\N	\N
2530	Xã Nhữ Khê	xa-nhu-khe	21.7767246	105.2280196	Xã	75	\N	\N
2533	Xã Đội Bình	xa-doi-binh	21.678897	105.20965	Xã	75	\N	\N
2536	Thị trấn Sơn Dương	thi-tran-son-duong	21.6939553	105.4009508	Thị trấn	76	\N	\N
2539	Xã Trung Yên	xa-trung-yen	21.8106817	105.4362537	Xã	76	\N	\N
2542	Xã Minh Thanh	xa-minh-thanh	21.7784915	105.408626	Xã	76	\N	\N
2545	Xã Tân Trào	xa-tan-trao	21.772655	105.4434192	Xã	76	\N	\N
2548	Xã Vĩnh Lợi	xa-vinh-loi	21.753731	105.291439	Xã	76	\N	\N
2551	Xã Thượng Ấm	xa-thuong-am	21.7428303	105.3292177	Xã	76	\N	\N
2554	Xã Bình Yên	xa-binh-yen	21.7490718	105.4278705	Xã	76	\N	\N
2557	Xã Lương Thiện	xa-luong-thien	21.7413462	105.4683075	Xã	76	\N	\N
2560	Xã Tú Thịnh	xa-tu-thinh	21.7181641	105.4027126	Xã	76	\N	\N
2563	Xã Cấp Tiến	xa-cap-tien	21.717529	105.299593	Xã	76	\N	\N
2566	Xã Hợp Thành	xa-hop-thanh	21.6980886	105.4290416	Xã	76	\N	\N
2569	Xã Phúc Ứng	xa-phuc-ung	21.6624361	105.3658125	Xã	76	\N	\N
2572	Xã Đông Thọ	xa-dong-tho	21.6602978	105.285859	Xã	76	\N	\N
2575	Xã Kháng Nhật	xa-khang-nhat	14.058324	108.277199	Xã	76	\N	\N
2578	Xã Hợp Hòa	xa-hop-hoa	21.6198179	105.4284306	Xã	76	\N	\N
2581	Xã Thanh Phát	xa-thanh-phat	14.058324	108.277199	Xã	76	\N	\N
2584	Xã Quyết Thắng	xa-quyet-thang	21.630441	105.240159	Xã	76	\N	\N
2587	Xã Đồng Quý	xa-dong-quy	21.627512	105.2816563	Xã	76	\N	\N
2590	Xã Tuân Lộ	xa-tuan-lo	21.6074504	105.4047498	Xã	76	\N	\N
2593	Xã Vân Sơn	xa-van-son	21.595638	105.25255	Xã	76	\N	\N
2596	Xã Văn Phú	xa-van-phu	21.5828034	105.284532	Xã	76	\N	\N
2599	Xã Chi Thiết	xa-chi-thiet	21.5865611	105.3052814	Xã	76	\N	\N
2602	Xã Đông Lợi	xa-dong-loi	14.058324	108.277199	Xã	76	\N	\N
2605	Xã Thiện Kế	xa-thien-ke	21.5700967	105.4670334	Xã	76	\N	\N
2608	Xã Hồng Lạc	xa-hong-lac	21.5571903	105.2836776	Xã	76	\N	\N
2611	Xã Phú Lương	xa-phu-luong	21.5417598	105.3714488	Xã	76	\N	\N
2614	Xã Ninh Lai	xa-ninh-lai	21.5457643	105.494688	Xã	76	\N	\N
2617	Xã Đại Phú	xa-dai-phu	21.5412815	105.4346318	Xã	76	\N	\N
2620	Xã Sơn Nam	xa-son-nam	21.5591277	105.458059	Xã	76	\N	\N
2623	Xã Hào Phú	xa-hao-phu	14.058324	108.277199	Xã	76	\N	\N
2626	Xã Tam Đa	xa-tam-da	21.5333151	105.3463984	Xã	76	\N	\N
2629	Xã Sầm Dương	xa-sam-duong	21.542743	105.298607	Xã	76	\N	\N
2632	Xã Lâm Xuyên	xa-lam-xuyen	21.5198221	105.3153138	Xã	76	\N	\N
2635	Phường Duyên Hải	phuong-duyen-hai	22.4978735	103.957908	Phường	80	\N	\N
2638	Phường Lào Cai	phuong-lao-cai	22.5138922	103.9912742	Phường	80	\N	\N
2641	Phường Phố Mới	phuong-pho-moi	22.5011536	103.9869216	Phường	80	\N	\N
2644	Phường Cốc Lếu	phuong-coc-leu	22.4955228	103.9680621	Phường	80	\N	\N
2647	Phường Kim Tân	phuong-kim-tan	22.4806866	103.9709634	Phường	80	\N	\N
2650	Phường Bắc Lệnh	phuong-bac-lenh	22.4291256	104.0101369	Phường	80	\N	\N
2653	Phường Pom Hán	phuong-pom-han	22.416951	104.0159413	Phường	80	\N	\N
2656	Phường Xuân Tăng	phuong-xuan-tang	22.413882	104.050773	Phường	80	\N	\N
2658	Phường Bình Minh	phuong-binh-minh	22.4334238	104.0275509	Phường	80	\N	\N
2659	Phường Thống Nhất	phuong-thong-nhat	22.3977181	104.0522245	Phường	80	\N	\N
2662	Xã Đồng Tuyển	xa-dong-tuyen	22.4903979	103.9434035	Xã	80	\N	\N
2665	Xã Vạn Hoà	xa-van-hoa	22.4726087	104.0130391	Xã	80	\N	\N
2668	Phường Bắc Cường	phuong-bac-cuong	22.4640098	103.9782169	Phường	80	\N	\N
2671	Phường Nam Cường	phuong-nam-cuong	22.4423213	103.9927251	Phường	80	\N	\N
2674	Xã Cam Đường	xa-cam-duong	22.4016052	104.0246484	Xã	80	\N	\N
2677	Xã Tả Phời	xa-ta-phoi	22.3790613	103.9492051	Xã	80	\N	\N
2680	Xã Hợp Thành	xa-hop-thanh	22.3676345	104.0130391	Xã	80	\N	\N
2683	Thị trấn Bát Xát	thi-tran-bat-xat	22.5389776	103.8883003	Thị trấn	82	\N	\N
2686	Xã A Mú Sung	xa-a-mu-sung	22.7500678	103.6420599	Xã	82	\N	\N
2689	Xã Nậm Chạc	xa-nam-chac	22.7067016	103.6710059	Xã	82	\N	\N
2692	Xã A Lù	xa-a-lu	22.707363	103.5957596	Xã	82	\N	\N
2695	Xã Trịnh Tường	xa-trinh-tuong	22.682005	103.7187955	Xã	82	\N	\N
2698	Xã Ngải Thầu	xa-ngai-thau	22.6798448	103.6102267	Xã	82	\N	\N
2701	Xã Y Tý	xa-y-ty	22.6581067	103.6139156	Xã	82	\N	\N
2704	Xã Cốc Mỳ	xa-coc-my	22.6072915	103.7405019	Xã	82	\N	\N
2707	Xã Dền Sáng	xa-den-sang	22.5833618	103.6702218	Xã	82	\N	\N
2710	Xã Bản Vược	xa-ban-vuoc	22.5959129	103.8042382	Xã	82	\N	\N
2713	Xã Sàng Ma Sáo	xa-sang-ma-sao	22.5472384	103.6246954	Xã	82	\N	\N
2716	Xã Bản Qua	xa-ban-qua	22.5505176	103.8564085	Xã	82	\N	\N
2719	Xã Mường Vi	xa-muong-vi	22.5502398	103.7926475	Xã	82	\N	\N
2722	Xã Dền Thàng	xa-den-thang	22.5695191	103.690517	Xã	82	\N	\N
2725	Xã Bản Xèo	xa-ban-xeo	22.5309179	103.7462948	Xã	82	\N	\N
2728	Xã Mường Hum	xa-muong-hum	22.5287808	103.7086241	Xã	82	\N	\N
2731	Xã Trung Lèng Hồ	xa-trung-leng-ho	22.4855789	103.6543612	Xã	82	\N	\N
2734	Xã Quang Kim	xa-quang-kim	22.5061307	103.8969993	Xã	82	\N	\N
2737	Xã Pa Cheo	xa-pa-cheo	22.5013063	103.7408696	Xã	82	\N	\N
2740	Xã Nậm Pung	xa-nam-pung	22.4926066	103.7252965	Xã	82	\N	\N
2743	Xã Phìn Ngan	xa-phin-ngan	22.4805044	103.8564085	Xã	82	\N	\N
2746	Xã Cốc San	xa-coc-san	22.4564163	103.931801	Xã	82	\N	\N
2749	Xã Tòng Sành	xa-tong-sanh	22.4467791	103.9085989	Xã	82	\N	\N
2752	Xã Pha Long	xa-pha-long	22.8036744	104.222154	Xã	83	\N	\N
2755	Xã Tả Ngải Chồ	xa-ta-ngai-cho	22.8068284	104.1872801	Xã	83	\N	\N
2758	Xã Tung Chung Phố	xa-tung-chung-pho	22.7760523	104.1407948	Xã	83	\N	\N
2761	Thị trấn Mường Khương	thi-tran-muong-khuong	22.7675252	104.1059408	Thị trấn	83	\N	\N
2764	Xã Dìn Chin	xa-din-chin	22.7793157	104.2337805	Xã	83	\N	\N
2767	Xã Tả Gia Khâu	xa-ta-gia-khau	22.7443567	104.2337805	Xã	83	\N	\N
2770	Xã Nậm Chảy	xa-nam-chay	22.7017265	104.0594822	Xã	83	\N	\N
2773	Xã Nấm Lư	xa-nam-lu	22.7294263	104.1407948	Xã	83	\N	\N
2776	Xã Lùng Khấu Nhin	xa-lung-khau-nhin	22.7050697	104.1524147	Xã	83	\N	\N
2779	Xã Thanh Bình	xa-thanh-binh	22.6933056	104.088517	Xã	83	\N	\N
2782	Xã Cao Sơn	xa-cao-son	22.6404366	104.158225	Xã	83	\N	\N
2785	Xã Lùng Vai	xa-lung-vai	22.6233499	104.088517	Xã	83	\N	\N
2788	Xã Bản Lầu	xa-ban-lau	22.5808368	104.0420642	Xã	83	\N	\N
2791	Xã La Pan Tẩn	xa-la-pan-tan	22.5725698	104.1349852	Xã	83	\N	\N
2794	Xã Tả Thàng	xa-ta-thang	22.5917268	104.1814686	Xã	83	\N	\N
2797	Xã Bản Sen	xa-ban-sen	22.5703641	104.0943247	Xã	83	\N	\N
2800	Xã Nàn Sán	xa-nan-san	22.7178936	104.2686658	Xã	84	\N	\N
2803	Xã Thào Chư Phìn	xa-thao-chu-phin	22.7002258	104.1981773	Xã	84	\N	\N
2806	Xã Bản Mế	xa-ban-me	22.677342	104.2257872	Xã	84	\N	\N
2809	Xã Si Ma Cai	xa-si-ma-cai	22.6994535	104.2851233	Xã	84	\N	\N
2812	Xã Sán Chải	xa-san-chai	22.689038	104.3029577	Xã	84	\N	\N
2815	Xã Mản Thẩn	xa-man-than	22.6659966	104.2477614	Xã	84	\N	\N
2818	Xã Lùng Sui	xa-lung-sui	22.6555512	104.3340931	Xã	84	\N	\N
2821	Xã Cán Cấu	xa-can-cau	22.6331701	104.3035595	Xã	84	\N	\N
2824	Xã Sín Chéng	xa-sin-cheng	22.6479275	104.2127081	Xã	84	\N	\N
2827	Xã Cán Hồ	xa-can-ho	22.6603759	104.2966528	Xã	84	\N	\N
2830	Xã Quan Thần Sán	xa-quan-than-san	22.6363201	104.2606705	Xã	84	\N	\N
2833	Xã Lử Thẩn	xa-lu-than	22.6659966	104.2477614	Xã	84	\N	\N
2836	Xã Nàn Xín	xa-nan-xin	22.6211811	104.2185209	Xã	84	\N	\N
2839	Thị trấn Bắc Hà	thi-tran-bac-ha	22.5383534	104.2890194	Thị trấn	85	\N	\N
2842	Xã Lùng Cải	xa-lung-cai	22.6490698	104.3850107	Xã	85	\N	\N
2845	Xã Bản Già	xa-ban-gia	22.6227272	104.3944678	Xã	85	\N	\N
2848	Xã Lùng Phình	xa-lung-phinh	22.5934534	104.3250657	Xã	85	\N	\N
2851	Xã Tả Van Chư	xa-ta-van-chu	22.6007176	104.2839307	Xã	85	\N	\N
2854	Xã Tả Củ Tỷ	xa-ta-cu-ty	22.5999426	104.4526787	Xã	85	\N	\N
2857	Xã Thải Giàng Phố	xa-thai-giang-pho	22.5323204	104.3087724	Xã	85	\N	\N
2860	Xã Lầu Thí Ngài	xa-lau-thi-ngai	14.058324	108.277199	Xã	85	\N	\N
2863	Xã Hoàng Thu Phố	xa-hoang-thu-pho	22.5630763	104.2490418	Xã	85	\N	\N
2866	Xã Bản Phố	xa-ban-pho	14.058324	108.277199	Xã	85	\N	\N
2869	Xã Bản Liền	xa-ban-lien	22.5217291	104.4002879	Xã	85	\N	\N
2872	Xã Tà Chải	xa-ta-chai	14.058324	108.277199	Xã	85	\N	\N
2875	Xã Na Hối	xa-na-hoi	14.058324	108.277199	Xã	85	\N	\N
2878	Xã Cốc Ly	xa-coc-ly	22.5129137	104.1974455	Xã	85	\N	\N
2881	Xã Nậm Mòn	xa-nam-mon	22.4988571	104.2584901	Xã	85	\N	\N
2884	Xã Nậm Đét	xa-nam-det	22.4650364	104.3348255	Xã	85	\N	\N
2887	Xã Nậm Khánh	xa-nam-khanh	22.4802853	104.3597907	Xã	85	\N	\N
2890	Xã Bảo Nhai	xa-bao-nhai	22.4187548	104.2616647	Xã	85	\N	\N
2893	Xã Nậm Lúc	xa-nam-luc	22.4328763	104.3522793	Xã	85	\N	\N
2896	Xã Cốc Lầu	xa-coc-lau	14.058324	108.277199	Xã	85	\N	\N
2899	Xã Bản Cái	xa-ban-cai	22.377701	104.3988328	Xã	85	\N	\N
2902	Thị trấn N.T Phong Hải	Thị trấn N.T Phong Hải	22.4793008	104.1349852	Thị trấn	86	\N	\N
2905	Thị trấn Phố Lu	thi-tran-pho-lu	22.3217635	104.1858272	Thị trấn	86	\N	\N
2908	Thị trấn Tằng Loỏng	thi-tran-tang-loong	22.3330003	104.124819	Thị trấn	86	\N	\N
2911	Xã Bản Phiệt	xa-ban-phiet	22.5065737	104.0246484	Xã	86	\N	\N
2914	Xã Bản Cầm	xa-ban-cam	22.5062139	104.0863392	Xã	86	\N	\N
2917	Xã Thái Niên	xa-thai-nien	22.4033881	104.0870651	Xã	86	\N	\N
2920	Xã Phong Niên	xa-phong-nien	22.3916552	104.2271276	Xã	86	\N	\N
2923	Xã Gia Phú	xa-gia-phu	22.3723449	104.0754506	Xã	86	\N	\N
2926	Xã Xuân Quang	xa-xuan-quang	22.3658377	104.2582271	Xã	86	\N	\N
2929	Xã Sơn Hải	xa-son-hai	14.058324	108.277199	Xã	86	\N	\N
2932	Xã Xuân Giao	xa-xuan-giao	22.3266996	104.1466046	Xã	86	\N	\N
2935	Xã Trì Quang	xa-tri-quang	22.3233932	104.2386138	Xã	86	\N	\N
2938	Xã Sơn Hà	xa-son-ha	22.3266996	104.1466046	Xã	86	\N	\N
2941	Xã Phố Lu	xa-pho-lu	22.2998496	104.2192475	Xã	86	\N	\N
2944	Xã Phú Nhuận	xa-phu-nhuan	22.259193	104.1775958	Xã	86	\N	\N
2947	Thị trấn Phố Ràng	thi-tran-pho-rang	22.2445777	104.4781532	Thị trấn	87	\N	\N
2950	Xã Tân Tiến	xa-tan-tien	22.4300022	104.4323023	Xã	87	\N	\N
2953	Xã Nghĩa Đô	xa-nghia-do	22.3868629	104.4652154	Xã	87	\N	\N
2956	Xã Vĩnh Yên	xa-vinh-yen	22.3561526	104.491984	Xã	87	\N	\N
2959	Xã Điện Quan	xa-dien-quan	22.3072208	104.3486429	Xã	87	\N	\N
2962	Xã Xuân Hoà	xa-xuan-hoa	22.3269036	104.5174652	Xã	87	\N	\N
2965	Xã Tân Dương	xa-tan-duong	22.2906342	104.4679629	Xã	87	\N	\N
2968	Xã Thượng Hà	xa-thuong-ha	22.2794695	104.3981053	Xã	87	\N	\N
2971	Xã Kim Sơn	xa-kim-son	22.2433916	104.3118972	Xã	87	\N	\N
2974	Xã Cam Cọn	xa-cam-con	22.237237	104.279088	Xã	87	\N	\N
2977	Xã Minh Tân	xa-minh-tan	22.2571691	104.3959187	Xã	87	\N	\N
2980	Xã Xuân Thượng	xa-xuan-thuong	22.2354144	104.5108145	Xã	87	\N	\N
2983	Xã Việt Tiến	xa-viet-tien	22.1977423	104.5932063	Xã	87	\N	\N
2986	Xã Yên Sơn	xa-yen-son	22.2127882	104.4432179	Xã	87	\N	\N
2989	Xã Bảo Hà	xa-bao-ha	22.2021136	104.367553	Xã	87	\N	\N
2992	Xã Lương Sơn	xa-luong-son	14.058324	108.277199	Xã	87	\N	\N
2995	Xã Long Phúc	xa-long-phuc	22.1847776	104.543679	Xã	87	\N	\N
2998	Xã Long Khánh	xa-long-khanh	22.1509963	104.555793	Xã	87	\N	\N
3001	Thị trấn Sa Pa	thi-tran-sa-pa	22.3363608	103.8437852	Thị trấn	88	\N	\N
3004	Xã Bản Khoang	xa-ban-khoang	22.4378556	103.8100339	Xã	88	\N	\N
3007	Xã Tả Giàng Phình	xa-ta-giang-phinh	22.4442454	103.7615025	Xã	88	\N	\N
3010	Xã Trung Chải	xa-trung-chai	22.4064486	103.902799	Xã	88	\N	\N
3013	Xã Tả Phìn	xa-ta-phin	22.3944941	103.8390162	Xã	88	\N	\N
3016	Xã Sa Pả	xa-sa-pa	22.3564642	103.8738031	Xã	88	\N	\N
3019	Xã San Sả Hồ	xa-san-sa-ho	22.3211414	103.8100339	Xã	88	\N	\N
3022	Xã Bản Phùng	xa-ban-phung	22.308735	103.971927	Xã	88	\N	\N
3025	Xã Hầu Thào	xa-hau-thao	22.3194416	103.8969993	Xã	88	\N	\N
3028	Xã Lao Chải	xa-lao-chai	22.2874523	103.8622065	Xã	88	\N	\N
3031	Xã Thanh Kim	xa-thanh-kim	22.308735	103.971927	Xã	88	\N	\N
3034	Xã Suối Thầu	xa-suoi-thau	14.058324	108.277199	Xã	88	\N	\N
3037	Xã Sử Pán	xa-su-pan	22.285912	103.9303507	Xã	88	\N	\N
3040	Xã Tả Van	xa-ta-van	22.302707	103.890074	Xã	88	\N	\N
3043	Xã Thanh Phú	xa-thanh-phu	22.2568107	103.9882102	Xã	88	\N	\N
3046	Xã Bản Hồ	xa-ban-ho	22.2206421	103.940068	Xã	88	\N	\N
3049	Xã Nậm Sài	xa-nam-sai	22.238248	104.0086859	Xã	88	\N	\N
3052	Xã Nậm Cang	xa-nam-cang	22.1836964	104.0239228	Xã	88	\N	\N
3055	Thị trấn Khánh Yên	thi-tran-khanh-yen	22.102277	104.245408	Thị trấn	89	\N	\N
3058	Xã Văn Sơn	xa-van-son	22.0894109	104.1930918	Xã	89	\N	\N
3061	Xã Võ Lao	xa-vo-lao	22.2152956	104.2032629	Xã	89	\N	\N
3064	Xã Sơn Thuỷ	xa-son-thuy	22.1575075	104.291551	Xã	89	\N	\N
3067	Xã Nậm Mả	xa-nam-ma	14.058324	108.277199	Xã	89	\N	\N
3070	Xã Tân Thượng	xa-tan-thuong	14.058324	108.277199	Xã	89	\N	\N
3073	Xã Nậm Rạng	xa-nam-rang	22.0894109	104.1930918	Xã	89	\N	\N
3076	Xã Nậm Chầy	xa-nam-chay	22.1246764	104.0819837	Xã	89	\N	\N
3079	Xã Tân An	xa-tan-an	22.2152956	104.2032629	Xã	89	\N	\N
3082	Xã Khánh Yên Thượng	xa-khanh-yen-thuong	22.0853895	104.2715733	Xã	89	\N	\N
3085	Xã Nậm Xé	xa-nam-xe	22.0567613	104.0206576	Xã	89	\N	\N
3088	Xã Dần Thàng	xa-dan-thang	22.079575	104.1059408	Xã	89	\N	\N
3091	Xã Chiềng Ken	xa-chieng-ken	14.058324	108.277199	Xã	89	\N	\N
3094	Xã Làng Giàng	xa-lang-giang	22.0892702	104.2359606	Xã	89	\N	\N
3097	Xã Hoà Mạc	xa-hoa-mac	22.0840936	104.1872801	Xã	89	\N	\N
3100	Xã Khánh Yên Trung	xa-khanh-yen-trung	22.0853895	104.2715733	Xã	89	\N	\N
3103	Xã Khánh Yên Hạ	xa-khanh-yen-ha	22.0568948	104.3140805	Xã	89	\N	\N
3106	Xã Dương Quỳ	xa-duong-quy	22.0550671	104.1444259	Xã	89	\N	\N
3109	Xã Nậm Tha	xa-nam-tha	22.007843	104.3855882	Xã	89	\N	\N
3112	Xã Minh Lương	xa-minh-luong	22.0189793	104.0652887	Xã	89	\N	\N
3115	Xã Thẩm Dương	xa-tham-duong	22.0422122	104.1081189	Xã	89	\N	\N
3118	Xã Liêm Phú	xa-liem-phu	22.0092333	104.3253723	Xã	89	\N	\N
3121	Xã Nậm Xây	xa-nam-xay	14.058324	108.277199	Xã	89	\N	\N
3124	Phường Noong Bua	phuong-noong-bua	21.388961	103.0328135	Phường	94	\N	\N
3127	Phường Him Lam	phuong-him-lam	21.4065102	103.0328135	Phường	94	\N	\N
3130	Phường Thanh Bình	phuong-thanh-binh	21.4042724	103.0054527	Phường	94	\N	\N
3133	Phường Tân Thanh	phuong-tan-thanh	21.3943667	103.0198524	Phường	94	\N	\N
3136	Phường Mường Thanh	phuong-muong-thanh	21.3858179	103.0169723	Phường	94	\N	\N
3139	Phường Nam Thanh	phuong-nam-thanh	21.3723164	103.0212924	Phường	94	\N	\N
3142	Phường Thanh Trường	phuong-thanh-truong	21.4033746	102.9982535	Phường	94	\N	\N
3144	Xã Tà Lèng	xa-ta-leng	21.3943321	103.0760273	Xã	94	\N	\N
3145	Xã Thanh Minh	xa-thanh-minh	21.4312455	103.052978	Xã	94	\N	\N
3148	Phường Sông Đà	phuong-song-da	22.0691194	103.1221388	Phường	95	\N	\N
3151	Phường Na Lay	phuong-na-lay	22.0321571	103.145201	Phường	95	\N	\N
3154	Xã Sín Thầu	xa-sin-thau	22.3801847	102.220463	Xã	96	\N	\N
3155	Xã Sen Thượng	xa-sen-thuong	22.45435	102.3234816	Xã	96	\N	\N
3156	Xã Nậm Tin	xa-nam-tin	14.058324	108.277199	Xã	103	\N	\N
3157	Xã Chung Chải	xa-chung-chai	22.2741168	102.3807553	Xã	96	\N	\N
3158	Xã Leng Su Sìn	xa-leng-su-sin	22.3171921	102.2776838	Xã	96	\N	\N
3159	Xã Pá Mỳ	xa-pa-my	22.1144377	102.6488305	Xã	96	\N	\N
3160	Xã Mường Nhé	xa-muong-nhe	22.1659856	102.4151335	Xã	96	\N	\N
3161	Xã Nậm Vì	xa-nam-vi	22.216599	102.5183307	Xã	96	\N	\N
3162	Xã Nậm Kè	xa-nam-ke	22.1013219	102.644587	Xã	96	\N	\N
3163	Xã Mường Toong	xa-muong-toong	22.1607859	102.6331035	Xã	96	\N	\N
3164	Xã Quảng Lâm	xa-quang-lam	22.0202251	102.6331035	Xã	96	\N	\N
3165	Xã Pa Tần	xa-pa-tan	14.058324	108.277199	Xã	103	\N	\N
3166	Xã Chà Cang	xa-cha-cang	14.058324	108.277199	Xã	103	\N	\N
3167	Xã Na Cô Sa	xa-na-co-sa	14.058324	108.277199	Xã	103	\N	\N
3168	Xã Nà Khoa	xa-na-khoa	21.8075872	102.766137	Xã	103	\N	\N
3169	Xã Nà Hỳ	xa-na-hy	21.8075872	102.766137	Xã	103	\N	\N
3170	Xã Nà Bủng	xa-na-bung	21.8075872	102.766137	Xã	103	\N	\N
3171	Xã Nậm Nhừ	xa-nam-nhu	14.058324	108.277199	Xã	103	\N	\N
3172	Thị Trấn Mường Chà	thi-tran-muong-cha	21.7560657	103.0875535	Thị trấn	97	\N	\N
3173	Xã Nậm Chua	xa-nam-chua	14.058324	108.277199	Xã	103	\N	\N
3174	Xã Nậm Khăn	xa-nam-khan	14.058324	108.277199	Xã	103	\N	\N
3175	Xã Chà Tở	xa-cha-to	14.058324	108.277199	Xã	103	\N	\N
3176	Xã Vàng Đán	xa-vang-dan	14.058324	108.277199	Xã	103	\N	\N
3177	Xã Huổi Lếnh	xa-huoi-lenh	22.1521589	102.6489936	Xã	96	\N	\N
3178	Xã Xá Tổng	xa-xa-tong	21.9983939	103.2086442	Xã	97	\N	\N
3181	Xã Mường Tùng	xa-muong-tung	21.9748094	103.0587399	Xã	97	\N	\N
3184	Xã Lay Nưa	xa-lay-nua	22.0052523	103.1163739	Xã	95	\N	\N
3187	Xã Chà Nưa	xa-cha-nua	14.058324	108.277199	Xã	103	\N	\N
3190	Xã Hừa Ngài	xa-hua-ngai	21.7764982	103.1971067	Xã	97	\N	\N
3191	Xã Huổi Mí	xa-huoi-mi	21.6039	103.0254999	Xã	97	\N	\N
3193	Xã Pa Ham	xa-pa-ham	21.9004468	103.254805	Xã	97	\N	\N
3194	Xã Nậm Nèn	xa-nam-nen	21.8456782	103.2899407	Xã	97	\N	\N
3196	Xã Huổi Lèng	xa-huoi-leng	21.8882781	103.1163739	Xã	97	\N	\N
3197	Xã Sa Lông	xa-sa-long	21.818093	103.1163739	Xã	97	\N	\N
3198	Xã Phìn Hồ	xa-phin-ho	14.058324	108.277199	Xã	103	\N	\N
3199	Xã Si Pa Phìn	xa-si-pa-phin	14.058324	108.277199	Xã	103	\N	\N
3200	Xã Ma Thì Hồ	xa-ma-thi-ho	21.7912958	103.0126523	Xã	97	\N	\N
3201	Xã Na Sang	xa-na-sang	21.7048026	103.0702646	Xã	97	\N	\N
3202	Xã Mường Mươn	xa-muong-muon	21.666667	103.066667	Xã	97	\N	\N
3203	Thị trấn Điện Biên Đông	thi-tran-dien-bien-dong	21.2975861	103.2251698	Thị trấn	101	\N	\N
3205	Xã Na Son	xa-na-son	21.341053	103.2317225	Xã	101	\N	\N
3208	Xã Phì Nhừ	xa-phi-nhu	21.3013724	103.2894368	Xã	101	\N	\N
3211	Xã Chiềng Sơ	xa-chieng-so	21.3047164	103.393389	Xã	101	\N	\N
3214	Xã Mường Luân	xa-muong-luan	21.2383069	103.3471775	Xã	101	\N	\N
3217	Thị trấn Tủa Chùa	thi-tran-tua-chua	21.856289	103.3413048	Thị trấn	98	\N	\N
3220	Xã Huổi Só	xa-huoi-so	22.0255098	103.4396172	Xã	98	\N	\N
3223	Xã Xín Chải	xa-xin-chai	22.0925635	103.3356272	Xã	98	\N	\N
3226	Xã Tả Sìn Thàng	xa-ta-sin-thang	22.033163	103.3471775	Xã	98	\N	\N
3229	Xã Lao Xả Phình	xa-lao-xa-phinh	22.0135859	103.3009828	Xã	98	\N	\N
3232	Xã Tả Phìn	xa-ta-phin	21.9845011	103.3702811	Xã	98	\N	\N
3235	Xã Tủa Thàng	xa-tua-thang	21.9553932	103.4396172	Xã	98	\N	\N
3238	Xã Trung Thu	xa-trung-thu	21.920058	103.3009828	Xã	98	\N	\N
3241	Xã Sính Phình	xa-sinh-phinh	21.9162693	103.3471775	Xã	98	\N	\N
3244	Xã Sáng Nhè	xa-sang-nhe	21.8638109	103.416501	Xã	98	\N	\N
3247	Xã Mường Đun	xa-muong-dun	21.8833634	103.4627375	Xã	98	\N	\N
3250	Xã Mường Báng	xa-muong-bang	21.8227534	103.3471775	Xã	98	\N	\N
3253	Thị trấn Tuần Giáo	thi-tran-tuan-giao	21.5875872	103.4191322	Thị trấn	99	\N	\N
3256	Thị trấn Mường Ảng	thi-tran-muong-ang	21.5205242	103.217298	Thị trấn	102	\N	\N
3259	Xã Phình Sáng	xa-phinh-sang	21.8006105	103.4742993	Xã	99	\N	\N
3260	Xã Rạng Đông	xa-rang-dong	21.756294	103.436005	Xã	99	\N	\N
3262	Xã Mùn Chung	xa-mun-chung	21.7741053	103.3702811	Xã	99	\N	\N
3263	Xã Nà Tòng	xa-na-tong	14.058324	108.277199	Xã	99	\N	\N
3265	Xã Ta Ma	xa-ta-ma	21.7140421	103.5321234	Xã	99	\N	\N
3268	Xã Mường Mùn	xa-muong-mun	21.7222472	103.2894368	Xã	99	\N	\N
3269	Xã Pú Xi	xa-pu-xi	14.058324	108.277199	Xã	99	\N	\N
3271	Xã Pú Nhung	xa-pu-nhung	21.6963966	103.4627375	Xã	99	\N	\N
3274	Xã Quài Nưa	xa-quai-nua	21.6477554	103.485862	Xã	99	\N	\N
3277	Xã Mường Thín	xa-muong-thin	21.6357221	103.3471775	Xã	99	\N	\N
3280	Xã Tỏa Tình	xa-toa-tinh	21.5991175	103.5089907	Xã	99	\N	\N
3283	Xã Nà Sáy	xa-na-say	21.6413415	103.2778918	Xã	99	\N	\N
3284	Xã Mường Khong	xa-muong-khong	14.058324	108.277199	Xã	99	\N	\N
3286	Xã Mường Đăng	xa-muong-dang	21.5804612	103.1625005	Xã	102	\N	\N
3287	Xã Ngối Cáy	xa-ngoi-cay	21.6001521	103.2086442	Xã	102	\N	\N
3289	Xã Quài Cang	xa-quai-cang	21.6300704	103.416501	Xã	99	\N	\N
3292	Xã Ẳng Tở	xa-ang-to	21.5730524	103.254805	Xã	102	\N	\N
3295	Xã Quài Tở	xa-quai-to	21.5561737	103.4627375	Xã	99	\N	\N
3298	Xã Chiềng Sinh	xa-chieng-sinh	21.5257228	103.3630795	Xã	99	\N	\N
3299	Xã Chiềng Đông	xa-chieng-dong	21.5262491	103.365984	Xã	99	\N	\N
3301	Xã Búng Lao	xa-bung-lao	21.5225637	103.3009828	Xã	102	\N	\N
3302	Xã Xuân Lao	xa-xuan-lao	21.4486965	103.3471775	Xã	102	\N	\N
3304	Xã Tênh Phông	xa-tenh-phong	21.4952031	103.4222797	Xã	99	\N	\N
3307	Xã Ẳng Nưa	xa-ang-nua	21.5084459	103.1855702	Xã	102	\N	\N
3310	Xã Ẳng Cang	xa-ang-cang	21.4598252	103.2086442	Xã	102	\N	\N
3312	Xã Nặm Lịch	xa-nam-lich	21.4624387	103.249034	Xã	102	\N	\N
3313	Xã Mường Lạn	xa-muong-lan	21.4524203	103.3009828	Xã	102	\N	\N
3316	Xã Nà Tấu	xa-na-tau	21.5355189	103.139435	Xã	100	\N	\N
3317	Xã Nà Nhạn	xa-na-nhan	21.4942231	103.0702646	Xã	100	\N	\N
3319	Xã Mường Pồn	xa-muong-pon	21.5572764	103.0126523	Xã	100	\N	\N
3322	Xã Thanh Nưa	xa-thanh-nua	21.4564909	102.9550673	Xã	100	\N	\N
3323	Xã Hua Thanh	xa-hua-thanh	14.058324	108.277199	Xã	100	\N	\N
3325	Xã Mường Phăng	xa-muong-phang	21.4437795	103.1163739	Xã	100	\N	\N
3326	Xã Pá Khoang	xa-pa-khoang	21.4338875	103.1120504	Xã	100	\N	\N
3328	Xã Thanh Luông	xa-thanh-luong	21.4114802	102.932041	Xã	100	\N	\N
3331	Xã Thanh Hưng	xa-thanh-hung	21.3781755	102.9838564	Xã	100	\N	\N
3334	Xã Thanh Xương	xa-thanh-xuong	21.3619585	103.041455	Xã	100	\N	\N
3337	Xã Thanh Chăn	xa-thanh-chan	21.3691734	102.9493104	Xã	100	\N	\N
3340	Xã Pa Thơm	xa-pa-thom	21.2763939	102.8629885	Xã	100	\N	\N
3343	Xã Thanh An	xa-thanh-an	21.3385605	103.041455	Xã	100	\N	\N
3346	Xã Thanh Yên	xa-thanh-yen	21.3439722	102.97234	Xã	100	\N	\N
3349	Xã Noong Luống	xa-noong-luong	21.2971673	102.97234	Xã	100	\N	\N
3352	Xã Noọng Hẹt	xa-noong-het	21.3129156	103.0328135	Xã	100	\N	\N
3355	Xã Sam Mứn	xa-sam-mun	21.2656703	103.0011331	Xã	100	\N	\N
3356	Xã Pom Lót	xa-pom-lot	21.2909367	103.0117077	Xã	100	\N	\N
3358	Xã Núa Ngam	xa-nua-ngam	21.2386711	103.0472164	Xã	100	\N	\N
3359	Xã Hẹ Muông	xa-he-muong	14.058324	108.277199	Xã	100	\N	\N
3361	Xã Na Ư	xa-na-u	21.2008352	102.932041	Xã	100	\N	\N
3364	Xã Mường Nhà	xa-muong-nha	21.1324919	103.0587399	Xã	100	\N	\N
3365	Xã Na Tông	xa-na-tong	21.1608848	103.0860679	Xã	100	\N	\N
3367	Xã Mường Lói	xa-muong-loi	20.9813423	103.1971067	Xã	100	\N	\N
3368	Xã Phu Luông	xa-phu-luong	21.4091695	103.0370252	Xã	100	\N	\N
3370	Xã Pú Nhi	xa-pu-nhi	21.3699455	103.1625005	Xã	101	\N	\N
3371	Xã Nong U	xa-nong-u	21.3034214	103.1163739	Xã	101	\N	\N
3373	Xã Xa Dung	xa-xa-dung	21.3800997	103.2962221	Xã	101	\N	\N
3376	Xã Keo Lôm	xa-keo-lom	21.2188263	103.1509672	Xã	101	\N	\N
3379	Xã Luân Giới	xa-luan-gioi	21.2112265	103.393389	Xã	101	\N	\N
3382	Xã Phình Giàng	xa-phinh-giang	21.1773663	103.2317225	Xã	101	\N	\N
3383	Xã Pú Hồng	xa-pu-hong	21.0748742	103.1971067	Xã	101	\N	\N
3384	Xã Tìa Dình	xa-tia-dinh	21.1214333	103.3471775	Xã	101	\N	\N
3385	Xã Háng Lìa	xa-hang-lia	21.1700257	103.324078	Xã	101	\N	\N
3386	Phường Quyết Thắng	phuong-quyet-thang	22.4026064	103.4367274	Phường	105	\N	\N
3387	Phường Tân Phong	phuong-tan-phong	22.3879997	103.4714087	Phường	105	\N	\N
3388	Phường Quyết Tiến	phuong-quyet-tien	22.3987687	103.4470242	Phường	105	\N	\N
3389	Phường Đoàn Kết	phuong-doan-ket	22.3975437	103.4566145	Phường	105	\N	\N
3390	Thị trấn Tam Đường	thi-tran-tam-duong	22.3316943	103.6189078	Thị trấn	106	\N	\N
3391	Xã Lả Nhì Thàng	xa-la-nhi-thang	22.4670816	103.3674323	Xã	109	\N	\N
3394	Xã Thèn Sin	xa-then-sin	22.4675946	103.4627375	Xã	106	\N	\N
3397	Xã Sùng Phài	xa-sung-phai	22.4044871	103.4655851	Xã	106	\N	\N
3400	Xã Tả Lèng	xa-ta-leng	14.058324	108.277199	Xã	106	\N	\N
3403	Xã Nậm Loỏng	xa-nam-loong	22.4033272	103.393389	Xã	105	\N	\N
3405	Xã Giang Ma	xa-giang-ma	22.3882934	103.5485995	Xã	106	\N	\N
3406	Xã Hồ Thầu	xa-ho-thau	22.3857273	103.6015463	Xã	106	\N	\N
3408	Phường Đông Phong	phuong-dong-phong	22.3993093	103.4489205	Phường	105	\N	\N
3409	Xã San Thàng	xa-san-thang	22.389907	103.5050151	Xã	105	\N	\N
3412	Xã Bình Lư	xa-binh-lu	22.3647541	103.6420599	Xã	106	\N	\N
3413	Xã Sơn Bình	xa-son-binh	22.3544577	103.6941672	Xã	106	\N	\N
3415	Xã Nùng Nàng	xa-nung-nang	22.3685758	103.4521952	Xã	106	\N	\N
3418	Xã Bản Giang	xa-ban-giang	22.3154829	103.513108	Xã	106	\N	\N
3421	Xã Bản Hon	xa-ban-hon	14.058324	108.277199	Xã	106	\N	\N
3424	Xã Bản Bo	xa-ban-bo	22.2837589	103.6760721	Xã	106	\N	\N
3427	Xã Nà Tăm	xa-na-tam	22.2732135	103.6456778	Xã	106	\N	\N
3430	Xã Khun Há	xa-khun-ha	22.2457544	103.6080566	Xã	106	\N	\N
3433	Thị trấn Mường Tè	thi-tran-muong-te	22.3858078	102.8227263	Thị trấn	107	\N	\N
3434	Thị trấn Nậm Nhùn	thi-tran-nam-nhun	22.3530893	103.247888	Thị trấn	112	\N	\N
3436	Xã Thu Lũm	xa-thu-lum	22.7122577	102.4724537	Xã	107	\N	\N
3439	Xã Ka Lăng	xa-ka-lang	22.6275456	102.5068597	Xã	107	\N	\N
3440	Xã Tá Bạ	xa-ta-ba	14.058324	108.277199	Xã	107	\N	\N
3442	Xã Pa ủ	xa-pa-u	22.6129709	102.6905326	Xã	107	\N	\N
3445	Xã Mường Tè	xa-muong-te	22.5373965	102.6101398	Xã	107	\N	\N
3448	Xã Pa Vệ Sử	xa-pa-ve-su	22.5550688	102.8284772	Xã	107	\N	\N
3451	Xã Mù Cả	xa-mu-ca	22.4905556	102.4609873	Xã	107	\N	\N
3454	Xã Bun Tở	xa-bun-to	22.465123	102.7824777	Xã	107	\N	\N
3457	Xã Nậm Khao	xa-nam-khao	22.4256238	102.6905326	Xã	107	\N	\N
3460	Xã Hua Bun	xa-hua-bun	14.058324	108.277199	Xã	112	\N	\N
3463	Xã Tà Tổng	xa-ta-tong	22.364418	102.5757028	Xã	107	\N	\N
3466	Xã Bun Nưa	xa-bun-nua	22.3640941	102.8744945	Xã	107	\N	\N
3467	Xã Vàng San	xa-vang-san	14.058324	108.277199	Xã	107	\N	\N
3469	Xã Kan Hồ	xa-kan-ho	22.2778087	102.7824777	Xã	107	\N	\N
3472	Xã Mường Mô	xa-muong-mo	14.058324	108.277199	Xã	112	\N	\N
3473	Xã Nậm Chà	xa-nam-cha	14.058324	108.277199	Xã	112	\N	\N
3474	Xã Nậm Manh	xa-nam-manh	22.1519604	103.0053627	Xã	112	\N	\N
3475	Xã Nậm Hàng	xa-nam-hang	22.1559988	103.0059081	Xã	112	\N	\N
3478	Thị trấn Sìn Hồ	thi-tran-sin-ho	22.3577742	103.2493721	Thị trấn	108	\N	\N
3481	Xã Lê Lợi	xa-le-loi	14.058324	108.277199	Xã	112	\N	\N
3484	Xã Pú Đao	xa-pu-dao	14.058324	108.277199	Xã	112	\N	\N
3487	Xã Chăn Nưa	xa-chan-nua	22.1886399	103.1625005	Xã	108	\N	\N
3488	Xã Nậm Pì	xa-nam-pi	22.1443402	103.0215186	Xã	112	\N	\N
3490	Xã Huổi Luông	xa-huoi-luong	22.5249069	103.1971067	Xã	109	\N	\N
3493	Xã Pa Tần	xa-pa-tan	22.4712109	103.139435	Xã	108	\N	\N
3496	Xã Phìn Hồ	xa-phin-ho	22.4526983	103.2483126	Xã	108	\N	\N
3499	Xã Hồng Thu	xa-hong-thu	22.4270847	103.2559158	Xã	108	\N	\N
3502	Xã Nậm Ban	xa-nam-ban	14.058324	108.277199	Xã	112	\N	\N
3503	Xã Trung Chải	xa-trung-chai	22.1559988	103.0059081	Xã	112	\N	\N
3505	Xã Phăng Sô Lin	xa-phang-so-lin	14.058324	108.277199	Xã	108	\N	\N
3508	Xã Ma Quai	xa-ma-quai	22.3730985	103.3356272	Xã	108	\N	\N
3509	Xã Lùng Thàng	xa-lung-thang	14.058324	108.277199	Xã	108	\N	\N
3511	Xã Tả Phìn	xa-ta-phin	21.9845011	103.3702811	Xã	108	\N	\N
3514	Xã Sà Dề Phìn	xa-sa-de-phin	22.2803052	103.1855702	Xã	108	\N	\N
3517	Xã Nậm Tăm	xa-nam-tam	22.2845303	103.416501	Xã	108	\N	\N
3520	Xã Tả Ngảo	xa-ta-ngao	22.3048884	103.3125299	Xã	108	\N	\N
3523	Xã Pu Sam Cáp	xa-pu-sam-cap	22.3853795	103.4103664	Xã	108	\N	\N
3526	Xã Nậm Cha	xa-nam-cha	22.2163417	103.393389	Xã	108	\N	\N
3527	Xã Pa Khoá	xa-pa-khoa	14.058324	108.277199	Xã	108	\N	\N
3529	Xã Làng Mô	xa-lang-mo	22.2259267	103.2778918	Xã	108	\N	\N
3532	Xã Noong Hẻo	xa-noong-heo	22.207996	103.4757446	Xã	108	\N	\N
3535	Xã Nậm Mạ	xa-nam-ma	22.1651904	103.3760577	Xã	108	\N	\N
3538	Xã Căn Co	xa-can-co	22.3048884	103.3125299	Xã	108	\N	\N
3541	Xã Tủa Sín Chải	xa-tua-sin-chai	22.1323969	103.2778918	Xã	108	\N	\N
3544	Xã Nậm Cuổi	xa-nam-cuoi	22.3015995	103.1610031	Xã	108	\N	\N
3547	Xã Nậm Hăn	xa-nam-han	14.058324	108.277199	Xã	108	\N	\N
3549	Thị trấn Phong Thổ	thi-tran-phong-tho	22.5424956	103.2917297	Thị trấn	109	\N	\N
3550	Xã Sì Lờ Lầu	xa-si-lo-lau	22.781158	103.3471775	Xã	109	\N	\N
3553	Xã Mồ Sì San	xa-mo-si-san	22.7592214	103.3991666	Xã	109	\N	\N
3556	Xã Ma Li Chải	xa-ma-li-chai	22.7329615	103.2952096	Xã	109	\N	\N
3559	Xã Pa Vây Sử	xa-pa-vay-su	22.7305039	103.393389	Xã	109	\N	\N
3562	Xã Vàng Ma Chải	xa-vang-ma-chai	22.7129985	103.324078	Xã	109	\N	\N
3565	Xã Tông Qua Lìn	xa-tong-qua-lin	14.058324	108.277199	Xã	109	\N	\N
3568	Xã Mù Sang	xa-mu-sang	22.6521198	103.2836641	Xã	109	\N	\N
3571	Xã Dào San	xa-dao-san	22.6643063	103.3471775	Xã	109	\N	\N
3574	Xã Ma Ly Pho	xa-ma-ly-pho	22.627245	103.2317225	Xã	109	\N	\N
3577	Xã Bản Lang	xa-ban-lang	22.6117085	103.416501	Xã	109	\N	\N
3580	Xã Hoang Thèn	xa-hoang-then	22.5605219	103.3219127	Xã	109	\N	\N
3583	Xã Khổng Lào	xa-khong-lao	22.5470169	103.3435679	Xã	109	\N	\N
3586	Xã Nậm Xe	xa-nam-xe	22.5376924	103.4627375	Xã	109	\N	\N
3589	Xã Mường So	xa-muong-so	22.5278467	103.3543969	Xã	109	\N	\N
3592	Xã Sin Suối Hồ	xa-sin-suoi-ho	22.4977393	103.5205565	Xã	109	\N	\N
3595	Thị trấn Than Uyên	thi-tran-than-uyen	21.958688	103.8854007	Thị trấn	110	\N	\N
3598	Thị trấn Tân Uyên	thi-tran-tan-uyen	22.1755538	103.7723663	Thị trấn	111	\N	\N
3601	Xã Mường Khoa	xa-muong-khoa	22.224388	103.7303648	Xã	111	\N	\N
3602	Xã Phúc Khoa	xa-phuc-khoa	22.2242565	103.7353203	Xã	111	\N	\N
3604	Xã Thân Thuộc	xa-than-thuoc	14.058324	108.277199	Xã	111	\N	\N
3605	Xã Trung Đồng	xa-trung-dong	22.1512142	103.7752543	Xã	111	\N	\N
3607	Xã Hố Mít	xa-ho-mit	22.1010504	103.8686279	Xã	111	\N	\N
3610	Xã Nậm Cần	xa-nam-can	22.1082708	103.7057493	Xã	111	\N	\N
3613	Xã Nậm Sỏ	xa-nam-so	22.0694023	103.6131203	Xã	111	\N	\N
3616	Xã Pắc Ta	xa-pac-ta	22.0805511	103.8593075	Xã	111	\N	\N
3618	Xã Phúc Than	xa-phuc-than	22.0561557	103.9005238	Xã	110	\N	\N
3619	Xã Mường Than	xa-muong-than	22.0320904	103.9223747	Xã	110	\N	\N
3622	Xã Tà Mít	xa-ta-mit	14.058324	108.277199	Xã	111	\N	\N
3625	Xã Mường Mít	xa-muong-mit	22.0258194	103.85233	Xã	110	\N	\N
3628	Xã Pha Mu	xa-pha-mu	21.930182	103.7405019	Xã	110	\N	\N
3631	Xã Mường Cang	xa-muong-cang	21.9436642	103.8564085	Xã	110	\N	\N
3632	Xã Hua Nà	xa-hua-na	14.058324	108.277199	Xã	110	\N	\N
3634	Xã Tà Hừa	xa-ta-hua	21.8581692	103.7636752	Xã	110	\N	\N
3637	Xã Mường Kim	xa-muong-kim	21.8736364	103.8564085	Xã	110	\N	\N
3638	Xã Tà Mung	xa-ta-mung	21.8229949	103.902799	Xã	110	\N	\N
3640	Xã Tà Gia	xa-ta-gia	21.8075467	103.8100339	Xã	110	\N	\N
3643	Xã Khoen On	xa-khoen-on	21.7549519	103.8796018	Xã	110	\N	\N
3646	Phường Chiềng Lề	phuong-chieng-le	21.3413965	103.9056989	Phường	116	\N	\N
3649	Phường Tô Hiệu	phuong-to-hieu	21.3305785	103.912949	Phường	116	\N	\N
3652	Phường Quyết Thắng	phuong-quyet-thang	21.3277804	103.9289005	Phường	116	\N	\N
3655	Phường Quyết Tâm	phuong-quyet-tam	21.3057825	103.9303507	Phường	116	\N	\N
3658	Xã Chiềng Cọ	xa-chieng-co	21.3134333	103.8564085	Xã	116	\N	\N
3661	Xã Chiềng Đen	xa-chieng-den	21.4067946	103.8564085	Xã	116	\N	\N
3664	Xã Chiềng Xôm	xa-chieng-xom	21.3776113	103.9260001	Xã	116	\N	\N
3667	Phường Chiềng An	phuong-chieng-an	21.3410767	103.9129087	Phường	116	\N	\N
3670	Phường Chiềng Cơi	phuong-chieng-coi	21.3117397	103.9114989	Phường	116	\N	\N
3673	Xã Chiềng Ngần	xa-chieng-ngan	21.3270349	103.9724141	Xã	116	\N	\N
3676	Xã Hua La	xa-hua-la	21.2862158	103.902799	Xã	116	\N	\N
3679	Phường Chiềng Sinh	phuong-chieng-sinh	21.2866935	103.9666115	Phường	116	\N	\N
3682	Xã Mường Chiên	xa-muong-chien	21.8484504	103.6015463	Xã	118	\N	\N
3685	Xã Cà Nàng	xa-ca-nang	21.9331202	103.5668302	Xã	118	\N	\N
3688	Xã Chiềng Khay	xa-chieng-khay	21.9126985	103.6710059	Xã	118	\N	\N
3694	Xã Mường Giôn	xa-muong-gion	21.7813244	103.7057493	Xã	118	\N	\N
3697	Xã Pá Ma Pha Khinh	xa-pa-ma-pha-khinh	14.058324	108.277199	Xã	118	\N	\N
3700	Xã Chiềng Ơn	xa-chieng-on	21.6791386	103.6710059	Xã	118	\N	\N
3703	Xã Mường Giàng	xa-muong-giang	21.6382021	103.6015463	Xã	118	\N	\N
3706	Xã Chiềng Bằng	xa-chieng-bang	21.6504266	103.6652162	Xã	118	\N	\N
3709	Xã Mường Sại	xa-muong-sai	21.628559	103.7173325	Xã	118	\N	\N
3712	Xã Nậm ét	xa-nam-et	21.5760357	103.7868526	Xã	118	\N	\N
3718	Xã Chiềng Khoang	xa-chieng-khoang	21.5623606	103.6710059	Xã	118	\N	\N
3721	Thị trấn Thuận Châu	thi-tran-thuan-chau	21.4364892	103.6927195	Thị trấn	119	\N	\N
3724	Xã Phỏng Lái	xa-phong-lai	21.5681206	103.6015463	Xã	119	\N	\N
3727	Xã Mường é	xa-muong-e	21.503753	103.5321234	Xã	119	\N	\N
3730	Xã Chiềng Pha	xa-chieng-pha	21.5122107	103.6420599	Xã	119	\N	\N
3733	Xã Chiềng La	xa-chieng-la	21.5137263	103.6941672	Xã	119	\N	\N
3736	Xã Chiềng Ngàm	xa-chieng-ngam	21.5079333	103.7636752	Xã	119	\N	\N
3739	Xã Liệp Tè	xa-liep-te	21.5195888	103.902799	Xã	119	\N	\N
3742	Xã é Tòng	xa-e-tong	21.4608076	103.485862	Xã	119	\N	\N
3745	Xã Phỏng Lập	xa-phong-lap	21.4746804	103.6015463	Xã	119	\N	\N
3748	Xã Phổng Lăng	xa-phong-lang	21.4631513	103.664991	Xã	119	\N	\N
3751	Xã Chiềng Ly	xa-chieng-ly	21.4723774	103.6999581	Xã	119	\N	\N
3754	Xã Nong Lay	xa-nong-lay	21.4928382	103.7347091	Xã	119	\N	\N
3757	Xã Mường Khiêng	xa-muong-khieng	21.4918832	103.8854007	Xã	119	\N	\N
3760	Xã Mường Bám	xa-muong-bam	21.3982103	103.393389	Xã	119	\N	\N
3763	Xã Long Hẹ	xa-long-he	21.4121853	103.5089907	Xã	119	\N	\N
3766	Xã Chiềng Bôm	xa-chieng-bom	21.4026972	103.6246954	Xã	119	\N	\N
3769	Xã Thôn Mòn	xa-thon-mon	21.4130362	103.7115408	Xã	119	\N	\N
3772	Xã Tòng Lệnh	xa-tong-lenh	21.4264248	103.7427056	Xã	119	\N	\N
3775	Xã Tòng Cọ	xa-tong-co	21.4306031	103.7810579	Xã	119	\N	\N
3778	Xã Bó Mười	xa-bo-muoi	21.455422	103.8332193	Xã	119	\N	\N
3781	Xã Co Mạ	xa-co-ma	21.3402032	103.5321234	Xã	119	\N	\N
3784	Xã Púng Tra	xa-pung-tra	21.3916027	103.6883765	Xã	119	\N	\N
3787	Xã Chiềng Pấc	xa-chieng-pac	21.3975129	103.7578815	Xã	119	\N	\N
3790	Xã Nậm Lầu	xa-nam-lau	21.3142734	103.7057493	Xã	119	\N	\N
3793	Xã Bon Phặng	xa-bon-phang	21.3659188	103.7868526	Xã	119	\N	\N
3796	Xã Co Tòng	xa-co-tong	21.2953588	103.5089907	Xã	119	\N	\N
3799	Xã Muội Nọi	xa-muoi-noi	21.3173002	103.8100339	Xã	119	\N	\N
3802	Xã Pá Lông	xa-pa-long	21.2521214	103.5379072	Xã	119	\N	\N
3805	Xã Bản Lầm	xa-ban-lam	21.2491946	103.7868526	Xã	119	\N	\N
3808	Thị trấn Ít Ong	thi-tran-it-ong	21.5034191	104.0246484	Thị trấn	120	\N	\N
3811	Xã Nậm Giôn	xa-nam-gion	21.5954821	103.8332193	Xã	120	\N	\N
3814	Xã Chiềng Lao	xa-chieng-lao	21.6255955	103.8911999	Xã	120	\N	\N
3817	Xã Hua Trai	xa-hua-trai	21.626396	104.0188436	Xã	120	\N	\N
3820	Xã Ngọc Chiến	xa-ngoc-chien	21.6502803	104.265738	Xã	120	\N	\N
3823	Xã Mường Trai	xa-muong-trai	21.5643008	103.9260001	Xã	120	\N	\N
3826	Xã Nậm Păm	xa-nam-pam	21.5757629	104.0652887	Xã	120	\N	\N
3829	Xã Chiềng Muôn	xa-chieng-muon	21.5231343	104.1349852	Xã	120	\N	\N
3832	Xã Chiềng Ân	xa-chieng-an	21.5171263	104.204716	Xã	120	\N	\N
3835	Xã Pi Toong	xa-pi-toong	21.5350531	103.9956269	Xã	120	\N	\N
3838	Xã Chiềng Công	xa-chieng-cong	21.4578347	104.2163411	Xã	120	\N	\N
3841	Xã Tạ Bú	xa-ta-bu	21.4630869	104.0188436	Xã	120	\N	\N
3844	Xã Chiềng San	xa-chieng-san	21.475138	104.0827096	Xã	120	\N	\N
3847	Xã Mường Bú	xa-muong-bu	21.4183975	103.9956269	Xã	120	\N	\N
3850	Xã Chiềng Hoa	xa-chieng-hoa	21.4065307	104.1349852	Xã	120	\N	\N
3853	Xã Mường Chùm	xa-muong-chum	21.3385525	104.1117492	Xã	120	\N	\N
3856	Thị trấn Bắc Yên	thi-tran-bac-yen	21.2451953	104.438096	Thị trấn	121	\N	\N
3859	Xã Phiêng Ban	xa-phieng-ban	21.232241	104.4665072	Xã	121	\N	\N
3862	Xã Hang Chú	xa-hang-chu	21.3565554	104.3093759	Xã	121	\N	\N
3865	Xã Xín Vàng	xa-xin-vang	21.3378385	104.3908304	Xã	121	\N	\N
3868	Xã Tà Xùa	xa-ta-xua	21.2788282	104.4665072	Xã	121	\N	\N
3869	Xã Háng Đồng	xa-hang-dong	21.3276716	104.5072722	Xã	121	\N	\N
3871	Xã Bắc Ngà	xa-bac-nga	21.330605	104.204716	Xã	121	\N	\N
3874	Xã Làng Chếu	xa-lang-cheu	21.2932574	104.367553	Xã	121	\N	\N
3877	Xã Chim Vàn	xa-chim-van	21.2506751	104.3210095	Xã	121	\N	\N
3880	Xã Mường Khoa	xa-muong-khoa	21.2060677	104.2977433	Xã	121	\N	\N
3883	Xã Song Pe	xa-song-pe	21.170712	104.4373961	Xã	121	\N	\N
3886	Xã Hồng Ngài	xa-hong-ngai	21.1899581	104.4839765	Xã	121	\N	\N
3889	Xã Tạ Khoa	xa-ta-khoa	21.1514448	104.3908304	Xã	121	\N	\N
3890	Xã Hua Nhàn	xa-hua-nhan	21.1404811	104.3151926	Xã	121	\N	\N
3892	Xã Phiêng Kôn	xa-phieng-kon	21.0775359	104.4373961	Xã	121	\N	\N
3895	Xã Chiềng Sại	xa-chieng-sai	21.0481969	104.5072722	Xã	121	\N	\N
3898	Thị trấn Phù Yên	thi-tran-phu-yen	21.2623608	104.6441102	Thị trấn	122	\N	\N
3901	Xã Suối Tọ	xa-suoi-to	21.2673327	104.6451182	Xã	122	\N	\N
3904	Xã Mường Thải	xa-muong-thai	14.058324	108.277199	Xã	122	\N	\N
3907	Xã Mường Cơi	xa-muong-coi	14.058324	108.277199	Xã	122	\N	\N
3910	Xã Quang Huy	xa-quang-huy	21.2594812	104.6549249	Xã	122	\N	\N
3913	Xã Huy Bắc	xa-huy-bac	21.2673327	104.6451182	Xã	122	\N	\N
3916	Xã Huy Thượng	xa-huy-thuong	21.2673327	104.6451182	Xã	122	\N	\N
3919	Xã Tân Lang	xa-tan-lang	14.058324	108.277199	Xã	122	\N	\N
3922	Xã Gia Phù	xa-gia-phu	14.058324	108.277199	Xã	122	\N	\N
3925	Xã Tường Phù	xa-tuong-phu	14.058324	108.277199	Xã	122	\N	\N
3928	Xã Huy Hạ	xa-huy-ha	21.2673327	104.6451182	Xã	122	\N	\N
3931	Xã Huy Tân	xa-huy-tan	21.2673327	104.6451182	Xã	122	\N	\N
3934	Xã Mường Lang	xa-muong-lang	14.058324	108.277199	Xã	122	\N	\N
3937	Xã Suối Bau	xa-suoi-bau	14.058324	108.277199	Xã	122	\N	\N
3940	Xã Huy Tường	xa-huy-tuong	14.058324	108.277199	Xã	122	\N	\N
3943	Xã Mường Do	xa-muong-do	14.058324	108.277199	Xã	122	\N	\N
3946	Xã Sập Xa	xa-sap-xa	21.26718	104.6449685	Xã	122	\N	\N
3949	Xã Tường Thượng	xa-tuong-thuong	14.058324	108.277199	Xã	122	\N	\N
3952	Xã Tường Tiến	xa-tuong-tien	14.058324	108.277199	Xã	122	\N	\N
3955	Xã Tường Phong	xa-tuong-phong	14.058324	108.277199	Xã	122	\N	\N
3958	Xã Tường Hạ	xa-tuong-ha	21.1392277	104.639926	Xã	122	\N	\N
3961	Xã Kim Bon	xa-kim-bon	14.058324	108.277199	Xã	122	\N	\N
3964	Xã Mường Bang	xa-muong-bang	14.058324	108.277199	Xã	122	\N	\N
3967	Xã Đá Đỏ	xa-da-do	14.058324	108.277199	Xã	122	\N	\N
3970	Xã Tân Phong	xa-tan-phong	14.058324	108.277199	Xã	122	\N	\N
3973	Xã Nam Phong	xa-nam-phong	14.058324	108.277199	Xã	122	\N	\N
3976	Xã Bắc Phong	xa-bac-phong	14.058324	108.277199	Xã	122	\N	\N
3979	Thị trấn Mộc Châu	thi-tran-moc-chau	20.8444995	104.6412925	Thị trấn	123	\N	\N
3982	Thị trấn NT Mộc Châu	thi-tran-nt-moc-chau	20.8429184	104.6427499	Thị trấn	123	\N	\N
3985	Xã Chiềng Sơn	xa-chieng-son	20.7354692	104.6238048	Xã	123	\N	\N
3988	Xã Tân Hợp	xa-tan-hop	21.0147713	104.6238048	Xã	123	\N	\N
3991	Xã Qui Hướng	xa-qui-huong	21.0278133	104.7404269	Xã	123	\N	\N
3994	Xã Suối Bàng	xa-suoi-bang	14.058324	108.277199	Xã	128	\N	\N
3997	Xã Tân Lập	xa-tan-lap	20.9469687	104.6004911	Xã	123	\N	\N
4000	Xã Nà Mường	xa-na-muong	20.9537275	104.7229279	Xã	123	\N	\N
4003	Xã Tà Lai	xa-ta-lai	20.9641435	104.670443	Xã	123	\N	\N
4006	Xã Song Khủa	xa-song-khua	14.058324	108.277199	Xã	128	\N	\N
4009	Xã Liên Hoà	xa-lien-hoa	14.058324	108.277199	Xã	128	\N	\N
4012	Xã Chiềng Hắc	xa-chieng-hac	20.9171022	104.5422225	Xã	123	\N	\N
4015	Xã Hua Păng	xa-hua-pang	20.8967668	104.7754307	Xã	123	\N	\N
4018	Xã Tô Múa	xa-to-mua	20.7931051	104.7637619	Xã	128	\N	\N
4021	Xã Mường Tè	xa-muong-te	20.8970587	104.9038451	Xã	128	\N	\N
4024	Xã Chiềng Khừa	xa-chieng-khua	20.8426285	104.4606845	Xã	123	\N	\N
4027	Xã Mường Sang	xa-muong-sang	20.8325986	104.577181	Xã	123	\N	\N
4030	Xã Đông Sang	xa-dong-sang	20.7969425	104.652952	Xã	123	\N	\N
4033	Xã Phiêng Luông	xa-phieng-luong	20.8204468	104.7170954	Xã	123	\N	\N
4036	Xã Chiềng Khoa	xa-chieng-khoa	20.8334812	104.8337879	Xã	128	\N	\N
4039	Xã Mường Men	xa-muong-men	14.058324	108.277199	Xã	128	\N	\N
4042	Xã Quang Minh	xa-quang-minh	20.8840106	104.9500186	Xã	128	\N	\N
4045	Xã Lóng Sập	xa-long-sap	20.7667785	104.5305715	Xã	123	\N	\N
4048	Xã Vân Hồ	xa-van-ho	20.7931051	104.7637619	Xã	128	\N	\N
4051	Xã Lóng Luông	xa-long-luong	14.058324	108.277199	Xã	128	\N	\N
4054	Xã Chiềng Yên	xa-chieng-yen	20.7903409	104.9360418	Xã	128	\N	\N
4056	Xã Chiềng Xuân	xa-chieng-xuan	20.7187886	104.6821048	Xã	128	\N	\N
4057	Xã Xuân Nha	xa-xuan-nha	20.7931051	104.7637619	Xã	128	\N	\N
4058	Xã Tân Xuân	xa-tan-xuan	14.058324	108.277199	Xã	128	\N	\N
4060	Thị trấn Yên Châu	thi-tran-yen-chau	21.0471807	104.2991973	Thị trấn	124	\N	\N
4063	Xã Chiềng Đông	xa-chieng-dong	21.1401329	104.2512221	Xã	124	\N	\N
4066	Xã Sập Vạt	xa-sap-vat	21.0855548	104.3442794	Xã	124	\N	\N
4069	Xã Chiềng Sàng	xa-chieng-sang	21.0775218	104.2337805	Xã	124	\N	\N
4072	Xã Chiềng Pằn	xa-chieng-pan	21.0628957	104.2686658	Xã	124	\N	\N
4075	Xã Viêng Lán	xa-vieng-lan	21.0609101	104.2919273	Xã	124	\N	\N
4078	Xã Chiềng Hặc	xa-chieng-hac	21.0349594	104.3908304	Xã	124	\N	\N
4081	Xã Mường Lựm	xa-muong-lum	21.003638	104.4839765	Xã	124	\N	\N
4084	Xã Chiềng On	xa-chieng-on	20.9828912	104.1814686	Xã	124	\N	\N
4087	Xã Yên Sơn	xa-yen-son	21.050855	104.204716	Xã	124	\N	\N
4090	Xã Chiềng Khoi	xa-chieng-khoi	21.0176455	104.3210095	Xã	124	\N	\N
4093	Xã Tú Nang	xa-tu-nang	20.9610745	104.4373961	Xã	124	\N	\N
4096	Xã Lóng Phiêng	xa-long-phieng	20.9204743	104.367553	Xã	124	\N	\N
4099	Xã Phiêng Khoài	xa-phieng-khoai	20.9517036	104.2744808	Xã	124	\N	\N
4102	Xã Chiềng Tương	xa-chieng-tuong	20.8486042	104.3908304	Xã	124	\N	\N
4105	Thị trấn Hát Lót	thi-tran-hat-lot	21.2059357	104.0943247	Thị trấn	125	\N	\N
4108	Xã Chiềng Sung	xa-chieng-sung	21.3245183	104.0710954	Xã	125	\N	\N
4111	Xã Mường Bằng	xa-muong-bang	21.297823	104.0420642	Xã	125	\N	\N
4114	Xã Chiềng Chăn	xa-chieng-chan	21.3112682	104.158225	Xã	125	\N	\N
4117	Xã Mương Tranh	xa-muong-tranh	21.2453451	103.8332193	Xã	125	\N	\N
4120	Xã Chiềng Ban	xa-chieng-ban	21.2429509	103.931801	Xã	125	\N	\N
4123	Xã Chiềng Mung	xa-chieng-mung	21.2371034	104.0014307	Xã	125	\N	\N
4126	Xã Mường Bon	xa-muong-bon	21.2472403	104.088517	Xã	125	\N	\N
4129	Xã Chiềng Chung	xa-chieng-chung	21.2055088	103.8911999	Xã	125	\N	\N
4132	Xã Chiềng Mai	xa-chieng-mai	21.2030868	103.9898233	Xã	125	\N	\N
4135	Xã Hát Lót	xa-hat-lot	21.1792379	104.0652887	Xã	125	\N	\N
4136	Xã Nà Pó	xa-na-po	21.2180002	104.158225	Xã	125	\N	\N
4138	Xã Cò  Nòi	xa-co-noi	21.1480524	104.158225	Xã	125	\N	\N
4141	Xã Chiềng Nơi	xa-chieng-noi	21.1665338	103.7984428	Xã	125	\N	\N
4144	Xã Phiêng Cằm	xa-phieng-cam	21.1121674	103.8911999	Xã	125	\N	\N
4147	Xã Chiềng Dong	xa-chieng-dong	21.171982	103.9434035	Xã	125	\N	\N
4150	Xã Chiềng Kheo	xa-chieng-kheo	21.1457384	103.9782169	Xã	125	\N	\N
4153	Xã Chiềng Ve	xa-chieng-ve	21.134548	104.0420642	Xã	125	\N	\N
4156	Xã Chiềng Lương	xa-chieng-luong	21.0927135	104.1233667	Xã	125	\N	\N
4159	Xã Phiêng Pằn	xa-phieng-pan	21.0033527	104.0769024	Xã	125	\N	\N
4162	Xã Nà Ơt	xa-na-ot	21.0704063	103.9724141	Xã	125	\N	\N
4165	Xã Tà Hộc	xa-ta-hoc	21.2606633	104.204716	Xã	125	\N	\N
4168	Thị trấn Sông Mã	thi-tran-song-ma	21.0530018	103.7485604	Thị trấn	126	\N	\N
4171	Xã Bó Sinh	xa-bo-sinh	21.2505052	103.485862	Xã	126	\N	\N
4174	Xã Pú Pẩu	xa-pu-pau	21.2596206	103.4453969	Xã	126	\N	\N
4177	Xã Chiềng Phung	xa-chieng-phung	21.264451	103.6015463	Xã	126	\N	\N
4180	Xã Chiềng En	xa-chieng-en	21.2019022	103.5089907	Xã	126	\N	\N
4183	Xã Mường Lầm	xa-muong-lam	21.1962652	103.5784012	Xã	126	\N	\N
4186	Xã Nậm Ty	xa-nam-ty	21.2120517	103.6710059	Xã	126	\N	\N
4189	Xã Đứa Mòn	xa-dua-mon	21.1121774	103.4627375	Xã	126	\N	\N
4192	Xã Yên Hưng	xa-yen-hung	21.1280685	103.5552603	Xã	126	\N	\N
4195	Xã Chiềng Sơ	xa-chieng-so	21.1205375	103.6478486	Xã	126	\N	\N
4198	Xã Nà Ngựu	xa-na-nguu	21.0593251	103.682586	Xã	126	\N	\N
4201	Xã Nậm Mằn	xa-nam-man	21.05612	103.5784012	Xã	126	\N	\N
4204	Xã Chiềng Khoong	xa-chieng-khoong	21.020497	103.8005091	Xã	126	\N	\N
4207	Xã Chiềng Cang	xa-chieng-cang	21.0188317	103.8911999	Xã	126	\N	\N
4210	Xã Huổi Một	xa-huoi-mot	21.0252457	103.6710059	Xã	126	\N	\N
4213	Xã Mường Sai	xa-muong-sai	20.975165	103.9956269	Xã	126	\N	\N
4216	Xã Mường Cai	xa-muong-cai	20.9369223	103.752088	Xã	126	\N	\N
4219	Xã Mường Hung	xa-muong-hung	20.9186082	103.8332193	Xã	126	\N	\N
4222	Xã Chiềng Khương	xa-chieng-khuong	20.9304452	103.9724141	Xã	126	\N	\N
4225	Xã Sam Kha	xa-sam-kha	21.0513131	103.3471775	Xã	127	\N	\N
4228	Xã Púng Bánh	xa-pung-banh	21.0061092	103.4742993	Xã	127	\N	\N
4231	Xã Xốp Cộp	xa-xop-cop	20.8874516	103.4974258	Xã	127	\N	\N
4234	Xã Dồm Cang	xa-dom-cang	20.9412065	103.5552603	Xã	127	\N	\N
4237	Xã Nậm Lạnh	xa-nam-lanh	20.8622433	103.5205565	Xã	127	\N	\N
4240	Xã Mường Lèo	xa-muong-leo	20.8769403	103.3356272	Xã	127	\N	\N
4243	Xã Mường Và	xa-muong-va	20.8548112	103.6131203	Xã	127	\N	\N
4246	Xã Mường Lạn	xa-muong-lan	20.7539537	103.7057493	Xã	127	\N	\N
4249	Phường Yên Thịnh	phuong-yen-thinh	21.7291001	104.9301246	Phường	132	\N	\N
4252	Phường Yên Ninh	phuong-yen-ninh	21.7071333	104.8720476	Phường	132	\N	\N
4255	Phường Minh Tân	phuong-minh-tan	21.7259591	104.9009254	Phường	132	\N	\N
4258	Phường Nguyễn Thái Học	phuong-nguyen-thai-hoc	21.7119663	104.8790296	Phường	132	\N	\N
4261	Phường Đồng Tâm	phuong-dong-tam	21.7190744	104.9126044	Phường	132	\N	\N
4264	Phường Nguyễn Phúc	phuong-nguyen-phuc	21.716441	104.8598733	Phường	132	\N	\N
4267	Phường Hồng Hà	phuong-hong-ha	21.6976918	104.8761104	Phường	132	\N	\N
4270	Xã Minh Bảo	xa-minh-bao	21.7466482	104.9079598	Xã	132	\N	\N
4273	Phường Nam Cường	phuong-nam-cuong	21.7071333	104.8720476	Phường	132	\N	\N
4276	Xã Tuy Lộc	xa-tuy-loc	21.7220014	104.8468468	Xã	132	\N	\N
4279	Xã Tân Thịnh	xa-tan-thinh	21.7026634	104.9330448	Xã	132	\N	\N
4282	Phường Pú Trạng	phuong-pu-trang	21.599737	104.492712	Phường	133	\N	\N
4285	Phường Trung Tâm	phuong-trung-tam	21.6055985	104.5087283	Phường	133	\N	\N
4288	Phường Tân An	phuong-tan-an	21.5928826	104.50436	Phường	133	\N	\N
4291	Phường Cầu Thia	phuong-cau-thia	21.5873546	104.5174652	Phường	133	\N	\N
4294	Xã Nghĩa Lợi	xa-nghia-loi	21.6029811	104.5218338	Xã	133	\N	\N
4297	Xã Nghĩa Phúc	xa-nghia-phuc	21.6235473	104.4868883	Xã	133	\N	\N
4300	Xã Nghĩa An	xa-nghia-an	21.5806406	104.4781532	Xã	133	\N	\N
4303	Thị trấn Yên Thế	thi-tran-yen-the	22.0899425	104.7695962	Thị trấn	135	\N	\N
4306	Xã Tân Phượng	xa-tan-phuong	22.2487968	104.6238048	Xã	135	\N	\N
4309	Xã Lâm Thượng	xa-lam-thuong	22.2212452	104.670443	Xã	135	\N	\N
4312	Xã Khánh Thiện	xa-khanh-thien	22.2360289	104.6995991	Xã	135	\N	\N
4315	Xã Minh Chuẩn	xa-minh-chuan	22.1831695	104.6412925	Xã	135	\N	\N
4318	Xã Mai Sơn	xa-mai-son	22.1873306	104.7229279	Xã	135	\N	\N
4321	Xã Khai Trung	xa-khai-trung	22.1799706	104.6762738	Xã	135	\N	\N
4324	Xã Mường Lai	xa-muong-lai	22.1596549	104.8337879	Xã	135	\N	\N
4327	Xã An Lạc	xa-an-lac	22.1344972	104.6004911	Xã	135	\N	\N
4330	Xã Minh Xuân	xa-minh-xuan	22.1406957	104.7871004	Xã	135	\N	\N
4333	Xã Tô Mậu	xa-to-mau	22.1344753	104.6646125	Xã	135	\N	\N
4336	Xã Tân Lĩnh	xa-tan-linh	22.123854	104.7170954	Xã	135	\N	\N
4339	Xã Yên Thắng	xa-yen-thang	22.1269975	104.7462603	Xã	135	\N	\N
4342	Xã Khánh Hoà	xa-khanh-hoa	22.0879244	104.6004911	Xã	135	\N	\N
4345	Xã Vĩnh Lạc	xa-vinh-lac	22.0951279	104.8396248	Xã	135	\N	\N
4348	Xã Liễu Đô	xa-lieu-do	22.0867224	104.8046066	Xã	135	\N	\N
4351	Xã Động Quan	xa-dong-quan	22.0815602	104.670443	Xã	135	\N	\N
4354	Xã Tân Lập	xa-tan-lap	22.0561022	104.7579278	Xã	135	\N	\N
4357	Xã Minh Tiến	xa-minh-tien	22.0644264	104.8571368	Xã	135	\N	\N
4360	Xã Trúc Lâu	xa-truc-lau	22.037119	104.6471221	Xã	135	\N	\N
4363	Xã Phúc Lợi	xa-phuc-loi	22.0095926	104.6937674	Xã	135	\N	\N
4366	Xã Phan Thanh	xa-phan-thanh	21.9947088	104.7929356	Xã	135	\N	\N
4369	Xã An Phú	xa-an-phu	21.9967745	104.8337879	Xã	135	\N	\N
4372	Xã Trung Tâm	xa-trung-tam	21.9799257	104.7637619	Xã	135	\N	\N
4375	Thị trấn Mậu A	thi-tran-mau-a	21.8783788	104.6966832	Thị trấn	136	\N	\N
4378	Xã Lang Thíp	xa-lang-thip	22.1492424	104.4373961	Xã	136	\N	\N
4381	Xã Lâm Giang	xa-lam-giang	22.0730646	104.5072722	Xã	136	\N	\N
4384	Xã Châu Quế Thượng	xa-chau-que-thuong	22.0581316	104.4141114	Xã	136	\N	\N
4387	Xã Châu Quế Hạ	xa-chau-que-ha	21.992582	104.4956239	Xã	136	\N	\N
4390	Xã An Bình	xa-an-binh	22.0201729	104.577181	Xã	136	\N	\N
4393	Xã Quang Minh	xa-quang-minh	21.9926667	104.6238048	Xã	136	\N	\N
4396	Xã Đông An	xa-dong-an	21.9524064	104.5538744	Xã	136	\N	\N
4399	Xã Đông Cuông	xa-dong-cuong	21.9534985	104.6063192	Xã	136	\N	\N
4402	Xã Phong Dụ Hạ	xa-phong-du-ha	21.9374708	104.4606845	Xã	136	\N	\N
4405	Xã Mậu Đông	xa-mau-dong	21.920702	104.6471221	Xã	136	\N	\N
4408	Xã Ngòi A	xa-ngoi-a	21.9143532	104.7170954	Xã	136	\N	\N
4411	Xã Xuân Tầm	xa-xuan-tam	21.8867122	104.5072722	Xã	136	\N	\N
4414	Xã Tân Hợp	xa-tan-hop	21.8804401	104.577181	Xã	136	\N	\N
4417	Xã An Thịnh	xa-an-thinh	21.8804826	104.6412925	Xã	136	\N	\N
4420	Xã Yên Thái	xa-yen-thai	21.8868277	104.7637619	Xã	136	\N	\N
4423	Xã Phong Dụ Thượng	xa-phong-du-thuong	21.8103684	104.4490398	Xã	136	\N	\N
4426	Xã Yên Hợp	xa-yen-hop	21.8519248	104.6995991	Xã	136	\N	\N
4429	Xã Đại Sơn	xa-dai-son	21.835953	104.5538744	Xã	136	\N	\N
4432	Xã Yên Hưng	xa-yen-hung	21.856683	104.7433436	Xã	136	\N	\N
4435	Xã Đại Phác	xa-dai-phac	21.8455566	104.6412925	Xã	136	\N	\N
4438	Xã Yên Phú	xa-yen-phu	21.8307558	104.6762738	Xã	136	\N	\N
4441	Xã Xuân Ái	xa-xuan-ai	21.8148923	104.7229279	Xã	136	\N	\N
4444	Xã Hoàng Thắng	xa-hoang-thang	21.7905575	104.7345937	Xã	136	\N	\N
4447	Xã Viễn Sơn	xa-vien-son	21.7767934	104.6937674	Xã	136	\N	\N
4450	Xã Mỏ Vàng	xa-mo-vang	21.7344338	104.6471221	Xã	136	\N	\N
4453	Xã Nà Hẩu	xa-na-hau	21.7639955	104.577181	Xã	136	\N	\N
4456	Thị trấn Mù Căng Chải	thi-tran-mu-cang-chai	21.8528313	104.0836104	Thị trấn	137	\N	\N
4459	Xã Hồ Bốn	xa-ho-bon	21.8910241	103.9260001	Xã	137	\N	\N
4462	Xã Nậm Có	xa-nam-co	21.8693404	104.3093759	Xã	137	\N	\N
4465	Xã Khao Mang	xa-khao-mang	21.906364	104.0188436	Xã	137	\N	\N
4468	Xã Mồ Dề	xa-mo-de	21.8749841	104.1117492	Xã	137	\N	\N
4471	Xã Chế Cu Nha	xa-che-cu-nha	21.868909	104.1814686	Xã	137	\N	\N
4474	Xã Lao Chải	xa-lao-chai	21.80437	103.98402	Xã	137	\N	\N
4477	Xã Kim Nọi	xa-kim-noi	21.8250221	104.0827096	Xã	137	\N	\N
4480	Xã Cao Phạ	xa-cao-pha	21.7928603	104.2512221	Xã	137	\N	\N
4483	Xã La Pán Tẩn	xa-la-pan-tan	21.7936291	104.1756573	Xã	137	\N	\N
4486	Xã Dế Su Phình	xa-de-su-phinh	21.7796739	104.1349852	Xã	137	\N	\N
4489	Xã Chế Tạo	xa-che-tao	21.7070562	104.0304535	Xã	137	\N	\N
4492	Xã Púng Luông	xa-pung-luong	21.7502916	104.204716	Xã	137	\N	\N
4495	Xã Nậm Khắt	xa-nam-khat	21.7016339	104.2279672	Xã	137	\N	\N
4498	Thị trấn Cổ Phúc	thi-tran-co-phuc	21.7625049	104.8191965	Thị trấn	138	\N	\N
4501	Xã Tân Đồng	xa-tan-dong	21.8550753	104.7929356	Xã	138	\N	\N
4504	Xã Báo Đáp	xa-bao-dap	21.8222919	104.7695962	Xã	138	\N	\N
4507	Xã Đào Thịnh	xa-dao-thinh	21.8191029	104.8046066	Xã	138	\N	\N
4510	Xã Việt Thành	xa-viet-thanh	21.7921248	104.8133604	Xã	138	\N	\N
4513	Xã Hòa Cuông	xa-hoa-cuong	21.814838	104.8512993	Xã	138	\N	\N
4516	Xã Minh Quán	xa-minh-quan	21.6487758	104.8863279	Xã	138	\N	\N
4519	Xã Quy Mông	xa-quy-mong	21.7746834	104.7812654	Xã	138	\N	\N
4522	Xã Cường Thịnh	xa-cuong-thinh	21.7545353	104.8746508	Xã	138	\N	\N
4525	Xã Kiên Thành	xa-kien-thanh	21.7291641	104.7523821	Xã	138	\N	\N
4528	Xã Nga Quán	xa-nga-quan	21.7487421	104.8425433	Xã	138	\N	\N
4531	Xã Y Can	xa-y-can	21.7165007	104.7812654	Xã	138	\N	\N
4534	Xã Minh Tiến	xa-minh-tien	21.7238942	104.8279512	Xã	138	\N	\N
4537	Xã Lương Thịnh	xa-luong-thinh	21.6519722	104.7871004	Xã	138	\N	\N
4540	Xã Âu Lâu	xa-au-lau	21.6879285	104.8396248	Xã	132	\N	\N
4543	Xã Giới Phiên	xa-gioi-phien	21.6921305	104.8892473	Xã	132	\N	\N
4546	Phường Hợp Minh	phuong-hop-minh	21.6858025	104.8629746	Phường	132	\N	\N
4549	Xã Văn Tiến	xa-van-tien	21.6794024	104.9330448	Xã	132	\N	\N
4552	Xã Phúc Lộc	xa-phuc-loc	21.6720151	104.9184443	Xã	132	\N	\N
4555	Xã Văn Lãng	xa-van-lang	21.6645609	104.9680914	Xã	141	\N	\N
4558	Xã Văn Phú	xa-van-phu	21.6894617	104.9184443	Xã	132	\N	\N
4561	Xã Bảo Hưng	xa-bao-hung	21.6720404	104.8863279	Xã	138	\N	\N
4564	Xã Việt Cường	xa-viet-cuong	21.6223504	104.8571368	Xã	138	\N	\N
4567	Xã Minh Quân	xa-minh-quan	21.6487758	104.8863279	Xã	138	\N	\N
4570	Xã Hồng Ca	xa-hong-ca	21.5905563	104.6937674	Xã	138	\N	\N
4573	Xã Hưng Thịnh	xa-hung-thinh	21.589199	104.7834373	Xã	138	\N	\N
4576	Xã Hưng Khánh	xa-hung-khanh	21.5673315	104.7579278	Xã	138	\N	\N
4579	Xã Việt Hồng	xa-viet-hong	21.5779337	104.8337879	Xã	138	\N	\N
4582	Xã Vân Hội	xa-van-hoi	21.5800437	104.8746508	Xã	138	\N	\N
4585	Thị trấn Trạm Tấu	thi-tran-tram-tau	21.5148504	104.4315746	Thị trấn	139	\N	\N
4588	Xã Túc Đán	xa-tuc-dan	21.5814817	104.4024704	Xã	139	\N	\N
4591	Xã Pá Lau	xa-pa-lau	21.5381493	104.4315746	Xã	139	\N	\N
4594	Xã Xà Hồ	xa-xa-ho	21.5283185	104.3442794	Xã	139	\N	\N
4597	Xã Phình Hồ	xa-phinh-ho	21.5277416	104.5381524	Xã	139	\N	\N
4600	Xã Trạm Tấu	xa-tram-tau	21.5148504	104.4315746	Xã	139	\N	\N
4603	Xã Tà Si Láng	xa-ta-si-lang	21.4824683	104.6004911	Xã	139	\N	\N
4606	Xã Pá Hu	xa-pa-hu	21.4895071	104.4548621	Xã	139	\N	\N
4609	Xã Làng Nhì	xa-lang-nhi	21.5020278	104.536689	Xã	139	\N	\N
4612	Xã Bản Công	xa-ban-cong	21.4584026	104.3442794	Xã	139	\N	\N
4615	Xã Bản Mù	xa-ban-mu	21.3910067	104.4490398	Xã	139	\N	\N
4618	Xã Hát Lìu	xa-hat-liu	14.058324	108.277199	Xã	139	\N	\N
4621	Thị trấn NT Liên Sơn	thi-tran-nt-lien-son	21.6653829	104.491256	Thị trấn	140	\N	\N
4624	Thị trấn NT Nghĩa Lộ	thi-tran-nt-nghia-lo	14.058324	108.277199	Thị trấn	140	\N	\N
4627	Thị trấn NT Trần Phú	thi-tran-nt-tran-phu	21.475298	104.7623033	Thị trấn	140	\N	\N
4630	Xã Tú Lệ	xa-tu-le	21.7899883	104.2966426	Xã	140	\N	\N
4633	Xã Nậm Búng	xa-nam-bung	21.7253962	104.3559158	Xã	140	\N	\N
4636	Xã Gia Hội	xa-gia-hoi	21.7319148	104.4141114	Xã	140	\N	\N
4639	Xã Sùng Đô	xa-sung-do	21.7215781	104.5305715	Xã	140	\N	\N
4642	Xã Nậm Mười	xa-nam-muoi	21.7257237	104.4839765	Xã	140	\N	\N
4645	Xã An Lương	xa-an-luong	21.717418	104.577181	Xã	140	\N	\N
4648	Xã Nậm Lành	xa-nam-lanh	21.6599568	104.4373961	Xã	140	\N	\N
4651	Xã Sơn Lương	xa-son-luong	21.6844394	104.4898001	Xã	140	\N	\N
4654	Xã Suối Quyền	xa-suoi-quyen	21.6559699	104.5480484	Xã	140	\N	\N
4657	Xã Suối Giàng	xa-suoi-giang	21.6221853	104.6004911	Xã	140	\N	\N
4660	Xã Sơn A	xa-son-a	21.6341632	104.4985359	Xã	140	\N	\N
4663	Xã Phù Nham	xa-phu-nham	21.6231036	104.5247463	Xã	140	\N	\N
4666	Xã Nghĩa Sơn	xa-nghia-son	21.6049654	104.4665072	Xã	140	\N	\N
4669	Xã Suối Bu	xa-suoi-bu	21.5651104	104.652952	Xã	140	\N	\N
4672	Xã Sơn Thịnh	xa-son-thinh	21.5703097	104.5946633	Xã	140	\N	\N
4675	Xã Thanh Lương	xa-thanh-luong	21.5680425	104.5218338	Xã	140	\N	\N
4678	Xã Hạnh Sơn	xa-hanh-son	21.5706187	104.492712	Xã	140	\N	\N
4681	Xã Phúc Sơn	xa-phuc-son	21.5446695	104.4898001	Xã	140	\N	\N
4684	Xã Thạch Lương	xa-thach-luong	21.5394424	104.516009	Xã	140	\N	\N
4687	Xã Đại Lịch	xa-dai-lich	21.5335065	104.8104424	Xã	140	\N	\N
4690	Xã Đồng Khê	xa-dong-khe	21.5312275	104.6412925	Xã	140	\N	\N
4693	Xã Cát Thịnh	xa-cat-thinh	21.4508836	104.6937674	Xã	140	\N	\N
4696	Xã Tân Thịnh	xa-tan-thinh	21.5080977	104.7695962	Xã	140	\N	\N
4699	Xã Chấn Thịnh	xa-chan-thinh	21.4848617	104.8337879	Xã	140	\N	\N
4702	Xã Bình Thuận	xa-binh-thuan	21.4298431	104.798771	Xã	140	\N	\N
4705	Xã Thượng Bằng La	xa-thuong-bang-la	21.3980763	104.7637619	Xã	140	\N	\N
4708	Xã Minh An	xa-minh-an	21.3685259	104.8337879	Xã	140	\N	\N
4711	Xã Nghĩa Tâm	xa-nghia-tam	21.4150596	104.8337879	Xã	140	\N	\N
4714	Thị trấn Yên Bình	thi-tran-yen-binh	21.7459652	104.9680914	Thị trấn	141	\N	\N
4717	Thị trấn Thác Bà	thi-tran-thac-ba	21.743216	105.0294415	Thị trấn	141	\N	\N
4720	Xã Xuân Long	xa-xuan-long	22.0135792	104.9038451	Xã	141	\N	\N
4723	Xã Tích Cốc	xa-tich-coc	22.0239819	104.9797753	Xã	141	\N	\N
4726	Xã Cảm Nhân	xa-cam-nhan	21.9715666	104.9724305	Xã	141	\N	\N
4729	Xã Ngọc Chấn	xa-ngoc-chan	21.9648937	104.9272044	Xã	141	\N	\N
4732	Xã Tân Nguyên	xa-tan-nguyen	21.931244	104.7871004	Xã	141	\N	\N
4735	Xã Phúc Ninh	xa-phuc-ninh	21.9385111	104.8980058	Xã	141	\N	\N
4738	Xã Bảo Ái	xa-bao-ai	21.9036983	104.8337879	Xã	141	\N	\N
4741	Xã Mỹ Gia	xa-my-gia	21.9341969	104.9447261	Xã	141	\N	\N
4744	Xã Xuân Lai	xa-xuan-lai	21.9193226	104.9797753	Xã	141	\N	\N
4747	Xã Mông Sơn	xa-mong-son	21.8739976	104.9038451	Xã	141	\N	\N
4750	Xã Cảm Ân	xa-cam-an	21.8603032	104.8629746	Xã	141	\N	\N
4753	Xã Yên Thành	xa-yen-thanh	21.8886271	104.9973028	Xã	141	\N	\N
4756	Xã Tân Hương	xa-tan-huong	21.8296141	104.8804893	Xã	141	\N	\N
4759	Xã Phúc An	xa-phuc-an	21.8463054	105.0148322	Xã	141	\N	\N
4762	Xã Bạch Hà	xa-bach-ha	21.8123603	105.0674317	Xã	141	\N	\N
4765	Xã Vũ Linh	xa-vu-linh	21.8120584	105.0278389	Xã	141	\N	\N
4768	Xã Đại Đồng	xa-dai-dong	21.7830038	104.9447261	Xã	141	\N	\N
4771	Xã Vĩnh Kiên	xa-vinh-kien	21.7701868	105.0206757	Xã	141	\N	\N
4774	Xã Yên Bình	xa-yen-binh	21.7605878	105.0615865	Xã	141	\N	\N
4777	Xã Thịnh Hưng	xa-thinh-hung	21.7078528	105.0031457	Xã	141	\N	\N
4780	Xã Hán Đà	xa-han-da	21.7267924	105.0498966	Xã	141	\N	\N
4783	Xã Phú Thịnh	xa-phu-thinh	21.7110775	104.9680914	Xã	141	\N	\N
4786	Xã Đại Minh	xa-dai-minh	21.6934707	105.0645091	Xã	141	\N	\N
4789	Phường Thái Bình	phuong-thai-binh	20.7914141	105.3418466	Phường	148	\N	\N
4792	Phường Tân Hòa	phuong-tan-hoa	20.8554944	105.3336087	Phường	148	\N	\N
4795	Phường Thịnh Lang	phuong-thinh-lang	20.8412323	105.3467822	Phường	148	\N	\N
4798	Phường Hữu Nghị	phuong-huu-nghi	20.8328094	105.3277541	Phường	148	\N	\N
4801	Phường Tân Thịnh	phuong-tan-thinh	20.8306227	105.3399578	Phường	148	\N	\N
4804	Phường Đồng Tiến	phuong-dong-tien	20.8301398	105.357029	Phường	148	\N	\N
4807	Phường Phương Lâm	phuong-phuong-lam	20.8148625	105.3336087	Phường	148	\N	\N
4810	Phường Chăm Mát	phuong-cham-mat	20.8306409	105.3398943	Phường	148	\N	\N
4813	Xã Yên Mông	xa-yen-mong	20.9093226	105.332145	Xã	148	\N	\N
4816	Xã Sủ Ngòi	xa-su-ngoi	20.821346	105.358726	Xã	148	\N	\N
4819	Xã Dân Chủ	xa-dan-chu	20.790191	105.3485435	Xã	148	\N	\N
4822	Xã Thái Thịnh	xa-thai-thinh	20.8143238	105.3117603	Xã	148	\N	\N
4825	Xã Hòa Bình	xa-hoa-binh	20.8549929	105.3072646	Xã	148	\N	\N
4828	Xã Thống Nhất	xa-thong-nhat	20.7874742	105.3422767	Xã	148	\N	\N
4831	Thị trấn Đà Bắc	thi-tran-da-bac	20.8745626	105.2516629	Thị trấn	150	\N	\N
4834	Xã Đồng Nghê	xa-dong-nghe	21.0606474	104.8734649	Xã	150	\N	\N
4837	Xã Suối Nánh	xa-suoi-nanh	21.0295896	104.882998	Xã	150	\N	\N
4840	Xã Giáp Đắt	xa-giap-dat	21.0165012	104.9711036	Xã	150	\N	\N
4843	Xã Mường Tuổng	xa-muong-tuong	21.0055359	104.902659	Xã	150	\N	\N
4846	Xã Mường Chiềng	xa-muong-chieng	21.011619	104.9601961	Xã	150	\N	\N
4849	Xã Tân Pheo	xa-tan-pheo	20.9881905	105.0498053	Xã	150	\N	\N
4852	Xã Đồng Chum	xa-dong-chum	20.9732337	104.960835	Xã	150	\N	\N
4855	Xã Tân Minh	xa-tan-minh	20.9312113	105.0576308	Xã	150	\N	\N
4858	Xã Đoàn Kết	xa-doan-ket	20.9312113	105.0576308	Xã	150	\N	\N
4861	Xã Đồng Ruộng	xa-dong-ruong	20.9119907	104.9973028	Xã	150	\N	\N
4864	Xã Hào Lý	xa-hao-ly	20.9266252	105.2667314	Xã	150	\N	\N
4867	Xã Tu Lý	xa-tu-ly	20.8951511	105.248737	Xã	150	\N	\N
4870	Xã Trung Thành	xa-trung-thanh	20.8782715	105.1142011	Xã	150	\N	\N
4873	Xã Yên Hòa	xa-yen-hoa	20.8613234	105.044052	Xã	150	\N	\N
4876	Xã Cao Sơn	xa-cao-son	20.8508249	105.1609838	Xã	150	\N	\N
4879	Xã Toàn Sơn	xa-toan-son	20.8455119	105.2838511	Xã	150	\N	\N
4882	Xã Tân Dân	xa-tan-dan	20.8211724	105.0382076	Xã	156	\N	\N
4885	Xã Hiền Lương	xa-hien-luong	20.8380195	105.2194344	Xã	150	\N	\N
4888	Xã Tiền Phong	xa-tien-phong	20.7853283	105.1142011	Xã	150	\N	\N
4891	Xã Vầy Nưa	xa-vay-nua	20.8001445	105.2077798	Xã	150	\N	\N
4894	Thị trấn Kỳ Sơn	thi-tran-ky-son	20.8878719	105.3493944	Thị trấn	151	\N	\N
4897	Xã Hợp Thịnh	xa-hop-thinh	20.9898353	105.3382203	Xã	151	\N	\N
4900	Xã Phú Minh	xa-phu-minh	20.9878791	105.3775245	Xã	151	\N	\N
4903	Xã Hợp Thành	xa-hop-thanh	20.9557309	105.359269	Xã	151	\N	\N
4906	Xã Phúc Tiến	xa-phuc-tien	20.9392921	105.4009508	Xã	151	\N	\N
4909	Xã Dân Hòa	xa-dan-hoa	20.9244511	105.4360963	Xã	151	\N	\N
4912	Xã Mông Hóa	xa-mong-hoa	20.9033943	105.4126652	Xã	151	\N	\N
4915	Xã Dân Hạ	xa-dan-ha	20.8823304	105.3892372	Xã	151	\N	\N
4918	Xã Trung Minh	xa-trung-minh	20.8623301	105.3541013	Xã	148	\N	\N
4921	Xã Độc Lập	xa-doc-lap	20.8232235	105.4009508	Xã	151	\N	\N
4924	Thị trấn Lương Sơn	thi-tran-luong-son	20.8936703	105.5181302	Thị trấn	152	\N	\N
4927	Xã Yên Trung	xa-yen-trung	21.0041459	105.4214515	Xã	276	\N	\N
4930	Xã Yên Bình	xa-yen-binh	20.9919225	105.4595306	Xã	276	\N	\N
4933	Xã Yên Quang	xa-yen-quang	20.9724138	105.4003901	Xã	151	\N	\N
4936	Xã Tiến Xuân	xa-tien-xuan	20.9665439	105.4829681	Xã	276	\N	\N
4939	Xã Đông Xuân	xa-dong-xuan	20.963176	105.5135949	Xã	275	\N	\N
4942	Xã Lâm Sơn	xa-lam-son	20.9137839	105.488828	Xã	152	\N	\N
4945	Xã Hòa Sơn	xa-hoa-son	20.9136147	105.5532993	Xã	152	\N	\N
4948	Xã Trường Sơn	xa-truong-son	20.8421366	105.4478131	Xã	152	\N	\N
4951	Xã Tân Vinh	xa-tan-vinh	20.8610283	105.494688	Xã	152	\N	\N
4954	Xã Nhuận Trạch	xa-nhuan-trach	20.8629534	105.5679552	Xã	152	\N	\N
4957	Xã Cao Răm	xa-cao-ram	20.8421366	105.4478131	Xã	152	\N	\N
4960	Xã Cư Yên	xa-cu-yen	20.854269	105.5537714	Xã	152	\N	\N
4963	Xã Hợp Hòa	xa-hop-hoa	20.8345783	105.5298525	Xã	152	\N	\N
4966	Xã Liên Sơn	xa-lien-son	20.8254377	105.5972706	Xã	152	\N	\N
4969	Xã Thành Lập	xa-thanh-lap	20.8111184	105.6265908	Xã	152	\N	\N
4972	Xã Tiến Sơn	xa-tien-son	20.7869292	105.6060661	Xã	152	\N	\N
4975	Xã Trung Sơn	xa-trung-son	20.7668151	105.6353878	Xã	152	\N	\N
4978	Thị trấn Bo	thi-tran-bo	20.6666156	105.5430409	Thị trấn	153	\N	\N
4981	Thị trấn Thanh Hà	thi-tran-thanh-ha	20.5911878	105.6852455	Thị trấn	159	\N	\N
4984	Xã Đú Sáng	xa-du-sang	20.7944033	105.4463485	Xã	153	\N	\N
4987	Xã  Bắc Sơn	xa-bac-son	20.7612125	105.4998157	Xã	153	\N	\N
4990	Xã Bình Sơn	xa-binh-son	20.7675819	105.4778409	Xã	153	\N	\N
4993	Xã Hùng Tiến	xa-hung-tien	20.7617863	105.5408428	Xã	153	\N	\N
4996	Xã Tân Thành	xa-tan-thanh	20.9136147	105.5532993	Xã	152	\N	\N
4999	Xã Tú Sơn	xa-tu-son	20.7378887	105.4060758	Xã	153	\N	\N
5002	Xã Nật Sơn	xa-nat-son	20.7421266	105.5496355	Xã	153	\N	\N
5005	Xã Vĩnh Tiến	xa-vinh-tien	20.7347706	105.4561783	Xã	153	\N	\N
5008	Xã Cao Dương	xa-cao-duong	20.7193455	105.6471178	Xã	152	\N	\N
5011	Xã Sơn Thủy	xa-son-thuy	20.729203	105.4851655	Xã	153	\N	\N
5014	Xã Đông Bắc	xa-dong-bac	20.720404	105.4722221	Xã	153	\N	\N
5017	Xã Thượng Bì	xa-thuong-bi	20.6901132	105.5239912	Xã	153	\N	\N
5020	Xã Lập Chiệng	xa-lap-chieng	20.6913694	105.5597419	Xã	153	\N	\N
5023	Xã Hợp Châu	xa-hop-chau	20.872328	105.5283054	Xã	152	\N	\N
5026	Xã Vĩnh Đồng	xa-vinh-dong	20.7045497	105.4851655	Xã	153	\N	\N
5029	Xã Hạ Bì	xa-ha-bi	20.681687	105.5259374	Xã	153	\N	\N
5032	Xã Trung Bì	xa-trung-bi	20.670149	105.5528907	Xã	153	\N	\N
5035	Xã Kim Sơn	xa-kim-son	20.6708819	105.5833452	Xã	153	\N	\N
5038	Xã Hợp Đồng	xa-hop-dong	20.6680627	105.4639249	Xã	153	\N	\N
5041	Xã Long Sơn	xa-long-son	20.8645223	105.5477142	Xã	152	\N	\N
5044	Xã Thượng Tiến	xa-thuong-tien	20.6405371	105.4397577	Xã	153	\N	\N
5047	Xã Cao Thắng	xa-cao-thang	20.6834752	105.6588485	Xã	152	\N	\N
5050	Xã Kim Tiến	xa-kim-tien	20.657222	105.515378	Xã	153	\N	\N
5053	Xã Kim Bình	xa-kim-binh	20.6901132	105.5239912	Xã	153	\N	\N
5056	Xã Hợp Kim	xa-hop-kim	20.6580696	105.5615544	Xã	153	\N	\N
5950	Xã Úc Kỳ	xa-uc-ky	21.4582492	105.9457531	Xã	173	\N	\N
5059	Xã Thanh Lương	xa-thanh-luong	20.8713499	105.5268876	Xã	152	\N	\N
5062	Xã Hợp Thanh	xa-hop-thanh	20.6379029	105.655728	Xã	152	\N	\N
5065	Xã Kim Bôi	xa-kim-boi	20.6624054	105.544262	Xã	153	\N	\N
5068	Xã Nam Thượng	xa-nam-thuong	20.6235684	105.5855438	Xã	153	\N	\N
5071	Xã Kim Truy	xa-kim-truy	20.6247965	105.5642911	Xã	153	\N	\N
5074	Xã Thanh Nông	xa-thanh-nong	20.6012373	105.6705801	Xã	159	\N	\N
5077	Xã Cuối Hạ	xa-cuoi-ha	20.5920067	105.5503683	Xã	153	\N	\N
5080	Xã Sào Báy	xa-sao-bay	20.5961301	105.6002024	Xã	153	\N	\N
5083	Xã Mi Hòa	xa-mi-hoa	20.577589	105.6441852	Xã	153	\N	\N
5086	Xã Nuông Dăm	xa-nuong-dam	20.5771846	105.5855438	Xã	153	\N	\N
5089	Thị trấn Cao Phong	thi-tran-cao-phong	20.7019477	105.3306814	Thị trấn	154	\N	\N
5092	Xã Bình Thanh	xa-binh-thanh	20.7293612	105.3133929	Xã	154	\N	\N
5095	Xã Thung Nai	xa-thung-nai	20.7463022	105.2253316	Xã	154	\N	\N
5098	Xã Bắc Phong	xa-bac-phong	20.7293612	105.3133929	Xã	154	\N	\N
5101	Xã Thu Phong	xa-thu-phong	20.7346436	105.3541013	Xã	154	\N	\N
5104	Xã Đông Phong	xa-dong-phong	20.6998229	105.3541013	Xã	154	\N	\N
5107	Xã Xuân Phong	xa-xuan-phong	20.6850241	105.3892372	Xã	154	\N	\N
5110	Xã Tây Phong	xa-tay-phong	20.6772378	105.3066158	Xã	154	\N	\N
5113	Xã Tân Phong	xa-tan-phong	20.6776716	105.3423909	Xã	154	\N	\N
5116	Xã Dũng Phong	xa-dung-phong	20.6634283	105.3394635	Xã	154	\N	\N
5119	Xã Nam Phong	xa-nam-phong	20.6449697	105.3189726	Xã	154	\N	\N
5122	Xã Yên Lập	xa-yen-lap	20.64073	105.3658125	Xã	154	\N	\N
5125	Xã Yên Thượng	xa-yen-thuong	20.6164583	105.3775245	Xã	154	\N	\N
5128	Thị trấn Mường Khến	thi-tran-muong-khen	20.6213895	105.2775923	Thị trấn	155	\N	\N
5131	Xã Ngòi Hoa	xa-ngoi-hoa	20.7460313	105.1880361	Xã	155	\N	\N
5134	Xã Trung Hòa	xa-trung-hoa	20.7093553	105.2326454	Xã	155	\N	\N
5137	Xã Phú Vinh	xa-phu-vinh	20.6857395	105.1790607	Xã	155	\N	\N
5140	Xã Phú Cường	xa-phu-cuong	20.6486075	105.1568198	Xã	155	\N	\N
5143	Xã Mỹ Hòa	xa-my-hoa	20.645867	105.2270496	Xã	155	\N	\N
5146	Xã Quy Hậu	xa-quy-hau	20.6317183	105.2779405	Xã	155	\N	\N
5149	Xã Phong Phú	xa-phong-phu	20.6312345	105.2136302	Xã	155	\N	\N
5152	Xã Quyết Chiến	xa-quyet-chien	20.59628	105.1949501	Xã	155	\N	\N
5155	Xã Mãn Đức	xa-man-duc	20.6058701	105.2842404	Xã	155	\N	\N
5158	Xã Địch Giáo	xa-dich-giao	20.6088483	105.2221257	Xã	155	\N	\N
5161	Xã Tuân Lộ	xa-tuan-lo	20.5958857	105.2355711	Xã	155	\N	\N
5164	Xã Tử Nê	xa-tu-ne	20.5890442	105.2955575	Xã	155	\N	\N
5167	Xã Thanh Hối	xa-thanh-hoi	14.058324	108.277199	Xã	155	\N	\N
5170	Xã Ngọc Mỹ	xa-ngoc-my	20.5294651	105.3449885	Xã	155	\N	\N
5173	Xã Đông Lai	xa-dong-lai	20.5513813	105.3195645	Xã	155	\N	\N
5176	Xã Lũng Vân	xa-lung-van	20.5610096	105.1792619	Xã	155	\N	\N
5179	Xã Bắc Sơn	xa-bac-son	20.5804857	105.1317431	Xã	155	\N	\N
5182	Xã Quy Mỹ	xa-quy-my	20.5876667	105.228341	Xã	155	\N	\N
5185	Xã Do Nhân	xa-do-nhan	20.5580273	105.2450797	Xã	155	\N	\N
5188	Xã Nam Sơn	xa-nam-son	20.5425222	105.1668326	Xã	155	\N	\N
5191	Xã Lỗ Sơn	xa-lo-son	20.5331094	105.2721456	Xã	155	\N	\N
5194	Xã Ngổ Luông	xa-ngo-luong	20.487727	105.2604409	Xã	155	\N	\N
5197	Xã Gia Mô	xa-gia-mo	20.5077948	105.2955575	Xã	155	\N	\N
5200	Thị trấn Mai Châu	thi-tran-mai-chau	20.6597996	105.0917677	Thị trấn	156	\N	\N
5203	Xã Tân Mai	xa-tan-mai	20.7726056	105.0615865	Xã	156	\N	\N
5206	Xã Phúc Sạn	xa-phuc-san	20.75249	105.0265195	Xã	156	\N	\N
5209	Xã Pà Cò	xa-pa-co	20.7435627	104.8869038	Xã	156	\N	\N
5212	Xã Hang Kia	xa-hang-kia	20.7426774	104.8746508	Xã	156	\N	\N
5215	Xã Ba Khan	xa-ba-khan	20.7219573	105.1083542	Xã	156	\N	\N
5218	Xã Tân Sơn	xa-tan-son	20.7191279	104.9768543	Xã	156	\N	\N
5221	Xã Đồng Bảng	xa-dong-bang	20.7165905	105.0382076	Xã	156	\N	\N
5224	Xã Cun Pheo	xa-cun-pheo	20.6898474	104.8804893	Xã	156	\N	\N
5227	Xã Bao La	xa-bao-la	20.6816151	104.9739333	Xã	156	\N	\N
5230	Xã Piềng Vế	xa-pieng-ve	20.6677888	104.9330448	Xã	156	\N	\N
5233	Xã Tòng Đậu	xa-tong-dau	20.6891923	105.0849687	Xã	156	\N	\N
5236	Xã Nà Mèo	xa-na-meo	20.6827696	105.0265195	Xã	156	\N	\N
5239	Xã Thung Khe	xa-thung-khe	20.6700055	105.1164365	Xã	156	\N	\N
5242	Xã Nà Phòn	xa-na-phon	20.657844	105.069758	Xã	156	\N	\N
5245	Xã Săm Khóe	xa-sam-khoe	20.6520455	104.9797753	Xã	156	\N	\N
5248	Xã Chiềng Châu	xa-chieng-chau	20.6437631	105.0732771	Xã	156	\N	\N
5251	Xã Mai Hạ	xa-mai-ha	20.6236384	105.0382076	Xã	156	\N	\N
5254	Xã Nong Luông	xa-nong-luong	20.6395217	105.0730031	Xã	156	\N	\N
5257	Xã Mai Hịch	xa-mai-hich	20.6098264	104.9973028	Xã	156	\N	\N
5260	Xã Pù Pin	xa-pu-pin	20.611249	105.100469	Xã	156	\N	\N
5263	Xã Vạn Mai	xa-van-mai	20.5887839	105.0382076	Xã	156	\N	\N
5266	Thị trấn Vụ Bản	thi-tran-vu-ban	20.4624294	105.4448838	Thị trấn	157	\N	\N
5269	Xã Quý Hòa	xa-quy-hoa	20.5910705	105.4653897	Xã	157	\N	\N
5272	Xã Miền Đồi	xa-mien-doi	20.5668581	105.4126652	Xã	157	\N	\N
5275	Xã Mỹ Thành	xa-my-thanh	20.5572625	105.5181302	Xã	157	\N	\N
5278	Xã Tuân Đạo	xa-tuan-dao	20.5599684	105.4566012	Xã	157	\N	\N
5281	Xã Văn Nghĩa	xa-van-nghia	20.5246044	105.494688	Xã	157	\N	\N
5284	Xã Văn Sơn	xa-van-son	20.5188731	105.3980224	Xã	157	\N	\N
5287	Xã Tân Lập	xa-tan-lap	20.5533446	105.4388582	Xã	157	\N	\N
5290	Xã Nhân Nghĩa	xa-nhan-nghia	20.5204302	105.4448838	Xã	157	\N	\N
5293	Xã Thượng Cốc	xa-thuong-coc	20.50411	105.3848449	Xã	157	\N	\N
5296	Xã Phú Lương	xa-phu-luong	20.4845937	105.3277541	Xã	157	\N	\N
5299	Xã Phúc Tuy	xa-phuc-tuy	20.4922458	105.3555652	Xã	157	\N	\N
5302	Xã Xuất Hóa	xa-xuat-hoa	20.484191	105.4207193	Xã	157	\N	\N
5305	Xã Yên Phú	xa-yen-phu	20.495104	105.4683193	Xã	157	\N	\N
5308	Xã Bình Hẻm	xa-binh-hem	20.4834431	105.5327831	Xã	157	\N	\N
5311	Xã Chí Thiện	xa-chi-thien	20.4772138	105.3775245	Xã	157	\N	\N
5314	Xã Bình Cảng	xa-binh-cang	20.4592445	105.4800382	Xã	157	\N	\N
5317	Xã Bình Chân	xa-binh-chan	20.4665822	105.5269218	Xã	157	\N	\N
5320	Xã Định Cư	xa-dinh-cu	20.4547964	105.4090044	Xã	157	\N	\N
5323	Xã Chí Đạo	xa-chi-dao	20.4501844	105.395826	Xã	157	\N	\N
5326	Xã Liên Vũ	xa-lien-vu	20.455569	105.4566012	Xã	157	\N	\N
5329	Xã Ngọc Sơn	xa-ngoc-son	20.4315958	105.3848449	Xã	157	\N	\N
5332	Xã Hương Nhượng	xa-huong-nhuong	20.450498	105.430984	Xã	157	\N	\N
5335	Xã Vũ Lâm	xa-vu-lam	20.4418473	105.4800382	Xã	157	\N	\N
5338	Xã Tự Do	xa-tu-do	20.4107549	105.3423909	Xã	157	\N	\N
5341	Xã Yên Nghiệp	xa-yen-nghiep	20.3938419	105.5298525	Xã	157	\N	\N
5344	Xã Tân Mỹ	xa-tan-my	20.4107489	105.471249	Xã	157	\N	\N
5347	Xã Ân Nghĩa	xa-an-nghia	20.3843721	105.5064087	Xã	157	\N	\N
5350	Xã Ngọc Lâu	xa-ngoc-lau	20.4149826	105.4243804	Xã	157	\N	\N
5353	Thị trấn Hàng Trạm	thi-tran-hang-tram	20.3926804	105.6221924	Thị trấn	158	\N	\N
5356	Xã Lạc Sỹ	xa-lac-sy	20.5193319	105.571745	Xã	158	\N	\N
5359	Xã Lạc Hưng	xa-lac-hung	20.4898026	105.6691136	Xã	158	\N	\N
5362	Xã Lạc Lương	xa-lac-luong	20.4752653	105.6143187	Xã	158	\N	\N
5365	Xã Bảo Hiệu	xa-bao-hieu	20.4490132	105.6478509	Xã	158	\N	\N
5368	Xã Đa Phúc	xa-da-phuc	20.4355844	105.5820592	Xã	158	\N	\N
5371	Xã Hữu Lợi	xa-huu-loi	20.412432	105.6592874	Xã	158	\N	\N
5374	Xã Lạc Thịnh	xa-lac-thinh	20.405405	105.5620927	Xã	158	\N	\N
5377	Xã Yên Lạc	xa-yen-lac	20.3923088	105.6238333	Xã	158	\N	\N
5380	Xã Đoàn Kết	xa-doan-ket	20.3784812	105.6840402	Xã	158	\N	\N
5383	Xã Phú Lai	xa-phu-lai	20.3729479	105.6435324	Xã	158	\N	\N
5386	Xã Yên Trị	xa-yen-tri	20.3610251	105.6515167	Xã	158	\N	\N
5389	Xã Ngọc Lương	xa-ngoc-luong	20.343523	105.6948928	Xã	158	\N	\N
5392	Thị trấn Chi Nê	thi-tran-chi-ne	20.4892421	105.7850022	Thị trấn	159	\N	\N
5395	Xã Phú Lão	xa-phu-lao	20.5630503	105.7466953	Xã	159	\N	\N
5398	Xã Phú Thành	xa-phu-thanh	20.5695472	105.6999122	Xã	159	\N	\N
5401	Xã Cố Nghĩa	xa-co-nghia	20.5272002	105.7557893	Xã	159	\N	\N
5404	Xã Hưng Thi	xa-hung-thi	20.5135756	105.6705765	Xã	159	\N	\N
5407	Xã Lạc Long	xa-lac-long	20.504079	105.77946	Xã	159	\N	\N
5410	Xã Liên Hòa	xa-lien-hoa	20.5150898	105.7308209	Xã	159	\N	\N
5413	Xã Khoan Dụ	xa-khoan-du	20.483628	105.757828	Xã	159	\N	\N
5416	Xã Đồng Môn	xa-dong-mon	20.4839111	105.7012346	Xã	159	\N	\N
5419	Xã Đồng Tâm	xa-dong-tam	20.4840923	105.7969666	Xã	159	\N	\N
5422	Xã Yên Bồng	xa-yen-bong	20.4829978	105.7585908	Xã	159	\N	\N
5425	Xã An Lạc	xa-an-lac	20.48764	105.780197	Xã	159	\N	\N
5428	Xã An Bình	xa-an-binh	20.4093082	105.7409852	Xã	159	\N	\N
5431	Phường Quán Triều	phuong-quan-trieu	21.6104311	105.8072817	Phường	164	\N	\N
5434	Phường Quang Vinh	phuong-quang-vinh	21.6069384	105.8207123	Phường	164	\N	\N
5437	Phường Túc Duyên	phuong-tuc-duyen	21.5950445	105.8527097	Phường	164	\N	\N
5440	Phường Hoàng Văn Thụ	phuong-hoang-van-thu	21.5962286	105.8304975	Phường	164	\N	\N
5443	Phường Trưng Vương	phuong-trung-vuong	21.5979872	105.8422401	Phường	164	\N	\N
5446	Phường Quang Trung	phuong-quang-trung	21.5910026	105.8198618	Phường	164	\N	\N
5449	Phường Phan Đình Phùng	phuong-phan-dinh-phung	21.5869208	105.8393758	Phường	164	\N	\N
5452	Phường Tân Thịnh	phuong-tan-thinh	21.5795065	105.816367	Phường	164	\N	\N
5455	Phường Thịnh Đán	phuong-thinh-dan	21.5676182	105.809941	Phường	164	\N	\N
5458	Phường Đồng Quang	phuong-dong-quang	21.5831855	105.8282771	Phường	164	\N	\N
5461	Phường Gia Sàng	phuong-gia-sang	21.5726385	105.8495796	Phường	164	\N	\N
5464	Phường Tân Lập	phuong-tan-lap	21.5592176	105.8284962	Phường	164	\N	\N
5467	Phường Cam Giá	phuong-cam-gia	21.5504091	105.8784356	Phường	164	\N	\N
5470	Phường Phú Xá	phuong-phu-xa	21.5550253	105.8525983	Phường	164	\N	\N
5473	Phường Hương Sơn	phuong-huong-son	21.5443215	105.8866869	Phường	164	\N	\N
5476	Phường Trung Thành	phuong-trung-thanh	21.5371338	105.8695771	Phường	164	\N	\N
5479	Phường Tân Thành	phuong-tan-thanh	21.5212613	105.8785317	Phường	164	\N	\N
5482	Phường Tân Long	phuong-tan-long	21.6199351	105.7952744	Phường	164	\N	\N
5485	Xã Phúc Hà	xa-phuc-ha	21.6068807	105.7933885	Xã	164	\N	\N
5488	Xã Phúc Xuân	xa-phuc-xuan	21.578174	105.7596473	Xã	164	\N	\N
5491	Xã Quyết Thắng	xa-quyet-thang	21.5811997	105.7907062	Xã	164	\N	\N
5494	Xã Phúc Trìu	xa-phuc-triu	21.5591259	105.7454339	Xã	164	\N	\N
5497	Xã Thịnh Đức	xa-thinh-duc	21.5421683	105.7985369	Xã	164	\N	\N
5500	Phường Tích Lương	phuong-tich-luong	21.5322823	105.8430487	Phường	164	\N	\N
5503	Xã Tân Cương	xa-tan-cuong	21.5387812	105.7631802	Xã	164	\N	\N
5506	Phường Lương Sơn	phuong-luong-son	21.5190942	105.8936224	Phường	165	\N	\N
5509	Phường Lương Châu	phuong-luong-chau	21.4815971	105.8319653	Phường	165	\N	\N
5512	Phường Mỏ Chè	phuong-mo-che	21.4742093	105.8334331	Phường	165	\N	\N
5515	Phường Cải Đan	phuong-cai-dan	21.4613691	105.8613233	Phường	165	\N	\N
5518	Phường Thắng Lợi	phuong-thang-loi	21.4636397	105.8378366	Phường	165	\N	\N
5521	Phường Phố Cò	phuong-pho-co	21.4514793	105.843708	Phường	165	\N	\N
5524	Xã Vinh Sơn	xa-vinh-son	21.4690884	105.8114175	Xã	165	\N	\N
5527	Xã Tân Quang	xa-tan-quang	21.483019	105.8576919	Xã	165	\N	\N
5528	Phường Bách Quang	phuong-bach-quang	21.483019	105.8576919	Phường	165	\N	\N
5530	Xã Bình Sơn	xa-binh-son	21.5079247	105.8057541	Xã	165	\N	\N
5533	Xã Bá Xuyên	xa-ba-xuyen	21.4982433	105.8303467	Xã	165	\N	\N
5536	Thị trấn Chợ Chu	thi-tran-cho-chu	21.911506	105.6441852	Thị trấn	167	\N	\N
5539	Xã Linh Thông	xa-linh-thong	14.058324	108.277199	Xã	167	\N	\N
5542	Xã Lam Vỹ	xa-lam-vy	21.9794147	105.763092	Xã	167	\N	\N
5545	Xã Quy Kỳ	xa-quy-ky	21.9774451	105.623763	Xã	167	\N	\N
5548	Xã Tân Thịnh	xa-tan-thinh	21.9402432	105.6958631	Xã	167	\N	\N
5551	Xã Kim Phượng	xa-kim-phuong	21.9381095	105.6575775	Xã	167	\N	\N
5554	Xã Bảo Linh	xa-bao-linh	21.9047441	105.5716193	Xã	167	\N	\N
5557	Xã Kim Sơn	xa-kim-son	21.942588	105.6302561	Xã	167	\N	\N
5560	Xã Phúc Chu	xa-phuc-chu	21.9135502	105.6155951	Xã	167	\N	\N
5563	Xã Tân Dương	xa-tan-duong	21.906195	105.686786	Xã	167	\N	\N
5566	Xã Phượng Tiến	xa-phuong-tien	21.8864504	105.663151	Xã	167	\N	\N
5569	Xã Bảo Cường	xa-bao-cuong	21.8973254	105.621975	Xã	167	\N	\N
5572	Xã Đồng Thịnh	xa-dong-thinh	21.8858589	105.600571	Xã	167	\N	\N
5575	Xã Định Biên	xa-dinh-bien	21.8774678	105.5778177	Xã	167	\N	\N
5578	Xã Thanh Định	xa-thanh-dinh	21.8572917	105.5590653	Xã	167	\N	\N
5581	Xã Trung Hội	xa-trung-hoi	21.8660249	105.6306086	Xã	167	\N	\N
5584	Xã Trung Lương	xa-trung-luong	21.8568068	105.6024012	Xã	167	\N	\N
5587	Xã Bình Yên	xa-binh-yen	21.8396965	105.5767493	Xã	167	\N	\N
5590	Xã Điềm Mặc	xa-diem-mac	21.8303415	105.5537707	Xã	167	\N	\N
5593	Xã Phú Tiến	xa-phu-tien	21.8231581	105.6654474	Xã	167	\N	\N
5596	Xã Bộc Nhiêu	xa-boc-nhieu	14.058324	108.277199	Xã	167	\N	\N
5599	Xã Sơn Phú	xa-son-phu	21.8152923	105.566805	Xã	167	\N	\N
5602	Xã Phú Đình	xa-phu-dinh	21.7961383	105.5393774	Xã	167	\N	\N
5605	Xã Bình Thành	xa-binh-thanh	21.7836364	105.5789479	Xã	167	\N	\N
5608	Thị trấn Giang Tiên	thi-tran-giang-tien	21.6767788	105.7321831	Thị trấn	168	\N	\N
5611	Thị trấn Đu	thi-tran-du	21.7190769	105.7145801	Thị trấn	168	\N	\N
5614	Xã Yên Ninh	xa-yen-ninh	21.8638259	105.7468535	Xã	168	\N	\N
5617	Xã Yên Trạch	xa-yen-trach	21.8587596	105.689738	Xã	168	\N	\N
5620	Xã Yên Đổ	xa-yen-do	21.8014097	105.7028457	Xã	168	\N	\N
5623	Xã Yên Lạc	xa-yen-lac	21.7758198	105.7627581	Xã	168	\N	\N
5626	Xã Ôn Lương	xa-on-luong	21.7864991	105.6471178	Xã	168	\N	\N
5629	Xã Động Đạt	xa-dong-dat	21.7680894	105.7175138	Xã	168	\N	\N
5632	Xã Phủ Lý	xa-phu-ly	21.7482962	105.6823124	Xã	168	\N	\N
5635	Xã Phú Đô	xa-phu-do	21.7355997	105.7997382	Xã	168	\N	\N
5638	Xã Hợp Thành	xa-hop-thanh	21.761114	105.6569606	Xã	168	\N	\N
5641	Xã Tức Tranh	xa-tuc-tranh	21.7223726	105.7703287	Xã	168	\N	\N
5644	Xã Phấn Mễ	xa-phan-me	21.6880293	105.7057792	Xã	168	\N	\N
5647	Xã Vô Tranh	xa-vo-tranh	21.6823526	105.7644596	Xã	168	\N	\N
5650	Xã Cổ Lũng	xa-co-lung	21.6486972	105.7527221	Xã	168	\N	\N
5653	Xã Sơn Cẩm	xa-son-cam	21.6330267	105.7815414	Xã	164	\N	\N
5656	Thị trấn Sông Cầu	thi-tran-song-cau	21.6753867	105.8510475	Thị trấn	169	\N	\N
5659	Phường Chùa Hang	phuong-chua-hang	21.6081364	105.8053178	Phường	164	\N	\N
5662	Thị trấn Trại Cau	thi-tran-trai-cau	21.5934806	105.9479561	Thị trấn	169	\N	\N
5665	Xã Văn Lăng	xa-van-lang	21.7740081	105.828744	Xã	169	\N	\N
5668	Xã Tân Long	xa-tan-long	21.7569082	105.9027993	Xã	169	\N	\N
5671	Xã Hòa Bình	xa-hoa-binh	21.7327476	105.827562	Xã	169	\N	\N
5674	Xã Quang Sơn	xa-quang-son	21.7140355	105.8782062	Xã	169	\N	\N
5677	Xã Minh Lập	xa-minh-lap	21.6867161	105.8165542	Xã	169	\N	\N
5680	Xã Văn Hán	xa-van-han	21.6635488	105.9314341	Xã	169	\N	\N
5683	Xã Hóa Trung	xa-hoa-trung	21.6548738	105.8459098	Xã	169	\N	\N
5686	Xã Khe Mo	xa-khe-mo	21.6649268	105.89142	Xã	169	\N	\N
5689	Xã Cây Thị	xa-cay-thi	21.6530449	106.0052437	Xã	169	\N	\N
5692	Xã Hóa Thượng	xa-hoa-thuong	21.656053	105.8167852	Xã	169	\N	\N
5695	Xã Cao Ngạn	xa-cao-ngan	21.6347932	105.8135262	Xã	164	\N	\N
5698	Xã Hợp Tiến	xa-hop-tien	21.5750118	106.0203305	Xã	169	\N	\N
5701	Xã Linh Sơn	xa-linh-son	21.6209919	105.8664614	Xã	164	\N	\N
5704	Xã Tân Lợi	xa-tan-loi	21.5909878	105.965406	Xã	169	\N	\N
5707	Xã Nam Hòa	xa-nam-hoa	21.6101854	105.9178504	Xã	169	\N	\N
5710	Phường Đồng Bẩm	phuong-dong-bam	21.5953103	105.8404194	Phường	164	\N	\N
5713	Xã Huống Thượng	xa-huong-thuong	21.5855109	105.87306	Xã	164	\N	\N
5716	Thị trấn Đình Cả	thi-tran-dinh-ca	21.7499202	106.0654875	Thị trấn	170	\N	\N
5719	Xã Sảng Mộc	xa-sang-moc	21.8909582	105.9795356	Xã	170	\N	\N
6403	Xã Yên Sơn	xa-yen-son	21.5920125	106.4074622	Xã	186	\N	\N
5722	Xã Nghinh Tường	xa-nghinh-tuong	21.8793045	106.0676919	Xã	170	\N	\N
5725	Xã Thần Xa	xa-than-xa	21.8226577	105.9156477	Xã	170	\N	\N
5728	Xã Vũ Chấn	xa-vu-chan	21.7793409	106.0169971	Xã	170	\N	\N
5731	Xã Thượng Nung	xa-thuong-nung	21.8136072	105.9707222	Xã	170	\N	\N
5734	Xã Phú Thượng	xa-phu-thuong	21.772826	106.1191349	Xã	170	\N	\N
5737	Xã Cúc Đường	xa-cuc-duong	21.7621818	105.963378	Xã	170	\N	\N
5740	Xã La Hiên	xa-la-hien	21.7037836	105.9237243	Xã	170	\N	\N
5743	Xã Lâu Thượng	xa-lau-thuong	21.728795	105.9861459	Xã	170	\N	\N
5746	Xã Tràng Xá	xa-trang-xa	21.6867739	106.0890023	Xã	170	\N	\N
5749	Xã Phương Giao	xa-phuong-giao	21.6868618	106.1610343	Xã	170	\N	\N
5752	Xã Liên Minh	xa-lien-minh	21.6862834	106.0427102	Xã	170	\N	\N
5755	Xã Dân Tiến	xa-dan-tien	21.6694497	106.125015	Xã	170	\N	\N
5758	Xã Bình Long	xa-binh-long	21.6564124	106.1792484	Xã	170	\N	\N
5761	Thị trấn Hùng Sơn	thi-tran-hung-son	21.6472757	105.6471178	Thị trấn	171	\N	\N
5764	Thị trấn Quân Chu	thi-tran-quan-chu	21.4981346	105.7204476	Thị trấn	171	\N	\N
5767	Xã Phúc Lương	xa-phuc-luong	21.7434781	105.6119301	Xã	171	\N	\N
5770	Xã Minh Tiến	xa-minh-tien	21.7374991	105.5532993	Xã	171	\N	\N
5773	Xã Yên Lãng	xa-yen-lang	21.6775815	105.5122694	Xã	171	\N	\N
5776	Xã Đức Lương	xa-duc-luong	21.7213975	105.6002024	Xã	171	\N	\N
5779	Xã Phú Cường	xa-phu-cuong	21.7131654	105.5650239	Xã	171	\N	\N
5782	Xã Na Mao	xa-na-mao	21.6948177	105.5445064	Xã	171	\N	\N
5785	Xã Phú Lạc	xa-phu-lac	21.6970645	105.6119301	Xã	171	\N	\N
5788	Xã Tân Linh	xa-tan-linh	21.6809528	105.6588485	Xã	171	\N	\N
5791	Xã Phú Thịnh	xa-phu-thinh	21.6740463	105.5796808	Xã	171	\N	\N
5794	Xã Phục Linh	xa-phuc-linh	21.665962	105.6940454	Xã	171	\N	\N
5797	Xã Phú Xuyên	xa-phu-xuyen	21.6573775	105.5415755	Xã	171	\N	\N
5800	Xã Bản Ngoại	xa-ban-ngoai	21.6622545	105.6119301	Xã	171	\N	\N
5803	Xã Tiên Hội	xa-tien-hoi	21.6469074	105.6207263	Xã	171	\N	\N
5809	Xã Cù Vân	xa-cu-van	21.6393675	105.7292491	Xã	171	\N	\N
5812	Xã Hà Thượng	xa-ha-thuong	21.6427622	105.6940454	Xã	171	\N	\N
5815	Xã La Bằng	xa-la-bang	21.6236756	105.5298525	Xã	171	\N	\N
5818	Xã Hoàng Nông	xa-hoang-nong	21.6098363	105.5532993	Xã	171	\N	\N
5821	Xã Khôi Kỳ	xa-khoi-ky	21.6169634	105.6002024	Xã	171	\N	\N
5824	Xã An Khánh	xa-an-khanh	21.613905	105.7527221	Xã	171	\N	\N
5827	Xã Tân Thái	xa-tan-thai	21.6079627	105.6940454	Xã	171	\N	\N
5830	Xã Bình Thuận	xa-binh-thuan	21.6104134	105.6383202	Xã	171	\N	\N
5833	Xã Lục Ba	xa-luc-ba	21.5903907	105.6353878	Xã	171	\N	\N
5836	Xã Mỹ Yên	xa-my-yen	21.5780295	105.5826123	Xã	171	\N	\N
5839	Xã Vạn Thọ	xa-van-tho	21.5727975	105.6676471	Xã	171	\N	\N
5842	Xã Văn Yên	xa-van-yen	21.5567058	105.6236585	Xã	171	\N	\N
5845	Xã Ký Phú	xa-ky-phu	21.5428608	105.6471178	Xã	171	\N	\N
5848	Xã Cát Nê	xa-cat-ne	21.5226521	105.6764461	Xã	171	\N	\N
5851	Xã Quân Chu	xa-quan-chu	21.4762516	105.6764461	Xã	171	\N	\N
5854	Phường Bãi Bông	phuong-bai-bong	21.4351985	105.8804208	Phường	172	\N	\N
5857	Phường Bắc Sơn	phuong-bac-son	21.4534231	105.7774883	Phường	172	\N	\N
5860	Phường Ba Hàng	phuong-ba-hang	21.415762	105.872995	Phường	172	\N	\N
5863	Xã Phúc Tân	xa-phuc-tan	14.058324	108.277199	Xã	172	\N	\N
5866	Xã Phúc Thuận	xa-phuc-thuan	21.4604041	105.7633052	Xã	172	\N	\N
5869	Xã Hồng Tiến	xa-hong-tien	21.4418245	105.8807909	Xã	172	\N	\N
5872	Xã Minh Đức	xa-minh-duc	14.058324	108.277199	Xã	172	\N	\N
5875	Xã Đắc Sơn	xa-dac-son	21.4146741	105.8486183	Xã	172	\N	\N
5878	Phường Đồng Tiến	phuong-dong-tien	21.4315383	105.8990085	Phường	172	\N	\N
5881	Xã Thành Công	xa-thanh-cong	21.4068296	105.7988474	Xã	172	\N	\N
5884	Xã Tiên Phong	xa-tien-phong	21.3861425	105.9271915	Xã	172	\N	\N
5887	Xã Vạn Phái	xa-van-phai	14.058324	108.277199	Xã	172	\N	\N
5890	Xã Nam Tiến	xa-nam-tien	21.4146741	105.8486183	Xã	172	\N	\N
5893	Xã Tân Hương	xa-tan-huong	21.3897767	105.8854097	Xã	172	\N	\N
5896	Xã Đông Cao	xa-dong-cao	14.058324	108.277199	Xã	172	\N	\N
5899	Xã Trung Thành	xa-trung-thanh	21.4149839	105.8707273	Xã	172	\N	\N
5902	Xã Tân Phú	xa-tan-phu	14.058324	108.277199	Xã	172	\N	\N
5905	Xã Thuận Thành	xa-thuan-thanh	21.3373365	105.8680652	Xã	172	\N	\N
5908	Thị trấn Hương Sơn	thi-tran-huong-son	21.4609759	105.9846769	Thị trấn	173	\N	\N
5911	Xã Bàn Đạt	xa-ban-dat	21.5571422	105.9231668	Xã	173	\N	\N
5914	Xã Đồng Liên	xa-dong-lien	21.5677832	105.9086497	Xã	164	\N	\N
5917	Xã Tân Khánh	xa-tan-khanh	21.5332702	105.9570837	Xã	173	\N	\N
5920	Xã Tân Kim	xa-tan-kim	21.5030106	105.9729823	Xã	173	\N	\N
5923	Xã Tân Thành	xa-tan-thanh	21.5085675	106.0051543	Xã	173	\N	\N
5926	Xã Đào Xá	xa-dao-xa	21.5258866	105.9157528	Xã	173	\N	\N
5929	Xã Bảo Lý	xa-bao-ly	21.489584	105.9461441	Xã	173	\N	\N
5932	Xã Thượng Đình	xa-thuong-dinh	21.4990405	105.911129	Xã	173	\N	\N
5935	Xã Tân Hòa	xa-tan-hoa	21.4811899	106.018104	Xã	173	\N	\N
5938	Xã Nhã Lộng	xa-nha-long	21.4707894	105.9360954	Xã	173	\N	\N
5941	Xã Điềm Thụy	xa-diem-thuy	21.4620992	105.9254979	Xã	173	\N	\N
5944	Xã Xuân Phương	xa-xuan-phuong	21.467568	105.962605	Xã	173	\N	\N
5947	Xã Tân Đức	xa-tan-duc	21.4474073	106.0346285	Xã	173	\N	\N
5953	Xã Lương Phú	xa-luong-phu	21.4372999	105.9977724	Xã	173	\N	\N
5956	Xã Nga My	xa-nga-my	21.4292562	105.9398264	Xã	173	\N	\N
5959	Xã Kha Sơn	xa-kha-son	21.4243899	105.9874141	Xã	173	\N	\N
5962	Xã Thanh Ninh	xa-thanh-ninh	21.4220378	106.0011926	Xã	173	\N	\N
5965	Xã Dương Thành	xa-duong-thanh	21.4138005	106.022874	Xã	173	\N	\N
5968	Xã Hà Châu	xa-ha-chau	21.4164652	105.9508935	Xã	173	\N	\N
5971	Phường Hoàng Văn Thụ	phuong-hoang-van-thu	21.8656477	106.7577557	Phường	178	\N	\N
5974	Phường Tam Thanh	phuong-tam-thanh	21.8543711	106.7522375	Phường	178	\N	\N
5977	Phường Vĩnh Trại	phuong-vinh-trai	21.8553522	106.7654182	Phường	178	\N	\N
5980	Phường Đông Kinh	phuong-dong-kinh	21.8458753	106.7636006	Phường	178	\N	\N
5983	Phường Chi Lăng	phuong-chi-lang	21.8419226	106.7495881	Phường	178	\N	\N
5986	Xã Hoàng Đồng	xa-hoang-dong	21.8954013	106.7428468	Xã	178	\N	\N
5989	Xã Quảng Lạc	xa-quang-lac	21.8308728	106.7359837	Xã	178	\N	\N
5992	Xã Mai Pha	xa-mai-pha	21.8287355	106.7674145	Xã	178	\N	\N
5995	Thị trấn Thất Khê	thi-tran-that-khe	22.2566889	106.4731314	Thị trấn	180	\N	\N
5998	Xã Khánh Long	xa-khanh-long	22.4148351	106.2823717	Xã	180	\N	\N
6001	Xã Đoàn Kết	xa-doan-ket	22.3976045	106.2529498	Xã	180	\N	\N
6004	Xã Quốc Khánh	xa-quoc-khanh	22.3852395	106.5466221	Xã	180	\N	\N
6007	Xã Vĩnh Tiến	xa-vinh-tien	22.362072	106.3157058	Xã	180	\N	\N
6010	Xã Cao Minh	xa-cao-minh	22.3599532	106.225003	Xã	180	\N	\N
6013	Xã Chí Minh	xa-chi-minh	22.3320343	106.4118786	Xã	180	\N	\N
6016	Xã Tri Phương	xa-tri-phuong	22.3249884	106.5075892	Xã	180	\N	\N
6019	Xã Tân Tiến	xa-tan-tien	22.3078797	106.3235695	Xã	180	\N	\N
6022	Xã Tân Yên	xa-tan-yen	22.3104246	106.2706024	Xã	180	\N	\N
6025	Xã Đội Cấn	xa-doi-can	22.3210264	106.5525145	Xã	180	\N	\N
6028	Xã Tân Minh	xa-tan-minh	22.3059908	106.6409198	Xã	180	\N	\N
6031	Xã Kim Đồng	xa-kim-dong	22.2791285	106.3780223	Xã	180	\N	\N
6034	Xã Chi Lăng	xa-chi-lang	22.2665416	106.4573596	Xã	180	\N	\N
6037	Xã Trung Thành	xa-trung-thanh	22.2526933	106.6048166	Xã	180	\N	\N
6040	Xã Đại Đồng	xa-dai-dong	22.2542129	106.4842289	Xã	180	\N	\N
6043	Xã Đào Viên	xa-dao-vien	22.2341631	106.6645007	Xã	180	\N	\N
6046	Xã Đề Thám	xa-de-tham	22.2466701	106.4675302	Xã	180	\N	\N
6049	Xã Kháng Chiến	xa-khang-chien	22.2337286	106.5074249	Xã	180	\N	\N
6052	Xã Bắc Ái	xa-bac-ai	22.1988749	106.4199755	Xã	180	\N	\N
6055	Xã Hùng Sơn	xa-hung-son	22.2273763	106.4869709	Xã	180	\N	\N
6058	Xã Quốc Việt	xa-quoc-viet	22.1934419	106.6048166	Xã	180	\N	\N
6061	Xã Hùng Việt	xa-hung-viet	22.1962073	106.5156898	Xã	180	\N	\N
6064	Thị trấn Bình Gia	thi-tran-binh-gia	21.951046	106.3684552	Thị trấn	181	\N	\N
6067	Xã Hưng Đạo	xa-hung-dao	14.058324	108.277199	Xã	181	\N	\N
6070	Xã Vĩnh Yên	xa-vinh-yen	14.058324	108.277199	Xã	181	\N	\N
6073	Xã Hoa Thám	xa-hoa-tham	14.058324	108.277199	Xã	181	\N	\N
6076	Xã Quý Hòa	xa-quy-hoa	22.1477516	106.3191551	Xã	181	\N	\N
6079	Xã Hồng Phong	xa-hong-phong	22.0932814	106.3920058	Xã	181	\N	\N
6082	Xã Yên Lỗ	xa-yen-lo	22.0389414	106.2580983	Xã	181	\N	\N
6085	Xã Thiện Hòa	xa-thien-hoa	22.0375273	106.2220614	Xã	181	\N	\N
6088	Xã Quang Trung	xa-quang-trung	22.0562541	106.3368135	Xã	181	\N	\N
6091	Xã Thiện Thuật	xa-thien-thuat	22.0110962	106.2544208	Xã	181	\N	\N
6094	Xã Minh Khai	xa-minh-khai	22.0391187	106.3912698	Xã	181	\N	\N
6097	Xã Thiện Long	xa-thien-long	22.0077236	106.1588288	Xã	181	\N	\N
6100	Xã Hoàng Văn Thụ	xa-hoang-van-thu	21.9914001	106.3239604	Xã	181	\N	\N
6103	Xã Hòa Bình	xa-hoa-binh	21.9849977	106.1904426	Xã	181	\N	\N
6106	Xã Mông Ân	xa-mong-an	21.9719972	106.3117979	Xã	181	\N	\N
6109	Xã Tân Hòa	xa-tan-hoa	21.9893742	106.1757379	Xã	181	\N	\N
6112	Xã Tô Hiệu	xa-to-hieu	21.9497677	106.3802451	Xã	181	\N	\N
6115	Xã Hồng Thái	xa-hong-thai	21.9325524	106.4575197	Xã	181	\N	\N
6118	Xã Bình La	xa-binh-la	21.9313034	106.5120077	Xã	181	\N	\N
6121	Xã Tân Văn	xa-tan-van	21.9134767	106.4177672	Xã	181	\N	\N
6124	Thị trấn Na Sầm	thi-tran-na-sam	22.0557244	106.615868	Thị trấn	182	\N	\N
6127	Xã Trùng Khánh	xa-trung-khanh	22.1493201	106.6468148	Xã	182	\N	\N
6130	Xã Tân Việt	xa-tan-viet	22.1571995	106.5503049	Xã	182	\N	\N
6133	Xã Bắc La	xa-bac-la	22.11544	106.5208449	Xã	182	\N	\N
6136	Xã Thụy Hùng	xa-thuy-hung	22.1249703	106.6586052	Xã	182	\N	\N
6139	Xã Trùng Quán	xa-trung-quan	22.1195183	106.5930291	Xã	182	\N	\N
6142	Xã Tân Tác	xa-tan-tac	22.0711169	106.5510414	Xã	182	\N	\N
6145	Xã An Hùng	xa-an-hung	14.058324	108.277199	Xã	182	\N	\N
6148	Xã Thanh Long	xa-thanh-long	22.0723394	106.6645007	Xã	182	\N	\N
6151	Xã Hội Hoan	xa-hoi-hoan	22.0499956	106.482553	Xã	182	\N	\N
6154	Xã Tân Lang	xa-tan-lang	22.0604155	106.5915557	Xã	182	\N	\N
6157	Xã Hoàng Việt	xa-hoang-viet	22.0413071	106.6224991	Xã	182	\N	\N
6160	Xã Gia Miễn	xa-gia-mien	22.0320082	106.5097984	Xã	182	\N	\N
6163	Xã Thành Hòa	xa-thanh-hoa	22.0398846	106.5665096	Xã	182	\N	\N
6166	Xã Tân Thanh	xa-tan-thanh	22.0028167	106.6844629	Xã	182	\N	\N
6169	Xã Nam La	xa-nam-la	22.0270812	106.4663546	Xã	182	\N	\N
6172	Xã Tân Mỹ	xa-tan-my	21.9798669	106.6645007	Xã	182	\N	\N
6175	Xã Hồng Thái	xa-hong-thai	21.9619057	106.6077636	Xã	182	\N	\N
6178	Xã  Hoàng Văn Thụ	xa-hoang-van-thu	21.930716	106.6298672	Xã	182	\N	\N
6181	Xã Nhạc Kỳ	xa-nhac-ky	21.9080145	106.6188151	Xã	182	\N	\N
6184	Thị trấn Đồng Đăng	thi-tran-dong-dang	21.9614339	106.702825	Thị trấn	183	\N	\N
6187	Thị trấn Cao Lộc	thi-tran-cao-loc	21.8693003	106.7691712	Thị trấn	183	\N	\N
6190	Xã Bảo Lâm	xa-bao-lam	21.993147	106.7588494	Xã	183	\N	\N
6193	Xã Thanh Lòa	xa-thanh-loa	21.9562306	106.8355372	Xã	183	\N	\N
6196	Xã Cao Lâu	xa-cao-lau	21.9320832	106.9004472	Xã	183	\N	\N
6199	Xã Thạch Đạn	xa-thach-dan	21.9041478	106.8419095	Xã	183	\N	\N
6202	Xã Xuất Lễ	xa-xuat-le	21.8990238	106.9948945	Xã	183	\N	\N
6205	Xã Hồng Phong	xa-hong-phong	21.9309277	106.6827885	Xã	183	\N	\N
6208	Xã Thụy Hùng	xa-thuy-hung	21.905617	106.71167	Xã	183	\N	\N
6211	Xã Lộc Yên	xa-loc-yen	21.9316079	106.8317541	Xã	183	\N	\N
6214	Xã Phú Xá	xa-phu-xa	21.902899	106.682188	Xã	183	\N	\N
6217	Xã Bình Trung	xa-binh-trung	14.058324	108.277199	Xã	183	\N	\N
6220	Xã Hải Yến	xa-hai-yen	21.8939757	106.8477166	Xã	183	\N	\N
6223	Xã Hòa Cư	xa-hoa-cu	21.8762153	106.7979616	Xã	183	\N	\N
6226	Xã Hợp Thành	xa-hop-thanh	21.8704574	106.7811426	Xã	183	\N	\N
6229	Xã Song Giáp	xa-song-giap	21.876912	106.685143	Xã	183	\N	\N
6232	Xã Công Sơn	xa-cong-son	21.8654243	106.8952175	Xã	183	\N	\N
6235	Xã Gia Cát	xa-gia-cat	21.8471067	106.8296372	Xã	183	\N	\N
6238	Xã Mẫu Sơn	xa-mau-son	21.8283378	106.9535691	Xã	183	\N	\N
6241	Xã Xuân Long	xa-xuan-long	21.853708	106.761519	Xã	183	\N	\N
6244	Xã Tân Liên	xa-tan-lien	21.8085207	106.8119382	Xã	183	\N	\N
6247	Xã Yên Trạch	xa-yen-trach	21.7851574	106.7588494	Xã	183	\N	\N
6250	Xã Tân Thành	xa-tan-thanh	22.0028167	106.6844629	Xã	183	\N	\N
6253	Thị trấn Văn Quan	thi-tran-van-quan	21.8628802	106.5377839	Thị trấn	184	\N	\N
6256	Xã Trấn Ninh	xa-tran-ninh	21.9761722	106.5746124	Xã	184	\N	\N
6259	Xã Phú Mỹ	xa-phu-my	21.9551916	106.5046436	Xã	184	\N	\N
6262	Xã Việt Yên	xa-viet-yen	14.058324	108.277199	Xã	184	\N	\N
6265	Xã Song Giang	xa-song-giang	21.9297316	106.5974494	Xã	184	\N	\N
6268	Xã Vân Mộng	xa-van-mong	21.9410219	106.5510414	Xã	184	\N	\N
6271	Xã Vĩnh Lại	xa-vinh-lai	14.058324	108.277199	Xã	184	\N	\N
6274	Xã Hòa Bình	xa-hoa-binh	21.8972104	106.5061164	Xã	184	\N	\N
6277	Xã Tú Xuyên	xa-tu-xuyen	21.8494698	106.5076017	Xã	184	\N	\N
6280	Xã Văn An	xa-van-an	21.883333	106.616667	Xã	184	\N	\N
6283	Xã Đại An	xa-dai-an	21.9864454	106.6637637	Xã	184	\N	\N
6286	Xã Khánh Khê	xa-khanh-khe	21.8744075	106.646523	Xã	184	\N	\N
6289	Xã Chu Túc	xa-chu-tuc	21.8476555	106.5945025	Xã	184	\N	\N
6292	Xã Lương Năng	xa-luong-nang	21.8442987	106.4508938	Xã	184	\N	\N
6295	Xã Đồng Giáp	xa-dong-giap	14.058324	108.277199	Xã	184	\N	\N
6298	Xã Xuân Mai	xa-xuan-mai	21.827172	106.5547242	Xã	184	\N	\N
6301	Xã Tràng Các	xa-trang-cac	21.7875965	106.6137421	Xã	184	\N	\N
6304	Xã Tràng Sơn	xa-trang-son	21.8170203	106.5698877	Xã	184	\N	\N
6307	Xã Tân Đoàn	xa-tan-doan	21.7982093	106.6074738	Xã	184	\N	\N
6310	Xã Bình Phúc	xa-binh-phuc	21.8072124	106.5237907	Xã	184	\N	\N
6313	Xã Tri Lễ	xa-tri-le	21.7770802	106.4648821	Xã	184	\N	\N
6316	Xã Tràng Phái	xa-trang-phai	21.7875965	106.6137421	Xã	184	\N	\N
6319	Xã Yên Phúc	xa-yen-phuc	21.7866107	106.5414664	Xã	184	\N	\N
6322	Xã Hữu Lễ	xa-huu-le	14.058324	108.277199	Xã	184	\N	\N
6325	Thị trấn Bắc Sơn	thi-tran-bac-son	21.9072423	106.3154764	Thị trấn	185	\N	\N
6328	Xã Long Đống	xa-long-dong	21.9119514	106.3293056	Xã	185	\N	\N
6331	Xã Vạn Thủy	xa-van-thuy	21.9250853	106.2176492	Xã	185	\N	\N
6334	Xã Quỳnh Sơn	xa-quynh-son	21.9033543	106.3393977	Xã	185	\N	\N
6337	Xã Đồng ý	xa-dong-y	21.8944187	106.2419177	Xã	185	\N	\N
6340	Xã Tân Tri	xa-tan-tri	21.8521183	106.1514775	Xã	185	\N	\N
6343	Xã Bắc Sơn	xa-bac-son	21.8904912	106.3522658	Xã	185	\N	\N
6346	Xã Hữu Vĩnh	xa-huu-vinh	14.058324	108.277199	Xã	185	\N	\N
6349	Xã Hưng Vũ	xa-hung-vu	21.8557277	106.3598071	Xã	185	\N	\N
6352	Xã Tân Lập	xa-tan-lap	21.865052	106.2676602	Xã	185	\N	\N
6355	Xã Vũ Sơn	xa-vu-son	21.8599572	106.2176492	Xã	185	\N	\N
6358	Xã Chiêu Vũ	xa-chieu-vu	21.8437729	106.2992912	Xã	185	\N	\N
6361	Xã Tân Hương	xa-tan-huong	21.8355534	106.2588338	Xã	185	\N	\N
6364	Xã Chiến Thắng	xa-chien-thang	21.8662482	106.2198553	Xã	185	\N	\N
6367	Xã Vũ Lăng	xa-vu-lang	21.8189725	106.2941416	Xã	185	\N	\N
6370	Xã Trấn Yên	xa-tran-yen	21.8043022	106.3677193	Xã	185	\N	\N
6373	Xã Vũ Lễ	xa-vu-le	21.8064846	106.1735323	Xã	185	\N	\N
6376	Xã Nhất Hòa	xa-nhat-hoa	21.7629082	106.2533612	Xã	185	\N	\N
6379	Xã Tân Thành	xa-tan-thanh	21.7316815	106.2414859	Xã	185	\N	\N
6382	Xã Nhất Tiến	xa-nhat-tien	21.7483454	106.2698669	Xã	185	\N	\N
6385	Thị trấn Hữu Lũng	thi-tran-huu-lung	21.5097832	106.3404925	Thị trấn	186	\N	\N
6388	Xã Hữu Liên	xa-huu-lien	21.6850039	106.3817021	Xã	186	\N	\N
6391	Xã Yên Bình	xa-yen-binh	21.6106733	106.264718	Xã	186	\N	\N
6394	Xã Quyết Thắng	xa-quyet-thang	21.6406856	106.225003	Xã	186	\N	\N
6397	Xã Hòa Bình	xa-hoa-binh	14.058324	108.277199	Xã	186	\N	\N
6400	Xã Yên Thịnh	xa-yen-thinh	21.6187767	106.3426999	Xã	186	\N	\N
6406	Xã Thiện Kỵ	xa-thien-ky	21.5797875	106.1970601	Xã	186	\N	\N
6409	Xã Tân Lập	xa-tan-lap	21.588733	106.2235322	Xã	186	\N	\N
6412	Xã Yên Vượng	xa-yen-vuong	21.5902262	106.3677193	Xã	186	\N	\N
6415	Xã Minh Tiến	xa-minh-tien	21.5659824	106.2992912	Xã	186	\N	\N
6418	Xã Nhật Tiến	xa-nhat-tien	21.5357857	106.3191551	Xã	186	\N	\N
6421	Xã Thanh Sơn	xa-thanh-son	21.5344565	106.2308862	Xã	186	\N	\N
6424	Xã Đồng Tân	xa-dong-tan	21.5305691	106.3640398	Xã	186	\N	\N
6427	Xã Cai Kinh	xa-cai-kinh	21.5489792	106.4111425	Xã	186	\N	\N
6430	Xã Hòa Lạc	xa-hoa-lac	21.5430429	106.470036	Xã	186	\N	\N
6433	Xã Vân Nham	xa-van-nham	21.5198391	106.232357	Xã	186	\N	\N
6436	Xã Đồng Tiến	xa-dong-tien	21.5104621	106.1955895	Xã	186	\N	\N
6439	Xã Đô Lương	xa-do-luong	14.058324	108.277199	Xã	186	\N	\N
6442	Xã Tân Thành	xa-tan-thanh	21.5136522	106.4612929	Xã	186	\N	\N
6445	Xã Hòa Sơn	xa-hoa-son	21.5088183	106.4646529	Xã	186	\N	\N
6448	Xã Minh Sơn	xa-minh-son	21.4837904	106.3110622	Xã	186	\N	\N
6451	Xã Hồ Sơn	xa-ho-son	14.058324	108.277199	Xã	186	\N	\N
6454	Xã Sơn Hà	xa-son-ha	21.4944351	106.3493224	Xã	186	\N	\N
6457	Xã Minh Hòa	xa-minh-hoa	21.5659824	106.2992912	Xã	186	\N	\N
6460	Xã Hòa Thắng	xa-hoa-thang	21.4501797	106.3646725	Xã	186	\N	\N
6463	Thị trấn Đồng Mỏ	thi-tran-dong-mo	21.6626781	106.5731392	Thị trấn	187	\N	\N
6466	Thị trấn Chi Lăng	thi-tran-chi-lang	21.5741662	106.50538	Thị trấn	187	\N	\N
6469	Xã Vân An	xa-van-an	21.7633861	106.8040556	Xã	187	\N	\N
6472	Xã Vân Thủy	xa-van-thuy	21.7489879	106.7175669	Xã	187	\N	\N
6475	Xã Gia Lộc	xa-gia-loc	21.7206587	106.5503049	Xã	187	\N	\N
6478	Xã Bắc Thủy	xa-bac-thuy	21.7307397	106.6703963	Xã	187	\N	\N
6481	Xã Chiến Thắng	xa-chien-thang	21.7366776	106.7607553	Xã	187	\N	\N
6484	Xã Mai Sao	xa-mai-sao	21.7072928	106.6173415	Xã	187	\N	\N
6487	Xã Bằng Hữu	xa-bang-huu	21.7284177	106.4865146	Xã	187	\N	\N
6490	Xã Thượng Cường	xa-thuong-cuong	21.6941745	106.5760857	Xã	187	\N	\N
6493	Xã Bằng Mạc	xa-bang-mac	21.6844357	106.5156898	Xã	187	\N	\N
6496	Xã Nhân Lý	xa-nhan-ly	21.686928	106.6468148	Xã	187	\N	\N
6499	Xã Lâm Sơn	xa-lam-son	21.6565995	106.6748181	Xã	187	\N	\N
6502	Xã Liên Sơn	xa-lien-son	21.6813465	106.7461286	Xã	187	\N	\N
6505	Xã Vạn Linh	xa-van-linh	21.6547201	106.4523662	Xã	187	\N	\N
6508	Xã Hòa Bình	xa-hoa-binh	21.6215689	106.4925572	Xã	187	\N	\N
6511	Xã Quang Lang	xa-quang-lang	21.6363614	106.5760857	Xã	187	\N	\N
6514	Xã Hữu Kiên	xa-huu-kien	21.602712	106.7352584	Xã	187	\N	\N
6517	Xã Quan Sơn	xa-quan-son	21.6231755	106.6202887	Xã	187	\N	\N
6520	Xã Y Tịch	xa-y-tich	21.622207	106.4450042	Xã	187	\N	\N
6523	Xã Chi Lăng	xa-chi-lang	21.6012862	106.5230542	Xã	187	\N	\N
6526	Thị trấn Na Dương	thi-tran-na-duong	21.6885462	106.9653756	Thị trấn	188	\N	\N
6529	Thị trấn Lộc Bình	thi-tran-loc-binh	21.7653509	106.9211043	Thị trấn	188	\N	\N
6532	Xã Mẫu Sơn	xa-mau-son	21.8283378	106.9535691	Xã	188	\N	\N
6535	Xã Bằng Khánh	xa-bang-khanh	21.8007905	106.8790544	Xã	188	\N	\N
6538	Xã Xuân Lễ	xa-xuan-le	21.8103863	106.8528693	Xã	188	\N	\N
6541	Xã Yên Khoái	xa-yen-khoai	21.7990274	107.0126076	Xã	188	\N	\N
6544	Xã Xuân Mãn	xa-xuan-man	21.7928137	106.8897506	Xã	188	\N	\N
6547	Xã Tú Mịch	xa-tu-mich	21.7760997	107.0657549	Xã	188	\N	\N
6550	Xã Hữu Khánh	xa-huu-khanh	21.7752214	106.9439767	Xã	188	\N	\N
6553	Xã Đồng Bục	xa-dong-buc	21.7777999	106.9056113	Xã	188	\N	\N
6556	Xã Vân Mộng	xa-van-mong	21.7821251	106.8469689	Xã	188	\N	\N
6559	Xã Tam Gia	xa-tam-gia	21.7455117	107.1366365	Xã	188	\N	\N
6562	Xã Tú Đoạn	xa-tu-doan	21.7531564	106.961686	Xã	188	\N	\N
6565	Xã Khuất Xá	xa-khuat-xa	21.7464149	107.005227	Xã	188	\N	\N
6568	Xã Như Khuê	xa-nhu-khue	21.7543806	106.8672523	Xã	188	\N	\N
6571	Xã Lục Thôn	xa-luc-thon	21.7576775	106.9124021	Xã	188	\N	\N
6574	Xã Tĩnh Bắc	xa-tinh-bac	21.7474594	107.0842116	Xã	188	\N	\N
6577	Xã Xuân Tình	xa-xuan-tinh	21.7449838	106.8466001	Xã	188	\N	\N
6580	Xã Hiệp Hạ	xa-hiep-ha	21.7224961	106.8406998	Xã	188	\N	\N
6583	Xã Nhượng Bạn	xa-nhuong-ban	21.7311266	106.8687275	Xã	188	\N	\N
6586	Xã Quan Bản	xa-quan-ban	21.7190329	106.92922	Xã	188	\N	\N
6589	Xã Sàn Viên	xa-san-vien	21.7141803	107.0030128	Xã	188	\N	\N
6592	Xã Đông Quan	xa-dong-quan	21.6891841	106.9247932	Xã	188	\N	\N
6595	Xã Minh Phát	xa-minh-phat	21.6949087	106.8421749	Xã	188	\N	\N
6598	Xã Hữu Lân	xa-huu-lan	21.6521528	106.7949779	Xã	188	\N	\N
6601	Xã Lợi Bác	xa-loi-bac	21.6456906	106.9956325	Xã	188	\N	\N
6604	Xã Nam Quan	xa-nam-quan	21.6290547	106.8923325	Xã	188	\N	\N
6607	Xã Xuân Dương	xa-xuan-duong	21.5873664	106.8628267	Xã	188	\N	\N
6610	Xã Ái Quốc	xa-ai-quoc	21.5292961	106.8938079	Xã	188	\N	\N
6613	Thị trấn Đình Lập	thi-tran-dinh-lap	21.5511448	107.0923331	Thị trấn	189	\N	\N
6616	Thị trấn NT Thái Bình	thi-tran-nt-thai-binh	14.058324	108.277199	Thị trấn	189	\N	\N
6619	Xã Bắc Xa	xa-bac-xa	21.6228337	107.3139304	Xã	189	\N	\N
6622	Xã Bính Xá	xa-binh-xa	21.6429185	107.1248214	Xã	189	\N	\N
6625	Xã Kiên Mộc	xa-kien-moc	21.6136293	107.1971976	Xã	189	\N	\N
6628	Xã Đình Lập	xa-dinh-lap	21.5463522	107.096763	Xã	189	\N	\N
6631	Xã Thái Bình	xa-thai-binh	21.4801022	107.0406561	Xã	189	\N	\N
6634	Xã Cường Lợi	xa-cuong-loi	21.4938774	107.1226062	Xã	189	\N	\N
6637	Xã Châu Sơn	xa-chau-son	21.4492603	107.1971976	Xã	189	\N	\N
6640	Xã Lâm Ca	xa-lam-ca	21.4296747	107.0192504	Xã	189	\N	\N
6643	Xã Đồng Thắng	xa-dong-thang	21.4145559	107.1226062	Xã	189	\N	\N
6646	Xã Bắc Lãng	xa-bac-lang	14.058324	108.277199	Xã	189	\N	\N
6649	Phường Hà Khánh	phuong-ha-khanh	21.0020262	107.1307289	Phường	193	\N	\N
6652	Phường Hà Phong	phuong-ha-phong	20.976522	107.1543601	Phường	193	\N	\N
6655	Phường Hà Khẩu	phuong-ha-khau	20.9736092	106.9860384	Phường	193	\N	\N
6658	Phường Cao Xanh	phuong-cao-xanh	20.9722852	107.0834734	Phường	193	\N	\N
6661	Phường Giếng Đáy	phuong-gieng-day	20.9815272	107.0214647	Phường	193	\N	\N
6664	Phường Hà Tu	phuong-ha-tu	20.9546746	107.1425442	Phường	193	\N	\N
6667	Phường Hà Trung	phuong-ha-trung	20.9648457	107.1277751	Phường	193	\N	\N
6670	Phường Hà Lầm	phuong-ha-lam	20.970539	107.1144837	Phường	193	\N	\N
6673	Phường Bãi Cháy	phuong-bai-chay	20.9643837	107.0480378	Phường	193	\N	\N
6676	Phường Cao Thắng	phuong-cao-thang	20.966594	107.096763	Phường	193	\N	\N
6679	Phường Hùng Thắng	phuong-hung-thang	20.9576774	107.0007987	Phường	193	\N	\N
6682	Phường Yết Kiêu	phuong-yet-kieu	20.9600653	107.0760905	Phường	193	\N	\N
6685	Phường Trần Hưng Đạo	phuong-tran-hung-dao	20.9562721	107.0849499	Phường	193	\N	\N
6688	Phường Hồng Hải	phuong-hong-hai	20.9499748	107.1041465	Phường	193	\N	\N
6691	Phường Hồng Gai	phuong-hong-gai	20.9536125	107.0687079	Phường	193	\N	\N
6694	Phường Bạch Đằng	phuong-bach-dang	20.9502012	107.0879032	Phường	193	\N	\N
6697	Phường Hồng Hà	phuong-hong-ha	20.9417785	107.1277751	Phường	193	\N	\N
6700	Phường Tuần Châu	phuong-tuan-chau	20.9254668	106.9771827	Phường	193	\N	\N
6703	Phường Việt Hưng	phuong-viet-hung	20.9959145	106.9653756	Phường	193	\N	\N
6706	Phường Đại Yên	phuong-dai-yen	20.9828115	106.9240554	Phường	193	\N	\N
6709	Phường Ka Long	phuong-ka-long	21.5338084	107.9605908	Phường	194	\N	\N
6712	Phường Trần Phú	phuong-tran-phu	21.5353709	107.9724429	Phường	194	\N	\N
6715	Phường Ninh Dương	phuong-ninh-duong	21.5264193	107.9572648	Phường	194	\N	\N
6718	Phường Hoà Lạc	phuong-hoa-lac	21.524528	107.9665168	Phường	194	\N	\N
6721	Phường Trà Cổ	phuong-tra-co	21.483996	108.059866	Phường	194	\N	\N
6724	Xã Hải Sơn	xa-hai-son	21.6048171	107.7991545	Xã	194	\N	\N
6727	Xã Bắc Sơn	xa-bac-son	21.6033952	107.8643107	Xã	194	\N	\N
6730	Xã Hải Đông	xa-hai-dong	21.5394395	107.8835642	Xã	194	\N	\N
6733	Xã Hải Tiến	xa-hai-tien	21.5394988	107.8569058	Xã	194	\N	\N
6736	Phường Hải Yên	phuong-hai-yen	21.5227428	107.9176312	Phường	194	\N	\N
6739	Xã Quảng Nghĩa	xa-quang-nghia	21.5261916	107.7947126	Xã	194	\N	\N
6742	Phường Hải Hoà	phuong-hai-hoa	21.5173432	108.0183739	Phường	194	\N	\N
6745	Xã Hải Xuân	xa-hai-xuan	21.4982894	107.9828138	Xã	194	\N	\N
6748	Xã Vạn Ninh	xa-van-ninh	21.4678337	107.9487874	Xã	194	\N	\N
6751	Phường Bình Ngọc	phuong-binh-ngoc	21.4458927	107.9887402	Phường	194	\N	\N
6754	Xã Vĩnh Trung	xa-vinh-trung	21.3311162	107.8820831	Xã	194	\N	\N
6757	Xã Vĩnh Thực	xa-vinh-thuc	21.3207245	107.9768875	Xã	194	\N	\N
6760	Phường Mông Dương	phuong-mong-duong	21.0822391	107.3021069	Phường	195	\N	\N
6763	Phường Cửa Ông	phuong-cua-ong	21.032741	107.3598781	Phường	195	\N	\N
6766	Phường Cẩm Sơn	phuong-cam-son	21.0092731	107.3109745	Phường	195	\N	\N
6769	Phường Cẩm Đông	phuong-cam-dong	21.0086786	107.294886	Phường	195	\N	\N
6772	Phường Cẩm Phú	phuong-cam-phu	21.015757	107.3316667	Phường	195	\N	\N
6775	Phường Cẩm Tây	phuong-cam-tay	21.0322185	107.2843726	Phường	195	\N	\N
6778	Phường Quang Hanh	phuong-quang-hanh	21.0082107	107.2271147	Phường	195	\N	\N
6781	Phường Cẩm Thịnh	phuong-cam-thinh	20.9914726	107.3434916	Phường	195	\N	\N
6784	Phường Cẩm Thủy	phuong-cam-thuy	21.0141994	107.2636842	Phường	195	\N	\N
6787	Phường Cẩm Thạch	phuong-cam-thach	21.0039002	107.2518631	Phường	195	\N	\N
6790	Phường Cẩm Thành	phuong-cam-thanh	21.0113744	107.2769837	Phường	195	\N	\N
6793	Phường Cẩm Trung	phuong-cam-trung	21.0020567	107.269595	Phường	195	\N	\N
6796	Phường Cẩm Bình	phuong-cam-binh	21.0002112	107.2873282	Phường	195	\N	\N
6799	Xã Cộng Hòa	xa-cong-hoa	21.1567189	107.36123	Xã	195	\N	\N
6802	Xã Cẩm Hải	xa-cam-hai	21.1067199	107.3434916	Xã	195	\N	\N
6805	Xã Dương Huy	xa-duong-huy	21.0641184	107.2548183	Xã	195	\N	\N
6808	Phường Vàng Danh	phuong-vang-danh	21.1102653	106.8060388	Phường	196	\N	\N
6811	Phường Thanh Sơn	phuong-thanh-son	21.0521108	106.7529514	Phường	196	\N	\N
6814	Phường Bắc Sơn	phuong-bac-son	21.0586062	106.7979985	Phường	196	\N	\N
6817	Phường Quang Trung	phuong-quang-trung	21.0355884	106.773595	Phường	196	\N	\N
6820	Phường Trưng Vương	phuong-trung-vuong	21.0338005	106.791291	Phường	196	\N	\N
6823	Phường Nam Khê	phuong-nam-khe	21.0230507	106.8119382	Phường	196	\N	\N
6826	Phường Yên Thanh	phuong-yen-thanh	21.0174575	106.7529514	Phường	196	\N	\N
6829	Xã Thượng Yên Công	xa-thuong-yen-cong	21.1174331	106.7352584	Xã	196	\N	\N
6832	Phường Phương Đông	phuong-phuong-dong	21.038885	106.734945	Phường	196	\N	\N
6835	Phường Phương Nam	phuong-phuong-nam	21.0205389	106.700753	Phường	196	\N	\N
6838	Thị trấn Bình Liêu	thi-tran-binh-lieu	21.5259304	107.398189	Thị trấn	198	\N	\N
6841	Xã Hoành Mô	xa-hoanh-mo	21.5410162	107.4321959	Xã	198	\N	\N
6844	Xã Đồng Tâm	xa-dong-tam	21.5973654	107.4440254	Xã	198	\N	\N
6847	Xã Đồng Văn	xa-dong-van	21.5615613	107.5623501	Xã	198	\N	\N
6850	Xã Tình Húc	xa-tinh-huc	21.5256307	107.4144526	Xã	198	\N	\N
6853	Xã Vô Ngại	xa-vo-ngai	21.5152902	107.3494043	Xã	198	\N	\N
6856	Xã Lục Hồn	xa-luc-hon	21.5538089	107.4203669	Xã	198	\N	\N
6859	Xã Húc Động	xa-huc-dong	21.4802148	107.4484616	Xã	198	\N	\N
6862	Thị trấn Tiên Yên	thi-tran-tien-yen	21.3347973	107.3937536	Thị trấn	199	\N	\N
6865	Xã Hà Lâu	xa-ha-lau	21.4319254	107.29989	Xã	199	\N	\N
6868	Xã Đại Dực	xa-dai-duc	21.4160399	107.449201	Xã	199	\N	\N
6869	Xã Đại Thành	xa-dai-thanh	14.058324	108.277199	Xã	199	\N	\N
6871	Xã Phong Dụ	xa-phong-du	21.3960564	107.3697301	Xã	199	\N	\N
6874	Xã Điền Xá	xa-dien-xa	21.3717261	107.3035848	Xã	199	\N	\N
6877	Xã Đông Ngũ	xa-dong-ngu	21.3413337	107.4676861	Xã	199	\N	\N
6880	Xã Yên Than	xa-yen-than	21.343031	107.3730242	Xã	199	\N	\N
6883	Xã Đông Hải	xa-dong-hai	21.3132404	107.5150139	Xã	199	\N	\N
6886	Xã Hải Lạng	xa-hai-lang	21.2822471	107.3730563	Xã	199	\N	\N
6889	Xã Tiên Lãng	xa-tien-lang	21.3041566	107.4381106	Xã	199	\N	\N
6892	Xã Đồng Rui	xa-dong-rui	21.2336463	107.3967105	Xã	199	\N	\N
6895	Thị trấn Đầm Hà	thi-tran-dam-ha	21.3523518	107.6067354	Thị trấn	200	\N	\N
6898	Xã Quảng Lâm	xa-quang-lam	21.4591746	107.5505152	Xã	200	\N	\N
6901	Xã Quảng An	xa-quang-an	21.3785374	107.5372017	Xã	200	\N	\N
6904	Xã Tân Bình	xa-tan-binh	21.3466049	107.63337	Xã	200	\N	\N
6907	Xã Quảng Lợi	xa-quang-loi	21.3808055	107.5764046	Xã	200	\N	\N
6910	Xã Dực Yên	xa-duc-yen	21.3567819	107.5386809	Xã	200	\N	\N
6913	Xã Quảng Tân	xa-quang-tan	21.3628946	107.5823226	Xã	200	\N	\N
6916	Xã Đầm Hà	xa-dam-ha	21.3030956	107.6096947	Xã	200	\N	\N
6917	Xã Tân Lập	xa-tan-lap	21.2762139	107.5919395	Xã	200	\N	\N
6919	Xã Đại Bình	xa-dai-binh	21.2646387	107.5386809	Xã	200	\N	\N
6922	Thị trấn Quảng Hà	thi-tran-quang-ha	21.4501648	107.7532579	Thị trấn	201	\N	\N
6925	Xã Quảng Đức	xa-quang-duc	21.5691558	107.7044085	Xã	201	\N	\N
6928	Xã Quảng Sơn	xa-quang-son	21.5078043	107.63337	Xã	201	\N	\N
6931	Xã Quảng Thành	xa-quang-thanh	21.5080329	107.7502971	Xã	201	\N	\N
6934	Xã Quảng Thắng	xa-quang-thang	21.4853057	107.7739845	Xã	201	\N	\N
6937	Xã Quảng Thịnh	xa-quang-thinh	21.474009	107.7258716	Xã	201	\N	\N
6940	Xã Quảng Minh	xa-quang-minh	21.4501189	107.7932319	Xã	201	\N	\N
6943	Xã Quảng Chính	xa-quang-chinh	21.4474669	107.7317927	Xã	201	\N	\N
6946	Xã Quảng Long	xa-quang-long	21.4593193	107.7021882	Xã	201	\N	\N
6949	Xã Đường Hoa	xa-duong-hoa	21.4387173	107.63337	Xã	201	\N	\N
6952	Xã Quảng Phong	xa-quang-phong	21.3849763	107.7044085	Xã	201	\N	\N
6955	Xã Quảng Trung	xa-quang-trung	21.4182232	107.71625	Xã	201	\N	\N
6958	Xã Phú Hải	xa-phu-hai	21.4271052	107.7932319	Xã	201	\N	\N
6961	Xã Quảng Điền	xa-quang-dien	21.4268419	107.7362336	Xã	201	\N	\N
6964	Xã Tiến Tới	xa-tien-toi	21.4035334	107.665927	Xã	201	\N	\N
6967	Xã Cái Chiên	xa-cai-chien	21.3005604	107.7399345	Xã	201	\N	\N
6970	Thị trấn Ba Chẽ	thi-tran-ba-che	21.273069	107.2961953	Thị trấn	202	\N	\N
6973	Xã Thanh Sơn	xa-thanh-son	21.2996782	107.2075388	Xã	202	\N	\N
6976	Xã Thanh Lâm	xa-thanh-lam	21.3276963	107.1602683	Xã	202	\N	\N
6979	Xã Đạp Thanh	xa-dap-thanh	21.2864848	107.113007	Xã	202	\N	\N
6982	Xã Nam Sơn	xa-nam-son	21.2641907	107.3257545	Xã	202	\N	\N
6985	Xã Lương Mông	xa-luong-mong	21.2732166	107.0185123	Xã	202	\N	\N
6988	Xã Đồn Đạc	xa-don-dac	21.2127637	107.2666396	Xã	202	\N	\N
6991	Xã Minh Cầm	xa-minh-cam	21.2285464	107.0598491	Xã	202	\N	\N
6994	Thị trấn Cái Rồng	thi-tran-cai-rong	21.053875	107.4351532	Thị trấn	203	\N	\N
6997	Xã Đài Xuyên	xa-dai-xuyen	21.2236092	107.4913489	Xã	203	\N	\N
7000	Xã Bình Dân	xa-binh-dan	21.1556217	107.4262813	Xã	203	\N	\N
7003	Xã Vạn Yên	xa-van-yen	21.1726395	107.6452085	Xã	203	\N	\N
7006	Xã Minh Châu	xa-minh-chau	21.0395425	107.5978577	Xã	203	\N	\N
7009	Xã Đoàn Kết	xa-doan-ket	21.0992599	107.4144526	Xã	203	\N	\N
7012	Xã Hạ Long	xa-ha-long	21.0623461	107.4913489	Xã	203	\N	\N
7015	Xã Đông Xá	xa-dong-xa	21.0589998	107.4173486	Xã	203	\N	\N
7018	Xã Bản Sen	xa-ban-sen	20.9624203	107.4558555	Xã	203	\N	\N
7021	Xã Thắng Lợi	xa-thang-loi	20.9184143	107.3257545	Xã	203	\N	\N
7024	Xã Quan Lạn	xa-quan-lan	20.8653139	107.5031811	Xã	203	\N	\N
7027	Xã Ngọc Vừng	xa-ngoc-vung	20.7213004	107.3375791	Xã	203	\N	\N
7030	Thị trấn Trới	thi-tran-troi	21.0256819	106.9983133	Thị trấn	204	\N	\N
7033	Xã Kỳ Thượng	xa-ky-thuong	21.1814283	107.1248214	Xã	204	\N	\N
7036	Xã Đồng Sơn	xa-dong-son	21.1808893	107.0185123	Xã	204	\N	\N
7039	Xã Tân Dân	xa-tan-dan	21.1484539	106.8775791	Xã	204	\N	\N
7042	Xã Đồng Lâm	xa-dong-lam	21.1116476	107.0185123	Xã	204	\N	\N
7045	Xã Hòa Bình	xa-hoa-binh	21.0945555	107.1839024	Xã	204	\N	\N
7048	Xã Vũ Oai	xa-vu-oai	21.0994569	107.1366365	Xã	204	\N	\N
7051	Xã Dân Chủ	xa-dan-chu	21.0918719	106.9299579	Xã	204	\N	\N
7054	Xã Quảng La	xa-quang-la	21.0899707	106.8849557	Xã	204	\N	\N
7057	Xã Bằng Cả	xa-bang-ca	21.089938	106.856926	Xã	204	\N	\N
7060	Xã Thống Nhất	xa-thong-nhat	21.0351254	107.0893798	Xã	204	\N	\N
7063	Xã Sơn Dương	xa-son-duong	21.0496614	106.947666	Xã	204	\N	\N
7066	Xã Lê Lợi	xa-le-loi	21.0169087	107.0421324	Xã	204	\N	\N
7069	Phường Mạo Khê	phuong-mao-khe	21.0675098	106.5996595	Phường	205	\N	\N
7072	Phường Đông Triều	phuong-dong-trieu	21.0832905	106.509358	Phường	205	\N	\N
7075	Xã An Sinh	xa-an-sinh	21.1418571	106.5131161	Xã	205	\N	\N
7078	Xã Tràng Lương	xa-trang-luong	21.112542	106.6316807	Xã	205	\N	\N
7081	Xã Bình Khê	xa-binh-khe	21.1037882	106.5847374	Xã	205	\N	\N
7084	Xã Việt Dân	xa-viet-dan	21.1090008	106.5024344	Xã	205	\N	\N
7087	Xã Tân Việt	xa-tan-viet	21.1111658	106.5271604	Xã	205	\N	\N
7090	Xã Bình Dương	xa-binh-duong	21.1139427	106.4818167	Xã	205	\N	\N
7093	Phường Đức Chính	phuong-duc-chinh	21.0898979	106.5201084	Phường	205	\N	\N
7096	Xã Tràng An	xa-trang-an	21.0987456	106.5346537	Xã	205	\N	\N
7099	Xã Nguyễn Huệ	xa-nguyen-hue	21.094769	106.454499	Xã	205	\N	\N
7102	Xã Thủy An	xa-thuy-an	21.0824354	106.4788714	Xã	205	\N	\N
7105	Phường Xuân Sơn	phuong-xuan-son	21.0811816	106.5495683	Phường	205	\N	\N
7108	Xã Hồng Thái Tây	xa-hong-thai-tay	21.0500496	106.6586052	Xã	205	\N	\N
7111	Xã Hồng Thái Đông	xa-hong-thai-dong	21.0580514	106.6939803	Xã	205	\N	\N
7114	Xã Hoàng Quế	xa-hoang-que	21.0859	106.6468148	Xã	205	\N	\N
7117	Xã Yên Thọ	xa-yen-tho	21.0567778	106.6202887	Xã	205	\N	\N
7120	Xã Hồng Phong	xa-hong-phong	21.0748986	106.4965434	Xã	205	\N	\N
7123	Phường Kim Sơn	phuong-kim-son	21.0710419	106.5642998	Phường	205	\N	\N
7126	Phường Hưng Đạo	phuong-hung-dao	21.0661883	106.5260001	Phường	205	\N	\N
7129	Xã Yên Đức	xa-yen-duc	21.0323923	106.6194598	Xã	205	\N	\N
7132	Phường Quảng Yên	phuong-quang-yen	20.9396254	106.8089885	Phường	206	\N	\N
7135	Phường Đông Mai	phuong-dong-mai	21.0071232	106.8266873	Phường	206	\N	\N
7138	Phường Minh Thành	phuong-minh-thanh	20.9939794	106.8709404	Phường	206	\N	\N
7141	Xã Điền Công	xa-dien-cong	20.9997482	106.7853922	Xã	196	\N	\N
7144	Xã Sông Khoai	xa-song-khoai	20.9768581	106.8119382	Xã	206	\N	\N
7147	Xã Hiệp Hòa	xa-hiep-hoa	20.9573302	106.7765443	Xã	206	\N	\N
7150	Phường Cộng Hòa	phuong-cong-hoa	20.9396254	106.8089885	Phường	206	\N	\N
7153	Xã Tiền An	xa-tien-an	20.9386407	106.8473377	Xã	206	\N	\N
7156	Xã Hoàng Tân	xa-hoang-tan	20.9135556	106.9240554	Xã	206	\N	\N
7159	Phường Tân An	phuong-tan-an	20.9338653	106.8431139	Phường	206	\N	\N
7162	Phường Yên Giang	phuong-yen-giang	20.9368223	106.7794935	Phường	206	\N	\N
7165	Phường Nam Hoà	phuong-nam-hoa	20.901612	106.8111086	Phường	206	\N	\N
7168	Phường Hà An	phuong-ha-an	20.9178317	106.8545294	Phường	206	\N	\N
7171	Xã Cẩm La	xa-cam-la	20.9191199	106.8119382	Xã	206	\N	\N
7174	Phường Phong Hải	phuong-phong-hai	20.9039974	106.8160863	Phường	206	\N	\N
7177	Phường Yên Hải	phuong-yen-hai	20.9034643	106.8007249	Phường	206	\N	\N
7180	Xã Liên Hòa	xa-lien-hoa	20.8783235	106.8443875	Xã	206	\N	\N
7183	Phường Phong Cốc	phuong-phong-coc	20.901612	106.8111086	Phường	206	\N	\N
7186	Xã Liên Vị	xa-lien-vi	20.8625707	106.8001396	Xã	206	\N	\N
7189	Xã Tiền Phong	xa-tien-phong	20.834732	106.8473377	Xã	206	\N	\N
7192	Thị trấn Cô Tô	thi-tran-co-to	20.9725919	107.7641444	Thị trấn	207	\N	\N
7195	Xã Đồng Tiến	xa-dong-tien	21.0243821	107.7399345	Xã	207	\N	\N
7198	Xã Thanh Lân	xa-thanh-lan	21.1470936	107.8820831	Xã	207	\N	\N
7201	Phường Thọ Xương	phuong-tho-xuong	21.300685	106.2022072	Phường	213	\N	\N
7204	Phường Trần Nguyên Hãn	phuong-tran-nguyen-han	21.2858545	106.1974593	Phường	213	\N	\N
7207	Phường Ngô Quyền	phuong-ngo-quyen	21.2794116	106.1977954	Phường	213	\N	\N
7210	Phường Hoàng Văn Thụ	phuong-hoang-van-thu	21.2737083	106.2013248	Phường	213	\N	\N
7213	Phường Trần Phú	phuong-tran-phu	21.2744894	106.1889721	Phường	213	\N	\N
7216	Phường Mỹ Độ	phuong-my-do	21.2724607	106.1801492	Phường	213	\N	\N
7219	Phường Lê Lợi	phuong-le-loi	21.2710176	106.1948542	Phường	213	\N	\N
7222	Xã Song Mai	xa-song-mai	21.302109	106.1791622	Xã	213	\N	\N
7225	Phường Xương Giang	phuong-xuong-giang	21.2902616	106.2123442	Phường	213	\N	\N
7228	Phường Đa Mai	phuong-da-mai	21.2825087	106.179588	Phường	213	\N	\N
7231	Phường Dĩnh Kế	phuong-dinh-ke	21.2829785	106.2190245	Phường	213	\N	\N
7234	Thị trấn Cầu Gồ	thi-tran-cau-go	21.4761084	106.12575	Thị trấn	215	\N	\N
7237	Thị trấn Bố Hạ	thi-tran-bo-ha	21.4443925	106.1977954	Thị trấn	215	\N	\N
7243	Xã Đồng Tiến	xa-dong-tien	21.5507341	106.1230159	Xã	215	\N	\N
7246	Xã Canh Nậu	xa-canh-nau	21.561504	106.096106	Xã	215	\N	\N
7249	Xã Xuân Lương	xa-xuan-luong	21.5611448	106.0517697	Xã	215	\N	\N
7252	Xã Tam Tiến	xa-tam-tien	21.5199678	106.1100836	Xã	215	\N	\N
7255	Xã Đồng Vương	xa-dong-vuong	21.4953576	106.1507424	Xã	215	\N	\N
7258	Xã Đồng Hưu	xa-dong-huu	21.5128774	106.1345705	Xã	215	\N	\N
7260	Xã Đồng Tâm	xa-dong-tam	21.49165	106.137772	Xã	215	\N	\N
7261	Xã Tam Hiệp	xa-tam-hiep	21.4921617	106.1193413	Xã	215	\N	\N
7264	Xã Tiến Thắng	xa-tien-thang	21.4818241	106.0843277	Xã	215	\N	\N
7267	Xã Hồng Kỳ	xa-hong-ky	21.4900104	106.1563611	Xã	215	\N	\N
7270	Xã Đồng Lạc	xa-dong-lac	21.5128774	106.1345705	Xã	215	\N	\N
7273	Xã Đông Sơn	xa-dong-son	21.5128774	106.1345705	Xã	215	\N	\N
7276	Xã Tân Hiệp	xa-tan-hiep	21.464751	106.103522	Xã	215	\N	\N
7279	Xã Hương Vĩ	xa-huong-vi	21.466635	106.198966	Xã	215	\N	\N
7282	Xã Đồng Kỳ	xa-dong-ky	21.4725207	106.1765447	Xã	215	\N	\N
7285	Xã An Thượng	xa-an-thuong	21.4588074	106.0853912	Xã	215	\N	\N
7288	Xã Phồn Xương	xa-phon-xuong	21.4735297	106.1252906	Xã	215	\N	\N
7291	Xã Tân Sỏi	xa-tan-soi	21.4485951	106.1692572	Xã	215	\N	\N
7294	Xã Bố Hạ	xa-bo-ha	21.4407772	106.1904426	Xã	215	\N	\N
7297	Thị trấn Cao Thượng	thi-tran-cao-thuong	21.3873563	106.1270717	Thị trấn	216	\N	\N
7300	Thị trấn Nhã Nam	thi-tran-nha-nam	21.436871	106.0978212	Thị trấn	216	\N	\N
7303	Xã Lan Giới	xa-lan-gioi	21.453506	106.0610787	Xã	216	\N	\N
7306	Xã Nhã Nam	xa-nha-nam	21.4428843	106.0941007	Xã	216	\N	\N
7309	Xã Tân Trung	xa-tan-trung	21.3849142	106.0889059	Xã	216	\N	\N
7312	Xã Đại Hóa	xa-dai-hoa	21.4337881	106.0545723	Xã	216	\N	\N
7315	Xã Quang Tiến	xa-quang-tien	21.4374898	106.0698451	Xã	216	\N	\N
7318	Xã Phúc Sơn	xa-phuc-son	21.4298208	106.0381981	Xã	216	\N	\N
7321	Xã An Dương	xa-an-duong	21.4080525	106.0816536	Xã	216	\N	\N
7324	Xã Phúc Hòa	xa-phuc-hoa	21.4242846	106.1522126	Xã	216	\N	\N
7327	Xã Liên Sơn	xa-lien-son	21.4124619	106.1096585	Xã	216	\N	\N
7330	Xã Hợp Đức	xa-hop-duc	21.3929547	106.1639762	Xã	216	\N	\N
7333	Xã Lam Cốt	xa-lam-cot	21.3999197	106.0463837	Xã	216	\N	\N
7336	Xã Cao Xá	xa-cao-xa	21.3801562	106.1134618	Xã	216	\N	\N
7339	Xã Cao Thượng	xa-cao-thuong	21.3873563	106.1270717	Xã	216	\N	\N
7342	Xã Việt Ngọc	xa-viet-ngoc	21.3762115	106.030651	Xã	216	\N	\N
7345	Xã Song Vân	xa-song-van	21.3787863	106.0552006	Xã	216	\N	\N
7348	Xã Ngọc Châu	xa-ngoc-chau	21.3735177	106.0859796	Xã	216	\N	\N
7351	Xã Ngọc Vân	xa-ngoc-van	21.3656091	106.0483103	Xã	216	\N	\N
7354	Xã Việt Lập	xa-viet-lap	21.3466792	106.1373871	Xã	216	\N	\N
7357	Xã Liên Chung	xa-lien-chung	21.3649897	106.1764401	Xã	216	\N	\N
7360	Xã Ngọc Thiện	xa-ngoc-thien	21.36485	106.087341	Xã	216	\N	\N
7363	Xã Ngọc Lý	xa-ngoc-ly	21.337972	106.131258	Xã	216	\N	\N
7366	Xã Quế Nham	xa-que-nham	21.325511	106.159766	Xã	216	\N	\N
7369	Thị trấn Kép	thi-tran-kep	21.4072937	106.2801649	Thị trấn	217	\N	\N
7375	Thị trấn Vôi	thi-tran-voi	21.3533442	106.2551563	Thị trấn	217	\N	\N
7378	Xã Nghĩa Hòa	xa-nghia-hoa	21.4327998	106.2409065	Xã	217	\N	\N
7381	Xã Nghĩa Hưng	xa-nghia-hung	21.4340749	106.2190121	Xã	217	\N	\N
7384	Xã Quang Thịnh	xa-quang-thinh	21.4358057	106.2698669	Xã	217	\N	\N
7387	Xã Hương Sơn	xa-huong-son	21.3912049	106.3110622	Xã	217	\N	\N
7390	Xã Đào Mỹ	xa-dao-my	21.4184816	106.2110311	Xã	217	\N	\N
7393	Xã Tiên Lục	xa-tien-luc	21.395327	106.2110311	Xã	217	\N	\N
7396	Xã An Hà	xa-an-ha	21.4193393	106.2316216	Xã	217	\N	\N
7399	Xã Tân Thịnh	xa-tan-thinh	21.410054	106.2669247	Xã	217	\N	\N
7402	Xã Mỹ Hà	xa-my-ha	21.3996731	106.173936	Xã	217	\N	\N
7405	Xã Hương Lạc	xa-huong-lac	21.3906723	106.2580983	Xã	217	\N	\N
7408	Xã Dương Đức	xa-duong-duc	21.3713082	106.1904426	Xã	217	\N	\N
7411	Xã Tân Thanh	xa-tan-thanh	21.3533188	106.2297831	Xã	217	\N	\N
7414	Xã Yên Mỹ	xa-yen-my	21.3707069	106.2551563	Xã	217	\N	\N
7417	Xã Tân Hưng	xa-tan-hung	21.3520052	106.2828407	Xã	217	\N	\N
7420	Xã Mỹ Thái	xa-my-thai	21.3374416	106.2110311	Xã	217	\N	\N
7423	Xã Phi Mô	xa-phi-mo	21.3339596	106.2463305	Xã	217	\N	\N
7426	Xã Xương Lâm	xa-xuong-lam	21.3393793	106.2756121	Xã	217	\N	\N
7429	Xã Xuân Hương	xa-xuan-huong	21.3171506	106.2012965	Xã	217	\N	\N
7432	Xã Tân Dĩnh	xa-tan-dinh	21.3108089	106.2463305	Xã	217	\N	\N
7435	Xã Đại Lâm	xa-dai-lam	21.2936556	106.2890842	Xã	217	\N	\N
7438	Xã Thái Đào	xa-thai-dao	21.2896393	106.261222	Xã	217	\N	\N
7441	Xã Dĩnh Trì	xa-dinh-tri	21.2876586	106.2463305	Xã	213	\N	\N
7444	Thị trấn Đồi Ngô	thi-tran-doi-ngo	21.3057815	106.3846459	Thị trấn	218	\N	\N
7447	Thị trấn Lục Nam	thi-tran-luc-nam	21.2899814	106.4126147	Thị trấn	218	\N	\N
7450	Xã Đông Hưng	xa-dong-hung	21.345425	106.4656728	Xã	218	\N	\N
7453	Xã Đông Phú	xa-dong-phu	21.3557074	106.4184827	Xã	218	\N	\N
7456	Xã Tam Dị	xa-tam-di	21.3391894	106.3887906	Xã	218	\N	\N
7459	Xã Bảo Sơn	xa-bao-son	21.3539637	106.3278776	Xã	218	\N	\N
7462	Xã Bảo Đài	xa-bao-dai	21.3338643	106.3640398	Xã	218	\N	\N
7465	Xã Thanh Lâm	xa-thanh-lam	21.337375	106.3287199	Xã	218	\N	\N
7468	Xã Tiên Nha	xa-tien-nha	21.3129696	106.4205882	Xã	218	\N	\N
7471	Xã Trường Giang	xa-truong-giang	21.3093572	106.493598	Xã	218	\N	\N
7474	Xã Tiên Hưng	xa-tien-hung	21.2982918	106.4001093	Xã	218	\N	\N
7477	Xã Phương Sơn	xa-phuong-son	21.3244625	106.458256	Xã	218	\N	\N
7480	Xã Chu Điện	xa-chu-dien	21.298651	106.3558531	Xã	218	\N	\N
7483	Xã Cương Sơn	xa-cuong-son	21.2994366	106.4184947	Xã	218	\N	\N
7486	Xã Nghĩa Phương	xa-nghia-phuong	21.2754498	106.4694838	Xã	218	\N	\N
7489	Xã Vô Tranh	xa-vo-tranh	21.2864062	106.5455583	Xã	218	\N	\N
7492	Xã Bình Sơn	xa-binh-son	21.2447778	106.6108487	Xã	218	\N	\N
7495	Xã Lan Mẫu	xa-lan-mau	21.2717121	106.3198908	Xã	218	\N	\N
7498	Xã Yên Sơn	xa-yen-son	21.260871	106.3299859	Xã	218	\N	\N
7501	Xã Khám Lạng	xa-kham-lang	21.3040177	106.4160423	Xã	218	\N	\N
7504	Xã Huyền Sơn	xa-huyen-son	21.2585897	106.4229199	Xã	218	\N	\N
7507	Xã Trường Sơn	xa-truong-son	21.2444482	106.5642998	Xã	218	\N	\N
7510	Xã Lục Sơn	xa-luc-son	21.2191409	106.6338153	Xã	218	\N	\N
7513	Xã Bắc Lũng	xa-bac-lung	21.248389	106.3655116	Xã	218	\N	\N
7516	Xã Vũ Xá	xa-vu-xa	21.2314722	106.3593721	Xã	218	\N	\N
7519	Xã Cẩm Lý	xa-cam-ly	21.2334448	106.3338703	Xã	218	\N	\N
7522	Xã Đan Hội	xa-dan-hoi	21.1831825	106.3375493	Xã	218	\N	\N
7525	Thị trấn Chũ	thi-tran-chu	21.358658	106.5495683	Thị trấn	219	\N	\N
7528	Xã Cấm Sơn	xa-cam-son	21.5821819	106.5900823	Xã	219	\N	\N
7531	Xã Tân Sơn	xa-tan-son	21.5583898	106.6320777	Xã	219	\N	\N
7534	Xã Phong Minh	xa-phong-minh	21.5148632	106.7256753	Xã	219	\N	\N
7537	Xã Phong Vân	xa-phong-van	21.5008942	106.6632536	Xã	219	\N	\N
7540	Xã Xa Lý	xa-xa-ly	21.5335818	106.8244749	Xã	219	\N	\N
7543	Xã Hộ Đáp	xa-ho-dap	21.5115593	106.6166048	Xã	219	\N	\N
7546	Xã Sơn Hải	xa-son-hai	21.513362	106.5561974	Xã	219	\N	\N
7549	Xã Thanh Hải	xa-thanh-hai	21.4138421	106.5827156	Xã	219	\N	\N
7552	Xã Kiên Lao	xa-kien-lao	21.4258749	106.5208449	Xã	219	\N	\N
7555	Xã Biên Sơn	xa-bien-son	21.4524105	106.6298672	Xã	219	\N	\N
7558	Xã Kiên Thành	xa-kien-thanh	21.4348662	106.5606168	Xã	219	\N	\N
7561	Xã Hồng Giang	xa-hong-giang	21.3904775	106.6136577	Xã	219	\N	\N
7564	Xã Kim Sơn	xa-kim-son	21.4126553	106.7293611	Xã	219	\N	\N
7567	Xã Tân Hoa	xa-tan-hoa	21.3928498	106.7156466	Xã	219	\N	\N
7570	Xã Giáp Sơn	xa-giap-son	21.3914997	106.6347487	Xã	219	\N	\N
7573	Xã Biển Động	xa-bien-dong	21.3888676	106.7502558	Xã	219	\N	\N
7576	Xã Quý Sơn	xa-quy-son	21.3738083	106.5144384	Xã	219	\N	\N
7579	Xã Trù Hựu	xa-tru-huu	21.3985852	106.56209	Xã	219	\N	\N
7582	Xã Phì Điền	xa-phi-dien	21.3851289	106.6941896	Xã	219	\N	\N
7585	Xã Nghĩa Hồ	xa-nghia-ho	21.3748211	106.582253	Xã	219	\N	\N
7588	Xã Tân Quang	xa-tan-quang	21.3722319	106.6476141	Xã	219	\N	\N
7591	Xã Đồng Cốc	xa-dong-coc	21.3724913	106.6840465	Xã	219	\N	\N
7594	Xã Tân Lập	xa-tan-lap	21.3480457	106.6428441	Xã	219	\N	\N
7597	Xã Phú Nhuận	xa-phu-nhuan	21.341238	106.729645	Xã	219	\N	\N
7600	Xã Mỹ An	xa-my-an	21.3185569	106.5171626	Xã	219	\N	\N
7603	Xã Nam Dương	xa-nam-duong	21.350896	106.5648133	Xã	219	\N	\N
7606	Xã Tân Mộc	xa-tan-moc	21.2942618	106.5979098	Xã	219	\N	\N
7609	Xã Đèo Gia	xa-deo-gia	21.3192515	106.6975129	Xã	219	\N	\N
7612	Xã Phượng Sơn	xa-phuong-son	21.3244625	106.458256	Xã	219	\N	\N
7615	Thị trấn An Châu	thi-tran-an-chau	21.3360579	106.8492063	Thị trấn	220	\N	\N
7616	Thị trấn Thanh Sơn	thi-tran-thanh-son	21.2010878	106.7647475	Thị trấn	220	\N	\N
7618	Xã Thạch Sơn	xa-thach-son	21.4327768	106.8709404	Xã	220	\N	\N
7621	Xã Vân Sơn	xa-van-son	21.400862	106.9004472	Xã	220	\N	\N
7624	Xã Hữu Sản	xa-huu-san	21.3959812	106.947666	Xã	220	\N	\N
7627	Xã Quế Sơn	xa-que-son	21.4185566	106.7986648	Xã	220	\N	\N
7630	Xã Phúc Thắng	xa-phuc-thang	21.4133244	106.8355372	Xã	220	\N	\N
7633	Xã Chiên Sơn	xa-chien-son	21.4185566	106.7986648	Xã	220	\N	\N
7636	Xã Giáo Liêm	xa-giao-liem	21.3798855	106.8237374	Xã	220	\N	\N
7639	Xã Vĩnh Khương	xa-vinh-khuong	21.3750337	106.8709404	Xã	220	\N	\N
7642	Xã Cẩm Đàn	xa-cam-dan	21.3954661	106.7888528	Xã	220	\N	\N
7645	Xã An Lạc	xa-an-lac	21.3267114	106.947666	Xã	220	\N	\N
7648	Xã An Lập	xa-an-lap	21.3420784	106.868395	Xã	220	\N	\N
7651	Xã Yên Định	xa-yen-dinh	21.3290313	106.7986648	Xã	220	\N	\N
7654	Xã Lệ Viễn	xa-le-vien	21.3495077	106.8945456	Xã	220	\N	\N
7657	Xã An Châu	xa-an-chau	21.335377	106.8473161	Xã	220	\N	\N
7660	Xã An Bá	xa-an-ba	21.326325	106.8258727	Xã	220	\N	\N
7663	Xã Tuấn Đạo	xa-tuan-dao	21.2818484	106.770736	Xã	220	\N	\N
7666	Xã Dương Hưu	xa-duong-huu	21.2426335	106.9373361	Xã	220	\N	\N
7669	Xã Bồng Am	xa-bong-am	21.2591225	106.804564	Xã	220	\N	\N
7672	Xã Long Sơn	xa-long-son	21.2198246	106.8783167	Xã	220	\N	\N
7675	Xã Tuấn Mậu	xa-tuan-mau	21.2076742	106.735785	Xã	220	\N	\N
7678	Xã Thanh Luận	xa-thanh-luan	21.2105295	106.8067762	Xã	220	\N	\N
7681	Thị trấn Neo	thi-tran-neo	21.2040303	106.2433886	Thị trấn	221	\N	\N
7682	Thị trấn Tân Dân	thi-tran-tan-dan	21.2639706	106.2718034	Thị trấn	221	\N	\N
7684	Xã Lão Hộ	xa-lao-ho	21.2695571	106.2907197	Xã	221	\N	\N
7687	Xã Tân Mỹ	xa-tan-my	21.2743404	106.1548182	Xã	213	\N	\N
7690	Xã Hương Gián	xa-huong-gian	21.2648576	106.2421693	Xã	221	\N	\N
7693	Xã Tân An	xa-tan-an	21.2642114	106.2786937	Xã	221	\N	\N
7696	Xã Đồng Sơn	xa-dong-son	21.2428007	106.2022072	Xã	213	\N	\N
7699	Xã Tân Tiến	xa-tan-tien	21.2526439	106.2198553	Xã	213	\N	\N
7702	Xã Quỳnh Sơn	xa-quynh-son	21.2469023	106.2852144	Xã	221	\N	\N
7705	Xã Song Khê	xa-song-khe	21.2508966	106.1786787	Xã	213	\N	\N
7708	Xã Nội Hoàng	xa-noi-hoang	21.2358325	106.1551531	Xã	221	\N	\N
7711	Xã Tiền Phong	xa-tien-phong	21.2305208	106.1854336	Xã	221	\N	\N
7714	Xã Xuân Phú	xa-xuan-phu	21.2370172	106.2610404	Xã	221	\N	\N
7717	Xã Tân Liễu	xa-tan-lieu	21.2265907	106.2265281	Xã	221	\N	\N
7720	Xã Trí Yên	xa-tri-yen	21.2223469	106.3239653	Xã	221	\N	\N
7723	Xã Lãng Sơn	xa-lang-son	21.2253513	106.2841928	Xã	221	\N	\N
7726	Xã Yên Lư	xa-yen-lu	21.2019796	106.1757379	Xã	221	\N	\N
7729	Xã Tiến Dũng	xa-tien-dung	21.206924	106.2728091	Xã	221	\N	\N
7732	Xã Nham Sơn	xa-nham-son	21.1973704	106.2227968	Xã	221	\N	\N
7735	Xã Đức Giang	xa-duc-giang	21.1786409	106.2882566	Xã	221	\N	\N
7738	Xã Cảnh Thụy	xa-canh-thuy	21.1959362	106.2547877	Xã	221	\N	\N
7741	Xã Tư Mại	xa-tu-mai	21.1733608	106.2610404	Xã	221	\N	\N
7744	Xã Thắng Cương	xa-thang-cuong	21.16525	106.2257384	Xã	221	\N	\N
7747	Xã Đồng Việt	xa-dong-viet	21.1629432	106.3081194	Xã	221	\N	\N
7750	Xã Đồng Phúc	xa-dong-phuc	21.1441407	106.293406	Xã	221	\N	\N
7753	Thị trấn  Bích Động	thi-tran-bich-dong	21.2783512	106.1051705	Thị trấn	222	\N	\N
7756	Thị trấn Nếnh	thi-tran-nenh	21.2404266	106.1081103	Thị trấn	222	\N	\N
7759	Xã Thượng Lan	xa-thuong-lan	21.3097777	106.0702449	Xã	222	\N	\N
7762	Xã Việt Tiến	xa-viet-tien	21.3088416	106.042217	Xã	222	\N	\N
7765	Xã Nghĩa Trung	xa-nghia-trung	21.3169482	106.1382709	Xã	222	\N	\N
7768	Xã Minh Đức	xa-minh-duc	21.3335196	106.1265462	Xã	222	\N	\N
7771	Xã Hương Mai	xa-huong-mai	21.292253	106.047669	Xã	222	\N	\N
7774	Xã Tự Lạn	xa-tu-lan	21.2938078	106.0638034	Xã	222	\N	\N
7777	Xã Bích Sơn	xa-bich-son	21.2858633	106.0875326	Xã	222	\N	\N
7780	Xã Trung Sơn	xa-trung-son	21.2858633	106.0875326	Xã	222	\N	\N
7783	Xã Hồng Thái	xa-hong-thai	21.2713033	106.1273956	Xã	222	\N	\N
7786	Xã Tiên Sơn	xa-tien-son	21.2385349	106.0381722	Xã	222	\N	\N
7789	Xã Tăng Tiến	xa-tang-tien	21.2595655	106.1492721	Xã	222	\N	\N
7792	Xã Quảng Minh	xa-quang-minh	21.2394699	106.091607	Xã	222	\N	\N
7795	Xã Hoàng Ninh	xa-hoang-ninh	21.2508596	106.1198699	Xã	222	\N	\N
7798	Xã Ninh Sơn	xa-ninh-son	21.2382947	106.082093	Xã	222	\N	\N
7801	Xã Vân Trung	xa-van-trung	21.2297337	106.1286901	Xã	222	\N	\N
7804	Xã Vân Hà	xa-van-ha	21.2196371	106.0390366	Xã	222	\N	\N
7807	Xã Quang Châu	xa-quang-chau	21.2088664	106.1051705	Xã	222	\N	\N
7810	Thị trấn Thắng	thi-tran-thang	21.3553478	105.9794245	Thị trấn	223	\N	\N
7813	Xã Đồng Tân	xa-dong-tan	21.4196433	105.9674907	Xã	223	\N	\N
7816	Xã Thanh Vân	xa-thanh-van	21.4068134	105.9736869	Xã	223	\N	\N
7819	Xã Hoàng Lương	xa-hoang-luong	21.397706	105.991813	Xã	223	\N	\N
7822	Xã Hoàng Vân	xa-hoang-van	21.3758435	105.9567873	Xã	223	\N	\N
7825	Xã Hoàng Thanh	xa-hoang-thanh	21.3885919	106.0090583	Xã	223	\N	\N
7828	Xã Hoàng An	xa-hoang-an	21.3810096	105.9729255	Xã	223	\N	\N
7831	Xã Ngọc Sơn	xa-ngoc-son	21.3459147	105.9464874	Xã	223	\N	\N
7834	Xã Thái Sơn	xa-thai-son	21.371726	105.946598	Xã	223	\N	\N
7837	Xã Hòa Sơn	xa-hoa-son	21.3693011	105.9222713	Xã	223	\N	\N
7840	Xã Đức Thắng	xa-duc-thang	21.3610459	105.9720903	Xã	223	\N	\N
7843	Xã Quang Minh	xa-quang-minh	21.3273593	105.9047724	Xã	223	\N	\N
7846	Xã Lương Phong	xa-luong-phong	21.3405734	106.0146115	Xã	223	\N	\N
7849	Xã Hùng Sơn	xa-hung-son	21.3486253	105.9382761	Xã	223	\N	\N
7852	Xã Đại Thành	xa-dai-thanh	21.3425073	105.9068373	Xã	223	\N	\N
7855	Xã Thường Thắng	xa-thuong-thang	21.345843	105.9463768	Xã	223	\N	\N
7858	Xã Hợp Thịnh	xa-hop-thinh	21.3270433	105.905077	Xã	223	\N	\N
7861	Xã Danh Thắng	xa-danh-thang	21.3321539	105.9775972	Xã	223	\N	\N
7864	Xã Mai Trung	xa-mai-trung	21.3235663	105.9294966	Xã	223	\N	\N
7867	Xã Đoan Bái	xa-doan-bai	21.3142275	106.005055	Xã	223	\N	\N
7870	Xã Bắc Lý	xa-bac-ly	21.2934264	105.9621524	Xã	223	\N	\N
7873	Xã Xuân Cẩm	xa-xuan-cam	21.2844933	105.9262942	Xã	223	\N	\N
7876	Xã Hương Lâm	xa-huong-lam	21.2725915	105.9510916	Xã	223	\N	\N
7879	Xã Đông Lỗ	xa-dong-lo	21.2852454	105.9972665	Xã	223	\N	\N
7882	Xã Châu Minh	xa-chau-minh	21.3459147	105.9464874	Xã	223	\N	\N
7885	Xã Mai Đình	xa-mai-dinh	21.2424518	105.9482315	Xã	223	\N	\N
7888	Phường Dữu Lâu	phuong-duu-lau	21.3371792	105.3980224	Phường	227	\N	\N
7891	Phường Vân Cơ	phuong-van-co	21.3380491	105.3731324	Phường	227	\N	\N
7894	Phường Nông Trang	phuong-nong-trang	21.3314246	105.3819167	Phường	227	\N	\N
7897	Phường Tân Dân	phuong-tan-dan	21.3258159	105.4031472	Phường	227	\N	\N
7900	Phường Gia Cẩm	phuong-gia-cam	21.3189946	105.3907014	Phường	227	\N	\N
7903	Phường Tiên Cát	phuong-tien-cat	21.3076064	105.4038793	Phường	227	\N	\N
7906	Phường Thọ Sơn	phuong-tho-son	21.3045415	105.4133974	Phường	227	\N	\N
7909	Phường Thanh Miếu	phuong-thanh-mieu	21.3101833	105.4229159	Phường	227	\N	\N
7912	Phường Bạch Hạc	phuong-bach-hac	21.286364	105.4448838	Phường	227	\N	\N
7915	Phường Bến Gót	phuong-ben-got	21.2987753	105.4261142	Phường	227	\N	\N
7918	Phường Vân Phú	phuong-van-phu	21.3499823	105.3541013	Phường	227	\N	\N
7921	Xã Phượng Lâu	xa-phuong-lau	21.3556889	105.386309	Xã	227	\N	\N
7924	Xã Thụy Vân	xa-thuy-van	21.324671	105.3453184	Xã	227	\N	\N
7927	Phường Minh Phương	phuong-minh-phuong	21.3127347	105.3829232	Phường	227	\N	\N
7930	Xã Trưng Vương	xa-trung-vuong	21.3233809	105.4214515	Xã	227	\N	\N
7933	Phường Minh Nông	phuong-minh-nong	21.3129654	105.3775245	Phường	227	\N	\N
7936	Xã Sông Lô	xa-song-lo	21.3095811	105.4448838	Xã	227	\N	\N
7939	Phường Trường Thịnh	phuong-truong-thinh	21.4036305	105.2297199	Phường	228	\N	\N
7942	Phường Hùng Vương	phuong-hung-vuong	21.4052532	105.2121675	Phường	228	\N	\N
7945	Phường Phong Châu	phuong-phong-chau	21.3980921	105.2267944	Phường	228	\N	\N
7948	Phường Âu Cơ	phuong-au-co	21.4073811	105.2048546	Phường	228	\N	\N
7951	Xã Hà Lộc	xa-ha-loc	21.4305456	105.2370339	Xã	228	\N	\N
7954	Xã Phú Hộ	xa-phu-ho	21.4399922	105.2604409	Xã	228	\N	\N
7957	Xã Văn Lung	xa-van-lung	21.4210935	105.2136302	Xã	228	\N	\N
7960	Xã Thanh Minh	xa-thanh-minh	21.3841435	105.2048546	Xã	228	\N	\N
7963	Xã Hà Thạch	xa-ha-thach	21.3975222	105.2452168	Xã	228	\N	\N
7966	Phường Thanh Vinh	phuong-thanh-vinh	21.409001	105.1873049	Phường	228	\N	\N
7969	Thị trấn Đoan Hùng	thi-tran-doan-hung	21.6303249	105.1814554	Thị trấn	230	\N	\N
7972	Xã Đông Khê	xa-dong-khe	21.7076605	105.0995842	Xã	230	\N	\N
7975	Xã Nghinh Xuyên	xa-nghinh-xuyen	21.6854212	105.1200482	Xã	230	\N	\N
7978	Xã Hùng Quan	xa-hung-quan	21.6810742	105.1668326	Xã	230	\N	\N
7981	Xã Bằng Luân	xa-bang-luan	21.679209	105.0615865	Xã	230	\N	\N
7984	Xã Vân Du	xa-van-du	21.6567435	105.1785307	Xã	230	\N	\N
7987	Xã Phương Trung	xa-phuong-trung	21.6600051	105.1434387	Xã	230	\N	\N
7990	Xã Quế Lâm	xa-que-lam	21.6481674	105.1062203	Xã	230	\N	\N
7993	Xã Minh Lương	xa-minh-luong	21.646488	105.0382076	Xã	230	\N	\N
7996	Xã Bằng Doãn	xa-bang-doan	21.6327074	105.0615865	Xã	230	\N	\N
7999	Xã Chí Đám	xa-chi-dam	21.6534737	105.2136302	Xã	230	\N	\N
8002	Xã Phong Phú	xa-phong-phu	21.6441201	105.1580595	Xã	230	\N	\N
8005	Xã Phúc Lai	xa-phuc-lai	21.6178452	105.096661	Xã	230	\N	\N
8008	Xã Ngọc Quan	xa-ngoc-quan	21.6124322	105.1551352	Xã	230	\N	\N
8011	Xã Hữu Đô	xa-huu-do	21.6339574	105.2048546	Xã	230	\N	\N
8014	Xã Đại Nghĩa	xa-dai-nghia	21.6186157	105.2136302	Xã	230	\N	\N
8017	Xã Sóc Đăng	xa-soc-dang	21.6065402	105.1873049	Xã	230	\N	\N
8020	Xã Phú Thứ	xa-phu-thu	21.6079931	105.2341082	Xã	230	\N	\N
8023	Xã Tây Cốc	xa-tay-coc	21.6378452	105.1317431	Xã	230	\N	\N
8026	Xã Yên Kiện	xa-yen-kien	21.5870193	105.1785307	Xã	230	\N	\N
8029	Xã Hùng Long	xa-hung-long	21.5916555	105.2224062	Xã	230	\N	\N
8032	Xã Vụ Quang	xa-vu-quang	21.5688707	105.248737	Xã	230	\N	\N
8035	Xã Vân Đồn	xa-van-don	21.5721388	105.2136302	Xã	230	\N	\N
8038	Xã Tiêu Sơn	xa-tieu-son	21.5637782	105.1785307	Xã	230	\N	\N
8041	Xã Minh Tiến	xa-minh-tien	21.5506072	105.1639082	Xã	230	\N	\N
8044	Xã Minh Phú	xa-minh-phu	21.5456353	105.248737	Xã	230	\N	\N
8047	Xã Chân Mộng	xa-chan-mong	21.5288388	105.2107049	Xã	230	\N	\N
8050	Xã Ca Đình	xa-ca-dinh	21.5924368	105.1200482	Xã	230	\N	\N
8053	Thị trấn Hạ Hoà	thi-tran-ha-hoa	21.5672496	105.0148322	Thị trấn	231	\N	\N
8056	Xã Đại Phạm	xa-dai-pham	21.6613417	105.0031457	Xã	231	\N	\N
8059	Xã Hậu Bổng	xa-hau-bong	21.6408021	104.9418057	Xã	231	\N	\N
8062	Xã Đan Hà	xa-dan-ha	21.6339182	104.9534877	Xã	231	\N	\N
8065	Xã Hà Lương	xa-ha-luong	21.6253851	105.0148322	Xã	231	\N	\N
8068	Xã Lệnh Khanh	xa-lenh-khanh	14.058324	108.277199	Xã	231	\N	\N
8071	Xã Phụ Khánh	xa-phu-khanh	21.6159031	104.9914601	Xã	231	\N	\N
8074	Xã Liên Phương	xa-lien-phuong	21.6260239	104.9126044	Xã	231	\N	\N
8077	Xã Đan Thượng	xa-dan-thuong	21.6238908	104.935965	Xã	231	\N	\N
8080	Xã Hiền Lương	xa-hien-luong	21.6038258	104.9009254	Xã	231	\N	\N
8083	Xã Động Lâm	xa-dong-lam	21.6064454	104.935965	Xã	231	\N	\N
8086	Xã Lâm Lợi	xa-lam-loi	21.5958551	104.9564084	Xã	231	\N	\N
8089	Xã Phương Viên	xa-phuong-vien	21.5930398	105.0820457	Xã	231	\N	\N
8092	Xã Gia Điền	xa-gia-dien	21.6084338	105.0411298	Xã	231	\N	\N
8095	Xã Ấm Hạ	xa-am-ha	21.5883567	105.0382076	Xã	231	\N	\N
8098	Xã Quân Khê	xa-quan-khe	21.5546572	104.8980058	Xã	231	\N	\N
8101	Xã Y Sơn	xa-y-son	21.5900076	104.9885388	Xã	231	\N	\N
8104	Xã Hương Xạ	xa-huong-xa	21.5618801	105.0732771	Xã	231	\N	\N
8107	Xã Cáo Điền	xa-cao-dien	21.5681741	105.0995842	Xã	231	\N	\N
8110	Xã Xuân Áng	xa-xuan-ang	21.5504035	104.9447261	Xã	231	\N	\N
8113	Xã Yên Kỳ	xa-yen-ky	21.5575681	105.1200482	Xã	231	\N	\N
8116	Xã Chuế Lưu	xa-chue-luu	21.5599	104.9680914	Xã	231	\N	\N
8119	Xã Minh Hạc	xa-minh-hac	21.5519123	105.0235976	Xã	231	\N	\N
8122	Xã Lang Sơn	xa-lang-son	21.5418524	105.0382076	Xã	231	\N	\N
8125	Xã Bằng Giã	xa-bang-gia	21.5461352	104.9914601	Xã	231	\N	\N
8128	Xã Yên Luật	xa-yen-luat	21.531792	105.052819	Xã	231	\N	\N
8131	Xã Vô Tranh	xa-vo-tranh	21.5144501	104.9564084	Xã	231	\N	\N
8134	Xã Văn Lang	xa-van-lang	21.5323687	105.0148322	Xã	231	\N	\N
8137	Xã Chính Công	xa-chinh-cong	21.5296435	105.0761999	Xã	231	\N	\N
8140	Xã Minh Côi	xa-minh-coi	21.5091149	105.0148322	Xã	231	\N	\N
8143	Xã Vĩnh Chân	xa-vinh-chan	21.5048305	105.0615865	Xã	231	\N	\N
8146	Xã Mai Tùng	xa-mai-tung	21.5096131	105.0411298	Xã	231	\N	\N
8149	Xã Vụ Cầu	xa-vu-cau	21.4889582	105.0761999	Xã	231	\N	\N
8152	Thị trấn Thanh Ba	thi-tran-thanh-ba	21.5062839	105.1405147	Thị trấn	232	\N	\N
8155	Xã Thanh Vân	xa-thanh-van	21.5237777	105.1083542	Xã	232	\N	\N
8156	Xã Vân Lĩnh	xa-van-linh	21.5525562	105.1306047	Xã	232	\N	\N
8158	Xã Đông Lĩnh	xa-dong-linh	21.532163	105.1434387	Xã	232	\N	\N
8161	Xã Đại An	xa-dai-an	21.5257409	105.1814554	Xã	232	\N	\N
8164	Xã Hanh Cù	xa-hanh-cu	21.5105942	105.0937378	Xã	232	\N	\N
8167	Xã Thái Ninh	xa-thai-ninh	21.5157442	105.1639082	Xã	232	\N	\N
8170	Xã Đồng Xuân	xa-dong-xuan	21.507902	105.1229718	Xã	232	\N	\N
8173	Xã Năng Yên	xa-nang-yen	21.5035094	105.2019295	Xã	232	\N	\N
8176	Xã Yển Khê	xa-yen-khe	21.4926211	105.0995842	Xã	232	\N	\N
8179	Xã Ninh Dân	xa-ninh-dan	21.4845968	105.1551352	Xã	232	\N	\N
8182	Xã Quảng Nạp	xa-quang-nap	21.4903391	105.1873049	Xã	232	\N	\N
8185	Xã Vũ Yển	xa-vu-yen	21.4820723	105.0878917	Xã	232	\N	\N
8188	Xã Yên Nội	xa-yen-noi	21.4777684	105.1346669	Xã	232	\N	\N
8191	Xã Phương Lĩnh	xa-phuong-linh	21.4857336	105.1112776	Xã	232	\N	\N
8194	Xã Võ Lao	xa-vo-lao	21.4670994	105.1873049	Xã	232	\N	\N
8197	Xã Khải Xuân	xa-khai-xuan	21.4675681	105.2136302	Xã	232	\N	\N
8200	Xã Mạn Lạn	xa-man-lan	21.4624879	105.1112776	Xã	232	\N	\N
8203	Xã Thanh Xá	xa-thanh-xa	21.4603356	105.1346669	Xã	232	\N	\N
8206	Xã Chí Tiên	xa-chi-tien	21.4381125	105.1551352	Xã	232	\N	\N
8209	Xã Đông Thành	xa-dong-thanh	21.434875	105.1902297	Xã	232	\N	\N
8212	Xã Hoàng Cương	xa-hoang-cuong	21.4492519	105.1288193	Xã	232	\N	\N
8215	Xã Sơn Cương	xa-son-cuong	21.416429	105.169757	Xã	232	\N	\N
8218	Xã Thanh Hà	xa-thanh-ha	21.3931885	105.169757	Xã	232	\N	\N
8221	Xã Đỗ Sơn	xa-do-son	21.3778557	105.1785307	Xã	232	\N	\N
8224	Xã Đỗ Xuyên	xa-do-xuyen	21.3561749	105.1931546	Xã	232	\N	\N
8227	Xã Lương Lỗ	xa-luong-lo	21.3434784	105.2048546	Xã	232	\N	\N
8230	Thị trấn Phong Châu	thi-tran-phong-chau	21.4092335	105.3101915	Thị trấn	233	\N	\N
8233	Xã Phú Mỹ	xa-phu-my	21.5191294	105.2838511	Xã	233	\N	\N
8234	Xã Lệ Mỹ	xa-le-my	14.058324	108.277199	Xã	233	\N	\N
8236	Xã Liên Hoa	xa-lien-hoa	21.5070616	105.2575148	Xã	233	\N	\N
8239	Xã Trạm Thản	xa-tram-than	21.5002524	105.2370339	Xã	233	\N	\N
8242	Xã Trị Quận	xa-tri-quan	21.4905372	105.3101915	Xã	233	\N	\N
8245	Xã Trung Giáp	xa-trung-giap	21.4737544	105.2721456	Xã	233	\N	\N
8248	Xã Tiên Phú	xa-tien-phu	21.4759301	105.248737	Xã	233	\N	\N
8251	Xã Hạ Giáp	xa-ha-giap	21.469392	105.3189726	Xã	233	\N	\N
8254	Xã Bảo Thanh	xa-bao-thanh	21.4631359	105.2926308	Xã	233	\N	\N
8257	Xã Phú Lộc	xa-phu-loc	21.4340971	105.2926308	Xã	233	\N	\N
8260	Xã Gia Thanh	xa-gia-thanh	21.4493395	105.3160455	Xã	233	\N	\N
8263	Xã Tiên Du	xa-tien-du	21.4413482	105.3394635	Xã	233	\N	\N
8266	Xã Phú Nham	xa-phu-nham	21.4261104	105.3160455	Xã	233	\N	\N
8269	Xã Bình Bộ	xa-binh-bo	21.4200996	105.3804526	Xã	233	\N	\N
8272	Xã An Đạo	xa-an-dao	21.4101291	105.3628846	Xã	233	\N	\N
8275	Xã Tử Đà	xa-tu-da	21.4047635	105.3892372	Xã	233	\N	\N
8278	Xã Phù Ninh	xa-phu-ninh	21.387002	105.3306814	Xã	233	\N	\N
8281	Xã Kim Đức	xa-kim-duc	21.3732075	105.3541013	Xã	227	\N	\N
8284	Xã Vĩnh Phú	xa-vinh-phu	21.3794585	105.3804526	Xã	233	\N	\N
8287	Xã Hùng Lô	xa-hung-lo	21.3673002	105.386309	Xã	227	\N	\N
8290	Thị trấn Yên Lập	thi-tran-yen-lap	21.3537103	105.0615865	Thị trấn	234	\N	\N
8293	Xã Mỹ Lung	xa-my-lung	21.5017857	104.9038451	Xã	234	\N	\N
8296	Xã Mỹ Lương	xa-my-luong	21.4531433	104.9272044	Xã	234	\N	\N
8299	Xã Lương Sơn	xa-luong-son	21.4488962	104.9739333	Xã	234	\N	\N
8302	Xã Xuân An	xa-xuan-an	21.4097898	104.9564084	Xã	234	\N	\N
8305	Xã Xuân Viên	xa-xuan-vien	21.4055401	105.0031457	Xã	234	\N	\N
8308	Xã Xuân Thủy	xa-xuan-thuy	21.3812228	105.0148322	Xã	234	\N	\N
8311	Xã Trung Sơn	xa-trung-son	21.3579903	104.9505671	Xã	234	\N	\N
8314	Xã Hưng Long	xa-hung-long	21.3653599	105.0294415	Xã	234	\N	\N
8317	Xã Nga Hoàng	xa-nga-hoang	21.355861	105.0060673	Xã	234	\N	\N
8320	Xã Đồng Lạc	xa-dong-lac	21.3272601	105.096661	Xã	234	\N	\N
8323	Xã Thượng Long	xa-thuong-long	21.3230923	105.0148322	Xã	234	\N	\N
8326	Xã Đồng Thịnh	xa-dong-thinh	21.3304619	105.0615865	Xã	234	\N	\N
8329	Xã Phúc Khánh	xa-phuc-khanh	21.2839659	105.0615865	Xã	234	\N	\N
8332	Xã Minh Hòa	xa-minh-hoa	21.290256	105.1200482	Xã	234	\N	\N
8335	Xã Ngọc Lập	xa-ngoc-lap	21.244837	105.1083542	Xã	234	\N	\N
8338	Xã Ngọc Đồng	xa-ngoc-dong	21.2416343	105.1434387	Xã	234	\N	\N
8341	Thị trấn Sông Thao	thi-tran-song-thao	21.4249322	105.1405147	Thị trấn	235	\N	\N
8344	Xã Tiên Lương	xa-tien-luong	21.4858614	105.0148322	Xã	235	\N	\N
8347	Xã Tuy Lộc	xa-tuy-loc	21.4815806	105.0615865	Xã	235	\N	\N
8350	Xã Ngô Xá	xa-ngo-xa	21.4631104	105.0411298	Xã	235	\N	\N
8353	Xã Phương Xá	xa-phuong-xa	21.4667603	105.0805842	Xã	235	\N	\N
8356	Xã Phượng Vĩ	xa-phuong-vi	21.4393548	105.0148322	Xã	235	\N	\N
8359	Xã Đồng Cam	xa-dong-cam	21.456744	105.0630478	Xã	235	\N	\N
8362	Xã Thụy Liễu	xa-thuy-lieu	21.4509501	105.0469743	Xã	235	\N	\N
8365	Xã Phùng Xá	xa-phung-xa	21.4535493	105.0820457	Xã	235	\N	\N
8368	Xã Sơn Nga	xa-son-nga	21.4434904	105.096661	Xã	235	\N	\N
8371	Xã Sai Nga	xa-sai-nga	21.4445163	105.1171246	Xã	235	\N	\N
8374	Xã Tùng Khê	xa-tung-khe	21.4371848	105.0703544	Xã	235	\N	\N
8377	Xã Tam Sơn	xa-tam-son	21.4287678	105.0352855	Xã	235	\N	\N
8380	Xã Văn Bán	xa-van-ban	21.4129011	105.0498966	Xã	235	\N	\N
8383	Xã Cấp Dẫn	xa-cap-dan	21.4192131	105.0761999	Xã	235	\N	\N
8386	Xã Thanh Nga	xa-thanh-nga	21.4276197	105.1112776	Xã	235	\N	\N
8389	Xã Xương Thịnh	xa-xuong-thinh	21.41707	105.0995842	Xã	235	\N	\N
8392	Xã Phú Khê	xa-phu-khe	21.408575	105.1288193	Xã	235	\N	\N
8395	Xã Sơn Tình	xa-son-tinh	21.4001712	105.0937378	Xã	235	\N	\N
8398	Xã Yên Tập	xa-yen-tap	21.390068	105.1405147	Xã	235	\N	\N
8401	Xã Hương Lung	xa-huong-lung	21.3748215	105.0849687	Xã	235	\N	\N
8404	Xã Tạ Xá	xa-ta-xa	21.3832308	105.1200482	Xã	235	\N	\N
8407	Xã Phú Lạc	xa-phu-lac	21.372099	105.1463628	Xã	235	\N	\N
8410	Xã Tình Cương	xa-tinh-cuong	21.3710241	105.1580595	Xã	235	\N	\N
8413	Xã Chương Xá	xa-chuong-xa	21.3568132	105.1229718	Xã	235	\N	\N
8416	Xã Hiền Đa	xa-hien-da	21.3596463	105.1712193	Xã	235	\N	\N
8419	Xã Văn Khúc	xa-van-khuc	21.3356715	105.1317431	Xã	235	\N	\N
8422	Xã Yên Dưỡng	xa-yen-duong	21.3198052	105.1463628	Xã	235	\N	\N
8425	Xã Cát Trù	xa-cat-tru	21.3461706	105.1756061	Xã	235	\N	\N
8428	Xã Điêu Lương	xa-dieu-luong	21.3324521	105.1668326	Xã	235	\N	\N
8431	Xã Đồng Lương	xa-dong-luong	21.2975926	105.1668326	Xã	235	\N	\N
8434	Thị trấn Hưng Hoá	thi-tran-hung-hoa	21.2546057	105.2867776	Thị trấn	236	\N	\N
8437	Xã Vực Trường	xa-vuc-truong	21.382523	105.2224062	Xã	236	\N	\N
8440	Xã Hiền Quan	xa-hien-quan	21.3750918	105.2399596	Xã	236	\N	\N
8443	Xã Hương Nha	xa-huong-nha	21.3586001	105.2295506	Xã	236	\N	\N
8446	Xã Thanh Uyên	xa-thanh-uyen	21.3481421	105.248737	Xã	236	\N	\N
8449	Xã Xuân Quang	xa-xuan-quang	21.3386861	105.2253316	Xã	236	\N	\N
8452	Xã Tứ Mỹ	xa-tu-my	21.3154509	105.2253316	Xã	236	\N	\N
8455	Xã Văn Lương	xa-van-luong	21.3249087	105.248737	Xã	236	\N	\N
8458	Xã Hùng Đô	xa-hung-do	21.3038899	105.1931546	Xã	236	\N	\N
8461	Xã Phương Thịnh	xa-phuong-thinh	21.2932931	105.2136302	Xã	236	\N	\N
8464	Xã Tam Cường	xa-tam-cuong	21.3201119	105.2692193	Xã	236	\N	\N
8467	Xã Cổ Tiết	xa-co-tiet	21.290059	105.248737	Xã	236	\N	\N
8470	Xã Quang Húc	xa-quang-huc	21.2864619	105.1931546	Xã	236	\N	\N
8473	Xã Hương Nộn	xa-huong-non	21.2683815	105.263367	Xã	236	\N	\N
8476	Xã Tề Lễ	xa-te-le	21.2616615	105.1785307	Xã	236	\N	\N
8479	Xã Thọ Văn	xa-tho-van	21.2562876	105.2370339	Xã	236	\N	\N
8482	Xã Dị Nậu	xa-di-nau	21.242516	105.2604409	Xã	236	\N	\N
8485	Xã Hồng Đà	xa-hong-da	21.2433835	105.3453184	Xã	236	\N	\N
8488	Xã Dậu Dương	xa-dau-duong	21.2419101	105.2984842	Xã	236	\N	\N
8491	Xã Thượng Nông	xa-thuong-nong	21.2397455	105.3218997	Xã	236	\N	\N
8494	Thị trấn Lâm Thao	thi-tran-lam-thao	21.3242951	105.2867776	Thị trấn	237	\N	\N
8497	Xã Tiên Kiên	xa-tien-kien	21.3902678	105.2955575	Xã	237	\N	\N
8498	Thị trấn Hùng Sơn	thi-tran-hung-son	21.358055	105.2984842	Thị trấn	237	\N	\N
8500	Xã Xuân Lũng	xa-xuan-lung	21.3718413	105.2750719	Xã	237	\N	\N
8503	Xã Hy Cương	xa-hy-cuong	21.3674947	105.3218997	Xã	227	\N	\N
8506	Xã Chu Hóa	xa-chu-hoa	21.3427221	105.3072646	Xã	227	\N	\N
8509	Xã Xuân Huy	xa-xuan-huy	21.3671176	105.263367	Xã	237	\N	\N
8512	Xã Thạch Sơn	xa-thach-son	21.3448928	105.2838511	Xã	237	\N	\N
8515	Xã Thanh Đình	xa-thanh-dinh	21.3268463	105.3218997	Xã	227	\N	\N
8518	Xã Sơn Vi	xa-son-vi	21.3119336	105.3040803	Xã	237	\N	\N
8521	Xã Hợp Hải	xa-hop-hai	21.3021474	105.2750719	Xã	237	\N	\N
8524	Xã Sơn Dương	xa-son-duong	21.2947161	105.2926308	Xã	237	\N	\N
8527	Xã Cao Xá	xa-cao-xa	21.293008	105.3423909	Xã	237	\N	\N
8530	Xã Kinh Kệ	xa-kinh-ke	21.2783761	105.2809247	Xã	237	\N	\N
8533	Xã Vĩnh Lại	xa-vinh-lai	21.2697827	105.3423909	Xã	237	\N	\N
8536	Xã Tứ Xã	xa-tu-xa	21.284651	105.3072646	Xã	237	\N	\N
8539	Xã Bản Nguyên	xa-ban-nguyen	21.2577072	105.3160455	Xã	237	\N	\N
8542	Thị trấn Thanh Sơn	thi-tran-thanh-son	21.2141148	105.1902297	Thị trấn	238	\N	\N
8545	Xã Thu Cúc	xa-thu-cuc	21.3072159	104.8688126	Xã	240	\N	\N
8548	Xã Thạch Kiệt	xa-thach-kiet	21.2628527	104.9739333	Xã	240	\N	\N
8551	Xã Thu Ngạc	xa-thu-ngac	21.2564997	105.044052	Xã	240	\N	\N
8554	Xã Kiệt Sơn	xa-kiet-son	21.2247914	104.9447261	Xã	240	\N	\N
8557	Xã Đồng Sơn	xa-dong-son	21.2014888	104.8804893	Xã	240	\N	\N
8560	Xã Lai Đồng	xa-lai-dong	21.2279441	104.9096846	Xã	240	\N	\N
8563	Xã Sơn Hùng	xa-son-hung	21.2373515	105.1902297	Xã	238	\N	\N
8566	Xã Tân Phú	xa-tan-phu	21.2078932	105.0031457	Xã	240	\N	\N
8569	Xã Mỹ Thuận	xa-my-thuan	21.2078818	105.0674317	Xã	240	\N	\N
8572	Xã Địch Quả	xa-dich-qua	21.1972858	105.1200482	Xã	238	\N	\N
8575	Xã Giáp Lai	xa-giap-lai	21.2003526	105.2136302	Xã	238	\N	\N
8578	Xã Tân Sơn	xa-tan-son	21.1909579	104.9330448	Xã	240	\N	\N
8581	Xã Thục Luyện	xa-thuc-luyen	21.18033	105.1785307	Xã	238	\N	\N
8584	Xã Võ Miếu	xa-vo-mieu	21.1550166	105.1375908	Xã	238	\N	\N
8587	Xã Thạch Khoán	xa-thach-khoan	21.1855142	105.248737	Xã	238	\N	\N
8590	Xã Xuân Đài	xa-xuan-dai	21.14448	104.9973028	Xã	240	\N	\N
8593	Xã Minh Đài	xa-minh-dai	21.169848	105.0382076	Xã	240	\N	\N
8596	Xã Văn Luông	xa-van-luong	21.1539886	105.0849687	Xã	240	\N	\N
8599	Xã Xuân Sơn	xa-xuan-son	21.127527	104.9272044	Xã	240	\N	\N
8602	Xã Cự Thắng	xa-cu-thang	21.1317202	105.2019295	Xã	238	\N	\N
8605	Xã Tất Thắng	xa-tat-thang	21.1285089	105.2370339	Xã	238	\N	\N
8608	Xã Long Cốc	xa-long-coc	21.1212395	105.0615865	Xã	240	\N	\N
8611	Xã Văn Miếu	xa-van-mieu	21.103259	105.1317431	Xã	238	\N	\N
8614	Xã Cự Đồng	xa-cu-dong	21.1052776	105.2370339	Xã	238	\N	\N
8617	Xã Kim Thượng	xa-kim-thuong	21.074729	104.9973028	Xã	240	\N	\N
8620	Xã Tam Thanh	xa-tam-thanh	21.0814006	105.1084003	Xã	240	\N	\N
8623	Xã Thắng Sơn	xa-thang-son	21.0915195	105.2604409	Xã	238	\N	\N
8626	Xã Vinh Tiền	xa-vinh-tien	21.0684105	105.0674317	Xã	240	\N	\N
8629	Xã Tân Minh	xa-tan-minh	21.0641494	105.1785307	Xã	238	\N	\N
8632	Xã Hương Cần	xa-huong-can	21.0535426	105.2311827	Xã	238	\N	\N
8635	Xã Khả Cửu	xa-kha-cuu	21.0472431	105.1280611	Xã	238	\N	\N
8638	Xã Đông Cửu	xa-dong-cuu	21.0219231	105.0674317	Xã	238	\N	\N
8641	Xã Tân Lập	xa-tan-lap	21.015553	105.2019295	Xã	238	\N	\N
8644	Xã Yên Lãng	xa-yen-lang	21.009151	105.2721456	Xã	238	\N	\N
8647	Xã Yên Lương	xa-yen-luong	20.9775121	105.2370339	Xã	238	\N	\N
8650	Xã Thượng Cửu	xa-thuong-cuu	20.9691096	105.1375908	Xã	238	\N	\N
8653	Xã Lương Nha	xa-luong-nha	20.9943262	105.3072646	Xã	238	\N	\N
8656	Xã Yên Sơn	xa-yen-son	20.9563582	105.2779983	Xã	238	\N	\N
8659	Xã Tinh Nhuệ	xa-tinh-nhue	20.9573487	105.3306814	Xã	238	\N	\N
8662	Xã Đào Xá	xa-dao-xa	21.218207	105.2721456	Xã	239	\N	\N
8665	Xã Thạch Đồng	xa-thach-dong	21.206528	105.3043378	Xã	239	\N	\N
8668	Xã Xuân Lộc	xa-xuan-loc	21.2244169	105.3306814	Xã	239	\N	\N
8671	Xã Tân Phương	xa-tan-phuong	21.1938993	105.2838511	Xã	239	\N	\N
8674	Thị trấn Thanh Thủy	thi-tran-thanh-thuy	21.1612084	105.2604409	Thị trấn	239	\N	\N
8677	Xã Sơn Thủy	xa-son-thuy	21.1379784	105.2604409	Xã	239	\N	\N
8680	Xã Bảo Yên	xa-bao-yen	21.1474425	105.2838511	Xã	239	\N	\N
8683	Xã Đoan Hạ	xa-doan-ha	21.1315797	105.2984842	Xã	239	\N	\N
8686	Xã Đồng Luận	xa-dong-luan	21.0988365	105.3072646	Xã	239	\N	\N
8689	Xã Hoàng Xá	xa-hoang-xa	21.1105032	105.2750719	Xã	239	\N	\N
8692	Xã Trung Thịnh	xa-trung-thinh	21.108891	105.2926308	Xã	239	\N	\N
8695	Xã Trung Nghĩa	xa-trung-nghia	21.0856645	105.2926308	Xã	239	\N	\N
8698	Xã Phượng Mao	xa-phuong-mao	21.0698544	105.2750719	Xã	239	\N	\N
8701	Xã Yến Mao	xa-yen-mao	21.04292	105.2838511	Xã	239	\N	\N
8704	Xã Tu Vũ	xa-tu-vu	21.0154513	105.2984842	Xã	239	\N	\N
8707	Phường Tích Sơn	phuong-tich-son	21.3079669	105.5855438	Phường	243	\N	\N
8710	Phường Liên Bảo	phuong-lien-bao	21.317907	105.6031342	Phường	243	\N	\N
8713	Phường Hội Hợp	phuong-hoi-hop	21.292774	105.5620927	Phường	243	\N	\N
8716	Phường Đống Đa	phuong-dong-da	21.3063049	105.6031342	Phường	243	\N	\N
8719	Phường Ngô Quyền	phuong-ngo-quyen	21.3084479	105.5958047	Phường	243	\N	\N
8722	Phường Đồng Tâm	phuong-dong-tam	21.2900092	105.5914071	Phường	243	\N	\N
8725	Xã Định Trung	xa-dinh-trung	21.3306185	105.5914071	Xã	243	\N	\N
8728	Phường Khai Quang	phuong-khai-quang	21.3130643	105.6236585	Phường	243	\N	\N
8731	Xã Thanh Trù	xa-thanh-tru	21.2793693	105.6119301	Xã	243	\N	\N
8734	Phường Trưng Trắc	phuong-trung-trac	21.2369921	105.707246	Phường	244	\N	\N
8737	Phường Hùng Vương	phuong-hung-vuong	21.2267052	105.7087128	Phường	244	\N	\N
8740	Phường Trưng Nhị	phuong-trung-nhi	21.2446584	105.7028457	Phường	244	\N	\N
8743	Phường Phúc Thắng	phuong-phuc-thang	21.2371877	105.7204476	Phường	244	\N	\N
8746	Phường Xuân Hoà	phuong-xuan-hoa	21.2957318	105.7145801	Phường	244	\N	\N
8747	Phường Đồng Xuân	phuong-dong-xuan	21.2882565	105.7321831	Phường	244	\N	\N
8749	Xã Ngọc Thanh	xa-ngoc-thanh	21.3535366	105.7468535	Xã	244	\N	\N
8752	Xã Cao Minh	xa-cao-minh	21.2910496	105.7028457	Xã	244	\N	\N
8755	Xã Nam Viêm	xa-nam-viem	21.2672962	105.7087128	Xã	244	\N	\N
8758	Xã Tiền Châu	xa-tien-chau	21.2457721	105.6911121	Xã	244	\N	\N
8761	Thị trấn Lập Thạch	thi-tran-lap-thach	21.4129606	105.4566012	Thị trấn	246	\N	\N
8764	Xã Quang Sơn	xa-quang-son	21.5105308	105.4683193	Xã	246	\N	\N
8767	Xã Ngọc Mỹ	xa-ngoc-my	21.4805394	105.4478131	Xã	246	\N	\N
8770	Xã Hợp Lý	xa-hop-ly	21.4920119	105.4800382	Xã	246	\N	\N
8773	Xã Lãng Công	xa-lang-cong	21.4849455	105.4009508	Xã	253	\N	\N
8776	Xã Quang Yên	xa-quang-yen	21.5051107	105.3716684	Xã	253	\N	\N
8779	Xã Bạch Lưu	xa-bach-luu	21.4936099	105.3394635	Xã	253	\N	\N
8782	Xã Hải Lựu	xa-hai-luu	21.4777238	105.3541013	Xã	253	\N	\N
8785	Xã Bắc Bình	xa-bac-binh	21.4787438	105.4976181	Xã	246	\N	\N
8788	Xã Thái Hòa	xa-thai-hoa	21.4533147	105.5210607	Xã	246	\N	\N
8789	Thị trấn Hoa Sơn	thi-tran-hoa-son	21.4401906	105.5064087	Thị trấn	246	\N	\N
8791	Xã Liễn Sơn	xa-lien-son	21.4555292	105.4976181	Xã	246	\N	\N
8794	Xã Xuân Hòa	xa-xuan-hoa	21.4318976	105.471249	Xã	246	\N	\N
8797	Xã Vân Trục	xa-van-truc	21.4457114	105.4478131	Xã	246	\N	\N
8800	Xã Đồng Quế	xa-dong-que	21.4606238	105.4126652	Xã	253	\N	\N
8803	Xã Nhân Đạo	xa-nhan-dao	21.4554837	105.3745964	Xã	253	\N	\N
8806	Xã Đôn Nhân	xa-don-nhan	21.4428846	105.3541013	Xã	253	\N	\N
8809	Xã Phương Khoan	xa-phuong-khoan	21.439598	105.3892372	Xã	253	\N	\N
8812	Xã Liên Hòa	xa-lien-hoa	21.407443	105.5151997	Xã	246	\N	\N
8815	Xã Tử Du	xa-tu-du	21.4049524	105.4800382	Xã	246	\N	\N
8818	Xã Tân Lập	xa-tan-lap	21.4235936	105.4360963	Xã	253	\N	\N
8821	Xã Nhạo Sơn	xa-nhao-son	21.4278705	105.4214515	Xã	253	\N	\N
8824	Thị trấn Tam Sơn	thi-tran-tam-son	21.4237125	105.4038793	Thị trấn	253	\N	\N
8827	Xã Như Thụy	xa-nhu-thuy	21.4051991	105.4155939	Xã	253	\N	\N
8830	Xã Yên Thạch	xa-yen-thach	21.3982961	105.4273093	Xã	253	\N	\N
8833	Xã Bàn Giản	xa-ban-gian	21.3948678	105.494688	Xã	246	\N	\N
8836	Xã Xuân Lôi	xa-xuan-loi	21.386566	105.4595306	Xã	246	\N	\N
8839	Xã Đồng Ích	xa-dong-ich	21.3621217	105.5034785	Xã	246	\N	\N
8842	Xã Tiên Lữ	xa-tien-lu	21.3643257	105.4800382	Xã	246	\N	\N
8845	Xã Văn Quán	xa-van-quan	21.3633492	105.4595306	Xã	246	\N	\N
8848	Xã Đồng Thịnh	xa-dong-thinh	21.3771556	105.4360963	Xã	253	\N	\N
8851	Xã Tứ Yên	xa-tu-yen	21.3804459	105.4009508	Xã	253	\N	\N
8854	Xã Đức Bác	xa-duc-bac	21.3561295	105.4126652	Xã	253	\N	\N
8857	Xã Đình Chu	xa-dinh-chu	21.3474646	105.4741787	Xã	246	\N	\N
8860	Xã Cao Phong	xa-cao-phong	21.3423278	105.4360963	Xã	253	\N	\N
8863	Xã Triệu Đề	xa-trieu-de	21.3300532	105.4741787	Xã	246	\N	\N
8866	Xã Sơn Đông	xa-son-dong	21.31374	105.4624601	Xã	246	\N	\N
8869	Thị trấn Hợp Hòa	thi-tran-hop-hoa	21.3820191	105.5386447	Thị trấn	247	\N	\N
8872	Xã Hoàng Hoa	xa-hoang-hoa	21.4151719	105.5562304	Xã	247	\N	\N
8875	Xã Đồng Tĩnh	xa-dong-tinh	21.4136566	105.5415755	Xã	247	\N	\N
8878	Xã Kim Long	xa-kim-long	21.3616936	105.6002024	Xã	247	\N	\N
8881	Xã Hướng Đạo	xa-huong-dao	21.3755169	105.5767493	Xã	247	\N	\N
8884	Xã Đạo Tú	xa-dao-tu	21.3565956	105.5620927	Xã	247	\N	\N
8887	Xã An Hòa	xa-an-hoa	21.3715196	105.5269218	Xã	247	\N	\N
8890	Xã Thanh Vân	xa-thanh-van	21.3407063	105.5767493	Xã	247	\N	\N
8893	Xã Duy Phiên	xa-duy-phien	21.3350463	105.5445064	Xã	247	\N	\N
8896	Xã Hoàng Đan	xa-hoang-dan	21.3488604	105.5210607	Xã	247	\N	\N
8899	Xã Hoàng Lâu	xa-hoang-lau	21.3309002	105.5269218	Xã	247	\N	\N
8902	Xã Vân Hội	xa-van-hoi	21.311837	105.5445064	Xã	247	\N	\N
8905	Xã Hợp Thịnh	xa-hop-thinh	21.2886279	105.5445064	Xã	247	\N	\N
8908	Thị trấn Tam Đảo	thi-tran-tam-dao	21.4532302	105.6441852	Thị trấn	248	\N	\N
8911	Xã Hợp Châu	xa-hop-chau	21.3916533	105.6207263	Xã	248	\N	\N
8914	Xã Đạo Trù	xa-dao-tru	21.5065004	105.5415755	Xã	248	\N	\N
8917	Xã Yên Dương	xa-yen-duong	21.5008499	105.509339	Xã	248	\N	\N
8920	Xã Bồ Lý	xa-bo-ly	21.4690598	105.5386447	Xã	248	\N	\N
8923	Xã Đại Đình	xa-dai-dinh	21.461989	105.5826123	Xã	248	\N	\N
8926	Xã Tam Quan	xa-tam-quan	21.4180368	105.5730125	Xã	248	\N	\N
8929	Xã Hồ Sơn	xa-ho-son	21.429081	105.6236585	Xã	248	\N	\N
8932	Xã Minh Quang	xa-minh-quang	21.3856871	105.652983	Xã	248	\N	\N
8935	Thị trấn Hương Canh	thi-tran-huong-canh	21.2633295	105.6588485	Thị trấn	249	\N	\N
8936	Thị trấn Gia Khánh	thi-tran-gia-khanh	21.3499346	105.6324554	Thị trấn	249	\N	\N
8938	Xã Trung Mỹ	xa-trung-my	21.404413	105.6999122	Xã	249	\N	\N
8944	Xã Bá Hiến	xa-ba-hien	21.3074999	105.6823124	Xã	249	\N	\N
8947	Xã Thiện Kế	xa-thien-ke	21.3318135	105.6705801	Xã	249	\N	\N
8950	Xã Hương Sơn	xa-huong-son	21.3261763	105.6383202	Xã	249	\N	\N
8953	Xã Tam Hợp	xa-tam-hop	21.2955067	105.6559158	Xã	249	\N	\N
8956	Xã Quất Lưu	xa-quat-luu	21.2855738	105.6383202	Xã	249	\N	\N
8959	Xã Sơn Lôi	xa-son-loi	21.2758816	105.6793792	Xã	249	\N	\N
8962	Xã Đạo Đức	xa-dao-duc	21.2479967	105.6676471	Xã	249	\N	\N
8965	Xã Tân Phong	xa-tan-phong	21.2571272	105.6324554	Xã	249	\N	\N
8968	Thị trấn Thanh Lãng	thi-tran-thanh-lang	21.2434575	105.6236585	Thị trấn	249	\N	\N
8971	Xã Phú Xuân	xa-phu-xuan	21.233372	105.6383202	Xã	249	\N	\N
8973	Thị trấn Chi Đông	thi-tran-chi-dong	21.2048498	105.7556564	Thị trấn	250	\N	\N
8974	Xã Đại Thịnh	xa-dai-thinh	21.1850027	105.7204476	Xã	250	\N	\N
8977	Xã Kim Hoa	xa-kim-hoa	21.2207398	105.7409852	Xã	250	\N	\N
8980	Xã Thạch Đà	xa-thach-da	21.1720499	105.6735131	Xã	250	\N	\N
8983	Xã Tiến Thắng	xa-tien-thang	21.2242433	105.6735131	Xã	250	\N	\N
8986	Xã Tự Lập	xa-tu-lap	21.207955	105.6617813	Xã	250	\N	\N
8989	Thị trấn Quang Minh	thi-tran-quang-minh	21.1915793	105.7732633	Thị trấn	250	\N	\N
8992	Xã Thanh Lâm	xa-thanh-lam	21.2113735	105.7175138	Xã	250	\N	\N
8995	Xã Tam Đồng	xa-tam-dong	21.1999357	105.6852455	Xã	250	\N	\N
8998	Xã Liên Mạc	xa-lien-mac	21.1937334	105.6588485	Xã	250	\N	\N
9001	Xã Vạn Yên	xa-van-yen	21.1996782	105.6265908	Xã	250	\N	\N
9004	Xã Chu Phan	xa-chu-phan	21.1589365	105.6588485	Xã	250	\N	\N
9007	Xã Tiến Thịnh	xa-tien-thinh	21.1753719	105.6383202	Xã	250	\N	\N
9010	Xã Mê Linh	xa-me-linh	21.1601408	105.7380511	Xã	250	\N	\N
9013	Xã Văn Khê	xa-van-khe	21.1660984	105.7057792	Xã	250	\N	\N
9016	Xã Hoàng Kim	xa-hoang-kim	21.1587884	105.6911121	Xã	250	\N	\N
9019	Xã Tiền Phong	xa-tien-phong	21.1605321	105.7644596	Xã	250	\N	\N
9022	Xã Tráng Việt	xa-trang-viet	21.1406828	105.7292491	Xã	250	\N	\N
9025	Thị trấn Yên Lạc	thi-tran-yen-lac	21.2383509	105.5855438	Thị trấn	251	\N	\N
9028	Xã Đồng Cương	xa-dong-cuong	21.2726055	105.5914071	Xã	251	\N	\N
9031	Xã Đồng Văn	xa-dong-van	21.2717725	105.5386447	Xã	251	\N	\N
9034	Xã Bình Định	xa-binh-dinh	21.2583789	105.5884754	Xã	251	\N	\N
9037	Xã Trung Nguyên	xa-trung-nguyen	21.2557103	105.5606095	Xã	251	\N	\N
9040	Xã Tề Lỗ	xa-te-lo	21.247462	105.5503683	Xã	251	\N	\N
9043	Xã Tam Hồng	xa-tam-hong	21.214175	105.5650239	Xã	251	\N	\N
9046	Xã Yên Đồng	xa-yen-dong	21.1965994	105.5538601	Xã	251	\N	\N
9049	Xã Văn Tiến	xa-van-tien	21.217079	105.6265908	Xã	251	\N	\N
9052	Xã Nguyệt Đức	xa-nguyet-duc	21.2129376	105.6089981	Xã	251	\N	\N
9055	Xã Yên Phương	xa-yen-phuong	21.2087934	105.5914071	Xã	251	\N	\N
9058	Xã Hồng Phương	xa-hong-phuong	21.1966398	105.5972706	Xã	251	\N	\N
9061	Xã Trung Kiên	xa-trung-kien	21.1891829	105.6148621	Xã	251	\N	\N
9064	Xã Liên Châu	xa-lien-chau	21.1677633	105.5650239	Xã	251	\N	\N
9067	Xã Đại Tự	xa-dai-tu	21.1783892	105.5445064	Xã	251	\N	\N
9070	Xã Hồng Châu	xa-hong-chau	21.1745388	105.5855438	Xã	251	\N	\N
9073	Xã Trung Hà	xa-trung-ha	21.1823465	105.6104641	Xã	251	\N	\N
9076	Thị trấn Vĩnh Tường	thi-tran-vinh-tuong	21.2222994	105.509339	Thị trấn	252	\N	\N
9079	Xã Kim Xá	xa-kim-xa	21.3220497	105.4976181	Xã	252	\N	\N
9082	Xã Yên Bình	xa-yen-binh	21.3076895	105.5269218	Xã	252	\N	\N
9085	Xã Chấn Hưng	xa-chan-hung	21.2913831	105.5151997	Xã	252	\N	\N
9088	Xã Nghĩa Hưng	xa-nghia-hung	21.2872303	105.4976181	Xã	252	\N	\N
9091	Xã Yên Lập	xa-yen-lap	21.2946818	105.4800382	Xã	252	\N	\N
9094	Xã Việt Xuân	xa-viet-xuan	21.2905243	105.4624601	Xã	252	\N	\N
9097	Xã Bồ Sao	xa-bo-sao	21.2781504	105.4551365	Xã	252	\N	\N
9100	Xã Đại Đồng	xa-dai-dong	21.2687218	105.509339	Xã	252	\N	\N
9103	Xã Tân Tiến	xa-tan-tien	21.2748598	105.490293	Xã	252	\N	\N
9106	Xã Lũng Hoà	xa-lung-hoa	21.2693886	105.471249	Xã	252	\N	\N
9109	Xã Cao Đại	xa-cao-dai	21.2562487	105.4566012	Xã	252	\N	\N
9112	Thị Trấn Thổ Tang	thi-tran-tho-tang	21.253509	105.485898	Thị trấn	252	\N	\N
9115	Xã Vĩnh Sơn	xa-vinh-son	21.2460596	105.5034785	Xã	252	\N	\N
9118	Xã Bình Dương	xa-binh-duong	21.2438616	105.5269218	Xã	252	\N	\N
9121	Xã Tân Cương	xa-tan-cuong	21.2435462	105.4683193	Xã	252	\N	\N
9124	Xã Phú Thịnh	xa-phu-thinh	21.2340739	105.4609954	Xã	252	\N	\N
9127	Xã Thượng Trưng	xa-thuong-trung	21.2334716	105.4829681	Xã	252	\N	\N
9130	Xã Vũ Di	xa-vu-di	21.2339049	105.509339	Xã	252	\N	\N
9133	Xã Lý Nhân	xa-ly-nhan	21.2203319	105.4683193	Xã	252	\N	\N
9136	Xã Tuân Chính	xa-tuan-chinh	21.2070832	105.485898	Xã	252	\N	\N
9139	Xã Vân Xuân	xa-van-xuan	21.2311569	105.5386447	Xã	252	\N	\N
9142	Xã Tam Phúc	xa-tam-phuc	21.2048914	105.509339	Xã	252	\N	\N
9145	Thị trấn Tứ Trưng	thi-tran-tu-trung	21.2090474	105.5269218	Thị trấn	252	\N	\N
9148	Xã Ngũ Kiên	xa-ngu-kien	21.1916405	105.5269218	Xã	252	\N	\N
9151	Xã An Tường	xa-an-tuong	21.1907678	105.4741787	Xã	252	\N	\N
9154	Xã Vĩnh Thịnh	xa-vinh-thinh	21.1743457	105.494688	Xã	252	\N	\N
9157	Xã Phú Đa	xa-phu-da	21.1811328	105.5151997	Xã	252	\N	\N
9160	Xã Vĩnh Ninh	xa-vinh-ninh	21.1626296	105.5269218	Xã	252	\N	\N
9163	Phường Vũ Ninh	phuong-vu-ninh	21.1975347	106.0728356	Phường	256	\N	\N
9166	Phường Đáp Cầu	phuong-dap-cau	21.2026299	106.0948815	Phường	256	\N	\N
9169	Phường Thị Cầu	phuong-thi-cau	21.1969959	106.0904471	Phường	256	\N	\N
9172	Phường Kinh Bắc	phuong-kinh-bac	21.1888172	106.0638342	Phường	256	\N	\N
9175	Phường Vệ An	phuong-ve-an	21.1828931	106.0596092	Phường	256	\N	\N
9178	Phường Tiền An	phuong-tien-an	21.1815277	106.0662223	Phường	256	\N	\N
9181	Phường Đại Phúc	phuong-dai-phuc	21.1738006	106.0787142	Phường	256	\N	\N
9184	Phường Ninh Xá	phuong-ninh-xa	21.1768169	106.0625483	Phường	256	\N	\N
9187	Phường Suối Hoa	phuong-suoi-hoa	21.1831983	106.0698741	Phường	256	\N	\N
9190	Phường Võ Cường	phuong-vo-cuong	21.1644992	106.0552006	Phường	256	\N	\N
9193	Thị trấn Chờ	thi-tran-cho	21.1978889	105.9494248	Thị trấn	258	\N	\N
9196	Xã Dũng Liệt	xa-dung-liet	21.2513373	106.000974	Xã	258	\N	\N
9199	Xã Tam Đa	xa-tam-da	21.2235133	106.0321949	Xã	258	\N	\N
9202	Xã Tam Giang	xa-tam-giang	21.2271932	105.949194	Xã	258	\N	\N
9205	Xã Yên Trung	xa-yen-trung	21.2198182	105.9847188	Xã	258	\N	\N
9208	Xã Thụy Hòa	xa-thuy-hoa	21.2109195	106.0183668	Xã	258	\N	\N
9211	Xã Hòa Tiến	xa-hoa-tien	21.1941429	105.9582372	Xã	258	\N	\N
9214	Xã Hòa Long	xa-hoa-long	21.1851319	106.0547166	Xã	256	\N	\N
9217	Xã Đông Tiến	xa-dong-tien	21.2206467	105.9708806	Xã	258	\N	\N
9220	Xã Yên Phụ	xa-yen-phu	21.1987165	105.9277296	Xã	258	\N	\N
9223	Xã Trung Nghĩa	xa-trung-nghia	21.1788105	105.9670501	Xã	258	\N	\N
9226	Phường Vạn An	phuong-van-an	21.1940951	106.0496735	Phường	256	\N	\N
9229	Xã Đông Phong	xa-dong-phong	21.194729	106.015895	Xã	258	\N	\N
9232	Xã Long Châu	xa-long-chau	21.200586	106.004501	Xã	258	\N	\N
9235	Phường Khúc Xuyên	phuong-khuc-xuyen	21.1830123	106.0434449	Phường	256	\N	\N
9238	Xã Văn Môn	xa-van-mon	21.1697264	105.9305567	Xã	258	\N	\N
9241	Xã Đông Thọ	xa-dong-tho	21.1717664	105.9374285	Xã	258	\N	\N
9244	Phường Phong Khê	phuong-phong-khe	21.1725674	106.0316898	Phường	256	\N	\N
9247	Thị trấn Phố Mới	thi-tran-pho-moi	21.1534803	106.1536828	Thị trấn	259	\N	\N
9250	Xã Việt Thống	xa-viet-thong	21.1949254	106.1288912	Xã	259	\N	\N
9253	Xã Đại Xuân	xa-dai-xuan	21.1865968	106.12575	Xã	259	\N	\N
9256	Xã Kim Chân	xa-kim-chan	21.1941046	106.1081103	Xã	256	\N	\N
9259	Xã Nhân Hòa	xa-nhan-hoa	21.1810721	106.142059	Xã	259	\N	\N
9262	Xã Bằng An	xa-bang-an	21.1532091	106.1517369	Xã	259	\N	\N
9265	Xã Phương Liễu	xa-phuong-lieu	21.163438	106.12575	Xã	259	\N	\N
9268	Xã Quế Tân	xa-que-tan	21.1125353	106.2062514	Xã	259	\N	\N
9271	Phường Vân Dương	phuong-van-duong	21.1605068	106.0963513	Phường	256	\N	\N
9274	Xã Phù Lương	xa-phu-luong	21.1533716	106.199266	Xã	259	\N	\N
9277	Xã Phù Lãng	xa-phu-lang	21.1603374	106.2463305	Xã	259	\N	\N
9280	Xã Phượng Mao	xa-phuong-mao	21.150714	106.1375107	Xã	259	\N	\N
9283	Xã Việt Hùng	xa-viet-hung	21.1440932	106.1757379	Xã	259	\N	\N
9286	Xã Nam Sơn	xa-nam-son	21.1405263	106.0934117	Xã	256	\N	\N
9289	Xã Ngọc Xá	xa-ngoc-xa	21.1424986	106.2162425	Xã	259	\N	\N
9292	Xã Châu Phong	xa-chau-phong	21.1360355	106.2580983	Xã	259	\N	\N
9295	Xã Bồng Lai	xa-bong-lai	21.120331	106.1645415	Xã	259	\N	\N
9298	Xã Cách Bi	xa-cach-bi	21.1177583	106.1786787	Xã	259	\N	\N
9301	Xã Đào Viên	xa-dao-vien	21.1148879	106.2080897	Xã	259	\N	\N
9304	Xã Yên Giả	xa-yen-gia	21.1289238	106.1308952	Xã	259	\N	\N
9307	Xã Mộ Đạo	xa-mo-dao	21.1187407	106.1459877	Xã	259	\N	\N
9310	Xã Đức Long	xa-duc-long	21.1221528	106.2816361	Xã	259	\N	\N
9313	Xã Chi Lăng	xa-chi-lang	21.0962004	106.1343867	Xã	259	\N	\N
9316	Xã Hán Quảng	xa-han-quang	21.0869955	106.1011227	Xã	259	\N	\N
9319	Thị trấn Lim	thi-tran-lim	21.1441772	106.0258126	Thị trấn	260	\N	\N
9322	Xã Phú Lâm	xa-phu-lam	21.1727961	105.9993672	Xã	260	\N	\N
9325	Phường Khắc Niệm	phuong-khac-niem	21.1314843	106.0580066	Phường	256	\N	\N
9328	Xã Nội Duệ	xa-noi-due	21.1400879	106.0081819	Xã	260	\N	\N
9331	Phường Hạp Lĩnh	phuong-hap-linh	21.142413	106.0736783	Phường	256	\N	\N
9334	Xã Liên Bão	xa-lien-bao	21.1293608	106.0251321	Xã	260	\N	\N
9337	Xã Hiên Vân	xa-hien-van	21.1223989	106.050213	Xã	260	\N	\N
9340	Xã Hoàn Sơn	xa-hoan-son	21.1122605	105.9964291	Xã	260	\N	\N
9343	Xã Lạc Vệ	xa-lac-ve	21.1185051	106.0816536	Xã	260	\N	\N
9346	Xã Việt Đoàn	xa-viet-doan	21.1178311	106.0287512	Xã	260	\N	\N
9349	Xã Phật Tích	xa-phat-tich	21.097263	106.0245037	Xã	260	\N	\N
9352	Xã Tân Chi	xa-tan-chi	21.0956685	106.0789866	Xã	260	\N	\N
9355	Xã Đại Đồng	xa-dai-dong	21.0928361	105.9876149	Xã	260	\N	\N
9358	Xã Tri Phương	xa-tri-phuong	21.0811531	106.006608	Xã	260	\N	\N
9361	Xã Minh Đạo	xa-minh-dao	21.08715	106.0543885	Xã	260	\N	\N
9364	Xã Cảnh Hưng	xa-canh-hung	21.0846662	106.0330646	Xã	260	\N	\N
9367	Phường Đông Ngàn	phuong-dong-ngan	21.1156528	105.9611748	Phường	261	\N	\N
9370	Xã Tam Sơn	xa-tam-son	21.145742	105.9747648	Xã	261	\N	\N
9373	Xã Hương Mạc	xa-huong-mac	21.1554786	105.9310669	Xã	261	\N	\N
9376	Xã Tương Giang	xa-tuong-giang	21.1417883	105.9905529	Xã	261	\N	\N
9379	Xã Phù Khê	xa-phu-khe	21.121014	105.961933	Xã	261	\N	\N
9382	Phường Đồng Kỵ	phuong-dong-ky	21.1399547	105.9494248	Phường	261	\N	\N
9383	Phường Trang Hạ	phuong-trang-ha	21.1289753	105.9521109	Phường	261	\N	\N
9385	Phường Đồng Nguyên	phuong-dong-nguyen	21.1319011	105.9729255	Phường	261	\N	\N
9388	Phường Châu Khê	phuong-chau-khe	21.1137246	105.929114	Phường	261	\N	\N
9391	Phường Tân Hồng	phuong-tan-hong	21.1087302	105.9729255	Phường	261	\N	\N
9394	Phường Đình Bảng	phuong-dinh-bang	21.0994022	105.9494248	Phường	261	\N	\N
9397	Xã Phù Chẩn	xa-phu-chan	21.0855597	105.9729255	Xã	261	\N	\N
9400	Thị trấn Hồ	thi-tran-ho	21.0568543	106.0904721	Thị trấn	262	\N	\N
9403	Xã Hoài Thượng	xa-hoai-thuong	21.0739163	106.1130271	Xã	262	\N	\N
9406	Xã Đại Đồng Thành	xa-dai-dong-thanh	21.0740844	106.0554453	Xã	262	\N	\N
9409	Xã Mão Điền	xa-mao-dien	21.0630071	106.1224607	Xã	262	\N	\N
9412	Xã Song Hồ	xa-song-ho	21.062574	106.082903	Xã	262	\N	\N
9415	Xã Đình Tổ	xa-dinh-to	21.0625294	106.0316898	Xã	262	\N	\N
9418	Xã An Bình	xa-an-binh	21.0473871	106.118937	Xã	262	\N	\N
9421	Xã Trí Quả	xa-tri-qua	21.045553	106.0322067	Xã	262	\N	\N
9424	Xã Gia Đông	xa-gia-dong	21.0385768	106.0698963	Xã	262	\N	\N
9427	Xã Thanh Khương	xa-thanh-khuong	21.0355038	106.0426753	Xã	262	\N	\N
9430	Xã Trạm Lộ	xa-tram-lo	21.0314204	106.11399	Xã	262	\N	\N
9433	Xã Xuân Lâm	xa-xuan-lam	21.0243424	106.0194764	Xã	262	\N	\N
9436	Xã Hà Mãn	xa-ha-man	21.0316147	106.0368193	Xã	262	\N	\N
9439	Xã Ngũ Thái	xa-ngu-thai	21.0105638	106.0330868	Xã	262	\N	\N
9442	Xã Nguyệt Đức	xa-nguyet-duc	21.0102411	106.0662878	Xã	262	\N	\N
9445	Xã Ninh Xá	xa-ninh-xa	21.0157573	106.0963513	Xã	262	\N	\N
9448	Xã Nghĩa Đạo	xa-nghia-dao	21.0097356	106.1286901	Xã	262	\N	\N
9451	Xã Song Liễu	xa-song-lieu	21.0029318	106.0164356	Xã	262	\N	\N
9454	Thị trấn Gia Bình	thi-tran-gia-binh	21.0540878	106.1786787	Thị trấn	263	\N	\N
9457	Xã Vạn Ninh	xa-van-ninh	21.1069941	106.264427	Xã	263	\N	\N
9460	Xã Thái Bảo	xa-thai-bao	21.1094704	106.238396	Xã	263	\N	\N
9463	Xã Giang Sơn	xa-giang-son	21.0764073	106.2169139	Xã	263	\N	\N
9466	Xã Cao Đức	xa-cao-duc	21.0874361	106.2816361	Xã	263	\N	\N
9469	Xã Đại Lai	xa-dai-lai	21.0895137	106.2112394	Xã	263	\N	\N
9472	Xã Song Giang	xa-song-giang	21.0866636	106.1800504	Xã	263	\N	\N
9475	Xã Bình Dương	xa-binh-duong	21.0781693	106.2580983	Xã	263	\N	\N
9478	Xã Lãng Ngâm	xa-lang-ngam	21.0610561	106.1707293	Xã	263	\N	\N
9481	Xã Nhân Thắng	xa-nhan-thang	21.0688969	106.2345633	Xã	263	\N	\N
9484	Xã Xuân Lai	xa-xuan-lai	21.0562091	106.1909027	Xã	263	\N	\N
9487	Xã Đông Cứu	xa-dong-cuu	21.0540878	106.1786787	Xã	263	\N	\N
9490	Xã Đại Bái	xa-dai-bai	21.0402318	106.1500072	Xã	263	\N	\N
9493	Xã Quỳnh Phú	xa-quynh-phu	21.0309357	106.1786787	Xã	263	\N	\N
9496	Thị trấn Thứa	thi-tran-thua	21.0222876	106.2080897	Thị trấn	264	\N	\N
9499	Xã An Thịnh	xa-an-thinh	21.0618795	106.2796301	Xã	264	\N	\N
9502	Xã Trung Kênh	xa-trung-kenh	21.0417946	106.2881384	Xã	264	\N	\N
9505	Xã Phú Hòa	xa-phu-hoa	21.0396792	106.2373363	Xã	264	\N	\N
9508	Xã Mỹ Hương	xa-my-huong	21.0344838	106.2610404	Xã	264	\N	\N
9511	Xã Tân Lãng	xa-tan-lang	21.029792	106.1904426	Xã	264	\N	\N
9514	Xã Quảng Phú	xa-quang-phu	21.0178933	106.1639749	Xã	264	\N	\N
9517	Xã Trừng Xá	xa-trung-xa	21.0278149	106.2404468	Xã	264	\N	\N
9520	Xã Lai Hạ	xa-lai-ha	21.022551	106.2739412	Xã	264	\N	\N
9523	Xã Trung Chính	xa-trung-chinh	21.029232	106.234875	Xã	264	\N	\N
9526	Xã Minh Tân	xa-minh-tan	21.0030294	106.266953	Xã	264	\N	\N
9529	Xã Bình Định	xa-binh-dinh	21.0290713	106.2360763	Xã	264	\N	\N
9532	Xã Phú Lương	xa-phu-luong	21.0000681	106.207932	Xã	264	\N	\N
9535	Xã Lâm Thao	xa-lam-thao	20.9819802	106.1825589	Xã	264	\N	\N
9538	Phường Nguyễn Trãi	phuong-nguyen-trai	20.9699557	105.7798664	Phường	268	\N	\N
9541	Phường Mộ Lao	phuong-mo-lao	20.9833749	105.7835348	Phường	268	\N	\N
9542	Phường Văn Quán	phuong-van-quan	20.9796446	105.7923394	Phường	268	\N	\N
9544	Phường Vạn Phúc	phuong-van-phuc	20.9786876	105.771796	Phường	268	\N	\N
9547	Phường Yết Kiêu	phuong-yet-kieu	20.97458	105.7769317	Phường	268	\N	\N
9550	Phường Quang Trung	phuong-quang-trung	20.9652675	105.7681278	Phường	268	\N	\N
9551	Phường La Khê	phuong-la-khe	20.9724114	105.7615252	Phường	268	\N	\N
9552	Phường Phú La	phuong-phu-la	20.9560561	105.7659269	Phường	268	\N	\N
9553	Phường Phúc La	phuong-phuc-la	20.9654323	105.7894045	Phường	268	\N	\N
9556	Phường Hà Cầu	phuong-ha-cau	20.9636429	105.7776653	Phường	268	\N	\N
9562	Phường Yên Nghĩa	phuong-yen-nghia	20.9540586	105.7409852	Phường	268	\N	\N
9565	Phường Kiến Hưng	phuong-kien-hung	20.9528073	105.7850022	Phường	268	\N	\N
9568	Phường Phú Lãm	phuong-phu-lam	20.9426712	105.7541892	Phường	268	\N	\N
9571	Phường Phú Lương	phuong-phu-luong	20.93708	105.7673942	Phường	268	\N	\N
9574	Phường Lê Lợi	phuong-le-loi	21.1450319	105.5056761	Phường	269	\N	\N
9577	Phường Phú Thịnh	phuong-phu-thinh	21.1537625	105.4976181	Phường	269	\N	\N
9580	Phường Ngô Quyền	phuong-ngo-quyen	21.1425408	105.5012808	Phường	269	\N	\N
9583	Phường Quang Trung	phuong-quang-trung	21.1347408	105.5071413	Phường	269	\N	\N
9586	Phường Sơn Lộc	phuong-son-loc	21.1147313	105.4961531	Phường	269	\N	\N
9589	Phường Xuân Khanh	phuong-xuan-khanh	21.114733	105.4393571	Phường	269	\N	\N
9592	Xã Đường Lâm	xa-duong-lam	21.1533196	105.471249	Xã	269	\N	\N
9595	Phường Viên Sơn	phuong-vien-son	21.1493555	105.5100165	Phường	269	\N	\N
9598	Xã Xuân Sơn	xa-xuan-son	21.1333747	105.4360963	Xã	269	\N	\N
9601	Phường Trung Hưng	phuong-trung-hung	21.1313193	105.5049436	Phường	269	\N	\N
9604	Xã Thanh Mỹ	xa-thanh-my	21.1301068	105.471249	Xã	269	\N	\N
9607	Phường Trung Sơn Trầm	phuong-trung-son-tram	21.1073416	105.4976181	Phường	269	\N	\N
9610	Xã Kim Sơn	xa-kim-son	21.0847705	105.4595306	Xã	269	\N	\N
9613	Xã Sơn Đông	xa-son-dong	21.0709878	105.4829681	Xã	269	\N	\N
9616	Xã Cổ Đông	xa-co-dong	21.0455992	105.5064087	Xã	269	\N	\N
9619	Thị trấn Tây Đằng	thi-tran-tay-dang	21.2067429	105.4273093	Thị trấn	271	\N	\N
9622	Xã Tân Đức	xa-tan-duc	21.2998132	105.3628846	Xã	227	\N	\N
9625	Xã Phú Cường	xa-phu-cuong	21.2875615	105.4009508	Xã	271	\N	\N
9628	Xã Cổ Đô	xa-co-do	21.2813067	105.3745964	Xã	271	\N	\N
9631	Xã Tản Hồng	xa-tan-hong	21.2737673	105.4243804	Xã	271	\N	\N
9634	Xã Vạn Thắng	xa-van-thang	21.2476907	105.3961124	Xã	271	\N	\N
9637	Xã Châu Sơn	xa-chau-son	21.2636941	105.4390254	Xã	271	\N	\N
9640	Xã Phong Vân	xa-phong-van	21.25695	105.3644935	Xã	271	\N	\N
9643	Xã Phú Đông	xa-phu-dong	21.2529444	105.3735664	Xã	271	\N	\N
9646	Xã Phú Phương	xa-phu-phuong	21.2479196	105.4214515	Xã	271	\N	\N
9649	Xã Phú Châu	xa-phu-chau	21.2378481	105.4360963	Xã	271	\N	\N
9652	Xã Thái Hòa	xa-thai-hoa	21.229732	105.3717935	Xã	271	\N	\N
9655	Xã Đồng Thái	xa-dong-thai	21.2259936	105.3968327	Xã	271	\N	\N
9658	Xã Phú Sơn	xa-phu-son	21.2210548	105.3751855	Xã	271	\N	\N
9661	Xã Minh Châu	xa-minh-chau	21.2040143	105.4566012	Xã	271	\N	\N
9664	Xã Vật Lại	xa-vat-lai	21.2171301	105.3936297	Xã	271	\N	\N
9667	Xã Chu Minh	xa-chu-minh	21.1993025	105.4448838	Xã	271	\N	\N
9670	Xã Tòng Bạt	xa-tong-bat	21.1964493	105.3270223	Xã	271	\N	\N
9673	Xã Cẩm Lĩnh	xa-cam-linh	21.1846018	105.3626874	Xã	271	\N	\N
9676	Xã Sơn Đà	xa-son-da	21.1815106	105.3030109	Xã	271	\N	\N
9679	Xã Đông Quang	xa-dong-quang	21.1813452	105.4507424	Xã	271	\N	\N
9682	Xã Tiên Phong	xa-tien-phong	21.1719173	105.4273093	Xã	271	\N	\N
9685	Xã Thụy An	xa-thuy-an	21.1555579	105.419354	Xã	271	\N	\N
9688	Xã Cam Thượng	xa-cam-thuong	21.1671989	105.4614531	Xã	271	\N	\N
9691	Xã Thuần Mỹ	xa-thuan-my	21.1527992	105.301984	Xã	271	\N	\N
9694	Xã Tản Lĩnh	xa-tan-linh	21.124523	105.3907014	Xã	271	\N	\N
9697	Xã Ba Trại	xa-ba-trai	21.1256787	105.3467822	Xã	271	\N	\N
9700	Xã Minh Quang	xa-minh-quang	21.0745356	105.3189726	Xã	271	\N	\N
9703	Xã Ba Vì	xa-ba-vi	21.0713032	105.3541013	Xã	271	\N	\N
9706	Xã Vân Hòa	xa-van-hoa	21.0669809	105.4009508	Xã	271	\N	\N
9709	Xã Yên Bài	xa-yen-bai	21.0341701	105.4419546	Xã	271	\N	\N
9712	Xã Khánh Thượng	xa-khanh-thuong	21.0259381	105.3423909	Xã	271	\N	\N
9715	Thị trấn Phúc Thọ	thi-tran-phuc-tho	21.1029672	105.5445064	Thị trấn	272	\N	\N
9718	Xã Vân Hà	xa-van-ha	21.1596292	105.6207263	Xã	272	\N	\N
9721	Xã Vân Phúc	xa-van-phuc	21.151335	105.5855438	Xã	272	\N	\N
9724	Xã Vân Nam	xa-van-nam	21.1491318	105.6089981	Xã	272	\N	\N
9727	Xã Xuân Phú	xa-xuan-phu	21.1397333	105.5855438	Xã	272	\N	\N
9730	Xã Phương Độ	xa-phuong-do	21.1499289	105.5386447	Xã	272	\N	\N
9733	Xã Sen Chiểu	xa-sen-chieu	21.1394212	105.5269218	Xã	272	\N	\N
9736	Xã Cẩm Đình	xa-cam-dinh	21.1482825	105.5562304	Xã	272	\N	\N
9739	Xã Võng Xuyên	xa-vong-xuyen	21.1329554	105.5650239	Xã	272	\N	\N
9742	Xã Thọ Lộc	xa-tho-loc	21.1214676	105.5327831	Xã	272	\N	\N
9745	Xã Long Xuyên	xa-long-xuyen	21.1170795	105.5796808	Xã	272	\N	\N
9748	Xã Thượng Cốc	xa-thuong-coc	21.1270314	105.5972706	Xã	272	\N	\N
9751	Xã Hát Môn	xa-hat-mon	21.1253794	105.6148621	Xã	272	\N	\N
9754	Xã Tích Giang	xa-tich-giang	21.111505	105.5151997	Xã	272	\N	\N
9757	Xã Thanh Đa	xa-thanh-da	21.1132282	105.6207263	Xã	272	\N	\N
9760	Xã Trạch Mỹ Lộc	xa-trach-my-loc	21.0988074	105.5269218	Xã	272	\N	\N
9763	Xã Phúc Hòa	xa-phuc-hoa	21.1071243	105.5620927	Xã	272	\N	\N
9766	Xã Ngọc Tảo	xa-ngoc-tao	21.0974791	105.6031342	Xã	272	\N	\N
9769	Xã Phụng Thượng	xa-phung-thuong	21.0933272	105.5855438	Xã	272	\N	\N
9772	Xã Tam Thuấn	xa-tam-thuan	21.0952776	105.6265908	Xã	272	\N	\N
9775	Xã Tam Hiệp	xa-tam-hiep	21.0789787	105.6148621	Xã	272	\N	\N
9778	Xã Hiệp Thuận	xa-hiep-thuan	21.0709773	105.6383202	Xã	272	\N	\N
9781	Xã Liên Hiệp	xa-lien-hiep	21.053579	105.6383202	Xã	272	\N	\N
9784	Thị trấn Phùng	thi-tran-phung	21.0877573	105.6603149	Thị trấn	273	\N	\N
9787	Xã Trung Châu	xa-trung-chau	21.1495488	105.6353878	Xã	273	\N	\N
9790	Xã Thọ An	xa-tho-an	21.1342209	105.6441852	Xã	273	\N	\N
9793	Xã Thọ Xuân	xa-tho-xuan	21.1220695	105.6500504	Xã	273	\N	\N
9796	Xã Hồng Hà	xa-hong-ha	21.1335253	105.6823124	Xã	273	\N	\N
9799	Xã Liên Hồng	xa-lien-hong	21.1223332	105.7087128	Xã	273	\N	\N
9802	Xã Liên Hà	xa-lien-ha	21.1109055	105.7090807	Xã	273	\N	\N
9805	Xã Hạ Mỗ	xa-ha-mo	21.1129527	105.6852455	Xã	273	\N	\N
9808	Xã Liên Trung	xa-lien-trung	21.1085171	105.7321831	Xã	273	\N	\N
9811	Xã Phương Đình	xa-phuong-dinh	21.1052231	105.6441852	Xã	273	\N	\N
9814	Xã Thượng Mỗ	xa-thuong-mo	21.1066725	105.6749796	Xã	273	\N	\N
9817	Xã Tân Hội	xa-tan-hoi	21.0938962	105.7028457	Xã	273	\N	\N
9820	Xã Tân Lập	xa-tan-lap	21.0811921	105.7145801	Xã	273	\N	\N
9823	Xã Đan Phượng	xa-dan-phuong	21.0959037	105.6661806	Xã	273	\N	\N
9826	Xã Đồng Tháp	xa-dong-thap	21.0814739	105.6500504	Xã	273	\N	\N
9829	Xã Song Phượng	xa-song-phuong	21.0798184	105.6676471	Xã	273	\N	\N
9832	Thị trấn Trạm Trôi	thi-tran-tram-troi	21.068562	105.7101796	Thị trấn	274	\N	\N
9835	Xã Đức Thượng	xa-duc-thuong	21.0776081	105.6911121	Xã	274	\N	\N
9838	Xã Minh Khai	xa-minh-khai	21.066357	105.6720466	Xã	274	\N	\N
9841	Xã Dương Liễu	xa-duong-lieu	21.0579347	105.6691136	Xã	274	\N	\N
9844	Xã Di Trạch	xa-di-trach	21.0458514	105.7204476	Xã	274	\N	\N
9847	Xã Đức Giang	xa-duc-giang	21.0585539	105.7087128	Xã	274	\N	\N
9850	Xã Cát Quế	xa-cat-que	21.0502725	105.6735131	Xã	274	\N	\N
9853	Xã Kim Chung	xa-kim-chung	21.046958	105.7087128	Xã	274	\N	\N
9856	Xã Yên Sở	xa-yen-so	21.0392266	105.6676471	Xã	274	\N	\N
9859	Xã Sơn Đồng	xa-son-dong	21.0422656	105.6969788	Xã	274	\N	\N
9862	Xã Vân Canh	xa-van-canh	21.033149	105.7321831	Xã	274	\N	\N
9865	Xã Đắc Sở	xa-dac-so	21.0281142	105.6779127	Xã	274	\N	\N
9868	Xã Lại Yên	xa-lai-yen	21.0237665	105.7087128	Xã	274	\N	\N
9871	Xã Tiền Yên	xa-tien-yen	21.0259751	105.6852455	Xã	274	\N	\N
9874	Xã Song Phương	xa-song-phuong	21.0138269	105.6911121	Xã	274	\N	\N
9877	Xã An Khánh	xa-an-khanh	20.9994708	105.7204476	Xã	274	\N	\N
9880	Xã An Thượng	xa-an-thuong	20.9895318	105.7028457	Xã	274	\N	\N
9883	Xã Vân Côn	xa-van-con	20.9917365	105.6793792	Xã	274	\N	\N
9886	Phường Dương Nội	phuong-duong-noi	20.979868	105.7439194	Phường	268	\N	\N
9889	Xã La Phù	xa-la-phu	20.979915	105.7325582	Xã	274	\N	\N
9892	Xã Đông La	xa-dong-la	20.9704838	105.7204476	Xã	274	\N	\N
9895	Thị trấn Quốc Oai	thi-tran-quoc-oai	20.9950369	105.6441852	Thị trấn	275	\N	\N
9898	Xã Sài Sơn	xa-sai-son	21.032456	105.6471178	Xã	275	\N	\N
9901	Xã Phượng Cách	xa-phuong-cach	21.0123711	105.6603149	Xã	275	\N	\N
9904	Xã Yên Sơn	xa-yen-son	21.0010487	105.6573821	Xã	275	\N	\N
9907	Xã Ngọc Liệp	xa-ngoc-liep	20.9961897	105.5959406	Xã	275	\N	\N
9910	Xã Ngọc Mỹ	xa-ngoc-my	20.9986532	105.6469358	Xã	275	\N	\N
9913	Xã Liệp Tuyết	xa-liep-tuyet	20.9810755	105.6002926	Xã	275	\N	\N
9916	Xã Thạch Thán	xa-thach-than	20.9889399	105.6357543	Xã	275	\N	\N
9919	Xã Đồng Quang	xa-dong-quang	20.974466	105.6471178	Xã	275	\N	\N
9922	Xã Phú Cát	xa-phu-cat	20.9716211	105.5532993	Xã	275	\N	\N
9925	Xã Tuyết Nghĩa	xa-tuyet-nghia	20.9927839	105.6405971	Xã	275	\N	\N
9928	Xã Nghĩa Hương	xa-nghia-huong	20.9745828	105.6148621	Xã	275	\N	\N
9931	Xã Cộng Hòa	xa-cong-hoa	20.9638452	105.6676471	Xã	275	\N	\N
9934	Xã Tân Phú	xa-tan-phu	20.9726897	105.6969788	Xã	275	\N	\N
9937	Xã Đại Thành	xa-dai-thanh	20.9657896	105.7087128	Xã	275	\N	\N
9940	Xã Phú Mãn	xa-phu-man	20.9427091	105.5210607	Xã	275	\N	\N
9943	Xã Cấn Hữu	xa-can-huu	20.9545582	105.6119301	Xã	275	\N	\N
9946	Xã Tân Hòa	xa-tan-hoa	20.9627455	105.6793792	Xã	275	\N	\N
9949	Xã Hòa Thạch	xa-hoa-thach	20.9473282	105.5650239	Xã	275	\N	\N
9952	Xã Đông Yên	xa-dong-yen	20.9335457	105.5884754	Xã	275	\N	\N
9955	Thị trấn Liên Quan	thi-tran-lien-quan	21.0548585	105.578215	Thị trấn	276	\N	\N
9958	Xã Đại Đồng	xa-dai-dong	21.0897208	105.5620927	Xã	276	\N	\N
9961	Xã Cẩm Yên	xa-cam-yen	21.0861099	105.5386447	Xã	276	\N	\N
9964	Xã Lại Thượng	xa-lai-thuong	21.0774957	105.549062	Xã	276	\N	\N
9967	Xã Phú Kim	xa-phu-kim	21.0624552	105.5775028	Xã	276	\N	\N
9970	Xã Hương Ngải	xa-huong-ngai	21.0574264	105.5972706	Xã	276	\N	\N
9973	Xã Canh Nậu	xa-canh-nau	21.0563282	105.6089981	Xã	276	\N	\N
9976	Xã Kim Quan	xa-kim-quan	21.0501429	105.567595	Xã	276	\N	\N
9979	Xã Dị Nậu	xa-di-nau	21.0488797	105.6265908	Xã	276	\N	\N
9982	Xã Bình Yên	xa-binh-yen	21.0423255	105.5415755	Xã	276	\N	\N
9985	Xã Chàng Sơn	xa-chang-son	21.0333851	105.5925999	Xã	276	\N	\N
9988	Xã Thạch Hoà	xa-thach-hoa	20.9829917	105.5311811	Xã	276	\N	\N
9991	Xã Cần Kiệm	xa-can-kiem	21.0166652	105.5794624	Xã	276	\N	\N
9994	Xã Hữu Bằng	xa-huu-bang	21.0272159	105.6147432	Xã	276	\N	\N
9997	Xã Phùng Xá	xa-phung-xa	21.0146314	105.6207263	Xã	276	\N	\N
10000	Xã Tân Xã	xa-tan-xa	21.0277701	105.557696	Xã	276	\N	\N
10003	Xã Thạch Xá	xa-thach-xa	21.028586	105.5956758	Xã	276	\N	\N
10006	Xã Bình Phú	xa-binh-phu	21.0273237	105.6065328	Xã	276	\N	\N
10009	Xã Hạ Bằng	xa-ha-bang	21.0016661	105.557696	Xã	276	\N	\N
10012	Xã Đồng Trúc	xa-dong-truc	20.9938865	105.5694474	Xã	276	\N	\N
10015	Thị trấn Chúc Sơn	thi-tran-chuc-son	20.9246569	105.7145801	Thị trấn	277	\N	\N
10018	Thị trấn Xuân Mai	thi-tran-xuan-mai	20.896292	105.5787167	Thị trấn	277	\N	\N
10021	Xã Phụng Châu	xa-phung-chau	20.948948	105.7028457	Xã	277	\N	\N
10024	Xã Tiên Phương	xa-tien-phuong	20.9363793	105.6823124	Xã	277	\N	\N
10027	Xã Đông Sơn	xa-dong-son	20.9218414	105.6207263	Xã	277	\N	\N
10030	Xã Đông Phương Yên	xa-dong-phuong-yen	20.9317973	105.6383202	Xã	277	\N	\N
10033	Xã Phú Nghĩa	xa-phu-nghia	20.9359513	105.6559158	Xã	277	\N	\N
10039	Xã Trường Yên	xa-truong-yen	20.9127576	105.6559158	Xã	277	\N	\N
10042	Xã Ngọc Hòa	xa-ngoc-hoa	20.915812	105.6852455	Xã	277	\N	\N
10045	Xã Thủy Xuân Tiên	xa-thuy-xuan-tien	20.8845203	105.5855438	Xã	277	\N	\N
10048	Xã Thanh Bình	xa-thanh-binh	20.9044441	105.6207263	Xã	277	\N	\N
10051	Xã Trung Hòa	xa-trung-hoa	20.8959102	105.6500504	Xã	277	\N	\N
10054	Xã Đại Yên	xa-dai-yen	20.8978697	105.6911121	Xã	277	\N	\N
10057	Xã Thụy Hương	xa-thuy-huong	20.9072654	105.7145801	Xã	277	\N	\N
10060	Xã Tốt Động	xa-tot-dong	20.8821226	105.6735131	Xã	277	\N	\N
10063	Xã Lam Điền	xa-lam-dien	20.8867006	105.7175138	Xã	277	\N	\N
10066	Xã Tân Tiến	xa-tan-tien	20.8744588	105.6002024	Xã	277	\N	\N
10069	Xã Nam Phương Tiến	xa-nam-phuong-tien	20.8287677	105.5848109	Xã	277	\N	\N
10072	Xã Hợp Đồng	xa-hop-dong	20.8799282	105.6969788	Xã	277	\N	\N
10075	Xã Hoàng Văn Thụ	xa-hoang-van-thu	20.8595873	105.6353878	Xã	277	\N	\N
10078	Xã Hoàng Diệu	xa-hoang-dieu	20.8592403	105.7321831	Xã	277	\N	\N
10081	Xã Hữu Văn	xa-huu-van	20.8658243	105.6617813	Xã	277	\N	\N
10084	Xã Quảng Bị	xa-quang-bi	20.856739	105.6969788	Xã	277	\N	\N
10087	Xã Mỹ Lương	xa-my-luong	20.8536811	105.6676471	Xã	277	\N	\N
10090	Xã Thượng Vực	xa-thuong-vuc	20.8487464	105.7204476	Xã	277	\N	\N
10093	Xã Hồng Phong	xa-hong-phong	20.8393475	105.6969788	Xã	277	\N	\N
10096	Xã Đồng Phú	xa-dong-phu	20.8319052	105.7145801	Xã	277	\N	\N
10099	Xã Trần Phú	xa-tran-phu	20.8331155	105.6705801	Xã	277	\N	\N
10102	Xã Văn Võ	xa-van-vo	20.8297086	105.7380511	Xã	277	\N	\N
10105	Xã Đồng Lạc	xa-dong-lac	20.8178012	105.6793792	Xã	277	\N	\N
10108	Xã Hòa Chính	xa-hoa-chinh	20.8139667	105.7204476	Xã	277	\N	\N
10111	Xã Phú Nam An	xa-phu-nam-an	20.8175668	105.7439194	Xã	277	\N	\N
10114	Thị trấn Kim Bài	thi-tran-kim-bai	20.8559363	105.7673942	Thị trấn	278	\N	\N
10117	Phường Đồng Mai	phuong-dong-mai	20.9308715	105.7409852	Phường	268	\N	\N
10120	Xã Cự Khê	xa-cu-khe	20.9238282	105.7850022	Xã	278	\N	\N
10123	Phường Biên Giang	phuong-bien-giang	20.9283162	105.7219145	Phường	268	\N	\N
10126	Xã Bích Hòa	xa-bich-hoa	20.9170698	105.7644596	Xã	278	\N	\N
10129	Xã Mỹ Hưng	xa-my-hung	20.9021599	105.7996769	Xã	278	\N	\N
10132	Xã Cao Viên	xa-cao-vien	20.9045109	105.7439194	Xã	278	\N	\N
10135	Xã Bình Minh	xa-binh-minh	20.8959551	105.7732633	Xã	278	\N	\N
10138	Xã Tam Hưng	xa-tam-hung	20.8800846	105.7879371	Xã	278	\N	\N
10141	Xã Thanh Cao	xa-thanh-cao	20.8865704	105.7497878	Xã	278	\N	\N
10144	Xã Thanh Thùy	xa-thanh-thuy	20.8752513	105.8084823	Xã	278	\N	\N
10147	Xã Thanh Mai	xa-thanh-mai	20.8691816	105.7497878	Xã	278	\N	\N
10150	Xã Thanh Văn	xa-thanh-van	20.8520715	105.8084823	Xã	278	\N	\N
10153	Xã Đỗ Động	xa-do-dong	20.8453123	105.7879371	Xã	278	\N	\N
10156	Xã Kim An	xa-kim-an	20.8407512	105.7439194	Xã	278	\N	\N
10159	Xã Kim Thư	xa-kim-thu	20.8385491	105.7673942	Xã	278	\N	\N
10162	Xã Phương Trung	xa-phuong-trung	20.8269579	105.7673942	Xã	278	\N	\N
10165	Xã Tân Ước	xa-tan-uoc	20.8315134	105.8114175	Xã	278	\N	\N
10168	Xã Dân Hòa	xa-dan-hoa	20.8131631	105.790872	Xã	278	\N	\N
10171	Xã Liên Châu	xa-lien-chau	20.8104037	105.8202234	Xã	278	\N	\N
10174	Xã Cao Dương	xa-cao-duong	20.8101214	105.7615252	Xã	278	\N	\N
10177	Xã Xuân Dương	xa-xuan-duong	20.7996295	105.7497878	Xã	278	\N	\N
10180	Xã Hồng Dương	xa-hong-duong	20.7989511	105.7879371	Xã	278	\N	\N
10183	Thị trấn Thường Tín	thi-tran-thuong-tin	20.8715715	105.8627913	Thị trấn	279	\N	\N
10186	Xã Ninh Sở	xa-ninh-so	20.8970059	105.884813	Xã	279	\N	\N
10189	Xã Nhị Khê	xa-nhi-khe	20.8951043	105.843708	Xã	279	\N	\N
10192	Xã Duyên Thái	xa-duyen-thai	20.8986756	105.8671954	Xã	279	\N	\N
10195	Xã Khánh Hà	xa-khanh-ha	20.8909742	105.8260943	Xã	279	\N	\N
10198	Xã Hòa Bình	xa-hoa-binh	20.878276	105.8378366	Xã	279	\N	\N
10201	Xã Văn Bình	xa-van-binh	20.8850245	105.8583873	Xã	279	\N	\N
10204	Xã Hiền Giang	xa-hien-giang	20.8741441	105.8202234	Xã	279	\N	\N
10207	Xã Hồng Vân	xa-hong-van	20.8773976	105.9083056	Xã	279	\N	\N
10210	Xã Vân Tảo	xa-van-tao	20.8727188	105.896559	Xã	279	\N	\N
10213	Xã Liên Phương	xa-lien-phuong	20.8585549	105.8855471	Xã	279	\N	\N
10216	Xã Văn Phú	xa-van-phu	20.8713722	105.8495796	Xã	279	\N	\N
10219	Xã Tự Nhiên	xa-tu-nhien	20.8583468	105.9259271	Xã	279	\N	\N
10222	Xã Tiền Phong	xa-tien-phong	20.8556526	105.8319653	Xã	279	\N	\N
10225	Xã Hà Hồi	xa-ha-hoi	20.8628013	105.8789403	Xã	279	\N	\N
10228	Xã Thư Phú	xa-thu-phu	20.8600189	105.9083056	Xã	279	\N	\N
10231	Xã Nguyễn Trãi	xa-nguyen-trai	20.8476414	105.8554513	Xã	279	\N	\N
10234	Xã Quất Động	xa-quat-dong	20.8401829	105.8730678	Xã	279	\N	\N
10237	Xã Chương Dương	xa-chuong-duong	20.8484333	105.9083056	Xã	279	\N	\N
10240	Xã Tân Minh	xa-tan-minh	20.8377159	105.8378366	Xã	279	\N	\N
10243	Xã Lê Lợi	xa-le-loi	20.8316114	105.9024322	Xã	279	\N	\N
10246	Xã Thắng Lợi	xa-thang-loi	20.8248668	105.8818766	Xã	279	\N	\N
10249	Xã Dũng Tiến	xa-dung-tien	20.8186724	105.8554513	Xã	279	\N	\N
10252	Xã Thống Nhất	xa-thong-nhat	20.8020921	105.9083056	Xã	279	\N	\N
10255	Xã Nghiêm Xuyên	xa-nghiem-xuyen	20.807085	105.8554513	Xã	279	\N	\N
10258	Xã Tô Hiệu	xa-to-hieu	20.8037584	105.8906859	Xã	279	\N	\N
10261	Xã Văn Tự	xa-van-tu	20.7869345	105.884813	Xã	279	\N	\N
10264	Xã Vạn Điểm	xa-van-diem	20.7847147	105.9083056	Xã	279	\N	\N
10267	Xã Minh Cường	xa-minh-cuong	20.7621001	105.9024322	Xã	279	\N	\N
10270	Thị trấn Phú Minh	thi-tran-phu-minh	20.7825722	105.9156477	Thị trấn	280	\N	\N
10273	Thị trấn Phú Xuyên	thi-tran-phu-xuyen	20.7383765	105.9083056	Thị trấn	280	\N	\N
10276	Xã Hồng Minh	xa-hong-minh	20.7924684	105.8260943	Xã	280	\N	\N
10279	Xã Phượng Dực	xa-phuong-duc	20.7962276	105.8451937	Xã	280	\N	\N
10282	Xã Văn Nhân	xa-van-nhan	20.7714636	105.9259271	Xã	280	\N	\N
10285	Xã Thụy Phú	xa-thuy-phu	20.7761432	105.9376756	Xã	280	\N	\N
10288	Xã Tri Trung	xa-tri-trung	20.775086	105.8260943	Xã	280	\N	\N
10291	Xã Đại Thắng	xa-dai-thang	20.7706637	105.8730678	Xã	280	\N	\N
10294	Xã Phú Túc	xa-phu-tuc	20.7619792	105.8114175	Xã	280	\N	\N
10297	Xã Văn Hoàng	xa-van-hoang	20.7723237	105.8554513	Xã	280	\N	\N
10300	Xã Hồng Thái	xa-hong-thai	20.7602732	105.9523622	Xã	280	\N	\N
10303	Xã Hoàng Long	xa-hoang-long	20.7481857	105.8349009	Xã	280	\N	\N
10306	Xã Quang Trung	xa-quang-trung	20.7637631	105.884813	Xã	280	\N	\N
10309	Xã Nam Phong	xa-nam-phong	20.7540878	105.9259271	Xã	280	\N	\N
10312	Xã Nam Triều	xa-nam-trieu	20.7471849	105.9376756	Xã	280	\N	\N
10315	Xã Tân Dân	xa-tan-dan	20.7474917	105.8730678	Xã	280	\N	\N
10318	Xã Sơn Hà	xa-son-ha	20.7510696	105.896559	Xã	280	\N	\N
10321	Xã Chuyên Mỹ	xa-chuyen-my	20.7215981	105.8704805	Xã	280	\N	\N
10324	Xã Khai Thái	xa-khai-thai	20.7223523	105.9552997	Xã	280	\N	\N
10327	Xã Phúc Tiến	xa-phuc-tien	20.7251289	105.9259271	Xã	280	\N	\N
10330	Xã Vân Từ	xa-van-tu	20.7168688	105.8906859	Xã	280	\N	\N
10333	Xã Tri Thủy	xa-tri-thuy	20.7113258	105.9494248	Xã	280	\N	\N
10336	Xã Đại Xuyên	xa-dai-xuyen	20.7003229	105.9157274	Xã	280	\N	\N
10339	Xã Phú Yên	xa-phu-yen	20.6989389	105.896559	Xã	280	\N	\N
10342	Xã Bạch Hạ	xa-bach-ha	20.6881616	105.9494248	Xã	280	\N	\N
10345	Xã Quang Lãng	xa-quang-lang	20.6920126	105.9836698	Xã	280	\N	\N
10348	Xã Châu Can	xa-chau-can	20.6836293	105.9053689	Xã	280	\N	\N
10351	Xã Minh Tân	xa-minh-tan	20.6696794	105.9611748	Xã	280	\N	\N
10354	Thị trấn Vân Đình	thi-tran-van-dinh	20.7337728	105.7704551	Thị trấn	281	\N	\N
10357	Xã Viên An	xa-vien-an	20.8018254	105.7263152	Xã	281	\N	\N
10360	Xã Viên Nội	xa-vien-noi	20.7902328	105.7263152	Xã	281	\N	\N
10363	Xã Hoa Sơn	xa-hoa-son	20.7764465	105.7497878	Xã	281	\N	\N
10366	Xã Quảng Phú Cầu	xa-quang-phu-cau	20.7748261	105.7704148	Xã	281	\N	\N
10369	Xã Trường Thịnh	xa-truong-thinh	20.758511	105.7556564	Xã	281	\N	\N
10372	Xã Cao Thành	xa-cao-thanh	20.7665002	105.7321831	Xã	281	\N	\N
10375	Xã Liên Bạt	xa-lien-bat	20.7536915	105.776198	Xã	281	\N	\N
10378	Xã Sơn Công	xa-son-cong	20.7475827	105.7175138	Xã	281	\N	\N
10381	Xã Đồng Tiến	xa-dong-tien	20.7453929	105.7409852	Xã	281	\N	\N
10384	Xã Phương Tú	xa-phuong-tu	20.7399029	105.7996769	Xã	281	\N	\N
10387	Xã Trung Tú	xa-trung-tu	20.7281835	105.8319653	Xã	281	\N	\N
10390	Xã Đồng Tân	xa-dong-tan	20.7097007	105.843708	Xã	281	\N	\N
10393	Xã Tảo Dương Văn	xa-tao-duong-van	20.708858	105.790872	Xã	281	\N	\N
10396	Xã Vạn Thái	xa-van-thai	20.6989147	105.7732633	Xã	281	\N	\N
10399	Xã Minh Đức	xa-minh-duc	20.7017014	105.8671954	Xã	281	\N	\N
10402	Xã Hòa Lâm	xa-hoa-lam	20.6827048	105.8201839	Xã	281	\N	\N
10405	Xã Hòa Xá	xa-hoa-xa	20.696075	105.7571236	Xã	281	\N	\N
10408	Xã Trầm Lộng	xa-tram-long	20.6902502	105.8349009	Xã	281	\N	\N
10411	Xã Kim Đường	xa-kim-duong	20.6753586	105.8701316	Xã	281	\N	\N
10414	Xã Hòa Nam	xa-hoa-nam	20.6826258	105.7615252	Xã	281	\N	\N
10417	Xã Hòa Phú	xa-hoa-phu	20.6746404	105.7850022	Xã	281	\N	\N
10420	Xã Đội Bình	xa-doi-binh	20.6603098	105.8143528	Xã	281	\N	\N
10423	Xã Đại Hùng	xa-dai-hung	20.6696986	105.8378366	Xã	281	\N	\N
10426	Xã Đông Lỗ	xa-dong-lo	20.6594987	105.884813	Xã	281	\N	\N
10429	Xã Phù Lưu	xa-phu-luu	20.6625038	105.790872	Xã	281	\N	\N
10432	Xã Đại Cường	xa-dai-cuong	20.6564618	105.8554513	Xã	281	\N	\N
10435	Xã Lưu Hoàng	xa-luu-hoang	20.6492712	105.8084823	Xã	281	\N	\N
10438	Xã Hồng Quang	xa-hong-quang	20.6213986	105.7967419	Xã	281	\N	\N
10441	Thị trấn Đại Nghĩa	thi-tran-dai-nghia	20.685899	105.7421069	Thị trấn	282	\N	\N
10444	Xã Đồng Tâm	xa-dong-tam	20.8008616	105.6764671	Xã	282	\N	\N
10447	Xã Thượng Lâm	xa-thuong-lam	20.789361	105.6735131	Xã	282	\N	\N
10450	Xã Tuy Lai	xa-tuy-lai	20.7635461	105.6705801	Xã	282	\N	\N
10453	Xã Phúc Lâm	xa-phuc-lam	20.8156114	105.7028457	Xã	282	\N	\N
10456	Xã Mỹ Thành	xa-my-thanh	20.775581	105.6969788	Xã	282	\N	\N
10459	Xã Bột Xuyên	xa-bot-xuyen	20.7739396	105.7145801	Xã	282	\N	\N
10462	Xã An Mỹ	xa-an-my	20.7529404	105.6911121	Xã	282	\N	\N
10465	Xã Hồng Sơn	xa-hong-son	20.7213561	105.6881332	Xã	282	\N	\N
10468	Xã Lê Thanh	xa-le-thanh	20.7270229	105.7204476	Xã	282	\N	\N
10471	Xã Xuy Xá	xa-xuy-xa	20.7137907	105.7380511	Xã	282	\N	\N
10474	Xã Phùng Xá	xa-phung-xa	20.7222567	105.762346	Xã	282	\N	\N
10477	Xã Phù Lưu Tế	xa-phu-luu-te	20.6964043	105.7380511	Xã	282	\N	\N
10480	Xã Đại Hưng	xa-dai-hung	20.6681271	105.7687423	Xã	282	\N	\N
10483	Xã Vạn Kim	xa-van-kim	20.6462166	105.7791327	Xã	282	\N	\N
10486	Xã Đốc Tín	xa-doc-tin	20.6346282	105.7791327	Xã	282	\N	\N
10489	Xã Hương Sơn	xa-huong-son	20.6041258	105.7644596	Xã	282	\N	\N
10492	Xã Hùng Tiến	xa-hung-tien	20.6368144	105.7556564	Xã	282	\N	\N
10495	Xã An Tiến	xa-an-tien	20.6553527	105.7322931	Xã	282	\N	\N
10498	Xã Hợp Tiến	xa-hop-tien	20.6865927	105.6992269	Xã	282	\N	\N
10501	Xã Hợp Thanh	xa-hop-thanh	20.6690058	105.702982	Xã	282	\N	\N
10504	Xã An Phú	xa-an-phu	20.6553527	105.7322931	Xã	282	\N	\N
10507	Phường Cẩm Thượng	phuong-cam-thuong	20.9510914	106.3178987	Phường	288	\N	\N
10510	Phường Bình Hàn	phuong-binh-han	20.9461429	106.3236979	Phường	288	\N	\N
10513	Phường Ngọc Châu	phuong-ngoc-chau	20.9473393	106.3476628	Phường	288	\N	\N
10514	Phường Nhị Châu	phuong-nhi-chau	20.9473393	106.3476628	Phường	288	\N	\N
10516	Phường Quang Trung	phuong-quang-trung	20.9411308	106.3350537	Phường	288	\N	\N
10519	Phường Nguyễn Trãi	phuong-nguyen-trai	20.9426784	106.3272483	Phường	288	\N	\N
10522	Phường Phạm Ngũ Lão	phuong-pham-ngu-lao	20.9368183	106.3206266	Phường	288	\N	\N
10525	Phường Trần Hưng Đạo	phuong-tran-hung-dao	20.9379837	106.3382851	Phường	288	\N	\N
10528	Phường Trần Phú	phuong-tran-phu	20.934653	106.3279841	Phường	288	\N	\N
10531	Phường Thanh Bình	phuong-thanh-binh	20.9283493	106.3145349	Phường	288	\N	\N
10532	Phường Tân Bình	phuong-tan-binh	20.9235888	106.3142171	Phường	288	\N	\N
10534	Phường Lê Thanh Nghị	phuong-le-thanh-nghi	20.9282176	106.3272483	Phường	288	\N	\N
10537	Phường Hải Tân	phuong-hai-tan	20.9220269	106.3334099	Phường	288	\N	\N
10540	Phường Tứ Minh	phuong-tu-minh	20.9242626	106.2867648	Phường	288	\N	\N
10543	Phường Việt Hoà	phuong-viet-hoa	20.9484228	106.2995596	Phường	288	\N	\N
10546	Phường Phả Lại	phuong-pha-lai	21.1186822	106.3169479	Phường	290	\N	\N
10549	Phường Sao Đỏ	phuong-sao-do	21.1085338	106.3905338	Phường	290	\N	\N
10552	Phường Bến Tắm	phuong-ben-tam	21.1741082	106.458256	Phường	290	\N	\N
10555	Xã Hoàng Hoa Thám	xa-hoang-hoa-tham	21.133	106.383	Xã	290	\N	\N
10558	Xã Bắc An	xa-bac-an	21.1891873	106.4229199	Xã	290	\N	\N
10561	Xã Hưng Đạo	xa-hung-dao	21.1406643	106.3287199	Xã	290	\N	\N
10564	Xã Lê Lợi	xa-le-loi	21.1707222	106.3758145	Xã	290	\N	\N
10567	Xã Hoàng Tiến	xa-hoang-tien	21.1382421	106.470036	Xã	290	\N	\N
10570	Phường Cộng Hoà	phuong-cong-hoa	21.1348523	106.3875898	Phường	290	\N	\N
10573	Phường Hoàng Tân	phuong-hoang-tan	21.1417524	106.4346979	Phường	290	\N	\N
10576	Xã Cổ Thành	xa-co-thanh	21.0955407	106.3169479	Xã	290	\N	\N
10579	Phường Văn An	phuong-van-an	21.0828863	106.3507768	Phường	290	\N	\N
10582	Phường Chí Minh	phuong-chi-minh	21.0897436	106.3758145	Phường	290	\N	\N
10585	Xã Văn Đức	xa-van-duc	21.0955789	106.427109	Xã	290	\N	\N
10588	Phường Thái Học	phuong-thai-hoc	21.1085338	106.3905338	Phường	290	\N	\N
10591	Xã Nhân Huệ	xa-nhan-hue	21.0755813	106.314005	Xã	290	\N	\N
10594	Xã An Lạc	xa-an-lac	21.0690581	106.3949498	Xã	290	\N	\N
10597	Xã Kênh Giang	xa-kenh-giang	21.1330005	106.3830007	Xã	290	\N	\N
10600	Xã Đồng Lạc	xa-dong-lac	21.0372712	106.3815044	Xã	290	\N	\N
10603	Xã Tân Dân	xa-tan-dan	21.0554066	106.3817632	Xã	290	\N	\N
10606	Thị trấn Nam Sách	thi-tran-nam-sach	20.9922832	106.3375493	Thị trấn	291	\N	\N
10609	Xã Nam Hưng	xa-nam-hung	21.0628548	106.3257768	Xã	291	\N	\N
10612	Xã Nam Tân	xa-nam-tan	21.0663246	106.3493224	Xã	291	\N	\N
10615	Xã Hợp Tiến	xa-hop-tien	21.0507068	106.3316629	Xã	291	\N	\N
10618	Xã Hiệp Cát	xa-hiep-cat	21.0414472	106.3081194	Xã	291	\N	\N
10621	Xã Thanh Quang	xa-thanh-quang	21.0409642	106.3540429	Xã	291	\N	\N
10624	Xã Quốc Tuấn	xa-quoc-tuan	21.0353779	106.3404925	Xã	291	\N	\N
10627	Xã Nam Chính	xa-nam-chinh	21.0128473	106.3300708	Xã	291	\N	\N
10630	Xã An Bình	xa-an-binh	21.0244299	106.3658842	Xã	291	\N	\N
10633	Xã Nam Trung	xa-nam-trung	21.0128473	106.3300708	Xã	291	\N	\N
10636	Xã An Sơn	xa-an-son	21.0073123	106.3022339	Xã	291	\N	\N
10639	Xã Cộng Hòa	xa-cong-hoa	20.9783991	106.4199755	Xã	291	\N	\N
10642	Xã Thái Tân	xa-thai-tan	20.9918972	106.2913835	Xã	291	\N	\N
10645	Xã An Lâm	xa-an-lam	20.9957401	106.3394058	Xã	291	\N	\N
10648	Xã Phú Điền	xa-phu-dien	20.9937769	106.370101	Xã	291	\N	\N
10651	Xã Nam Hồng	xa-nam-hong	20.9980364	106.3254945	Xã	291	\N	\N
10654	Xã Hồng Phong	xa-hong-phong	20.9830201	106.314005	Xã	291	\N	\N
10657	Xã Đồng Lạc	xa-dong-lac	20.995464	106.3346061	Xã	291	\N	\N
10660	Phường Ái Quốc	phuong-ai-quoc	20.9635987	106.3816237	Phường	288	\N	\N
10663	Xã An Châu	xa-an-chau	20.9648194	106.3304542	Xã	288	\N	\N
10666	Xã Minh Tân	xa-minh-tan	20.9684927	106.2978315	Xã	291	\N	\N
10669	Xã Thượng Đạt	xa-thuong-dat	20.9644565	106.3171585	Xã	288	\N	\N
10672	Xã Nam Đồng	xa-nam-dong	20.9513035	106.3637638	Xã	288	\N	\N
10675	Thị trấn Kinh Môn	thi-tran-kinh-mon	20.9944813	106.5495683	Thị trấn	292	\N	\N
10678	Xã Bạch Đằng	xa-bach-dang	21.0481985	106.4679192	Xã	292	\N	\N
10681	Xã Thất Hùng	xa-that-hung	21.0517998	106.4823979	Xã	292	\N	\N
10684	Xã Lê Ninh	xa-le-ninh	21.0422905	106.4454643	Xã	292	\N	\N
10687	Xã Hoành Sơn	xa-hoanh-son	21.0550854	106.5068528	Xã	292	\N	\N
10690	Xã Phúc Thành B	xa-phuc-thanh-b	21.033323	106.4324435	Xã	292	\N	\N
10693	Xã Thái Sơn	xa-thai-son	21.0307253	106.4884712	Xã	292	\N	\N
10696	Xã Duy Tân	xa-duy-tan	21.0360411	106.5286303	Xã	292	\N	\N
10699	Xã Tân Dân	xa-tan-dan	21.049459	106.5554523	Xã	292	\N	\N
10702	Thị trấn Minh Tân	thi-tran-minh-tan	21.0340126	106.5878723	Thị trấn	292	\N	\N
10705	Xã Quang Trung	xa-quang-trung	21.0240791	106.4258643	Xã	292	\N	\N
10708	Xã Hiệp Hòa	xa-hiep-hoa	21.0191369	106.4652872	Xã	292	\N	\N
10711	Xã Phạm Mệnh	xa-pham-menh	21.0262038	106.5095225	Xã	292	\N	\N
10714	Thị trấn Phú Thứ	thi-tran-phu-thu	21.0227943	106.5554608	Thị trấn	292	\N	\N
10717	Xã Thăng Long	xa-thang-long	21.0127352	106.5112712	Xã	292	\N	\N
10720	Xã Lạc Long	xa-lac-long	21.0055235	106.4494099	Xã	292	\N	\N
10723	Xã An Sinh	xa-an-sinh	21.010212	106.5068655	Xã	292	\N	\N
10726	Xã Hiệp Sơn	xa-hiep-son	21.0064289	106.5335568	Xã	292	\N	\N
10729	Xã Thượng Quận	xa-thuong-quan	20.9982242	106.4952388	Xã	292	\N	\N
10732	Xã An Phụ	xa-an-phu	20.9864302	106.5142169	Xã	292	\N	\N
10735	Xã Hiệp An	xa-hiep-an	20.9842352	106.5463459	Xã	292	\N	\N
10738	Xã Long Xuyên	xa-long-xuyen	20.9718466	106.5529053	Xã	292	\N	\N
10741	Xã Thái Thịnh	xa-thai-thinh	20.971202	106.5628046	Xã	292	\N	\N
10744	Xã Hiến Thành	xa-hien-thanh	20.9590596	106.5559117	Xã	292	\N	\N
10747	Xã Minh Hòa	xa-minh-hoa	20.9842352	106.5463459	Xã	292	\N	\N
10750	Thị trấn Phú Thái	thi-tran-phu-thai	20.9633083	106.5142169	Thị trấn	293	\N	\N
10753	Xã Lai Vu	xa-lai-vu	20.9814393	106.403782	Xã	293	\N	\N
10756	Xã Cộng Hòa	xa-cong-hoa	20.9783991	106.4199755	Xã	293	\N	\N
10759	Xã Thượng Vũ	xa-thuong-vu	20.9888031	106.4317533	Xã	293	\N	\N
10762	Xã Cổ Dũng	xa-co-dung	20.9714562	106.4317533	Xã	293	\N	\N
10765	Xã Việt Hưng	xa-viet-hung	20.9847341	106.4615946	Xã	293	\N	\N
10768	Xã Tuấn Hưng	xa-tuan-hung	20.9697139	106.4494214	Xã	293	\N	\N
10771	Xã Kim Xuyên	xa-kim-xuyen	20.9720043	106.4847619	Xã	293	\N	\N
10774	Xã Phúc Thành A	xa-phuc-thanh-a	20.9702239	106.5002632	Xã	293	\N	\N
10777	Xã Ngũ Phúc	xa-ngu-phuc	20.9425171	106.4906526	Xã	293	\N	\N
10780	Xã Kim Anh	xa-kim-anh	20.9547519	106.5090716	Xã	293	\N	\N
10783	Xã Kim Lương	xa-kim-luong	20.9498373	106.529724	Xã	293	\N	\N
10786	Xã Kim Tân	xa-kim-tan	20.9329727	106.4994889	Xã	293	\N	\N
10789	Xã Kim Khê	xa-kim-khe	20.9345394	106.527473	Xã	293	\N	\N
10792	Xã Kim Đính	xa-kim-dinh	20.9141947	106.4847619	Xã	293	\N	\N
10795	Xã Cẩm La	xa-cam-la	20.9048401	106.5214228	Xã	293	\N	\N
10798	Xã Bình Dân	xa-binh-dan	20.9060876	106.5083256	Xã	293	\N	\N
10801	Xã Tam Kỳ	xa-tam-ky	20.8800565	106.5377839	Xã	293	\N	\N
10804	Xã Đồng Gia	xa-dong-gia	20.8962452	106.5169204	Xã	293	\N	\N
10807	Xã Liên Hòa	xa-lien-hoa	20.8841293	106.4965434	Xã	293	\N	\N
10810	Xã Đại Đức	xa-dai-duc	20.8708252	106.5142169	Xã	293	\N	\N
10813	Thị trấn Thanh Hà	thi-tran-thanh-ha	20.9026499	106.4258643	Thị trấn	294	\N	\N
10816	Xã Hồng Lạc	xa-hong-lac	20.9554894	106.3956858	Xã	294	\N	\N
10819	Xã Việt Hồng	xa-viet-hong	20.9476731	106.4274755	Xã	294	\N	\N
10822	Xã Quyết Thắng	xa-quyet-thang	20.9316713	106.3830752	Xã	294	\N	\N
10825	Xã Tân Việt	xa-tan-viet	20.9275148	106.4081983	Xã	294	\N	\N
10828	Xã Cẩm Chế	xa-cam-che	20.9297469	106.4333106	Xã	294	\N	\N
10831	Xã Thanh An	xa-thanh-an	20.9369436	106.4482498	Xã	294	\N	\N
10834	Xã Thanh Lang	xa-thanh-lang	20.9416392	106.4630942	Xã	294	\N	\N
10837	Xã Tiền Tiến	xa-tien-tien	20.9295379	106.4170311	Xã	294	\N	\N
10840	Xã Tân An	xa-tan-an	20.9295379	106.4170311	Xã	294	\N	\N
10843	Xã Liên Mạc	xa-lien-mac	20.9219099	106.4448839	Xã	294	\N	\N
10846	Xã Thanh Hải	xa-thanh-hai	20.8873011	106.401727	Xã	294	\N	\N
10849	Xã Thanh Khê	xa-thanh-khe	20.8807751	106.4218148	Xã	294	\N	\N
10852	Xã Thanh Xá	xa-thanh-xa	20.8956304	106.447106	Xã	294	\N	\N
10855	Xã Thanh Xuân	xa-thanh-xuan	20.8882662	106.472281	Xã	294	\N	\N
10858	Xã An Lương	xa-an-luong	20.8761352	106.4144754	Xã	294	\N	\N
10861	Xã Thanh Thủy	xa-thanh-thuy	14.058324	108.277199	Xã	294	\N	\N
10864	Xã Phượng Hoàng	xa-phuong-hoang	20.8616706	106.4137524	Xã	294	\N	\N
10867	Xã Thanh Sơn	xa-thanh-son	20.864787	106.4481854	Xã	294	\N	\N
10870	Xã Hợp Đức	xa-hop-duc	20.8639078	106.4670909	Xã	294	\N	\N
10873	Xã Trường Thành	xa-truong-thanh	20.9295379	106.4170311	Xã	294	\N	\N
10876	Xã Thanh Bính	xa-thanh-binh	20.8461764	106.4709091	Xã	294	\N	\N
10879	Xã Thanh Hồng	xa-thanh-hong	20.835649	106.4581237	Xã	294	\N	\N
10882	Xã Thanh Cường	xa-thanh-cuong	20.8344389	106.4774429	Xã	294	\N	\N
10885	Xã Vĩnh Lập	xa-vinh-lap	20.8147668	106.4965434	Xã	294	\N	\N
10888	Thị trấn Cẩm Giàng	thi-tran-cam-giang	20.9684918	106.1735323	Thị trấn	295	\N	\N
10891	Thị trấn Lai Cách	thi-tran-lai-cach	20.9366944	106.2551563	Thị trấn	295	\N	\N
10894	Xã Cẩm Hưng	xa-cam-hung	20.9886212	106.1375107	Xã	295	\N	\N
10897	Xã Cẩm Hoàng	xa-cam-hoang	20.9900901	106.2347919	Xã	295	\N	\N
10900	Xã Cẩm Văn	xa-cam-van	20.9868917	106.2595694	Xã	295	\N	\N
10903	Xã Ngọc Liên	xa-ngoc-lien	20.9727272	106.1522126	Xã	295	\N	\N
10906	Xã Thạch Lỗi	xa-thach-loi	20.9769088	106.1911779	Xã	295	\N	\N
10909	Xã Cẩm Vũ	xa-cam-vu	20.9758067	106.2480772	Xã	295	\N	\N
10912	Xã Đức Chính	xa-duc-chinh	20.9655709	106.2779581	Xã	295	\N	\N
10915	Xã Cẩm Sơn	xa-cam-son	20.9662288	106.2117664	Xã	295	\N	\N
10918	Xã Cẩm Định	xa-cam-dinh	20.9621509	106.2332051	Xã	295	\N	\N
10921	Xã Kim Giang	xa-kim-giang	20.9574395	106.1800376	Xã	295	\N	\N
10924	Xã Lương Điền	xa-luong-dien	20.9520263	106.1719933	Xã	295	\N	\N
10927	Xã Cao An	xa-cao-an	20.9479485	106.22868	Xã	295	\N	\N
10930	Xã Tân Trường	xa-tan-truong	20.9479485	106.22868	Xã	295	\N	\N
10933	Xã Cẩm Phúc	xa-cam-phuc	20.9361187	106.2044752	Xã	295	\N	\N
10936	Xã Cẩm Điền	xa-cam-dien	20.9319744	106.1845606	Xã	295	\N	\N
10939	Xã Cẩm Đông	xa-cam-dong	20.9276334	106.2367696	Xã	295	\N	\N
10942	Xã Cẩm Đoài	xa-cam-doai	20.9102924	106.2514788	Xã	295	\N	\N
10945	Thị trấn Kẻ Sặt	thi-tran-ke-sat	20.9109309	106.1478019	Thị trấn	296	\N	\N
10948	Xã Hưng Thịnh	xa-hung-thinh	20.8697946	106.1909161	Xã	296	\N	\N
10951	Xã Vĩnh Tuy	xa-vinh-tuy	20.9100036	106.1539977	Xã	296	\N	\N
10954	Xã Hùng Thắng	xa-hung-thang	20.9069173	106.2032783	Xã	296	\N	\N
10957	Xã Tráng Liệt	xa-trang-liet	20.9023544	106.147621	Xã	296	\N	\N
10960	Xã Vĩnh Hồng	xa-vinh-hong	20.870356	106.1933837	Xã	296	\N	\N
10963	Xã Long Xuyên	xa-long-xuyen	20.8569753	106.2516075	Xã	296	\N	\N
10966	Xã Tân Việt	xa-tan-viet	20.8708773	106.1936841	Xã	296	\N	\N
10969	Xã Thúc Kháng	xa-thuc-khang	20.9375417	106.3145971	Xã	296	\N	\N
10972	Xã Tân Hồng	xa-tan-hong	20.8652526	106.1713267	Xã	296	\N	\N
10975	Xã Bình Minh	xa-binh-minh	20.8727975	106.1830901	Xã	296	\N	\N
10978	Xã Hồng Khê	xa-hong-khe	20.87203	106.2157077	Xã	296	\N	\N
10981	Xã Thái Học	xa-thai-hoc	20.863517	106.2001763	Xã	296	\N	\N
10984	Xã Cổ Bi	xa-co-bi	20.870356	106.1933837	Xã	296	\N	\N
10987	Xã Nhân Quyền	xa-nhan-quyen	20.8535129	106.214579	Xã	296	\N	\N
10990	Xã Thái Dương	xa-thai-duong	20.8439139	106.1375107	Xã	296	\N	\N
10993	Xã Thái Hòa	xa-thai-hoa	20.8422155	106.1551531	Xã	296	\N	\N
10996	Xã Bình Xuyên	xa-binh-xuyen	20.8385135	106.1974499	Xã	296	\N	\N
10999	Thị trấn Gia Lộc	thi-tran-gia-loc	20.8684751	106.3022339	Thị trấn	297	\N	\N
11002	Phường Thạch Khôi	phuong-thach-khoi	20.9074628	106.3075708	Phường	288	\N	\N
11005	Xã Liên Hồng	xa-lien-hong	20.9069496	106.286284	Xã	297	\N	\N
11008	Xã Thống Nhất	xa-thong-nhat	20.8991898	106.255517	Xã	297	\N	\N
11011	Xã Tân Hưng	xa-tan-hung	20.9040321	106.3318069	Xã	288	\N	\N
11014	Xã Trùng Khánh	xa-trung-khanh	20.8908078	106.2464377	Xã	297	\N	\N
11017	Xã Gia Xuyên	xa-gia-xuyen	20.8451417	106.2885408	Xã	297	\N	\N
11020	Xã Yết Kiêu	xa-yet-kieu	20.8451417	106.2885408	Xã	297	\N	\N
11023	Xã Gia Hòa	xa-gia-hoa	20.8719552	106.2714409	Xã	297	\N	\N
11026	Xã Phương Hưng	xa-phuong-hung	20.8612295	106.287521	Xã	297	\N	\N
11029	Xã Gia Tân	xa-gia-tan	14.058324	108.277199	Xã	297	\N	\N
11032	Xã Tân Tiến	xa-tan-tien	20.8791813	106.3328541	Xã	297	\N	\N
11035	Xã Gia Khánh	xa-gia-khanh	20.8612295	106.287521	Xã	297	\N	\N
11038	Xã Gia Lương	xa-gia-luong	20.867152	106.3355786	Xã	297	\N	\N
11041	Xã Lê Lợi	xa-le-loi	20.8662156	106.2925261	Xã	297	\N	\N
11044	Xã Toàn Thắng	xa-toan-thang	20.8451417	106.2885408	Xã	297	\N	\N
11047	Xã Hoàng Diệu	xa-hoang-dieu	20.8628473	106.3154764	Xã	297	\N	\N
11050	Xã Hồng Hưng	xa-hong-hung	14.058324	108.277199	Xã	297	\N	\N
11053	Xã Phạm Trấn	xa-pham-tran	20.8261978	106.2610404	Xã	297	\N	\N
11056	Xã Đoàn Thượng	xa-doan-thuong	20.8203665	106.2821471	Xã	297	\N	\N
11059	Xã Thống Kênh	xa-thong-kenh	14.058324	108.277199	Xã	297	\N	\N
11062	Xã Quang Minh	xa-quang-minh	20.7899421	106.2708041	Xã	297	\N	\N
11065	Xã Đồng Quang	xa-dong-quang	20.8087576	106.2672429	Xã	297	\N	\N
11068	Xã Nhật Tân	xa-nhat-tan	20.8020157	106.2538862	Xã	297	\N	\N
11071	Xã Đức Xương	xa-duc-xuong	20.7915195	106.2836802	Xã	297	\N	\N
11074	Thị trấn Tứ Kỳ	thi-tran-tu-ky	20.817652	106.4081983	Thị trấn	298	\N	\N
11077	Xã Ngọc Sơn	xa-ngoc-son	20.8969206	106.3441716	Xã	298	\N	\N
11080	Xã Kỳ Sơn	xa-ky-son	20.8799839	106.3584251	Xã	298	\N	\N
11083	Xã Đại Đồng	xa-dai-dong	20.872406	106.3655949	Xã	298	\N	\N
11086	Xã Hưng Đạo	xa-hung-dao	20.8577466	106.3660361	Xã	298	\N	\N
11089	Xã Ngọc Kỳ	xa-ngoc-ky	20.8484298	106.351642	Xã	298	\N	\N
11092	Xã Bình Lăng	xa-binh-lang	20.8479845	106.3931924	Xã	298	\N	\N
11095	Xã Tứ Xuyên	xa-tu-xuyen	20.7988605	106.4331336	Xã	298	\N	\N
11098	Xã Tái Sơn	xa-tai-son	20.8441134	106.3686687	Xã	298	\N	\N
11101	Xã Quang Phục	xa-quang-phuc	20.836138	106.380398	Xã	298	\N	\N
11104	Xã Đông Kỳ	xa-dong-ky	20.8346887	106.4068814	Xã	298	\N	\N
11107	Xã Tây Kỳ	xa-tay-ky	20.7988605	106.4331336	Xã	298	\N	\N
11110	Xã Dân Chủ	xa-dan-chu	20.8260594	106.320818	Xã	298	\N	\N
11113	Xã Tân Kỳ	xa-tan-ky	20.8286102	106.3552092	Xã	298	\N	\N
11116	Xã Quang Khải	xa-quang-khai	20.8090427	106.3749484	Xã	298	\N	\N
11119	Xã Đại Hợp	xa-dai-hop	20.8129812	106.3375493	Xã	298	\N	\N
11122	Xã Quảng Nghiệp	xa-quang-nghiep	20.8110438	106.3241276	Xã	298	\N	\N
11125	Xã An Thanh	xa-an-thanh	20.8040766	106.458256	Xã	298	\N	\N
11128	Xã Minh Đức	xa-minh-duc	20.803485	106.4052541	Xã	298	\N	\N
11131	Xã Văn Tố	xa-van-to	20.7948231	106.4346979	Xã	298	\N	\N
11134	Xã Quang Trung	xa-quang-trung	20.7777803	106.4549232	Xã	298	\N	\N
11137	Xã Phượng Kỳ	xa-phuong-ky	20.776398	106.420236	Xã	298	\N	\N
11140	Xã Cộng Lạc	xa-cong-lac	20.7836365	106.4518041	Xã	298	\N	\N
11143	Xã Tiên Động	xa-tien-dong	20.7748733	106.4563128	Xã	298	\N	\N
11146	Xã Nguyên Giáp	xa-nguyen-giap	20.755173	106.4735833	Xã	298	\N	\N
11149	Xã Hà Kỳ	xa-ha-ky	20.7486865	106.4222797	Xã	298	\N	\N
11152	Xã Hà Thanh	xa-ha-thanh	20.8169787	106.4114592	Xã	298	\N	\N
11155	Thị trấn Ninh Giang	thi-tran-ninh-giang	20.7328025	106.403782	Thị trấn	299	\N	\N
11158	Xã Quyết Thắng	xa-quyet-thang	20.8002229	106.350427	Xã	299	\N	\N
11161	Xã Ứng Hoè	xa-ung-hoe	20.791843	106.346298	Xã	299	\N	\N
11164	Xã Nghĩa An	xa-nghia-an	20.7334259	106.3714682	Xã	299	\N	\N
11167	Xã Hồng Đức	xa-hong-duc	20.7768824	106.3147407	Xã	299	\N	\N
11170	Xã Ninh Hòa	xa-ninh-hoa	20.7823489	106.329475	Xã	299	\N	\N
11173	Xã An Đức	xa-an-duc	20.7687715	106.3008354	Xã	299	\N	\N
11176	Xã Vạn Phúc	xa-van-phuc	20.7702891	106.3317397	Xã	299	\N	\N
11179	Xã Tân Hương	xa-tan-huong	20.769469	106.3642	Xã	299	\N	\N
11182	Xã Ninh Thành	xa-ninh-thanh	20.7685737	106.377369	Xã	299	\N	\N
11185	Xã Vĩnh Hòa	xa-vinh-hoa	20.7542981	106.3843699	Xã	299	\N	\N
11188	Xã Đông Xuyên	xa-dong-xuyen	20.7584593	106.340035	Xã	299	\N	\N
11191	Xã Hoàng Hanh	xa-hoang-hanh	20.7614248	106.2728091	Xã	299	\N	\N
11194	Xã Quang Hưng	xa-quang-hung	20.7474324	106.296229	Xã	299	\N	\N
11197	Xã Tân Phong	xa-tan-phong	20.722695	106.3147764	Xã	299	\N	\N
11200	Xã Ninh Hải	xa-ninh-hai	20.7401582	106.3488542	Xã	299	\N	\N
11203	Xã Đồng Tâm	xa-dong-tam	20.7440074	106.38648	Xã	299	\N	\N
11206	Xã Tân Quang	xa-tan-quang	20.7405003	106.2772938	Xã	299	\N	\N
11209	Xã Kiến Quốc	xa-kien-quoc	20.7334259	106.3714682	Xã	299	\N	\N
11212	Xã Hồng Thái	xa-hong-thai	20.7266415	106.3544097	Xã	299	\N	\N
11215	Xã Hồng Dụ	xa-hong-du	20.7334259	106.3714682	Xã	299	\N	\N
11218	Xã Văn Hội	xa-van-hoi	20.7222963	106.2661891	Xã	299	\N	\N
11221	Xã Hưng Thái	xa-hung-thai	20.7222069	106.296773	Xã	299	\N	\N
11224	Xã Hồng Phong	xa-hong-phong	20.7188464	106.3410444	Xã	299	\N	\N
11227	Xã Hiệp Lực	xa-hiep-luc	20.7228838	106.3804707	Xã	299	\N	\N
11230	Xã Hồng Phúc	xa-hong-phuc	20.7161019	106.313725	Xã	299	\N	\N
11233	Xã Hưng Long	xa-hung-long	20.7007382	106.3022339	Xã	299	\N	\N
11236	Xã Văn Giang	xa-van-giang	20.7030743	106.2777109	Xã	299	\N	\N
11239	Thị trấn Thanh Miện	thi-tran-thanh-mien	20.7879784	106.237505	Thị trấn	300	\N	\N
11242	Xã Thanh Tùng	xa-thanh-tung	20.8365397	106.2139724	Xã	300	\N	\N
11245	Xã Phạm Kha	xa-pham-kha	20.8300228	106.2397411	Xã	300	\N	\N
11248	Xã Ngô Quyền	xa-ngo-quyen	20.8242869	106.1610343	Xã	300	\N	\N
11251	Xã Đoàn Tùng	xa-doan-tung	20.8243987	106.2198553	Xã	300	\N	\N
11254	Xã Hồng Quang	xa-hong-quang	20.8072696	106.1875016	Xã	300	\N	\N
11257	Xã Tân Trào	xa-tan-trao	20.8017037	106.1551531	Xã	300	\N	\N
11260	Xã Lam Sơn	xa-lam-son	20.8038636	106.2227968	Xã	300	\N	\N
11263	Xã Đoàn Kết	xa-doan-ket	20.7820794	106.1786787	Xã	300	\N	\N
11266	Xã Lê Hồng	xa-le-hong	20.7829899	106.199266	Xã	300	\N	\N
11269	Xã Tứ Cường	xa-tu-cuong	20.7708183	106.2322623	Xã	300	\N	\N
11272	Xã Hùng Sơn	xa-hung-son	20.7818949	106.272514	Xã	300	\N	\N
11275	Xã Ngũ Hùng	xa-ngu-hung	20.7558323	106.2548595	Xã	300	\N	\N
11278	Xã Cao Thắng	xa-cao-thang	20.7579699	106.2108529	Xã	300	\N	\N
11281	Xã Chi Lăng Bắc	xa-chi-lang-bac	20.7433059	106.2314593	Xã	300	\N	\N
11284	Xã Chi Lăng Nam	xa-chi-lang-nam	20.7268565	106.227905	Xã	300	\N	\N
11287	Xã Thanh Giang	xa-thanh-giang	20.7235746	106.251772	Xã	300	\N	\N
11290	Xã Diên Hồng	xa-dien-hong	20.7083813	106.2409249	Xã	300	\N	\N
11293	Xã Tiền Phong	xa-tien-phong	20.7042637	106.2507433	Xã	300	\N	\N
11296	Phường Quán Toan	phuong-quan-toan	20.890383	106.6085003	Phường	303	\N	\N
11299	Phường Hùng Vương	phuong-hung-vuong	20.8758973	106.6379724	Phường	303	\N	\N
11302	Phường Sở Dầu	phuong-so-dau	20.8683599	106.6556575	Phường	303	\N	\N
11305	Phường Thượng Lý	phuong-thuong-ly	20.865888	106.6659746	Phường	303	\N	\N
11308	Phường Hạ Lý	phuong-ha-ly	20.8621185	106.6748181	Phường	303	\N	\N
11311	Phường Minh Khai	phuong-minh-khai	20.8636233	106.681451	Phường	303	\N	\N
11314	Phường Trại Chuối	phuong-trai-chuoi	20.8568681	106.6622899	Phường	303	\N	\N
11317	Phường Quang Trung	phuong-quang-trung	20.857994	106.679977	Phường	303	\N	\N
11320	Phường Hoàng Văn Thụ	phuong-hoang-van-thu	20.8589971	106.684399	Phường	303	\N	\N
11323	Phường Phan Bội Châu	phuong-phan-boi-chau	20.8568438	106.677029	Phường	303	\N	\N
11326	Phường Phạm Hồng Thái	phuong-pham-hong-thai	20.8558404	106.6726072	Phường	303	\N	\N
11329	Phường Máy Chai	phuong-may-chai	20.8706813	106.705516	Phường	304	\N	\N
11332	Phường Máy Tơ	phuong-may-to	20.8661304	106.6925062	Phường	304	\N	\N
11335	Phường Vạn Mỹ	phuong-van-my	20.8614762	106.7101958	Phường	304	\N	\N
11338	Phường Cầu Tre	phuong-cau-tre	20.8612696	106.7050362	Phường	304	\N	\N
11341	Phường Lạc Viên	phuong-lac-vien	20.8618583	106.6991396	Phường	304	\N	\N
11344	Phường Lương Khánh Thiện	phuong-luong-khanh-thien	20.8572591	106.687347	Phường	304	\N	\N
11347	Phường Gia Viên	phuong-gia-vien	20.8566709	106.6932433	Phường	304	\N	\N
11350	Phường Đông Khê	phuong-dong-khe	20.8521048	106.702825	Phường	304	\N	\N
11353	Phường Cầu Đất	phuong-cau-dat	20.854665	106.684399	Phường	304	\N	\N
11356	Phường Lê Lợi	phuong-le-loi	20.854077	106.6902951	Phường	304	\N	\N
11359	Phường Đằng Giang	phuong-dang-giang	20.8421445	106.7013508	Phường	304	\N	\N
11362	Phường Lạch Tray	phuong-lach-tray	20.8467101	106.6917692	Phường	304	\N	\N
11365	Phường Đổng Quốc Bình	phuong-dong-quoc-binh	20.8390492	106.6961914	Phường	304	\N	\N
11368	Phường Cát Dài	phuong-cat-dai	20.853099	106.6711332	Phường	305	\N	\N
11371	Phường An Biên	phuong-an-bien	20.8538087	106.678503	Phường	305	\N	\N
11374	Phường Lam Sơn	phuong-lam-son	20.8482031	106.6622899	Phường	305	\N	\N
11377	Phường An Dương	phuong-an-duong	20.8463188	106.6667115	Phường	305	\N	\N
11380	Phường Trần Nguyên Hãn	phuong-tran-nguyen-han	20.8487667	106.6711332	Phường	305	\N	\N
11383	Phường Hồ Nam	phuong-ho-nam	20.8476776	106.6748181	Phường	305	\N	\N
11386	Phường Trại Cau	phuong-trai-cau	20.8506268	106.681451	Phường	305	\N	\N
11389	Phường Dư Hàng	phuong-du-hang	20.8465884	106.678503	Phường	305	\N	\N
11392	Phường Hàng Kênh	phuong-hang-kenh	20.847298	106.685873	Phường	305	\N	\N
11395	Phường Đông Hải	phuong-dong-hai	20.844116	106.6888211	Phường	305	\N	\N
11398	Phường Niệm Nghĩa	phuong-niem-nghia	20.8430753	106.6630268	Phường	305	\N	\N
11401	Phường Nghĩa Xá	phuong-nghia-xa	20.8421949	106.6718702	Phường	305	\N	\N
11404	Phường Dư Hàng Kênh	phuong-du-hang-kenh	20.8384259	106.680714	Phường	305	\N	\N
11405	Phường Kênh Dương	phuong-kenh-duong	20.8317687	106.6895581	Phường	305	\N	\N
11407	Phường Vĩnh Niệm	phuong-vinh-niem	20.8281544	106.6919028	Phường	305	\N	\N
11410	Phường Đông Hải 1	phuong-dong-hai-1	20.8602869	106.7179021	Phường	306	\N	\N
11411	Phường Đông Hải 2	phuong-dong-hai-2	20.8175656	106.7883416	Phường	306	\N	\N
11413	Phường Đằng Lâm	phuong-dang-lam	20.8272371	106.7205154	Phường	306	\N	\N
11414	Phường Thành Tô	phuong-thanh-to	20.8208734	106.7373425	Phường	306	\N	\N
11416	Phường Đằng Hải	phuong-dang-hai	20.8387876	106.7205154	Phường	306	\N	\N
11419	Phường Nam Hải	phuong-nam-hai	20.8306552	106.7441048	Phường	306	\N	\N
11422	Phường Cát Bi	phuong-cat-bi	20.8242296	106.7072474	Phường	306	\N	\N
11425	Phường Tràng Cát	phuong-trang-cat	20.8132218	106.735684	Phường	306	\N	\N
11428	Phường Quán Trữ	phuong-quan-tru	20.8214343	106.6482886	Phường	307	\N	\N
11429	Phường Lãm Hà	phuong-lam-ha	20.8394761	106.6556575	Phường	307	\N	\N
11431	Phường Đồng Hoà	phuong-dong-hoa	20.8215601	106.6615529	Phường	307	\N	\N
11434	Phường Bắc Sơn	phuong-bac-son	20.8197168	106.6364987	Phường	307	\N	\N
11437	Phường Nam Sơn	phuong-nam-son	20.8059874	106.6438673	Phường	307	\N	\N
11440	Phường Ngọc Sơn	phuong-ngoc-son	20.803133	106.6143944	Phường	307	\N	\N
11443	Phường Trần Thành Ngọ	phuong-tran-thanh-ngo	20.80904	106.6276567	Phường	307	\N	\N
11446	Phường Văn Đẩu	phuong-van-dau	20.7880724	106.6497623	Phường	307	\N	\N
11449	Phường Phù Liễn	phuong-phu-lien	20.7847633	106.6394461	Phường	307	\N	\N
11452	Phường Tràng Minh	phuong-trang-minh	20.7909945	106.6202887	Phường	307	\N	\N
11455	Phường Ngọc Xuyên	phuong-ngoc-xuyen	20.7379164	106.7765443	Phường	308	\N	\N
11458	Phường Ngọc Hải	phuong-ngoc-hai	20.7189623	106.7895517	Phường	308	\N	\N
11461	Phường Vạn Hương	phuong-van-huong	20.6931466	106.791291	Phường	308	\N	\N
11464	Phường Vạn Sơn	phuong-van-son	20.7104651	106.791291	Phường	308	\N	\N
11465	Phường Minh Đức	phuong-minh-duc	20.7319031	106.7500025	Phường	308	\N	\N
11467	Phường Bàng La	phuong-bang-la	20.7088076	106.7500025	Phường	308	\N	\N
11470	Thị trấn Núi Đèo	thi-tran-nui-deo	20.9186865	106.6757685	Thị trấn	311	\N	\N
11473	Thị trấn Minh Đức	thi-tran-minh-duc	20.9608899	106.7411559	Thị trấn	311	\N	\N
11476	Xã Lại Xuân	xa-lai-xuan	21.008544	106.6114474	Xã	311	\N	\N
11479	Xã An Sơn	xa-an-son	20.9927232	106.5672462	Xã	311	\N	\N
11482	Xã Kỳ Sơn	xa-ky-son	20.9886133	106.6085003	Xã	311	\N	\N
11485	Xã Liên Khê	xa-lien-khe	21.005009	106.6468148	Xã	311	\N	\N
11488	Xã Lưu Kiếm	xa-luu-kiem	20.9679851	106.6703963	Xã	311	\N	\N
11491	Xã Lưu Kỳ	xa-luu-ky	20.9994639	106.6733441	Xã	311	\N	\N
11494	Xã Gia Minh	xa-gia-minh	14.058324	108.277199	Xã	311	\N	\N
11497	Xã Gia Đức	xa-gia-duc	20.9837948	106.7532801	Xã	311	\N	\N
11500	Xã Minh Tân	xa-minh-tan	20.9644415	106.7057733	Xã	311	\N	\N
11503	Xã Phù Ninh	xa-phu-ninh	20.9788183	106.590819	Xã	311	\N	\N
11506	Xã Quảng Thanh	xa-quang-thanh	20.9712779	106.6085003	Xã	311	\N	\N
11509	Xã Chính Mỹ	xa-chinh-my	20.9695143	106.6261831	Xã	311	\N	\N
11512	Xã Kênh Giang	xa-kenh-giang	20.958788	106.6468148	Xã	311	\N	\N
11515	Xã Hợp Thành	xa-hop-thanh	20.951934	106.5996595	Xã	311	\N	\N
11518	Xã Cao Nhân	xa-cao-nhan	20.930243	106.6143944	Xã	311	\N	\N
11521	Xã Mỹ Đồng	xa-my-dong	20.9384456	106.6335513	Xã	311	\N	\N
11524	Xã Đông Sơn	xa-dong-son	20.9376842	106.6556575	Xã	311	\N	\N
11527	Xã Hoà Bình	xa-hoa-binh	20.93719	106.6776624	Xã	311	\N	\N
11530	Xã Trung Hà	xa-trung-ha	20.9284882	106.7042991	Xã	311	\N	\N
11533	Xã An Lư	xa-an-lu	20.9040875	106.702825	Xã	311	\N	\N
11536	Xã Thuỷ Triều	xa-thuy-trieu	20.8798049	106.7146184	Xã	311	\N	\N
11539	Xã Ngũ Lão	xa-ngu-lao	20.9421557	106.7264125	Xã	311	\N	\N
11542	Xã Phục Lễ	xa-phuc-le	20.9288294	106.7441048	Xã	311	\N	\N
11545	Xã Tam Hưng	xa-tam-hung	20.9328273	106.7617984	Xã	311	\N	\N
11548	Xã Phả Lễ	xa-pha-le	20.9045454	106.7559004	Xã	311	\N	\N
11551	Xã Lập Lễ	xa-lap-le	20.8915867	106.7411559	Xã	311	\N	\N
11554	Xã Kiền Bái	xa-kien-bai	20.9169263	106.6320777	Xã	311	\N	\N
11557	Xã Thiên Hương	xa-thien-huong	20.9151636	106.6497623	Xã	311	\N	\N
11560	Xã Thuỷ Sơn	xa-thuy-son	20.9178787	106.6659746	Xã	311	\N	\N
11563	Xã Thuỷ Đường	xa-thuy-duong	20.9174087	106.685136	Xã	311	\N	\N
11566	Xã Hoàng Động	xa-hoang-dong	20.893816	106.6320777	Xã	311	\N	\N
11569	Xã Lâm Động	xa-lam-dong	20.8920549	106.6497623	Xã	311	\N	\N
11572	Xã Hoa Động	xa-hoa-dong	20.8908798	106.6615529	Xã	311	\N	\N
11575	Xã Tân Dương	xa-tan-duong	20.8775625	106.67924	Xã	311	\N	\N
11578	Xã Dương Quan	xa-duong-quan	20.8847554	106.6939803	Xã	311	\N	\N
11581	Thị trấn An Dương	thi-tran-an-duong	20.8624991	106.6129209	Thị trấn	312	\N	\N
11584	Xã Lê Thiện	xa-le-thien	20.9309051	106.5495683	Xã	312	\N	\N
11587	Xã Đại Bản	xa-dai-ban	20.9273956	106.5849256	Xã	312	\N	\N
11590	Xã An Hoà	xa-an-hoa	20.8904493	106.5495683	Xã	312	\N	\N
11593	Xã Hồng Phong	xa-hong-phong	20.8861009	106.5642998	Xã	312	\N	\N
11596	Xã Tân Tiến	xa-tan-tien	20.8923339	106.587703	Xã	312	\N	\N
11599	Xã An Hưng	xa-an-hung	20.9036959	106.590819	Xã	312	\N	\N
11602	Xã An Hồng	xa-an-hong	20.9160911	106.6114474	Xã	312	\N	\N
11605	Xã Bắc Sơn	xa-bac-son	20.874804	106.590819	Xã	312	\N	\N
11608	Xã Nam Sơn	xa-nam-son	18.9099528	105.2590727	Xã	312	\N	\N
11611	Xã Lê Lợi	xa-le-loi	20.8580534	106.5849256	Xã	312	\N	\N
11614	Xã Đặng Cương	xa-dang-cuong	20.8499379	106.6085003	Xã	312	\N	\N
11617	Xã Đồng Thái	xa-dong-thai	20.8497947	106.6290383	Xã	312	\N	\N
11620	Xã Quốc Tuấn	xa-quoc-tuan	20.8343567	106.590819	Xã	312	\N	\N
11623	Xã An Đồng	xa-an-dong	20.8579794	106.6438673	Xã	312	\N	\N
11626	Xã Hồng Thái	xa-hong-thai	20.8340318	106.6232359	Xã	312	\N	\N
11629	Thị trấn An Lão	thi-tran-an-lao	20.8223995	106.5510414	Thị trấn	313	\N	\N
11632	Xã Bát Trang	xa-bat-trang	20.8445253	106.5171626	Xã	313	\N	\N
11635	Xã Trường Thọ	xa-truong-tho	20.8453802	106.5377839	Xã	313	\N	\N
11638	Xã Trường Thành	xa-truong-thanh	20.8436337	106.5554608	Xã	313	\N	\N
11641	Xã An Tiến	xa-an-tien	20.8309111	106.5672462	Xã	313	\N	\N
11644	Xã Quang Hưng	xa-quang-hung	20.8309468	106.5083256	Xã	313	\N	\N
11647	Xã Quang Trung	xa-quang-trung	20.7982885	106.5171626	Xã	313	\N	\N
11650	Xã Quốc Tuấn	xa-quoc-tuan	20.807525	106.5407299	Xã	313	\N	\N
11653	Xã An Thắng	xa-an-thang	20.8187715	106.5731392	Xã	313	\N	\N
11656	Thị trấn Trường Sơn	thi-tran-truong-son	20.8164393	106.5967126	Thị trấn	313	\N	\N
11659	Xã Tân Dân	xa-tan-dan	20.8040346	106.5760857	Xã	313	\N	\N
11662	Xã Thái Sơn	xa-thai-son	20.7875505	106.5967126	Xã	313	\N	\N
11665	Xã Tân Viên	xa-tan-vien	20.7794868	106.5613534	Xã	313	\N	\N
11668	Xã Mỹ Đức	xa-my-duc	20.7650224	106.590819	Xã	313	\N	\N
11671	Xã Chiến Thắng	xa-chien-thang	20.7552116	106.5731392	Xã	313	\N	\N
11674	Xã An Thọ	xa-an-tho	20.7407484	106.6026064	Xã	313	\N	\N
11677	Xã An Thái	xa-an-thai	20.7563321	106.6202887	Xã	313	\N	\N
11680	Thị trấn Núi Đối	thi-tran-nui-doi	20.7526658	106.6718702	Thị trấn	314	\N	\N
11683	Phường Đa Phúc	phuong-da-phuc	20.803645	106.6674484	Phường	309	\N	\N
11686	Phường Hưng Đạo	phuong-hung-dao	20.7966965	106.67924	Phường	309	\N	\N
11689	Phường Anh Dũng	phuong-anh-dung	20.8001248	106.702825	Phường	309	\N	\N
11692	Phường Hải Thành	phuong-hai-thanh	20.7862238	106.7264125	Phường	309	\N	\N
11695	Xã Đông Phương	xa-dong-phuong	20.7799548	106.6733441	Xã	314	\N	\N
11698	Xã Thuận Thiên	xa-thuan-thien	20.7719118	106.6379724	Xã	314	\N	\N
11701	Xã Hữu Bằng	xa-huu-bang	20.7637974	106.6615529	Xã	314	\N	\N
11704	Xã Đại Đồng	xa-dai-dong	20.7724211	106.6910322	Xã	314	\N	\N
11707	Phường Hoà Nghĩa	phuong-hoa-nghia	20.7668933	106.7175669	Phường	309	\N	\N
11710	Xã Ngũ Phúc	xa-ngu-phuc	20.7274478	106.6202887	Xã	314	\N	\N
11713	Xã Kiến Quốc	xa-kien-quoc	20.7277128	106.6468148	Xã	314	\N	\N
11716	Xã Du Lễ	xa-du-le	20.7430289	106.6379724	Xã	314	\N	\N
11719	Xã Thuỵ Hương	xa-thuy-huong	20.7412775	106.6556575	Xã	314	\N	\N
11722	Xã Thanh Sơn	xa-thanh-son	20.7442945	106.6689224	Xã	314	\N	\N
11725	Xã Minh Tân	xa-minh-tan	20.7550948	106.6910322	Xã	314	\N	\N
11728	Xã Đại Hà	xa-dai-ha	20.7227815	106.6674484	Xã	314	\N	\N
11731	Xã Ngũ Đoan	xa-ngu-doan	20.7268033	106.685136	Xã	314	\N	\N
11734	Xã Tân Phong	xa-tan-phong	20.7360113	106.7087216	Xã	314	\N	\N
11737	Phường Hợp Đức	phuong-hop-duc	20.7452139	106.7323097	Phường	308	\N	\N
11740	Phường Tân Thành	phuong-tan-thanh	20.7494887	106.756302	Phường	309	\N	\N
11743	Xã Tân Trào	xa-tan-trao	20.703442	106.6586052	Xã	314	\N	\N
11746	Xã Đoàn Xá	xa-doan-xa	20.7025329	106.6969285	Xã	314	\N	\N
11749	Xã Tú Sơn	xa-tu-son	20.7206953	106.7175669	Xã	314	\N	\N
11752	Xã Đại Hợp	xa-dai-hop	20.6860484	106.7175669	Xã	314	\N	\N
11755	Thị trấn Tiên Lãng	thi-tran-tien-lang	20.7274827	106.5613534	Thị trấn	315	\N	\N
11758	Xã Đại Thắng	xa-dai-thang	20.7910679	106.5024344	Xã	315	\N	\N
11761	Xã Tiên Cường	xa-tien-cuong	20.7725709	106.5142169	Xã	315	\N	\N
11764	Xã Tự Cường	xa-tu-cuong	20.7760311	106.5377839	Xã	315	\N	\N
11767	Xã Tiên Tiến	xa-tien-tien	20.7529158	106.5377839	Xã	315	\N	\N
11770	Xã Quyết Tiến	xa-quyet-tien	20.7453974	106.5554608	Xã	315	\N	\N
11773	Xã Khởi Nghĩa	xa-khoi-nghia	20.7330035	106.5280264	Xã	315	\N	\N
11776	Xã Tiên Thanh	xa-tien-thanh	20.7188228	106.5318919	Xã	315	\N	\N
11779	Xã Cấp Tiến	xa-cap-tien	20.7092685	106.5427554	Xã	315	\N	\N
11782	Xã Kiến Thiết	xa-kien-thiet	20.6893277	106.5355548	Xã	315	\N	\N
11785	Xã Đoàn Lập	xa-doan-lap	20.6968032	106.5642131	Xã	315	\N	\N
11788	Xã Bạch Đằng	xa-bach-dang	20.7085848	106.5671541	Xã	315	\N	\N
11791	Xã Quang Phục	xa-quang-phuc	20.7233978	106.5713558	Xã	315	\N	\N
11794	Xã Toàn Thắng	xa-toan-thang	20.7060856	106.6026064	Xã	315	\N	\N
11797	Xã Tiên Thắng	xa-tien-thang	20.6942212	106.635025	Xã	315	\N	\N
11800	Xã Tiên Minh	xa-tien-minh	20.6746027	106.5996595	Xã	315	\N	\N
11803	Xã Bắc Hưng	xa-bac-hung	20.6656664	106.6345309	Xã	315	\N	\N
11806	Xã Nam Hưng	xa-nam-hung	20.6621729	106.6352836	Xã	315	\N	\N
11809	Xã Hùng Thắng	xa-hung-thang	20.6699952	106.6603951	Xã	315	\N	\N
11812	Xã Tây Hưng	xa-tay-hung	20.6531739	106.6213281	Xã	315	\N	\N
11815	Xã Đông Hưng	xa-dong-hung	20.6438543	106.6396251	Xã	315	\N	\N
11818	Xã Tiên Hưng	xa-tien-hung	20.6318064	106.682188	Xã	315	\N	\N
11821	Xã Vinh Quang	xa-vinh-quang	20.659295	106.4906526	Xã	315	\N	\N
11824	Thị trấn Vĩnh Bảo	thi-tran-vinh-bao	20.6951233	106.4788714	Thị trấn	316	\N	\N
11827	Xã Dũng Tiến	xa-dung-tien	20.7439632	106.4818167	Xã	316	\N	\N
11830	Xã Giang Biên	xa-giang-bien	20.7450877	106.5007943	Xã	316	\N	\N
11833	Xã Thắng Thuỷ	xa-thang-thuy	20.7266003	106.4229199	Xã	316	\N	\N
11836	Xã Trung Lập	xa-trung-lap	20.7141908	106.4612009	Xã	316	\N	\N
11839	Xã Việt Tiến	xa-viet-tien	20.869719	106.678911	Xã	316	\N	\N
11842	Xã Vĩnh An	xa-vinh-an	20.7185351	106.50538	Xã	316	\N	\N
11845	Xã Vĩnh Long	xa-vinh-long	20.7066537	106.4199755	Xã	316	\N	\N
11848	Xã Hiệp Hoà	xa-hiep-hoa	20.6950917	106.4199755	Xã	316	\N	\N
11851	Xã Hùng Tiến	xa-hung-tien	20.6927952	106.4435319	Xã	316	\N	\N
11854	Xã An Hoà	xa-an-hoa	20.676602	106.4317533	Xã	316	\N	\N
11857	Xã Tân Hưng	xa-tan-hung	20.6769079	106.458256	Xã	316	\N	\N
11860	Xã Tân Liên	xa-tan-lien	20.7006089	106.4952207	Xã	316	\N	\N
11863	Xã Nhân Hoà	xa-nhan-hoa	20.6720049	106.4788714	Xã	316	\N	\N
11866	Xã Tam Đa	xa-tam-da	20.6754801	106.5024344	Xã	316	\N	\N
11869	Xã Hưng Nhân	xa-hung-nhan	20.6627452	106.4553111	Xã	316	\N	\N
11872	Xã Vinh Quang	xa-vinh-quang	20.659295	106.4906526	Xã	316	\N	\N
11875	Xã Đồng Minh	xa-dong-minh	20.6500367	106.4670909	Xã	316	\N	\N
11878	Xã Thanh Lương	xa-thanh-luong	20.6419577	106.4906526	Xã	316	\N	\N
11881	Xã Liên Am	xa-lien-am	20.6506353	106.5201084	Xã	316	\N	\N
11884	Xã Lý Học	xa-ly-hoc	20.6604606	106.5377839	Xã	316	\N	\N
11887	Xã Tam Cường	xa-tam-cuong	20.6200144	106.5377839	Xã	316	\N	\N
11890	Xã Hoà Bình	xa-hoa-binh	20.657017	106.5493483	Xã	316	\N	\N
11893	Xã Tiền Phong	xa-tien-phong	20.6269185	106.4670909	Xã	316	\N	\N
11896	Xã Vĩnh Phong	xa-vinh-phong	20.6084326	106.4788714	Xã	316	\N	\N
11899	Xã Cộng Hiền	xa-cong-hien	20.6896375	106.492846	Xã	316	\N	\N
11902	Xã Cao Minh	xa-cao-minh	20.6467786	106.514309	Xã	316	\N	\N
11905	Xã Cổ Am	xa-co-am	20.6389562	106.5458739	Xã	316	\N	\N
11908	Xã Vĩnh Tiến	xa-vinh-tien	20.6334494	106.5628266	Xã	316	\N	\N
11911	Xã Trấn Dương	xa-tran-duong	20.6448862	106.5690957	Xã	316	\N	\N
11914	Thị trấn Cát Bà	thi-tran-cat-ba	20.7145633	107.0657549	Thị trấn	317	\N	\N
11917	Thị trấn Cát Hải	thi-tran-cat-hai	20.8037051	106.8974964	Thị trấn	317	\N	\N
11920	Xã Nghĩa Lộ	xa-nghia-lo	14.058324	108.277199	Xã	317	\N	\N
11923	Xã Đồng Bài	xa-dong-bai	14.058324	108.277199	Xã	317	\N	\N
11926	Xã Hoàng Châu	xa-hoang-chau	20.8012839	106.8355372	Xã	317	\N	\N
11929	Xã Văn Phong	xa-van-phong	20.7951349	106.8679899	Xã	317	\N	\N
11932	Xã Phù Long	xa-phu-long	20.8212213	106.9240554	Xã	317	\N	\N
11935	Xã Gia Luận	xa-gia-luan	20.8371213	106.9948945	Xã	317	\N	\N
11938	Xã Hiền Hào	xa-hien-hao	20.7907769	106.9683273	Xã	317	\N	\N
11941	Xã Trân Châu	xa-tran-chau	20.7718666	107.0126076	Xã	317	\N	\N
11944	Xã Việt Hải	xa-viet-hai	20.7837675	107.0657549	Xã	317	\N	\N
11947	Xã Xuân Đám	xa-xuan-dam	20.7511858	106.9889904	Xã	317	\N	\N
11950	Phường Lam Sơn	phuong-lam-son	20.6734662	106.0434449	Phường	323	\N	\N
11953	Phường Hiến Nam	phuong-hien-nam	20.6565701	106.0537311	Phường	323	\N	\N
11956	Phường An Tảo	phuong-an-tao	20.6770196	106.0669571	Phường	323	\N	\N
11959	Phường Lê Lợi	phuong-le-loi	20.654425	106.0610787	Phường	323	\N	\N
11962	Phường Minh Khai	phuong-minh-khai	20.6461088	106.0419754	Phường	323	\N	\N
11965	Phường Quang Trung	phuong-quang-trung	20.6452283	106.0588744	Phường	323	\N	\N
11968	Phường Hồng Châu	phuong-hong-chau	20.6397625	106.0478532	Phường	323	\N	\N
11971	Xã Trung Nghĩa	xa-trung-nghia	20.6785147	106.0816536	Xã	323	\N	\N
11974	Xã Liên Phương	xa-lien-phuong	20.6527483	106.0787142	Xã	323	\N	\N
11977	Xã Hồng Nam	xa-hong-nam	20.6295966	106.0787142	Xã	323	\N	\N
11980	Xã Quảng Châu	xa-quang-chau	20.6228684	106.0581397	Xã	323	\N	\N
11983	Xã Bảo Khê	xa-bao-khe	20.7019889	106.0590076	Xã	323	\N	\N
11986	Thị trấn Như Quỳnh	thi-tran-nhu-quynh	20.9885788	105.9876149	Thị trấn	325	\N	\N
11989	Xã Lạc Đạo	xa-lac-dao	20.9851968	106.022874	Xã	325	\N	\N
11992	Xã Chỉ Đạo	xa-chi-dao	20.9861155	106.0434449	Xã	325	\N	\N
11995	Xã Đại Đồng	xa-dai-dong	20.9941346	106.08398	Xã	325	\N	\N
11998	Xã Việt Hưng	xa-viet-hung	20.9746639	105.990386	Xã	325	\N	\N
12001	Xã Tân Quang	xa-tan-quang	20.9806344	105.9752584	Xã	325	\N	\N
12004	Xã Đình Dù	xa-dinh-du	20.9693225	105.9932339	Xã	325	\N	\N
12007	Xã Minh Hải	xa-minh-hai	20.9654784	106.0511635	Xã	325	\N	\N
12010	Xã Lương Tài	xa-luong-tai	20.9729603	106.1198699	Xã	325	\N	\N
12013	Xã Trưng Trắc	xa-trung-trac	20.9529705	106.0055552	Xã	325	\N	\N
12016	Xã Lạc Hồng	xa-lac-hong	20.9573127	106.0129585	Xã	325	\N	\N
12019	Thị trấn Văn Giang	thi-tran-van-giang	20.9394443	105.9259271	Thị trấn	326	\N	\N
12022	Xã Xuân Quan	xa-xuan-quan	20.9689691	105.9200531	Xã	326	\N	\N
12025	Xã Cửu Cao	xa-cuu-cao	20.9571284	105.9506142	Xã	326	\N	\N
12028	Xã Phụng Công	xa-phung-cong	20.9568231	105.9259271	Xã	326	\N	\N
12031	Xã Nghĩa Trụ	xa-nghia-tru	20.9550671	105.9880257	Xã	326	\N	\N
12034	Xã Long Hưng	xa-long-hung	20.9422527	105.9574659	Xã	326	\N	\N
12037	Xã Vĩnh Khúc	xa-vinh-khuc	20.9379862	106.0020617	Xã	326	\N	\N
12040	Xã Liên Nghĩa	xa-lien-nghia	20.9209205	105.927979	Xã	326	\N	\N
12043	Xã Tân Tiến	xa-tan-tien	20.9203014	105.9618272	Xã	326	\N	\N
12046	Xã Thắng Lợi	xa-thang-loi	20.9037094	105.9019699	Xã	326	\N	\N
12049	Xã Mễ Sở	xa-me-so	20.8988948	105.9259271	Xã	326	\N	\N
12052	Thị trấn Yên Mỹ	thi-tran-yen-my	20.8824514	106.0375673	Thị trấn	327	\N	\N
12055	Xã Giai Phạm	xa-giai-pham	20.935692	106.0258126	Xã	327	\N	\N
12058	Xã Nghĩa Hiệp	xa-nghia-hiep	20.9276465	106.0493226	Xã	327	\N	\N
12061	Xã Đồng Than	xa-dong-than	20.9136021	106.0050309	Xã	327	\N	\N
12064	Xã Ngọc Long	xa-ngoc-long	20.9145799	106.0346285	Xã	327	\N	\N
12067	Xã Liêu Xá	xa-lieu-xa	20.9155021	106.0552006	Xã	327	\N	\N
12070	Xã Hoàn Long	xa-hoan-long	20.8691219	106.0317358	Xã	327	\N	\N
12073	Xã Tân Lập	xa-tan-lap	20.8981321	106.0552006	Xã	327	\N	\N
12076	Xã Thanh Long	xa-thanh-long	20.8861904	106.0287512	Xã	327	\N	\N
12079	Xã Yên Phú	xa-yen-phu	20.89307	105.98707	Xã	327	\N	\N
12082	Xã Việt Cường	xa-viet-cuong	20.879643	106.004817	Xã	327	\N	\N
12085	Xã Trung Hòa	xa-trung-hoa	20.8775858	106.0581397	Xã	327	\N	\N
12088	Xã Yên Hòa	xa-yen-hoa	20.8666655	105.9908786	Xã	327	\N	\N
12091	Xã Minh Châu	xa-minh-chau	20.8626562	106.025078	Xã	327	\N	\N
12094	Xã Trung Hưng	xa-trung-hung	20.8714333	106.0316898	Xã	327	\N	\N
12097	Xã Lý Thường Kiệt	xa-ly-thuong-kiet	20.8535006	106.0375673	Xã	327	\N	\N
12100	Xã Tân Việt	xa-tan-viet	20.8601909	106.0639396	Xã	327	\N	\N
12103	Thị trấn Bần Yên Nhân	thi-tran-ban-yen-nhan	20.9455817	106.0434449	Thị trấn	328	\N	\N
12106	Xã Phan Đình Phùng	xa-phan-dinh-phung	20.963531	106.073354	Xã	328	\N	\N
12109	Xã Cẩm Xá	xa-cam-xa	20.9266773	106.110612	Xã	328	\N	\N
12112	Xã Dương Quang	xa-duong-quang	20.941405	106.1169299	Xã	328	\N	\N
12115	Xã Hòa Phong	xa-hoa-phong	20.9385856	106.1452097	Xã	328	\N	\N
12118	Xã Nhân Hòa	xa-nhan-hoa	20.9433227	106.0669571	Xã	328	\N	\N
12121	Xã Dị Sử	xa-di-su	20.930658	106.1103174	Xã	328	\N	\N
12124	Xã Bạch Sam	xa-bach-sam	20.915847	106.1070179	Xã	328	\N	\N
12127	Xã Minh Đức	xa-minh-duc	20.9194887	106.139539	Xã	328	\N	\N
12130	Xã Phùng Chí Kiên	xa-phung-chi-kien	20.9121135	106.0904721	Xã	328	\N	\N
12133	Xã Xuân Dục	xa-xuan-duc	20.9046273	106.1081103	Xã	328	\N	\N
12136	Xã Ngọc Lâm	xa-ngoc-lam	20.9055392	106.1286901	Xã	328	\N	\N
12139	Xã Hưng Long	xa-hung-long	20.8935609	106.0988328	Xã	328	\N	\N
12142	Thị trấn Ân Thi	thi-tran-an-thi	20.8047357	106.0934117	Thị trấn	329	\N	\N
12145	Xã Phù Ủng	xa-phu-ung	20.8830689	106.1441264	Xã	329	\N	\N
12148	Xã Bắc Sơn	xa-bac-son	20.8666958	106.0978102	Xã	329	\N	\N
12151	Xã Bãi Sậy	xa-bai-say	20.8592327	106.1286901	Xã	329	\N	\N
12154	Xã Đào Dương	xa-dao-duong	20.8501418	106.0910708	Xã	329	\N	\N
12157	Xã Tân Phúc	xa-tan-phuc	20.8461754	106.11399	Xã	329	\N	\N
12160	Xã Vân Du	xa-van-du	20.8457397	106.0763057	Xã	329	\N	\N
12163	Xã Quang Vinh	xa-quang-vinh	20.8310667	106.0904721	Xã	329	\N	\N
12166	Xã Xuân Trúc	xa-xuan-truc	20.8315143	106.0604185	Xã	329	\N	\N
12169	Xã Hoàng Hoa Thám	xa-hoang-hoa-tham	20.8099609	106.099291	Xã	329	\N	\N
12172	Xã Quảng Lãng	xa-quang-lang	20.8084394	106.0663277	Xã	329	\N	\N
12175	Xã Văn Nhuệ	xa-van-nhue	20.8151639	106.1275416	Xã	329	\N	\N
12178	Xã Đặng Lễ	xa-dang-le	20.7912186	106.0762864	Xã	329	\N	\N
12181	Xã Cẩm Ninh	xa-cam-ninh	20.7878083	106.0928303	Xã	329	\N	\N
12184	Xã Nguyễn Trãi	xa-nguyen-trai	20.7888564	106.1081103	Xã	329	\N	\N
12187	Xã Đa Lộc	xa-da-loc	20.8099609	106.099291	Xã	329	\N	\N
12190	Xã Hồ Tùng Mậu	xa-ho-tung-mau	20.766318	106.1144458	Xã	329	\N	\N
12193	Xã Tiền Phong	xa-tien-phong	20.762058	106.1430225	Xã	329	\N	\N
12196	Xã Hồng Vân	xa-hong-van	20.7505777	106.1137833	Xã	329	\N	\N
12199	Xã Hồng Quang	xa-hong-quang	20.7462917	106.1095834	Xã	329	\N	\N
12202	Xã Hạ Lễ	xa-ha-le	20.8099609	106.099291	Xã	329	\N	\N
12205	Thị trấn Khoái Châu	thi-tran-khoai-chau	20.8313956	105.9809964	Thị trấn	330	\N	\N
12208	Xã Đông Tảo	xa-dong-tao	20.8881447	105.9559637	Xã	330	\N	\N
12211	Xã Bình Minh	xa-binh-minh	20.8809586	105.9318012	Xã	330	\N	\N
12214	Xã Dạ Trạch	xa-da-trach	20.8619062	105.9494248	Xã	330	\N	\N
12217	Xã Hàm Tử	xa-ham-tu	20.8445304	105.9494248	Xã	330	\N	\N
12220	Xã Ông Đình	xa-ong-dinh	20.8549967	105.9611748	Xã	330	\N	\N
12223	Xã Tân Dân	xa-tan-dan	20.8633935	105.9831236	Xã	330	\N	\N
12226	Xã Tứ Dân	xa-tu-dan	20.8409696	105.9259271	Xã	330	\N	\N
12229	Xã An Vĩ	xa-an-vi	20.8401005	105.9705886	Xã	330	\N	\N
12232	Xã Đông Kết	xa-dong-ket	20.8219208	105.9435501	Xã	330	\N	\N
12235	Xã Bình Kiều	xa-binh-kieu	20.8204236	105.9699422	Xã	330	\N	\N
12238	Xã Dân Tiến	xa-dan-tien	20.8394965	106.0023054	Xã	330	\N	\N
12241	Xã Đồng Tiến	xa-dong-tien	20.8327581	106.01156	Xã	330	\N	\N
12244	Xã Hồng Tiến	xa-hong-tien	20.8332923	106.0124838	Xã	330	\N	\N
12247	Xã Tân Châu	xa-tan-chau	20.8178004	105.9259271	Xã	330	\N	\N
12250	Xã Liên Khê	xa-lien-khe	20.8012853	105.9626436	Xã	330	\N	\N
12253	Xã Phùng Hưng	xa-phung-hung	20.8039263	105.9919705	Xã	330	\N	\N
12256	Xã Việt Hòa	xa-viet-hoa	20.8105576	106.0199366	Xã	330	\N	\N
12259	Xã Đông Ninh	xa-dong-ninh	20.8030183	105.932729	Xã	330	\N	\N
12262	Xã Đại Tập	xa-dai-tap	20.790361	105.9525561	Xã	330	\N	\N
12265	Xã Chí Tân	xa-chi-tan	20.7830748	105.9714566	Xã	330	\N	\N
12268	Xã Đại Hưng	xa-dai-hung	20.7890479	105.9864443	Xã	330	\N	\N
12271	Xã Thuần Hưng	xa-thuan-hung	20.7771898	105.9907417	Xã	330	\N	\N
12274	Xã Thành Công	xa-thanh-cong	20.7692606	105.99496	Xã	330	\N	\N
12277	Xã Nhuế Dương	xa-nhue-duong	20.7615448	105.9872311	Xã	330	\N	\N
12280	Thị trấn Lương Bằng	thi-tran-luong-bang	20.7375195	106.0698963	Thị trấn	331	\N	\N
12283	Xã Nghĩa Dân	xa-nghia-dan	20.7920448	106.0559	Xã	331	\N	\N
12286	Xã Toàn Thắng	xa-toan-thang	20.7908421	106.0469045	Xã	331	\N	\N
12289	Xã Vĩnh Xá	xa-vinh-xa	20.7779393	106.024153	Xã	331	\N	\N
12292	Xã Phạm Ngũ Lão	xa-pham-ngu-lao	20.7500133	106.0098955	Xã	331	\N	\N
12295	Xã Thọ Vinh	xa-tho-vinh	20.75408	105.9852278	Xã	331	\N	\N
12298	Xã Đồng Thanh	xa-dong-thanh	20.7543752	106.0275279	Xã	331	\N	\N
12301	Xã Song Mai	xa-song-mai	20.7338975	106.052676	Xã	331	\N	\N
12304	Xã Chính Nghĩa	xa-chinh-nghia	20.7505446	106.0670489	Xã	331	\N	\N
12307	Xã Nhân La	xa-nhan-la	20.7548841	106.0818375	Xã	331	\N	\N
12310	Xã Phú Thịnh	xa-phu-thinh	20.7459453	105.9797136	Xã	331	\N	\N
12313	Xã Mai Động	xa-mai-dong	20.7357515	105.9821409	Xã	331	\N	\N
12316	Xã Đức Hợp	xa-duc-hop	20.7257543	105.9935423	Xã	331	\N	\N
12319	Xã Hùng An	xa-hung-an	20.7315361	106.0111203	Xã	331	\N	\N
12322	Xã Ngọc Thanh	xa-ngoc-thanh	20.7418718	106.071194	Xã	331	\N	\N
12325	Xã Vũ Xá	xa-vu-xa	20.7406558	106.0921172	Xã	331	\N	\N
12328	Xã Hiệp Cường	xa-hiep-cuong	20.7325839	106.0566759	Xã	331	\N	\N
12331	Xã Phú Cường	xa-phu-cuong	20.6895696	106.033894	Xã	323	\N	\N
12334	Xã Hùng Cường	xa-hung-cuong	20.6930467	106.037323	Xã	323	\N	\N
12337	Thị trấn Vương	thi-tran-vuong	20.7048326	106.12428	Thị trấn	332	\N	\N
12340	Xã Hưng Đạo	xa-hung-dao	20.7196705	106.102035	Xã	332	\N	\N
12343	Xã Ngô Quyền	xa-ngo-quyen	20.7098758	106.1169299	Xã	332	\N	\N
12346	Xã Nhật Tân	xa-nhat-tan	20.6979325	106.0904721	Xã	332	\N	\N
12349	Xã Dị Chế	xa-di-che	20.6918204	106.127137	Xã	332	\N	\N
12352	Xã Lệ Xá	xa-le-xa	20.6956689	106.159564	Xã	332	\N	\N
12355	Xã An Viên	xa-an-vien	20.6794474	106.1022307	Xã	332	\N	\N
12358	Xã Đức Thắng	xa-duc-thang	20.6858491	106.1447826	Xã	332	\N	\N
12361	Xã Trung Dũng	xa-trung-dung	20.65	106.0666667	Xã	332	\N	\N
12364	Xã Hải Triều	xa-hai-trieu	20.6663471	106.1318055	Xã	332	\N	\N
12367	Xã Thủ Sỹ	xa-thu-sy	20.6568572	106.0963513	Xã	332	\N	\N
12370	Xã Thiện Phiến	xa-thien-phien	20.6551762	106.11399	Xã	332	\N	\N
12373	Xã Thụy Lôi	xa-thuy-loi	20.6617939	106.1507424	Xã	332	\N	\N
12376	Xã Cương Chính	xa-cuong-chinh	20.6722161	106.1792933	Xã	332	\N	\N
12379	Xã Minh Phương	xa-minh-phuong	20.6708334	106.1772083	Xã	332	\N	\N
12382	Xã Phương Chiểu	xa-phuong-chieu	20.6419204	106.0860628	Xã	323	\N	\N
12385	Xã Tân Hưng	xa-tan-hung	20.6297334	106.100862	Xã	323	\N	\N
12388	Xã Hoàng Hanh	xa-hoang-hanh	20.6308502	106.0641333	Xã	323	\N	\N
12391	Thị trấn Trần Cao	thi-tran-tran-cao	20.7415735	106.1786787	Thị trấn	333	\N	\N
12394	Xã Minh Tân	xa-minh-tan	20.7663649	106.168296	Xã	333	\N	\N
12397	Xã Phan Sào Nam	xa-phan-sao-nam	20.7548418	106.1610343	Xã	333	\N	\N
12400	Xã Quang Hưng	xa-quang-hung	20.7083369	106.1933837	Xã	333	\N	\N
12403	Xã Minh Hoàng	xa-minh-hoang	20.7295455	106.1338413	Xã	333	\N	\N
12406	Xã Đoàn Đào	xa-doan-dao	20.7129052	106.1480946	Xã	333	\N	\N
12409	Xã Tống Phan	xa-tong-phan	20.7109085	106.1984416	Xã	333	\N	\N
12412	Xã Đình Cao	xa-dinh-cao	20.7041387	106.1919131	Xã	333	\N	\N
12415	Xã Nhật Quang	xa-nhat-quang	20.7112027	106.2172466	Xã	333	\N	\N
12418	Xã Tiền Tiến	xa-tien-tien	20.6777137	106.2110311	Xã	333	\N	\N
12421	Xã Tam Đa	xa-tam-da	20.6926182	106.2384335	Xã	333	\N	\N
12424	Xã Minh Tiến	xa-minh-tien	20.6777137	106.2110311	Xã	333	\N	\N
12427	Xã Nguyên Hòa	xa-nguyen-hoa	20.6518164	106.2096285	Xã	333	\N	\N
12430	Xã Tống Trân	xa-tong-tran	20.6577475	106.2080897	Xã	333	\N	\N
12433	Phường Lê Hồng Phong	phuong-le-hong-phong	20.451534	106.3456432	Phường	336	\N	\N
12436	Phường Bồ Xuyên	phuong-bo-xuyen	20.4555003	106.3419641	Phường	336	\N	\N
12439	Phường Đề Thám	phuong-de-tham	20.4464594	106.3382851	Phường	336	\N	\N
12442	Phường Kỳ Bá	phuong-ky-ba	20.4418034	106.3425334	Phường	336	\N	\N
12445	Phường Quang Trung	phuong-quang-trung	20.4373541	106.3319534	Phường	336	\N	\N
12448	Phường Phú Khánh	phuong-phu-khanh	20.4384961	106.3123186	Phường	336	\N	\N
12451	Phường Tiền Phong	phuong-tien-phong	20.4544845	106.334125	Phường	336	\N	\N
12452	Phường Trần Hưng Đạo	phuong-tran-hung-dao	20.4433745	106.3273492	Phường	336	\N	\N
12454	Phường Trần Lãm	phuong-tran-lam	20.4415905	106.3561327	Phường	336	\N	\N
12457	Xã Đông Hòa	xa-dong-hoa	20.4800306	106.3495193	Xã	336	\N	\N
12460	Phường Hoàng Diệu	phuong-hoang-dieu	20.4670122	106.3587079	Phường	336	\N	\N
12463	Xã Phú Xuân	xa-phu-xuan	20.4549191	106.3257257	Xã	336	\N	\N
12466	Xã Vũ Phúc	xa-vu-phuc	20.4134629	106.32361	Xã	336	\N	\N
12469	Xã Vũ Chính	xa-vu-chinh	20.4278977	106.3554272	Xã	336	\N	\N
12472	Thị trấn Quỳnh Côi	thi-tran-quynh-coi	20.6524901	106.3272326	Thị trấn	338	\N	\N
12475	Xã An Khê	xa-an-khe	14.058324	108.277199	Xã	338	\N	\N
12478	Xã An Đồng	xa-an-dong	20.698937	106.387406	Xã	338	\N	\N
12481	Xã Quỳnh Hoa	xa-quynh-hoa	20.6946291	106.3234413	Xã	338	\N	\N
12484	Xã Quỳnh Lâm	xa-quynh-lam	20.6925806	106.2669247	Xã	338	\N	\N
12487	Xã Quỳnh Thọ	xa-quynh-tho	20.6898244	106.3552092	Xã	338	\N	\N
12490	Xã An Hiệp	xa-an-hiep	14.058324	108.277199	Xã	338	\N	\N
12493	Xã Quỳnh Hoàng	xa-quynh-hoang	14.058324	108.277199	Xã	338	\N	\N
12496	Xã Quỳnh Giao	xa-quynh-giao	20.6871409	106.3078328	Xã	338	\N	\N
12499	Xã An Thái	xa-an-thai	20.6552436	106.3256729	Xã	338	\N	\N
12502	Xã An Cầu	xa-an-cau	20.6692335	106.3931774	Xã	338	\N	\N
12505	Xã Quỳnh Hồng	xa-quynh-hong	20.6635407	106.3265687	Xã	338	\N	\N
12508	Xã Quỳnh Khê	xa-quynh-khe	14.058324	108.277199	Xã	338	\N	\N
12511	Xã Quỳnh Minh	xa-quynh-minh	20.6591201	106.3270644	Xã	338	\N	\N
12514	Xã An Ninh	xa-an-ninh	20.6605115	106.4140838	Xã	338	\N	\N
12517	Xã Quỳnh Ngọc	xa-quynh-ngoc	20.6533832	106.2705946	Xã	338	\N	\N
12520	Xã Quỳnh Hải	xa-quynh-hai	20.5390051	106.3931666	Xã	338	\N	\N
12523	Thị trấn An Bài	thi-tran-an-bai	20.6559277	106.3259188	Thị trấn	338	\N	\N
12526	Xã An Ấp	xa-an-ap	20.6488987	106.3762164	Xã	338	\N	\N
12529	Xã Quỳnh Hội	xa-quynh-hoi	20.6552436	106.3256729	Xã	338	\N	\N
12532	Xã Quỳnh Sơn	xa-quynh-son	14.058324	108.277199	Xã	338	\N	\N
12535	Xã Quỳnh Mỹ	xa-quynh-my	20.6591201	106.3270644	Xã	338	\N	\N
12538	Xã An Quí	xa-an-qui	20.6477642	106.3904858	Xã	338	\N	\N
12541	Xã An Thanh	xa-an-thanh	20.6359238	106.4424526	Xã	338	\N	\N
12544	Xã Quỳnh Châu	xa-quynh-chau	20.6446074	106.2845785	Xã	338	\N	\N
12547	Xã An Vũ	xa-an-vu	14.058324	108.277199	Xã	338	\N	\N
12550	Xã An Lễ	xa-an-le	20.628581	106.3905338	Xã	338	\N	\N
12553	Xã Quỳnh Hưng	xa-quynh-hung	14.058324	108.277199	Xã	338	\N	\N
12556	Xã Quỳnh Bảo	xa-quynh-bao	20.6241159	106.3190136	Xã	338	\N	\N
12559	Xã An Mỹ	xa-an-my	14.058324	108.277199	Xã	338	\N	\N
12562	Xã Quỳnh Nguyên	xa-quynh-nguyen	20.628537	106.3019997	Xã	338	\N	\N
12565	Xã An Vinh	xa-an-vinh	20.6187301	106.3728707	Xã	338	\N	\N
12568	Xã Quỳnh Xá	xa-quynh-xa	20.6210088	106.3493224	Xã	338	\N	\N
12571	Xã An Dục	xa-an-duc	14.058324	108.277199	Xã	338	\N	\N
12574	Xã Đông Hải	xa-dong-hai	20.6008161	106.3787583	Xã	338	\N	\N
12577	Xã Quỳnh Trang	xa-quynh-trang	20.6559277	106.3259188	Xã	338	\N	\N
12580	Xã An Tràng	xa-an-trang	20.6008507	106.4065832	Xã	338	\N	\N
12583	Xã Đồng Tiến	xa-dong-tien	20.5835461	106.4376425	Xã	338	\N	\N
12586	Thị trấn Hưng Hà	thi-tran-hung-ha	20.5929854	106.2198553	Thị trấn	339	\N	\N
12589	Xã Điệp Nông	xa-diep-nong	20.6549225	106.237505	Xã	339	\N	\N
12592	Xã Tân Lễ	xa-tan-le	20.6497575	106.140451	Xã	339	\N	\N
12595	Xã Cộng Hòa	xa-cong-hoa	20.6426464	106.1845606	Xã	339	\N	\N
12598	Xã Dân Chủ	xa-dan-chu	20.6463079	106.2669247	Xã	339	\N	\N
12601	Xã Canh Tân	xa-canh-tan	20.6396734	106.1551531	Xã	339	\N	\N
12604	Xã Hòa Tiến	xa-hoa-tien	20.6299489	106.1963248	Xã	339	\N	\N
12607	Xã Hùng Dũng	xa-hung-dung	20.6306538	106.2492724	Xã	339	\N	\N
12610	Xã Tân Tiến	xa-tan-tien	20.6224728	106.2139724	Xã	339	\N	\N
12613	Thị trấn Hưng Nhân	thi-tran-hung-nhan	20.617651	106.1433913	Thị trấn	339	\N	\N
12616	Xã Đoan Hùng	xa-doan-hung	20.6207801	106.2316216	Xã	339	\N	\N
12619	Xã Duyên Hải	xa-duyen-hai	20.6341738	106.2728091	Xã	339	\N	\N
12622	Xã Tân Hòa	xa-tan-hoa	20.6275391	106.1610343	Xã	339	\N	\N
12625	Xã Văn Cẩm	xa-van-cam	20.6173888	106.2669247	Xã	339	\N	\N
12628	Xã Bắc Sơn	xa-bac-son	20.6151235	106.2904635	Xã	339	\N	\N
12631	Xã Đông Đô	xa-dong-do	20.6035571	106.2904635	Xã	339	\N	\N
12634	Xã Phúc Khánh	xa-phuc-khanh	20.6068078	106.1963248	Xã	339	\N	\N
12637	Xã Liên Hiệp	xa-lien-hiep	20.6106444	106.1713267	Xã	339	\N	\N
12640	Xã Tây Đô	xa-tay-do	20.593123	106.2786937	Xã	339	\N	\N
12643	Xã Thống Nhất	xa-thong-nhat	20.602298	106.2433886	Xã	339	\N	\N
12646	Xã Tiến Đức	xa-tien-duc	20.5945058	106.1433913	Xã	339	\N	\N
12649	Xã Thái Hưng	xa-thai-hung	20.5917006	106.1727971	Xã	339	\N	\N
12652	Xã Thái Phương	xa-thai-phuong	20.5900148	106.1904426	Xã	339	\N	\N
12655	Xã Hòa Bình	xa-hoa-binh	20.5896006	106.2551563	Xã	339	\N	\N
12656	Xã Chi Lăng	xa-chi-lang	20.5763385	106.2728091	Xã	339	\N	\N
12658	Xã Minh Khai	xa-minh-khai	20.5797257	106.237505	Xã	339	\N	\N
12661	Xã Hồng An	xa-hong-an	20.5791998	106.1522126	Xã	339	\N	\N
12664	Xã Kim Chung	xa-kim-chung	20.5767576	106.2080897	Xã	339	\N	\N
12667	Xã Hồng Lĩnh	xa-hong-linh	20.5670299	106.2492724	Xã	339	\N	\N
12670	Xã Minh Tân	xa-minh-tan	20.567436	106.1845606	Xã	339	\N	\N
12673	Xã Văn Lang	xa-van-lang	20.564063	106.2198553	Xã	339	\N	\N
12676	Xã Độc Lập	xa-doc-lap	20.5495195	106.1904426	Xã	339	\N	\N
12679	Xã Chí Hòa	xa-chi-hoa	20.5366275	106.2345633	Xã	339	\N	\N
12682	Xã Minh Hòa	xa-minh-hoa	20.5388769	106.2110311	Xã	339	\N	\N
12685	Xã Hồng Minh	xa-hong-minh	20.5252582	106.2022072	Xã	339	\N	\N
12688	Thị trấn Đông Hưng	thi-tran-dong-hung	20.5494728	106.356681	Thị trấn	340	\N	\N
12691	Xã Đô Lương	xa-do-luong	20.6001542	106.3257768	Xã	340	\N	\N
12694	Xã Đông Phương	xa-dong-phuong	20.5875437	106.3964218	Xã	340	\N	\N
12697	Xã Liên Giang	xa-lien-giang	20.5868859	106.3434358	Xã	340	\N	\N
12700	Xã An Châu	xa-an-chau	20.5897242	106.314005	Xã	340	\N	\N
12703	Xã Đông Sơn	xa-dong-son	20.5808668	106.3758145	Xã	340	\N	\N
12706	Xã Đông Cường	xa-dong-cuong	20.5647448	106.4229199	Xã	340	\N	\N
12709	Xã Phú Lương	xa-phu-luong	20.5712429	106.3257768	Xã	340	\N	\N
12712	Xã Mê Linh	xa-me-linh	20.5729434	106.3081194	Xã	340	\N	\N
12715	Xã Lô Giang	xa-lo-giang	20.5578587	106.2845785	Xã	340	\N	\N
12718	Xã Đông La	xa-dong-la	20.567836	106.3610962	Xã	340	\N	\N
12721	Xã Minh Tân	xa-minh-tan	20.5568704	106.2750542	Xã	340	\N	\N
12724	Xã Đông Xá	xa-dong-xa	20.5644211	106.3964218	Xã	340	\N	\N
12727	Xã Chương Dương	xa-chuong-duong	20.544597	106.3022339	Xã	340	\N	\N
12730	Xã Nguyên Xá	xa-nguyen-xa	20.5521954	106.3434358	Xã	340	\N	\N
12733	Xã Phong Châu	xa-phong-chau	20.5538967	106.3257768	Xã	340	\N	\N
12736	Xã Hợp Tiến	xa-hop-tien	20.5569001	106.3095908	Xã	340	\N	\N
12739	Xã Hồng Việt	xa-hong-viet	20.5459414	106.2580983	Xã	340	\N	\N
12742	Xã Đông Hà	xa-dong-ha	20.5379349	106.3767494	Xã	340	\N	\N
12745	Xã Đông Giang	xa-dong-giang	20.5386283	106.3934777	Xã	340	\N	\N
12748	Xã Đông Kinh	xa-dong-kinh	20.5448002	106.4199755	Xã	340	\N	\N
12751	Xã Đông Hợp	xa-dong-hop	20.5439502	106.3579227	Xã	340	\N	\N
12754	Xã Thăng Long	xa-thang-long	20.5455532	106.2772226	Xã	340	\N	\N
12757	Xã Đông Các	xa-dong-cac	20.5365141	106.3680196	Xã	340	\N	\N
12760	Xã Phú Châu	xa-phu-chau	20.5359843	106.3316629	Xã	340	\N	\N
12763	Xã Hoa Lư	xa-hoa-lu	20.5322097	106.2847327	Xã	340	\N	\N
12766	Xã Minh Châu	xa-minh-chau	20.531901	106.314005	Xã	340	\N	\N
12769	Xã Đông Tân	xa-dong-tan	20.5326703	106.4258643	Xã	340	\N	\N
12772	Xã Đông Vinh	xa-dong-vinh	20.5245269	106.3905338	Xã	340	\N	\N
12775	Xã Đông Động	xa-dong-dong	20.5263478	106.356681	Xã	340	\N	\N
12778	Xã Hồng Châu	xa-hong-chau	20.5248542	106.2669247	Xã	340	\N	\N
12781	Xã Bạch Đằng	xa-bach-dang	20.521324	106.2433886	Xã	340	\N	\N
12784	Xã Trọng Quan	xa-trong-quan	20.5160314	106.3287199	Xã	340	\N	\N
12787	Xã Hoa Nam	xa-hoa-nam	20.5173791	106.2845785	Xã	340	\N	\N
12790	Xã Hồng Giang	xa-hong-giang	20.5069416	106.2728091	Xã	340	\N	\N
12793	Xã Đông Phong	xa-dong-phong	20.5122781	106.4126147	Xã	340	\N	\N
12796	Xã Đông Quang	xa-dong-quang	20.5141176	106.3546085	Xã	340	\N	\N
12799	Xã Đông Xuân	xa-dong-xuan	20.5094572	106.3669834	Xã	340	\N	\N
12802	Xã Đông Á	xa-dong-a	20.4976631	106.3993658	Xã	340	\N	\N
12805	Xã Đông Lĩnh	xa-dong-linh	20.508982	106.4317533	Xã	340	\N	\N
12808	Xã Đông Hoàng	xa-dong-hoang	20.4961933	106.3846459	Xã	340	\N	\N
12811	Xã Đông Dương	xa-dong-duong	20.5059437	106.3434358	Xã	340	\N	\N
12814	Xã Đông Huy	xa-dong-huy	20.498238	106.4134582	Xã	340	\N	\N
12817	Xã Đông Mỹ	xa-dong-my	20.4921149	106.3669834	Xã	336	\N	\N
12820	Xã Đông Thọ	xa-dong-tho	20.4918552	106.3443466	Xã	336	\N	\N
12823	Xã Đồng Phú	xa-dong-phu	20.5156852	106.3022339	Xã	340	\N	\N
12826	Thị trấn Diêm Điền	thi-tran-diem-dien	20.5607683	106.5673279	Thị trấn	341	\N	\N
12829	Xã Thụy Tân	xa-thuy-tan	20.62579	106.5967126	Xã	341	\N	\N
12832	Xã Thụy Trường	xa-thuy-truong	20.6145177	106.6232359	Xã	341	\N	\N
12835	Xã Hồng Quỳnh	xa-hong-quynh	20.6182835	106.5554608	Xã	341	\N	\N
12838	Xã Thụy Dũng	xa-thuy-dung	20.6044186	106.5790323	Xã	341	\N	\N
12841	Xã Thụy Hồng	xa-thuy-hong	20.5997969	106.5672462	Xã	341	\N	\N
12844	Xã Thụy Quỳnh	xa-thuy-quynh	20.6021046	106.543676	Xã	341	\N	\N
12847	Xã Thụy An	xa-thuy-an	20.6032623	106.590819	Xã	341	\N	\N
12850	Xã Thụy Ninh	xa-thuy-ninh	20.5980217	106.4670909	Xã	341	\N	\N
12853	Xã Thụy Hưng	xa-thuy-hung	20.5893735	106.4965434	Xã	341	\N	\N
12856	Xã Thụy Việt	xa-thuy-viet	20.6029578	106.50538	Xã	341	\N	\N
12859	Xã Thụy Văn	xa-thuy-van	20.5870745	106.5201084	Xã	341	\N	\N
12862	Xã Thụy Xuân	xa-thuy-xuan	20.5899738	106.6085003	Xã	341	\N	\N
12865	Xã Thụy Dương	xa-thuy-duong	20.5703152	106.5142169	Xã	341	\N	\N
12868	Xã Thụy Trình	xa-thuy-trinh	20.5771723	106.5626973	Xã	341	\N	\N
12871	Xã Thụy Bình	xa-thuy-binh	20.5691656	106.5260001	Xã	341	\N	\N
12874	Xã Thụy Chính	xa-thuy-chinh	20.5754776	106.4612009	Xã	341	\N	\N
12877	Xã Thụy Dân	xa-thuy-dan	20.5737588	106.4788714	Xã	341	\N	\N
12880	Xã Thụy Hải	xa-thuy-hai	20.562827	106.590819	Xã	341	\N	\N
12883	Xã Thụy Phúc	xa-thuy-phuc	20.5704499	106.4980162	Xã	341	\N	\N
12886	Xã Thụy Lương	xa-thuy-luong	20.5755347	106.5790323	Xã	341	\N	\N
12889	Xã Thụy Liên	xa-thuy-lien	20.5570352	106.5318919	Xã	341	\N	\N
12892	Xã Thụy Duyên	xa-thuy-duyen	20.5639192	106.4612009	Xã	341	\N	\N
12895	Xã Thụy Hà	xa-thuy-ha	20.5553093	106.5495683	Xã	341	\N	\N
12898	Xã Thụy Thanh	xa-thuy-thanh	20.5540762	106.4435319	Xã	341	\N	\N
12901	Xã Thụy Sơn	xa-thuy-son	20.5489245	106.4965434	Xã	341	\N	\N
12904	Xã Thụy Phong	xa-thuy-phong	20.5454376	106.4729811	Xã	341	\N	\N
12907	Xã Thái Thượng	xa-thai-thuong	20.5382754	106.5760857	Xã	341	\N	\N
12910	Xã Thái Nguyên	xa-thai-nguyen	21.4620992	105.9254979	Xã	341	\N	\N
12913	Xã Thái Thủy	xa-thai-thuy	20.5356476	106.5142169	Xã	341	\N	\N
12916	Xã Thái Dương	xa-thai-duong	20.5263845	106.4906526	Xã	341	\N	\N
12919	Xã Thái Giang	xa-thai-giang	20.5231353	106.451277	Xã	341	\N	\N
12922	Xã Thái Hòa	xa-thai-hoa	20.5142953	106.5554608	Xã	341	\N	\N
12925	Xã Thái Sơn	xa-thai-son	20.5176872	106.4612009	Xã	341	\N	\N
12928	Xã Thái Hồng	xa-thai-hong	20.5142556	106.4965434	Xã	341	\N	\N
12931	Xã Thái An	xa-thai-an	20.5170326	106.542203	Xã	341	\N	\N
12934	Xã Thái Phúc	xa-thai-phuc	20.5044156	106.4788714	Xã	341	\N	\N
12937	Xã Thái Hưng	xa-thai-hung	20.5119634	106.5201084	Xã	341	\N	\N
12940	Xã Thái Đô	xa-thai-do	20.4909141	106.5878723	Xã	341	\N	\N
12943	Xã Thái Xuyên	xa-thai-xuyen	20.5038908	106.543676	Xã	341	\N	\N
12946	Xã Thái Hà	xa-thai-ha	20.5000375	106.4533547	Xã	341	\N	\N
12949	Xã  Mỹ Lộc	xa-my-loc	20.4828109	106.5525145	Xã	341	\N	\N
12952	Xã Thái Tân	xa-thai-tan	20.4861198	106.5333649	Xã	341	\N	\N
12955	Xã Thái Thuần	xa-thai-thuan	20.4847939	106.5024344	Xã	341	\N	\N
12958	Xã Thái Học	xa-thai-hoc	20.4901548	106.5215813	Xã	341	\N	\N
12961	Xã Thái Thịnh	xa-thai-thinh	20.4778718	106.5142169	Xã	341	\N	\N
12964	Xã Thái Thành	xa-thai-thanh	20.4633974	106.4847619	Xã	341	\N	\N
12967	Xã Thái Thọ	xa-thai-tho	20.4541906	106.5201084	Xã	341	\N	\N
12970	Thị trấn Tiền Hải	thi-tran-tien-hai	20.402609	106.5009617	Thị trấn	342	\N	\N
12973	Xã Đông Hải	xa-dong-hai	20.4689609	106.5760857	Xã	342	\N	\N
12976	Xã Đông Trà	xa-dong-tra	20.45653	106.5554608	Xã	342	\N	\N
12979	Xã Đông Long	xa-dong-long	20.443559	106.5996595	Xã	342	\N	\N
12982	Xã Đông Quí	xa-dong-qui	20.4414923	106.5318919	Xã	342	\N	\N
12985	Xã Vũ Lăng	xa-vu-lang	20.4345084	106.4847619	Xã	342	\N	\N
12988	Xã Đông Xuyên	xa-dong-xuyen	20.4444041	106.5613534	Xã	342	\N	\N
12991	Xã Tây Lương	xa-tay-luong	20.4327965	106.5024344	Xã	342	\N	\N
12994	Xã Tây Ninh	xa-tay-ninh	20.4253058	106.5201084	Xã	342	\N	\N
12997	Xã Đông Trung	xa-dong-trung	20.4282219	106.5495683	Xã	342	\N	\N
13000	Xã Đông Hoàng	xa-dong-hoang	20.4227547	106.5760857	Xã	342	\N	\N
13003	Xã Đông Minh	xa-dong-minh	20.3921574	106.5937658	Xã	342	\N	\N
13006	Xã Tây An	xa-tay-an	20.4166056	106.4906526	Xã	342	\N	\N
13009	Xã Đông Phong	xa-dong-phong	20.4146398	106.5407299	Xã	342	\N	\N
13012	Xã An Ninh	xa-an-ninh	20.3972392	106.4818167	Xã	342	\N	\N
13015	Xã Tây Sơn	xa-tay-son	20.4027697	106.5142169	Xã	342	\N	\N
13018	Xã Đông Cơ	xa-dong-co	20.3993414	106.5495683	Xã	342	\N	\N
13021	Xã Tây Giang	xa-tay-giang	20.3917865	106.5083256	Xã	342	\N	\N
13024	Xã Đông Lâm	xa-dong-lam	20.3883611	106.543676	Xã	342	\N	\N
13027	Xã Phương Công	xa-phuong-cong	20.3819419	106.4906526	Xã	342	\N	\N
13030	Xã Tây Phong	xa-tay-phong	20.3686796	106.5083256	Xã	342	\N	\N
13033	Xã Tây Tiến	xa-tay-tien	20.3721751	106.5318919	Xã	342	\N	\N
13036	Xã Nam Cường	xa-nam-cuong	20.3750943	106.5613534	Xã	342	\N	\N
13039	Xã Vân Trường	xa-van-truong	20.3657481	106.4788714	Xã	342	\N	\N
13042	Xã Nam Thắng	xa-nam-thang	20.3583394	106.5554608	Xã	342	\N	\N
13045	Xã Nam Chính	xa-nam-chinh	20.3580201	106.528946	Xã	342	\N	\N
13048	Xã Bắc Hải	xa-bac-hai	20.3426395	106.4788714	Xã	342	\N	\N
13051	Xã Nam Thịnh	xa-nam-thinh	20.3510946	106.5769834	Xã	342	\N	\N
13054	Xã Nam Hà	xa-nam-ha	20.3409346	106.4965434	Xã	342	\N	\N
13057	Xã Nam Thanh	xa-nam-thanh	20.341013	106.5554608	Xã	342	\N	\N
13060	Xã Nam Trung	xa-nam-trung	20.3337761	106.5407299	Xã	342	\N	\N
13063	Xã Nam Hồng	xa-nam-hong	20.3245028	106.5171626	Xã	342	\N	\N
13066	Xã Nam Hưng	xa-nam-hung	20.3142249	106.6232359	Xã	342	\N	\N
13069	Xã Nam Hải	xa-nam-hai	20.3183963	106.4906526	Xã	342	\N	\N
13072	Xã Nam Phú	xa-nam-phu	20.2766678	106.5937658	Xã	342	\N	\N
13075	Thị trấn Thanh Nê	thi-tran-thanh-ne	20.3864896	106.4435319	Thị trấn	343	\N	\N
13078	Xã Trà Giang	xa-tra-giang	20.4852406	106.4622134	Xã	343	\N	\N
13081	Xã Quốc Tuấn	xa-quoc-tuan	20.4711323	106.4346979	Xã	343	\N	\N
13084	Xã Vũ Đông	xa-vu-dong	20.4626456	106.3728707	Xã	336	\N	\N
13087	Xã An Bình	xa-an-binh	20.4760128	106.4140868	Xã	343	\N	\N
13090	Xã Vũ Tây	xa-vu-tay	20.4635893	106.3996777	Xã	343	\N	\N
13093	Xã Hồng Thái	xa-hong-thai	20.4573881	106.461512	Xã	343	\N	\N
13096	Xã Bình Nguyên	xa-binh-nguyen	20.4517587	106.4258643	Xã	343	\N	\N
13099	Xã Vũ Sơn	xa-vu-son	20.4551651	106.3905338	Xã	343	\N	\N
13102	Xã Lê Lợi	xa-le-loi	20.4406782	106.4596261	Xã	343	\N	\N
13105	Xã Quyết Tiến	xa-quyet-tien	20.4456034	106.4454446	Xã	343	\N	\N
13108	Xã Vũ Lạc	xa-vu-lac	20.4341018	106.3802702	Xã	336	\N	\N
13111	Xã Vũ Lễ	xa-vu-le	20.4373378	106.4019713	Xã	343	\N	\N
13114	Xã Thanh Tân	xa-thanh-tan	20.4344216	106.4258643	Xã	343	\N	\N
13117	Xã Thượng Hiền	xa-thuong-hien	20.4204711	106.4656184	Xã	343	\N	\N
13120	Xã Nam Cao	xa-nam-cao	20.4258006	106.4553111	Xã	343	\N	\N
13123	Xã Đình Phùng	xa-dinh-phung	20.4153811	106.4435319	Xã	343	\N	\N
13126	Xã Vũ Ninh	xa-vu-ninh	20.3651577	106.3553932	Xã	343	\N	\N
13129	Xã Vũ An	xa-vu-an	20.4204865	106.3905338	Xã	343	\N	\N
13132	Xã Quang Lịch	xa-quang-lich	20.4187867	106.4081983	Xã	343	\N	\N
13135	Xã Hòa Bình	xa-hoa-binh	20.4060945	106.4199755	Xã	343	\N	\N
13138	Xã Bình Minh	xa-binh-minh	20.3986138	106.4376425	Xã	343	\N	\N
13141	Xã Vũ Quí	xa-vu-qui	20.4037136	106.3846459	Xã	343	\N	\N
13144	Xã Quang Bình	xa-quang-binh	20.3936299	106.3993658	Xã	343	\N	\N
13147	Xã An Bồi	xa-an-boi	20.3899952	106.4670909	Xã	343	\N	\N
13150	Xã Vũ Trung	xa-vu-trung	20.3765102	106.3669834	Xã	343	\N	\N
13153	Xã Vũ Thắng	xa-vu-thang	20.3765102	106.3669834	Xã	343	\N	\N
13156	Xã Vũ Công	xa-vu-cong	20.3731201	106.40231	Xã	343	\N	\N
13159	Xã Vũ Hòa	xa-vu-hoa	20.3690368	106.3846459	Xã	343	\N	\N
13162	Xã Quang Minh	xa-quang-minh	20.3662097	106.4140868	Xã	343	\N	\N
13165	Xã Quang Trung	xa-quang-trung	20.3680204	106.4553111	Xã	343	\N	\N
13168	Xã Minh Hưng	xa-minh-hung	20.3535206	106.4258643	Xã	343	\N	\N
13171	Xã Quang Hưng	xa-quang-hung	20.3544267	106.4464766	Xã	343	\N	\N
13174	Xã Vũ Bình	xa-vu-binh	20.3511344	106.3905338	Xã	343	\N	\N
13177	Xã Minh Tân	xa-minh-tan	20.3373169	106.4140868	Xã	343	\N	\N
13180	Xã Nam Bình	xa-nam-binh	20.3339212	106.4494214	Xã	343	\N	\N
13183	Xã Bình Thanh	xa-binh-thanh	20.3182861	106.4317533	Xã	343	\N	\N
13186	Xã Bình Định	xa-binh-dinh	20.3186276	106.458256	Xã	343	\N	\N
13189	Xã Hồng Tiến	xa-hong-tien	20.2975578	106.4670909	Xã	343	\N	\N
13192	Thị trấn Vũ Thư	thi-tran-vu-thu	20.4359144	106.2823717	Thị trấn	344	\N	\N
13195	Xã Hồng Lý	xa-hong-ly	20.4980171	106.1845606	Xã	344	\N	\N
13198	Xã Đồng Thanh	xa-dong-thanh	20.5079049	106.2022072	Xã	344	\N	\N
13201	Xã Xuân Hòa	xa-xuan-hoa	20.5030486	106.2227968	Xã	344	\N	\N
13204	Xã Hiệp Hòa	xa-hiep-hoa	20.4976277	106.2492724	Xã	344	\N	\N
13207	Xã Phúc Thành	xa-phuc-thanh	20.4983386	106.3022339	Xã	344	\N	\N
13210	Xã Tân Phong	xa-tan-phong	20.4908622	106.3198908	Xã	344	\N	\N
13213	Xã Song Lãng	xa-song-lang	20.4849364	106.2610404	Xã	344	\N	\N
13216	Xã Tân Hòa	xa-tan-hoa	20.4846355	106.3001572	Xã	344	\N	\N
13219	Xã Việt Hùng	xa-viet-hung	20.4672242	106.2345633	Xã	344	\N	\N
13222	Xã Minh Lãng	xa-minh-lang	20.4742921	106.2816361	Xã	344	\N	\N
13225	Xã Tân Bình	xa-tan-binh	20.4693246	106.322603	Xã	336	\N	\N
13228	Xã Minh Khai	xa-minh-khai	20.4554603	106.2669247	Xã	344	\N	\N
13231	Xã Dũng Nghĩa	xa-dung-nghia	20.4467023	106.237505	Xã	344	\N	\N
13234	Xã Minh Quang	xa-minh-quang	20.4479904	106.2845785	Xã	344	\N	\N
13237	Xã Tam Quang	xa-tam-quang	20.4455801	106.2492724	Xã	344	\N	\N
13240	Xã Tân Lập	xa-tan-lap	20.4335502	106.2389759	Xã	344	\N	\N
13243	Xã Bách Thuận	xa-bach-thuan	20.4220787	106.2227968	Xã	344	\N	\N
13246	Xã Tự Tân	xa-tu-tan	20.421327	106.2610404	Xã	344	\N	\N
13249	Xã Song An	xa-song-an	20.4179558	106.2963486	Xã	344	\N	\N
13252	Xã Trung An	xa-trung-an	20.4052676	106.3081194	Xã	344	\N	\N
13255	Xã Vũ Hội	xa-vu-hoi	20.4123196	106.3552092	Xã	344	\N	\N
13258	Xã Hòa Bình	xa-hoa-binh	20.4196424	106.2786937	Xã	344	\N	\N
13261	Xã Nguyên Xá	xa-nguyen-xa	20.4011731	106.2904635	Xã	344	\N	\N
13264	Xã Việt Thuận	xa-viet-thuan	20.3914536	106.3316629	Xã	344	\N	\N
13267	Xã Vũ Vinh	xa-vu-vinh	20.3947154	106.3586963	Xã	344	\N	\N
13270	Xã Vũ Đoài	xa-vu-doai	20.3784089	106.3169479	Xã	344	\N	\N
13273	Xã Vũ Tiến	xa-vu-tien	20.3690942	106.293406	Xã	344	\N	\N
13276	Xã Vũ Vân	xa-vu-van	20.3597349	106.3610962	Xã	344	\N	\N
13279	Xã Duy Nhất	xa-duy-nhat	20.3554822	106.2845785	Xã	344	\N	\N
13282	Xã Hồng Phong	xa-hong-phong	20.3398181	106.2669247	Xã	344	\N	\N
13285	Phường Quang Trung	phuong-quang-trung	20.5619421	105.9215215	Phường	347	\N	\N
13288	Phường Lương Khánh Thiện	phuong-luong-khanh-thien	20.5456381	105.9178504	Phường	347	\N	\N
13291	Phường Lê Hồng Phong	phuong-le-hong-phong	20.5362244	105.9024322	Phường	347	\N	\N
13294	Phường Minh Khai	phuong-minh-khai	20.5428804	105.9163819	Phường	347	\N	\N
13297	Phường Hai Bà Trưng	phuong-hai-ba-trung	20.5364347	105.9156477	Phường	347	\N	\N
13300	Phường Trần Hưng Đạo	phuong-tran-hung-dao	20.5356256	105.9204202	Phường	347	\N	\N
13303	Phường Lam Hà	phuong-lam-ha	20.5560832	105.9376756	Phường	347	\N	\N
13306	Xã Phù Vân	xa-phu-van	20.5535973	105.9024322	Xã	347	\N	\N
13309	Phường Liêm Chính	phuong-liem-chinh	20.5401812	105.9324878	Phường	347	\N	\N
13312	Xã Liêm Chung	xa-liem-chung	20.5271321	105.9376756	Xã	347	\N	\N
13315	Phường Thanh Châu	phuong-thanh-chau	20.5229933	105.9200531	Phường	347	\N	\N
13318	Phường Châu Sơn	phuong-chau-son	20.519401	105.896559	Phường	347	\N	\N
13321	Thị trấn Đồng Văn	thi-tran-dong-van	20.6382578	105.9259271	Thị trấn	349	\N	\N
13324	Thị trấn Hòa Mạc	thi-tran-hoa-mac	20.6424338	105.9890839	Thị trấn	349	\N	\N
13327	Xã Mộc Bắc	xa-moc-bac	20.6852179	106.0111203	Xã	349	\N	\N
13330	Xã Châu Giang	xa-chau-giang	20.6642849	105.9876149	Xã	349	\N	\N
13333	Xã Bạch Thượng	xa-bach-thuong	20.6666603	105.9318012	Xã	349	\N	\N
13336	Xã Duy Minh	xa-duy-minh	20.6683205	105.9141793	Xã	349	\N	\N
13339	Xã Mộc Nam	xa-moc-nam	20.6609456	106.022874	Xã	349	\N	\N
13342	Xã Duy Hải	xa-duy-hai	20.6520508	105.9024322	Xã	349	\N	\N
13345	Xã Chuyên Ngoại	xa-chuyen-ngoai	20.6346161	106.0258126	Xã	349	\N	\N
13348	Xã Yên Bắc	xa-yen-bac	20.640727	105.9611748	Xã	349	\N	\N
13351	Xã Trác Văn	xa-trac-van	20.630496	106.0081819	Xã	349	\N	\N
13354	Xã Tiên Nội	xa-tien-noi	20.6192261	105.9435501	Xã	349	\N	\N
13357	Xã Hoàng Đông	xa-hoang-dong	20.6208845	105.9259271	Xã	349	\N	\N
13360	Xã Yên Nam	xa-yen-nam	20.6190754	105.9758633	Xã	349	\N	\N
13363	Xã Tiên Ngoại	xa-tien-ngoai	20.6065387	105.9552997	Xã	349	\N	\N
13366	Xã Tiên Tân	xa-tien-tan	20.5855873	105.9318012	Xã	347	\N	\N
13369	Xã Đọi Sơn	xa-doi-son	20.5843364	105.9758633	Xã	349	\N	\N
13372	Xã Tiên Hiệp	xa-tien-hiep	20.5749689	105.9523622	Xã	347	\N	\N
13375	Xã Châu Sơn	xa-chau-son	20.5643493	105.9729255	Xã	349	\N	\N
13378	Xã Tiền Phong	xa-tien-phong	20.5679243	105.9964291	Xã	349	\N	\N
13381	Xã Tiên Hải	xa-tien-hai	20.5544276	105.9552997	Xã	347	\N	\N
13384	Thị trấn Quế	thi-tran-que	20.579097	105.8711861	Thị trấn	350	\N	\N
13387	Xã Nguyễn Úy	xa-nguyen-uy	20.6523192	105.8378366	Xã	350	\N	\N
13390	Xã Đại Cương	xa-dai-cuong	20.6368816	105.8789403	Xã	350	\N	\N
13393	Xã Lê Hồ	xa-le-ho	20.6332912	105.8554513	Xã	350	\N	\N
13396	Xã Tượng Lĩnh	xa-tuong-linh	20.6218297	105.8231588	Xã	350	\N	\N
13399	Xã Nhật Tựu	xa-nhat-tuu	20.6294359	105.896559	Xã	350	\N	\N
13402	Xã Nhật Tân	xa-nhat-tan	20.6126121	105.8906859	Xã	350	\N	\N
13405	Xã Đồng Hóa	xa-dong-hoa	20.6058508	105.8701316	Xã	350	\N	\N
13408	Xã Hoàng Tây	xa-hoang-tay	20.6046155	105.9141793	Xã	350	\N	\N
13411	Xã Tân Sơn	xa-tan-son	20.6018278	105.8202234	Xã	350	\N	\N
13414	Xã Thụy Lôi	xa-thuy-loi	20.5990855	105.8495796	Xã	350	\N	\N
13417	Xã Văn Xá	xa-van-xa	20.5941356	105.9024322	Xã	350	\N	\N
13420	Xã Khả Phong	xa-kha-phong	20.5879457	105.8339971	Xã	350	\N	\N
13423	Xã Ngọc Sơn	xa-ngoc-son	20.5864027	105.8613233	Xã	350	\N	\N
13426	Xã Kim Bình	xa-kim-binh	20.5762111	105.9083056	Xã	347	\N	\N
13429	Thị trấn Ba Sao	thi-tran-ba-sao	20.5429141	105.7996769	Thị trấn	350	\N	\N
13432	Xã Liên Sơn	xa-lien-son	20.5396353	105.8349009	Xã	350	\N	\N
13435	Xã Thi Sơn	xa-thi-son	20.5626857	105.8671954	Xã	350	\N	\N
13438	Xã Thanh Sơn	xa-thanh-son	20.5258614	105.8583873	Xã	350	\N	\N
13441	Thị trấn Kiện Khê	thi-tran-kien-khe	20.5031254	105.884813	Thị trấn	351	\N	\N
13444	Xã Liêm Tuyền	xa-liem-tuyen	20.537058	105.9552997	Xã	347	\N	\N
13447	Xã Liêm Tiết	xa-liem-tiet	20.5191372	105.9611748	Xã	347	\N	\N
13450	Xã Liêm Phong	xa-liem-phong	20.5116922	105.9788011	Xã	351	\N	\N
13453	Xã Thanh Hà	xa-thanh-ha	20.5076924	105.9288641	Xã	351	\N	\N
13456	Xã Liêm Cần	xa-liem-can	20.5018807	105.9528939	Xã	351	\N	\N
13459	Phường Thanh Tuyền	phuong-thanh-tuyen	20.5009306	105.9083056	Phường	347	\N	\N
13462	Xã Thanh Bình	xa-thanh-binh	20.4860522	105.9435501	Xã	351	\N	\N
13465	Xã Liêm Thuận	xa-liem-thuan	20.4832985	105.9729255	Xã	351	\N	\N
13468	Xã Thanh Thủy	xa-thanh-thuy	20.47734	105.8818766	Xã	351	\N	\N
13471	Xã Thanh Phong	xa-thanh-phong	20.4740505	105.9171161	Xã	351	\N	\N
13474	Xã Thanh Lưu	xa-thanh-luu	20.4602739	105.9406128	Xã	351	\N	\N
13477	Xã Thanh Tân	xa-thanh-tan	20.4541766	105.8818766	Xã	351	\N	\N
13480	Xã Liêm Túc	xa-liem-tuc	20.4569728	105.9758633	Xã	351	\N	\N
13483	Xã Liêm Sơn	xa-liem-son	20.4349182	105.9641124	Xã	351	\N	\N
13486	Xã Thanh Hương	xa-thanh-huong	20.4508902	105.9171161	Xã	351	\N	\N
13489	Xã Thanh Nghị	xa-thanh-nghi	20.4183399	105.8936224	Xã	351	\N	\N
13492	Xã Thanh Tâm	xa-thanh-tam	20.4287064	105.9376756	Xã	351	\N	\N
13495	Xã Thanh Nguyên	xa-thanh-nguyen	20.414446	105.9241717	Xã	351	\N	\N
13498	Xã Thanh Hải	xa-thanh-hai	20.3814137	105.9171161	Xã	351	\N	\N
13501	Thị trấn Bình Mỹ	thi-tran-binh-my	20.4915633	106.0081819	Thị trấn	352	\N	\N
13504	Xã Bình Nghĩa	xa-binh-nghia	20.566261	106.0140586	Xã	352	\N	\N
13507	Xã Đinh Xá	xa-dinh-xa	20.5574533	105.9846769	Xã	347	\N	\N
13510	Xã Tràng An	xa-trang-an	20.5473856	105.9993672	Xã	352	\N	\N
13513	Xã Trịnh Xá	xa-trinh-xa	20.5342963	105.9846769	Xã	347	\N	\N
13516	Xã Đồng Du	xa-dong-du	20.5251866	106.0199355	Xã	352	\N	\N
13519	Xã Ngọc Lũ	xa-ngoc-lu	20.5248654	106.0845931	Xã	352	\N	\N
13522	Xã Hưng Công	xa-hung-cong	20.5224134	106.0493226	Xã	352	\N	\N
13525	Xã Đồn Xá	xa-don-xa	20.5094818	106.0023054	Xã	352	\N	\N
13528	Xã An Ninh	xa-an-ninh	20.5088337	106.1316303	Xã	352	\N	\N
13531	Xã Bồ Đề	xa-bo-de	20.5061382	106.0988887	Xã	352	\N	\N
13534	Xã Bối Cầu	xa-boi-cau	20.5050505	106.0493226	Xã	352	\N	\N
13537	Xã An Mỹ	xa-an-my	20.4962453	106.0199355	Xã	352	\N	\N
13540	Xã An Nội	xa-an-noi	20.4828527	106.0698963	Xã	352	\N	\N
13543	Xã Vũ Bản	xa-vu-ban	20.4690577	106.0934117	Xã	352	\N	\N
13546	Xã Trung Lương	xa-trung-luong	20.4714333	106.0375673	Xã	352	\N	\N
13549	Xã Mỹ Thọ	xa-my-tho	20.4810915	105.9964291	Xã	352	\N	\N
13552	Xã An Đổ	xa-an-do	20.4641347	106.022874	Xã	352	\N	\N
13555	Xã La Sơn	xa-la-son	20.4631742	106.0023054	Xã	352	\N	\N
13558	Xã Tiêu Động	xa-tieu-dong	20.4400215	106.0023054	Xã	352	\N	\N
13561	Xã An Lão	xa-an-lao	20.4189366	106.0111203	Xã	352	\N	\N
13564	Thị trấn Vĩnh Trụ	thi-tran-vinh-tru	20.5588073	106.0316898	Thị trấn	353	\N	\N
13567	Xã Hợp Lý	xa-hop-ly	20.6084494	105.9964291	Xã	353	\N	\N
13570	Xã Nguyên Lý	xa-nguyen-ly	20.6008298	106.0463837	Xã	353	\N	\N
13573	Xã Chính Lý	xa-chinh-ly	20.6009944	106.0140586	Xã	353	\N	\N
13576	Xã Chân Lý	xa-chan-ly	20.606825	106.1051705	Xã	353	\N	\N
13579	Xã Đạo Lý	xa-dao-ly	20.5896404	106.0728356	Xã	353	\N	\N
13582	Xã Công Lý	xa-cong-ly	20.5877496	106.0316898	Xã	353	\N	\N
13585	Xã Văn Lý	xa-van-ly	20.5858463	105.9905529	Xã	353	\N	\N
13588	Xã Bắc Lý	xa-bac-ly	20.57695	106.0845931	Xã	353	\N	\N
13591	Xã Đức Lý	xa-duc-ly	20.5765638	106.0581397	Xã	353	\N	\N
13594	Xã Nhân Đạo	xa-nhan-dao	20.5735993	106.1198699	Xã	353	\N	\N
13597	Xã Đồng Lý	xa-dong-ly	20.5634844	106.0434449	Xã	353	\N	\N
13600	Xã Nhân Thịnh	xa-nhan-thinh	20.5560565	106.1522126	Xã	353	\N	\N
13603	Xã Nhân Hưng	xa-nhan-hung	20.5631435	106.1081103	Xã	353	\N	\N
13606	Xã Nhân Khang	xa-nhan-khang	20.5461202	106.0434449	Xã	353	\N	\N
13609	Xã Nhân Mỹ	xa-nhan-my	20.5372046	106.1375107	Xã	353	\N	\N
13612	Xã Nhân Nghĩa	xa-nhan-nghia	20.5422266	106.0845931	Xã	353	\N	\N
13615	Xã Nhân Chính	xa-nhan-chinh	20.541837	106.0581397	Xã	353	\N	\N
13618	Xã Nhân Bình	xa-nhan-binh	20.5289812	106.1022307	Xã	353	\N	\N
13621	Xã Phú Phúc	xa-phu-phuc	20.5202238	106.1639749	Xã	353	\N	\N
13624	Xã Xuân Khê	xa-xuan-khe	20.5246939	106.1169299	Xã	353	\N	\N
13627	Xã Tiến Thắng	xa-tien-thang	20.4955875	106.1492721	Xã	353	\N	\N
13630	Xã Hòa Hậu	xa-hoa-hau	20.4823411	106.1669156	Xã	353	\N	\N
13633	Phường Hạ Long	phuong-ha-long	20.4424117	106.1838253	Phường	356	\N	\N
13636	Phường Trần Tế Xương	phuong-tran-te-xuong	20.4380283	106.1919131	Phường	356	\N	\N
13639	Phường Vị Hoàng	phuong-vi-hoang	20.4301901	106.1830901	Phường	356	\N	\N
13642	Phường Vị Xuyên	phuong-vi-xuyen	20.4364878	106.1852958	Phường	356	\N	\N
13645	Phường Quang Trung	phuong-quang-trung	20.4331268	106.1750027	Phường	356	\N	\N
13648	Phường Cửa Bắc	phuong-cua-bac	20.4289719	106.1654452	Phường	356	\N	\N
13651	Phường Nguyễn Du	phuong-nguyen-du	20.4299555	106.1779435	Phường	356	\N	\N
13654	Phường Bà Triệu	phuong-ba-trieu	20.4290675	106.1720619	Phường	356	\N	\N
13657	Phường Trường Thi	phuong-truong-thi	20.4229521	106.1602991	Phường	356	\N	\N
13660	Phường Phan Đình Phùng	phuong-phan-dinh-phung	20.4266448	106.1823549	Phường	356	\N	\N
13663	Phường Ngô Quyền	phuong-ngo-quyen	20.4215581	106.1750027	Phường	356	\N	\N
13666	Phường Trần Hưng Đạo	phuong-tran-hung-dao	20.4241713	106.1779435	Phường	356	\N	\N
13669	Phường Trần Đăng Ninh	phuong-tran-dang-ninh	20.4231874	106.1654452	Phường	356	\N	\N
13672	Phường Năng Tĩnh	phuong-nang-tinh	20.4185334	106.1661722	Phường	356	\N	\N
13675	Phường Văn Miếu	phuong-van-mieu	20.4157213	106.1602991	Phường	356	\N	\N
13678	Phường Trần Quang Khải	phuong-tran-quang-khai	20.4084477	106.1683859	Phường	356	\N	\N
13681	Phường Thống Nhất	phuong-thong-nhat	20.4394248	106.1772083	Phường	356	\N	\N
13684	Phường Lộc Hạ	phuong-loc-ha	20.4518914	106.1813783	Phường	356	\N	\N
13687	Phường Lộc Vượng	phuong-loc-vuong	20.4456779	106.1666466	Phường	356	\N	\N
13690	Phường Cửa Nam	phuong-cua-nam	20.4116171	106.1795783	Phường	356	\N	\N
13693	Xã Lộc Hòa	xa-loc-hoa	20.4335694	106.1491451	Xã	356	\N	\N
13696	Xã Nam Phong	xa-nam-phong	20.4230198	106.1978733	Xã	356	\N	\N
13699	Xã Mỹ Xá	xa-my-xa	20.4152861	106.145553	Xã	356	\N	\N
13702	Xã Lộc An	xa-loc-an	20.4039108	106.153117	Xã	356	\N	\N
13705	Xã Nam Vân	xa-nam-van	20.3974479	106.1866496	Xã	356	\N	\N
13708	Thị trấn Mỹ Lộc	thi-tran-my-loc	20.4416309	106.1081103	Thị trấn	358	\N	\N
13711	Xã Mỹ Hà	xa-my-ha	20.4888622	106.1286901	Xã	358	\N	\N
13714	Xã Mỹ Tiến	xa-my-tien	20.4705607	106.1081103	Xã	358	\N	\N
13717	Xã Mỹ Thắng	xa-my-thang	20.4619909	106.1375107	Xã	358	\N	\N
13720	Xã Mỹ Trung	xa-my-trung	20.4717069	106.1875016	Xã	358	\N	\N
13723	Xã Mỹ Tân	xa-my-tan	20.4558942	106.2107543	Xã	358	\N	\N
13726	Xã Mỹ Phúc	xa-my-phuc	20.4655449	106.1610343	Xã	358	\N	\N
13729	Xã Mỹ Hưng	xa-my-hung	20.4394064	106.1316303	Xã	358	\N	\N
13732	Xã Mỹ Thuận	xa-my-thuan	20.4570889	106.0669571	Xã	358	\N	\N
13735	Xã Mỹ Thịnh	xa-my-thinh	20.4380655	106.0845931	Xã	358	\N	\N
13738	Xã Mỹ Thành	xa-my-thanh	20.4237181	106.11399	Xã	358	\N	\N
13741	Thị trấn Gôi	thi-tran-goi	20.3344711	106.0787142	Thị trấn	359	\N	\N
13744	Xã Minh Thuận	xa-minh-thuan	20.4387727	106.0463837	Xã	359	\N	\N
13747	Xã Hiển Khánh	xa-hien-khanh	20.4365582	106.0698963	Xã	359	\N	\N
13750	Xã Tân Khánh	xa-tan-khanh	20.3972979	106.0516078	Xã	359	\N	\N
13753	Xã Hợp Hưng	xa-hop-hung	20.4123044	106.0816536	Xã	359	\N	\N
13756	Xã Đại An	xa-dai-an	20.3974059	106.1169299	Xã	359	\N	\N
13759	Xã Tân Thành	xa-tan-thanh	20.385673	106.1492721	Xã	359	\N	\N
13762	Xã Cộng Hòa	xa-cong-hoa	20.3860211	106.075964	Xã	359	\N	\N
13765	Xã Trung Thành	xa-trung-thanh	20.3859903	106.0845931	Xã	359	\N	\N
13768	Xã Quang Trung	xa-quang-trung	20.3785433	106.1022307	Xã	359	\N	\N
13771	Xã Minh Tân	xa-minh-tan	20.3771821	106.0552006	Xã	359	\N	\N
13774	Xã Liên Bảo	xa-lien-bao	20.3626947	106.1169299	Xã	359	\N	\N
13777	Xã Thành Lợi	xa-thanh-loi	20.360476	106.140451	Xã	359	\N	\N
13780	Xã Kim Thái	xa-kim-thai	20.3544448	106.0816536	Xã	359	\N	\N
13783	Xã Liên Minh	xa-lien-minh	20.340662	106.1051705	Xã	359	\N	\N
13786	Xã Đại Thắng	xa-dai-thang	20.3257697	106.140451	Xã	359	\N	\N
13789	Xã Tam Thanh	xa-tam-thanh	20.3171144	106.0787142	Xã	359	\N	\N
13792	Xã Vĩnh Hào	xa-vinh-hao	20.313247	106.1198699	Xã	359	\N	\N
13795	Thị trấn Lâm	thi-tran-lam	20.3231704	106.0140586	Thị trấn	360	\N	\N
13798	Xã Yên Trung	xa-yen-trung	20.4106639	105.9758633	Xã	360	\N	\N
13801	Xã Yên Thành	xa-yen-thanh	20.3981149	105.9552997	Xã	360	\N	\N
13804	Xã Yên Tân	xa-yen-tan	20.3884806	105.9964291	Xã	360	\N	\N
13807	Xã Yên Lợi	xa-yen-loi	20.3796647	106.0125649	Xã	360	\N	\N
13810	Xã Yên Thọ	xa-yen-tho	20.3823928	105.9376756	Xã	360	\N	\N
13813	Xã Yên Nghĩa	xa-yen-nghia	20.3854401	105.9670501	Xã	360	\N	\N
13816	Xã Yên Minh	xa-yen-minh	20.379389	106.0316898	Xã	360	\N	\N
13819	Xã Yên Phương	xa-yen-phuong	20.3697196	105.9494248	Xã	360	\N	\N
13822	Xã Yên Chính	xa-yen-chinh	20.3736721	105.9807959	Xã	360	\N	\N
13825	Xã Yên Bình	xa-yen-binh	20.3521056	106.0140586	Xã	360	\N	\N
13828	Xã Yên Phú	xa-yen-phu	20.3507104	105.9670501	Xã	360	\N	\N
13831	Xã Yên Mỹ	xa-yen-my	20.3566538	106.0581397	Xã	360	\N	\N
13834	Xã Yên Dương	xa-yen-duong	20.3441172	106.0375673	Xã	360	\N	\N
13837	Xã Yên Xá	xa-yen-xa	20.329717	106.0214048	Xã	360	\N	\N
13840	Xã Yên Hưng	xa-yen-hung	20.3344413	105.9552997	Xã	360	\N	\N
13843	Xã Yên Khánh	xa-yen-khanh	20.3363922	105.9964291	Xã	360	\N	\N
13846	Xã Yên Phong	xa-yen-phong	20.318055	105.9758633	Xã	360	\N	\N
13849	Xã Yên Ninh	xa-yen-ninh	20.320421	106.0434449	Xã	360	\N	\N
13852	Xã Yên Lương	xa-yen-luong	20.3060949	106.0728356	Xã	360	\N	\N
13855	Xã Yên Hồng	xa-yen-hong	20.3005719	106.0081819	Xã	360	\N	\N
13858	Xã Yên Quang	xa-yen-quang	20.2906424	105.9905529	Xã	360	\N	\N
13861	Xã Yên Tiến	xa-yen-tien	20.2894216	106.0346285	Xã	360	\N	\N
13864	Xã Yên Thắng	xa-yen-thang	20.2891034	106.0743989	Xã	360	\N	\N
13867	Xã Yên Phúc	xa-yen-phuc	20.2890031	106.1316303	Xã	360	\N	\N
13870	Xã Yên Cường	xa-yen-cuong	20.2839168	106.0934117	Xã	360	\N	\N
13873	Xã Yên Lộc	xa-yen-loc	20.2848772	106.11399	Xã	360	\N	\N
13876	Xã Yên Bằng	xa-yen-bang	20.268471	106.0111203	Xã	360	\N	\N
13879	Xã Yên Đồng	xa-yen-dong	20.26408	106.0581397	Xã	360	\N	\N
13882	Xã Yên Khang	xa-yen-khang	20.2662772	106.0346285	Xã	360	\N	\N
13885	Xã Yên Nhân	xa-yen-nhan	20.2618792	106.0816536	Xã	360	\N	\N
13888	Xã Yên Trị	xa-yen-tri	20.229368	106.0581397	Xã	360	\N	\N
13891	Thị trấn Liễu Đề	thi-tran-lieu-de	20.2172385	106.1875016	Thị trấn	361	\N	\N
13894	Thị trấn Rạng Đông	thi-tran-rang-dong	19.9903705	106.140451	Thị trấn	361	\N	\N
13897	Xã Nghĩa Đồng	xa-nghia-dong	20.2931264	106.1492721	Xã	361	\N	\N
13900	Xã Nghĩa Thịnh	xa-nghia-thinh	20.2668232	106.1522126	Xã	361	\N	\N
13903	Xã Nghĩa Minh	xa-nghia-minh	20.2611878	106.1198699	Xã	361	\N	\N
13906	Xã Nghĩa Thái	xa-nghia-thai	20.2394151	106.1669156	Xã	361	\N	\N
13909	Xã Hoàng Nam	xa-hoang-nam	20.2354354	106.1169299	Xã	361	\N	\N
13912	Xã Nghĩa Châu	xa-nghia-chau	20.2358437	106.1433913	Xã	361	\N	\N
13915	Xã Nghĩa Trung	xa-nghia-trung	20.2162838	106.1669156	Xã	361	\N	\N
13918	Xã Nghĩa Sơn	xa-nghia-son	20.1952157	106.1757379	Xã	361	\N	\N
13921	Xã Nghĩa Lạc	xa-nghia-lac	20.1142679	106.1757379	Xã	361	\N	\N
13924	Xã Nghĩa Hồng	xa-nghia-hong	20.0948581	106.1669156	Xã	361	\N	\N
13927	Xã Nghĩa Phong	xa-nghia-phong	20.0889386	106.199266	Xã	361	\N	\N
13930	Xã Nghĩa Phú	xa-nghia-phu	20.0691162	106.1639749	Xã	361	\N	\N
13933	Xã Nghĩa Bình	xa-nghia-binh	20.0542545	106.199266	Xã	361	\N	\N
13936	Thị trấn Quỹ Nhất	thi-tran-quy-nhat	20.0570452	106.1518013	Thị trấn	361	\N	\N
13939	Xã Nghĩa Tân	xa-nghia-tan	20.0448926	106.1757379	Xã	361	\N	\N
13942	Xã Nghĩa Hùng	xa-nghia-hung	20.0377167	106.1286901	Xã	361	\N	\N
13945	Xã Nghĩa Lâm	xa-nghia-lam	20.0040027	106.1492721	Xã	361	\N	\N
13948	Xã Nghĩa Thành	xa-nghia-thanh	20.0318124	106.1610343	Xã	361	\N	\N
13951	Xã Nghĩa Thắng	xa-nghia-thang	20.0206713	106.1875016	Xã	361	\N	\N
13954	Xã Nghĩa Lợi	xa-nghia-loi	20.0081403	106.1669156	Xã	361	\N	\N
13957	Xã Nghĩa Hải	xa-nghia-hai	20.0041192	106.1169299	Xã	361	\N	\N
13960	Xã Nghĩa Phúc	xa-nghia-phuc	19.9949342	106.1845606	Xã	361	\N	\N
13963	Xã Nam Điền	xa-nam-dien	19.9776105	106.1381064	Xã	361	\N	\N
13966	Thị trấn Nam Giang	thi-tran-nam-giang	20.342404	106.1786787	Thị trấn	362	\N	\N
13969	Xã Nam Mỹ	xa-nam-my	20.4032351	106.2080897	Xã	362	\N	\N
13972	Xã Điền Xá	xa-dien-xa	20.3952155	106.2316216	Xã	362	\N	\N
13975	Xã Nghĩa An	xa-nghia-an	20.3698219	106.1639749	Xã	362	\N	\N
13978	Xã Nam Thắng	xa-nam-thang	20.3944654	106.2698669	Xã	362	\N	\N
13981	Xã Nam Toàn	xa-nam-toan	20.3864433	106.2022072	Xã	362	\N	\N
13984	Xã Hồng Quang	xa-hong-quang	20.3679773	106.2139724	Xã	362	\N	\N
13987	Xã Tân Thịnh	xa-tan-thinh	20.3735776	106.2463305	Xã	362	\N	\N
13990	Xã Nam Cường	xa-nam-cuong	20.3625495	106.1930051	Xã	362	\N	\N
13993	Xã Nam Hồng	xa-nam-hong	20.3420547	106.2433886	Xã	362	\N	\N
13996	Xã Nam Hùng	xa-nam-hung	20.3474607	106.2167419	Xã	362	\N	\N
13999	Xã Nam Hoa	xa-nam-hoa	20.33375	106.2242676	Xã	362	\N	\N
14002	Xã Nam Dương	xa-nam-duong	20.3239415	106.1904426	Xã	362	\N	\N
14005	Xã Nam Thanh	xa-nam-thanh	20.3235913	106.2551563	Xã	362	\N	\N
14008	Xã Nam Lợi	xa-nam-loi	20.3053082	106.2345633	Xã	362	\N	\N
14011	Xã Bình Minh	xa-binh-minh	20.316489	106.2080897	Xã	362	\N	\N
14014	Xã Đồng Sơn	xa-dong-son	20.2877399	106.1757379	Xã	362	\N	\N
14017	Xã Nam Tiến	xa-nam-tien	20.2959716	106.2110311	Xã	362	\N	\N
14020	Xã Nam Hải	xa-nam-hai	20.2821804	106.2345633	Xã	362	\N	\N
14023	Xã Nam Thái	xa-nam-thai	20.2718951	106.1904426	Xã	362	\N	\N
14026	Thị trấn Cổ Lễ	thi-tran-co-le	20.3155733	106.2786937	Thị trấn	363	\N	\N
14029	Xã Phương Định	xa-phuong-dinh	20.310163	106.3051766	Xã	363	\N	\N
14032	Xã Trực Chính	xa-truc-chinh	20.3312364	106.2963486	Xã	363	\N	\N
14035	Xã Trung Đông	xa-trung-dong	20.298789	106.2728091	Xã	363	\N	\N
14038	Xã Liêm Hải	xa-liem-hai	20.2870411	106.3051766	Xã	363	\N	\N
14041	Xã Trực Tuấn	xa-truc-tuan	20.2751062	106.2786937	Xã	363	\N	\N
14044	Xã Việt Hùng	xa-viet-hung	20.26392	106.3051766	Xã	363	\N	\N
14047	Xã Trực Đạo	xa-truc-dao	20.2651636	106.2557838	Xã	363	\N	\N
14050	Xã Trực Hưng	xa-truc-hung	20.1793782	106.1904426	Xã	363	\N	\N
14053	Xã Trực Nội	xa-truc-noi	20.254634	106.2266356	Xã	363	\N	\N
14056	Thị trấn Cát Thành	thi-tran-cat-thanh	20.2557105	106.2698669	Thị trấn	363	\N	\N
14059	Xã Trực Thanh	xa-truc-thanh	20.2500104	106.2461371	Xã	363	\N	\N
14062	Xã Trực Khang	xa-truc-khang	20.24821	106.1963248	Xã	363	\N	\N
14065	Xã Trực Thuận	xa-truc-thuan	20.2478476	106.1822609	Xã	363	\N	\N
14068	Xã Trực Mỹ	xa-truc-my	20.229199	106.2139724	Xã	363	\N	\N
14071	Xã Trực Đại	xa-truc-dai	20.2154146	106.237505	Xã	363	\N	\N
14074	Xã Trực Cường	xa-truc-cuong	20.1945089	106.2139724	Xã	363	\N	\N
14077	Xã Trực Phú	xa-truc-phu	20.1840534	106.2022072	Xã	363	\N	\N
14080	Xã Trực Thái	xa-truc-thai	20.1876187	106.2257384	Xã	363	\N	\N
14083	Xã Trực Hùng	xa-truc-hung	20.1793782	106.1904426	Xã	363	\N	\N
14086	Xã Trực Thắng	xa-truc-thang	20.1749475	106.237505	Xã	363	\N	\N
14089	Thị trấn Xuân Trường	thi-tran-xuan-truong	20.2868482	106.3375493	Thị trấn	364	\N	\N
14092	Xã Xuân Châu	xa-xuan-chau	20.3619881	106.3375493	Xã	364	\N	\N
14095	Xã Xuân Hồng	xa-xuan-hong	20.3289924	106.3198908	Xã	364	\N	\N
14098	Xã Xuân Thành	xa-xuan-thanh	20.3487388	106.3552092	Xã	364	\N	\N
14101	Xã Xuân Thượng	xa-xuan-thuong	20.3394295	106.3316629	Xã	364	\N	\N
14104	Xã Xuân Phong	xa-xuan-phong	20.3250571	106.3610962	Xã	364	\N	\N
14107	Xã Xuân Đài	xa-xuan-dai	20.3170246	106.3846459	Xã	364	\N	\N
14110	Xã Xuân Tân	xa-xuan-tan	20.3242827	106.3993658	Xã	364	\N	\N
14113	Xã Xuân Thủy	xa-xuan-thuy	20.326745	106.3434358	Xã	364	\N	\N
14116	Xã Xuân Ngọc	xa-xuan-ngoc	20.3041875	106.3375493	Xã	364	\N	\N
14119	Xã Xuân Bắc	xa-xuan-bac	20.3082813	106.3552092	Xã	364	\N	\N
14122	Xã Xuân Phương	xa-xuan-phuong	20.301377	106.3669834	Xã	364	\N	\N
14125	Xã Thọ Nghiệp	xa-tho-nghiep	20.2907385	106.3875898	Xã	364	\N	\N
14128	Xã Xuân Phú	xa-xuan-phu	20.2974333	106.4081983	Xã	364	\N	\N
14131	Xã Xuân Trung	xa-xuan-trung	20.2903811	106.3610962	Xã	364	\N	\N
14134	Xã Xuân Vinh	xa-xuan-vinh	20.2698733	106.3640398	Xã	364	\N	\N
14137	Xã Xuân Kiên	xa-xuan-kien	20.2585109	106.3316629	Xã	364	\N	\N
14140	Xã Xuân Tiến	xa-xuan-tien	20.2689486	106.3434358	Xã	364	\N	\N
14143	Xã Xuân Ninh	xa-xuan-ninh	20.2396816	106.3169479	Xã	364	\N	\N
14146	Xã Xuân Hòa	xa-xuan-hoa	20.25105	106.3493224	Xã	364	\N	\N
14149	Thị trấn Ngô Đồng	thi-tran-ngo-dong	20.288267	106.4435319	Thị trấn	365	\N	\N
14152	Thị trấn Quất Lâm	thi-tran-quat-lam	20.188973	106.3640398	Thị trấn	365	\N	\N
14155	Xã Giao Hương	xa-giao-huong	20.3013988	106.5171626	Xã	365	\N	\N
14158	Xã Hồng Thuận	xa-hong-thuan	20.2816996	106.4818167	Xã	365	\N	\N
14161	Xã Giao Thiện	xa-giao-thien	20.232755	106.5701927	Xã	365	\N	\N
14164	Xã Giao Thanh	xa-giao-thanh	20.2762595	106.5083256	Xã	365	\N	\N
14167	Xã Hoành Sơn	xa-hoanh-son	20.2784066	106.4258643	Xã	365	\N	\N
14170	Xã Bình Hòa	xa-binh-hoa	20.2692394	106.4612009	Xã	365	\N	\N
14173	Xã Giao Tiến	xa-giao-tien	20.2702322	106.3905338	Xã	365	\N	\N
14176	Xã Giao Hà	xa-giao-ha	20.258251	106.4553111	Xã	365	\N	\N
14179	Xã Giao Nhân	xa-giao-nhan	20.2599453	106.4376425	Xã	365	\N	\N
14182	Xã Giao An	xa-giao-an	20.254058	106.528946	Xã	365	\N	\N
14185	Xã Giao Lạc	xa-giao-lac	20.2205413	106.5171626	Xã	365	\N	\N
14188	Xã Giao Châu	xa-giao-chau	20.2526894	106.4229199	Xã	365	\N	\N
14191	Xã Giao Tân	xa-giao-tan	20.2534596	106.3846459	Xã	365	\N	\N
14194	Xã Giao Yến	xa-giao-yen	20.2402162	106.40231	Xã	365	\N	\N
14197	Xã Giao Xuân	xa-giao-xuan	20.2112548	106.493598	Xã	365	\N	\N
14200	Xã Giao Thịnh	xa-giao-thinh	20.2262522	106.3669834	Xã	365	\N	\N
14203	Xã Giao Hải	xa-giao-hai	20.2224617	106.4670909	Xã	365	\N	\N
14206	Xã Bạch Long	xa-bach-long	20.2191505	106.4111425	Xã	365	\N	\N
14209	Xã Giao Long	xa-giao-long	20.2273253	106.4464766	Xã	365	\N	\N
14212	Xã Giao Phong	xa-giao-phong	20.212451	106.3905338	Xã	365	\N	\N
14215	Thị trấn Yên Định	thi-tran-yen-dinh	20.1998722	106.2948773	Thị trấn	366	\N	\N
14218	Thị trấn Cồn	thi-tran-con	20.123793	106.2742802	Thị trấn	366	\N	\N
14221	Thị trấn Thịnh Long	thi-tran-thinh-long	20.040491	106.2227968	Thị trấn	366	\N	\N
14224	Xã Hải Nam	xa-hai-nam	20.2284941	106.3434358	Xã	366	\N	\N
14227	Xã Hải Trung	xa-hai-trung	20.2225231	106.2845785	Xã	366	\N	\N
14230	Xã Hải Vân	xa-hai-van	20.2296137	106.3316629	Xã	366	\N	\N
14233	Xã Hải Minh	xa-hai-minh	20.2337015	106.2580983	Xã	366	\N	\N
14236	Xã Hải Anh	xa-hai-anh	20.2249697	106.2750681	Xã	366	\N	\N
14239	Xã Hải Hưng	xa-hai-hung	20.2087316	106.3081194	Xã	366	\N	\N
14242	Xã Hải Bắc	xa-hai-bac	20.2176815	106.2972495	Xã	366	\N	\N
14245	Xã Hải Phúc	xa-hai-phuc	20.2027686	106.3404925	Xã	366	\N	\N
14248	Xã Hải Thanh	xa-hai-thanh	20.1830026	106.3051766	Xã	366	\N	\N
14251	Xã Hải Hà	xa-hai-ha	20.1960561	106.3198908	Xã	366	\N	\N
14254	Xã Hải Long	xa-hai-long	20.1837317	106.2669247	Xã	366	\N	\N
14257	Xã Hải Phương	xa-hai-phuong	20.1768392	106.2786937	Xã	366	\N	\N
14260	Xã Hải Đường	xa-hai-duong	20.1680571	106.2492724	Xã	366	\N	\N
14263	Xã Hải Lộc	xa-hai-loc	20.1770436	106.3375493	Xã	366	\N	\N
14266	Xã Hải Quang	xa-hai-quang	20.1682755	106.3081194	Xã	366	\N	\N
14269	Xã Hải Đông	xa-hai-dong	20.1544872	106.3316629	Xã	366	\N	\N
14272	Xã Hải Sơn	xa-hai-son	20.143826	106.2610404	Xã	366	\N	\N
14275	Xã Hải Tân	xa-hai-tan	20.1484956	106.2728091	Xã	366	\N	\N
14278	Xã Hải Toàn	xa-hai-toan	20.1430302	106.2080897	Xã	366	\N	\N
14281	Xã Hải Phong	xa-hai-phong	20.1413708	106.2257384	Xã	366	\N	\N
14284	Xã Hải An	xa-hai-an	20.1441355	106.1963248	Xã	366	\N	\N
14287	Xã Hải Tây	xa-hai-tay	20.1378811	106.293406	Xã	366	\N	\N
14290	Xã Hải Lý	xa-hai-ly	20.127822	106.3081194	Xã	366	\N	\N
14293	Xã Hải Phú	xa-hai-phu	20.1171417	106.237505	Xã	366	\N	\N
14296	Xã Hải Giang	xa-hai-giang	20.1248769	106.203934	Xã	366	\N	\N
14299	Xã Hải Cường	xa-hai-cuong	20.1097007	106.2551563	Xã	366	\N	\N
14302	Xã Hải Ninh	xa-hai-ninh	20.1020113	106.2139724	Xã	366	\N	\N
14305	Xã Hải Chính	xa-hai-chinh	20.1121525	106.2904635	Xã	366	\N	\N
14308	Xã Hải Xuân	xa-hai-xuan	20.1054255	106.2698669	Xã	366	\N	\N
14311	Xã Hải Châu	xa-hai-chau	20.0777854	106.2257384	Xã	366	\N	\N
14314	Xã Hải Triều	xa-hai-trieu	20.0838913	106.2683958	Xã	366	\N	\N
14317	Xã Hải Hòa	xa-hai-hoa	20.0729622	106.2463305	Xã	366	\N	\N
14320	Phường Đông Thành	phuong-dong-thanh	20.2639567	105.9753452	Phường	369	\N	\N
14323	Phường Tân Thành	phuong-tan-thanh	20.2598603	105.9631818	Phường	369	\N	\N
14326	Phường Thanh Bình	phuong-thanh-binh	20.2538422	105.982906	Phường	369	\N	\N
14329	Phường Vân Giang	phuong-van-giang	20.2551852	105.9751288	Phường	369	\N	\N
14332	Phường Bích Đào	phuong-bich-dao	20.2492027	105.9899826	Phường	369	\N	\N
14335	Phường Phúc Thành	phuong-phuc-thanh	20.252878	105.9654682	Phường	369	\N	\N
14338	Phường Nam Bình	phuong-nam-binh	20.242985	105.9791364	Phường	369	\N	\N
14341	Phường Nam Thành	phuong-nam-thanh	20.241771	105.966288	Phường	369	\N	\N
14344	Phường Ninh Khánh	phuong-ninh-khanh	20.2733332	105.9643869	Phường	369	\N	\N
14347	Xã Ninh Nhất	xa-ninh-nhat	20.2701273	105.9477157	Xã	369	\N	\N
14350	Xã Ninh Tiến	xa-ninh-tien	20.2393666	105.9524284	Xã	369	\N	\N
14353	Xã Ninh Phúc	xa-ninh-phuc	20.237403	106.0046168	Xã	369	\N	\N
14356	Phường Ninh Sơn	phuong-ninh-son	20.2285701	105.9890839	Phường	369	\N	\N
14359	Phường Ninh Phong	phuong-ninh-phong	20.2180895	105.9642878	Phường	369	\N	\N
14362	Phường Bắc Sơn	phuong-bac-son	20.1588273	105.9141793	Phường	370	\N	\N
14365	Phường Trung Sơn	phuong-trung-son	20.1519559	105.9259271	Phường	370	\N	\N
14368	Phường Nam Sơn	phuong-nam-son	20.1288888	105.8936224	Phường	370	\N	\N
14369	Phường Tây Sơn	phuong-tay-son	20.1546637	105.896559	Phường	370	\N	\N
14371	Xã Yên Sơn	xa-yen-son	20.1983456	105.8936224	Xã	370	\N	\N
14374	Phường Yên Bình	phuong-yen-binh	20.1983456	105.8936224	Phường	370	\N	\N
14375	Phường Tân Bình	phuong-tan-binh	20.1633535	105.930326	Phường	370	\N	\N
14377	Xã Quang Sơn	xa-quang-son	20.1605304	105.8642593	Xã	370	\N	\N
14380	Xã Đông Sơn	xa-dong-son	20.1256429	105.9288641	Xã	370	\N	\N
14383	Thị trấn Nho Quan	thi-tran-nho-quan	20.3192475	105.7439194	Thị trấn	372	\N	\N
14386	Xã Xích Thổ	xa-xich-tho	20.4281462	105.7879371	Xã	372	\N	\N
14389	Xã Gia Lâm	xa-gia-lam	20.3860576	105.7732633	Xã	372	\N	\N
14392	Xã Gia Sơn	xa-gia-son	20.3965591	105.7850022	Xã	372	\N	\N
14395	Xã Thạch Bình	xa-thach-binh	20.3767065	105.7175138	Xã	372	\N	\N
14398	Xã Gia Thủy	xa-gia-thuy	20.3775564	105.802612	Xã	372	\N	\N
14401	Xã Gia Tường	xa-gia-tuong	20.3597215	105.776198	Xã	372	\N	\N
14404	Xã Cúc Phương	xa-cuc-phuong	20.2601752	105.7359146	Xã	372	\N	\N
14407	Xã Phú Sơn	xa-phu-son	20.3516326	105.7374985	Xã	372	\N	\N
14410	Xã Đức Long	xa-duc-long	20.3343898	105.7996769	Xã	372	\N	\N
14413	Xã Lạc Vân	xa-lac-van	20.3344672	105.7673942	Xã	372	\N	\N
14416	Xã Đồng Phong	xa-dong-phong	20.3208627	105.7263152	Xã	372	\N	\N
14419	Xã Yên Quang	xa-yen-quang	20.3077827	105.7166537	Xã	372	\N	\N
14422	Xã Lạng Phong	xa-lang-phong	20.3112988	105.7673942	Xã	372	\N	\N
14425	Xã Thượng Hòa	xa-thuong-hoa	20.300722	105.7879371	Xã	372	\N	\N
14428	Xã Văn Phong	xa-van-phong	20.30187	105.7439194	Xã	372	\N	\N
14431	Xã Văn Phương	xa-van-phuong	20.2702968	105.743887	Xã	372	\N	\N
14434	Xã Thanh Lạc	xa-thanh-lac	20.2801823	105.790872	Xã	372	\N	\N
14437	Xã Sơn Lai	xa-son-lai	20.2605704	105.8466437	Xã	372	\N	\N
14440	Xã Sơn Thành	xa-son-thanh	20.2727713	105.8084823	Xã	372	\N	\N
14443	Xã Văn Phú	xa-van-phu	20.2681293	105.7644596	Xã	372	\N	\N
14446	Xã Phú Lộc	xa-phu-loc	20.2454356	105.790872	Xã	372	\N	\N
14449	Xã Kỳ Phú	xa-ky-phu	20.2176168	105.7468535	Xã	372	\N	\N
14452	Xã Quỳnh Lưu	xa-quynh-luu	20.2395731	105.8231588	Xã	372	\N	\N
14455	Xã Sơn Hà	xa-son-ha	20.2120893	105.8701316	Xã	372	\N	\N
14458	Xã Phú Long	xa-phu-long	20.190155	105.7938069	Xã	372	\N	\N
14461	Xã Quảng Lạc	xa-quang-lac	20.2026738	105.8466437	Xã	372	\N	\N
14464	Thị trấn Me	thi-tran-me	20.3511349	105.8378366	Thị trấn	373	\N	\N
14467	Xã Gia Hòa	xa-gia-hoa	20.3863283	105.8585375	Xã	373	\N	\N
14470	Xã Gia Hưng	xa-gia-hung	20.3908478	105.817811	Xã	373	\N	\N
14473	Xã Liên Sơn	xa-lien-son	20.369051	105.8319653	Xã	373	\N	\N
14476	Xã Gia Thanh	xa-gia-thanh	20.3607465	105.918653	Xã	373	\N	\N
14479	Xã Gia Vân	xa-gia-van	20.3581631	105.8795001	Xã	373	\N	\N
14482	Xã Gia Phú	xa-gia-phu	20.3533055	105.8143528	Xã	373	\N	\N
14485	Xã Gia Xuân	xa-gia-xuan	20.3450469	105.8771969	Xã	373	\N	\N
14488	Xã Gia Lập	xa-gia-lap	20.3400236	105.9001379	Xã	373	\N	\N
14491	Xã Gia Vượng	xa-gia-vuong	20.3423132	105.8446026	Xã	373	\N	\N
14494	Xã Gia Trấn	xa-gia-tran	20.3418709	105.9376756	Xã	373	\N	\N
14497	Xã Gia Thịnh	xa-gia-thinh	20.3353896	105.8202234	Xã	373	\N	\N
14500	Xã Gia Phương	xa-gia-phuong	20.3305784	105.8645025	Xã	373	\N	\N
14503	Xã Gia Tân	xa-gia-tan	20.3272343	105.9083056	Xã	373	\N	\N
14506	Xã Gia Thắng	xa-gia-thang	20.3183787	105.8789403	Xã	373	\N	\N
14509	Xã Gia Trung	xa-gia-trung	20.3015333	105.848102	Xã	373	\N	\N
14512	Xã Gia Minh	xa-gia-minh	20.3069761	105.8143528	Xã	373	\N	\N
14515	Xã Gia Lạc	xa-gia-lac	20.3111421	105.8319653	Xã	373	\N	\N
14518	Xã Gia Tiến	xa-gia-tien	20.300466	105.884813	Xã	373	\N	\N
14521	Xã Gia Sinh	xa-gia-sinh	20.2841056	105.8660365	Xã	373	\N	\N
14524	Xã Gia Phong	xa-gia-phong	20.2899738	105.8324575	Xã	373	\N	\N
14527	Thị trấn Thiên Tôn	thi-tran-thien-ton	20.2989486	105.9479561	Thị trấn	374	\N	\N
14530	Xã Ninh Giang	xa-ninh-giang	20.3129281	105.9376756	Xã	374	\N	\N
14533	Xã Trường Yên	xa-truong-yen	20.2783001	105.9053689	Xã	374	\N	\N
14536	Xã Ninh Khang	xa-ninh-khang	20.3032695	105.9658601	Xã	374	\N	\N
14539	Xã Ninh Mỹ	xa-ninh-my	20.288683	105.9494248	Xã	374	\N	\N
14542	Xã Ninh Hòa	xa-ninh-hoa	20.285077	105.9259271	Xã	374	\N	\N
14983	Xã Lâm Sa	xa-lam-sa	20.3409983	105.2136302	Xã	386	\N	\N
14545	Xã Ninh Xuân	xa-ninh-xuan	20.2445591	105.9259271	Xã	374	\N	\N
14548	Xã Ninh Hải	xa-ninh-hai	20.2204143	105.9053689	Xã	374	\N	\N
14551	Xã Ninh Thắng	xa-ninh-thang	20.2192307	105.9494248	Xã	374	\N	\N
14554	Xã Ninh Vân	xa-ninh-van	20.1913817	105.9376756	Xã	374	\N	\N
14557	Xã Ninh An	xa-ninh-an	20.2023114	105.9758633	Xã	374	\N	\N
14560	Thị trấn Yên Ninh	thi-tran-yen-ninh	20.1788256	106.0728356	Thị trấn	375	\N	\N
14563	Xã Khánh Tiên	xa-khanh-tien	20.2350222	106.0904721	Xã	375	\N	\N
14566	Xã Khánh Phú	xa-khanh-phu	20.2335787	106.0208313	Xã	375	\N	\N
14569	Xã Khánh Hòa	xa-khanh-hoa	20.2228804	106.0076666	Xã	375	\N	\N
14572	Xã Khánh Lợi	xa-khanh-loi	20.2066498	106.0845931	Xã	375	\N	\N
14575	Xã Khánh An	xa-khanh-an	20.212681	106.0199355	Xã	375	\N	\N
14578	Xã Khánh Cường	xa-khanh-cuong	20.2103651	106.1256924	Xã	375	\N	\N
14581	Xã Khánh Cư	xa-khanh-cu	20.2052533	106.0375673	Xã	375	\N	\N
14584	Xã Khánh Thiện	xa-khanh-thien	20.2124098	106.1105764	Xã	375	\N	\N
14587	Xã Khánh Hải	xa-khanh-hai	20.2025125	106.0669571	Xã	375	\N	\N
14590	Xã Khánh Trung	xa-khanh-trung	20.1985284	106.140451	Xã	375	\N	\N
14593	Xã Khánh Mậu	xa-khanh-mau	20.1928824	106.1081103	Xã	375	\N	\N
14596	Xã Khánh Vân	xa-khanh-van	20.18735	106.0434449	Xã	375	\N	\N
14599	Xã Khánh Hội	xa-khanh-hoi	20.1766303	106.0963513	Xã	375	\N	\N
14602	Xã Khánh Công	xa-khanh-cong	20.1742939	106.1522126	Xã	375	\N	\N
14608	Xã Khánh Thành	xa-khanh-thanh	20.1543303	106.1492721	Xã	375	\N	\N
14611	Xã Khánh Nhạc	xa-khanh-nhac	20.1566614	106.0934117	Xã	375	\N	\N
14614	Xã Khánh Thủy	xa-khanh-thuy	20.1565318	106.12575	Xã	375	\N	\N
14617	Xã Khánh Hồng	xa-khanh-hong	20.147286	106.0698963	Xã	375	\N	\N
14620	Thị trấn Phát Diệm	thi-tran-phat-diem	20.0922814	106.0860628	Thị trấn	376	\N	\N
14623	Thị trấn Bình Minh	thi-tran-binh-minh	19.9769487	106.0669571	Thị trấn	376	\N	\N
14626	Xã Xuân Thiện	xa-xuan-thien	20.1385661	106.1478019	Xã	376	\N	\N
14629	Xã Hồi Ninh	xa-hoi-ninh	20.1202514	106.1272201	Xã	376	\N	\N
14632	Xã Chính Tâm	xa-chinh-tam	20.1301676	106.1448615	Xã	376	\N	\N
14635	Xã Kim Định	xa-kim-dinh	20.1147432	106.12428	Xã	376	\N	\N
14638	Xã Ân Hòa	xa-an-hoa	20.1063436	106.1213399	Xã	376	\N	\N
14641	Xã Hùng Tiến	xa-hung-tien	20.1100577	106.1125201	Xã	376	\N	\N
14644	Xã Yên Mật	xa-yen-mat	20.1306955	106.0772446	Xã	376	\N	\N
14647	Xã Quang Thiện	xa-quang-thien	20.0945659	106.1081103	Xã	376	\N	\N
14650	Xã Như Hòa	xa-nhu-hoa	20.1013834	106.1125201	Xã	376	\N	\N
14653	Xã Chất Bình	xa-chat-binh	20.1207356	106.1375107	Xã	376	\N	\N
14656	Xã Đồng Hướng	xa-dong-huong	20.0909133	106.1007608	Xã	376	\N	\N
14659	Xã Kim Chính	xa-kim-chinh	20.0888427	106.0919419	Xã	376	\N	\N
14662	Xã Thượng Kiệm	xa-thuong-kiem	20.061999	106.1007608	Xã	376	\N	\N
14665	Xã Lưu Phương	xa-luu-phuong	20.0749317	106.0860628	Xã	376	\N	\N
14668	Xã Tân Thành	xa-tan-thanh	20.1105098	106.0610787	Xã	376	\N	\N
14671	Xã Yên Lộc	xa-yen-loc	20.093158	106.0610787	Xã	376	\N	\N
14674	Xã Lai Thành	xa-lai-thanh	20.0768975	106.0493226	Xã	376	\N	\N
14677	Xã Định Hóa	xa-dinh-hoa	20.0536547	106.0816536	Xã	376	\N	\N
14680	Xã Văn Hải	xa-van-hai	20.0336872	106.0787142	Xã	376	\N	\N
14683	Xã Kim Tân	xa-kim-tan	20.0178669	106.0934117	Xã	376	\N	\N
14686	Xã Kim Mỹ	xa-kim-my	20.0058623	106.0669571	Xã	376	\N	\N
14689	Xã Cồn Thoi	xa-con-thoi	19.9947376	106.0934117	Xã	376	\N	\N
14692	Xã Kim Hải	xa-kim-hai	19.9770437	106.0346285	Xã	376	\N	\N
14695	Xã Kim Trung	xa-kim-trung	19.9617724	106.0434449	Xã	376	\N	\N
14698	Xã Kim Đông	xa-kim-dong	19.9327668	106.0757749	Xã	376	\N	\N
14701	Thị trấn Yên Thịnh	thi-tran-yen-thinh	20.1601193	106.0096511	Thị trấn	377	\N	\N
14704	Xã Khánh Thượng	xa-khanh-thuong	20.1791651	105.9758633	Xã	377	\N	\N
14707	Xã Khánh Dương	xa-khanh-duong	20.1848449	106.0081819	Xã	377	\N	\N
14710	Xã Mai Sơn	xa-mai-son	20.1838222	105.960574	Xã	377	\N	\N
14713	Xã Khánh Thịnh	xa-khanh-thinh	20.1721814	106.0199355	Xã	377	\N	\N
14719	Xã Yên Phong	xa-yen-phong	20.1621376	106.0346285	Xã	377	\N	\N
14722	Xã Yên Hòa	xa-yen-hoa	20.1549309	105.9876149	Xã	377	\N	\N
14725	Xã Yên Thắng	xa-yen-thang	20.146621	105.9523622	Xã	377	\N	\N
14728	Xã Yên Từ	xa-yen-tu	20.1410708	106.0434449	Xã	377	\N	\N
14731	Xã Yên Hưng	xa-yen-hung	20.1448904	106.0023054	Xã	377	\N	\N
14734	Xã Yên Thành	xa-yen-thanh	20.1202159	105.9876149	Xã	377	\N	\N
14737	Xã Yên Nhân	xa-yen-nhan	20.1179325	106.0434449	Xã	377	\N	\N
14740	Xã Yên Mỹ	xa-yen-my	20.1264444	106.0140586	Xã	377	\N	\N
14743	Xã Yên Mạc	xa-yen-mac	20.0930512	106.0142887	Xã	377	\N	\N
14746	Xã Yên Đồng	xa-yen-dong	20.099245	105.9641124	Xã	377	\N	\N
14749	Xã Yên Thái	xa-yen-thai	20.0844164	105.9993672	Xã	377	\N	\N
14752	Xã Yên Lâm	xa-yen-lam	20.0775524	106.022705	Xã	377	\N	\N
14755	Phường Hàm Rồng	phuong-ham-rong	19.8388897	105.7859338	Phường	380	\N	\N
14758	Phường Đông Thọ	phuong-dong-tho	19.8224082	105.7667821	Phường	380	\N	\N
14761	Phường Nam Ngạn	phuong-nam-ngan	19.823453	105.791325	Phường	380	\N	\N
14764	Phường Trường Thi	phuong-truong-thi	19.8178849	105.7815013	Phường	380	\N	\N
14767	Phường Điện Biên	phuong-dien-bien	19.8101341	105.7755912	Phường	380	\N	\N
14770	Phường Phú Sơn	phuong-phu-son	19.8117305	105.7614016	Phường	380	\N	\N
14773	Phường Lam Sơn	phuong-lam-son	19.8046962	105.7835348	Phường	380	\N	\N
14776	Phường Ba Đình	phuong-ba-dinh	19.8025958	105.7747307	Phường	380	\N	\N
14779	Phường Ngọc Trạo	phuong-ngoc-trao	19.7958336	105.7766435	Phường	380	\N	\N
14782	Phường Đông Vệ	phuong-dong-ve	19.7826362	105.7763953	Phường	380	\N	\N
14785	Phường Đông Sơn	phuong-dong-son	19.7952229	105.7923394	Phường	380	\N	\N
14788	Phường Tân Sơn	phuong-tan-son	19.8060177	105.7688614	Phường	380	\N	\N
14791	Phường Đông Cương	phuong-dong-cuong	19.842778	105.762222	Phường	380	\N	\N
14794	Phường Đông Hương	phuong-dong-huong	19.8060711	105.7918664	Phường	380	\N	\N
14797	Phường Đông Hải	phuong-dong-hai	19.8118232	105.8111509	Phường	380	\N	\N
14800	Phường Quảng Hưng	phuong-quang-hung	19.7845492	105.8184949	Phường	380	\N	\N
14803	Phường Quảng Thắng	phuong-quang-thang	19.7844486	105.7673942	Phường	380	\N	\N
14806	Phường Quảng Thành	phuong-quang-thanh	19.771773	105.7894524	Phường	380	\N	\N
14809	Phường Bắc Sơn	phuong-bac-son	20.1089734	105.8583873	Phường	381	\N	\N
14812	Phường Ba Đình	phuong-ba-dinh	20.0926177	105.8789403	Phường	381	\N	\N
14815	Phường Lam Sơn	phuong-lam-son	20.0747162	105.884813	Phường	381	\N	\N
14818	Phường Ngọc Trạo	phuong-ngoc-trao	20.0837332	105.8495796	Phường	381	\N	\N
14821	Phường Đông Sơn	phuong-dong-son	20.0804297	105.9171161	Phường	381	\N	\N
14823	Phường Phú Sơn	phuong-phu-son	20.0710817	105.8613233	Phường	381	\N	\N
14824	Xã Quang Trung	xa-quang-trung	20.0605807	105.8495796	Xã	381	\N	\N
14827	Xã Hà Lan	xa-ha-lan	20.055738	105.9024322	Xã	381	\N	\N
14830	Phường Trung Sơn	phuong-trung-son	19.7491178	105.9024322	Phường	382	\N	\N
14833	Phường Bắc Sơn	phuong-bac-son	19.7425531	105.8950907	Phường	382	\N	\N
14836	Phường Trường Sơn	phuong-truong-son	19.7328303	105.8906859	Phường	382	\N	\N
14839	Phường Quảng Cư	phuong-quang-cu	19.771187	105.9141793	Phường	382	\N	\N
14842	Phường Quảng Tiến	phuong-quang-tien	19.7670014	105.896559	Phường	382	\N	\N
14845	Thị trấn Mường Lát	thi-tran-muong-lat	20.5200611	104.5917494	Thị trấn	384	\N	\N
14848	Xã Tam Chung	xa-tam-chung	20.5832107	104.6354631	Xã	384	\N	\N
14851	Xã Tén Tằn	xa-ten-tan	20.5340064	104.5305715	Xã	384	\N	\N
14854	Xã Mường Lý	xa-muong-ly	20.5605072	104.7637619	Xã	384	\N	\N
14857	Xã Trung Lý	xa-trung-ly	20.482132	104.7287607	Xã	384	\N	\N
14860	Xã Quang Chiểu	xa-quang-chieu	20.4594503	104.4490398	Xã	384	\N	\N
14863	Xã Pù Nhi	xa-pu-nhi	20.4602235	104.577181	Xã	384	\N	\N
14864	Xã Nhi Sơn	xa-nhi-son	20.4795113	104.6238048	Xã	384	\N	\N
14866	Xã Mường Chanh	xa-muong-chanh	14.058324	108.277199	Xã	384	\N	\N
14869	Thị trấn Quan Hóa	thi-tran-quan-hoa	20.3814569	105.1171246	Thị trấn	385	\N	\N
14872	Xã Thành Sơn	xa-thanh-son	20.6159993	104.9272044	Xã	385	\N	\N
14875	Xã Trung Sơn	xa-trung-son	20.6221407	104.8571368	Xã	385	\N	\N
14878	Xã Phú Thanh	xa-phu-thanh	20.5580531	104.9914601	Xã	385	\N	\N
14881	Xã Trung Thành	xa-trung-thanh	20.5483107	104.9038451	Xã	385	\N	\N
14884	Xã Phú Lệ	xa-phu-le	20.5339229	105.0674317	Xã	385	\N	\N
14887	Xã Phú Sơn	xa-phu-son	20.518926	104.9739333	Xã	385	\N	\N
14890	Xã Phú Xuân	xa-phu-xuan	20.4968749	105.0265195	Xã	385	\N	\N
14893	Xã Thanh Xuân	xa-thanh-xuan	20.4577561	105.0089888	Xã	385	\N	\N
14896	Xã Hiền Chung	xa-hien-chung	20.4361522	104.8571368	Xã	385	\N	\N
14899	Xã Hiền Kiệt	xa-hien-kiet	20.4209783	104.7637619	Xã	385	\N	\N
14902	Xã Nam Tiến	xa-nam-tien	20.4280174	104.9505671	Xã	385	\N	\N
14905	Xã Hồi Xuân	xa-hoi-xuan	20.417771	105.0674317	Xã	385	\N	\N
14908	Xã Thiên Phủ	xa-thien-phu	20.3853666	104.8396248	Xã	385	\N	\N
14911	Xã Phú Nghiêm	xa-phu-nghiem	20.388359	105.1375908	Xã	385	\N	\N
14914	Xã Nam Xuân	xa-nam-xuan	20.3733675	105.044052	Xã	385	\N	\N
14917	Xã Nam Động	xa-nam-dong	20.3716821	104.9325244	Xã	385	\N	\N
14920	Xã Xuân Phú	xa-xuan-phu	20.3472056	105.1434387	Xã	385	\N	\N
14923	Thị trấn Cành Nàng	thi-tran-canh-nang	20.3507773	105.226063	Thị trấn	386	\N	\N
14926	Xã Điền Thượng	xa-dien-thuong	20.238723	105.2545888	Xã	386	\N	\N
14929	Xã Điền Hạ	xa-dien-ha	20.2345721	105.3014109	Xã	386	\N	\N
14932	Xã Điền Quang	xa-dien-quang	20.2904232	105.2604409	Xã	386	\N	\N
14935	Xã Điền Trung	xa-dien-trung	20.2852192	105.3189726	Xã	386	\N	\N
14938	Xã Thành Sơn	xa-thanh-son	20.4833256	105.1142011	Xã	386	\N	\N
14941	Xã Lương Ngoại	xa-luong-ngoai	20.3485105	105.3248269	Xã	386	\N	\N
14944	Xã Ái Thượng	xa-ai-thuong	20.3368428	105.2604409	Xã	386	\N	\N
14947	Xã Lương Nội	xa-luong-noi	20.3675213	105.3716684	Xã	386	\N	\N
14950	Xã Điền Lư	xa-dien-lu	20.3221134	105.2955575	Xã	386	\N	\N
14953	Xã Lương Trung	xa-luong-trung	20.3211178	105.3716684	Xã	386	\N	\N
14956	Xã Lũng Niêm	xa-lung-niem	20.4612411	105.1668326	Xã	386	\N	\N
14959	Xã Lũng Cao	xa-lung-cao	20.5024006	105.1609838	Xã	386	\N	\N
14962	Xã Hạ Trung	xa-ha-trung	20.3938281	105.2721456	Xã	386	\N	\N
14965	Xã Cổ Lũng	xa-co-lung	20.4497118	105.2311827	Xã	386	\N	\N
14968	Xã Thành Lâm	xa-thanh-lam	20.4348047	105.1375908	Xã	386	\N	\N
14971	Xã Ban Công	xa-ban-cong	20.3842192	105.1843801	Xã	386	\N	\N
14974	Xã Kỳ Tân	xa-ky-tan	20.2806312	105.1083542	Xã	386	\N	\N
14977	Xã Văn Nho	xa-van-nho	20.2490398	105.1375908	Xã	386	\N	\N
14980	Xã Thiết Ống	xa-thiet-ong	20.2713583	105.2136302	Xã	386	\N	\N
14986	Xã Thiết Kế	xa-thiet-ke	20.311345	105.1551352	Xã	386	\N	\N
14989	Xã Tân Lập	xa-tan-lap	20.3621352	105.2370339	Xã	386	\N	\N
14992	Thị trấn Quan Sơn	thi-tran-quan-son	20.2574149	104.9418057	Thị trấn	387	\N	\N
14995	Xã Trung Xuân	xa-trung-xuan	20.3460344	105.0908147	Xã	387	\N	\N
14998	Xã Trung Thượng	xa-trung-thuong	20.288601	104.9505671	Xã	387	\N	\N
14999	Xã Trung Tiến	xa-trung-tien	20.3014491	105.0031457	Xã	387	\N	\N
15001	Xã Trung Hạ	xa-trung-ha	20.3100014	105.0382076	Xã	387	\N	\N
15004	Xã Sơn Hà	xa-son-ha	20.1936489	104.9739333	Xã	387	\N	\N
15007	Xã Tam Thanh	xa-tam-thanh	14.058324	108.277199	Xã	387	\N	\N
15010	Xã Sơn Thủy	xa-son-thuy	20.3426007	104.7287607	Xã	387	\N	\N
15013	Xã Na Mèo	xa-na-meo	14.058324	108.277199	Xã	387	\N	\N
15016	Xã Sơn Lư	xa-son-lu	20.2707834	104.8825638	Xã	387	\N	\N
15019	Xã Tam Lư	xa-tam-lu	20.2229429	104.9038451	Xã	387	\N	\N
15022	Xã Sơn Điện	xa-son-dien	20.2774687	104.8104424	Xã	387	\N	\N
15025	Xã Mường Mìn	xa-muong-min	20.2495946	104.7287607	Xã	387	\N	\N
15028	Thị trấn Lang Chánh	thi-tran-lang-chanh	20.1553743	105.2458111	Thị trấn	388	\N	\N
15031	Xã Yên Khương	xa-yen-khuong	20.1431444	105.0206757	Xã	388	\N	\N
15034	Xã Yên Thắng	xa-yen-thang	20.1370454	105.0908147	Xã	388	\N	\N
15037	Xã Trí Nang	xa-tri-nang	20.1056564	105.1843801	Xã	388	\N	\N
15040	Xã Giao An	xa-giao-an	20.0783455	105.2311827	Xã	388	\N	\N
15043	Xã Giao Thiện	xa-giao-thien	20.0319396	105.2311827	Xã	388	\N	\N
15046	Xã Tân Phúc	xa-tan-phuc	20.1732287	105.2077798	Xã	388	\N	\N
15049	Xã Tam Văn	xa-tam-van	20.2026064	105.1375908	Xã	388	\N	\N
15052	Xã Lâm Phú	xa-lam-phu	20.2319656	105.0674317	Xã	388	\N	\N
15055	Xã Quang Hiến	xa-quang-hien	20.1426743	105.2253316	Xã	388	\N	\N
15058	Xã Đồng Lương	xa-dong-luong	20.1754213	105.248737	Xã	388	\N	\N
15061	Thị Trấn Ngọc Lặc	thi-tran-ngoc-lac	20.0844095	105.3760604	Thị trấn	389	\N	\N
15064	Xã Lam Sơn	xa-lam-son	20.0302113	105.4478131	Xã	389	\N	\N
15067	Xã Mỹ Tân	xa-my-tan	20.1006469	105.3072646	Xã	389	\N	\N
15070	Xã Thúy Sơn	xa-thuy-son	20.1207364	105.3423909	Xã	389	\N	\N
15073	Xã Thạch Lập	xa-thach-lap	20.1628897	105.3248269	Xã	389	\N	\N
15076	Xã Vân Âm	xa-van-am	20.0257718	105.3014109	Xã	389	\N	\N
15079	Xã Cao Ngọc	xa-cao-ngoc	20.063783	105.3306814	Xã	389	\N	\N
15082	Xã Ngọc Khê	xa-ngoc-khe	20.0965033	105.3541013	Xã	389	\N	\N
15085	Xã Quang Trung	xa-quang-trung	20.133452	105.3950939	Xã	389	\N	\N
15088	Xã Đồng Thịnh	xa-dong-thinh	20.1240013	105.4360963	Xã	389	\N	\N
15091	Xã Ngọc Liên	xa-ngoc-lien	20.1018565	105.4243804	Xã	389	\N	\N
15094	Xã Ngọc Sơn	xa-ngoc-son	20.0797098	105.4126652	Xã	389	\N	\N
15097	Xã Lộc Thịnh	xa-loc-thinh	20.1032589	105.478675	Xã	389	\N	\N
15100	Xã Cao Thịnh	xa-cao-thinh	20.0629002	105.471249	Xã	389	\N	\N
15103	Xã Ngọc Trung	xa-ngoc-trung	20.0649888	105.4478131	Xã	389	\N	\N
15106	Xã Phùng Giáo	xa-phung-giao	19.9952325	105.3189726	Xã	389	\N	\N
15109	Xã Phùng Minh	xa-phung-minh	19.9604433	105.3189726	Xã	389	\N	\N
15112	Xã Phúc Thịnh	xa-phuc-thinh	19.9447263	105.3658125	Xã	389	\N	\N
15115	Xã Nguyệt Ấn	xa-nguyet-an	19.9921369	105.3541013	Xã	389	\N	\N
15118	Xã Kiên Thọ	xa-kien-tho	19.9711258	105.3950939	Xã	389	\N	\N
15121	Xã Minh Tiến	xa-minh-tien	20.0101465	105.4126652	Xã	389	\N	\N
15124	Xã Minh Sơn	xa-minh-son	20.0354105	105.3892372	Xã	389	\N	\N
15127	Thị trấn Cẩm Thủy	thi-tran-cam-thuy	20.2109764	105.4683193	Thị trấn	390	\N	\N
15130	Xã Phúc Do	xa-phuc-do	20.1409017	105.5386447	Xã	390	\N	\N
15133	Xã Cẩm Thành	xa-cam-thanh	20.2588857	105.3541013	Xã	390	\N	\N
15136	Xã Cẩm Quý	xa-cam-quy	20.2916161	105.4419546	Xã	390	\N	\N
15139	Xã Cẩm Lương	xa-cam-luong	20.2547006	105.4009508	Xã	390	\N	\N
15142	Xã Cẩm Thạch	xa-cam-thach	20.1988014	105.3775245	Xã	390	\N	\N
15145	Xã Cẩm Liên	xa-cam-lien	20.207208	105.348246	Xã	390	\N	\N
15148	Xã Cẩm Giang	xa-cam-giang	20.2378541	105.4595306	Xã	390	\N	\N
15151	Xã Cẩm Bình	xa-cam-binh	20.2009411	105.4185227	Xã	390	\N	\N
15154	Xã Cẩm Tú	xa-cam-tu	20.2462888	105.494688	Xã	390	\N	\N
15157	Xã Cẩm Sơn	xa-cam-son	20.1788293	105.471249	Xã	390	\N	\N
15160	Xã Cẩm Châu	xa-cam-chau	20.1577385	105.4478131	Xã	390	\N	\N
15163	Xã Cẩm Tâm	xa-cam-tam	20.1071731	105.494688	Xã	390	\N	\N
15166	Xã Cẩm Phong	xa-cam-phong	20.2204658	105.491758	Xã	390	\N	\N
15169	Xã Cẩm Ngọc	xa-cam-ngoc	20.197806	105.5181302	Xã	390	\N	\N
15172	Xã Cẩm Long	xa-cam-long	20.1845931	105.52803	Xã	390	\N	\N
15175	Xã Cẩm Yên	xa-cam-yen	20.1408984	105.5064087	Xã	390	\N	\N
15178	Xã Cẩm Tân	xa-cam-tan	20.1245688	105.5269218	Xã	390	\N	\N
15181	Xã Cẩm Phú	xa-cam-phu	20.1356313	105.5650239	Xã	390	\N	\N
15184	Xã Cẩm Vân	xa-cam-van	20.1029706	105.5415755	Xã	390	\N	\N
15187	Thị trấn Kim Tân	thi-tran-kim-tan	20.1276773	105.6691136	Thị trấn	391	\N	\N
15190	Thị trấn Vân Du	thi-tran-van-du	20.1402367	105.7380511	Thị trấn	391	\N	\N
15193	Xã Thạch Tân	xa-thach-tan	20.16088	105.6383202	Xã	391	\N	\N
15196	Xã Thạch Lâm	xa-thach-lam	20.331662	105.5122694	Xã	391	\N	\N
15199	Xã Thạch Quảng	xa-thach-quang	20.2789578	105.5181302	Xã	391	\N	\N
15202	Xã Thạch Tượng	xa-thach-tuong	20.3179718	105.471249	Xã	391	\N	\N
15205	Xã Thạch Cẩm	xa-thach-cam	20.234678	105.5591615	Xã	391	\N	\N
15208	Xã Thạch Sơn	xa-thach-son	20.1904024	105.6002024	Xã	391	\N	\N
15211	Xã Thạch Bình	xa-thach-binh	20.166165	105.6119301	Xã	391	\N	\N
15214	Xã Thạch Định	xa-thach-dinh	20.142438	105.6500504	Xã	391	\N	\N
15217	Xã Thạch Đồng	xa-thach-dong	20.1392979	105.6207263	Xã	391	\N	\N
15220	Xã Thạch Long	xa-thach-long	20.1198149	105.6119301	Xã	391	\N	\N
15223	Xã Thành Mỹ	xa-thanh-my	20.2873719	105.5532993	Xã	391	\N	\N
15226	Xã Thành Yên	xa-thanh-yen	20.2767924	105.6060661	Xã	391	\N	\N
15229	Xã Thành Vinh	xa-thanh-vinh	20.2367596	105.6002024	Xã	391	\N	\N
15232	Xã Thành Minh	xa-thanh-minh	20.2261751	105.652983	Xã	391	\N	\N
15235	Xã Thành Công	xa-thanh-cong	20.2061277	105.6823124	Xã	391	\N	\N
15238	Xã Thành Tân	xa-thanh-tan	20.1755633	105.6999122	Xã	391	\N	\N
15241	Xã Thành Trực	xa-thanh-truc	20.1861529	105.6471178	Xã	391	\N	\N
15244	Xã Thành Vân	xa-thanh-van	20.1533767	105.7527221	Xã	391	\N	\N
15247	Xã Thành Tâm	xa-thanh-tam	20.1175623	105.7644596	Xã	391	\N	\N
15250	Xã Thành An	xa-thanh-an	20.0986712	105.7175138	Xã	391	\N	\N
15253	Xã Thành Thọ	xa-thanh-tho	20.1355519	105.6940454	Xã	391	\N	\N
15256	Xã Thành Tiến	xa-thanh-tien	20.2261203	105.6143188	Xã	391	\N	\N
15259	Xã Thành Long	xa-thanh-long	20.064989	105.7057792	Xã	391	\N	\N
15262	Xã Thành Kim	xa-thanh-kim	20.1403115	105.6735131	Xã	391	\N	\N
15265	Xã Thành Hưng	xa-thanh-hung	20.1166355	105.6471178	Xã	391	\N	\N
15268	Xã Ngọc Trạo	xa-ngoc-trao	20.0838894	105.7527221	Xã	391	\N	\N
15271	Thị trấn Hà Trung	thi-tran-ha-trung	19.992977	105.8451758	Thị trấn	392	\N	\N
15274	Xã Hà Long	xa-ha-long	20.1003188	105.8075503	Xã	392	\N	\N
15277	Xã Hà Vinh	xa-ha-vinh	20.0666949	105.9406128	Xã	392	\N	\N
15280	Xã Hà Bắc	xa-ha-bac	20.0621911	105.8319653	Xã	392	\N	\N
15283	Xã Hà Vân	xa-ha-van	20.0384433	105.8701316	Xã	392	\N	\N
15286	Xã Hà Yên	xa-ha-yen	20.0448261	105.8319653	Xã	392	\N	\N
15289	Xã Hà Thanh	xa-ha-thanh	20.0389162	105.896559	Xã	392	\N	\N
15292	Xã Hà Giang	xa-ha-giang	20.068033	105.7996769	Xã	392	\N	\N
15295	Xã Hà Dương	xa-ha-duong	20.0426801	105.8554513	Xã	392	\N	\N
15298	Xã Hà Phú	xa-ha-phu	19.9852562	105.8980272	Xã	392	\N	\N
15301	Xã Hà Phong	xa-ha-phong	19.9895478	105.8510475	Xã	392	\N	\N
15304	Xã Hà Ngọc	xa-ha-ngoc	19.9759058	105.8260943	Xã	392	\N	\N
15307	Xã Hà Ninh	xa-ha-ninh	20.0037745	105.8378366	Xã	392	\N	\N
15310	Xã Hà Lâm	xa-ha-lam	19.9921462	105.8701316	Xã	392	\N	\N
15313	Xã Hà Sơn	xa-ha-son	19.9649033	105.7879371	Xã	392	\N	\N
15316	Xã Hà Lĩnh	xa-ha-linh	20.0007009	105.776198	Xã	392	\N	\N
15319	Xã Hà Đông	xa-ha-dong	19.9974993	105.8114175	Xã	392	\N	\N
15322	Xã Hà Tân	xa-ha-tan	20.0206526	105.8114175	Xã	392	\N	\N
15325	Xã Hà Tiến	xa-ha-tien	20.0470145	105.776198	Xã	392	\N	\N
15328	Xã Hà Bình	xa-ha-binh	20.0263898	105.843708	Xã	392	\N	\N
15331	Xã Hà Lai	xa-ha-lai	20.0231692	105.8789403	Xã	392	\N	\N
15334	Xã Hà Châu	xa-ha-chau	20.0210178	105.9024322	Xã	392	\N	\N
15337	Xã Hà Toại	xa-ha-toai	19.9684043	105.9083056	Xã	392	\N	\N
15340	Xã Hà Thái	xa-ha-thai	20.0047339	105.8906859	Xã	392	\N	\N
15343	Xã Hà Hải	xa-ha-hai	19.9915482	105.9083056	Xã	392	\N	\N
15346	Thị trấn Vĩnh Lộc	thi-tran-vinh-loc	20.0600379	105.6163281	Thị trấn	393	\N	\N
15349	Xã Vĩnh Thành	xa-vinh-thanh	20.04608	105.6265908	Xã	393	\N	\N
15352	Xã Vĩnh Quang	xa-vinh-quang	20.0971764	105.5738179	Xã	393	\N	\N
15355	Xã Vĩnh Yên	xa-vinh-yen	20.0766338	105.5767493	Xã	393	\N	\N
15358	Xã Vĩnh Tiến	xa-vinh-tien	20.0713637	105.6031342	Xã	393	\N	\N
15361	Xã Vĩnh Long	xa-vinh-long	20.0976982	105.6002024	Xã	393	\N	\N
15364	Xã Vĩnh Phúc	xa-vinh-phuc	20.0597685	105.6353878	Xã	393	\N	\N
15367	Xã Vĩnh Hưng	xa-vinh-hung	20.0323654	105.6823124	Xã	393	\N	\N
15370	Xã Vĩnh Minh	xa-vinh-minh	20.0023283	105.7263152	Xã	393	\N	\N
15373	Xã Vĩnh Khang	xa-vinh-khang	20.0234379	105.6207263	Xã	393	\N	\N
15376	Xã Vĩnh Hòa	xa-vinh-hoa	20.0355419	105.6471178	Xã	393	\N	\N
15379	Xã Vĩnh Hùng	xa-vinh-hung	20.0323654	105.6823124	Xã	393	\N	\N
15382	Xã Vĩnh Tân	xa-vinh-tan	20.0291813	105.7175138	Xã	393	\N	\N
15385	Xã Vĩnh Ninh	xa-vinh-ninh	20.0397651	105.6002024	Xã	393	\N	\N
15388	Xã Vĩnh Thịnh	xa-vinh-thinh	20.0323118	105.7468535	Xã	393	\N	\N
15391	Xã Vĩnh An	xa-vinh-an	19.9807363	105.7409852	Xã	393	\N	\N
15394	Thị trấn Quán Lào	thi-tran-quan-lao	19.9699898	105.6515167	Thị trấn	394	\N	\N
15397	Thị trấn Thống Nhất	thi-tran-thong-nhat	20.0249908	105.5064087	Thị trấn	394	\N	\N
15400	Xã Yên Phú	xa-yen-phu	20.0007832	105.5503683	Xã	394	\N	\N
15403	Xã Yên Lâm	xa-yen-lam	20.0675255	105.5305382	Xã	394	\N	\N
15406	Xã Yên Tâm	xa-yen-tam	20.0308016	105.5386447	Xã	394	\N	\N
15409	Xã Yên Giang	xa-yen-giang	20.0113081	105.5298525	Xã	394	\N	\N
15412	Xã Quí Lộc	xa-qui-loc	20.0671513	105.5532993	Xã	394	\N	\N
15415	Xã Yên Thọ	xa-yen-tho	20.0450315	105.5738179	Xã	394	\N	\N
15418	Xã Yên Trung	xa-yen-trung	20.028702	105.5620927	Xã	394	\N	\N
15421	Xã Yên Trường	xa-yen-truong	20.0176461	105.5884754	Xã	394	\N	\N
15424	Xã Yên Bái	xa-yen-bai	20.0102708	105.5738179	Xã	394	\N	\N
15427	Xã Yên Phong	xa-yen-phong	20.0134338	105.6031342	Xã	394	\N	\N
15430	Xã Yên Thái	xa-yen-thai	20.0060608	105.6207263	Xã	394	\N	\N
15433	Xã Yên Hùng	xa-yen-hung	19.992366	105.5796808	Xã	394	\N	\N
15436	Xã Yên Thịnh	xa-yen-thinh	19.9760366	105.5679552	Xã	394	\N	\N
15439	Xã Yên Ninh	xa-yen-ninh	19.984471	105.6031342	Xã	394	\N	\N
15442	Xã Yên Lạc	xa-yen-lac	19.9702529	105.6002024	Xã	394	\N	\N
15445	Xã Định Tăng	xa-dinh-tang	19.9534066	105.6265908	Xã	394	\N	\N
15448	Xã Định Hòa	xa-dinh-hoa	19.9618171	105.6940454	Xã	394	\N	\N
15451	Xã Định Thành	xa-dinh-thanh	19.9481202	105.7175138	Xã	394	\N	\N
15454	Xã Định Công	xa-dinh-cong	19.9544188	105.7439194	Xã	394	\N	\N
15457	Xã Định Tân	xa-dinh-tan	19.9881388	105.6911121	Xã	394	\N	\N
15460	Xã Định Tiến	xa-dinh-tien	19.9828593	105.7175138	Xã	394	\N	\N
15463	Xã Định Long	xa-dinh-long	19.9918394	105.6500504	Xã	394	\N	\N
15466	Xã Định Liên	xa-dinh-lien	19.9881574	105.6265908	Xã	394	\N	\N
15469	Xã Định Tường	xa-dinh-tuong	19.9628826	105.6500504	Xã	394	\N	\N
15472	Xã Định Hưng	xa-dinh-hung	19.9870949	105.6705801	Xã	394	\N	\N
15475	Xã Định Hải	xa-dinh-hai	20.0081572	105.6617813	Xã	394	\N	\N
15478	Xã Định Bình	xa-dinh-binh	19.9497182	105.6676471	Xã	394	\N	\N
15481	Thị trấn Thọ Xuân	thi-tran-tho-xuan	19.9338744	105.5210607	Thị trấn	395	\N	\N
15484	Thị trấn Lam Sơn	thi-tran-lam-son	19.8978988	105.4038793	Thị trấn	395	\N	\N
15487	Thị trấn Sao Vàng	thi-tran-sao-vang	19.8869295	105.4624601	Thị trấn	395	\N	\N
15490	Xã Xuân Khánh	xa-xuan-khanh	14.058324	108.277199	Xã	395	\N	\N
15493	Xã Thọ Nguyên	xa-tho-nguyen	19.9239014	105.5679552	Xã	395	\N	\N
15496	Xã Xuân Thành	xa-xuan-thanh	19.9365333	105.5562304	Xã	395	\N	\N
15499	Xã Hạnh Phúc	xa-hanh-phuc	19.9381016	105.5386447	Xã	395	\N	\N
15502	Xã Bắc Lương	xa-bac-luong	19.9201999	105.5445064	Xã	395	\N	\N
15505	Xã Nam Giang	xa-nam-giang	19.908614	105.5445064	Xã	395	\N	\N
15508	Xã Xuân Phong	xa-xuan-phong	19.9002089	105.5738179	Xã	395	\N	\N
15511	Xã Thọ Lộc	xa-tho-loc	19.890714	105.5503683	Xã	395	\N	\N
15514	Xã Xuân Trường	xa-xuan-truong	19.9291236	105.509339	Xã	395	\N	\N
15517	Xã Xuân Hòa	xa-xuan-hoa	19.9475479	105.4976181	Xã	395	\N	\N
15520	Xã Thọ Hải	xa-tho-hai	19.9433156	105.4800382	Xã	395	\N	\N
15523	Xã Tây Hồ	xa-tay-ho	19.9159725	105.5269218	Xã	395	\N	\N
15526	Xã Xuân Giang	xa-xuan-giang	19.9127836	105.4976181	Xã	395	\N	\N
15529	Xã Xuân Quang	xa-xuan-quang	19.9054281	105.5151997	Xã	395	\N	\N
15532	Xã Xuân Sơn	xa-xuan-son	19.8869717	105.494688	Xã	395	\N	\N
15535	Xã Xuân Hưng	xa-xuan-hung	19.9122258	105.471249	Xã	395	\N	\N
15538	Xã Thọ Diên	xa-tho-dien	19.9274912	105.4624601	Xã	395	\N	\N
15541	Xã Thọ Lâm	xa-tho-lam	19.9037477	105.4360963	Xã	395	\N	\N
15544	Xã Thọ Xương	xa-tho-xuong	19.9047272	105.3921656	Xã	395	\N	\N
15547	Xã Xuân Bái	xa-xuan-bai	19.8936512	105.386309	Xã	395	\N	\N
15550	Xã Xuân Phú	xa-xuan-phu	19.8531439	105.4185227	Xã	395	\N	\N
15553	Xã Xuân Thắng	xa-xuan-thang	19.8669087	105.4595306	Xã	395	\N	\N
15556	Xã Xuân Lam	xa-xuan-lam	19.9316389	105.4155939	Xã	395	\N	\N
15559	Xã Xuân Thiên	xa-xuan-thien	19.9464338	105.4448838	Xã	395	\N	\N
15562	Xã Thọ Minh	xa-tho-minh	19.9564657	105.4624601	Xã	395	\N	\N
15565	Xã Xuân Châu	xa-xuan-chau	19.9838445	105.4478131	Xã	395	\N	\N
15568	Xã Thọ Lập	xa-tho-lap	19.97281	105.4741787	Xã	395	\N	\N
15571	Xã Quảng Phú	xa-quang-phu	20.0049438	105.471249	Xã	395	\N	\N
15574	Xã Xuân Tín	xa-xuan-tin	19.9796779	105.494688	Xã	395	\N	\N
15577	Xã Phú Yên	xa-phu-yen	19.9638874	105.509339	Xã	395	\N	\N
15580	Xã Xuân Yên	xa-xuan-yen	19.9449397	105.5269218	Xã	395	\N	\N
15583	Xã Xuân Lai	xa-xuan-lai	19.9554817	105.5386447	Xã	395	\N	\N
15586	Xã Xuân Lập	xa-xuan-lap	19.9765439	105.5298525	Xã	395	\N	\N
15589	Xã Thọ Thắng	xa-tho-thang	19.9849628	105.516665	Xã	395	\N	\N
15592	Xã Xuân Minh	xa-xuan-minh	19.9744503	105.5532993	Xã	395	\N	\N
15595	Xã Xuân Tân	xa-xuan-tan	19.9533886	105.5620927	Xã	395	\N	\N
15598	Xã Xuân Vinh	xa-xuan-vinh	19.9507675	105.5914071	Xã	395	\N	\N
15601	Xã Thọ Trường	xa-tho-truong	19.9339151	105.5855438	Xã	395	\N	\N
15604	Thị trấn Thường Xuân	thi-tran-thuong-xuan	19.9025382	105.3511736	Thị trấn	396	\N	\N
15607	Xã Bát Mọt	xa-bat-mot	19.9932195	105.0089888	Xã	396	\N	\N
15610	Xã Yên Nhân	xa-yen-nhan	19.9810771	105.1492869	Xã	396	\N	\N
15619	Xã Xuân Lẹ	xa-xuan-le	19.8040216	105.1843801	Xã	396	\N	\N
15622	Xã Vạn Xuân	xa-van-xuan	19.8801266	105.2428853	Xã	396	\N	\N
15628	Xã Lương Sơn	xa-luong-son	19.972914	105.2428853	Xã	396	\N	\N
15631	Xã Xuân Cao	xa-xuan-cao	19.8572653	105.3716684	Xã	396	\N	\N
15634	Xã Luận Thành	xa-luan-thanh	19.8015075	105.4126652	Xã	396	\N	\N
15637	Xã Luận Khê	xa-luan-khe	19.7897691	105.348246	Xã	396	\N	\N
15640	Xã Xuân Thắng	xa-xuan-thang	19.7454485	105.3248269	Xã	396	\N	\N
15643	Xã Xuân Lộc	xa-xuan-loc	19.7938581	105.3014109	Xã	396	\N	\N
15646	Xã Xuân Cẩm	xa-xuan-cam	19.886612	105.3014109	Xã	396	\N	\N
15649	Xã Xuân Dương	xa-xuan-duong	19.9099459	105.3658125	Xã	396	\N	\N
15652	Xã Thọ Thanh	xa-tho-thanh	19.8867603	105.3658125	Xã	396	\N	\N
15655	Xã Ngọc Phụng	xa-ngoc-phung	19.9246283	105.3306814	Xã	396	\N	\N
15658	Xã Xuân Chinh	xa-xuan-chinh	19.7535836	105.2311827	Xã	396	\N	\N
15661	Xã Tân Thành	xa-tan-thanh	19.7624885	105.3950939	Xã	396	\N	\N
15664	Thị trấn Triệu Sơn	thi-tran-trieu-son	19.8207285	105.6046002	Thị trấn	397	\N	\N
15667	Xã Thọ Sơn	xa-tho-son	19.8532482	105.4829681	Xã	397	\N	\N
15670	Xã Thọ Bình	xa-tho-binh	19.8184881	105.4829681	Xã	397	\N	\N
15673	Xã Thọ Tiến	xa-tho-tien	19.8395866	105.5064087	Xã	397	\N	\N
15676	Xã Hợp Lý	xa-hop-ly	19.8180146	105.5210607	Xã	397	\N	\N
15679	Xã Hợp Tiến	xa-hop-tien	19.8076806	105.5309477	Xã	397	\N	\N
15682	Xã Hợp Thành	xa-hop-thanh	19.800677	105.5532993	Xã	397	\N	\N
15685	Xã Triệu Thành	xa-trieu-thanh	19.7764326	105.5327831	Xã	397	\N	\N
15688	Xã Hợp Thắng	xa-hop-thang	19.8075423	105.5738179	Xã	397	\N	\N
15691	Xã Minh Sơn	xa-minh-son	19.823873	105.5855438	Xã	397	\N	\N
15694	Xã Minh Dân	xa-minh-dan	19.8312642	105.6163281	Xã	397	\N	\N
15697	Xã Minh Châu	xa-minh-chau	19.8202155	105.6265908	Xã	397	\N	\N
15700	Xã Dân Lực	xa-dan-luc	19.842836	105.6002024	Xã	397	\N	\N
15703	Xã Dân Lý	xa-dan-ly	19.8244347	105.6441852	Xã	397	\N	\N
15706	Xã Dân Quyền	xa-dan-quyen	19.8523245	105.6236585	Xã	397	\N	\N
15709	Xã An Nông	xa-an-nong	19.8044128	105.6089981	Xã	397	\N	\N
15712	Xã Văn Sơn	xa-van-son	19.7743905	105.5884754	Xã	397	\N	\N
15715	Xã Thái Hòa	xa-thai-hoa	19.7712621	105.6236585	Xã	397	\N	\N
15718	Xã Tân Ninh	xa-tan-ninh	19.7365249	105.6236585	Xã	397	\N	\N
15721	Xã Đồng Lợi	xa-dong-loi	19.7649698	105.6617813	Xã	397	\N	\N
15724	Xã Đồng Tiến	xa-dong-tien	19.78024	105.6852455	Xã	397	\N	\N
15727	Xã Đồng Thắng	xa-dong-thang	19.7623504	105.6911121	Xã	397	\N	\N
15730	Xã Tiến Nông	xa-tien-nong	19.800752	105.6500504	Xã	397	\N	\N
15733	Xã Khuyến Nông	xa-khuyen-nong	19.7828603	105.6559158	Xã	397	\N	\N
15736	Xã Xuân Thịnh	xa-xuan-thinh	19.8722932	105.5620927	Xã	397	\N	\N
15739	Xã Xuân Lộc	xa-xuan-loc	19.8801858	105.5547648	Xã	397	\N	\N
15742	Xã Thọ Dân	xa-tho-dan	19.8564808	105.5445064	Xã	397	\N	\N
15745	Xã Xuân Thọ	xa-xuan-tho	19.8459372	105.5327831	Xã	397	\N	\N
15748	Xã Thọ Tân	xa-tho-tan	19.8343852	105.5650239	Xã	397	\N	\N
15751	Xã Thọ Ngọc	xa-tho-ngoc	19.8754209	105.5269218	Xã	397	\N	\N
15754	Xã Thọ Cường	xa-tho-cuong	19.8590827	105.5151997	Xã	397	\N	\N
15757	Xã Thọ Phú	xa-tho-phu	19.8638895	105.5914071	Xã	397	\N	\N
15760	Xã Thọ Vực	xa-tho-vuc	19.88231	105.5796808	Xã	397	\N	\N
15763	Xã Thọ Thế	xa-tho-the	19.8538736	105.5738179	Xã	397	\N	\N
15766	Xã Nông Trường	xa-nong-truong	19.7970551	105.6265908	Xã	397	\N	\N
15769	Xã Bình Sơn	xa-binh-son	19.810003	105.4478131	Xã	397	\N	\N
15772	Thị trấn Vạn Hà	thi-tran-van-ha	19.8829688	105.6791207	Thị trấn	398	\N	\N
15775	Xã Thiệu Ngọc	xa-thieu-ngoc	19.9328663	105.5972706	Xã	398	\N	\N
15778	Xã Thiệu Vũ	xa-thieu-vu	19.9249747	105.6207263	Xã	398	\N	\N
15781	Xã Thiệu Phúc	xa-thieu-phuc	19.8928663	105.6559158	Xã	398	\N	\N
15784	Xã Thiệu Tiến	xa-thieu-tien	19.9118158	105.6383202	Xã	398	\N	\N
15787	Xã Thiệu Công	xa-thieu-cong	19.9212923	105.6617813	Xã	398	\N	\N
15790	Xã Thiệu Phú	xa-thieu-phu	19.904972	105.6823124	Xã	398	\N	\N
15793	Xã Thiệu Long	xa-thieu-long	19.9281323	105.6823124	Xã	398	\N	\N
15796	Xã Thiệu Giang	xa-thieu-giang	19.9275921	105.7204476	Xã	398	\N	\N
15799	Xã Thiệu Duy	xa-thieu-duy	19.9061326	105.7064036	Xã	398	\N	\N
15802	Xã Thiệu Nguyên	xa-thieu-nguyen	19.8828625	105.7028457	Xã	398	\N	\N
15805	Xã Thiệu Hợp	xa-thieu-hop	19.8909695	105.7377126	Xã	398	\N	\N
15808	Xã Thiệu Thịnh	xa-thieu-thinh	19.9012591	105.7556564	Xã	398	\N	\N
15811	Xã Thiệu Quang	xa-thieu-quang	19.9249435	105.7497878	Xã	398	\N	\N
15814	Xã Thiệu Thành	xa-thieu-thanh	19.9291889	105.6383202	Xã	398	\N	\N
15817	Xã Thiệu Toán	xa-thieu-toan	19.9091745	105.6031342	Xã	398	\N	\N
15820	Xã Thiệu Chính	xa-thieu-chinh	19.8917999	105.6031342	Xã	398	\N	\N
15823	Xã Thiệu Hòa	xa-thieu-hoa	19.8739021	105.6089981	Xã	398	\N	\N
15826	Xã Thiệu Minh	xa-thieu-minh	19.9012845	105.6265908	Xã	398	\N	\N
15829	Xã Thiệu Tâm	xa-thieu-tam	19.8833868	105.6324554	Xã	398	\N	\N
15832	Xã Thiệu Viên	xa-thieu-vien	19.8707558	105.6441852	Xã	398	\N	\N
15835	Xã Thiệu Lý	xa-thieu-ly	19.8575998	105.6617813	Xã	398	\N	\N
15838	Xã Thiệu Vận	xa-thieu-van	19.8624394	105.744744	Xã	398	\N	\N
15841	Xã Thiệu Trung	xa-thieu-trung	19.8502332	105.6793792	Xã	398	\N	\N
15844	Xã Thiệu Đô	xa-thieu-do	19.8702334	105.6823124	Xã	398	\N	\N
15847	Xã Thiệu Châu	xa-thieu-chau	19.8649676	105.7087128	Xã	398	\N	\N
15850	Xã Thiệu Vân	xa-thieu-van	19.8624394	105.744744	Xã	380	\N	\N
15853	Xã Thiệu Giao	xa-thieu-giao	19.8512796	105.7321831	Xã	398	\N	\N
15856	Xã Thiệu Khánh	xa-thieu-khanh	19.8732376	105.7529041	Xã	380	\N	\N
15859	Xã Thiệu Dương	xa-thieu-duong	19.8649413	105.7732633	Xã	380	\N	\N
15862	Xã Thiệu Tân	xa-thieu-tan	19.8797927	105.7330093	Xã	398	\N	\N
15865	Thị trấn Bút Sơn	thi-tran-but-son	19.8561896	105.8539834	Thị trấn	399	\N	\N
15868	Phường Tào Xuyên	phuong-tao-xuyen	19.8441795	105.7999601	Phường	380	\N	\N
15871	Xã Hoằng Giang	xa-hoang-giang	19.8880923	105.7732633	Xã	399	\N	\N
15874	Xã Hoằng Xuân	xa-hoang-xuan	19.9107134	105.7791327	Xã	399	\N	\N
15877	Xã Hoằng Khánh	xa-hoang-khanh	19.9312374	105.776198	Xã	399	\N	\N
15880	Xã Hoằng Phượng	xa-hoang-phuong	19.8991375	105.7791327	Xã	399	\N	\N
15883	Xã Hoằng Phú	xa-hoang-phu	19.8016627	105.9288641	Xã	399	\N	\N
15886	Xã Hoằng Quỳ	xa-hoang-quy	19.8791194	105.8084823	Xã	399	\N	\N
15889	Xã Hoằng Kim	xa-hoang-kim	19.9096352	105.8070147	Xã	399	\N	\N
15892	Xã Hoằng Trung	xa-hoang-trung	19.9201624	105.802612	Xã	399	\N	\N
15895	Xã Hoằng Trinh	xa-hoang-trinh	19.9174989	105.8319653	Xã	399	\N	\N
15898	Xã Hoằng Sơn	xa-hoang-son	19.9006521	105.8422401	Xã	399	\N	\N
15901	Xã Hoằng Lương	xa-hoang-luong	19.9106453	105.843708	Xã	399	\N	\N
15904	Xã Hoằng Xuyên	xa-hoang-xuyen	19.8790668	105.8569193	Xã	399	\N	\N
15907	Xã Hoằng Cát	xa-hoang-cat	19.8775239	105.8260943	Xã	399	\N	\N
15910	Xã Hoằng Khê	xa-hoang-khe	19.8872513	105.8304975	Xã	399	\N	\N
15913	Xã Hoằng Lý	xa-hoang-ly	19.85563	105.7955739	Xã	380	\N	\N
15916	Xã Hoằng Quý	xa-hoang-quy	19.8959488	105.8143528	Xã	399	\N	\N
15919	Xã Hoằng Hợp	xa-hoang-hop	19.8749255	105.790872	Xã	399	\N	\N
15922	Xã Hoằng Long	xa-hoang-long	19.8307985	105.8031	Xã	380	\N	\N
15925	Xã Hoằng Quang	xa-hoang-quang	19.8229481	105.8179036	Xã	380	\N	\N
15928	Xã Hoằng Minh	xa-hoang-minh	19.8538461	105.8319653	Xã	399	\N	\N
15931	Xã Hoằng Phúc	xa-hoang-phuc	19.8680081	105.8671954	Xã	399	\N	\N
15934	Xã Hoằng Đức	xa-hoang-duc	19.8643542	105.843708	Xã	399	\N	\N
15937	Xã Hoằng Hà	xa-hoang-ha	19.8774428	105.8906859	Xã	399	\N	\N
15940	Xã Hoằng Đạt	xa-hoang-dat	19.8848314	105.8730678	Xã	399	\N	\N
15943	Xã Hoằng Vinh	xa-hoang-vinh	19.846996	105.843708	Xã	399	\N	\N
15946	Xã Hoằng Đạo	xa-hoang-dao	19.8532774	105.8701316	Xã	399	\N	\N
15949	Xã Hoằng Thắng	xa-hoang-thang	19.8301361	105.8701316	Xã	399	\N	\N
15952	Xã Hoằng Đồng	xa-hoang-dong	19.8396306	105.8451758	Xã	399	\N	\N
15955	Xã Hoằng Thái	xa-hoang-thai	19.8227891	105.8554513	Xã	399	\N	\N
15958	Xã Hoằng Thịnh	xa-hoang-thinh	19.8243842	105.8378366	Xã	399	\N	\N
15961	Xã Hoằng Thành	xa-hoang-thanh	19.8106864	105.8613233	Xã	399	\N	\N
15964	Xã Hoằng Lộc	xa-hoang-loc	19.8128127	105.8378366	Xã	399	\N	\N
15967	Xã Hoằng Trạch	xa-hoang-trach	19.7943939	105.8495796	Xã	399	\N	\N
15970	Xã Hoằng Đại	xa-hoang-dai	19.7959865	105.8319653	Xã	380	\N	\N
15973	Xã Hoằng Phong	xa-hoang-phong	19.8017063	105.896559	Xã	399	\N	\N
15976	Xã Hoằng Lưu	xa-hoang-luu	19.819593	105.8906859	Xã	399	\N	\N
15979	Xã Hoằng Châu	xa-hoang-chau	19.7827925	105.8818766	Xã	399	\N	\N
15982	Xã Hoằng Tân	xa-hoang-tan	19.7817613	105.8613233	Xã	399	\N	\N
15985	Xã Hoằng Yến	xa-hoang-yen	19.8753027	105.9141793	Xã	399	\N	\N
15988	Xã Hoằng Tiến	xa-hoang-tien	19.8505584	105.9318012	Xã	399	\N	\N
15991	Xã Hoằng Hải	xa-hoang-hai	19.8621268	105.9318012	Xã	399	\N	\N
15994	Xã Hoằng Ngọc	xa-hoang-ngoc	19.8500739	105.9053689	Xã	399	\N	\N
15997	Xã Hoằng Đông	xa-hoang-dong	19.8396306	105.8451758	Xã	399	\N	\N
16000	Xã Hoằng Thanh	xa-hoang-thanh	19.8106864	105.8613233	Xã	399	\N	\N
16003	Xã Hoằng Phụ	xa-hoang-phu	19.8975441	105.7967419	Xã	399	\N	\N
16006	Xã Hoằng Trường	xa-hoang-truong	19.8778702	105.9494248	Xã	399	\N	\N
16009	Xã Hoằng Anh	xa-hoang-anh	19.8570281	105.8145383	Xã	380	\N	\N
16012	Thị trấn Hậu Lộc	thi-tran-hau-loc	19.9166288	105.8892176	Thị trấn	400	\N	\N
16015	Xã Đồng Lộc	xa-dong-loc	19.9732315	105.8554513	Xã	400	\N	\N
16018	Xã Đại Lộc	xa-dai-loc	19.8891069	105.8464144	Xã	400	\N	\N
16021	Xã Triệu Lộc	xa-trieu-loc	19.9405928	105.8017495	Xã	400	\N	\N
16024	Xã Châu Lộc	xa-chau-loc	19.9496339	105.7967419	Xã	400	\N	\N
16027	Xã Tiến Lộc	xa-tien-loc	19.927539	105.8479788	Xã	400	\N	\N
16030	Xã Lộc Sơn	xa-loc-son	19.9223615	105.8694347	Xã	400	\N	\N
16033	Xã Cầu Lộc	xa-cau-loc	14.058324	108.277199	Xã	400	\N	\N
16036	Xã Thành Lộc	xa-thanh-loc	19.9558707	105.8554513	Xã	400	\N	\N
16039	Xã Tuy Lộc	xa-tuy-loc	14.058324	108.277199	Xã	400	\N	\N
16042	Xã Phong Lộc	xa-phong-loc	19.9700153	105.8906859	Xã	400	\N	\N
16045	Xã Mỹ Lộc	xa-my-loc	19.9142955	105.8671954	Xã	400	\N	\N
16048	Xã Văn Lộc	xa-van-loc	19.9048702	105.8565298	Xã	400	\N	\N
16051	Xã Thuần Lộc	xa-thuan-loc	19.8922189	105.8554513	Xã	400	\N	\N
16054	Xã Lộc Tân	xa-loc-tan	19.8891069	105.8464144	Xã	400	\N	\N
16057	Xã Xuân Lộc	xa-xuan-loc	19.8963534	105.9053689	Xã	400	\N	\N
16060	Xã Thịnh Lộc	xa-thinh-loc	19.9201133	105.9002111	Xã	400	\N	\N
16063	Xã Hoa Lộc	xa-hoa-loc	19.9282582	105.9173102	Xã	400	\N	\N
16066	Xã Liên Lộc	xa-lien-loc	19.9441873	105.9200531	Xã	400	\N	\N
16069	Xã Quang Lộc	xa-quang-loc	19.9559351	105.9229297	Xã	400	\N	\N
16072	Xã Phú Lộc	xa-phu-loc	19.918422	105.9171161	Xã	400	\N	\N
16075	Xã Hòa Lộc	xa-hoa-loc	19.9282582	105.9173102	Xã	400	\N	\N
16078	Xã Minh Lộc	xa-minh-loc	19.9183601	105.9494248	Xã	400	\N	\N
16081	Xã Hưng Lộc	xa-hung-loc	19.9409601	105.9552997	Xã	400	\N	\N
16084	Xã Hải Lộc	xa-hai-loc	19.9036303	105.9523622	Xã	400	\N	\N
16087	Xã Đa Lộc	xa-da-loc	19.9466709	105.9876149	Xã	400	\N	\N
16090	Xã Ngư Lộc	xa-ngu-loc	19.9288526	105.9611748	Xã	400	\N	\N
16093	Thị trấn Nga Sơn	thi-tran-nga-son	20.0045547	105.9714566	Thị trấn	401	\N	\N
16096	Xã Ba Đình	xa-ba-dinh	20.0246491	105.9259271	Xã	401	\N	\N
16099	Xã Nga Vịnh	xa-nga-vinh	20.0351419	105.9376756	Xã	401	\N	\N
16102	Xã Nga Văn	xa-nga-van	20.005134	105.9494248	Xã	401	\N	\N
16105	Xã Nga Thiện	xa-nga-thien	20.049254	105.9729255	Xã	401	\N	\N
16108	Xã Nga Tiến	xa-nga-tien	19.9980995	106.0258126	Xã	401	\N	\N
16111	Xã Nga Lĩnh	xa-nga-linh	19.9778241	105.9318012	Xã	401	\N	\N
16114	Xã Nga Nhân	xa-nga-nhan	19.9762079	105.9494248	Xã	401	\N	\N
16117	Xã Nga Trung	xa-nga-trung	19.9798344	105.9729255	Xã	401	\N	\N
16120	Xã Nga Bạch	xa-nga-bach	19.968805	105.9670501	Xã	401	\N	\N
16123	Xã Nga Thanh	xa-nga-thanh	20.0008093	105.9964291	Xã	401	\N	\N
16126	Xã Nga Hưng	xa-nga-hung	19.9924446	105.9773322	Xã	401	\N	\N
16129	Xã Nga Mỹ	xa-nga-my	19.998269	105.9611748	Xã	401	\N	\N
16132	Xã Nga Yên	xa-nga-yen	20.0076764	105.9846769	Xã	401	\N	\N
16135	Xã Nga Giáp	xa-nga-giap	20.0392219	105.9876149	Xã	401	\N	\N
16138	Xã Nga Hải	xa-nga-hai	20.0187043	105.9905529	Xã	401	\N	\N
16141	Xã Nga Thành	xa-nga-thanh	20.0008093	105.9964291	Xã	401	\N	\N
16144	Xã Nga An	xa-nga-an	20.0359662	106.022874	Xã	401	\N	\N
16147	Xã Nga Phú	xa-nga-phu	20.0453588	106.0463837	Xã	401	\N	\N
16150	Xã Nga Điền	xa-nga-dien	20.0553952	106.0316898	Xã	401	\N	\N
16153	Xã Nga Tân	xa-nga-tan	19.9792114	106.0111203	Xã	401	\N	\N
16156	Xã Nga Thủy	xa-nga-thuy	19.9724291	105.9905529	Xã	401	\N	\N
16159	Xã Nga Liên	xa-nga-lien	20.0107521	106.0140586	Xã	401	\N	\N
16162	Xã Nga Thái	xa-nga-thai	20.0222245	106.0463837	Xã	401	\N	\N
16165	Xã Nga Thạch	xa-nga-thach	19.9593915	105.9435501	Xã	401	\N	\N
16168	Xã Nga Thắng	xa-nga-thang	19.998343	105.9288641	Xã	401	\N	\N
16171	Xã Nga Trường	xa-nga-truong	20.0219501	105.9552997	Xã	401	\N	\N
16174	Thị trấn Yên Cát	thi-tran-yen-cat	19.6683311	105.4448838	Thị trấn	402	\N	\N
16177	Xã Bãi Trành	xa-bai-tranh	19.4771251	105.4126652	Xã	402	\N	\N
16180	Xã Xuân Hòa	xa-xuan-hoa	19.5559683	105.3716684	Xã	402	\N	\N
16183	Xã Xuân Bình	xa-xuan-binh	19.4762975	105.488828	Xã	402	\N	\N
16186	Xã Hóa Quỳ	xa-hoa-quy	19.6403112	105.4009508	Xã	402	\N	\N
16189	Xã Xuân Quỳ	xa-xuan-quy	19.6191797	105.3775245	Xã	402	\N	\N
16192	Xã Yên Lễ	xa-yen-le	19.6835817	105.4360963	Xã	402	\N	\N
16195	Xã Cát Vân	xa-cat-van	19.6791545	105.3541013	Xã	402	\N	\N
16198	Xã Cát Tân	xa-cat-tan	19.6982428	105.4009508	Xã	402	\N	\N
16201	Xã Tân Bình	xa-tan-binh	19.6384175	105.488828	Xã	402	\N	\N
16204	Xã Bình Lương	xa-binh-luong	19.5730239	105.4419546	Xã	402	\N	\N
16207	Xã Thanh Quân	xa-thanh-quan	19.6860366	105.2077798	Xã	402	\N	\N
16210	Xã Thanh Xuân	xa-thanh-xuan	19.7011207	105.3014109	Xã	402	\N	\N
16213	Xã Thanh Hòa	xa-thanh-hoa	19.585223	105.3014109	Xã	402	\N	\N
16216	Xã Thanh Phong	xa-thanh-phong	19.6514965	105.2721456	Xã	402	\N	\N
16219	Xã Thanh Lâm	xa-thanh-lam	19.6464249	105.3306814	Xã	402	\N	\N
16222	Xã Thanh Sơn	xa-thanh-son	19.7051802	105.2545888	Xã	402	\N	\N
16225	Xã Thượng Ninh	xa-thuong-ninh	19.7352036	105.4419546	Xã	402	\N	\N
16228	Thị trấn Bến Sung	thi-tran-ben-sung	19.6419598	105.5864135	Thị trấn	403	\N	\N
16231	Xã Cán Khê	xa-can-khe	14.058324	108.277199	Xã	403	\N	\N
16234	Xã Xuân Du	xa-xuan-du	19.776472	105.5650239	Xã	403	\N	\N
16237	Xã Xuân Thọ	xa-xuan-tho	19.7615922	105.471249	Xã	403	\N	\N
16240	Xã Phượng Nghi	xa-phuong-nghi	19.7269469	105.5357139	Xã	403	\N	\N
16243	Xã Mậu Lâm	xa-mau-lam	19.6996387	105.5826123	Xã	403	\N	\N
16246	Xã Xuân Khang	xa-xuan-khang	19.6826858	105.5122694	Xã	403	\N	\N
16249	Xã Phú Nhuận	xa-phu-nhuan	19.6642906	105.6096321	Xã	403	\N	\N
16252	Xã Hải Long	xa-hai-long	19.6385403	105.5532993	Xã	403	\N	\N
16255	Xã Hải Vân	xa-hai-van	14.058324	108.277199	Xã	403	\N	\N
16258	Xã Xuân Thái	xa-xuan-thai	19.4835008	105.518306	Xã	403	\N	\N
16261	Xã Xuân Phúc	xa-xuan-phuc	19.5785848	105.5767493	Xã	403	\N	\N
16264	Xã Yên Thọ	xa-yen-tho	19.5870604	105.6119301	Xã	403	\N	\N
16267	Xã Yên Lạc	xa-yen-lac	19.538202	105.6348502	Xã	403	\N	\N
16270	Xã Phúc Đường	xa-phuc-duong	19.5312491	105.5884754	Xã	403	\N	\N
16273	Xã Thanh Tân	xa-thanh-tan	19.4449565	105.5826123	Xã	403	\N	\N
16276	Xã Thanh Kỳ	xa-thanh-ky	19.4408436	105.629523	Xã	403	\N	\N
16279	Thị trấn Nông Cống	thi-tran-nong-cong	19.6255196	105.6515167	Thị trấn	404	\N	\N
16282	Xã Tân Phúc	xa-tan-phuc	19.7439246	105.6705801	Xã	404	\N	\N
16285	Xã Tân Thọ	xa-tan-tho	19.7370713	105.6500504	Xã	404	\N	\N
16288	Xã Hoàng Sơn	xa-hoang-son	19.7186788	105.6940454	Xã	404	\N	\N
16291	Xã Tân Khang	xa-tan-khang	19.7123261	105.6353878	Xã	404	\N	\N
16294	Xã Hoàng Giang	xa-hoang-giang	19.7086883	105.7087128	Xã	404	\N	\N
16297	Xã Trung Chính	xa-trung-chinh	19.7118279	105.6735131	Xã	404	\N	\N
16300	Xã Trung Ý	xa-trung-y	19.6931879	105.6876397	Xã	404	\N	\N
16303	Xã Trung Thành	xa-trung-thanh	19.6965744	105.6823124	Xã	404	\N	\N
16306	Xã Tế Tân	xa-te-tan	19.6797529	105.7087128	Xã	404	\N	\N
16309	Xã Tế Thắng	xa-te-thang	19.675511	105.6588485	Xã	404	\N	\N
16315	Xã Tế Lợi	xa-te-loi	19.6682449	105.675909	Xã	404	\N	\N
16318	Xã Tế Nông	xa-te-nong	19.6597606	105.7057792	Xã	404	\N	\N
16321	Xã Minh Nghĩa	xa-minh-nghia	19.641334	105.6852455	Xã	404	\N	\N
16324	Xã Minh Khôi	xa-minh-khoi	19.6397685	105.7028457	Xã	404	\N	\N
16327	Xã Vạn Hòa	xa-van-hoa	19.6339235	105.6383202	Xã	404	\N	\N
16330	Xã Trường Trung	xa-truong-trung	19.6261063	105.7263152	Xã	404	\N	\N
16333	Xã Vạn Thắng	xa-van-thang	19.6333652	105.6119301	Xã	404	\N	\N
16336	Xã Trường Giang	xa-truong-giang	19.6177049	105.7556564	Xã	404	\N	\N
16339	Xã Vạn Thiện	xa-van-thien	19.6214233	105.6643181	Xã	404	\N	\N
16342	Xã Thăng Long	xa-thang-long	19.5965634	105.6353878	Xã	404	\N	\N
16345	Xã Trường Minh	xa-truong-minh	19.6115618	105.7018597	Xã	404	\N	\N
16348	Xã Trường Sơn	xa-truong-son	19.64283	105.7775259	Xã	404	\N	\N
16351	Xã Thăng Bình	xa-thang-binh	19.5924077	105.6823124	Xã	404	\N	\N
16354	Xã Công Liêm	xa-cong-liem	19.5597669	105.6588485	Xã	404	\N	\N
16357	Xã Tượng Văn	xa-tuong-van	19.5908701	105.7321831	Xã	404	\N	\N
16360	Xã Thăng Thọ	xa-thang-tho	19.5828467	105.6549692	Xã	404	\N	\N
16363	Xã Tượng Lĩnh	xa-tuong-linh	19.5768775	105.7148448	Xã	404	\N	\N
16366	Xã Tượng Sơn	xa-tuong-son	19.5462591	105.7062376	Xã	404	\N	\N
16369	Xã Công Chính	xa-cong-chinh	19.5355847	105.6705801	Xã	404	\N	\N
16372	Xã Công Bình	xa-cong-binh	19.5071248	105.6324554	Xã	404	\N	\N
16375	Xã Yên Mỹ	xa-yen-my	19.4940024	105.6500504	Xã	404	\N	\N
16378	Thị trấn Rừng Thông	thi-tran-rung-thong	19.8207599	105.7336501	Thị trấn	405	\N	\N
16379	Phường An Hoạch	phuong-an-hoach	19.79425	105.7499685	Phường	380	\N	\N
16381	Xã Đông Hoàng	xa-dong-hoang	19.8375981	105.6588485	Xã	405	\N	\N
16384	Xã Đông Ninh	xa-dong-ninh	19.8165476	105.6676471	Xã	405	\N	\N
16387	Xã Đông Khê	xa-dong-khe	19.8328652	105.6793792	Xã	405	\N	\N
16390	Xã Đông Hòa	xa-dong-hoa	19.7981308	105.6793792	Xã	405	\N	\N
16393	Xã Đông Yên	xa-dong-yen	19.7902418	105.7028457	Xã	405	\N	\N
16396	Xã Đông Lĩnh	xa-dong-linh	19.8310372	105.7507077	Xã	380	\N	\N
16399	Xã Đông Minh	xa-dong-minh	19.814447	105.6911121	Xã	405	\N	\N
16402	Xã Đông Thanh	xa-dong-thanh	19.8486545	105.6969788	Xã	405	\N	\N
16405	Xã Đông Tiến	xa-dong-tien	19.8323389	105.7175138	Xã	405	\N	\N
16408	Xã Đông Anh	xa-dong-anh	19.819184	105.7028457	Xã	405	\N	\N
16414	Xã Đông Thịnh	xa-dong-thinh	19.8060283	105.7204476	Xã	405	\N	\N
16417	Xã Đông Văn	xa-dong-van	19.7823504	105.7263152	Xã	405	\N	\N
16420	Xã Đông Phú	xa-dong-phu	19.7628822	105.7175138	Xã	405	\N	\N
16423	Xã Đông Nam	xa-dong-nam	19.7407814	105.7057792	Xã	405	\N	\N
16426	Xã Đông Quang	xa-dong-quang	19.7651756	105.7464382	Xã	405	\N	\N
16429	Xã Đông Vinh	xa-dong-vinh	19.764975	105.7567045	Xã	380	\N	\N
16432	Xã Đông Tân	xa-dong-tan	19.8067041	105.7413321	Xã	380	\N	\N
16435	Xã Đông Hưng	xa-dong-hung	19.8060757	105.7873964	Xã	380	\N	\N
16438	Thị trấn Quảng Xương	thi-tran-quang-xuong	19.7323668	105.7835348	Thị trấn	406	\N	\N
16441	Xã Quảng Thịnh	xa-quang-thinh	19.7586849	105.7727338	Xã	380	\N	\N
16444	Xã Quảng Tân	xa-quang-tan	19.7376288	105.7732633	Xã	406	\N	\N
16447	Xã Quảng Trạch	xa-quang-trach	19.7386824	105.7615252	Xã	406	\N	\N
16450	Xã Quảng Phong	xa-quang-phong	19.7197437	105.7791327	Xã	406	\N	\N
16453	Xã Quảng Đức	xa-quang-duc	19.7207913	105.7996769	Xã	406	\N	\N
16456	Xã Quảng Định	xa-quang-dinh	19.742877	105.8114175	Xã	406	\N	\N
16459	Xã Quảng Đông	xa-quang-dong	19.7602381	105.8059216	Xã	380	\N	\N
16462	Xã Quảng Nhân	xa-quang-nhan	19.7050089	105.8143528	Xã	406	\N	\N
16465	Xã Quảng Ninh	xa-quang-ninh	19.6987037	105.7879371	Xã	406	\N	\N
16468	Xã Quảng Bình	xa-quang-binh	19.6781919	105.790872	Xã	406	\N	\N
16471	Xã Quảng Hợp	xa-quang-hop	19.6923927	105.7615252	Xã	406	\N	\N
16474	Xã Quảng Văn	xa-quang-van	19.6887067	105.7380511	Xã	406	\N	\N
16477	Xã Quảng Long	xa-quang-long	19.71484	105.7239978	Xã	406	\N	\N
16480	Xã Quảng Yên	xa-quang-yen	19.7297385	105.7321831	Xã	406	\N	\N
16483	Xã Quảng Hòa	xa-quang-hoa	19.7165887	105.7497878	Xã	406	\N	\N
16486	Xã Quảng Lĩnh	xa-quang-linh	19.6424306	105.802612	Xã	406	\N	\N
16489	Xã Quảng Khê	xa-quang-khe	19.6408525	105.7879371	Xã	406	\N	\N
16492	Xã Quảng Trung	xa-quang-trung	19.609824	105.7791327	Xã	406	\N	\N
16495	Xã Quảng Chính	xa-quang-chinh	19.6203437	105.790872	Xã	406	\N	\N
16498	Xã Quảng Ngọc	xa-quang-ngoc	19.6671438	105.7527221	Xã	406	\N	\N
16501	Xã Quảng Trường	xa-quang-truong	19.6566283	105.7732633	Xã	406	\N	\N
16504	Xã Quảng Phúc	xa-quang-phuc	19.6476731	105.7277822	Xã	406	\N	\N
16507	Xã Quảng Cát	xa-quang-cat	19.7454663	105.8393164	Xã	380	\N	\N
16510	Xã Quảng Vọng	xa-quang-vong	19.6476798	105.7439194	Xã	406	\N	\N
16513	Xã Quảng Minh	xa-quang-minh	19.7318191	105.8378366	Xã	382	\N	\N
16516	Xã Quảng Hùng	xa-quang-hung	19.7197205	105.843708	Xã	382	\N	\N
16519	Xã Quảng Giao	xa-quang-giao	19.7149938	105.8319653	Xã	406	\N	\N
16522	Xã Quảng Phú	xa-quang-phu	19.7694199	105.8338475	Xã	380	\N	\N
16525	Xã Quảng Tâm	xa-quang-tam	19.7593893	105.8442252	Xã	380	\N	\N
16528	Phường Quảng Thọ	phuong-quang-tho	19.76603	105.8983026	Phường	382	\N	\N
16531	Phường Quảng Châu	phuong-quang-chau	19.76603	105.8983026	Phường	382	\N	\N
16534	Phường Quảng Vinh	phuong-quang-vinh	19.7291699	105.8671954	Phường	382	\N	\N
16537	Xã Quảng Đại	xa-quang-dai	19.7081515	105.843708	Xã	382	\N	\N
16540	Xã Quảng Hải	xa-quang-hai	19.686693	105.8317094	Xã	406	\N	\N
16543	Xã Quảng Lưu	xa-quang-luu	19.6818695	105.8143528	Xã	406	\N	\N
16546	Xã Quảng Lộc	xa-quang-loc	19.6645157	105.8143528	Xã	406	\N	\N
16549	Xã Quảng Lợi	xa-quang-loi	19.6376964	105.8231588	Xã	406	\N	\N
16552	Xã Quảng Nham	xa-quang-nham	19.6003647	105.8202234	Xã	406	\N	\N
16555	Xã Quảng Thạch	xa-quang-thach	19.6245517	105.8084823	Xã	406	\N	\N
16558	Xã Quảng Thái	xa-quang-thai	19.6681904	105.8378366	Xã	406	\N	\N
16561	Thị trấn Tĩnh Gia	thi-tran-tinh-gia	19.4465678	105.7776653	Thị trấn	407	\N	\N
16564	Xã Hải Châu	xa-hai-chau	19.5961569	105.802612	Xã	407	\N	\N
16567	Xã Thanh Thủy	xa-thanh-thuy	19.5847287	105.7674819	Xã	407	\N	\N
16570	Xã Thanh Sơn	xa-thanh-son	19.5751215	105.7536864	Xã	407	\N	\N
16573	Xã Triêu Dương	xa-trieu-duong	19.563026	105.7850022	Xã	407	\N	\N
16576	Xã Hải Ninh	xa-hai-ninh	19.5693431	105.8114175	Xã	407	\N	\N
16579	Xã Anh Sơn	xa-anh-son	19.549853	105.7380511	Xã	407	\N	\N
16582	Xã Ngọc Lĩnh	xa-ngoc-linh	19.5503964	105.7644596	Xã	407	\N	\N
16585	Xã Hải An	xa-hai-an	19.544628	105.7967419	Xã	407	\N	\N
16588	Xã Hùng Sơn	xa-hung-son	19.5283038	105.7527221	Xã	407	\N	\N
16591	Xã Các Sơn	xa-cac-son	19.5093291	105.7057792	Xã	407	\N	\N
16594	Xã Tân Dân	xa-tan-dan	19.5225405	105.7850022	Xã	407	\N	\N
16597	Xã Hải Lĩnh	xa-hai-linh	19.500993	105.7996769	Xã	407	\N	\N
16600	Xã Định Hải	xa-dinh-hai	19.4946413	105.7409852	Xã	407	\N	\N
16603	Xã Phú Sơn	xa-phu-son	19.4598563	105.6764461	Xã	407	\N	\N
16606	Xã Ninh Hải	xa-ninh-hai	19.4778623	105.7996769	Xã	407	\N	\N
16609	Xã Nguyên Bình	xa-nguyen-binh	19.4378429	105.7292491	Xã	407	\N	\N
16612	Xã Hải Nhân	xa-hai-nhan	19.4704659	105.7527221	Xã	407	\N	\N
16615	Xã Hải Hòa	xa-hai-hoa	19.4626674	105.7877052	Xã	407	\N	\N
16618	Xã Bình Minh	xa-binh-minh	19.435277	105.790872	Xã	407	\N	\N
16621	Xã Hải Thanh	xa-hai-thanh	19.4174103	105.7967419	Xã	407	\N	\N
16624	Xã Phú Lâm	xa-phu-lam	19.4062466	105.6940454	Xã	407	\N	\N
16627	Xã Xuân Lâm	xa-xuan-lam	19.4152673	105.7556564	Xã	407	\N	\N
16630	Xã Trúc Lâm	xa-truc-lam	19.4021072	105.7409852	Xã	407	\N	\N
16633	Xã Hải Bình	xa-hai-binh	19.4016252	105.7791327	Xã	407	\N	\N
16636	Xã Tân Trường	xa-tan-truong	19.3673079	105.6764461	Xã	407	\N	\N
16639	Xã Tùng Lâm	xa-tung-lam	19.3784129	105.7145801	Xã	407	\N	\N
16642	Xã Tĩnh Hải	xa-tinh-hai	19.3732352	105.7732633	Xã	407	\N	\N
16645	Xã Mai Lâm	xa-mai-lam	19.3548127	105.7527221	Xã	407	\N	\N
16648	Xã Trường Lâm	xa-truong-lam	19.3189833	105.6999122	Xã	407	\N	\N
16651	Xã Hải Yến	xa-hai-yen	19.3548532	105.7850022	Xã	407	\N	\N
16654	Xã Hải Thượng	xa-hai-thuong	19.3296156	105.776198	Xã	407	\N	\N
16657	Xã Nghi Sơn	xa-nghi-son	19.3286153	105.8202234	Xã	407	\N	\N
16660	Xã Hải Hà	xa-hai-ha	19.3133503	105.7967419	Xã	407	\N	\N
16663	Phường Đông Vĩnh	phuong-dong-vinh	18.6860752	105.6590888	Phường	412	\N	\N
16666	Phường Hà Huy Tập	phuong-ha-huy-tap	18.691041	105.6831022	Phường	412	\N	\N
16669	Phường Lê Lợi	phuong-le-loi	18.6819227	105.6691451	Phường	412	\N	\N
16670	Phường Quán Bàu	phuong-quan-bau	18.6906511	105.6698428	Phường	412	\N	\N
16672	Phường Hưng Bình	phuong-hung-binh	18.6794678	105.6805273	Phường	412	\N	\N
16673	Phường Hưng Phúc	phuong-hung-phuc	18.6819223	105.6890025	Phường	412	\N	\N
16675	Phường Hưng Dũng	phuong-hung-dung	18.6791532	105.7067077	Phường	412	\N	\N
16678	Phường Cửa Nam	phuong-cua-nam	18.6670172	105.6675367	Phường	412	\N	\N
16681	Phường Quang Trung	phuong-quang-trung	18.6718982	105.6742463	Phường	412	\N	\N
16684	Phường Đội Cung	phuong-doi-cung	18.6726468	105.6654474	Phường	412	\N	\N
16687	Phường Lê Mao	phuong-le-mao	18.6691715	105.6808458	Phường	412	\N	\N
16690	Phường Trường Thi	phuong-truong-thi	18.6693177	105.6934924	Phường	412	\N	\N
16693	Phường Bến Thủy	phuong-ben-thuy	18.6637404	105.6948581	Phường	412	\N	\N
16696	Phường Hồng Sơn	phuong-hong-son	18.6638978	105.6749796	Phường	412	\N	\N
16699	Phường Trung Đô	phuong-trung-do	18.6495407	105.6963559	Phường	412	\N	\N
16702	Xã Nghi Phú	xa-nghi-phu	18.7071727	105.6796857	Xã	412	\N	\N
16705	Xã Hưng Đông	xa-hung-dong	18.7109031	105.6533614	Xã	412	\N	\N
16708	Xã Hưng Lộc	xa-hung-loc	18.6968349	105.7050472	Xã	412	\N	\N
16711	Xã Hưng Hòa	xa-hung-hoa	18.6762612	105.733335	Xã	412	\N	\N
16714	Phường Vinh Tân	phuong-vinh-tan	18.6592955	105.6813235	Phường	412	\N	\N
16717	Phường Nghi Thuỷ	phuong-nghi-thuy	18.8212909	105.7100503	Phường	413	\N	\N
16720	Phường Nghi Tân	phuong-nghi-tan	18.8233146	105.701379	Phường	413	\N	\N
16723	Phường Thu Thuỷ	phuong-thu-thuy	18.8131407	105.7189807	Phường	413	\N	\N
16726	Phường Nghi Hòa	phuong-nghi-hoa	18.7691376	105.7439194	Phường	413	\N	\N
16729	Phường Nghi Hải	phuong-nghi-hai	18.7589086	105.7453864	Phường	413	\N	\N
16732	Phường Nghi Hương	phuong-nghi-huong	18.7906052	105.7292491	Phường	413	\N	\N
16735	Phường Nghi Thu	phuong-nghi-thu	18.8123573	105.7125497	Phường	413	\N	\N
16738	Thị trấn Kim Sơn	thi-tran-kim-son	19.6102805	104.9228243	Thị trấn	415	\N	\N
16741	Xã Thông Thụ	xa-thong-thu	19.8619063	104.9155243	Xã	415	\N	\N
16744	Xã Đồng Văn	xa-dong-van	19.8458918	105.1025075	Xã	415	\N	\N
16747	Xã Hạnh Dịch	xa-hanh-dich	19.6625494	104.9308546	Xã	415	\N	\N
16750	Xã Tiền Phong	xa-tien-phong	19.6378284	104.9659008	Xã	415	\N	\N
16753	Xã Nậm Giải	xa-nam-giai	19.6394727	104.8257625	Xã	415	\N	\N
16756	Xã Tri Lễ	xa-tri-le	19.5854594	104.6901228	Xã	415	\N	\N
16759	Xã Châu Kim	xa-chau-kim	19.5746738	104.8804893	Xã	415	\N	\N
16762	Xã Mường Nọc	xa-muong-noc	19.6088955	104.9082457	Xã	415	\N	\N
16763	Xã Quế Sơn	xa-que-son	19.599385	104.9609005	Xã	415	\N	\N
16765	Xã Châu Thôn	xa-chau-thon	19.5566554	104.8097129	Xã	415	\N	\N
16768	Xã Nậm Nhoóng	xa-nam-nhoong	19.5327297	104.730948	Xã	415	\N	\N
16771	Xã Quang Phong	xa-quang-phong	19.5034219	104.873921	Xã	415	\N	\N
16774	Xã Căm Muộn	xa-cam-muon	19.5180068	104.8469212	Xã	415	\N	\N
16777	Thị trấn Tân Lạc	thi-tran-tan-lac	19.5523126	105.0950994	Thị trấn	416	\N	\N
16780	Xã Châu Bính	xa-chau-binh	19.5197323	105.1953483	Xã	416	\N	\N
16783	Xã Châu Thuận	xa-chau-thuan	19.6391254	105.0871609	Xã	416	\N	\N
16786	Xã Châu Hội	xa-chau-hoi	19.6225464	105.1792619	Xã	416	\N	\N
16789	Xã Châu Nga	xa-chau-nga	19.6025893	105.2186124	Xã	416	\N	\N
16792	Xã Châu Tiến	xa-chau-tien	19.6082607	105.0067977	Xã	416	\N	\N
16795	Xã Châu Hạnh	xa-chau-hanh	19.5465635	105.104211	Xã	416	\N	\N
16798	Xã Châu Thắng	xa-chau-thang	19.5856435	105.0170235	Xã	416	\N	\N
16801	Xã Châu Phong	xa-chau-phong	19.4515251	105.025789	Xã	416	\N	\N
16804	Xã Châu Bình	xa-chau-binh	19.5197323	105.1953483	Xã	416	\N	\N
16807	Xã Châu Hoàn	xa-chau-hoan	19.4680604	104.949837	Xã	416	\N	\N
16810	Xã Diên Lãm	xa-dien-lam	19.4315488	104.9702821	Xã	416	\N	\N
16813	Thị trấn Mường Xén	thi-tran-muong-xen	19.3933292	104.155651	Thị trấn	417	\N	\N
16816	Xã Mỹ Lý	xa-my-ly	19.6332936	104.3093759	Xã	417	\N	\N
16819	Xã Bắc Lý	xa-bac-ly	19.6030864	104.2512221	Xã	417	\N	\N
16822	Xã Keng Đu	xa-keng-du	19.6393474	104.088517	Xã	417	\N	\N
16825	Xã Đoọc Mạy	xa-dooc-may	19.5854069	104.1814686	Xã	417	\N	\N
16828	Xã Huồi Tụ	xa-huoi-tu	19.5314471	104.2744808	Xã	417	\N	\N
16831	Xã Mường Lống	xa-muong-long	19.4900287	104.3559158	Xã	417	\N	\N
16834	Xã Na Loi	xa-na-loi	19.5218951	104.1756573	Xã	417	\N	\N
16837	Xã Nậm Cắn	xa-nam-can	19.4486316	104.115439	Xã	417	\N	\N
16840	Xã Bảo Nam	xa-bao-nam	19.4114684	104.3210095	Xã	417	\N	\N
16843	Xã Phà Đánh	xa-pha-danh	19.4439924	104.204716	Xã	417	\N	\N
16846	Xã Bảo Thắng	xa-bao-thang	19.4272328	104.4141114	Xã	417	\N	\N
16849	Xã Hữu Lập	xa-huu-lap	19.4402912	104.2512221	Xã	417	\N	\N
16852	Xã Tà Cạ	xa-ta-ca	19.3994726	104.1059408	Xã	417	\N	\N
16855	Xã Chiêu Lưu	xa-chieu-luu	19.3542864	104.3093759	Xã	417	\N	\N
16858	Xã Mường Típ	xa-muong-tip	19.3388988	103.983095	Xã	417	\N	\N
16861	Xã Hữu Kiệm	xa-huu-kiem	19.3509775	104.204716	Xã	417	\N	\N
16864	Xã Tây Sơn	xa-tay-son	19.3368757	104.088517	Xã	417	\N	\N
16867	Xã Mường Ải	xa-muong-ai	19.2761425	103.9724141	Xã	417	\N	\N
16870	Xã Na Ngoi	xa-na-ngoi	19.2723519	104.1698463	Xã	417	\N	\N
16873	Xã Nậm Càn	xa-nam-can	19.4486316	104.115439	Xã	417	\N	\N
16876	Thị trấn Hòa Bình	thi-tran-hoa-binh	19.256781	104.4752416	Thị trấn	418	\N	\N
16879	Xã Mai Sơn	xa-mai-son	19.6112903	104.4373961	Xã	418	\N	\N
16882	Xã Nhôn Mai	xa-nhon-mai	19.5483288	104.5044426	Xã	418	\N	\N
16885	Xã Hữu Khuông	xa-huu-khuong	19.501187	104.6471221	Xã	418	\N	\N
16900	Xã Yên Tĩnh	xa-yen-tinh	19.3812541	104.6937674	Xã	418	\N	\N
16903	Xã Nga My	xa-nga-my	19.3590703	104.8221147	Xã	418	\N	\N
16904	Xã Xiêng My	xa-xieng-my	14.058324	108.277199	Xã	418	\N	\N
16906	Xã Lưỡng Minh	xa-luong-minh	19.3266747	104.4362712	Xã	418	\N	\N
16909	Xã Yên Hòa	xa-yen-hoa	19.3241748	104.6821048	Xã	418	\N	\N
16912	Xã Yên Na	xa-yen-na	19.3248968	104.5305715	Xã	418	\N	\N
16915	Xã Lưu Kiền	xa-luu-kien	14.058324	108.277199	Xã	418	\N	\N
16918	Xã Thạch Giám	xa-thach-giam	19.261097	104.493885	Xã	418	\N	\N
16921	Xã Xá Lượng	xa-xa-luong	19.3266747	104.4362712	Xã	418	\N	\N
16924	Xã Tam Thái	xa-tam-thai	19.2106631	104.5072722	Xã	418	\N	\N
16927	Xã Tam Đình	xa-tam-dinh	19.2031444	104.6004911	Xã	418	\N	\N
16930	Xã Yên Thắng	xa-yen-thang	19.2438874	104.670443	Xã	418	\N	\N
16933	Xã Tam Quang	xa-tam-quang	19.0333333	104.55	Xã	418	\N	\N
16936	Xã Tam Hợp	xa-tam-hop	19.1145418	104.4024704	Xã	418	\N	\N
16939	Phường Hoà Hiếu	phuong-hoa-hieu	19.3214303	105.4390254	Phường	414	\N	\N
16941	Thị trấn Nghĩa Đàn	thi-tran-nghia-dan	19.4003352	105.4302383	Thị trấn	419	\N	\N
16942	Xã Nghĩa Mai	xa-nghia-mai	19.4030138	105.371021	Xã	419	\N	\N
16945	Xã Nghĩa Yên	xa-nghia-yen	19.4003352	105.4302383	Xã	419	\N	\N
16948	Xã Nghĩa Lạc	xa-nghia-lac	19.3480202	105.5006468	Xã	419	\N	\N
16951	Xã Nghĩa Lâm	xa-nghia-lam	19.4003352	105.4302383	Xã	419	\N	\N
16954	Xã Nghĩa Sơn	xa-nghia-son	19.419528	105.4480005	Xã	419	\N	\N
16957	Xã Nghĩa Lợi	xa-nghia-loi	19.3480202	105.5006468	Xã	419	\N	\N
16960	Xã Nghĩa Bình	xa-nghia-binh	19.1736204	105.3826487	Xã	419	\N	\N
16963	Xã Nghĩa Thọ	xa-nghia-tho	19.3601015	105.5543661	Xã	419	\N	\N
16966	Xã Nghĩa Minh	xa-nghia-minh	19.3723086	105.424838	Xã	419	\N	\N
16969	Xã Nghĩa Phú	xa-nghia-phu	19.3654864	105.5394423	Xã	419	\N	\N
16972	Xã Nghĩa Hưng	xa-nghia-hung	19.3534664	105.3257726	Xã	419	\N	\N
16975	Xã Nghĩa Hồng	xa-nghia-hong	19.4003352	105.4302383	Xã	419	\N	\N
16978	Xã Nghĩa Thịnh	xa-nghia-thinh	19.359059	105.356765	Xã	419	\N	\N
16981	Xã Nghĩa Trung	xa-nghia-trung	19.3270426	105.4698832	Xã	419	\N	\N
16984	Xã Nghĩa Hội	xa-nghia-hoi	19.3288624	105.4866239	Xã	419	\N	\N
16987	Xã Nghĩa Tân	xa-nghia-tan	19.318403	105.366075	Xã	419	\N	\N
16990	Xã Nghĩa Thắng	xa-nghia-thang	19.3390223	105.3873082	Xã	419	\N	\N
16993	Phường Quang Phong	phuong-quang-phong	19.3408151	105.4155939	Phường	414	\N	\N
16994	Phường Quang Tiến	phuong-quang-tien	19.3276039	105.4009508	Phường	414	\N	\N
16996	Xã Nghĩa Hiếu	xa-nghia-hieu	19.3319999	105.3437698	Xã	419	\N	\N
16999	Xã Nghĩa Liên	xa-nghia-lien	19.3269683	105.3519559	Xã	419	\N	\N
17002	Xã Nghĩa Hòa	xa-nghia-hoa	19.2814205	105.4331673	Xã	414	\N	\N
17003	Phường Long Sơn	phuong-long-son	19.3098545	105.4390254	Phường	414	\N	\N
17005	Xã Nghĩa Tiến	xa-nghia-tien	19.2948831	105.3775245	Xã	414	\N	\N
17008	Xã Nghĩa Mỹ	xa-nghia-my	19.299405	105.4595306	Xã	414	\N	\N
17011	Xã Tây Hiếu	xa-tay-hieu	19.2812956	105.4009508	Xã	414	\N	\N
17014	Xã Nghĩa Thuận	xa-nghia-thuan	19.2659181	105.5122694	Xã	414	\N	\N
17017	Xã Đông Hiếu	xa-dong-hieu	19.2858082	105.4829681	Xã	414	\N	\N
17020	Xã Nghĩa Đức	xa-nghia-duc	14.058324	108.277199	Xã	419	\N	\N
17023	Xã Nghĩa An	xa-nghia-an	19.2577496	105.393573	Xã	419	\N	\N
17026	Xã Nghĩa Long	xa-nghia-long	19.2396236	105.4453397	Xã	419	\N	\N
17029	Xã Nghĩa Lộc	xa-nghia-loc	19.2293924	105.4651451	Xã	419	\N	\N
17032	Xã Nghĩa Khánh	xa-nghia-khanh	19.2235978	105.4024029	Xã	419	\N	\N
17035	Thị trấn Quỳ Hợp	thi-tran-quy-hop	19.3202836	105.1814554	Thị trấn	420	\N	\N
17038	Xã Yên Hợp	xa-yen-hop	19.4476564	105.2758035	Xã	420	\N	\N
17041	Xã Châu Tiến	xa-chau-tien	19.4207978	105.1315162	Xã	420	\N	\N
17044	Xã Châu Hồng	xa-chau-hong	19.4159989	105.1032383	Xã	420	\N	\N
17047	Xã Đồng Hợp	xa-dong-hop	19.407929	105.2831195	Xã	420	\N	\N
17050	Xã Châu Thành	xa-chau-thanh	19.3918269	105.0462437	Xã	420	\N	\N
17053	Xã Liên Hợp	xa-lien-hop	19.404253	105.1734127	Xã	420	\N	\N
17056	Xã Châu Lộc	xa-chau-loc	19.3648875	105.2275257	Xã	420	\N	\N
17059	Xã Tam Hợp	xa-tam-hop	19.3634673	105.2611724	Xã	420	\N	\N
17062	Xã Châu Cường	xa-chau-cuong	19.3512595	105.114932	Xã	420	\N	\N
17065	Xã Châu Quang	xa-chau-quang	14.058324	108.277199	Xã	420	\N	\N
17068	Xã Thọ Hợp	xa-tho-hop	19.3393178	105.2216748	Xã	420	\N	\N
17071	Xã Minh Hợp	xa-minh-hop	19.3509573	105.2889726	Xã	420	\N	\N
17074	Xã Nghĩa Xuân	xa-nghia-xuan	19.3230569	105.3189726	Xã	420	\N	\N
17077	Xã Châu Thái	xa-chau-thai	19.3143939	105.1397837	Xã	420	\N	\N
17080	Xã Châu Đình	xa-chau-dinh	19.3124349	105.1950782	Xã	420	\N	\N
17083	Xã Văn Lợi	xa-van-loi	19.2849112	105.2143615	Xã	420	\N	\N
17086	Xã Nam Sơn	xa-nam-son	19.2240086	105.025789	Xã	420	\N	\N
17089	Xã Châu Lý	xa-chau-ly	19.2481374	105.1353979	Xã	420	\N	\N
17092	Xã Hạ Sơn	xa-ha-son	19.2526384	105.2875093	Xã	420	\N	\N
17095	Xã Bắc Sơn	xa-bac-son	19.2220182	105.0842379	Xã	420	\N	\N
17098	Thị trấn Cầu Giát	thi-tran-cau-giat	19.1416697	105.6280569	Thị trấn	421	\N	\N
17101	Xã Quỳnh Thắng	xa-quynh-thang	19.2598232	105.5826123	Xã	421	\N	\N
17104	Xã Quỳnh Vinh	xa-quynh-vinh	19.3042058	105.6705801	Xã	432	\N	\N
17107	Xã Quỳnh Lộc	xa-quynh-loc	19.2686086	105.7468535	Xã	432	\N	\N
17110	Phường Quỳnh Thiện	phuong-quynh-thien	19.2795983	105.7204476	Phường	432	\N	\N
17113	Xã Quỳnh Lập	xa-quynh-lap	19.2833696	105.776198	Xã	432	\N	\N
17116	Xã Quỳnh Trang	xa-quynh-trang	19.2705345	105.6588485	Xã	432	\N	\N
17119	Xã Quỳnh Tân	xa-quynh-tan	19.2263185	105.6353878	Xã	421	\N	\N
17122	Xã Quỳnh Châu	xa-quynh-chau	19.2155833	105.5591615	Xã	421	\N	\N
17125	Phường Mai Hùng	phuong-mai-hung	19.2443303	105.6940454	Phường	432	\N	\N
17128	Phường Quỳnh Dị	phuong-quynh-di	19.2443964	105.7263152	Phường	432	\N	\N
17131	Phường Quỳnh Xuân	phuong-quynh-xuan	19.2096421	105.6940454	Phường	432	\N	\N
17134	Phường Quỳnh Phương	phuong-quynh-phuong	19.2260261	105.7380511	Phường	432	\N	\N
17137	Xã Quỳnh Liên	xa-quynh-lien	19.2039319	105.7263152	Xã	432	\N	\N
17140	Xã Tân Sơn	xa-tan-son	19.1972237	105.4954205	Xã	421	\N	\N
17143	Xã Quỳnh Văn	xa-quynh-van	19.2011478	105.6588485	Xã	421	\N	\N
17146	Xã Ngọc Sơn	xa-ngoc-son	19.1803901	105.5772373	Xã	421	\N	\N
17149	Xã Quỳnh Tam	xa-quynh-tam	19.2200256	105.6412527	Xã	421	\N	\N
17152	Xã Quỳnh Hoa	xa-quynh-hoa	19.1800604	105.6353878	Xã	421	\N	\N
17155	Xã Quỳnh Thạch	xa-quynh-thach	19.1753303	105.6756683	Xã	421	\N	\N
17158	Xã Quỳnh Bảng	xa-quynh-bang	19.1729097	105.7175138	Xã	421	\N	\N
17161	Xã Quỳnh Mỹ	xa-quynh-my	19.1673861	105.6148621	Xã	421	\N	\N
17164	Xã Quỳnh Thanh	xa-quynh-thanh	19.1644176	105.6823124	Xã	421	\N	\N
17167	Xã Quỳnh Hậu	xa-quynh-hau	19.1643327	105.6500504	Xã	421	\N	\N
17170	Xã Quỳnh Lâm	xa-quynh-lam	19.1484179	105.6002024	Xã	421	\N	\N
17173	Xã Quỳnh Đôi	xa-quynh-doi	19.1507314	105.6735131	Xã	421	\N	\N
17176	Xã Quỳnh Lương	xa-quynh-luong	19.1524239	105.7204476	Xã	421	\N	\N
17179	Xã Quỳnh Hồng	xa-quynh-hong	19.1501137	105.6412976	Xã	421	\N	\N
17182	Xã Quỳnh Yên	xa-quynh-yen	19.1381501	105.6852455	Xã	421	\N	\N
17185	Xã Quỳnh Bá	xa-quynh-ba	19.1349178	105.6559158	Xã	421	\N	\N
17188	Xã Quỳnh Minh	xa-quynh-minh	19.1413761	105.7145801	Xã	421	\N	\N
17191	Xã Quỳnh Diện	xa-quynh-dien	19.1143353	105.6265908	Xã	421	\N	\N
17194	Xã Quỳnh Hưng	xa-quynh-hung	19.1185926	105.6441852	Xã	421	\N	\N
17197	Xã Quỳnh Giang	xa-quynh-giang	19.1279273	105.6031342	Xã	421	\N	\N
17200	Xã Quỳnh Ngọc	xa-quynh-ngoc	19.1170669	105.6617813	Xã	421	\N	\N
17203	Xã Quỳnh Nghĩa	xa-quynh-nghia	19.1266715	105.7175138	Xã	421	\N	\N
17206	Xã An Hòa	xa-an-hoa	19.1181745	105.6823124	Xã	421	\N	\N
17209	Xã Tiến Thủy	xa-tien-thuy	19.1061886	105.7204476	Xã	421	\N	\N
17212	Xã Sơn Hải	xa-son-hai	19.1039793	105.6793792	Xã	421	\N	\N
17215	Xã Quỳnh Thọ	xa-quynh-tho	19.1002343	105.6559158	Xã	421	\N	\N
17218	Xã Quỳnh Thuận	xa-quynh-thuan	19.1024507	105.6969788	Xã	421	\N	\N
17221	Xã Quỳnh Long	xa-quynh-long	19.0856219	105.6911121	Xã	421	\N	\N
17224	Xã Tân Thắng	xa-tan-thang	19.3271943	105.6060661	Xã	421	\N	\N
17227	Thị trấn Con Cuông	thi-tran-con-cuong	19.0482862	104.8819489	Thị trấn	422	\N	\N
17230	Xã Bình Chuẩn	xa-binh-chuan	19.2459778	104.9272044	Xã	422	\N	\N
17233	Xã Lạng Khê	xa-lang-khe	19.1221707	104.7404269	Xã	422	\N	\N
17236	Xã Cam Lâm	xa-cam-lam	19.1860355	104.8104424	Xã	422	\N	\N
17239	Xã Thạch Ngàn	xa-thach-ngan	19.0669734	104.96298	Xã	422	\N	\N
17242	Xã Đôn Phục	xa-don-phuc	19.1570848	104.8804893	Xã	422	\N	\N
17245	Xã Mậu Đức	xa-mau-duc	19.1087901	104.9038451	Xã	422	\N	\N
17248	Xã Châu Khê	xa-chau-khe	18.9993206	104.6821048	Xã	422	\N	\N
17251	Xã Chi Khê	xa-chi-khe	19.0700761	104.8104424	Xã	422	\N	\N
17254	Xã Bồng Khê	xa-bong-khe	19.0696601	104.8863279	Xã	422	\N	\N
17257	Xã Yên Khê	xa-yen-khe	19.0196164	104.8870577	Xã	422	\N	\N
17260	Xã Lục Dạ	xa-luc-da	18.9503524	104.8571368	Xã	422	\N	\N
17263	Xã Môn Sơn	xa-mon-son	18.9422912	104.9469165	Xã	422	\N	\N
17266	Thị trấn Tân Kỳ	thi-tran-tan-ky	19.0407239	105.2692193	Thị trấn	423	\N	\N
17269	Xã Tân Hợp	xa-tan-hop	19.2130301	105.1653704	Xã	423	\N	\N
17272	Xã Tân Phú	xa-tan-phu	19.1621567	105.2962891	Xã	423	\N	\N
17275	Xã Tân Xuân	xa-tan-xuan	19.1927058	105.3284859	Xã	423	\N	\N
17278	Xã Giai Xuân	xa-giai-xuan	19.1567649	105.2231375	Xã	423	\N	\N
17281	Xã Nghĩa Bình	xa-nghia-binh	19.1736204	105.3826487	Xã	423	\N	\N
17284	Xã Nghĩa Đồng	xa-nghia-dong	19.1747711	105.3488553	Xã	423	\N	\N
17287	Xã Đồng Văn	xa-dong-van	19.1169942	105.1105468	Xã	423	\N	\N
17290	Xã Nghĩa Thái	xa-nghia-thai	19.1654679	105.307733	Xã	423	\N	\N
17293	Xã Nghĩa Hợp	xa-nghia-hop	19.1442079	105.3372679	Xã	423	\N	\N
17296	Xã Nghĩa Hoàn	xa-nghia-hoan	19.1381328	105.2809247	Xã	423	\N	\N
17299	Xã Nghĩa Phúc	xa-nghia-phuc	19.1119706	105.2136302	Xã	423	\N	\N
17302	Xã Tiên Kỳ	xa-tien-ky	14.058324	108.277199	Xã	423	\N	\N
17305	Xã Tân An	xa-tan-an	19.0751507	105.1953483	Xã	423	\N	\N
17308	Xã Nghĩa Dũng	xa-nghia-dung	19.1165125	105.3226315	Xã	423	\N	\N
17311	Xã Tân Long	xa-tan-long	19.1070382	105.2721456	Xã	423	\N	\N
17314	Xã Kỳ Sơn	xa-ky-son	19.0407239	105.2692193	Xã	423	\N	\N
17317	Xã Hương Sơn	xa-huong-son	19.0529736	105.1836489	Xã	423	\N	\N
17320	Xã Kỳ Tân	xa-ky-tan	19.0527478	105.2626169	Xã	423	\N	\N
17323	Xã Phú Sơn	xa-phu-son	19.0450228	105.1142011	Xã	423	\N	\N
17325	Xã Tân Hương	xa-tan-huong	19.0617968	105.2059507	Xã	423	\N	\N
17326	Xã Nghĩa Hành	xa-nghia-hanh	19.0064169	105.1865737	Xã	423	\N	\N
17329	Thị trấn Anh Sơn	thi-tran-anh-son	18.9289945	105.0820457	Thị trấn	424	\N	\N
17332	Xã Thọ Sơn	xa-tho-son	19.1163851	105.0396687	Xã	424	\N	\N
17335	Xã Thành Sơn	xa-thanh-son	19.0570776	104.9951118	Xã	424	\N	\N
17338	Xã Bình Sơn	xa-binh-son	19.0516379	105.0433215	Xã	424	\N	\N
17341	Xã Tam Sơn	xa-tam-son	19.0431858	104.935235	Xã	424	\N	\N
17344	Xã Đỉnh Sơn	xa-dinh-son	19.0217689	104.9578687	Xã	424	\N	\N
17347	Xã Hùng Sơn	xa-hung-son	18.997824	105.0111801	Xã	424	\N	\N
17350	Xã Cẩm Sơn	xa-cam-son	18.9841254	104.9929208	Xã	424	\N	\N
17353	Xã Đức Sơn	xa-duc-son	18.9847259	105.0732771	Xã	424	\N	\N
17356	Xã Tường Sơn	xa-tuong-son	18.964885	105.0243281	Xã	424	\N	\N
17357	Xã Hoa Sơn	xa-hoa-son	18.9289945	105.0820457	Xã	424	\N	\N
17359	Xã Tào Sơn	xa-tao-son	18.9604909	105.2253316	Xã	424	\N	\N
17362	Xã Vĩnh Sơn	xa-vinh-son	18.9567162	105.1317431	Xã	424	\N	\N
17365	Xã Lạng Sơn	xa-lang-son	18.9518477	105.1902297	Xã	424	\N	\N
17368	Xã Hội Sơn	xa-hoi-son	18.9249554	105.0520884	Xã	424	\N	\N
17371	Xã Thạch Sơn	xa-thach-son	18.9422006	105.0886224	Xã	424	\N	\N
17374	Xã Phúc Sơn	xa-phuc-son	18.8375139	104.9622498	Xã	424	\N	\N
17377	Xã Long Sơn	xa-long-son	18.9104074	105.1317431	Xã	424	\N	\N
17380	Xã Khai Sơn	xa-khai-son	18.9396376	105.1544042	Xã	424	\N	\N
17383	Xã Lĩnh Sơn	xa-linh-son	18.9141969	105.2253316	Xã	424	\N	\N
17386	Xã Cao Sơn	xa-cao-son	18.9002487	105.1843801	Xã	424	\N	\N
17389	Thị trấn Diễn Châu	thi-tran-dien-chau	18.9765611	105.5987365	Thị trấn	425	\N	\N
17392	Xã Diễn Lâm	xa-dien-lam	19.1482023	105.5357139	Xã	425	\N	\N
17395	Xã Diễn Đoài	xa-dien-doai	19.1157507	105.5767493	Xã	425	\N	\N
17398	Xã Diễn Trường	xa-dien-truong	19.0990191	105.6031342	Xã	425	\N	\N
17401	Xã Diễn Yên	xa-dien-yen	19.0800486	105.5884754	Xã	425	\N	\N
17404	Xã Diễn Hoàng	xa-dien-hoang	19.0907042	105.6324554	Xã	425	\N	\N
17407	Xã Diễn Hùng	xa-dien-hung	19.0781287	105.6441852	Xã	425	\N	\N
17410	Xã Diễn Mỹ	xa-dien-my	19.0633206	105.6148621	Xã	425	\N	\N
17413	Xã Diễn Hồng	xa-dien-hong	19.0490087	105.5796808	Xã	425	\N	\N
17416	Xã Diễn Phong	xa-dien-phong	19.0532756	105.5972706	Xã	425	\N	\N
17419	Xã Diễn Hải	xa-dien-hai	19.0507478	105.6265908	Xã	425	\N	\N
17422	Xã Diễn Tháp	xa-dien-thap	19.0384543	105.5679552	Xã	425	\N	\N
17425	Xã Diễn Liên	xa-dien-lien	19.036822	105.5532993	Xã	425	\N	\N
17428	Xã Diễn Vạn	xa-dien-van	19.0296483	105.6031342	Xã	425	\N	\N
17431	Xã Diễn Kim	xa-dien-kim	19.0228583	105.6148621	Xã	425	\N	\N
17434	Xã Diễn Kỷ	xa-dien-ky	19.0222385	105.5884754	Xã	425	\N	\N
17437	Xã Diễn Xuân	xa-dien-xuan	19.015833	105.5620927	Xã	425	\N	\N
17656	Xã Nam Sơn	xa-nam-son	18.9077085	105.2597094	Xã	427	\N	\N
17440	Xã Diễn Thái	xa-dien-thai	19.0073661	105.5244547	Xã	425	\N	\N
17443	Xã Diễn Đồng	xa-dien-dong	19.0092351	105.5547648	Xã	425	\N	\N
17446	Xã Diễn Bích	xa-dien-bich	19.0123075	105.6031342	Xã	425	\N	\N
17449	Xã Diễn Hạnh	xa-dien-hanh	18.9979877	105.5679552	Xã	425	\N	\N
17452	Xã Diễn Ngọc	xa-dien-ngoc	19.0012514	105.5972706	Xã	425	\N	\N
17455	Xã Diễn Quảng	xa-dien-quang	18.9874312	105.5562304	Xã	425	\N	\N
17458	Xã Diễn Nguyên	xa-dien-nguyen	18.9831554	105.5386447	Xã	425	\N	\N
17461	Xã Diễn Hoa	xa-dien-hoa	18.9906983	105.5855438	Xã	425	\N	\N
17464	Xã Diễn Thành	xa-dien-thanh	18.9739831	105.6119301	Xã	425	\N	\N
17467	Xã Diễn Phúc	xa-dien-phuc	18.9675784	105.5855438	Xã	425	\N	\N
17470	Xã Diễn Minh	xa-dien-minh	18.9568227	105.5254565	Xã	425	\N	\N
17473	Xã Diễn Bình	xa-dien-binh	18.9658128	105.5386447	Xã	425	\N	\N
17476	Xã Diễn Cát	xa-dien-cat	18.9585287	105.5562304	Xã	425	\N	\N
17479	Xã Diễn Thịnh	xa-dien-thinh	18.9508665	105.6119301	Xã	425	\N	\N
17482	Xã Diễn Tân	xa-dien-tan	18.9502395	105.5855438	Xã	425	\N	\N
17485	Xã Diễn Thắng	xa-dien-thang	18.9426905	105.5386447	Xã	425	\N	\N
17488	Xã Diễn Thọ	xa-dien-tho	18.9339047	105.5738179	Xã	425	\N	\N
17491	Xã Diễn Lợi	xa-dien-loi	18.9222097	105.5415755	Xã	425	\N	\N
17494	Xã Diễn Lộc	xa-dien-loc	18.9381784	105.5914071	Xã	425	\N	\N
17497	Xã Diễn Trung	xa-dien-trung	18.9036325	105.6236585	Xã	425	\N	\N
17500	Xã Diễn An	xa-dien-an	18.9025014	105.6031342	Xã	425	\N	\N
17503	Xã Diễn Phú	xa-dien-phu	18.8960894	105.5767493	Xã	425	\N	\N
17506	Thị trấn Yên Thành	thi-tran-yen-thanh	19.000722	105.4683193	Thị trấn	426	\N	\N
17509	Xã Mã Thành	xa-ma-thanh	19.0881079	105.494688	Xã	426	\N	\N
17510	Xã Tiến Thành	xa-tien-thanh	19.0832602	105.4829396	Xã	426	\N	\N
17512	Xã Lăng Thành	xa-lang-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17515	Xã Tân Thành	xa-tan-thanh	19.1218044	105.5064087	Xã	426	\N	\N
17518	Xã Đức Thành	xa-duc-thanh	19.09565	105.5415755	Xã	426	\N	\N
17521	Xã Kim Thành	xa-kim-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17524	Xã Hậu Thành	xa-hau-thanh	19.0411328	105.4746927	Xã	426	\N	\N
17525	Xã Hùng Thành	xa-hung-thanh	19.0678326	105.4523915	Xã	426	\N	\N
17527	Xã Đô Thành	xa-do-thanh	19.0705046	105.5650239	Xã	426	\N	\N
17530	Xã Thọ Thành	xa-tho-thanh	19.0609556	105.5415755	Xã	426	\N	\N
17533	Xã Quang Thành	xa-quang-thanh	19.042407	105.3595885	Xã	426	\N	\N
17536	Xã Tây Thành	xa-tay-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17539	Xã Phúc Thành	xa-phuc-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17542	Xã Hồng Thành	xa-hong-thanh	19.042477	105.5210607	Xã	426	\N	\N
17545	Xã Đồng Thành	xa-dong-thanh	19.0318701	105.4149945	Xã	426	\N	\N
17548	Xã Phú Thành	xa-phu-thanh	19.025632	105.5151997	Xã	426	\N	\N
17551	Xã Hoa Thành	xa-hoa-thanh	18.9987238	105.491758	Xã	426	\N	\N
17554	Xã Tăng Thành	xa-tang-thanh	19.0080017	105.4507424	Xã	426	\N	\N
17557	Xã Văn Thành	xa-van-thanh	18.9543648	105.4797989	Xã	426	\N	\N
17560	Xã Thịnh Thành	xa-thinh-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17563	Xã Hợp Thành	xa-hop-thanh	19.0030049	105.509339	Xã	426	\N	\N
17566	Xã Xuân Thành	xa-xuan-thanh	18.9892091	105.4619667	Xã	426	\N	\N
17569	Xã Bắc Thành	xa-bac-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17572	Xã Nhân Thành	xa-nhan-thanh	18.9916992	105.5109271	Xã	426	\N	\N
17575	Xã Trung Thành	xa-trung-thanh	18.968051	105.429249	Xã	426	\N	\N
17578	Xã Long Thành	xa-long-thanh	18.9543648	105.4797989	Xã	426	\N	\N
17581	Xã Minh Thành	xa-minh-thanh	14.058324	108.277199	Xã	426	\N	\N
17584	Xã Nam Thành	xa-nam-thanh	18.9577848	105.4440817	Xã	426	\N	\N
17587	Xã Vĩnh Thành	xa-vinh-thanh	18.9483303	105.5064087	Xã	426	\N	\N
17590	Xã Lý Thành	xa-ly-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17593	Xã Khánh Thành	xa-khanh-thanh	18.9368391	105.4619043	Xã	426	\N	\N
17596	Xã Viên Thành	xa-vien-thanh	18.9293435	105.491758	Xã	426	\N	\N
17599	Xã Đại Thành	xa-dai-thanh	18.9250585	105.390634	Xã	426	\N	\N
17602	Xã Liên Thành	xa-lien-thanh	19.0511285	105.4536718	Xã	426	\N	\N
17605	Xã Bảo Thành	xa-bao-thanh	18.9082096	105.4683193	Xã	426	\N	\N
17608	Xã Mỹ Thành	xa-my-thanh	18.9028239	105.4246842	Xã	426	\N	\N
17611	Xã Công Thành	xa-cong-thanh	18.9196136	105.4360963	Xã	426	\N	\N
17614	Xã Sơn Thành	xa-son-thanh	18.9030803	105.494688	Xã	426	\N	\N
17617	Thị trấn Đô Lương	thi-tran-do-luong	18.8989091	105.3043378	Thị trấn	427	\N	\N
17619	Xã Giang Sơn Đông	xa-giang-son-dong	19.0019231	105.2918992	Xã	427	\N	\N
17620	Xã Giang Sơn Tây	xa-giang-son-tay	19.0019231	105.2918992	Xã	427	\N	\N
17623	Xã Lam Sơn	xa-lam-son	18.9650781	105.2655616	Xã	427	\N	\N
17626	Xã Bồi Sơn	xa-boi-son	18.942644	105.2743403	Xã	427	\N	\N
17629	Xã Hồng Sơn	xa-hong-son	18.962867	105.2918992	Xã	427	\N	\N
17632	Xã Bài Sơn	xa-bai-son	18.8990982	105.336536	Xã	427	\N	\N
17635	Xã Ngọc Sơn	xa-ngoc-son	18.92965	105.2567833	Xã	427	\N	\N
17638	Xã Bắc Sơn	xa-bac-son	18.9187169	105.2750719	Xã	427	\N	\N
17641	Xã Tràng Sơn	xa-trang-son	18.927833	105.3043378	Xã	427	\N	\N
17644	Xã Thượng Sơn	xa-thuong-son	18.8599289	105.414858	Xã	427	\N	\N
17647	Xã Hòa Sơn	xa-hoa-son	18.8994161	105.3701517	Xã	427	\N	\N
17650	Xã Đặng Sơn	xa-dang-son	18.9061658	105.2867776	Xã	427	\N	\N
17653	Xã Đông Sơn	xa-dong-son	18.9159287	105.3195119	Xã	427	\N	\N
17659	Xã Lưu Sơn	xa-luu-son	18.895086	105.2809247	Xã	427	\N	\N
17662	Xã Yên Sơn	xa-yen-son	18.9008409	105.3186804	Xã	427	\N	\N
17665	Xã Văn Sơn	xa-van-son	18.8986069	105.331027	Xã	427	\N	\N
17668	Xã Đà Sơn	xa-da-son	18.881992	105.308053	Xã	427	\N	\N
17671	Xã Lạc Sơn	xa-lac-son	18.8990982	105.336536	Xã	427	\N	\N
17674	Xã Tân Sơn	xa-tan-son	18.8749149	105.35761	Xã	427	\N	\N
17677	Xã Thái Sơn	xa-thai-son	18.8635955	105.3799348	Xã	427	\N	\N
17680	Xã Quang Sơn	xa-quang-son	18.8650774	105.397502	Xã	427	\N	\N
17683	Xã Thịnh Sơn	xa-thinh-son	18.8969178	105.3401113	Xã	427	\N	\N
17686	Xã Trung Sơn	xa-trung-son	18.8590242	105.302853	Xã	427	\N	\N
17689	Xã Xuân Sơn	xa-xuan-son	18.8551769	105.3401585	Xã	427	\N	\N
17692	Xã Minh Sơn	xa-minh-son	18.8595598	105.3653713	Xã	427	\N	\N
17695	Xã Thuận Sơn	xa-thuan-son	18.8465575	105.2992159	Xã	427	\N	\N
17698	Xã Nhân Sơn	xa-nhan-son	18.8310571	105.3892372	Xã	427	\N	\N
17701	Xã Hiến Sơn	xa-hien-son	18.8509664	105.425446	Xã	427	\N	\N
17704	Xã Mỹ Sơn	xa-my-son	18.8181003	105.3997421	Xã	427	\N	\N
17707	Xã Trù Sơn	xa-tru-son	18.8235638	105.4386663	Xã	427	\N	\N
17710	Xã Đại Sơn	xa-dai-son	18.8438044	105.4617568	Xã	427	\N	\N
17713	Thị trấn Thanh Chương	thi-tran-thanh-chuong	18.7860854	105.3394635	Thị trấn	428	\N	\N
17716	Xã Cát Văn	xa-cat-van	18.8755732	105.2721456	Xã	428	\N	\N
17719	Xã Thanh Nho	xa-thanh-nho	18.8444709	105.2146801	Xã	428	\N	\N
17722	Xã Hạnh Lâm	xa-hanh-lam	14.058324	108.277199	Xã	428	\N	\N
17723	Xã Thanh Sơn	xa-thanh-son	19.0570776	104.9951118	Xã	428	\N	\N
17725	Xã Thanh Hòa	xa-thanh-hoa	14.058324	108.277199	Xã	428	\N	\N
17728	Xã Phong Thịnh	xa-phong-thinh	18.8393271	105.2504393	Xã	428	\N	\N
17731	Xã Thanh Phong	xa-thanh-phong	18.8292061	105.3442566	Xã	428	\N	\N
17734	Xã Thanh Mỹ	xa-thanh-my	18.8444709	105.2146801	Xã	428	\N	\N
17737	Xã Thanh Tiên	xa-thanh-tien	18.8051863	105.2838511	Xã	428	\N	\N
17740	Xã Thanh Hưng	xa-thanh-hung	14.058324	108.277199	Xã	428	\N	\N
17743	Xã Thanh Liên	xa-thanh-lien	18.818705	105.2604409	Xã	428	\N	\N
17746	Xã Thanh Tường	xa-thanh-tuong	18.7234258	105.3286743	Xã	428	\N	\N
17749	Xã Thanh Văn	xa-thanh-van	18.805009	105.304788	Xã	428	\N	\N
17752	Xã Thanh Đồng	xa-thanh-dong	14.058324	108.277199	Xã	428	\N	\N
17755	Xã Thanh Ngọc	xa-thanh-ngoc	18.7742449	105.3562822	Xã	428	\N	\N
17758	Xã Thanh Hương	xa-thanh-huong	14.058324	108.277199	Xã	428	\N	\N
17759	Xã Ngọc Lâm	xa-ngoc-lam	14.058324	108.277199	Xã	428	\N	\N
17761	Xã Thanh Lĩnh	xa-thanh-linh	18.7916234	105.2970644	Xã	428	\N	\N
17764	Xã Đồng Văn	xa-dong-van	18.7606721	105.3248549	Xã	428	\N	\N
17767	Xã Ngọc Sơn	xa-ngoc-son	18.92965	105.2567833	Xã	428	\N	\N
17770	Xã Thanh Thịnh	xa-thanh-thinh	18.7708544	105.3044506	Xã	428	\N	\N
17773	Xã Thanh An	xa-thanh-an	18.7073286	105.3801922	Xã	428	\N	\N
17776	Xã Thanh Chi	xa-thanh-chi	18.7392445	105.3440557	Xã	428	\N	\N
17779	Xã Xuân Tường	xa-xuan-tuong	18.6729087	105.4173329	Xã	428	\N	\N
17782	Xã Thanh Dương	xa-thanh-duong	18.7374423	105.336045	Xã	428	\N	\N
17785	Xã Thanh Lương	xa-thanh-luong	18.6729087	105.4173329	Xã	428	\N	\N
17788	Xã Thanh Khê	xa-thanh-khe	18.7213061	105.3189726	Xã	428	\N	\N
17791	Xã Võ Liệt	xa-vo-liet	18.7174985	105.3711194	Xã	428	\N	\N
17794	Xã Thanh Long	xa-thanh-long	18.7085372	105.3824338	Xã	428	\N	\N
17797	Xã Thanh Thủy	xa-thanh-thuy	18.6630517	105.2545888	Xã	428	\N	\N
17800	Xã Thanh Khai	xa-thanh-khai	18.7016195	105.4507424	Xã	428	\N	\N
17803	Xã Thanh Yên	xa-thanh-yen	18.6729087	105.4173329	Xã	428	\N	\N
17806	Xã Thanh Hà	xa-thanh-ha	18.6341113	105.3248269	Xã	428	\N	\N
17809	Xã Thanh Giang	xa-thanh-giang	18.6788069	105.4126652	Xã	428	\N	\N
17812	Xã Thanh Tùng	xa-thanh-tung	18.6596016	105.3658125	Xã	428	\N	\N
17815	Xã Thanh Lâm	xa-thanh-lam	18.6455031	105.4653897	Xã	428	\N	\N
17818	Xã Thanh Mai	xa-thanh-mai	18.6249274	105.3658125	Xã	428	\N	\N
17821	Xã Thanh Xuân	xa-thanh-xuan	18.6032039	105.4185227	Xã	428	\N	\N
17824	Xã Thanh Đức	xa-thanh-duc	18.8978161	105.3053391	Xã	428	\N	\N
17827	Thị trấn Quán Hành	thi-tran-quan-hanh	18.7853365	105.6418428	Thị trấn	429	\N	\N
17830	Xã Nghi Văn	xa-nghi-van	18.7524371	105.6353878	Xã	429	\N	\N
17833	Xã Nghi Yên	xa-nghi-yen	18.867962	105.6353878	Xã	429	\N	\N
17836	Xã Nghi Tiến	xa-nghi-tien	18.8639373	105.6823124	Xã	429	\N	\N
17839	Xã Nghi Hưng	xa-nghi-hung	18.8468595	105.6119301	Xã	429	\N	\N
17842	Xã Nghi Đồng	xa-nghi-dong	18.8149064	105.6034542	Xã	429	\N	\N
17845	Xã Nghi Thiết	xa-nghi-thiet	18.841958	105.7028457	Xã	429	\N	\N
17848	Xã Nghi Lâm	xa-nghi-lam	18.8157528	105.5320716	Xã	429	\N	\N
17851	Xã Nghi Quang	xa-nghi-quang	18.8387003	105.6735131	Xã	429	\N	\N
17854	Xã Nghi Kiều	xa-nghi-kieu	18.8231528	105.492906	Xã	429	\N	\N
17857	Xã Nghi Mỹ	xa-nghi-my	18.8101992	105.566833	Xã	429	\N	\N
17860	Xã Nghi Phương	xa-nghi-phuong	14.058324	108.277199	Xã	429	\N	\N
17863	Xã Nghi Thuận	xa-nghi-thuan	18.8101949	105.6353878	Xã	429	\N	\N
17866	Xã Nghi Long	xa-nghi-long	18.8048167	105.6575865	Xã	429	\N	\N
17869	Xã Nghi Xá	xa-nghi-xa	18.8218755	105.6676471	Xã	429	\N	\N
17872	Xã Nghi Hợp	xa-nghi-hop	18.8140891	105.6911121	Xã	429	\N	\N
17875	Xã Nghi Hoa	xa-nghi-hoa	18.7986907	105.6323943	Xã	429	\N	\N
17878	Xã Nghi Khánh	xa-nghi-khanh	18.8062414	105.6984455	Xã	429	\N	\N
17881	Xã Nghi Thịnh	xa-nghi-thinh	18.791994	105.6793792	Xã	429	\N	\N
17884	Xã Nghi Công Bắc	xa-nghi-cong-bac	18.7924315	105.5386447	Xã	429	\N	\N
17887	Xã Nghi Công Nam	xa-nghi-cong-nam	18.7719608	105.5415755	Xã	429	\N	\N
17890	Xã Nghi Thạch	xa-nghi-thach	18.772158	105.7087128	Xã	429	\N	\N
17893	Xã Nghi Trung	xa-nghi-trung	18.7920341	105.6570715	Xã	429	\N	\N
17896	Xã Nghi Trường	xa-nghi-truong	18.7715311	105.6823124	Xã	429	\N	\N
17899	Xã Nghi Diên	xa-nghi-dien	18.7739009	105.6207263	Xã	429	\N	\N
17902	Xã Nghi Phong	xa-nghi-phong	18.7464266	105.7057792	Xã	429	\N	\N
17905	Xã Nghi Xuân	xa-nghi-xuan	18.7533281	105.7263152	Xã	429	\N	\N
17908	Xã Nghi Liên	xa-nghi-lien	18.7467587	105.6570999	Xã	412	\N	\N
17911	Xã Nghi Vạn	xa-nghi-van	18.7524371	105.6353878	Xã	429	\N	\N
17914	Xã Nghi Ân	xa-nghi-an	18.7405082	105.6855861	Xã	412	\N	\N
17917	Xã Phúc Thọ	xa-phuc-tho	18.7203195	105.7409852	Xã	429	\N	\N
17920	Xã Nghi Kim	xa-nghi-kim	18.7247673	105.652911	Xã	412	\N	\N
17923	Xã Nghi Đức	xa-nghi-duc	18.7140503	105.6999651	Xã	412	\N	\N
17926	Xã Nghi Thái	xa-nghi-thai	18.7066419	105.7321831	Xã	429	\N	\N
17929	Thị trấn Nam Đàn	thi-tran-nam-dan	18.7087395	105.5034785	Thị trấn	430	\N	\N
17932	Xã Nam Hưng	xa-nam-hung	18.7598391	105.4335594	Xã	430	\N	\N
17935	Xã Nam Nghĩa	xa-nam-nghia	18.744831	105.447534	Xã	430	\N	\N
17938	Xã Nam Thanh	xa-nam-thanh	18.7402689	105.5064087	Xã	430	\N	\N
17941	Xã Nam Anh	xa-nam-anh	18.7382885	105.5298525	Xã	430	\N	\N
17944	Xã Nam Xuân	xa-nam-xuan	18.7085557	105.5358495	Xã	430	\N	\N
17947	Xã Nam Thái	xa-nam-thai	18.7196763	105.4601717	Xã	430	\N	\N
17950	Xã Vân Diên	xa-van-dien	18.7140552	105.4950301	Xã	430	\N	\N
17953	Xã Nam Lĩnh	xa-nam-linh	18.7044864	105.5561863	Xã	430	\N	\N
17956	Xã Nam Giang	xa-nam-giang	18.6986693	105.5884754	Xã	430	\N	\N
17959	Xã Xuân Hòa	xa-xuan-hoa	18.6938831	105.5310815	Xã	430	\N	\N
17962	Xã Hùng Tiến	xa-hung-tien	18.6805207	105.5298525	Xã	430	\N	\N
17965	Xã Nam Thượng	xa-nam-thuong	18.6867618	105.4633072	Xã	430	\N	\N
17968	Xã Nam Tân	xa-nam-tan	18.681508	105.4824708	Xã	430	\N	\N
17971	Xã Kim Liên	xa-kim-lien	18.6775519	105.5650239	Xã	430	\N	\N
17974	Xã Nam Lộc	xa-nam-loc	18.6593894	105.5064087	Xã	430	\N	\N
17977	Xã Hồng Long	xa-hong-long	18.6574163	105.5298525	Xã	430	\N	\N
17980	Xã Xuân Lâm	xa-xuan-lam	18.6438895	105.5532993	Xã	430	\N	\N
17983	Xã Nam Cát	xa-nam-cat	18.6435599	105.5914071	Xã	430	\N	\N
17986	Xã Khánh Sơn	xa-khanh-son	18.6164946	105.5357139	Xã	430	\N	\N
17989	Xã Nam Phúc	xa-nam-phuc	18.592089	105.5855438	Xã	430	\N	\N
17992	Xã Nam Cường	xa-nam-cuong	18.5848323	105.6031342	Xã	430	\N	\N
17995	Xã Nam Trung	xa-nam-trung	18.6072649	105.5767493	Xã	430	\N	\N
17998	Xã Nam Kim	xa-nam-kim	18.5761272	105.5493969	Xã	430	\N	\N
18001	Thị trấn Hưng Nguyên	thi-tran-hung-nguyen	18.6631805	105.6324554	Thị trấn	431	\N	\N
18004	Xã Hưng Trung	xa-hung-trung	18.7872016	105.6051987	Xã	431	\N	\N
18007	Xã Hưng Yên	xa-hung-yen	18.7448755	105.5884754	Xã	431	\N	\N
18008	Xã Hưng Yên Bắc	xa-hung-yen-bac	18.7595652	105.5855438	Xã	431	\N	\N
18010	Xã Hưng Tây	xa-hung-tay	18.7072347	105.6236585	Xã	431	\N	\N
18013	Xã Hưng Chính	xa-hung-chinh	18.6659896	105.6481966	Xã	412	\N	\N
18016	Xã Hưng Đạo	xa-hung-dao	18.6630266	105.6002024	Xã	431	\N	\N
18019	Xã Hưng Mỹ	xa-hung-my	18.6443671	105.6500504	Xã	431	\N	\N
18022	Xã Hưng Thịnh	xa-hung-thinh	18.6423745	105.6735131	Xã	431	\N	\N
18025	Xã Hưng Lĩnh	xa-hung-linh	18.6392711	105.5738179	Xã	431	\N	\N
18028	Xã Hưng Thông	xa-hung-thong	18.6300285	105.6148621	Xã	431	\N	\N
18031	Xã Hưng Tân	xa-hung-tan	18.6405828	105.6265908	Xã	431	\N	\N
18034	Xã Hưng Lợi	xa-hung-loi	18.6238593	105.6720554	Xã	431	\N	\N
18037	Xã Hưng Thắng	xa-hung-thang	18.6159995	105.6441852	Xã	431	\N	\N
18040	Xã Hưng Phúc	xa-hung-phuc	18.6234155	105.6588485	Xã	431	\N	\N
18043	Xã Hưng Long	xa-hung-long	18.6204633	105.5914071	Xã	431	\N	\N
18046	Xã Hưng Tiến	xa-hung-tien	18.6112199	105.6324554	Xã	431	\N	\N
18049	Xã Hưng Xá	xa-hung-xa	18.6132036	105.6089981	Xã	431	\N	\N
18052	Xã Hưng Châu	xa-hung-chau	18.6029634	105.6617813	Xã	431	\N	\N
18055	Xã Hưng Xuân	xa-hung-xuan	18.6006659	105.6207263	Xã	431	\N	\N
18058	Xã Hưng Nhân	xa-hung-nhan	18.5956991	105.6793792	Xã	431	\N	\N
18061	Xã Hưng Phú	xa-hung-phu	18.5871368	105.6441852	Xã	431	\N	\N
18064	Xã Hưng Khánh	xa-hung-khanh	18.586144	105.6559158	Xã	431	\N	\N
18067	Xã Hưng Lam	xa-hung-lam	18.5802134	105.6236585	Xã	431	\N	\N
18070	Phường Trần Phú	phuong-tran-phu	18.3413089	105.8886012	Phường	436	\N	\N
18073	Phường Nam Hà	phuong-nam-ha	18.3339509	105.9054085	Phường	436	\N	\N
18076	Phường Bắc Hà	phuong-bac-ha	18.3441458	105.8973095	Phường	436	\N	\N
18077	Phường Nguyễn Du	phuong-nguyen-du	18.3570196	105.8921541	Phường	436	\N	\N
18079	Phường Tân Giang	phuong-tan-giang	18.3413636	105.9068373	Phường	436	\N	\N
18082	Phường Đại Nài	phuong-dai-nai	18.3212047	105.9110452	Phường	436	\N	\N
18085	Phường Hà Huy Tập	phuong-ha-huy-tap	18.3308064	105.8986036	Phường	436	\N	\N
18088	Xã Thạch Trung	xa-thach-trung	18.3653477	105.8789403	Xã	436	\N	\N
18091	Phường Thạch Quý	phuong-thach-quy	18.3533117	105.9070127	Phường	436	\N	\N
18094	Phường Thạch Linh	phuong-thach-linh	18.3391298	105.8768196	Phường	436	\N	\N
18097	Phường Văn Yên	phuong-van-yen	18.3320418	105.9198794	Phường	436	\N	\N
18100	Xã Thạch Hạ	xa-thach-ha	18.3829615	105.8922647	Xã	436	\N	\N
18103	Xã Thạch Môn	xa-thach-mon	18.3775667	105.9078185	Xã	436	\N	\N
18106	Xã Thạch Đồng	xa-thach-dong	18.3715905	105.9232598	Xã	436	\N	\N
18109	Xã Thạch Hưng	xa-thach-hung	18.3564415	105.9171928	Xã	436	\N	\N
18112	Xã Thạch Bình	xa-thach-binh	18.3141029	105.9304773	Xã	436	\N	\N
18115	Phường Bắc Hồng	phuong-bac-hong	18.541273	105.7087128	Phường	437	\N	\N
18118	Phường Nam Hồng	phuong-nam-hong	18.5244601	105.7028457	Phường	437	\N	\N
18121	Phường Trung Lương	phuong-trung-luong	18.5605738	105.6852455	Phường	437	\N	\N
18124	Phường Đức Thuận	phuong-duc-thuan	18.5485352	105.6911121	Phường	437	\N	\N
18127	Phường Đậu Liêu	phuong-dau-lieu	18.5251068	105.7292491	Phường	437	\N	\N
18130	Xã Thuận Lộc	xa-thuan-loc	18.5081434	105.6911121	Xã	437	\N	\N
18133	Thị trấn Phố Châu	thi-tran-pho-chau	18.5071631	105.4273093	Thị trấn	439	\N	\N
18136	Thị trấn  Tây Sơn	thi-tran-tay-son	18.4590804	105.3101915	Thị trấn	439	\N	\N
18139	Xã Sơn Hồng	xa-son-hong	18.5792221	105.2897042	Xã	439	\N	\N
18142	Xã Sơn Tiến	xa-son-tien	18.5973283	105.488828	Xã	439	\N	\N
18145	Xã Sơn Lâm	xa-son-lam	18.5608817	105.3716684	Xã	439	\N	\N
18148	Xã Sơn Lễ	xa-son-le	18.5550378	105.4419546	Xã	439	\N	\N
18151	Xã Sơn Thịnh	xa-son-thinh	18.5575813	105.5151997	Xã	439	\N	\N
18154	Xã Sơn An	xa-son-an	18.5595433	105.491758	Xã	439	\N	\N
18157	Xã Sơn Giang	xa-son-giang	18.540147	105.4126652	Xã	439	\N	\N
18160	Xã Sơn Lĩnh	xa-son-linh	18.5238311	105.3306814	Xã	439	\N	\N
18163	Xã Sơn Hòa	xa-son-hoa	18.552788	105.5034785	Xã	439	\N	\N
18166	Xã Sơn Tân	xa-son-tan	18.5409359	105.5415755	Xã	439	\N	\N
18169	Xã Sơn Mỹ	xa-son-my	18.539277	105.5269218	Xã	439	\N	\N
18172	Xã Sơn Tây	xa-son-tay	18.4472837	105.348246	Xã	439	\N	\N
18175	Xã Sơn Ninh	xa-son-ninh	18.5316481	105.4800382	Xã	439	\N	\N
18178	Xã Sơn Châu	xa-son-chau	18.5244058	105.4976181	Xã	439	\N	\N
18181	Xã Sơn Hà	xa-son-ha	18.52822	105.5210607	Xã	439	\N	\N
18184	Xã Sơn Quang	xa-son-quang	18.5199568	105.3775245	Xã	439	\N	\N
18187	Xã Sơn Trung	xa-son-trung	18.5235154	105.4390254	Xã	439	\N	\N
18190	Xã Sơn Bằng	xa-son-bang	18.5153013	105.4683193	Xã	439	\N	\N
18193	Xã Sơn Bình	xa-son-binh	18.5092366	105.5064087	Xã	439	\N	\N
18196	Xã Sơn Kim 1	xa-son-kim-1	18.4482007	105.1960795	Xã	439	\N	\N
18199	Xã Sơn Kim 2	xa-son-kim-2	18.3481249	105.2897042	Xã	439	\N	\N
18202	Xã Sơn Trà	xa-son-tra	18.5046355	105.5269218	Xã	439	\N	\N
18205	Xã Sơn Long	xa-son-long	18.5036549	105.5386447	Xã	439	\N	\N
18208	Xã Sơn Diệm	xa-son-diem	18.496851	105.3775245	Xã	439	\N	\N
18211	Xã Sơn Thủy	xa-son-thuy	18.4755727	105.494688	Xã	439	\N	\N
18214	Xã Sơn Hàm	xa-son-ham	18.4718091	105.4009508	Xã	439	\N	\N
18217	Xã Sơn Phú	xa-son-phu	18.4946395	105.4390254	Xã	439	\N	\N
18220	Xã Sơn Phúc	xa-son-phuc	18.487404	105.4566012	Xã	439	\N	\N
18223	Xã Sơn Trường	xa-son-truong	18.4573477	105.4360963	Xã	439	\N	\N
18226	Xã Sơn Mai	xa-son-mai	18.4659766	105.471249	Xã	439	\N	\N
18229	Thị trấn Đức Thọ	thi-tran-duc-tho	18.5401307	105.5855438	Thị trấn	440	\N	\N
18232	Xã Đức Quang	xa-duc-quang	18.5645441	105.6383202	Xã	440	\N	\N
18235	Xã Đức Vĩnh	xa-duc-vinh	18.5688284	105.6559158	Xã	440	\N	\N
18238	Xã Đức Châu	xa-duc-chau	18.5727918	105.6089981	Xã	440	\N	\N
18241	Xã Đức Tùng	xa-duc-tung	18.555968	105.6031342	Xã	440	\N	\N
18244	Xã Trường Sơn	xa-truong-son	18.5478745	105.5620927	Xã	440	\N	\N
18247	Xã Liên Minh	xa-lien-minh	18.544423	105.6031342	Xã	440	\N	\N
18250	Xã Đức La	xa-duc-la	18.5487129	105.6207263	Xã	440	\N	\N
18253	Xã Yên Hồ	xa-yen-ho	18.5457424	105.6559158	Xã	440	\N	\N
18256	Xã Đức Nhân	xa-duc-nhan	18.5356853	105.6383202	Xã	440	\N	\N
18259	Xã Tùng Ảnh	xa-tung-anh	18.5274225	105.5650239	Xã	440	\N	\N
18262	Xã Bùi Xá	xa-bui-xa	18.5261192	105.6148621	Xã	440	\N	\N
18265	Xã Đức Thịnh	xa-duc-thinh	18.5264461	105.6793792	Xã	440	\N	\N
18268	Xã Đức Yên	xa-duc-yen	18.5280927	105.5914071	Xã	440	\N	\N
18271	Xã Đức Thủy	xa-duc-thuy	18.517382	105.6500504	Xã	440	\N	\N
18274	Xã Thái Yên	xa-thai-yen	18.5216672	105.6676471	Xã	440	\N	\N
18277	Xã Trung Lễ	xa-trung-le	18.5135884	105.6265908	Xã	440	\N	\N
18280	Xã Đức Hòa	xa-duc-hoa	18.4964099	105.5562304	Xã	440	\N	\N
18283	Xã Đức Long	xa-duc-long	18.5023643	105.5884754	Xã	440	\N	\N
18286	Xã Đức Lâm	xa-duc-lam	18.4962748	105.6265908	Xã	440	\N	\N
18289	Xã Đức Thanh	xa-duc-thanh	18.4995752	105.6559158	Xã	440	\N	\N
18292	Xã Đức Dũng	xa-duc-dung	18.4611576	105.6324554	Xã	440	\N	\N
18295	Xã Đức Lập	xa-duc-lap	18.4782935	105.6002024	Xã	440	\N	\N
18298	Xã Đức An	xa-duc-an	18.4542256	105.6119301	Xã	440	\N	\N
18301	Xã Đức Lạc	xa-duc-lac	18.4781113	105.5679552	Xã	440	\N	\N
18304	Xã Đức Đồng	xa-duc-dong	18.4571741	105.5767493	Xã	440	\N	\N
18307	Xã Đức Lạng	xa-duc-lang	18.4423724	105.5685325	Xã	440	\N	\N
18310	Xã Tân Hương	xa-tan-huong	18.419604	105.6119301	Xã	440	\N	\N
18313	Thị trấn Vũ Quang	thi-tran-vu-quang	18.3620666	105.471249	Thị trấn	441	\N	\N
18316	Xã Ân Phú	xa-an-phu	18.4726394	105.5298525	Xã	441	\N	\N
18319	Xã Đức Giang	xa-duc-giang	18.4495497	105.5298525	Xã	441	\N	\N
18322	Xã Đức Lĩnh	xa-duc-linh	18.4284138	105.5064087	Xã	441	\N	\N
18325	Xã Sơn Thọ	xa-son-tho	18.4183838	105.4185227	Xã	441	\N	\N
18328	Xã Đức Hương	xa-duc-huong	18.3889034	105.5650239	Xã	441	\N	\N
18331	Xã Đức Bồng	xa-duc-bong	18.4023991	105.5415755	Xã	441	\N	\N
18334	Xã Đức Liên	xa-duc-lien	18.3859667	105.6002024	Xã	441	\N	\N
18337	Xã Hương Điền	xa-huong-dien	18.3702611	105.4419546	Xã	441	\N	\N
18340	Xã Hương Minh	xa-huong-minh	18.3413554	105.5122694	Xã	441	\N	\N
18343	Xã Hương Thọ	xa-huong-tho	18.3393388	105.5735632	Xã	441	\N	\N
18346	Xã Hương Quang	xa-huong-quang	18.2942677	105.3833808	Xã	441	\N	\N
18349	Thị trấn Nghi Xuân	thi-tran-nghi-xuan	18.6642304	105.7556564	Thị trấn	442	\N	\N
18352	Thị trấn Xuân An	thi-tran-xuan-an	18.6405151	105.7292491	Thị trấn	442	\N	\N
18355	Xã Xuân Hội	xa-xuan-hoi	18.7529406	105.7644596	Xã	442	\N	\N
18358	Xã Xuân Trường	xa-xuan-truong	18.7262091	105.7732633	Xã	442	\N	\N
18361	Xã Xuân Đan	xa-xuan-dan	18.7083899	105.7791327	Xã	442	\N	\N
18364	Xã Xuân Phổ	xa-xuan-pho	18.6942131	105.776198	Xã	442	\N	\N
18367	Xã Xuân Hải	xa-xuan-hai	18.6790301	105.7850022	Xã	442	\N	\N
18370	Xã Xuân Giang	xa-xuan-giang	18.6500534	105.7527221	Xã	442	\N	\N
18373	Xã Tiên Điền	xa-tien-dien	18.657455	105.7673942	Xã	442	\N	\N
18376	Xã Xuân Yên	xa-xuan-yen	18.658581	105.7879371	Xã	442	\N	\N
18379	Xã Xuân Mỹ	xa-xuan-my	18.624964	105.776198	Xã	442	\N	\N
18382	Xã Xuân Thành	xa-xuan-thanh	18.6344944	105.7996769	Xã	442	\N	\N
18385	Xã Xuân Viên	xa-xuan-vien	18.6038878	105.7527221	Xã	442	\N	\N
18388	Xã Xuân Hồng	xa-xuan-hong	18.6078856	105.7057792	Xã	442	\N	\N
18391	Xã Cỗ Đạm	xa-co-dam	18.5893423	105.7879371	Xã	442	\N	\N
18394	Xã Xuân Liên	xa-xuan-lien	18.5978671	105.8231588	Xã	442	\N	\N
18397	Xã Xuân Lĩnh	xa-xuan-linh	18.5712652	105.7292491	Xã	442	\N	\N
18400	Xã Xuân Lam	xa-xuan-lam	18.584801	105.7057792	Xã	442	\N	\N
18403	Xã Cương Gián	xa-cuong-gian	18.5622521	105.8349009	Xã	442	\N	\N
18406	Thị trấn Nghèn	thi-tran-nghen	18.4529003	105.7644596	Thị trấn	443	\N	\N
18409	Xã Tân Lộc	xa-tan-loc	18.5067104	105.843708	Xã	448	\N	\N
18412	Xã Hồng Lộc	xa-hong-loc	18.4940472	105.8231588	Xã	448	\N	\N
18415	Xã Thiên Lộc	xa-thien-loc	18.5043119	105.7703287	Xã	443	\N	\N
18418	Xã Thuần Thiện	xa-thuan-thien	18.5075826	105.7996769	Xã	443	\N	\N
18421	Xã Thịnh Lộc	xa-thinh-loc	18.5120948	105.8818766	Xã	448	\N	\N
18424	Xã Kim Lộc	xa-kim-loc	18.4923204	105.6735131	Xã	443	\N	\N
18427	Xã Vượng Lộc	xa-vuong-loc	18.4779609	105.7409852	Xã	443	\N	\N
18430	Xã An Lộc	xa-an-loc	18.4884696	105.8715997	Xã	448	\N	\N
18433	Xã Thanh Lộc	xa-thanh-loc	18.4799481	105.7175138	Xã	443	\N	\N
18436	Xã Song Lộc	xa-song-loc	18.4802857	105.6793792	Xã	443	\N	\N
18439	Xã Thường Nga	xa-thuong-nga	18.4539082	105.6500504	Xã	443	\N	\N
18442	Xã Trường Lộc	xa-truong-loc	18.4682517	105.6852455	Xã	443	\N	\N
18445	Xã Tùng Lộc	xa-tung-loc	18.4573141	105.8143528	Xã	443	\N	\N
18448	Xã Bình Lộc	xa-binh-loc	18.4758733	105.8671954	Xã	448	\N	\N
18451	Xã Yên Lộc	xa-yen-loc	18.4605015	105.7087128	Xã	443	\N	\N
18454	Xã Phú Lộc	xa-phu-loc	18.4262193	105.6705801	Xã	443	\N	\N
18457	Xã Ích Hậu	xa-ich-hau	18.4437837	105.8378366	Xã	448	\N	\N
18460	Xã Khánh Lộc	xa-khanh-loc	18.443353	105.7409852	Xã	443	\N	\N
18463	Xã Gia Hanh	xa-gia-hanh	18.4221007	105.6852455	Xã	443	\N	\N
18466	Xã Vĩnh Lộc	xa-vinh-loc	18.4422052	105.7204476	Xã	443	\N	\N
18469	Xã Tiến Lộc	xa-tien-loc	18.4357451	105.7967419	Xã	443	\N	\N
18472	Xã Trung Lộc	xa-trung-loc	18.4239105	105.7321831	Xã	443	\N	\N
18475	Xã Xuân Lộc	xa-xuan-loc	18.4194538	105.757769	Xã	443	\N	\N
18478	Xã Thượng Lộc	xa-thuong-loc	18.3896359	105.6940454	Xã	443	\N	\N
18481	Xã Quang Lộc	xa-quang-loc	18.403137	105.7732633	Xã	443	\N	\N
18484	Xã Đồng Lộc	xa-dong-loc	18.3761263	105.7175138	Xã	443	\N	\N
18487	Xã Mỹ Lộc	xa-my-loc	18.3626162	105.7409852	Xã	443	\N	\N
18490	Xã Sơn Lộc	xa-son-loc	18.3743072	105.7732633	Xã	443	\N	\N
18493	Xã Phù Lưu	xa-phu-luu	18.4553803	105.8499241	Xã	448	\N	\N
18496	Thị trấn Hương Khê	thi-tran-huong-khe	18.1703985	105.708316	Thị trấn	444	\N	\N
18499	Xã Phương Mỹ	xa-phuong-my	18.3527078	105.652983	Xã	444	\N	\N
18502	Xã Hà Linh	xa-ha-linh	18.3026415	105.6999122	Xã	444	\N	\N
18505	Xã Hương Thủy	xa-huong-thuy	18.2608098	105.7175138	Xã	444	\N	\N
18508	Xã Hòa Hải	xa-hoa-hai	18.2471036	105.5357139	Xã	444	\N	\N
18511	Xã Phương Điền	xa-phuong-dien	18.3032491	105.6236585	Xã	444	\N	\N
18514	Xã Phúc Đồng	xa-phuc-dong	18.2604364	105.652983	Xã	444	\N	\N
18517	Xã Hương Giang	xa-huong-giang	18.2355985	105.7486869	Xã	444	\N	\N
18520	Xã Lộc Yên	xa-loc-yen	18.1869126	105.7468527	Xã	444	\N	\N
18523	Xã Hương Bình	xa-huong-binh	18.2234885	105.6119301	Xã	444	\N	\N
18526	Xã Hương Long	xa-huong-long	18.2059076	105.6500504	Xã	444	\N	\N
18529	Xã Phú Gia	xa-phu-gia	18.1528942	105.5591615	Xã	444	\N	\N
18532	Xã Gia Phố	xa-gia-pho	18.1935985	105.6940454	Xã	444	\N	\N
18535	Xã Phú Phong	xa-phu-phong	18.1674179	105.6969788	Xã	444	\N	\N
18538	Xã Hương Đô	xa-huong-do	18.1445601	105.7292491	Xã	444	\N	\N
18541	Xã Hương Vĩnh	xa-huong-vinh	18.1187458	105.6236585	Xã	444	\N	\N
18544	Xã Hương Xuân	xa-huong-xuan	18.1369399	105.6823124	Xã	444	\N	\N
18547	Xã Phúc Trạch	xa-phuc-trach	18.1142845	105.7468535	Xã	444	\N	\N
18550	Xã Hương Trà	xa-huong-tra	18.2034888	105.6403034	Xã	444	\N	\N
18553	Xã Hương Trạch	xa-huong-trach	18.0834005	105.8407722	Xã	444	\N	\N
18556	Xã Hương Lâm	xa-huong-lam	18.0404391	105.6647142	Xã	444	\N	\N
18559	Xã Hương Liên	xa-huong-lien	18.0432073	105.7703287	Xã	444	\N	\N
18562	Thị trấn Thạch Hà	thi-tran-thach-ha	18.3668454	105.8613233	Thị trấn	445	\N	\N
18565	Xã Ngọc Sơn	xa-ngoc-son	18.3478354	105.762214	Xã	445	\N	\N
18568	Xã Thạch Bằng	xa-thach-bang	18.4613303	105.9024322	Xã	448	\N	\N
18571	Xã Thạch Hải	xa-thach-hai	18.4368795	105.9523622	Xã	445	\N	\N
18574	Xã Thạch Bàn	xa-thach-ban	18.4273663	105.9288641	Xã	445	\N	\N
18577	Xã Thạch Mỹ	xa-thach-my	18.4439137	105.8701316	Xã	448	\N	\N
18580	Xã Thạch Kim	xa-thach-kim	18.4598215	105.9200531	Xã	448	\N	\N
18583	Xã Thạch Châu	xa-thach-chau	18.4387748	105.896559	Xã	448	\N	\N
18586	Xã Thạch Kênh	xa-thach-kenh	18.4222192	105.8202234	Xã	445	\N	\N
18589	Xã Thạch Sơn	xa-thach-son	18.4134583	105.8554513	Xã	445	\N	\N
18592	Xã Thạch Liên	xa-thach-lien	18.4069147	105.7967419	Xã	445	\N	\N
18595	Xã Thạch Đỉnh	xa-thach-dinh	18.4064415	105.9376756	Xã	445	\N	\N
18598	Xã Hộ Độ	xa-ho-do	18.4073235	105.8936224	Xã	448	\N	\N
18601	Xã Phù Việt	xa-phu-viet	18.392396	105.8319653	Xã	445	\N	\N
18604	Xã Thạch Khê	xa-thach-khe	18.3802589	105.9406128	Xã	445	\N	\N
18607	Xã Thạch Long	xa-thach-long	18.3904004	105.8554513	Xã	445	\N	\N
18610	Xã Việt Xuyên	xa-viet-xuyen	18.3891205	105.802612	Xã	445	\N	\N
18613	Xã Thạch Tiến	xa-thach-tien	18.3650659	105.8143528	Xã	445	\N	\N
18616	Xã Thạch Thanh	xa-thach-thanh	18.3688396	105.8378366	Xã	445	\N	\N
18619	Xã Thạch Trị	xa-thach-tri	18.3657201	105.9758633	Xã	445	\N	\N
18622	Xã Thạch Lạc	xa-thach-lac	18.3698578	105.9611748	Xã	445	\N	\N
18625	Xã Thạch Ngọc	xa-thach-ngoc	18.3586536	105.7879371	Xã	445	\N	\N
18628	Xã Tượng Sơn	xa-tuong-son	18.3430572	105.9376756	Xã	445	\N	\N
18631	Xã Thạch Văn	xa-thach-van	18.3521854	105.9993672	Xã	445	\N	\N
18634	Xã Thạch Vĩnh	xa-thach-vinh	18.3441449	105.8231588	Xã	445	\N	\N
18637	Xã Thạch Thắng	xa-thach-thang	18.3321588	105.9641124	Xã	445	\N	\N
18640	Xã Thạch Lưu	xa-thach-luu	18.3279954	105.843708	Xã	445	\N	\N
18643	Xã Thạch Đài	xa-thach-dai	18.3207394	105.8613233	Xã	445	\N	\N
18646	Xã Bắc Sơn	xa-bac-son	18.3105545	105.8114175	Xã	445	\N	\N
18649	Xã Thạch Hội	xa-thach-hoi	18.3212584	105.9905529	Xã	445	\N	\N
18652	Xã Thạch Tân	xa-thach-tan	18.3087086	105.889046	Xã	445	\N	\N
18655	Xã Thạch Lâm	xa-thach-lam	18.294812	105.9145307	Xã	445	\N	\N
18658	Xã Thạch Xuân	xa-thach-xuan	18.2845252	105.8466437	Xã	445	\N	\N
18661	Xã Thạch Hương	xa-thach-huong	18.4027534	105.9547805	Xã	445	\N	\N
18664	Xã Nam Hương	xa-nam-huong	18.260484	105.8583873	Xã	445	\N	\N
18667	Xã Thạch Điền	xa-thach-dien	18.2354532	105.8818766	Xã	445	\N	\N
18670	Xã Mai Phụ	xa-mai-phu	18.4219838	105.8906859	Xã	448	\N	\N
18673	Thị trấn Cẩm Xuyên	thi-tran-cam-xuyen	18.256902	106.0023054	Thị trấn	446	\N	\N
18676	Thị trấn Thiên Cầm	thi-tran-thien-cam	18.2760217	106.0816536	Thị trấn	446	\N	\N
18679	Xã Cẩm Hòa	xa-cam-hoa	18.3271308	106.022874	Xã	446	\N	\N
18682	Xã Cẩm Dương	xa-cam-duong	18.3010708	106.0581397	Xã	446	\N	\N
18685	Xã Cẩm Bình	xa-cam-binh	18.2975957	105.9641124	Xã	446	\N	\N
18688	Xã Cẩm Yên	xa-cam-yen	18.3061052	105.9993672	Xã	446	\N	\N
18691	Xã Cẩm Vĩnh	xa-cam-vinh	18.3026088	105.9296034	Xã	446	\N	\N
18694	Xã Cẩm Thành	xa-cam-thanh	18.2709691	105.9488058	Xã	446	\N	\N
18697	Xã Cẩm Quang	xa-cam-quang	18.2766848	105.9729255	Xã	446	\N	\N
18700	Xã Cẩm Nam	xa-cam-nam	18.2800527	106.0346285	Xã	446	\N	\N
18703	Xã Cẩm Huy	xa-cam-huy	18.2830677	105.9993672	Xã	446	\N	\N
18706	Xã Cẩm Thạch	xa-cam-thach	18.2449859	105.9053689	Xã	446	\N	\N
18709	Xã Cẩm Nhượng	xa-cam-nhuong	18.2683387	106.1042573	Xã	446	\N	\N
18712	Xã Cẩm Thăng	xa-cam-thang	18.260653	106.0258126	Xã	446	\N	\N
18715	Xã Cẩm Duệ	xa-cam-due	18.2451256	105.9376756	Xã	446	\N	\N
18718	Xã Cẩm Phúc	xa-cam-phuc	18.2550085	106.0581397	Xã	446	\N	\N
18721	Xã Cẩm Lĩnh	xa-cam-linh	18.2489543	106.1286901	Xã	446	\N	\N
18724	Xã Cẩm Quan	xa-cam-quan	18.2097078	105.981739	Xã	446	\N	\N
18727	Xã Cẩm Hà	xa-cam-ha	18.2336008	106.0728356	Xã	446	\N	\N
18730	Xã Cẩm Lộc	xa-cam-loc	18.2378461	106.0904721	Xã	446	\N	\N
18733	Xã Cẩm Hưng	xa-cam-hung	18.2234781	106.022874	Xã	446	\N	\N
18736	Xã Cẩm Thịnh	xa-cam-thinh	18.0695597	106.0052437	Xã	446	\N	\N
18739	Xã Cẩm Mỹ	xa-cam-my	18.1445957	105.9347384	Xã	446	\N	\N
18742	Xã Cẩm Trung	xa-cam-trung	18.2205976	106.101806	Xã	446	\N	\N
18745	Xã Cẩm Sơn	xa-cam-son	18.1513947	106.0581397	Xã	446	\N	\N
18748	Xã Cẩm Lạc	xa-cam-lac	18.1714048	106.0934117	Xã	446	\N	\N
18751	Xã Cẩm Minh	xa-cam-minh	18.1516271	106.1228099	Xã	446	\N	\N
18754	Phường Sông Trí	phuong-song-tri	14.058324	108.277199	Phường	449	\N	\N
18757	Xã Kỳ Xuân	xa-ky-xuan	14.058324	108.277199	Xã	447	\N	\N
18760	Xã Kỳ Bắc	xa-ky-bac	18.0770616	106.2901551	Xã	447	\N	\N
18763	Xã Kỳ Phú	xa-ky-phu	18.1718202	106.2381771	Xã	447	\N	\N
18766	Xã Kỳ Phong	xa-ky-phong	14.058324	108.277199	Xã	447	\N	\N
18769	Xã Kỳ Tiến	xa-ky-tien	18.19823	106.1911115	Xã	447	\N	\N
18772	Xã Kỳ Giang	xa-ky-giang	18.1736164	106.2167055	Xã	447	\N	\N
18775	Xã Kỳ Đồng	xa-ky-dong	18.1724318	106.2369969	Xã	447	\N	\N
18778	Xã Kỳ Khang	xa-ky-khang	18.1562382	106.2698669	Xã	447	\N	\N
18781	Xã Kỳ Ninh	xa-ky-ninh	18.0654497	106.2994872	Xã	449	\N	\N
18784	Xã Kỳ Văn	xa-ky-van	18.0968847	106.2526149	Xã	447	\N	\N
18787	Xã Kỳ Trung	xa-ky-trung	14.058324	108.277199	Xã	447	\N	\N
18790	Xã Kỳ Thọ	xa-ky-tho	18.1223042	106.2882566	Xã	447	\N	\N
18793	Xã Kỳ Tây	xa-ky-tay	18.0842896	106.2572899	Xã	447	\N	\N
18796	Xã Kỳ Lợi	xa-ky-loi	18.0903722	106.4080266	Xã	449	\N	\N
18799	Xã Kỳ Thượng	xa-ky-thuong	18.0193962	106.1261175	Xã	447	\N	\N
18802	Xã Kỳ Hải	xa-ky-hai	18.0983101	106.3081194	Xã	447	\N	\N
18805	Xã Kỳ Thư	xa-ky-thu	18.0884283	106.2861312	Xã	447	\N	\N
18808	Xã Kỳ Hà	xa-ky-ha	14.058324	108.277199	Xã	449	\N	\N
18811	Xã Kỳ Châu	xa-ky-chau	18.0878287	106.2963486	Xã	447	\N	\N
18814	Xã Kỳ Tân	xa-ky-tan	18.0763041	106.2762619	Xã	447	\N	\N
18817	Xã Kỳ Hưng	xa-ky-hung	14.058324	108.277199	Xã	449	\N	\N
18820	Phường Kỳ Trinh	phuong-ky-trinh	14.058324	108.277199	Phường	449	\N	\N
18823	Phường Kỳ Thịnh	phuong-ky-thinh	14.058324	108.277199	Phường	449	\N	\N
18826	Xã Kỳ Hợp	xa-ky-hop	18.0418284	106.2044131	Xã	447	\N	\N
18829	Xã Kỳ Hoa	xa-ky-hoa	18.0612158	106.2809712	Xã	449	\N	\N
18832	Phường Kỳ Phương	phuong-ky-phuong	14.058324	108.277199	Phường	449	\N	\N
18835	Phường Kỳ Long	phuong-ky-long	14.058324	108.277199	Phường	449	\N	\N
18838	Xã Kỳ Lâm	xa-ky-lam	18.0117128	106.1867663	Xã	447	\N	\N
18841	Phường Kỳ Liên	phuong-ky-lien	14.058324	108.277199	Phường	449	\N	\N
18844	Xã Kỳ Sơn	xa-ky-son	17.9872207	106.1367757	Xã	447	\N	\N
18847	Xã Kỳ Nam	xa-ky-nam	18.0648343	106.2963486	Xã	449	\N	\N
18850	Xã Kỳ Lạc	xa-ky-lac	17.9644043	106.2400791	Xã	447	\N	\N
18853	Phường Hải Thành	phuong-hai-thanh	17.4840964	106.6203622	Phường	450	\N	\N
18856	Phường Đồng Phú	phuong-dong-phu	17.4698609	106.6170792	Phường	450	\N	\N
18859	Phường Bắc Lý	phuong-bac-ly	17.4795051	106.5847306	Phường	450	\N	\N
18862	Phường Đồng Mỹ	phuong-dong-my	17.475711	106.6247095	Phường	450	\N	\N
18865	Phường Nam Lý	phuong-nam-ly	17.4667792	106.6045033	Phường	450	\N	\N
18868	Phường Hải Đình	phuong-hai-dinh	17.4638331	106.6243646	Phường	450	\N	\N
18871	Phường Đồng Sơn	phuong-dong-son	17.4499079	106.5710439	Phường	450	\N	\N
18874	Phường Phú Hải	phuong-phu-hai	17.4488089	106.6299289	Phường	450	\N	\N
18877	Phường Bắc Nghĩa	phuong-bac-nghia	17.4534149	106.5864139	Phường	450	\N	\N
18880	Phường Đức Ninh Đông	phuong-duc-ninh-dong	17.4557767	106.6206144	Phường	450	\N	\N
18883	Xã Quang Phú	xa-quang-phu	17.5162465	106.608175	Xã	450	\N	\N
18886	Xã Lộc Ninh	xa-loc-ninh	17.5035761	106.5892383	Xã	450	\N	\N
18889	Xã Bảo Ninh	xa-bao-ninh	17.4688877	106.6378235	Xã	450	\N	\N
18892	Xã Nghĩa Ninh	xa-nghia-ninh	17.4358883	106.5806791	Xã	450	\N	\N
18895	Xã Thuận Đức	xa-thuan-duc	17.4742841	106.5535856	Xã	450	\N	\N
18898	Xã Đức Ninh	xa-duc-ninh	17.4422754	106.6086964	Xã	450	\N	\N
18901	Thị trấn Quy Đạt	thi-tran-quy-dat	17.8047876	105.9729255	Thị trấn	452	\N	\N
18904	Xã Dân Hóa	xa-dan-hoa	17.7563572	105.7585908	Xã	452	\N	\N
18907	Xã Trọng Hóa	xa-trong-hoa	17.9021986	105.6647142	Xã	452	\N	\N
18910	Xã Hóa Phúc	xa-hoa-phuc	17.9202536	105.8642593	Xã	452	\N	\N
18913	Xã Hồng Hóa	xa-hong-hoa	17.8933254	105.9112424	Xã	452	\N	\N
18916	Xã Hóa Thanh	xa-hoa-thanh	17.9011336	105.8172881	Xã	452	\N	\N
18919	Xã Hóa Tiến	xa-hoa-tien	17.8699272	105.8466437	Xã	452	\N	\N
18922	Xã Hóa Hợp	xa-hoa-hop	17.8209816	105.8818766	Xã	452	\N	\N
18925	Xã Xuân Hóa	xa-xuan-hoa	17.8223434	105.9347384	Xã	452	\N	\N
18928	Xã Yên Hóa	xa-yen-hoa	17.8361687	105.9758633	Xã	452	\N	\N
18931	Xã Minh Hóa	xa-minh-hoa	17.7704734	106.0052437	Xã	452	\N	\N
18934	Xã Tân Hóa	xa-tan-hoa	17.7645805	106.0757749	Xã	452	\N	\N
18937	Xã Hóa Sơn	xa-hoa-son	17.7026305	105.8525154	Xã	452	\N	\N
18940	Xã Quy Hóa	xa-quy-hoa	17.7870492	105.9788011	Xã	452	\N	\N
18943	Xã Trung Hóa	xa-trung-hoa	17.7645805	106.0757749	Xã	452	\N	\N
18946	Xã Thượng Hóa	xa-thuong-hoa	17.6450118	105.993491	Xã	452	\N	\N
18949	Thị trấn Đồng Lê	thi-tran-dong-le	17.8667376	106.022874	Thị trấn	453	\N	\N
18952	Xã Hương Hóa	xa-huong-hoa	18.0544606	105.9112424	Xã	453	\N	\N
18955	Xã Kim Hóa	xa-kim-hoa	17.9709288	105.9464874	Xã	453	\N	\N
18958	Xã Thanh Hóa	xa-thanh-hoa	17.9898437	105.8356258	Xã	453	\N	\N
18961	Xã Thanh Thạch	xa-thanh-thach	17.9830726	105.8701316	Xã	453	\N	\N
18964	Xã Thuận Hóa	xa-thuan-hoa	17.9295023	106.0287512	Xã	453	\N	\N
18967	Xã Lâm Hóa	xa-lam-hoa	17.9405307	105.7585908	Xã	453	\N	\N
18970	Xã Lê Hóa	xa-le-hoa	17.9041992	105.9876149	Xã	453	\N	\N
18973	Xã Sơn Hóa	xa-son-hoa	17.8532657	106.0463837	Xã	453	\N	\N
18976	Xã Đồng Hóa	xa-dong-hoa	17.8962944	106.0816536	Xã	453	\N	\N
18979	Xã Ngư Hóa	xa-ngu-hoa	17.8885881	106.2404468	Xã	453	\N	\N
18982	Xã Nam Hóa	xa-nam-hoa	17.8263207	106.0934117	Xã	453	\N	\N
18985	Xã Thạch Hóa	xa-thach-hoa	17.8755753	106.1228099	Xã	453	\N	\N
18988	Xã Đức Hóa	xa-duc-hoa	17.8233512	106.1286901	Xã	453	\N	\N
18991	Xã Phong Hóa	xa-phong-hoa	17.8538582	106.1757379	Xã	453	\N	\N
18994	Xã Mai Hóa	xa-mai-hoa	17.8393763	106.2110311	Xã	453	\N	\N
18997	Xã Tiến Hóa	xa-tien-hoa	17.8176474	106.2639825	Xã	453	\N	\N
19000	Xã Châu Hóa	xa-chau-hoa	17.7924207	106.2227968	Xã	453	\N	\N
19003	Xã Cao Quảng	xa-cao-quang	17.7733468	106.1871063	Xã	453	\N	\N
19006	Xã Văn Hóa	xa-van-hoa	17.7654589	106.2698669	Xã	453	\N	\N
19009	Phường Ba Đồn	phuong-ba-don	17.7530355	106.4235285	Phường	458	\N	\N
19012	Xã Quảng Hợp	xa-quang-hop	17.9265008	106.3346061	Xã	454	\N	\N
19015	Xã Quảng Kim	xa-quang-kim	17.941363	106.4288088	Xã	454	\N	\N
19018	Xã Quảng Đông	xa-quang-dong	17.9372856	106.4759262	Xã	454	\N	\N
19021	Xã Quảng Phú	xa-quang-phu	17.8996412	106.4464766	Xã	454	\N	\N
19024	Xã Quảng Châu	xa-quang-chau	17.8785296	106.3581527	Xã	454	\N	\N
19027	Xã Quảng Thạch	xa-quang-thach	17.8366125	106.3110622	Xã	454	\N	\N
19030	Xã Quảng Lưu	xa-quang-luu	17.8513273	106.3404925	Xã	454	\N	\N
19033	Xã Quảng Tùng	xa-quang-tung	17.8672228	106.4229199	Xã	454	\N	\N
19036	Xã Cảnh Dương	xa-canh-duong	17.8693726	106.447949	Xã	454	\N	\N
19039	Xã Quảng Tiến	xa-quang-tien	17.8436637	106.3964218	Xã	454	\N	\N
19042	Xã Quảng Hưng	xa-quang-hung	17.8317641	106.4346979	Xã	454	\N	\N
19045	Xã Quảng Xuân	xa-quang-xuan	17.8015457	106.4523662	Xã	454	\N	\N
19048	Xã Cảnh Hóa	xa-canh-hoa	17.7962951	106.2786937	Xã	454	\N	\N
19051	Xã Quảng Liên	xa-quang-lien	17.7959116	106.3169479	Xã	454	\N	\N
19054	Xã Quảng Trường	xa-quang-truong	17.7730567	106.3493224	Xã	454	\N	\N
19057	Xã Quảng Phương	xa-quang-phuong	17.7898808	106.3875898	Xã	454	\N	\N
19060	Phường Quảng Long	phuong-quang-long	17.7530355	106.4235285	Phường	458	\N	\N
19063	Xã Phù Hóa	xa-phu-hoa	17.7713242	106.3022339	Xã	454	\N	\N
19066	Phường Quảng Thọ	phuong-quang-tho	17.7530355	106.4235285	Phường	458	\N	\N
19069	Xã Quảng Tiên	xa-quang-tien	17.7530355	106.4235285	Xã	458	\N	\N
19072	Xã Quảng Thanh	xa-quang-thanh	17.7648041	106.3787583	Xã	454	\N	\N
19075	Xã Quảng Trung	xa-quang-trung	17.7530355	106.4235285	Xã	458	\N	\N
19078	Phường Quảng Phong	phuong-quang-phong	17.7530355	106.4235285	Phường	458	\N	\N
19081	Phường Quảng Thuận	phuong-quang-thuan	17.7530355	106.4235285	Phường	458	\N	\N
19084	Xã Quảng Tân	xa-quang-tan	17.7530355	106.4235285	Xã	458	\N	\N
19087	Xã Quảng Hải	xa-quang-hai	17.7530355	106.4235285	Xã	458	\N	\N
19090	Xã Quảng Sơn	xa-quang-son	17.7530355	106.4235285	Xã	458	\N	\N
19093	Xã Quảng Lộc	xa-quang-loc	17.7530355	106.4235285	Xã	458	\N	\N
19096	Xã Quảng Thủy	xa-quang-thuy	17.7530355	106.4235285	Xã	458	\N	\N
19099	Xã Quảng Văn	xa-quang-van	17.7530355	106.4235285	Xã	458	\N	\N
19102	Phường Quảng Phúc	phuong-quang-phuc	17.7530355	106.4235285	Phường	458	\N	\N
19105	Xã Quảng Hòa	xa-quang-hoa	17.7530355	106.4235285	Xã	458	\N	\N
19108	Xã Quảng Minh	xa-quang-minh	17.7530355	106.4235285	Xã	458	\N	\N
19111	Thị trấn Hoàn Lão	thi-tran-hoan-lao	17.5858659	106.5260001	Thị trấn	455	\N	\N
19114	Thị trấn NT Việt Trung	thi-tran-nt-viet-trung	17.5755073	106.5490043	Thị trấn	455	\N	\N
19117	Xã Xuân Trạch	xa-xuan-trach	17.6752814	106.1816196	Xã	455	\N	\N
19120	Xã Mỹ Trạch	xa-my-trach	17.7048995	106.4081983	Xã	455	\N	\N
19123	Xã Hạ Trạch	xa-ha-trach	17.6950364	106.4229199	Xã	455	\N	\N
19126	Xã Bắc Trạch	xa-bac-trach	17.6930244	106.4464766	Xã	455	\N	\N
19129	Xã Lâm Trạch	xa-lam-trach	17.6820895	106.3051766	Xã	455	\N	\N
19132	Xã Thanh Trạch	xa-thanh-trach	17.6775195	106.493598	Xã	455	\N	\N
19135	Xã Liên Trạch	xa-lien-trach	17.6646209	106.3758145	Xã	455	\N	\N
19138	Xã Phúc Trạch	xa-phuc-trach	17.6528937	106.3110622	Xã	455	\N	\N
19141	Xã Cự Nẫm	xa-cu-nam	17.6219595	106.4052541	Xã	455	\N	\N
19144	Xã Hải Trạch	xa-hai-trach	17.6426961	106.5318919	Xã	455	\N	\N
19147	Xã Thượng Trạch	xa-thuong-trach	17.4495859	106.1345705	Xã	455	\N	\N
19150	Xã Sơn Lộc	xa-son-loc	17.646127	106.458256	Xã	455	\N	\N
19153	Xã Phú Trạch	xa-phu-trach	17.6306308	106.50538	Xã	455	\N	\N
19156	Xã Hưng Trạch	xa-hung-trach	17.5800591	106.3581527	Xã	455	\N	\N
19159	Xã Đồng Trạch	xa-dong-trach	17.6202654	106.5260001	Xã	455	\N	\N
19162	Xã Đức Trạch	xa-duc-trach	17.6249898	106.5377839	Xã	455	\N	\N
19165	Xã Sơn Trạch	xa-son-trach	17.5630642	106.287521	Xã	455	\N	\N
19168	Xã Vạn Trạch	xa-van-trach	17.6117149	106.458256	Xã	455	\N	\N
19171	Xã Hoàn Trạch	xa-hoan-trach	17.6076945	106.50538	Xã	455	\N	\N
19174	Xã Phú Định	xa-phu-dinh	17.4823359	106.4288088	Xã	455	\N	\N
19177	Xã Trung Trạch	xa-trung-trach	17.5921967	106.5525145	Xã	455	\N	\N
19180	Xã Tây Trạch	xa-tay-trach	17.5648377	106.470036	Xã	455	\N	\N
19183	Xã Hòa Trạch	xa-hoa-trach	17.545132	106.4994889	Xã	455	\N	\N
19186	Xã Đại Trạch	xa-dai-trach	17.5588116	106.5407299	Xã	455	\N	\N
19189	Xã Nhân Trạch	xa-nhan-trach	17.5475873	106.5834227	Xã	455	\N	\N
19192	Xã Tân Trạch	xa-tan-trach	17.4378519	106.2757514	Xã	455	\N	\N
19195	Xã Nam Trạch	xa-nam-trach	17.5139646	106.528946	Xã	455	\N	\N
19198	Xã Lý Trạch	xa-ly-trach	17.5224112	106.5642998	Xã	455	\N	\N
19201	Thị trấn Quán Hàu	thi-tran-quan-hau	17.4044214	106.6379724	Thị trấn	456	\N	\N
19204	Xã Trường Sơn	xa-truong-son	17.2217245	106.3934777	Xã	456	\N	\N
19207	Xã Lương Ninh	xa-luong-ninh	17.4221034	106.6320777	Xã	456	\N	\N
19210	Xã Vĩnh Ninh	xa-vinh-ninh	17.3943705	106.5878723	Xã	456	\N	\N
19213	Xã Võ Ninh	xa-vo-ninh	17.393569	106.6645007	Xã	456	\N	\N
19216	Xã Hải Ninh	xa-hai-ninh	17.3583935	106.7411559	Xã	456	\N	\N
19219	Xã Hàm Ninh	xa-ham-ninh	17.3580098	106.6114474	Xã	456	\N	\N
19222	Xã Duy Ninh	xa-duy-ninh	17.3571115	106.6556575	Xã	456	\N	\N
19225	Xã Gia Ninh	xa-gia-ninh	17.3385281	106.7057733	Xã	456	\N	\N
19228	Xã Trường Xuân	xa-truong-xuan	17.2726407	106.6055534	Xã	456	\N	\N
19231	Xã Hiền Ninh	xa-hien-ninh	17.3331067	106.635025	Xã	456	\N	\N
19234	Xã Tân Ninh	xa-tan-ninh	17.3415454	106.6703963	Xã	456	\N	\N
19237	Xã Xuân Ninh	xa-xuan-ninh	17.3180451	106.6438673	Xã	456	\N	\N
19240	Xã An Ninh	xa-an-ninh	17.3072049	106.6703963	Xã	456	\N	\N
19243	Xã Vạn Ninh	xa-van-ninh	17.2728695	106.6703963	Xã	456	\N	\N
19246	Thị trấn NT Lệ Ninh	thi-tran-nt-le-ninh	17.2069811	106.6904426	Thị trấn	457	\N	\N
19249	Thị trấn Kiến Giang	thi-tran-kien-giang	17.2240932	106.7898163	Thị trấn	457	\N	\N
19252	Xã Hồng Thủy	xa-hong-thuy	17.2959564	106.7352584	Xã	457	\N	\N
19255	Xã Ngư Thủy Bắc	xa-ngu-thuy-bac	17.2702162	106.8355372	Xã	457	\N	\N
19258	Xã Hoa Thủy	xa-hoa-thuy	17.2698627	106.7057733	Xã	457	\N	\N
19261	Xã Thanh Thủy	xa-thanh-thuy	17.2628205	106.7883416	Xã	457	\N	\N
19264	Xã An Thủy	xa-an-thuy	17.2325293	106.7411559	Xã	457	\N	\N
19267	Xã Phong Thủy	xa-phong-thuy	17.2435596	106.7794935	Xã	457	\N	\N
19270	Xã Cam Thủy	xa-cam-thuy	17.2483547	106.8237374	Xã	457	\N	\N
19273	Xã Ngân Thủy	xa-ngan-thuy	17.1457656	106.6173415	Xã	457	\N	\N
19276	Xã Sơn Thủy	xa-son-thuy	17.2355377	106.7057733	Xã	457	\N	\N
19279	Xã Lộc Thủy	xa-loc-thuy	17.2517947	106.7500025	Xã	457	\N	\N
19282	Xã Ngư Thủy Trung	xa-ngu-thuy-trung	17.2184011	106.9063491	Xã	457	\N	\N
19285	Xã Liên Thủy	xa-lien-thuy	17.2238856	106.8089885	Xã	457	\N	\N
19288	Xã Hưng Thủy	xa-hung-thuy	17.2100087	106.8709404	Xã	457	\N	\N
19291	Xã Dương Thủy	xa-duong-thuy	17.1787411	106.8355372	Xã	457	\N	\N
19294	Xã Tân Thủy	xa-tan-thuy	17.1881557	106.8591387	Xã	457	\N	\N
19297	Xã Phú Thủy	xa-phu-thuy	17.1982147	106.7411559	Xã	457	\N	\N
19300	Xã Xuân Thủy	xa-xuan-thuy	17.2077397	106.79719	Xã	457	\N	\N
19303	Xã Mỹ Thủy	xa-my-thuy	17.1807548	106.8119382	Xã	457	\N	\N
19306	Xã Ngư Thủy Nam	xa-ngu-thuy-nam	17.1790386	106.9653756	Xã	457	\N	\N
19309	Xã Mai Thủy	xa-mai-thuy	17.1775503	106.7824429	Xã	457	\N	\N
19312	Xã Sen Thủy	xa-sen-thuy	17.142596	106.9240554	Xã	457	\N	\N
19315	Xã Thái Thủy	xa-thai-thuy	17.1257944	106.8532381	Xã	457	\N	\N
19318	Xã Kim Thủy	xa-kim-thuy	17.096545	106.750843	Xã	457	\N	\N
19321	Xã Trường Thủy	xa-truong-thuy	17.1380341	106.7765443	Xã	457	\N	\N
19324	Xã Văn Thủy	xa-van-thuy	17.1350264	106.8119382	Xã	457	\N	\N
19327	Xã Lâm Thủy	xa-lam-thuy	17.0516693	106.5112712	Xã	457	\N	\N
19330	Phường Đông Giang	phuong-dong-giang	16.8427468	107.1080626	Phường	461	\N	\N
19333	Phường 1	phuong-1	16.81948	107.1028487	Phường	461	\N	\N
19336	Phường Đông Lễ	phuong-dong-le	16.8144674	107.114135	Phường	461	\N	\N
19339	Phường Đông Thanh	phuong-dong-thanh	16.8304002	107.0831498	Phường	461	\N	\N
19342	Phường 2	phuong-2	16.8265671	107.1065941	Phường	461	\N	\N
19345	Phường 4	phuong-4	16.8031029	107.0568962	Phường	461	\N	\N
19348	Phường 5	phuong-5	16.800091	107.0923331	Phường	461	\N	\N
19351	Phường Đông Lương	phuong-dong-luong	16.799147	107.1260588	Phường	461	\N	\N
19354	Phường 3	phuong-3	16.7725001	107.0480378	Phường	461	\N	\N
19357	Phường 1	phuong-1	16.735057	107.1868568	Phường	462	\N	\N
19358	Phường An Đôn	phuong-an-don	16.7371109	107.1794708	Phường	462	\N	\N
19360	Phường 2	phuong-2	16.7560404	107.1912885	Phường	462	\N	\N
19361	Phường 3	phuong-3	16.7474955	107.1912885	Phường	462	\N	\N
19363	Thị trấn Hồ Xá	thi-tran-ho-xa	17.0633593	107.0155599	Thị trấn	464	\N	\N
19366	Thị trấn Bến Quan	thi-tran-ben-quan	17.0220584	106.8974964	Thị trấn	464	\N	\N
19369	Xã Vĩnh Thái	xa-vinh-thai	17.1324417	107.0421324	Xã	464	\N	\N
19372	Xã Vĩnh Tú	xa-vinh-tu	17.1074502	107.0007987	Xã	464	\N	\N
19375	Xã Vĩnh Chấp	xa-vinh-chap	17.0948757	106.947666	Xã	464	\N	\N
19378	Xã Vĩnh Trung	xa-vinh-trung	17.0919657	107.0480378	Xã	464	\N	\N
19381	Xã Vĩnh Kim	xa-vinh-kim	17.0878899	107.0952864	Xã	464	\N	\N
19384	Xã Vĩnh Thạch	xa-vinh-thach	17.0578237	107.113007	Xã	464	\N	\N
19387	Xã Vĩnh Long	xa-vinh-long	17.0637952	106.9771827	Xã	464	\N	\N
19390	Xã Vĩnh Nam	xa-vinh-nam	17.0732552	107.0332746	Xã	464	\N	\N
19393	Xã Vĩnh Khê	xa-vinh-khe	17.055227	106.8768415	Xã	464	\N	\N
19396	Xã Vĩnh Hòa	xa-vinh-hoa	17.0577146	107.0480378	Xã	464	\N	\N
19399	Xã Vĩnh Hiền	xa-vinh-hien	17.0582812	107.074614	Xã	464	\N	\N
19402	Xã Vĩnh Thủy	xa-vinh-thuy	17.0243343	106.9712791	Xã	464	\N	\N
19405	Xã Vĩnh Lâm	xa-vinh-lam	17.0265071	107.0126076	Xã	464	\N	\N
19408	Xã Vĩnh Thành	xa-vinh-thanh	17.0250544	107.062802	Xã	464	\N	\N
19411	Xã Vĩnh Tân	xa-vinh-tan	17.0225147	107.0923331	Xã	464	\N	\N
19414	Thị trấn Cửa Tùng	thi-tran-cua-tung	17.0177016	107.1029931	Thị trấn	464	\N	\N
19417	Xã Vĩnh Hà	xa-vinh-ha	16.9742744	106.888644	Xã	464	\N	\N
19420	Xã Vĩnh Sơn	xa-vinh-son	16.9828644	106.9889904	Xã	464	\N	\N
19423	Xã Vĩnh Giang	xa-vinh-giang	17.0079958	107.0952864	Xã	464	\N	\N
19426	Xã Vĩnh Ô	xa-vinh-o	16.9241517	106.8060388	Xã	464	\N	\N
19429	Thị trấn Khe Sanh	thi-tran-khe-sanh	16.6192703	106.7323097	Thị trấn	465	\N	\N
21316	Xã Sơn Cao	xa-son-cao	14.9657022	108.5581899	Xã	529	\N	\N
19432	Thị trấn Lao Bảo	thi-tran-lao-bao	16.6273035	106.5996595	Thị trấn	465	\N	\N
19435	Xã Hướng Lập	xa-huong-lap	16.9066287	106.6055534	Xã	465	\N	\N
19438	Xã Hướng Việt	xa-huong-viet	16.8504696	106.5937658	Xã	465	\N	\N
19441	Xã Hướng Phùng	xa-huong-phung	16.7362424	106.5937658	Xã	465	\N	\N
19444	Xã Hướng Sơn	xa-huong-son	16.8074106	106.6998767	Xã	465	\N	\N
19447	Xã Hướng Linh	xa-huong-linh	16.7121766	106.7470536	Xã	465	\N	\N
19450	Xã Tân Hợp	xa-tan-hop	16.654153	106.7588494	Xã	465	\N	\N
19453	Xã Hướng Tân	xa-huong-tan	16.6652118	106.6939803	Xã	465	\N	\N
19456	Xã Tân Thành	xa-tan-thanh	16.66387	106.6409198	Xã	465	\N	\N
19459	Xã Tân Long	xa-tan-long	16.6110672	106.6586052	Xã	465	\N	\N
19462	Xã Tân Lập	xa-tan-lap	16.6091327	106.682188	Xã	465	\N	\N
19465	Xã Tân Liên	xa-tan-lien	16.6300112	106.7057733	Xã	465	\N	\N
19468	Xã Húc	xa-huc	16.5837744	106.7824429	Xã	465	\N	\N
19471	Xã Thuận	xa-thuan	16.5416577	106.6703963	Xã	465	\N	\N
19474	Xã Hướng Lộc	xa-huong-loc	16.5439819	106.71167	Xã	465	\N	\N
19477	Xã Ba Tầng	xa-ba-tang	16.5257996	106.7942405	Xã	465	\N	\N
19480	Xã Thanh	xa-thanh	16.4846402	106.6703963	Xã	465	\N	\N
19483	Xã  A Dơi	xa-a-doi	16.4892953	106.7529514	Xã	465	\N	\N
19486	Xã A Xing	xa-a-xing	16.4931551	106.7057733	Xã	465	\N	\N
19489	Xã A Túc	xa-a-tuc	16.4720011	106.7205154	Xã	465	\N	\N
19492	Xã Xy	xa-xy	16.4446708	106.7411559	Xã	465	\N	\N
19495	Thị trấn Gio Linh	thi-tran-gio-linh	16.9291427	107.0834734	Thị trấn	466	\N	\N
19496	Thị trấn Cửa Việt	thi-tran-cua-viet	16.909626	107.1779936	Thị trấn	466	\N	\N
19498	Xã Trung Giang	xa-trung-giang	16.9873211	107.1366365	Xã	466	\N	\N
19501	Xã Trung Hải	xa-trung-hai	16.9872028	107.0716609	Xã	466	\N	\N
19504	Xã Trung Sơn	xa-trung-son	16.9580211	107.0126076	Xã	466	\N	\N
19507	Xã Gio Phong	xa-gio-phong	16.9529715	107.0716609	Xã	466	\N	\N
19510	Xã Gio Mỹ	xa-gio-my	16.9437221	107.113007	Xã	466	\N	\N
19513	Xã Vĩnh Trường	xa-vinh-truong	16.9485323	106.9565206	Xã	466	\N	\N
19516	Xã Gio Bình	xa-gio-binh	16.9367907	107.0273695	Xã	466	\N	\N
19519	Xã Gio Hải	xa-gio-hai	16.93966	107.1602683	Xã	466	\N	\N
19522	Xã Gio An	xa-gio-an	16.9257972	106.9889904	Xã	466	\N	\N
19525	Xã Gio Châu	xa-gio-chau	16.9073382	107.0716609	Xã	466	\N	\N
19528	Xã Gio Thành	xa-gio-thanh	16.9136865	107.1307289	Xã	466	\N	\N
19531	Xã Gio Việt	xa-gio-viet	16.8971502	107.1573142	Xã	466	\N	\N
19534	Xã Linh Thượng	xa-linh-thuong	16.8745096	106.8532381	Xã	466	\N	\N
19537	Xã Gio Sơn	xa-gio-son	16.9019707	107.0007987	Xã	466	\N	\N
19540	Xã Gio Hòa	xa-gio-hoa	16.907259	107.0391798	Xã	466	\N	\N
19543	Xã Gio Mai	xa-gio-mai	16.8779233	107.1322058	Xã	466	\N	\N
19546	Xã Hải Thái	xa-hai-thai	16.8873625	106.9712791	Xã	466	\N	\N
19549	Xã Linh Hải	xa-linh-hai	16.8885519	107.0244171	Xã	466	\N	\N
19552	Xã Gio Quang	xa-gio-quang	16.8813148	107.0810685	Xã	466	\N	\N
19555	Thị trấn Krông Klang	thi-tran-krong-klang	16.7065887	106.8827427	Thị trấn	467	\N	\N
19558	Xã Mò Ó	xa-mo-o	16.6838702	106.901233	Xã	467	\N	\N
19561	Xã Hướng Hiệp	xa-huong-hiep	16.7643294	106.8060388	Xã	467	\N	\N
19564	Xã Đa Krông	xa-da-krong	16.6587115	106.8414374	Xã	467	\N	\N
19567	Xã Triệu Nguyên	xa-trieu-nguyen	16.644647	106.9417632	Xã	467	\N	\N
19570	Xã Ba Lòng	xa-ba-long	16.6553095	107.0185123	Xã	467	\N	\N
19573	Xã Hải Phúc	xa-hai-phuc	16.5829853	107.0657549	Xã	467	\N	\N
19576	Xã Ba Nang	xa-ba-nang	16.5759653	106.8768415	Xã	467	\N	\N
19579	Xã Tà Long	xa-ta-long	16.547291	106.947666	Xã	467	\N	\N
19582	Xã Húc Nghì	xa-huc-nghi	16.4938635	107.0421324	Xã	467	\N	\N
19585	Xã A Vao	xa-a-vao	16.4229851	106.9358604	Xã	467	\N	\N
19588	Xã Tà Rụt	xa-ta-rut	16.4294852	106.9948945	Xã	467	\N	\N
19591	Xã A Bung	xa-a-bung	16.342663	107.0126076	Xã	467	\N	\N
19594	Xã A Ngo	xa-a-ngo	16.3569667	106.9771827	Xã	467	\N	\N
19597	Thị trấn Cam Lộ	thi-tran-cam-lo	16.796204	107.0037509	Thị trấn	468	\N	\N
19600	Xã Cam Tuyền	xa-cam-tuyen	16.8228958	106.9240554	Xã	468	\N	\N
19603	Xã Cam An	xa-cam-an	16.864314	107.074614	Xã	468	\N	\N
19606	Xã Cam Thủy	xa-cam-thuy	16.8419205	107.0362272	Xã	468	\N	\N
19609	Xã Cam Thanh	xa-cam-thanh	16.8387349	107.0690497	Xã	468	\N	\N
19612	Xã Cam Thành	xa-cam-thanh	16.8387349	107.0690497	Xã	468	\N	\N
19615	Xã Cam Hiếu	xa-cam-hieu	16.7963047	107.0362272	Xã	468	\N	\N
19618	Xã Cam Chính	xa-cam-chinh	16.727674	106.9712791	Xã	468	\N	\N
19621	Xã Cam Nghĩa	xa-cam-nghia	16.754451	106.9240554	Xã	468	\N	\N
19624	Thị Trấn Ái Tử	thi-tran-ai-tu	16.771255	107.1632224	Thị trấn	469	\N	\N
19627	Xã Triệu An	xa-trieu-an	16.8961905	107.2016295	Xã	469	\N	\N
19630	Xã Triệu Vân	xa-trieu-van	16.8631119	107.2548183	Xã	469	\N	\N
19633	Xã Triệu Phước	xa-trieu-phuoc	16.8764363	107.1661766	Xã	469	\N	\N
19636	Xã Triệu Độ	xa-trieu-do	16.8556596	107.1425442	Xã	469	\N	\N
19639	Xã Triệu Trạch	xa-trieu-trach	16.8371654	107.2252675	Xã	469	\N	\N
19642	Xã Triệu Thuận	xa-trieu-thuan	16.8204493	107.1543601	Xã	469	\N	\N
19645	Xã Triệu Đại	xa-trieu-dai	16.8272285	107.1750393	Xã	469	\N	\N
19648	Xã Triệu Hòa	xa-trieu-hoa	16.8081084	107.1986748	Xã	469	\N	\N
19651	Xã Triệu Lăng	xa-trieu-lang	16.8206837	107.2843726	Xã	469	\N	\N
21535	Xã Ba Nam	xa-ba-nam	14.6696703	108.6449616	Xã	535	\N	\N
19654	Xã Triệu Sơn	xa-trieu-son	16.7947457	107.2548183	Xã	469	\N	\N
19657	Xã Triệu Long	xa-trieu-long	16.7930373	107.1750393	Xã	469	\N	\N
19660	Xã Triệu Tài	xa-trieu-tai	16.7832938	107.2223127	Xã	469	\N	\N
19663	Xã Triệu Đông	xa-trieu-dong	16.7848122	107.2045841	Xã	469	\N	\N
19666	Xã Triệu Trung	xa-trieu-trung	16.7703815	107.2400425	Xã	469	\N	\N
19669	Xã Triệu Ái	xa-trieu-ai	16.7404983	107.0893798	Xã	469	\N	\N
19672	Xã Triệu Thượng	xa-trieu-thuong	16.7095044	107.1189141	Xã	469	\N	\N
19675	Xã Triệu Giang	xa-trieu-giang	16.7950563	107.1514061	Xã	469	\N	\N
19678	Xã Triệu Thành	xa-trieu-thanh	16.7630351	107.1927658	Xã	469	\N	\N
19681	Thị trấn Hải Lăng	thi-tran-hai-lang	16.6896446	107.2518631	Thị trấn	470	\N	\N
19684	Xã Hải An	xa-hai-an	16.7886387	107.3257545	Xã	470	\N	\N
19687	Xã Hải Ba	xa-hai-ba	16.7627126	107.2961953	Xã	470	\N	\N
19690	Xã Hải Xuân	xa-hai-xuan	16.7553825	107.2489079	Xã	470	\N	\N
19693	Xã Hải Quy	xa-hai-quy	16.7548123	107.2223127	Xã	470	\N	\N
19696	Xã Hải Quế	xa-hai-que	16.7492905	107.3198424	Xã	470	\N	\N
19699	Xã Hải Vĩnh	xa-hai-vinh	16.7455733	107.2636842	Xã	470	\N	\N
19702	Xã Hải Phú	xa-hai-phu	16.702472	107.2016295	Xã	470	\N	\N
19705	Xã Hải Lệ	xa-hai-le	16.6958409	107.1480069	Xã	462	\N	\N
19708	Xã Hải Thượng	xa-hai-thuong	16.7232348	107.2252675	Xã	470	\N	\N
19711	Xã Hải Dương	xa-hai-duong	16.7244838	107.3434916	Xã	470	\N	\N
19714	Xã Hải Thiện	xa-hai-thien	16.7191895	107.2725505	Xã	470	\N	\N
19717	Xã Hải Lâm	xa-hai-lam	16.6205708	107.1602683	Xã	470	\N	\N
19720	Xã Hải Thành	xa-hai-thanh	16.7078624	107.3050627	Xã	470	\N	\N
19723	Xã Hải Hòa	xa-hai-hoa	16.6923637	107.3198424	Xã	470	\N	\N
19726	Xã Hải Tân	xa-hai-tan	16.6706103	107.3080186	Xã	470	\N	\N
19729	Xã Hải Trường	xa-hai-truong	16.6609235	107.2819374	Xã	470	\N	\N
19732	Xã Hải Thọ	xa-hai-tho	16.6964158	107.2725505	Xã	470	\N	\N
19735	Xã Hải Sơn	xa-hai-son	16.6083634	107.2370874	Xã	470	\N	\N
19738	Xã Hải Chánh	xa-hai-chanh	16.6085175	107.3021069	Xã	470	\N	\N
19741	Xã Hải Khê	xa-hai-khe	16.7565993	107.3671431	Xã	470	\N	\N
19744	Phường Phú Thuận	phuong-phu-thuan	16.4704555	107.5630585	Phường	474	\N	\N
19747	Phường Phú Bình	phuong-phu-binh	16.4889298	107.5778841	Phường	474	\N	\N
19750	Phường Tây Lộc	phuong-tay-loc	16.4766867	107.5655228	Phường	474	\N	\N
19753	Phường Thuận Lộc	phuong-thuan-loc	16.4835656	107.5740145	Phường	474	\N	\N
19756	Phường Phú Hiệp	phuong-phu-hiep	16.4862258	107.5845418	Phường	474	\N	\N
19759	Phường Phú Hậu	phuong-phu-hau	16.4919628	107.5869252	Phường	474	\N	\N
19762	Phường Thuận Hòa	phuong-thuan-hoa	16.4680421	107.5722108	Phường	474	\N	\N
19765	Phường Thuận Thành	phuong-thuan-thanh	16.4717352	107.5796877	Phường	474	\N	\N
19768	Phường Phú Hòa	phuong-phu-hoa	16.4709983	107.5882406	Phường	474	\N	\N
19771	Phường Phú Cát	phuong-phu-cat	16.4771961	107.5904599	Phường	474	\N	\N
19774	Phường Kim Long	phuong-kim-long	16.4651608	107.5605035	Phường	474	\N	\N
19777	Phường Vĩ Dạ	phuong-vi-da	16.4784301	107.5986752	Phường	474	\N	\N
19780	Phường Phường Đúc	phuong-phuong-duc	16.4564246	107.5745895	Phường	474	\N	\N
19783	Phường Vĩnh Ninh	phuong-vinh-ninh	16.459998	107.5855014	Phường	474	\N	\N
19786	Phường Phú Hội	phuong-phu-hoi	16.4672825	107.5992422	Phường	474	\N	\N
19789	Phường Phú Nhuận	phuong-phu-nhuan	16.459649	107.5963782	Phường	474	\N	\N
19792	Phường Xuân Phú	phuong-xuan-phu	16.4676168	107.6057621	Phường	474	\N	\N
19795	Phường Trường An	phuong-truong-an	16.4442134	107.5828018	Phường	474	\N	\N
19798	Phường Phước Vĩnh	phuong-phuoc-vinh	16.4512771	107.5898933	Phường	474	\N	\N
19801	Phường An Cựu	phuong-an-cuu	16.4474711	107.5961397	Phường	474	\N	\N
19803	Phường An Hòa	phuong-an-hoa	16.4879574	107.5506967	Phường	474	\N	\N
19804	Phường Hương Sơ	phuong-huong-so	16.4887712	107.5551545	Phường	474	\N	\N
19807	Phường Thuỷ Biều	phuong-thuy-bieu	16.444564	107.5511163	Phường	474	\N	\N
19810	Phường Hương Long	phuong-huong-long	16.4633848	107.5427	Phường	474	\N	\N
19813	Phường Thuỷ Xuân	phuong-thuy-xuan	16.4364925	107.5696541	Phường	474	\N	\N
19815	Phường An Đông	phuong-an-dong	16.4591117	107.607571	Phường	474	\N	\N
19816	Phường An Tây	phuong-an-tay	16.4348492	107.5995763	Phường	474	\N	\N
19819	Thị trấn Phong Điền	thi-tran-phong-dien	16.5745189	107.3671431	Thị trấn	476	\N	\N
19822	Xã Điền Hương	xa-dien-huong	16.7317891	107.3907968	Xã	476	\N	\N
19825	Xã Điền Môn	xa-dien-mon	16.7080047	107.4026244	Xã	476	\N	\N
19828	Xã Điền Lộc	xa-dien-loc	16.704939	107.4381106	Xã	476	\N	\N
19831	Xã Phong Bình	xa-phong-binh	16.689317	107.3553171	Xã	476	\N	\N
19834	Xã Điền Hòa	xa-dien-hoa	16.6811603	107.4499404	Xã	476	\N	\N
19837	Xã Phong Chương	xa-phong-chuong	16.6459289	107.3967105	Xã	476	\N	\N
19840	Xã Phong Hải	xa-phong-hai	16.6667147	107.485433	Xã	476	\N	\N
19843	Xã Điền Hải	xa-dien-hai	16.6449894	107.4736016	Xã	476	\N	\N
19846	Xã Phong Hòa	xa-phong-hoa	16.6272326	107.3494043	Xã	476	\N	\N
19849	Xã Phong Thu	xa-phong-thu	16.5775494	107.3316667	Xã	476	\N	\N
19852	Xã Phong Hiền	xa-phong-hien	16.5756471	107.4203669	Xã	476	\N	\N
19855	Xã Phong Mỹ	xa-phong-my	16.4903752	107.2193578	Xã	476	\N	\N
19858	Xã Phong An	xa-phong-an	16.5477246	107.4144526	Xã	476	\N	\N
19861	Xã Phong Xuân	xa-phong-xuan	16.4285201	107.2784615	Xã	476	\N	\N
19864	Xã Phong Sơn	xa-phong-son	16.4918673	107.4033243	Xã	476	\N	\N
19867	Thị trấn Sịa	thi-tran-sia	16.5850679	107.5090974	Thị trấn	477	\N	\N
19870	Xã Quảng Thái	xa-quang-thai	16.637696	107.4262813	Xã	477	\N	\N
19873	Xã Quảng Ngạn	xa-quang-ngan	16.6305481	107.5090974	Xã	477	\N	\N
19876	Xã Quảng Lợi	xa-quang-loi	16.617067	107.4676861	Xã	477	\N	\N
19879	Xã Quảng Công	xa-quang-cong	16.6037112	107.5564326	Xã	477	\N	\N
19882	Xã Quảng Phước	xa-quang-phuoc	16.5856103	107.5357224	Xã	477	\N	\N
19885	Xã Quảng Vinh	xa-quang-vinh	16.5643702	107.485433	Xã	477	\N	\N
19888	Xã Quảng An	xa-quang-an	16.5670258	107.5534739	Xã	477	\N	\N
19891	Xã Quảng Thành	xa-quang-thanh	16.5489556	107.5653089	Xã	477	\N	\N
19894	Xã Quảng Thọ	xa-quang-tho	16.5411655	107.5238888	Xã	477	\N	\N
19897	Xã Quảng Phú	xa-quang-phu	16.5406164	107.497265	Xã	477	\N	\N
19900	Thị trấn Thuận An	thi-tran-thuan-an	16.5458888	107.6359118	Thị trấn	478	\N	\N
19903	Xã Phú Thuận	xa-phu-thuan	16.53972	107.6718469	Xã	478	\N	\N
19906	Xã Phú Dương	xa-phu-duong	16.5169684	107.6067354	Xã	478	\N	\N
19909	Xã Phú Mậu	xa-phu-mau	16.5260024	107.5776275	Xã	478	\N	\N
19912	Xã Phú An	xa-phu-an	16.5169896	107.6392892	Xã	478	\N	\N
19915	Xã Phú Hải	xa-phu-hai	16.5263029	107.6955277	Xã	478	\N	\N
19918	Xã Phú Xuân	xa-phu-xuan	16.4891407	107.6984879	Xã	478	\N	\N
19921	Xã Phú Diên	xa-phu-dien	16.4984358	107.7221709	Xã	478	\N	\N
19924	Xã Phú Thanh	xa-phu-thanh	16.5427868	107.6037761	Xã	478	\N	\N
19927	Xã Phú Mỹ	xa-phu-my	16.4950515	107.6298437	Xã	478	\N	\N
19930	Xã Phú Thượng	xa-phu-thuong	16.4947606	107.6008169	Xã	478	\N	\N
19933	Xã Phú Hồ	xa-phu-ho	16.4695119	107.6629672	Xã	478	\N	\N
19936	Xã Vinh Xuân	xa-vinh-xuan	16.460258	107.7695429	Xã	478	\N	\N
19939	Xã Phú Lương	xa-phu-luong	16.4561073	107.6866471	Xã	478	\N	\N
19942	Thị trấn Phú Đa	thi-tran-phu-da	16.4356316	107.728328	Thị trấn	478	\N	\N
19945	Xã Vinh Thanh	xa-vinh-thanh	16.4354994	107.7932319	Xã	478	\N	\N
19948	Xã Vinh An	xa-vinh-an	16.4220898	107.8169229	Xã	478	\N	\N
19951	Xã Vinh Phú	xa-vinh-phu	16.410229	107.7902707	Xã	478	\N	\N
19954	Xã Vinh Thái	xa-vinh-thai	16.3932029	107.7576992	Xã	478	\N	\N
19957	Xã Vinh Hà	xa-vinh-ha	16.3664044	107.8050772	Xã	478	\N	\N
19960	Phường Phú Bài	phuong-phu-bai	16.4079485	107.6796969	Phường	479	\N	\N
19963	Xã Thủy Vân	xa-thuy-van	16.4198395	107.6464295	Xã	479	\N	\N
19966	Xã Thủy Thanh	xa-thuy-thanh	16.4198395	107.6464295	Xã	479	\N	\N
19969	Phường Thủy Dương	phuong-thuy-duong	16.4411867	107.620996	Phường	479	\N	\N
19972	Phường Thủy Phương	phuong-thuy-phuong	16.4314236	107.6384639	Phường	479	\N	\N
19975	Phường Thủy Châu	phuong-thuy-chau	16.4224399	107.6659778	Phường	479	\N	\N
19978	Phường Thủy Lương	phuong-thuy-luong	16.4211167	107.6657206	Phường	479	\N	\N
19981	Xã Thủy Bằng	xa-thuy-bang	16.395441	107.5824946	Xã	479	\N	\N
19984	Xã Thủy Tân	xa-thuy-tan	16.4050476	107.7192104	Xã	479	\N	\N
19987	Xã Thủy Phù	xa-thuy-phu	16.3694476	107.7044085	Xã	479	\N	\N
19990	Xã Phú Sơn	xa-phu-son	16.3281385	107.6570475	Xã	479	\N	\N
19993	Xã Dương Hòa	xa-duong-hoa	16.2764731	107.5978577	Xã	479	\N	\N
19996	Phường Tứ Hạ	phuong-tu-ha	16.5320109	107.45705	Phường	480	\N	\N
19999	Xã Hải Dương	xa-hai-duong	16.5799729	107.6008169	Xã	480	\N	\N
20002	Xã Hương Phong	xa-huong-phong	16.5665378	107.5919395	Xã	480	\N	\N
20005	Xã Hương Toàn	xa-huong-toan	16.5128363	107.5348121	Xã	480	\N	\N
20008	Phường Hương Vân	phuong-huong-van	16.3957812	107.3967105	Phường	480	\N	\N
20011	Phường Hương Văn	phuong-huong-van	16.5095602	107.4397177	Phường	480	\N	\N
20014	Xã Hương Vinh	xa-huong-vinh	16.5160653	107.571172	Xã	480	\N	\N
20017	Phường Hương Xuân	phuong-huong-xuan	16.4822178	107.4824751	Phường	480	\N	\N
20020	Phường Hương Chữ	phuong-huong-chu	16.4913866	107.5207859	Phường	480	\N	\N
20023	Phường Hương An	phuong-huong-an	16.4520873	107.531134	Phường	480	\N	\N
20026	Xã Hương Bình	xa-huong-binh	16.3897472	107.4676861	Xã	480	\N	\N
20029	Phường Hương Hồ	phuong-huong-ho	16.4520873	107.531134	Phường	480	\N	\N
20032	Xã Hương Thọ	xa-huong-tho	16.3816618	107.5623501	Xã	480	\N	\N
20035	Xã Bình Điền	xa-binh-dien	16.3008984	107.4440254	Xã	480	\N	\N
20038	Xã Hồng Tiến	xa-hong-tien	16.3602712	107.4469829	Xã	480	\N	\N
20041	Xã Bình Thành	xa-binh-thanh	16.3175813	107.5150139	Xã	480	\N	\N
20044	Thị trấn A Lưới	thi-tran-a-luoi	16.2899011	107.2370874	Thị trấn	481	\N	\N
20047	Xã Hồng Vân	xa-hong-van	16.3514041	107.113007	Xã	481	\N	\N
20050	Xã Hồng Hạ	xa-hong-ha	16.3005092	107.3139304	Xã	481	\N	\N
20053	Xã Hồng Kim	xa-hong-kim	16.3353635	107.2370874	Xã	481	\N	\N
20056	Xã Hồng Trung	xa-hong-trung	16.3247267	107.1602683	Xã	481	\N	\N
20059	Xã Hương Nguyên	xa-huong-nguyen	16.1977338	107.4558555	Xã	481	\N	\N
20062	Xã Bắc Sơn	xa-bac-son	16.305212	107.1898113	Xã	481	\N	\N
20065	Xã Hồng Bắc	xa-hong-bac	16.2772874	107.1839024	Xã	481	\N	\N
20068	Xã A Ngo	xa-a-ngo	16.2687814	107.2518631	Xã	481	\N	\N
20071	Xã Sơn Thủy	xa-son-thuy	16.2528517	107.2725505	Xã	481	\N	\N
20074	Xã Phú Vinh	xa-phu-vinh	16.2281581	107.2961953	Xã	481	\N	\N
20077	Xã Hồng Quảng	xa-hong-quang	16.2537099	107.2282225	Xã	481	\N	\N
20080	Xã Hương Phong	xa-huong-phong	16.1745905	107.3257545	Xã	481	\N	\N
20083	Xã Nhâm	xa-nham	16.2318292	107.1839024	Xã	481	\N	\N
20086	Xã Hồng Thượng	xa-hong-thuong	16.1856859	107.2607289	Xã	481	\N	\N
20089	Xã Hồng Thái	xa-hong-thai	16.1844238	107.2075388	Xã	481	\N	\N
20092	Xã Hương Lâm	xa-huong-lam	16.1541066	107.3671431	Xã	481	\N	\N
20095	Xã A Roằng	xa-a-roang	16.1005733	107.3967105	Xã	481	\N	\N
20098	Xã Đông Sơn	xa-dong-son	16.1126512	107.3198424	Xã	481	\N	\N
20101	Xã A Đớt	xa-a-dot	16.075659	107.3553171	Xã	481	\N	\N
20104	Xã Hồng Thủy	xa-hong-thuy	16.3553289	107.0657549	Xã	481	\N	\N
20107	Thị trấn Phú Lộc	thi-tran-phu-loc	16.281899	107.8643107	Thị trấn	482	\N	\N
20110	Thị trấn Lăng Cô	thi-tran-lang-co	16.2252184	108.059866	Thị trấn	482	\N	\N
20113	Xã Vinh Mỹ	xa-vinh-my	16.3963054	107.852463	Xã	482	\N	\N
20116	Xã Vinh Hưng	xa-vinh-hung	16.3746558	107.8406158	Xã	482	\N	\N
20119	Xã Vinh Hải	xa-vinh-hai	16.3741349	107.879121	Xã	482	\N	\N
20122	Xã Vinh Giang	xa-vinh-giang	16.3488826	107.8761588	Xã	482	\N	\N
20125	Xã Vinh Hiền	xa-vinh-hien	16.3354811	107.8998566	Xã	482	\N	\N
20128	Xã Lộc Bổn	xa-loc-bon	16.3478768	107.7246879	Xã	482	\N	\N
20131	Xã Lộc Sơn	xa-loc-son	16.3261637	107.7458559	Xã	482	\N	\N
20134	Xã Lộc Bình	xa-loc-binh	16.3220799	107.9235563	Xã	482	\N	\N
20137	Xã Lộc Vĩnh	xa-loc-vinh	16.3045352	107.9946667	Xã	482	\N	\N
20140	Xã Lộc An	xa-loc-an	16.3354587	107.7695429	Xã	482	\N	\N
20143	Xã Lộc Điền	xa-loc-dien	16.2458194	107.8228459	Xã	482	\N	\N
20146	Xã Lộc Thủy	xa-loc-thuy	16.2355544	107.9413323	Xã	482	\N	\N
20149	Xã Lộc Trì	xa-loc-tri	16.219061	107.8702347	Xã	482	\N	\N
20152	Xã Lộc Tiến	xa-loc-tien	16.2540793	107.9887402	Xã	482	\N	\N
20155	Xã Lộc Hòa	xa-loc-hoa	16.2725793	107.775465	Xã	482	\N	\N
20158	Xã Xuân Lộc	xa-xuan-loc	16.2560133	107.7044085	Xã	482	\N	\N
20161	Thị trấn Khe Tre	thi-tran-khe-tre	16.1725519	107.7192104	Thị trấn	483	\N	\N
20164	Xã Hương Phú	xa-huong-phu	16.2086308	107.728092	Xã	483	\N	\N
20167	Xã Hương Sơn	xa-huong-son	16.1713675	107.63337	Xã	483	\N	\N
20170	Xã Hương Lộc	xa-huong-loc	16.1572066	107.7991545	Xã	483	\N	\N
20173	Xã Thượng Quảng	xa-thuong-quang	16.0990148	107.5505152	Xã	483	\N	\N
20176	Xã Hương Hòa	xa-huong-hoa	16.1601535	107.6984879	Xã	483	\N	\N
20179	Xã Hương Giang	xa-huong-giang	16.150837	107.6748069	Xã	483	\N	\N
20182	Xã Hương Hữu	xa-huong-huu	16.129175	107.6629672	Xã	483	\N	\N
20185	Xã Thượng Lộ	xa-thuong-lo	16.1139211	107.775465	Xã	483	\N	\N
20188	Xã Thượng Long	xa-thuong-long	16.0755185	107.627451	Xã	483	\N	\N
20191	Xã Thượng Nhật	xa-thuong-nhat	16.0416828	107.6925674	Xã	483	\N	\N
20194	Phường Hòa Hiệp Bắc	phuong-hoa-hiep-bac	16.1531669	108.1072924	Phường	490	\N	\N
20195	Phường Hòa Hiệp Nam	phuong-hoa-hiep-nam	16.0996754	108.1369375	Phường	490	\N	\N
20197	Phường Hòa Khánh Bắc	phuong-hoa-khanh-bac	16.0770582	108.1369375	Phường	490	\N	\N
20198	Phường Hòa Khánh Nam	phuong-hoa-khanh-nam	16.0534112	108.1487964	Phường	490	\N	\N
20200	Phường Hòa Minh	phuong-hoa-minh	16.0657336	108.1695504	Phường	490	\N	\N
20203	Phường Tam Thuận	phuong-tam-thuan	16.073028	108.207356	Phường	491	\N	\N
20206	Phường Thanh Khê Tây	phuong-thanh-khe-tay	16.0753709	108.1757111	Phường	491	\N	\N
20207	Phường Thanh Khê Đông	phuong-thanh-khe-dong	16.068549	108.1858582	Phường	491	\N	\N
20209	Phường Xuân Hà	phuong-xuan-ha	16.0729052	108.2006841	Phường	491	\N	\N
20212	Phường Tân Chính	phuong-tan-chinh	16.0699425	108.2103213	Phường	491	\N	\N
20215	Phường Chính Gián	phuong-chinh-gian	16.0666114	108.1999428	Phường	491	\N	\N
20218	Phường Vĩnh Trung	phuong-vinh-trung	16.0613352	108.211804	Phường	491	\N	\N
20221	Phường Thạc Gián	phuong-thac-gian	16.0639085	108.2066146	Phường	491	\N	\N
20224	Phường An Khê	phuong-an-khe	16.0487665	108.1858582	Phường	491	\N	\N
20225	Phường Hòa Khê	phuong-hoa-khe	16.0626376	108.1888233	Phường	491	\N	\N
20227	Phường Thanh Bình	phuong-thanh-binh	16.0847145	108.2110626	Phường	492	\N	\N
20230	Phường Thuận Phước	phuong-thuan-phuoc	16.0867152	108.219116	Phường	492	\N	\N
20233	Phường Thạch Thang	phuong-thach-thang	16.0772091	108.2195612	Phường	492	\N	\N
20236	Phường Hải Châu  I	phuong-hai-chau-i	16.0704512	108.2230567	Phường	492	\N	\N
20239	Phường Hải Châu II	phuong-hai-chau-ii	16.0665976	108.216252	Phường	492	\N	\N
20242	Phường Phước Ninh	phuong-phuoc-ninh	16.0626112	108.2214415	Phường	492	\N	\N
20245	Phường Hòa Thuận Tây	phuong-hoa-thuan-tay	16.0466947	108.20958	Phường	492	\N	\N
20246	Phường Hòa Thuận Đông	phuong-hoa-thuan-dong	16.0513088	108.2214415	Phường	492	\N	\N
20248	Phường Nam Dương	phuong-nam-duong	16.0609461	108.216252	Phường	492	\N	\N
20251	Phường Bình Hiên	phuong-binh-hien	16.0576014	108.2221829	Phường	492	\N	\N
20254	Phường Bình Thuận	phuong-binh-thuan	16.055165	108.2177347	Phường	492	\N	\N
20257	Phường Hòa Cường Bắc	phuong-hoa-cuong-bac	16.0423876	108.22223	Phường	492	\N	\N
20258	Phường Hòa Cường Nam	phuong-hoa-cuong-nam	16.0331097	108.2242356	Phường	492	\N	\N
20260	Phường Khuê Trung	phuong-khue-trung	16.0238326	108.2125453	Phường	495	\N	\N
20263	Phường Thọ Quang	phuong-tho-quang	16.1069981	108.2521815	Phường	493	\N	\N
20266	Phường Nại Hiên Đông	phuong-nai-hien-dong	16.1001118	108.2288552	Phường	493	\N	\N
20269	Phường Mân Thái	phuong-man-thai	16.0872462	108.2466488	Phường	493	\N	\N
20272	Phường An Hải Bắc	phuong-an-hai-bac	16.0769838	108.2347863	Phường	493	\N	\N
20275	Phường Phước Mỹ	phuong-phuoc-my	16.0702924	108.2466488	Phường	493	\N	\N
20278	Phường An Hải Tây	phuong-an-hai-tay	16.0590068	108.230338	Phường	493	\N	\N
20281	Phường An Hải Đông	phuong-an-hai-dong	16.0641384	108.2362691	Phường	493	\N	\N
20284	Phường Mỹ An	phuong-my-an	16.0476897	108.2466488	Phường	494	\N	\N
20285	Phường Khuê Mỹ	phuong-khue-my	16.0302205	108.2525802	Phường	494	\N	\N
20287	Phường Hoà Quý	phuong-hoa-quy	15.982958	108.2334189	Phường	494	\N	\N
20290	Phường Hoà Hải	phuong-hoa-hai	15.986558	108.2674092	Phường	494	\N	\N
20293	Xã Hòa Bắc	xa-hoa-bac	16.1179841	107.9827977	Xã	497	\N	\N
20296	Xã Hòa Liên	xa-hoa-lien	16.087358	108.0835783	Xã	497	\N	\N
20299	Xã Hòa Ninh	xa-hoa-ninh	16.0482758	108.0124469	Xã	497	\N	\N
20302	Xã Hòa Sơn	xa-hoa-son	16.0451998	108.1132212	Xã	497	\N	\N
20305	Phường Hòa Phát	phuong-hoa-phat	16.0287361	108.1725154	Phường	495	\N	\N
20306	Phường Hòa An	phuong-hoa-an	16.0482589	108.1754804	Phường	495	\N	\N
20308	Xã Hòa Nhơn	xa-hoa-nhon	16.0102532	108.1250791	Xã	497	\N	\N
20311	Phường Hòa Thọ Tây	phuong-hoa-tho-tay	16.0086987	108.1754804	Phường	495	\N	\N
20312	Phường Hòa Thọ Đông	phuong-hoa-tho-dong	16.0122832	108.1992015	Phường	495	\N	\N
20314	Phường Hòa Xuân	phuong-hoa-xuan	16.0019983	108.2199588	Phường	495	\N	\N
20317	Xã Hòa Phú	xa-hoa-phu	15.9804156	108.0124469	Xã	497	\N	\N
20320	Xã Hòa Phong	xa-hoa-phong	15.9876461	108.1250791	Xã	497	\N	\N
20323	Xã Hòa Châu	xa-hoa-chau	15.9845497	108.193271	Xã	497	\N	\N
20326	Xã Hòa Tiến	xa-hoa-tien	15.9722296	108.1725154	Xã	497	\N	\N
20329	Xã Hòa Phước	xa-hoa-phuoc	15.9660545	108.2110626	Xã	497	\N	\N
20332	Xã Hòa Khương	xa-hoa-khuong	15.9557912	108.1013637	Xã	497	\N	\N
20335	Phường Tân Thạnh	phuong-tan-thanh	15.5820015	108.4780523	Phường	502	\N	\N
20338	Phường Phước Hòa	phuong-phuoc-hoa	15.5672859	108.4936332	Phường	502	\N	\N
20341	Phường An Mỹ	phuong-an-my	15.5666501	108.4765684	Phường	502	\N	\N
20344	Phường Hòa Hương	phuong-hoa-huong	15.5620354	108.5136667	Phường	502	\N	\N
20347	Phường An Xuân	phuong-an-xuan	15.5630666	108.4854717	Phường	502	\N	\N
20350	Phường An Sơn	phuong-an-son	15.5579478	108.495859	Phường	502	\N	\N
20353	Phường Trường Xuân	phuong-truong-xuan	15.5543701	108.4721169	Phường	502	\N	\N
20356	Phường An Phú	phuong-an-phu	15.5947905	108.4928912	Phường	502	\N	\N
20359	Xã Tam Thanh	xa-tam-thanh	15.6185686	108.5270231	Xã	502	\N	\N
20362	Xã Tam Thăng	xa-tam-thang	15.6183382	108.48102	Xã	502	\N	\N
20364	Thị trấn Phú Thịnh	thi-tran-phu-thinh	15.5477511	108.4083491	Thị trấn	518	\N	\N
20365	Xã Tam Thành	xa-tam-thanh	15.6142577	108.3979331	Xã	518	\N	\N
20368	Xã Tam An	xa-tam-an	15.6024817	108.4365067	Xã	518	\N	\N
20371	Xã Tam Phú	xa-tam-phu	15.5917032	108.5285072	Xã	502	\N	\N
20374	Xã Tam Đàn	xa-tam-dan	15.5774003	108.4335393	Xã	518	\N	\N
20375	Phường Hoà Thuận	phuong-hoa-thuan	15.5640936	108.4572788	Phường	502	\N	\N
20377	Xã Tam Lộc	xa-tam-loc	15.5681591	108.3445308	Xã	518	\N	\N
20380	Xã Tam Phước	xa-tam-phuoc	15.5804673	108.3979331	Xã	518	\N	\N
20383	Xã Tam Vinh	xa-tam-vinh	15.5466837	108.3979331	Xã	518	\N	\N
20386	Xã Tam Thái	xa-tam-thai	15.542601	108.4454089	Xã	518	\N	\N
20387	Xã Tam Đại	xa-tam-dai	15.5078121	108.4572788	Xã	518	\N	\N
20389	Xã Tam Ngọc	xa-tam-ngoc	15.5308346	108.4839878	Xã	502	\N	\N
20392	Xã Tam Dân	xa-tam-dan	15.5774003	108.4335393	Xã	518	\N	\N
20395	Xã Tam Lãnh	xa-tam-lanh	15.4719868	108.4157357	Xã	518	\N	\N
20398	Phường Minh An	phuong-minh-an	15.878223	108.3282151	Phường	503	\N	\N
20401	Phường Tân An	phuong-tan-an	15.8900264	108.3222823	Phường	503	\N	\N
20404	Phường Cẩm Phô	phuong-cam-pho	15.8811071	108.32372	Phường	503	\N	\N
20407	Phường Thanh Hà	phuong-thanh-ha	15.8906173	108.2985035	Phường	503	\N	\N
20410	Phường Sơn Phong	phuong-son-phong	15.8819322	108.3334147	Phường	503	\N	\N
20413	Phường Cẩm Châu	phuong-cam-chau	15.8837121	108.3474963	Phường	503	\N	\N
20416	Phường Cửa Đại	phuong-cua-dai	15.8867838	108.3808268	Phường	503	\N	\N
20419	Phường Cẩm An	phuong-cam-an	15.9125972	108.3375186	Phường	503	\N	\N
20422	Xã Cẩm Hà	xa-cam-ha	15.9018679	108.3138442	Xã	503	\N	\N
20425	Xã Cẩm Kim	xa-cam-kim	15.8623813	108.3234697	Xã	503	\N	\N
20428	Phường Cẩm Nam	phuong-cam-nam	15.8701483	108.3472998	Phường	503	\N	\N
20431	Xã Cẩm Thanh	xa-cam-thanh	15.8793723	108.3626363	Xã	503	\N	\N
20434	Xã Tân Hiệp	xa-tan-hiep	15.8800584	108.3380469	Xã	503	\N	\N
20437	Xã Ch'ơm	xa-chom	15.8174492	107.2548183	Xã	504	\N	\N
20440	Xã Ga Ri	xa-ga-ri	15.7513776	107.2311774	Xã	504	\N	\N
20443	Xã A Xan	xa-a-xan	15.8362559	107.3021069	Xã	504	\N	\N
20446	Xã Tr'Hy	xa-trhy	15.8097238	107.3494043	Xã	504	\N	\N
20449	Xã Lăng	xa-lang	15.8349523	107.4558555	Xã	504	\N	\N
20452	Xã A Nông	xa-a-nong	15.9507007	107.4668501	Xã	504	\N	\N
20455	Xã A Tiêng	xa-a-tieng	15.9113016	107.4913489	Xã	504	\N	\N
20458	Xã Bha Lê	xa-bha-le	15.9773112	107.5150139	Xã	504	\N	\N
20461	Xã A Vương	xa-a-vuong	16.0043618	107.5978577	Xã	504	\N	\N
20464	Xã Dang	xa-dang	15.8148158	107.5623501	Xã	504	\N	\N
20467	Thị trấn P Rao	thi-tran-p-rao	15.9272632	107.6392892	Thị trấn	505	\N	\N
20470	Xã Tà Lu	xa-ta-lu	15.9654024	107.6570475	Xã	505	\N	\N
20473	Xã Sông Kôn	xa-song-kon	15.9800468	107.7517775	Xã	505	\N	\N
20476	Xã Jơ Ngây	xa-jo-ngay	15.9307613	107.7991545	Xã	505	\N	\N
20479	Xã A Ting	xa-a-ting	15.9966483	107.8228459	Xã	505	\N	\N
20482	Xã  Tư	xa-tu	16.0132121	107.893932	Xã	505	\N	\N
20485	Xã Ba	xa-ba	15.9659298	107.9176312	Xã	505	\N	\N
20488	Xã A Rooi	xa-a-rooi	15.8726386	107.6156133	Xã	505	\N	\N
20491	Xã Za Hung	xa-za-hung	15.8903214	107.6748069	Xã	505	\N	\N
20494	Xã Mà Cooi	xa-ma-cooi	15.8152821	107.6925674	Xã	505	\N	\N
20497	Xã Ka Dăng	xa-ka-dang	15.8855069	107.7991545	Xã	505	\N	\N
20500	Thị Trấn Ái Nghĩa	thi-tran-ai-nghia	15.8869718	108.1132212	Thị trấn	506	\N	\N
20503	Xã Đại Sơn	xa-dai-son	15.8116509	107.8702347	Xã	506	\N	\N
20506	Xã Đại Lãnh	xa-dai-lanh	15.8785902	107.9472579	Xã	506	\N	\N
20509	Xã Đại Hưng	xa-dai-hung	15.8897897	107.8820831	Xã	506	\N	\N
20512	Xã Đại Hồng	xa-dai-hong	15.8220769	107.9472579	Xã	506	\N	\N
20515	Xã Đại Đồng	xa-dai-dong	15.8920044	107.9887402	Xã	506	\N	\N
20518	Xã Đại Quang	xa-dai-quang	15.8879446	108.0361555	Xã	506	\N	\N
20521	Xã Đại Nghĩa	xa-dai-nghia	15.9013316	108.07765	Xã	506	\N	\N
20524	Xã Đại Hiệp	xa-dai-hiep	15.9208658	108.1132212	Xã	506	\N	\N
20527	Xã Đại Thạnh	xa-dai-thanh	15.7820381	108.0342879	Xã	506	\N	\N
20530	Xã Đại Chánh	xa-dai-chanh	15.7995831	108.0124469	Xã	506	\N	\N
20533	Xã Đại Tân	xa-dai-tan	15.8242816	108.0539382	Xã	506	\N	\N
20536	Xã Đại Phong	xa-dai-phong	15.8581721	108.0539382	Xã	506	\N	\N
20539	Xã Đại Minh	xa-dai-minh	15.8540775	108.0687579	Xã	506	\N	\N
20542	Xã Đại Thắng	xa-dai-thang	15.82533	108.0746859	Xã	506	\N	\N
20545	Xã Đại Cường	xa-dai-cuong	15.8551216	108.0895066	Xã	506	\N	\N
20547	Xã Đại An	xa-dai-an	15.8530844	108.1132212	Xã	506	\N	\N
20548	Xã Đại Hòa	xa-dai-hoa	15.8623383	108.1369375	Xã	506	\N	\N
20551	Phường Vĩnh Điện	phuong-vinh-dien	15.8902573	108.2522087	Phường	507	\N	\N
20554	Xã Điện Tiến	xa-dien-tien	15.8879126	108.2537443	Xã	507	\N	\N
20557	Xã Điện Hòa	xa-dien-hoa	15.9072569	108.224595	Xã	507	\N	\N
20560	Xã Điện Thắng Bắc	xa-dien-thang-bac	15.938169	108.223294	Xã	507	\N	\N
20561	Xã Điện Thắng Trung	xa-dien-thang-trung	15.9254887	108.2229243	Xã	507	\N	\N
20562	Xã Điện Thắng Nam	xa-dien-thang-nam	15.9072569	108.224595	Xã	507	\N	\N
20563	Phường Điện Ngọc	phuong-dien-ngoc	15.9540388	108.2559752	Phường	507	\N	\N
20566	Xã Điện Hồng	xa-dien-hong	15.8879126	108.2537443	Xã	507	\N	\N
20569	Xã Điện Thọ	xa-dien-tho	15.938169	108.223294	Xã	507	\N	\N
20572	Xã Điện Phước	xa-dien-phuoc	15.879982	108.215497	Xã	507	\N	\N
20575	Phường Điện An	phuong-dien-an	15.9370473	108.2636119	Phường	507	\N	\N
20578	Phường Điện Nam Bắc	phuong-dien-nam-bac	15.9370473	108.2636119	Phường	507	\N	\N
20579	Phường Điện Nam Trung	phuong-dien-nam-trung	15.9254887	108.2229243	Phường	507	\N	\N
20580	Phường Điện Nam Đông	phuong-dien-nam-dong	14.058324	108.277199	Phường	507	\N	\N
20581	Phường Điện Dương	phuong-dien-duong	15.9271829	108.3224273	Phường	507	\N	\N
20584	Xã Điện Quang	xa-dien-quang	15.9370473	108.2636119	Xã	507	\N	\N
20587	Xã Điện Trung	xa-dien-trung	15.9254887	108.2229243	Xã	507	\N	\N
20590	Xã Điện Phong	xa-dien-phong	15.8879126	108.2537443	Xã	507	\N	\N
20593	Xã Điện Minh	xa-dien-minh	15.8791657	108.2540926	Xã	507	\N	\N
20596	Xã Điện Phương	xa-dien-phuong	15.9540388	108.2559752	Xã	507	\N	\N
20599	Thị trấn Nam Phước	thi-tran-nam-phuoc	15.8196874	108.2606686	Thị trấn	508	\N	\N
20602	Xã Duy Thu	xa-duy-thu	15.778093	108.0657939	Xã	508	\N	\N
20605	Xã Duy Phú	xa-duy-phu	15.7637643	108.1013637	Xã	508	\N	\N
20608	Xã Duy Tân	xa-duy-tan	15.8099435	108.0895066	Xã	508	\N	\N
20611	Xã Duy Hòa	xa-duy-hoa	15.8120313	108.1310083	Xã	508	\N	\N
20614	Xã Duy Châu	xa-duy-chau	15.8338508	108.1558811	Xã	508	\N	\N
20617	Xã Duy Trinh	xa-duy-trinh	15.820276	108.1992015	Xã	508	\N	\N
20620	Xã Duy Sơn	xa-duy-son	15.7628056	108.1784455	Xã	508	\N	\N
20623	Xã Duy Trung	xa-duy-trung	15.7854023	108.2436831	Xã	508	\N	\N
20626	Xã Duy Phước	xa-duy-phuoc	15.8479721	108.3030015	Xã	508	\N	\N
20629	Xã Duy Thành	xa-duy-thanh	15.8264213	108.3237655	Xã	508	\N	\N
20632	Xã Duy Vinh	xa-duy-vinh	15.847955	108.3356312	Xã	508	\N	\N
20635	Xã Duy Nghĩa	xa-duy-nghia	15.8417736	108.3741977	Xã	508	\N	\N
20638	Xã Duy Hải	xa-duy-hai	15.8622627	108.3979331	Xã	508	\N	\N
20641	Thị trấn Đông Phú	thi-tran-dong-phu	15.6859126	108.2199588	Thị trấn	509	\N	\N
20644	Xã Quế Xuân 1	xa-que-xuan-1	15.8182272	108.2881709	Xã	509	\N	\N
20647	Xã Quế Xuân 2	xa-que-xuan-2	15.7848924	108.2822389	Xã	509	\N	\N
20650	Xã Quế Phú	xa-que-phu	15.7915566	108.3030015	Xã	509	\N	\N
20651	Xã Hương An	xa-huong-an	15.7884703	108.3385977	Xã	509	\N	\N
20653	Xã Quế Cường	xa-que-cuong	15.75669	108.3148665	Xã	509	\N	\N
20656	Xã Quế Trung	xa-que-trung	15.7180509	108.0589089	Xã	519	\N	\N
20659	Xã Quế Hiệp	xa-que-hiep	15.731032	108.2199588	Xã	509	\N	\N
20662	Xã Quế Thuận	xa-que-thuan	15.7156723	108.2674092	Xã	509	\N	\N
20665	Xã Phú Thọ	xa-phu-tho	15.7300329	108.2970692	Xã	509	\N	\N
20668	Xã Quế Ninh	xa-que-ninh	15.6600699	108.059866	Xã	519	\N	\N
20669	Xã Phước Ninh	xa-phuoc-ninh	15.6926668	107.9413323	Xã	519	\N	\N
20671	Xã Quế Lộc	xa-que-loc	15.6786107	108.1072924	Xã	519	\N	\N
20672	Xã Sơn Viên	xa-son-vien	15.7155774	108.1369375	Xã	519	\N	\N
20674	Xã Quế Phước	xa-que-phuoc	15.6589408	108.0065201	Xã	519	\N	\N
20677	Xã Quế Long	xa-que-long	15.6889584	108.1843756	Xã	509	\N	\N
20680	Xã Quế Châu	xa-que-chau	15.6715845	108.255546	Xã	509	\N	\N
20683	Xã Quế Phong	xa-que-phong	15.6520098	108.154726	Xã	509	\N	\N
20686	Xã Quế An	xa-que-an	15.6418186	108.2080973	Xã	509	\N	\N
20689	Xã Quế Minh	xa-que-minh	15.6510662	108.2318208	Xã	509	\N	\N
20692	Xã Quế Lâm	xa-que-lam	15.6146322	107.9294815	Xã	519	\N	\N
20695	Thị trấn Thạnh Mỹ	thi-tran-thanh-my	15.7744106	107.775465	Thị trấn	510	\N	\N
20698	Xã Laêê	xa-laee	14.058324	108.277199	Xã	510	\N	\N
20699	Xã Chơ Chun	xa-cho-chun	14.058324	108.277199	Xã	510	\N	\N
20701	Xã Zuôich	xa-zuoich	15.7365791	107.5505152	Xã	510	\N	\N
20702	Xã Tà Pơơ	xa-ta-poo	14.058324	108.277199	Xã	510	\N	\N
20704	Xã La Dêê	xa-la-dee	15.553015	107.4440254	Xã	510	\N	\N
20705	Xã Đắc Tôi	xa-dac-toi	15.5981116	107.5092395	Xã	510	\N	\N
20707	Xã Chà Vàl	xa-cha-val	15.6221981	107.5064179	Xã	510	\N	\N
20710	Xã Tà Bhinh	xa-ta-bhinh	15.6343749	107.6925674	Xã	510	\N	\N
20713	Xã Cà Dy	xa-ca-dy	15.671699	107.7873095	Xã	510	\N	\N
20716	Xã Đắc Pre	xa-dac-pre	15.5227092	107.5386809	Xã	510	\N	\N
20719	Xã Đắc Pring	xa-dac-pring	15.4820572	107.6215321	Xã	510	\N	\N
20722	Thị trấn Khâm Đức	thi-tran-kham-duc	15.4394771	107.7932671	Thị trấn	511	\N	\N
20725	Xã Phước Xuân	xa-phuoc-xuan	15.536171	107.7873095	Xã	511	\N	\N
20728	Xã Phước Hiệp	xa-phuoc-hiep	15.4301861	107.9768875	Xã	511	\N	\N
20729	Xã Phước Hoà	xa-phuoc-hoa	15.4831734	107.8820831	Xã	511	\N	\N
20731	Xã Phước Đức	xa-phuoc-duc	15.4600898	107.7517775	Xã	511	\N	\N
20734	Xã Phước Năng	xa-phuoc-nang	15.4127067	107.7103291	Xã	511	\N	\N
20737	Xã Phước Mỹ	xa-phuoc-my	15.3266481	107.728092	Xã	511	\N	\N
20740	Xã Phước Chánh	xa-phuoc-chanh	15.3640023	107.8228459	Xã	511	\N	\N
20743	Xã Phước Công	xa-phuoc-cong	15.3208456	107.7991545	Xã	511	\N	\N
20746	Xã Phước Kim	xa-phuoc-kim	15.3478567	107.8820831	Xã	511	\N	\N
20749	Xã Phước Lộc	xa-phuoc-loc	15.2615862	107.8346924	Xã	511	\N	\N
20752	Xã Phước Thành	xa-phuoc-thanh	15.2660581	107.9176312	Xã	511	\N	\N
20755	Thị trấn Tân An	thi-tran-tan-an	15.5786555	108.1221146	Thị trấn	512	\N	\N
20758	Xã Hiệp Hòa	xa-hiep-hoa	15.5738111	108.0124469	Xã	512	\N	\N
20761	Xã Hiệp Thuận	xa-hiep-thuan	15.6129323	108.0835783	Xã	512	\N	\N
20764	Xã Quế Thọ	xa-que-tho	15.6068987	108.154726	Xã	512	\N	\N
20767	Xã Bình Lâm	xa-binh-lam	15.6008406	108.2258897	Xã	512	\N	\N
20770	Xã Sông Trà	xa-song-tra	15.533835	108.0183739	Xã	512	\N	\N
20773	Xã Phước Trà	xa-phuoc-tra	15.4570733	108.059866	Xã	512	\N	\N
20776	Xã Phước Gia	xa-phuoc-gia	15.4756333	108.1072924	Xã	512	\N	\N
20779	Xã Quế Bình	xa-que-binh	15.551403	108.07765	Xã	512	\N	\N
20782	Xã Quế Lưu	xa-que-luu	15.5207177	108.1072924	Xã	512	\N	\N
20785	Xã Thăng Phước	xa-thang-phuoc	15.5372464	108.1784455	Xã	512	\N	\N
20788	Xã Bình Sơn	xa-binh-son	15.5761934	108.1843756	Xã	512	\N	\N
20791	Thị trấn Hà Lam	thi-tran-ha-lam	15.7380811	108.3612602	Thị trấn	513	\N	\N
20794	Xã Bình Dương	xa-binh-duong	15.8069004	108.3860652	Xã	513	\N	\N
20797	Xã Bình Giang	xa-binh-giang	15.7976877	108.3623306	Xã	513	\N	\N
20800	Xã Bình Nguyên	xa-binh-nguyen	15.7536076	108.350464	Xã	513	\N	\N
20803	Xã Bình Phục	xa-binh-phuc	15.7279718	108.3860652	Xã	513	\N	\N
20806	Xã Bình Triều	xa-binh-trieu	15.7371838	108.4098014	Xã	513	\N	\N
20809	Xã Bình Đào	xa-binh-dao	15.75973	108.4098014	Xã	513	\N	\N
20812	Xã Bình Minh	xa-binh-minh	15.7663766	108.430572	Xã	513	\N	\N
20815	Xã Bình Lãnh	xa-binh-lanh	15.6264881	108.255546	Xã	513	\N	\N
20818	Xã Bình Trị	xa-binh-tri	15.6570156	108.2775684	Xã	513	\N	\N
20821	Xã Bình Định Bắc	xa-binh-dinh-bac	15.6787815	108.3030015	Xã	513	\N	\N
20822	Xã Bình Định Nam	xa-binh-dinh-nam	15.6336926	108.3030015	Xã	513	\N	\N
20824	Xã Bình Quý	xa-binh-quy	15.69826	108.3385977	Xã	513	\N	\N
20827	Xã Bình Phú	xa-binh-phu	15.6203852	108.3267319	Xã	513	\N	\N
20830	Xã Bình Chánh	xa-binh-chanh	15.6623972	108.3623306	Xã	513	\N	\N
20833	Xã Bình Tú	xa-binh-tu	15.6931289	108.3979331	Xã	513	\N	\N
20836	Xã Bình Sa	xa-binh-sa	15.7013103	108.4335393	Xã	513	\N	\N
20839	Xã Bình Hải	xa-binh-hai	15.7105154	108.4572788	Xã	513	\N	\N
20842	Xã Bình Quế	xa-binh-que	15.6275693	108.3741977	Xã	513	\N	\N
20845	Xã Bình An	xa-binh-an	15.6347379	108.4216702	Xã	513	\N	\N
20848	Xã Bình Trung	xa-binh-trung	15.6695635	108.4098014	Xã	513	\N	\N
20851	Xã Bình Nam	xa-binh-nam	15.6521239	108.48102	Xã	513	\N	\N
20854	Thị trấn Tiên Kỳ	thi-tran-tien-ky	15.488925	108.3068654	Thị trấn	514	\N	\N
20857	Xã Tiên Sơn	xa-tien-son	15.5803912	108.2674092	Xã	514	\N	\N
20860	Xã Tiên Hà	xa-tien-ha	15.553738	108.2496145	Xã	514	\N	\N
20863	Xã Tiên Cẩm	xa-tien-cam	15.5548165	108.3030015	Xã	514	\N	\N
20866	Xã Tiên Châu	xa-tien-chau	15.5019221	108.2607567	Xã	514	\N	\N
20869	Xã Tiên Lãnh	xa-tien-lanh	15.447109	108.1784455	Xã	514	\N	\N
20872	Xã Tiên Ngọc	xa-tien-ngoc	15.4656287	108.2258897	Xã	514	\N	\N
20875	Xã Tiên Hiệp	xa-tien-hiep	15.4134511	108.2436831	Xã	514	\N	\N
20878	Xã Tiên Cảnh	xa-tien-canh	15.4595934	108.2970692	Xã	514	\N	\N
20881	Xã Tiên Mỹ	xa-tien-my	15.5189989	108.3267319	Xã	514	\N	\N
20884	Xã Tiên Phong	xa-tien-phong	15.5282318	108.350464	Xã	514	\N	\N
20887	Xã Tiên Thọ	xa-tien-tho	15.4811669	108.3741977	Xã	514	\N	\N
20890	Xã Tiên An	xa-tien-an	15.4125517	108.3207992	Xã	514	\N	\N
20893	Xã Tiên Lộc	xa-tien-loc	15.4606791	108.350464	Xã	514	\N	\N
20896	Xã Tiên Lập	xa-tien-lap	15.4146506	108.3623306	Xã	514	\N	\N
20899	Thị trấn Trà My	thi-tran-tra-my	15.3487537	108.2286504	Thị trấn	515	\N	\N
20900	Xã Trà Sơn	xa-tra-son	15.3161355	108.1962362	Xã	515	\N	\N
20902	Xã Trà Kót	xa-tra-kot	15.3594865	108.4157357	Xã	515	\N	\N
20905	Xã Trà Nú	xa-tra-nu	15.3225406	108.3207992	Xã	515	\N	\N
20908	Xã Trà Đông	xa-tra-dong	15.3716584	108.3385977	Xã	515	\N	\N
20911	Xã Trà Dương	xa-tra-duong	15.3776781	108.2674092	Xã	515	\N	\N
20914	Xã Trà Giang	xa-tra-giang	15.3060337	108.2496145	Xã	515	\N	\N
20917	Xã Trà Bui	xa-tra-bui	15.3360991	108.024301	Xã	515	\N	\N
20920	Xã Trà Đốc	xa-tra-doc	15.3886512	108.1369375	Xã	515	\N	\N
20923	Xã Trà Tân	xa-tra-tan	15.3139798	108.154726	Xã	515	\N	\N
20926	Xã Trà Giác	xa-tra-giac	15.2425074	108.2021667	Xã	515	\N	\N
20929	Xã Trà Giáp	xa-tra-giap	15.2365594	108.273341	Xã	515	\N	\N
20932	Xã Trà Ka	xa-tra-ka	15.1691076	108.273341	Xã	515	\N	\N
20935	Xã Trà Leng	xa-tra-leng	15.2827286	107.9887402	Xã	516	\N	\N
20938	Xã Trà Dơn	xa-tra-don	15.2337787	108.0361555	Xã	516	\N	\N
20941	Xã Trà Tập	xa-tra-tap	15.184852	108.0835783	Xã	516	\N	\N
20944	Xã Trà Mai	xa-tra-mai	15.1789678	108.154726	Xã	516	\N	\N
20947	Xã Trà Cang	xa-tra-cang	15.0968232	108.059866	Xã	516	\N	\N
20950	Xã Trà Linh	xa-tra-linh	15.0351665	107.9887402	Xã	516	\N	\N
20953	Xã Trà Nam	xa-tra-nam	15.0049563	108.0835783	Xã	516	\N	\N
20956	Xã Trà Don	xa-tra-don	15.2337787	108.0361555	Xã	516	\N	\N
20959	Xã Trà Vân	xa-tra-van	15.1075856	108.2021667	Xã	516	\N	\N
20962	Xã Trà Vinh	xa-tra-vinh	15.0626379	108.2021667	Xã	516	\N	\N
20965	Thị trấn Núi Thành	thi-tran-nui-thanh	15.4275264	108.6383454	Thị trấn	517	\N	\N
20968	Xã Tam Xuân I	xa-tam-xuan-i	15.5502421	108.5239202	Xã	517	\N	\N
20971	Xã Tam Xuân II	xa-tam-xuan-ii	15.5502421	108.5239202	Xã	517	\N	\N
20974	Xã Tam Tiến	xa-tam-tien	15.553819	108.5760007	Xã	517	\N	\N
20977	Xã Tam Sơn	xa-tam-son	15.420885	108.4869555	Xã	517	\N	\N
20980	Xã Tam Thạnh	xa-tam-thanh	15.4392998	108.5344435	Xã	517	\N	\N
20983	Xã Tam Anh Bắc	xa-tam-anh-bac	15.510874	108.5522531	Xã	517	\N	\N
20984	Xã Tam Anh Nam	xa-tam-anh-nam	15.4750772	108.5760007	Xã	517	\N	\N
20986	Xã Tam Hòa	xa-tam-hoa	15.5006232	108.6056873	Xã	517	\N	\N
20989	Xã Tam Hiệp	xa-tam-hiep	15.4392928	108.5997498	Xã	517	\N	\N
20992	Xã Tam Hải	xa-tam-hai	15.4903619	108.6591293	Xã	517	\N	\N
20995	Xã Tam Giang	xa-tam-giang	15.4576664	108.6472527	Xã	517	\N	\N
20998	Xã Tam Quang	xa-tam-quang	15.4658144	108.6828838	Xã	517	\N	\N
21001	Xã Tam Nghĩa	xa-tam-nghia	15.4024625	108.7007007	Xã	517	\N	\N
21004	Xã Tam Mỹ Tây	xa-tam-my-tay	15.4109795	108.6132464	Xã	517	\N	\N
21005	Xã Tam Mỹ Đông	xa-tam-my-dong	15.3902328	108.6472527	Xã	517	\N	\N
21007	Xã Tam Trà	xa-tam-tra	15.3513902	108.5106987	Xã	517	\N	\N
21010	Phường Lê Hồng Phong	phuong-le-hong-phong	15.132803	108.8014427	Phường	522	\N	\N
21013	Phường Trần Phú	phuong-tran-phu	15.1253627	108.7878586	Phường	522	\N	\N
21016	Phường Quảng Phú	phuong-quang-phu	15.11326	108.7801329	Phường	522	\N	\N
21019	Phường Nghĩa Chánh	phuong-nghia-chanh	15.1162865	108.8163598	Phường	522	\N	\N
21022	Phường Trần Hưng Đạo	phuong-tran-hung-dao	15.12315	108.8001936	Phường	522	\N	\N
21025	Phường Nguyễn Nghiêm	phuong-nguyen-nghiem	15.1207299	108.8039065	Phường	522	\N	\N
21028	Phường Nghĩa Lộ	phuong-nghia-lo	15.1055715	108.7927679	Phường	522	\N	\N
21031	Phường Chánh Lộ	phuong-chanh-lo	15.113154	108.805024	Phường	522	\N	\N
21034	Xã Nghĩa Dũng	xa-nghia-dung	15.1297967	108.847294	Xã	522	\N	\N
21037	Xã Nghĩa Dõng	xa-nghia-dong	15.1153156	108.8328791	Xã	522	\N	\N
21040	Thị Trấn Châu Ổ	thi-tran-chau-o	15.3005943	108.7586113	Thị trấn	524	\N	\N
21043	Xã Bình Thuận	xa-binh-thuan	15.3921335	108.8195012	Xã	524	\N	\N
21046	Xã Bình Thạnh	xa-binh-thanh	15.3809762	108.7541564	Xã	524	\N	\N
21049	Xã Bình Đông	xa-binh-dong	15.3666505	108.7897976	Xã	524	\N	\N
21052	Xã Bình Chánh	xa-binh-chanh	15.3483175	108.7422767	Xã	524	\N	\N
21055	Xã Bình Nguyên	xa-binh-nguyen	15.3391442	108.7185184	Xã	524	\N	\N
21058	Xã Bình Khương	xa-binh-khuong	15.3309906	108.6828838	Xã	524	\N	\N
21061	Xã Bình Trị	xa-binh-tri	15.3400654	108.8373244	Xã	524	\N	\N
21064	Xã Bình An	xa-binh-an	15.3187429	108.6294384	Xã	524	\N	\N
21067	Xã Bình Hải	xa-binh-hai	15.3155534	108.8610899	Xã	524	\N	\N
21070	Xã Bình Dương	xa-binh-duong	15.3350315	108.7660364	Xã	524	\N	\N
21073	Xã Bình Phước	xa-binh-phuoc	15.3094925	108.8016788	Xã	524	\N	\N
21076	Xã Bình Thới	xa-binh-thoi	15.3095167	108.7690065	Xã	524	\N	\N
21079	Xã Bình Hòa	xa-binh-hoa	15.2951786	108.8373244	Xã	524	\N	\N
21082	Xã Bình Trung	xa-binh-trung	15.302936	108.7431585	Xã	524	\N	\N
21085	Xã Bình Minh	xa-binh-minh	15.2768881	108.6591293	Xã	524	\N	\N
21088	Xã Bình Long	xa-binh-long	15.2789086	108.7660364	Xã	524	\N	\N
21091	Xã Bình Thanh Tây	xa-binh-thanh-tay	15.2646071	108.8016788	Xã	524	\N	\N
21094	Xã Bình Phú	xa-binh-phu	15.2696467	108.8729732	Xã	524	\N	\N
21097	Xã Bình Thanh Đông	xa-binh-thanh-dong	15.262551	108.8254421	Xã	524	\N	\N
21100	Xã Bình Chương	xa-binh-chuong	15.2605586	108.7185184	Xã	524	\N	\N
21103	Xã Bình Hiệp	xa-binh-hiep	15.2554399	108.7779168	Xã	524	\N	\N
21106	Xã Bình Mỹ	xa-binh-my	15.2544339	108.6591293	Xã	524	\N	\N
21109	Xã Bình Tân	xa-binh-tan	15.2268448	108.849207	Xã	524	\N	\N
21112	Xã Bình Châu	xa-binh-chau	15.2318755	108.9205099	Xã	524	\N	\N
21115	Thị trấn Trà Xuân	thi-tran-tra-xuan	15.2579244	108.5196028	Thị trấn	525	\N	\N
21118	Xã Trà Giang	xa-tra-giang	15.2750154	108.5893553	Xã	525	\N	\N
21121	Xã Trà Thủy	xa-tra-thuy	15.262528	108.5076499	Xã	525	\N	\N
21124	Xã Trà Hiệp	xa-tra-hiep	15.2793985	108.3992243	Xã	525	\N	\N
21127	Xã Trà Bình	xa-tra-binh	15.2504244	108.6051224	Xã	525	\N	\N
21130	Xã Trà Phú	xa-tra-phu	15.2512923	108.5812926	Xã	525	\N	\N
21133	Xã Trà Lâm	xa-tra-lam	15.2266988	108.4339079	Xã	525	\N	\N
21136	Xã Trà Tân	xa-tra-tan	15.1795756	108.5879898	Xã	525	\N	\N
21139	Xã Trà Sơn	xa-tra-son	15.2588037	108.4979058	Xã	525	\N	\N
21142	Xã Trà Bùi	xa-tra-bui	14.058324	108.277199	Xã	525	\N	\N
21145	Xã Trà Thanh	xa-tra-thanh	15.2636458	108.3526826	Xã	526	\N	\N
21148	Xã Trà Khê	xa-tra-khe	15.1734301	108.35512	Xã	526	\N	\N
21151	Xã Trà Quân	xa-tra-quan	15.2322197	108.3642	Xã	526	\N	\N
21154	Xã Trà Phong	xa-tra-phong	15.1717717	108.3605864	Xã	526	\N	\N
21157	Xã Trà Lãnh	xa-tra-lanh	15.2021202	108.4157357	Xã	526	\N	\N
21160	Xã Trà Nham	xa-tra-nham	15.1962644	108.4631896	Xã	526	\N	\N
21163	Xã Trà Xinh	xa-tra-xinh	15.1335089	108.3660326	Xã	526	\N	\N
21166	Xã Trà Thọ	xa-tra-tho	15.114256	108.3919991	Xã	526	\N	\N
21169	Xã Trà Trung	xa-tra-trung	15.1481695	108.4439229	Xã	526	\N	\N
21172	Phường Trương Quang Trọng	phuong-truong-quang-trong	15.1506555	108.7970358	Phường	522	\N	\N
21175	Xã Tịnh Thọ	xa-tinh-tho	15.2187293	108.7482165	Xã	527	\N	\N
21178	Xã Tịnh Trà	xa-tinh-tra	15.2289299	108.6947617	Xã	527	\N	\N
21181	Xã Tịnh Phong	xa-tinh-phong	15.2085186	108.8016788	Xã	527	\N	\N
21184	Xã Tịnh Hiệp	xa-tinh-hiep	15.2095353	108.6591293	Xã	527	\N	\N
21187	Xã Tịnh Hòa	xa-tinh-hoa	15.2135746	108.8729732	Xã	522	\N	\N
21190	Xã Tịnh Kỳ	xa-tinh-ky	15.2018205	108.9115964	Xã	522	\N	\N
21193	Xã Tịnh Bình	xa-tinh-binh	15.193231	108.7185184	Xã	527	\N	\N
21196	Xã Tịnh Đông	xa-tinh-dong	15.1714089	108.6404192	Xã	527	\N	\N
21199	Xã Tịnh Thiện	xa-tinh-thien	15.1819929	108.849207	Xã	522	\N	\N
21202	Xã Tịnh Ấn Đông	xa-tinh-an-dong	15.141745	108.8284127	Xã	522	\N	\N
21205	Xã Tịnh Bắc	xa-tinh-bac	15.1779147	108.6680371	Xã	527	\N	\N
21208	Xã Tịnh Châu	xa-tinh-chau	15.1692595	108.8343538	Xã	522	\N	\N
21211	Xã Tịnh Khê	xa-tinh-khe	15.1677052	108.8848569	Xã	522	\N	\N
21214	Xã Tịnh Long	xa-tinh-long	15.1498851	108.8640607	Xã	522	\N	\N
21217	Xã Tịnh Sơn	xa-tinh-son	15.1543693	108.7210142	Xã	527	\N	\N
21220	Xã Tịnh Hà	xa-tinh-ha	15.1565274	108.7541564	Xã	527	\N	\N
21223	Xã Tịnh Ấn Tây	xa-tinh-an-tay	15.1626452	108.780887	Xã	522	\N	\N
21226	Xã Tịnh Giang	xa-tinh-giang	15.1574728	108.6116249	Xã	527	\N	\N
21229	Xã Tịnh Minh	xa-tinh-minh	15.1513538	108.6698112	Xã	527	\N	\N
21232	Xã Tịnh An	xa-tinh-an	15.141745	108.8284127	Xã	522	\N	\N
21235	Thị trấn La Hà	thi-tran-la-ha	15.0913108	108.8284127	Thị trấn	528	\N	\N
21238	Thị trấn Sông Vệ	thi-tran-song-ve	15.0431887	108.8506923	Thị trấn	528	\N	\N
21241	Xã Nghĩa Lâm	xa-nghia-lam	15.15105	108.6304589	Xã	528	\N	\N
21244	Xã Nghĩa Thắng	xa-nghia-thang	15.1322062	108.7127647	Xã	528	\N	\N
21247	Xã Nghĩa Thuận	xa-nghia-thuan	15.1245426	108.730402	Xã	528	\N	\N
21250	Xã Nghĩa Kỳ	xa-nghia-ky	15.1065785	108.7482165	Xã	528	\N	\N
21253	Xã Nghĩa Phú	xa-nghia-phu	15.1366289	108.8878278	Xã	522	\N	\N
21256	Xã Nghĩa Hà	xa-nghia-ha	15.1126961	108.8729732	Xã	522	\N	\N
21259	Xã Nghĩa Sơn	xa-nghia-son	15.1065138	108.6502218	Xã	528	\N	\N
21262	Xã Nghĩa An	xa-nghia-an	15.1187966	108.8997119	Xã	522	\N	\N
21265	Xã Nghĩa Thọ	xa-nghia-tho	15.0580313	108.6626974	Xã	528	\N	\N
21268	Xã Nghĩa Hòa	xa-nghia-hoa	15.0923224	108.8818859	Xã	528	\N	\N
21271	Xã Nghĩa Điền	xa-nghia-dien	15.0942553	108.7837841	Xã	528	\N	\N
21274	Xã Nghĩa Thương	xa-nghia-thuong	15.0811243	108.849207	Xã	528	\N	\N
21277	Xã Nghĩa Trung	xa-nghia-trung	15.0729731	108.8135603	Xã	528	\N	\N
21280	Xã Nghĩa Hiệp	xa-nghia-hiep	15.0577	108.8610899	Xã	528	\N	\N
21283	Xã Nghĩa Phương	xa-nghia-phuong	15.0459865	108.8343538	Xã	528	\N	\N
21286	Xã Nghĩa Mỹ	xa-nghia-my	15.0342771	108.840295	Xã	528	\N	\N
21289	Thị trấn Di Lăng	thi-tran-di-lang	15.0430055	108.4721169	Thị trấn	529	\N	\N
21292	Xã Sơn Hạ	xa-son-ha	15.1227265	108.5581899	Xã	529	\N	\N
21295	Xã Sơn Thành	xa-son-thanh	15.0798469	108.5344435	Xã	529	\N	\N
21298	Xã Sơn Nham	xa-son-nham	15.0718264	108.6294384	Xã	529	\N	\N
21301	Xã Sơn Bao	xa-son-bao	15.0193133	108.4467852	Xã	529	\N	\N
21304	Xã Sơn Linh	xa-son-linh	15.0065555	108.6056873	Xã	529	\N	\N
21307	Xã Sơn Giang	xa-son-giang	15.0150398	108.5670695	Xã	529	\N	\N
21310	Xã Sơn Trung	xa-son-trung	15.0400836	108.5403799	Xã	529	\N	\N
21313	Xã Sơn Thượng	xa-son-thuong	14.9920272	108.4780523	Xã	529	\N	\N
21319	Xã Sơn Hải	xa-son-hai	14.9956509	108.5017948	Xã	529	\N	\N
21322	Xã Sơn Thủy	xa-son-thuy	14.954635	108.519336	Xã	529	\N	\N
21325	Xã Sơn Kỳ	xa-son-ky	14.900436	108.5344435	Xã	529	\N	\N
21328	Xã Sơn Ba	xa-son-ba	14.8298064	108.5421109	Xã	529	\N	\N
21331	Xã Sơn Bua	xa-son-bua	15.0682852	108.2724952	Xã	530	\N	\N
21334	Xã Sơn Mùa	xa-son-mua	15.0137383	108.324911	Xã	530	\N	\N
21335	Xã Sơn Liên	xa-son-lien	14.982179	108.2982223	Xã	530	\N	\N
21337	Xã Sơn Tân	xa-son-tan	15.0125052	108.3964133	Xã	530	\N	\N
21338	Xã Sơn Màu	xa-son-mau	14.058324	108.277199	Xã	530	\N	\N
21340	Xã Sơn Dung	xa-son-dung	14.9895973	108.3357042	Xã	530	\N	\N
21341	Xã Sơn Long	xa-son-long	14.9312556	108.3441515	Xã	530	\N	\N
21343	Xã Sơn Tinh	xa-son-tinh	14.9358648	108.4519458	Xã	530	\N	\N
21346	Xã Sơn Lập	xa-son-lap	14.8480386	108.4154999	Xã	530	\N	\N
21349	Xã Long Sơn	xa-long-son	15.0005447	108.6769451	Xã	531	\N	\N
21352	Xã Long Mai	xa-long-mai	14.9578174	108.7185184	Xã	531	\N	\N
21355	Xã Thanh An	xa-thanh-an	14.9109177	108.6769451	Xã	531	\N	\N
21358	Xã Long Môn	xa-long-mon	14.9149058	108.6294384	Xã	531	\N	\N
21361	Xã Long Hiệp	xa-long-hiep	14.9130184	108.7185184	Xã	531	\N	\N
21364	Thị trấn Chợ Chùa	thi-tran-cho-chua	15.0566615	108.7749467	Thị trấn	532	\N	\N
21367	Xã Hành Thuận	xa-hanh-thuan	15.0793069	108.7799715	Xã	532	\N	\N
21370	Xã Hành Dũng	xa-hanh-dung	15.045145	108.7455297	Xã	532	\N	\N
21373	Xã Hành Trung	xa-hanh-trung	15.0480173	108.8105899	Xã	532	\N	\N
21376	Xã Hành Nhân	xa-hanh-nhan	15.0312622	108.722129	Xã	532	\N	\N
21379	Xã Hành Đức	xa-hanh-duc	15.04086	108.7962402	Xã	532	\N	\N
21382	Xã Hành Minh	xa-hanh-minh	15.0341776	108.7762034	Xã	532	\N	\N
21385	Xã Hành Phước	xa-hanh-phuoc	15.0144844	108.821573	Xã	532	\N	\N
21388	Xã Hành Thiện	xa-hanh-thien	14.9565635	108.7752274	Xã	532	\N	\N
21391	Xã Hành Thịnh	xa-hanh-thinh	14.9711499	108.8254421	Xã	532	\N	\N
21394	Xã Hành Tín Tây	xa-hanh-tin-tay	14.9049159	108.7482165	Xã	532	\N	\N
21397	Xã Hành Tín  Đông	xa-hanh-tin-dong	14.9200192	108.7720245	Xã	532	\N	\N
21400	Thị trấn Mộ Đức	thi-tran-mo-duc	14.9350549	108.8878278	Thị trấn	533	\N	\N
21403	Xã Đức Lợi	xa-duc-loi	15.0795873	108.8997119	Xã	533	\N	\N
21406	Xã Đức Thắng	xa-duc-thang	15.0424227	108.9086252	Xã	533	\N	\N
21409	Xã Đức Nhuận	xa-duc-nhuan	15.0200271	108.8636894	Xã	533	\N	\N
21412	Xã Đức Chánh	xa-duc-chanh	15.0108677	108.8848569	Xã	533	\N	\N
21415	Xã Đức Hiệp	xa-duc-hiep	14.9910131	108.8521643	Xã	533	\N	\N
21418	Xã Đức Minh	xa-duc-minh	14.9854259	108.9205099	Xã	533	\N	\N
21421	Xã Đức Thạnh	xa-duc-thanh	14.9895662	108.8766843	Xã	533	\N	\N
21424	Xã Đức Hòa	xa-duc-hoa	14.9569196	108.8610899	Xã	533	\N	\N
21427	Xã Đức Tân	xa-duc-tan	14.941663	108.8759441	Xã	533	\N	\N
21430	Xã Đức Phú	xa-duc-phu	14.944194	108.8364995	Xã	533	\N	\N
21433	Xã Đức Phong	xa-duc-phong	14.9335429	108.9383377	Xã	533	\N	\N
21436	Xã Đức Lân	xa-duc-lan	14.8958599	108.9167244	Xã	533	\N	\N
21439	Thị trấn Đức Phổ	thi-tran-duc-pho	14.8115527	108.9591376	Thị trấn	534	\N	\N
21442	Xã Phổ An	xa-pho-an	14.8928688	108.9561661	Xã	534	\N	\N
21445	Xã Phổ Phong	xa-pho-phong	14.8724844	108.8670315	Xã	534	\N	\N
21448	Xã Phổ Thuận	xa-pho-thuan	14.8623525	108.9205099	Xã	534	\N	\N
21451	Xã Phổ Văn	xa-pho-van	14.8481384	108.9561661	Xã	534	\N	\N
21454	Xã Phổ Quang	xa-pho-quang	14.8461146	108.9799387	Xã	534	\N	\N
21457	Xã Phổ Nhơn	xa-pho-nhon	14.8033679	108.8907988	Xã	534	\N	\N
21460	Xã Phổ Ninh	xa-pho-ninh	14.8166166	108.932395	Xã	534	\N	\N
21463	Xã Phổ Minh	xa-pho-minh	14.8217209	108.9710238	Xã	534	\N	\N
21466	Xã Phổ Vinh	xa-pho-vinh	14.8003933	108.9918254	Xã	534	\N	\N
21469	Xã Phổ Hòa	xa-pho-hoa	14.7810685	108.9561661	Xã	534	\N	\N
21472	Xã Phổ Cường	xa-pho-cuong	14.7668711	108.9918254	Xã	534	\N	\N
21475	Xã Phổ Khánh	xa-pho-khanh	14.724247	109.0334318	Xã	534	\N	\N
21478	Xã Phổ Thạnh	xa-pho-thanh	14.6775727	109.0572086	Xã	534	\N	\N
21481	Xã Phổ Châu	xa-pho-chau	14.615691	109.0631531	Xã	534	\N	\N
21484	Thị trấn Ba Tơ	thi-tran-ba-to	14.7634789	108.7333671	Thị trấn	535	\N	\N
21487	Xã Ba Điền	xa-ba-dien	14.8457201	108.6531909	Xã	535	\N	\N
21490	Xã Ba Vinh	xa-ba-vinh	14.8193578	108.7007007	Xã	535	\N	\N
21493	Xã Ba Thành	xa-ba-thanh	14.8160515	108.771623	Xã	535	\N	\N
21496	Xã Ba Động	xa-ba-dong	14.8060792	108.7680777	Xã	535	\N	\N
21499	Xã Ba Dinh	xa-ba-dinh	14.8496867	108.6056873	Xã	535	\N	\N
21500	Xã Ba Giang	xa-ba-giang	14.058324	108.277199	Xã	535	\N	\N
21502	Xã Ba Liên	xa-ba-lien	14.8266628	108.8135603	Xã	535	\N	\N
21505	Xã Ba Ngạc	xa-ba-ngac	14.8383206	108.5403799	Xã	535	\N	\N
21508	Xã Ba Khâm	xa-ba-kham	14.7637391	108.8967409	Xã	535	\N	\N
21511	Xã Ba Cung	xa-ba-cung	14.7757221	108.7541564	Xã	535	\N	\N
21514	Xã Ba Chùa	xa-ba-chua	14.7578726	108.7110303	Xã	535	\N	\N
21517	Xã Ba Tiêu	xa-ba-tieu	14.7925385	108.5522531	Xã	535	\N	\N
21520	Xã Ba Trang	xa-ba-trang	14.7322101	108.8729732	Xã	535	\N	\N
21523	Xã Ba Tô	xa-ba-to	14.7227413	108.6181569	Xã	535	\N	\N
21526	Xã Ba Bích	xa-ba-bich	14.7345583	108.72827	Xã	535	\N	\N
21529	Xã Ba Vì	xa-ba-vi	14.7691629	108.5641267	Xã	535	\N	\N
21532	Xã Ba Lế	xa-ba-le	14.6605185	108.7411134	Xã	535	\N	\N
21538	Xã Ba Xa	xa-ba-xa	14.677653	108.558123	Xã	535	\N	\N
21541	Xã An Vĩnh	xa-an-vinh	15.3808213	109.1077389	Xã	536	\N	\N
21544	Xã An Hải	xa-an-hai	15.3812521	109.1344926	Xã	536	\N	\N
21547	Xã An Bình	xa-an-binh	15.4293215	109.082473	Xã	536	\N	\N
21550	Phường Nhơn Bình	phuong-nhon-binh	13.7908974	109.2038649	Phường	540	\N	\N
21553	Phường Nhơn Phú	phuong-nhon-phu	13.7954571	109.1780227	Phường	540	\N	\N
21556	Phường Đống Đa	phuong-dong-da	13.7849582	109.2122608	Phường	540	\N	\N
21559	Phường Trần Quang Diệu	phuong-tran-quang-dieu	13.787118	109.1479245	Phường	540	\N	\N
21562	Phường Hải Cảng	phuong-hai-cang	13.7765558	109.2386684	Phường	540	\N	\N
21565	Phường Quang Trung	phuong-quang-trung	13.7645912	109.1992347	Phường	540	\N	\N
21568	Phường Thị Nại	phuong-thi-nai	13.7806822	109.228143	Phường	540	\N	\N
21571	Phường Lê Hồng Phong	phuong-le-hong-phong	13.7770619	109.2222203	Phường	540	\N	\N
21574	Phường Trần Hưng Đạo	phuong-tran-hung-dao	13.7771602	109.2288864	Phường	540	\N	\N
21577	Phường Ngô Mây	phuong-ngo-may	13.7684428	109.2170078	Phường	540	\N	\N
21580	Phường Lý Thường Kiệt	phuong-ly-thuong-kiet	13.7694508	109.2214531	Phường	540	\N	\N
21583	Phường Lê Lợi	phuong-le-loi	13.7718937	109.2340898	Phường	540	\N	\N
21586	Phường Trần Phú	phuong-tran-phu	13.7670741	109.2251697	Phường	540	\N	\N
21589	Phường Bùi Thị Xuân	phuong-bui-thi-xuan	13.7447566	109.1519305	Phường	540	\N	\N
21592	Phường Nguyễn Văn Cừ	phuong-nguyen-van-cu	13.7585534	109.2134328	Phường	540	\N	\N
21595	Phường Ghềnh Ráng	phuong-ghenh-rang	13.7214259	109.2116538	Phường	540	\N	\N
21598	Xã Nhơn Lý	xa-nhon-ly	13.8828976	109.2906895	Xã	540	\N	\N
21601	Xã Nhơn Hội	xa-nhon-hoi	13.804838	109.258617	Xã	540	\N	\N
21604	Xã Nhơn Hải	xa-nhon-hai	13.7693523	109.2897868	Xã	540	\N	\N
21607	Xã Nhơn Châu	xa-nhon-chau	13.6161801	109.3521721	Xã	540	\N	\N
21609	Thị trấn An Lão	thi-tran-an-lao	14.5776234	108.830544	Thị trấn	542	\N	\N
21610	Xã An Hưng	xa-an-hung	14.6591391	108.9115964	Xã	542	\N	\N
21613	Xã An Trung	xa-an-trung	14.5567763	108.9066468	Xã	542	\N	\N
21616	Xã An Dũng	xa-an-dung	14.058324	108.277199	Xã	542	\N	\N
21619	Xã An Vinh	xa-an-vinh	14.6021633	108.7845504	Xã	542	\N	\N
21622	Xã An Toàn	xa-an-toan	14.5339256	108.7268293	Xã	542	\N	\N
21625	Xã An Tân	xa-an-tan	14.5826542	108.8966346	Xã	542	\N	\N
21628	Xã An Hòa	xa-an-hoa	14.5583733	108.9013265	Xã	542	\N	\N
21631	Xã An Quang	xa-an-quang	14.5434489	108.8773817	Xã	542	\N	\N
21634	Xã An Nghĩa	xa-an-nghia	14.4901879	108.8492828	Xã	542	\N	\N
21637	Thị trấn  Tam Quan	thi-tran-tam-quan	14.5532988	109.0423479	Thị trấn	543	\N	\N
21640	Thị trấn Bồng Sơn	thi-tran-bong-son	14.4432287	108.9918254	Thị trấn	543	\N	\N
21643	Xã Hoài Sơn	xa-hoai-son	14.6165443	109.0136148	Xã	543	\N	\N
21646	Xã Hoài Châu Bắc	xa-hoai-chau-bac	14.6013716	108.9680522	Xã	543	\N	\N
21649	Xã Hoài Châu	xa-hoai-chau	14.590211	108.9680522	Xã	543	\N	\N
21652	Xã Hoài Phú	xa-hoai-phu	14.5494599	108.9998148	Xã	543	\N	\N
21655	Xã Tam Quan Bắc	xa-tam-quan-bac	14.571069	109.0631531	Xã	543	\N	\N
21658	Xã Tam Quan Nam	xa-tam-quan-nam	14.5317595	109.0559538	Xã	543	\N	\N
21661	Xã Hoài Hảo	xa-hoai-hao	14.5212811	108.9918254	Xã	543	\N	\N
21664	Xã Hoài Thanh Tây	xa-hoai-thanh-tay	14.5008452	109.0409535	Xã	543	\N	\N
21667	Xã Hoài Thanh	xa-hoai-thanh	14.5153114	109.0631531	Xã	543	\N	\N
21670	Xã Hoài Hương	xa-hoai-huong	14.4920189	109.0750422	Xã	543	\N	\N
21673	Xã Hoài Tân	xa-hoai-tan	14.4661871	109.0230762	Xã	543	\N	\N
21676	Xã Hoài Hải	xa-hoai-hai	14.4530612	109.1077389	Xã	543	\N	\N
21679	Xã Hoài Xuân	xa-hoai-xuan	14.4455649	109.040018	Xã	543	\N	\N
21682	Xã Hoài Mỹ	xa-hoai-my	14.4579322	109.0780619	Xã	543	\N	\N
21685	Xã Hoài Đức	xa-hoai-duc	14.3896241	109.0334318	Xã	543	\N	\N
21688	Thị trấn Tăng Bạt Hổ	thi-tran-tang-bat-ho	14.3645168	108.9636127	Thị trấn	544	\N	\N
21690	Xã Ân Hảo Tây	xa-an-hao-tay	14.4701936	108.913004	Xã	544	\N	\N
21691	Xã Ân Hảo Đông	xa-an-hao-dong	14.5048115	108.943219	Xã	544	\N	\N
21694	Xã Ân Sơn	xa-an-son	14.391479	108.911612	Xã	544	\N	\N
21697	Xã Ân Mỹ	xa-an-my	14.4305241	108.9625257	Xã	544	\N	\N
21700	Xã Dak Mang	xa-dak-mang	14.3476954	108.8621573	Xã	544	\N	\N
21703	Xã Ân Tín	xa-an-tin	14.4160239	108.9398932	Xã	544	\N	\N
21706	Xã Ân Thạnh	xa-an-thanh	14.3956358	108.9725196	Xã	544	\N	\N
21709	Xã Ân Phong	xa-an-phong	14.3060197	108.8779337	Xã	544	\N	\N
21712	Xã Ân Đức	xa-an-duc	14.3635064	108.9562126	Xã	544	\N	\N
21715	Xã Ân Hữu	xa-an-huu	14.3345476	108.8907988	Xã	544	\N	\N
21718	Xã Bok Tới	xa-bok-toi	14.2914306	108.828762	Xã	544	\N	\N
21721	Xã Ân Tường Tây	xa-an-tuong-tay	14.2638124	108.9383377	Xã	544	\N	\N
21724	Xã Ân Tường Đông	xa-an-tuong-dong	14.2821789	108.985882	Xã	544	\N	\N
21727	Xã Ân Nghĩa	xa-an-nghia	14.2454285	108.8907988	Xã	544	\N	\N
21730	Thị trấn Phù Mỹ	thi-tran-phu-my	14.1770135	109.0475121	Thị trấn	545	\N	\N
21733	Thị trấn Bình Dương	thi-tran-binh-duong	14.2925455	109.0795007	Thị trấn	545	\N	\N
21736	Xã Mỹ Đức	xa-my-duc	14.366053	109.10561	Xã	545	\N	\N
21739	Xã Mỹ Châu	xa-my-chau	14.3230564	109.0628744	Xã	545	\N	\N
21742	Xã Mỹ Thắng	xa-my-thang	14.3088536	109.1344926	Xã	545	\N	\N
21745	Xã Mỹ Lộc	xa-my-loc	14.3058746	109.0729058	Xã	545	\N	\N
21748	Xã Mỹ Lợi	xa-my-loi	14.2792726	109.131574	Xã	545	\N	\N
21751	Xã Mỹ An	xa-my-an	14.2623742	109.158275	Xã	545	\N	\N
21754	Xã Mỹ Phong	xa-my-phong	14.2167963	109.1160966	Xã	545	\N	\N
21757	Xã Mỹ Trinh	xa-my-trinh	14.2249918	109.055013	Xã	545	\N	\N
21760	Xã Mỹ Thọ	xa-my-tho	14.2239388	109.1523292	Xã	545	\N	\N
21763	Xã Mỹ Hòa	xa-my-hoa	14.1869043	109.0221512	Xã	545	\N	\N
21766	Xã Mỹ Thành	xa-my-thanh	14.1714514	109.1820586	Xã	545	\N	\N
21769	Xã Mỹ Chánh	xa-my-chanh	14.167818	109.10526	Xã	545	\N	\N
21772	Xã Mỹ Quang	xa-my-quang	14.1699178	109.0578192	Xã	545	\N	\N
21775	Xã Mỹ Hiệp	xa-my-hiep	14.1287799	109.026612	Xã	545	\N	\N
21778	Xã Mỹ Tài	xa-my-tai	14.1256741	109.0829375	Xã	545	\N	\N
21781	Xã Mỹ Cát	xa-my-cat	14.1348064	109.1424576	Xã	545	\N	\N
21784	Xã Mỹ Chánh Tây	xa-my-chanh-tay	14.167818	109.10526	Xã	545	\N	\N
21786	Thị trấn Vĩnh Thạnh	thi-tran-vinh-thanh	14.1136528	108.7823721	Thị trấn	546	\N	\N
21787	Xã Vĩnh Sơn	xa-vinh-son	14.3650605	108.675524	Xã	546	\N	\N
21790	Xã Vĩnh Kim	xa-vinh-kim	14.2793136	108.7482165	Xã	546	\N	\N
21796	Xã Vĩnh Hiệp	xa-vinh-hiep	14.1078759	108.7841652	Xã	546	\N	\N
21799	Xã Vĩnh Hảo	xa-vinh-hao	14.1078759	108.7841652	Xã	546	\N	\N
21801	Xã Vĩnh Hòa	xa-vinh-hoa	14.0370396	108.8183289	Xã	546	\N	\N
21802	Xã Vĩnh Thịnh	xa-vinh-thinh	14.0709658	108.794253	Xã	546	\N	\N
21804	Xã Vĩnh Thuận	xa-vinh-thuan	14.0940367	108.748189	Xã	546	\N	\N
21805	Xã Vĩnh Quang	xa-vinh-quang	14.055577	108.791899	Xã	546	\N	\N
21808	Thị trấn Phú Phong	thi-tran-phu-phong	13.9174816	108.9234812	Thị trấn	547	\N	\N
21811	Xã Bình Tân	xa-binh-tan	13.9669391	108.9648056	Xã	547	\N	\N
21814	Xã Tây Thuận	xa-tay-thuan	13.9900517	108.810589	Xã	547	\N	\N
21817	Xã Bình Thuận	xa-binh-thuan	13.9479428	108.8551484	Xã	547	\N	\N
21820	Xã Tây Giang	xa-tay-giang	13.9587346	108.8293219	Xã	547	\N	\N
21823	Xã Bình Thành	xa-binh-thanh	13.948728	108.854485	Xã	547	\N	\N
21826	Xã Tây An	xa-tay-an	13.95317	109.0033811	Xã	547	\N	\N
21829	Xã Bình Hòa	xa-binh-hoa	13.9234038	108.957424	Xã	547	\N	\N
21832	Xã Tây Bình	xa-tay-binh	13.9816884	108.9852442	Xã	547	\N	\N
21835	Xã Bình Tường	xa-binh-tuong	13.9186829	108.8647934	Xã	547	\N	\N
21838	Xã Tây Vinh	xa-tay-vinh	13.9259093	109.0153867	Xã	547	\N	\N
21841	Xã Vĩnh An	xa-vinh-an	13.8887623	108.82508	Xã	547	\N	\N
21844	Xã Tây Xuân	xa-tay-xuan	13.8980024	108.9456784	Xã	547	\N	\N
21847	Xã Bình Nghi	xa-binh-nghi	13.8874013	108.9827013	Xã	547	\N	\N
21850	Xã Tây Phú	xa-tay-phu	13.9040452	108.9089124	Xã	547	\N	\N
21853	Thị trấn Ngô Mây	thi-tran-ngo-may	14.0008748	109.0601808	Thị trấn	548	\N	\N
21856	Xã Cát Sơn	xa-cat-son	14.1540536	108.949399	Xã	548	\N	\N
21859	Xã Cát Minh	xa-cat-minh	14.1123391	109.1432677	Xã	548	\N	\N
21862	Xã Cát Khánh	xa-cat-khanh	14.1026793	109.1875402	Xã	548	\N	\N
21865	Xã Cát Tài	xa-cat-tai	14.1000115	109.1199666	Xã	548	\N	\N
21868	Xã Cát Lâm	xa-cat-lam	14.0714377	108.9960641	Xã	548	\N	\N
21871	Xã Cát Hanh	xa-cat-hanh	14.0556069	109.0516559	Xã	548	\N	\N
21874	Xã Cát Thành	xa-cat-thanh	14.1026793	109.1875402	Xã	548	\N	\N
21877	Xã Cát Trinh	xa-cat-trinh	13.9985854	109.0743115	Xã	548	\N	\N
21880	Xã Cát Hải	xa-cat-hai	14.0120417	109.2296297	Xã	548	\N	\N
21883	Xã Cát Hiệp	xa-cat-hiep	14.035724	109.0007868	Xã	548	\N	\N
21886	Xã Cát Nhơn	xa-cat-nhon	13.9655751	109.1468498	Xã	548	\N	\N
21889	Xã Cát Hưng	xa-cat-hung	13.9718912	109.1781955	Xã	548	\N	\N
21892	Xã Cát Tường	xa-cat-tuong	13.9552465	109.2403114	Xã	548	\N	\N
21895	Xã Cát Tân	xa-cat-tan	14.058324	108.277199	Xã	548	\N	\N
21898	Xã Cát Tiến	xa-cat-tien	13.9514977	109.2236831	Xã	548	\N	\N
21901	Xã Cát Thắng	xa-cat-thang	13.9552465	109.2403114	Xã	548	\N	\N
21904	Xã Cát Chánh	xa-cat-chanh	13.9197819	109.2385498	Xã	548	\N	\N
21907	Phường Bình Định	phuong-binh-dinh	13.8860211	109.1077389	Phường	549	\N	\N
21910	Phường Đập Đá	phuong-dap-da	13.9227714	109.0906471	Phường	549	\N	\N
21913	Xã Nhơn Mỹ	xa-nhon-my	13.927604	109.0393759	Xã	549	\N	\N
21916	Phường Nhơn Thành	phuong-nhon-thanh	13.9459647	109.0869316	Phường	549	\N	\N
21919	Xã Nhơn Hạnh	xa-nhon-hanh	13.9316165	109.1612478	Xã	549	\N	\N
21922	Xã Nhơn Hậu	xa-nhon-hau	13.9256859	109.0631531	Xã	549	\N	\N
21925	Xã Nhơn Phong	xa-nhon-phong	13.9310133	109.1344926	Xã	549	\N	\N
21928	Xã Nhơn An	xa-nhon-an	13.8641717	109.0690976	Xã	549	\N	\N
21931	Xã Nhơn Phúc	xa-nhon-phuc	13.8962152	109.0156	Xã	549	\N	\N
21934	Phường Nhơn Hưng	phuong-nhon-hung	13.90061	109.0988214	Phường	549	\N	\N
21937	Xã Nhơn Khánh	xa-nhon-khanh	13.8923898	109.0631531	Xã	549	\N	\N
21940	Xã Nhơn Lộc	xa-nhon-loc	13.8832055	109.0393759	Xã	549	\N	\N
21943	Phường Nhơn Hoà	phuong-nhon-hoa	13.863761	109.0978925	Phường	549	\N	\N
21946	Xã Nhơn Tân	xa-nhon-tan	13.8509555	109.0339315	Xã	549	\N	\N
21949	Xã Nhơn Thọ	xa-nhon-tho	13.8318463	109.0572086	Xã	549	\N	\N
21952	Thị trấn Tuy Phước	thi-tran-tuy-phuoc	13.8248692	109.1461365	Thị trấn	550	\N	\N
21955	Thị trấn Diêu Trì	thi-tran-dieu-tri	13.8101029	109.1553021	Thị trấn	550	\N	\N
21958	Xã Phước Thắng	xa-phuoc-thang	13.9122533	109.1962695	Xã	550	\N	\N
21961	Xã Phước Hưng	xa-phuoc-hung	13.9070775	109.1399735	Xã	550	\N	\N
21964	Xã Phước Quang	xa-phuoc-quang	13.9018413	109.1820366	Xã	550	\N	\N
21967	Xã Phước Hòa	xa-phuoc-hoa	13.8861269	109.1851141	Xã	550	\N	\N
21970	Xã Phước Sơn	xa-phuoc-son	13.8688025	109.2177365	Xã	550	\N	\N
21973	Xã Phước Hiệp	xa-phuoc-hiep	13.8684773	109.1351245	Xã	550	\N	\N
21976	Xã Phước Lộc	xa-phuoc-loc	13.8522711	109.1458262	Xã	550	\N	\N
21979	Xã Phước Nghĩa	xa-phuoc-nghia	13.8363795	109.1731396	Xã	550	\N	\N
21982	Xã Phước Thuận	xa-phuoc-thuan	13.8353029	109.1943237	Xã	550	\N	\N
21985	Xã Phước An	xa-phuoc-an	13.8124842	109.1194799	Xã	550	\N	\N
21988	Xã Phước Thành	xa-phuoc-thanh	13.7672143	109.095515	Xã	550	\N	\N
21991	Xã Phước Mỹ	xa-phuoc-my	13.6931288	109.1285472	Xã	540	\N	\N
21994	Thị trấn Vân Canh	thi-tran-van-canh	13.6319695	108.9918254	Thị trấn	551	\N	\N
21997	Xã Canh Liên	xa-canh-lien	13.601371	108.9163013	Xã	551	\N	\N
22000	Xã Canh Hiệp	xa-canh-hiep	13.6533788	109.00433	Xã	551	\N	\N
22003	Xã Canh Vinh	xa-canh-vinh	13.7327567	109.0768897	Xã	551	\N	\N
22006	Xã Canh Hiển	xa-canh-hien	13.6682025	109.0392484	Xã	551	\N	\N
22009	Xã Canh Thuận	xa-canh-thuan	13.5958533	108.982315	Xã	551	\N	\N
22012	Xã Canh Hòa	xa-canh-hoa	13.5664545	109.0104139	Xã	551	\N	\N
22015	Phường 1	phuong-1	13.081961	109.2995086	Phường	555	\N	\N
22018	Phường 8	phuong-8	13.0953454	109.2929341	Phường	555	\N	\N
22021	Phường 2	phuong-2	13.0876962	109.2965349	Phường	555	\N	\N
22024	Phường 9	phuong-9	13.1078231	109.2943412	Phường	555	\N	\N
22027	Phường 3	phuong-3	13.0863763	109.3047128	Phường	555	\N	\N
22030	Phường 4	phuong-4	13.0865475	109.311404	Phường	555	\N	\N
22033	Phường 5	phuong-5	13.0913034	109.3054141	Phường	555	\N	\N
22036	Phường 7	phuong-7	13.0984043	109.3159014	Phường	555	\N	\N
22039	Phường 6	phuong-6	13.0903391	109.3212428	Phường	555	\N	\N
22040	Phường Phú Thạnh	phuong-phu-thanh	13.0526038	109.3266466	Phường	555	\N	\N
22041	Phường Phú Đông	phuong-phu-dong	13.0639595	109.3324146	Phường	555	\N	\N
22042	Xã Hòa Kiến	xa-hoa-kien	13.1122852	109.2623849	Xã	555	\N	\N
22045	Xã Bình Kiến	xa-binh-kien	13.1253624	109.2870406	Xã	555	\N	\N
22048	Xã Bình Ngọc	xa-binh-ngoc	13.0779995	109.3049633	Xã	555	\N	\N
22051	Phường Xuân Phú	phuong-xuan-phu	13.4589857	109.2208975	Phường	557	\N	\N
22052	Xã Xuân Lâm	xa-xuan-lam	13.5141598	109.1523292	Xã	557	\N	\N
22053	Phường Xuân Thành	phuong-xuan-thanh	13.4744193	109.2355764	Phường	557	\N	\N
22054	Xã Xuân Hải	xa-xuan-hai	13.6402612	109.2229108	Xã	557	\N	\N
22057	Xã Xuân Lộc	xa-xuan-loc	13.6247991	109.1523292	Xã	557	\N	\N
22060	Xã Xuân Bình	xa-xuan-binh	13.5546338	109.1998972	Xã	557	\N	\N
22063	Xã Xuân Hòa	xa-xuan-hoa	13.5660204	109.2653113	Xã	557	\N	\N
22066	Xã Xuân Cảnh	xa-xuan-canh	13.5448533	109.2534171	Xã	557	\N	\N
22069	Xã Xuân Thịnh	xa-xuan-thinh	13.4987485	109.2772057	Xã	557	\N	\N
22072	Xã Xuân Phương	xa-xuan-phuong	13.5015786	109.2415233	Xã	557	\N	\N
22073	Phường Xuân Yên	phuong-xuan-yen	13.4589857	109.2208975	Phường	557	\N	\N
22075	Xã Xuân Thọ 1	xa-xuan-tho-1	13.4187963	109.1701666	Xã	557	\N	\N
22076	Phường Xuân Đài	phuong-xuan-dai	13.3942789	109.2712585	Phường	557	\N	\N
22078	Xã Xuân Thọ 2	xa-xuan-tho-2	13.3759359	109.2236831	Xã	557	\N	\N
22081	Thị trấn La Hai	thi-tran-la-hai	13.3826161	109.1079819	Thị trấn	558	\N	\N
22084	Xã Đa Lộc	xa-da-loc	13.539331	109.0675932	Xã	558	\N	\N
22087	Xã Phú Mỡ	xa-phu-mo	13.4083074	108.9502232	Xã	558	\N	\N
22090	Xã Xuân Lãnh	xa-xuan-lanh	13.48891	109.0304087	Xã	558	\N	\N
22093	Xã Xuân Long	xa-xuan-long	13.4331634	109.0572086	Xã	558	\N	\N
22096	Xã Xuân Quang 1	xa-xuan-quang-1	13.3843504	108.9739954	Xã	558	\N	\N
22099	Xã Xuân Sơn Bắc	xa-xuan-son-bac	13.3815256	109.1523292	Xã	558	\N	\N
22102	Xã Xuân Quang 2	xa-xuan-quang-2	13.3647256	109.0797919	Xã	558	\N	\N
22105	Xã Xuân Sơn Nam	xa-xuan-son-nam	13.3373468	109.1523292	Xã	558	\N	\N
22108	Xã Xuân Quang 3	xa-xuan-quang-3	13.3483369	109.0928489	Xã	558	\N	\N
22111	Xã Xuân Phước	xa-xuan-phuoc	13.2977443	109.0634894	Xã	558	\N	\N
22114	Thị trấn Chí Thạnh	thi-tran-chi-thanh	13.3119327	109.2161229	Thị trấn	559	\N	\N
22117	Xã An Dân	xa-an-dan	13.3497296	109.2058436	Xã	559	\N	\N
22120	Xã An Ninh Tây	xa-an-ninh-tay	13.31133	109.215103	Xã	559	\N	\N
22123	Xã An Ninh Đông	xa-an-ninh-dong	13.3243528	109.2706438	Xã	559	\N	\N
22126	Xã An Thạch	xa-an-thach	13.3346758	109.2240973	Xã	559	\N	\N
22129	Xã An Định	xa-an-dinh	13.2963907	109.1820586	Xã	559	\N	\N
22132	Xã An Nghiệp	xa-an-nghiep	13.2876474	109.141273	Xã	559	\N	\N
22135	Xã An Hải	xa-an-hai	13.297735	109.2355764	Xã	559	\N	\N
22138	Xã An Cư	xa-an-cu	13.2857724	109.2474701	Xã	559	\N	\N
22141	Xã An Xuân	xa-an-xuan	13.297735	109.2355764	Xã	559	\N	\N
22144	Xã An Lĩnh	xa-an-linh	13.2570098	109.171164	Xã	559	\N	\N
22147	Xã An Hòa	xa-an-hoa	13.2302901	109.284879	Xã	559	\N	\N
22150	Xã An Hiệp	xa-an-hiep	13.2435002	109.2236831	Xã	559	\N	\N
22153	Xã An Mỹ	xa-an-my	13.2983116	109.2352581	Xã	559	\N	\N
22156	Xã An Chấn	xa-an-chan	13.1858324	109.2878761	Xã	559	\N	\N
22159	Xã An Thọ	xa-an-tho	13.1824934	109.2368996	Xã	559	\N	\N
22162	Xã An Phú	xa-an-phu	13.1687824	109.2874109	Xã	555	\N	\N
22165	Thị trấn Củng Sơn	thi-tran-cung-son	13.0590883	108.9680522	Thị trấn	560	\N	\N
22168	Xã Phước Tân	xa-phuoc-tan	13.0881861	109.0928764	Xã	560	\N	\N
22171	Xã Sơn Hội	xa-son-hoi	13.1997863	108.9659429	Xã	560	\N	\N
22174	Xã Sơn Định	xa-son-dinh	13.1945062	109.0625856	Xã	560	\N	\N
22177	Xã Sơn Long	xa-son-long	13.1915725	109.1107114	Xã	560	\N	\N
22180	Xã Cà Lúi	xa-ca-lui	13.2116207	108.8942742	Xã	560	\N	\N
22183	Xã Sơn Phước	xa-son-phuoc	13.1420897	108.9467382	Xã	560	\N	\N
22186	Xã Sơn Xuân	xa-son-xuan	13.0881861	109.0928764	Xã	560	\N	\N
22189	Xã Sơn Nguyên	xa-son-nguyen	13.1156774	109.0215438	Xã	560	\N	\N
22192	Xã Eachà Rang	xa-eacha-rang	13.0939923	108.8893133	Xã	560	\N	\N
22195	Xã Krông Pa	xa-krong-pa	13.1217402	108.7957381	Xã	560	\N	\N
22198	Xã Suối Bạc	xa-suoi-bac	13.087107	108.9621091	Xã	560	\N	\N
22201	Xã Sơn Hà	xa-son-ha	13.0881861	109.0928764	Xã	560	\N	\N
22204	Xã Suối Trai	xa-suoi-trai	13.0433651	108.8860985	Xã	560	\N	\N
22207	Thị trấn Hai Riêng	thi-tran-hai-rieng	12.9822218	108.8907988	Thị trấn	561	\N	\N
22210	Xã Ea Lâm	xa-ea-lam	13.0718075	108.7712359	Xã	561	\N	\N
22213	Xã Đức Bình Tây	xa-duc-binh-tay	13.022744	108.9383377	Xã	561	\N	\N
22216	Xã Ea Bá	xa-ea-ba	13.0096086	108.8195012	Xã	561	\N	\N
22219	Xã Sơn Giang	xa-son-giang	12.9953242	109.0096562	Xã	561	\N	\N
22222	Xã Đức Bình Đông	xa-duc-binh-dong	13.019785	108.9601657	Xã	561	\N	\N
22225	Xã EaBar	xa-eabar	12.9790808	108.8973587	Xã	561	\N	\N
22228	Xã EaBia	xa-eabia	12.9790808	108.8973587	Xã	561	\N	\N
22231	Xã EaTrol	xa-eatrol	12.9059749	108.878915	Xã	561	\N	\N
22234	Xã Sông Hinh	xa-song-hinh	12.8072932	109.0215438	Xã	561	\N	\N
22237	Xã Ealy	xa-ealy	12.8786353	108.9502232	Xã	561	\N	\N
22240	Phường Phú Lâm	phuong-phu-lam	13.048735	109.3106048	Phường	555	\N	\N
22243	Xã Hòa Thành	xa-hoa-thanh	13.0334127	109.3017372	Xã	564	\N	\N
22246	Xã Hòa Hiệp Bắc	xa-hoa-hiep-bac	13.0178456	109.3506084	Xã	564	\N	\N
22249	Xã Sơn Thành Tây	xa-son-thanh-tay	12.9645478	109.0514859	Xã	562	\N	\N
22250	Xã Sơn Thành Đông	xa-son-thanh-dong	12.9834561	109.0964001	Xã	562	\N	\N
22252	Xã Hòa Bình 1	xa-hoa-binh-1	13.01689	109.274144	Xã	562	\N	\N
22255	Thị trấn Phú Thứ	thi-tran-phu-thu	13.0012163	109.2400366	Thị trấn	562	\N	\N
22258	Thị trấn Hoà Vinh	thi-tran-hoa-vinh	12.9966024	109.3299776	Thị trấn	564	\N	\N
22261	Thị trấn Hoà Hiệp Trung	thi-tran-hoa-hiep-trung	12.9953479	109.3645459	Thị trấn	564	\N	\N
22264	Xã Hòa Phong	xa-hoa-phong	12.9969501	109.2058436	Xã	562	\N	\N
22267	Xã Hòa Tân Đông	xa-hoa-tan-dong	12.9971163	109.2902846	Xã	564	\N	\N
22270	Xã Hòa Phú	xa-hoa-phu	12.9687573	109.19714	Xã	562	\N	\N
22273	Xã Hòa Tân Tây	xa-hoa-tan-tay	12.9962279	109.2625235	Xã	562	\N	\N
22276	Xã Hòa Đồng	xa-hoa-dong	12.9840419	109.2313153	Xã	562	\N	\N
22279	Xã Hòa Xuân Tây	xa-hoa-xuan-tay	13.0880607	109.0939493	Xã	564	\N	\N
22282	Xã Hòa Hiệp Nam	xa-hoa-hiep-nam	12.9731464	109.3922919	Xã	564	\N	\N
22285	Xã Hòa Mỹ Đông	xa-hoa-my-dong	12.9588954	109.2118053	Xã	562	\N	\N
22288	Xã Hòa Mỹ Tây	xa-hoa-my-tay	12.9433372	109.1929289	Xã	562	\N	\N
22291	Xã Hòa Xuân Đông	xa-hoa-xuan-dong	12.9411155	109.3604753	Xã	564	\N	\N
22294	Xã Hòa Thịnh	xa-hoa-thinh	12.9285815	109.1642208	Xã	562	\N	\N
22297	Xã Hòa Tâm	xa-hoa-tam	12.9580642	109.354527	Xã	564	\N	\N
22300	Xã Hòa Xuân Nam	xa-hoa-xuan-nam	12.8983329	109.3854498	Xã	564	\N	\N
22303	Xã Hòa Quang Bắc	xa-hoa-quang-bac	13.080784	109.2148097	Xã	563	\N	\N
22306	Xã Hòa Quang Nam	xa-hoa-quang-nam	13.0672792	109.2281895	Xã	563	\N	\N
22309	Xã Hòa Hội	xa-hoa-hoi	13.0881861	109.0928764	Xã	563	\N	\N
22312	Xã Hòa Trị	xa-hoa-tri	13.0812489	109.2518374	Xã	563	\N	\N
22315	Xã Hòa An	xa-hoa-an	13.0771441	109.2905873	Xã	563	\N	\N
22318	Xã Hòa Định Đông	xa-hoa-dinh-dong	13.024927	109.1998972	Xã	563	\N	\N
22319	Thị Trấn Phú Hoà	thi-tran-phu-hoa	13.0198763	109.1939509	Thị trấn	563	\N	\N
22321	Xã Hòa Định Tây	xa-hoa-dinh-tay	13.0285599	109.1523292	Xã	563	\N	\N
22324	Xã Hòa Thắng	xa-hoa-thang	13.0433025	109.2474701	Xã	563	\N	\N
22327	Phường Vĩnh Hòa	phuong-vinh-hoa	12.2985301	109.2094382	Phường	568	\N	\N
22330	Phường Vĩnh Hải	phuong-vinh-hai	12.2799158	109.1890576	Phường	568	\N	\N
22333	Phường Vĩnh Phước	phuong-vinh-phuoc	12.272228	109.198	Phường	568	\N	\N
22336	Phường Ngọc Hiệp	phuong-ngoc-hiep	12.256527	109.1733033	Phường	568	\N	\N
22339	Phường Vĩnh Thọ	phuong-vinh-tho	12.2665347	109.1984106	Phường	568	\N	\N
22342	Phường Xương Huân	phuong-xuong-huan	12.2558157	109.1954375	Phường	568	\N	\N
22345	Phường Vạn Thắng	phuong-van-thang	12.2529893	109.1872615	Phường	568	\N	\N
22348	Phường Vạn Thạnh	phuong-van-thanh	12.2555081	109.1902346	Phường	568	\N	\N
22351	Phường Phương Sài	phuong-phuong-sai	12.2517299	109.1857749	Phường	568	\N	\N
22354	Phường Phương Sơn	phuong-phuong-son	12.2514219	109.1805721	Phường	568	\N	\N
22357	Phường Phước Hải	phuong-phuoc-hai	12.2356159	109.1788435	Phường	568	\N	\N
22360	Phường Phước Tân	phuong-phuoc-tan	12.2450039	109.1842884	Phường	568	\N	\N
22363	Phường Lộc Thọ	phuong-loc-tho	12.2424377	109.1946511	Phường	568	\N	\N
22366	Phường Phước Tiến	phuong-phuoc-tien	12.2420564	109.1872615	Phường	568	\N	\N
22369	Phường Tân Lập	phuong-tan-lap	12.2390018	109.1917211	Phường	568	\N	\N
22372	Phường Phước Hòa	phuong-phuoc-hoa	12.2356161	109.1857364	Phường	568	\N	\N
22375	Phường Vĩnh Nguyên	phuong-vinh-nguyen	12.2057251	109.2757663	Phường	568	\N	\N
22378	Phường Phước Long	phuong-phuoc-long	12.2169414	109.1897678	Phường	568	\N	\N
22381	Phường Vĩnh Trường	phuong-vinh-truong	12.2025945	109.2051799	Phường	568	\N	\N
22384	Xã Vĩnh Lương	xa-vinh-luong	12.3372157	109.1981337	Xã	568	\N	\N
22387	Xã Vĩnh Phương	xa-vinh-phuong	12.2890317	109.1480177	Xã	568	\N	\N
22390	Xã Vĩnh Ngọc	xa-vinh-ngoc	12.2679865	109.1639634	Xã	568	\N	\N
22393	Xã Vĩnh Thạnh	xa-vinh-thanh	12.2625796	109.1509612	Xã	568	\N	\N
22396	Xã Vĩnh Trung	xa-vinh-trung	12.2573105	109.1318765	Xã	568	\N	\N
22399	Xã Vĩnh Hiệp	xa-vinh-hiep	12.2563085	109.1608	Xã	568	\N	\N
22402	Xã Vĩnh Thái	xa-vinh-thai	12.2299512	109.1609652	Xã	568	\N	\N
22405	Xã Phước Đồng	xa-phuoc-dong	12.1892006	109.1700843	Xã	568	\N	\N
22408	Phường Cam Nghĩa	phuong-cam-nghia	11.9277086	109.2236831	Phường	569	\N	\N
22411	Phường Cam Phúc Bắc	phuong-cam-phuc-bac	11.958731	109.1701666	Phường	569	\N	\N
22414	Phường Cam Phúc Nam	phuong-cam-phuc-nam	11.9390247	109.1790856	Phường	569	\N	\N
22417	Phường Cam Lộc	phuong-cam-loc	11.9306319	109.1434108	Phường	569	\N	\N
22420	Phường Cam Phú	phuong-cam-phu	11.9260271	109.1701666	Phường	569	\N	\N
22423	Phường Ba Ngòi	phuong-ba-ngoi	11.9075641	109.1226018	Phường	569	\N	\N
22426	Phường Cam Thuận	phuong-cam-thuan	11.9134563	109.1564671	Phường	569	\N	\N
22429	Phường Cam Lợi	phuong-cam-loi	11.9130229	109.1419244	Phường	569	\N	\N
22432	Phường Cam Linh	phuong-cam-linh	11.8971	109.1553021	Phường	569	\N	\N
22435	Xã Cam Tân	xa-cam-tan	12.127492	109.0988214	Xã	570	\N	\N
22438	Xã Cam Hòa	xa-cam-hoa	12.1249527	109.1344926	Xã	570	\N	\N
22441	Xã Cam Hải Đông	xa-cam-hai-dong	12.0602491	109.1998972	Xã	570	\N	\N
22444	Xã Cam Hải Tây	xa-cam-hai-tay	12.0904985	109.158275	Xã	570	\N	\N
22447	Xã Sơn Tân	xa-son-tan	12.0703653	109.0572086	Xã	570	\N	\N
22450	Xã Cam Hiệp Bắc	xa-cam-hiep-bac	12.0670017	109.1047663	Xã	570	\N	\N
22453	Thị trấn Cam Đức	thi-tran-cam-duc	12.0577502	109.158275	Thị trấn	570	\N	\N
22456	Xã Cam Hiệp Nam	xa-cam-hiep-nam	12.0283756	109.1107114	Xã	570	\N	\N
22459	Xã Cam Phước Tây	xa-cam-phuoc-tay	12.0065303	109.0334318	Xã	570	\N	\N
22462	Xã Cam Thành Bắc	xa-cam-thanh-bac	12.0241704	109.1701666	Xã	570	\N	\N
22465	Xã Cam An Bắc	xa-cam-an-bac	11.9813655	109.0809868	Xã	570	\N	\N
22468	Xã Cam Thành Nam	xa-cam-thanh-nam	11.9847344	109.1493564	Xã	569	\N	\N
22471	Xã Cam An Nam	xa-cam-an-nam	11.9729855	109.1226018	Xã	570	\N	\N
22474	Xã Cam Phước Đông	xa-cam-phuoc-dong	11.9192448	109.0334318	Xã	569	\N	\N
22477	Xã Cam Thịnh Tây	xa-cam-thinh-tay	11.878186	109.0750422	Xã	569	\N	\N
22480	Xã Cam Thịnh Đông	xa-cam-thinh-dong	11.8706655	109.1047663	Xã	569	\N	\N
22483	Xã Cam Lập	xa-cam-lap	11.8438989	109.1761126	Xã	569	\N	\N
22486	Xã Cam Bình	xa-cam-binh	11.8405717	109.2236831	Xã	569	\N	\N
22489	Thị trấn Vạn Giã	thi-tran-van-gia	12.6945781	109.2251697	Thị trấn	571	\N	\N
22492	Xã Đại Lãnh	xa-dai-lanh	12.8362689	109.3664237	Xã	571	\N	\N
22495	Xã Vạn Phước	xa-van-phuoc	12.8197205	109.295048	Xã	571	\N	\N
22498	Xã Vạn Long	xa-van-long	12.7945064	109.2653113	Xã	571	\N	\N
22501	Xã Vạn Bình	xa-van-binh	12.7829542	109.1998972	Xã	571	\N	\N
22504	Xã Vạn Thọ	xa-van-tho	12.7653507	109.3604753	Xã	571	\N	\N
22507	Xã Vạn Khánh	xa-van-khanh	12.7734355	109.2534171	Xã	571	\N	\N
22510	Xã Vạn Phú	xa-van-phu	12.7467327	109.1701666	Xã	571	\N	\N
22513	Xã Vạn Lương	xa-van-luong	12.7443497	109.1285472	Xã	571	\N	\N
22516	Xã Vạn Thắng	xa-van-thang	12.7117065	109.2712585	Xã	571	\N	\N
22519	Xã Vạn Thạnh	xa-van-thanh	12.6031852	109.4021154	Xã	571	\N	\N
22522	Xã Xuân Sơn	xa-xuan-son	12.6766813	109.1523292	Xã	571	\N	\N
22525	Xã Vạn Hưng	xa-van-hung	12.6310111	109.1761126	Xã	571	\N	\N
22528	Phường Ninh Hiệp	phuong-ninh-hiep	12.4917471	109.125682	Phường	572	\N	\N
22531	Xã Ninh Sơn	xa-ninh-son	12.6600125	109.0809868	Xã	572	\N	\N
22534	Xã Ninh Tây	xa-ninh-tay	12.591021	108.9739954	Xã	572	\N	\N
22537	Xã Ninh Thượng	xa-ninh-thuong	12.5958964	109.0572086	Xã	572	\N	\N
22540	Xã Ninh An	xa-ninh-an	12.5669485	109.1523292	Xã	572	\N	\N
22543	Phường Ninh Hải	phuong-ninh-hai	12.5776818	109.2296297	Phường	572	\N	\N
22546	Xã Ninh Thọ	xa-ninh-tho	12.5373427	109.1820586	Xã	572	\N	\N
22549	Xã Ninh Trung	xa-ninh-trung	12.4935499	109.1251534	Xã	572	\N	\N
22552	Xã Ninh Sim	xa-ninh-sim	12.5495617	109.0156	Xã	572	\N	\N
22555	Xã Ninh Xuân	xa-ninh-xuan	12.5081266	109.0572086	Xã	572	\N	\N
22558	Xã Ninh Thân	xa-ninh-than	12.5333699	109.0869316	Xã	572	\N	\N
22561	Phường Ninh Diêm	phuong-ninh-diem	12.5136671	109.2058436	Phường	572	\N	\N
22564	Xã Ninh Đông	xa-ninh-dong	12.5269199	109.1374653	Xã	572	\N	\N
22567	Phường Ninh Thủy	phuong-ninh-thuy	12.5110357	109.2415233	Phường	572	\N	\N
22570	Phường Ninh Đa	phuong-ninh-da	12.4952455	109.158275	Phường	572	\N	\N
22573	Xã Ninh Phụng	xa-ninh-phung	12.5071721	109.1077389	Xã	572	\N	\N
22576	Xã Ninh Bình	xa-ninh-binh	12.4886389	109.0988214	Xã	572	\N	\N
22579	Xã Ninh Phước	xa-ninh-phuoc	12.4705015	109.2712585	Xã	572	\N	\N
22582	Xã Ninh Phú	xa-ninh-phu	12.4520977	109.2236831	Xã	572	\N	\N
22585	Xã Ninh Tân	xa-ninh-tan	12.4238748	109.0096562	Xã	572	\N	\N
22588	Xã Ninh Quang	xa-ninh-quang	12.4705406	109.0839592	Xã	572	\N	\N
22591	Phường Ninh Giang	phuong-ninh-giang	12.4767204	109.1493564	Phường	572	\N	\N
22594	Phường Ninh Hà	phuong-ninh-ha	12.4522836	109.1463836	Phường	572	\N	\N
22597	Xã Ninh Hưng	xa-ninh-hung	12.4187022	109.0809868	Xã	572	\N	\N
22600	Xã Ninh Lộc	xa-ninh-loc	12.4211528	109.1226018	Xã	572	\N	\N
22603	Xã Ninh Ích	xa-ninh-ich	12.4009536	109.1672549	Xã	572	\N	\N
22606	Xã Ninh Vân	xa-ninh-van	12.3879604	109.2772057	Xã	572	\N	\N
22609	Thị trấn Khánh Vĩnh	thi-tran-khanh-vinh	12.2743753	108.9175387	Thị trấn	573	\N	\N
22612	Xã Khánh Hiệp	xa-khanh-hiep	12.4358676	108.8432656	Xã	573	\N	\N
22615	Xã Khánh Bình	xa-khanh-binh	12.4526758	108.9145675	Xã	573	\N	\N
22618	Xã Khánh Trung	xa-khanh-trung	12.39539	108.7957381	Xã	573	\N	\N
22621	Xã Khánh Đông	xa-khanh-dong	12.3800415	109.0096562	Xã	573	\N	\N
22624	Xã Khánh Thượng	xa-khanh-thuong	12.3414042	108.7838572	Xã	573	\N	\N
22627	Xã Khánh Nam	xa-khanh-nam	12.2950214	108.8967409	Xã	573	\N	\N
22630	Xã Sông Cầu	xa-song-cau	12.2385832	108.9205099	Xã	573	\N	\N
22633	Xã Giang Ly	xa-giang-ly	12.2452858	108.7482165	Xã	573	\N	\N
22636	Xã Cầu Bà	xa-cau-ba	12.2529041	108.8729732	Xã	573	\N	\N
22639	Xã Liên Sang	xa-lien-sang	12.1964651	108.8195012	Xã	573	\N	\N
22642	Xã Khánh Thành	xa-khanh-thanh	12.2150063	108.8670315	Xã	573	\N	\N
22645	Xã Khánh Phú	xa-khanh-phu	12.1561014	108.9264524	Xã	573	\N	\N
22648	Xã Sơn Thái	xa-son-thai	12.2014725	108.7482165	Xã	573	\N	\N
22651	Thị trấn Diên Khánh	thi-tran-dien-khanh	12.2616224	109.0958489	Thị trấn	574	\N	\N
22654	Xã Diên Lâm	xa-dien-lam	12.3126177	109.0334318	Xã	574	\N	\N
22657	Xã Diên Điền	xa-dien-dien	12.3074813	109.1047663	Xã	574	\N	\N
22660	Xã Diên Xuân	xa-dien-xuan	12.3227849	108.9680522	Xã	574	\N	\N
22663	Xã Diên Sơn	xa-dien-son	12.2932071	109.0750422	Xã	574	\N	\N
22666	Xã Diên Đồng	xa-dien-dong	12.2991807	108.9918254	Xã	574	\N	\N
22669	Xã Diên Phú	xa-dien-phu	12.2770826	109.1237538	Xã	574	\N	\N
22672	Xã Diên Thọ	xa-dien-tho	12.2663401	108.9918254	Xã	574	\N	\N
22675	Xã Diên Phước	xa-dien-phuoc	12.2650351	109.0482922	Xã	574	\N	\N
22678	Xã Diên Lạc	xa-dien-lac	12.2578596	109.0720699	Xã	574	\N	\N
22681	Xã Diên Tân	xa-dien-tan	12.2284624	108.985882	Xã	574	\N	\N
22684	Xã Diên Hòa	xa-dien-hoa	12.2486233	109.0482922	Xã	574	\N	\N
22687	Xã Diên Thạnh	xa-dien-thanh	12.2456414	109.089904	Xã	574	\N	\N
22690	Xã Diên Toàn	xa-dien-toan	12.2338516	109.1017938	Xã	574	\N	\N
22693	Xã Diên An	xa-dien-an	12.2435074	109.1196292	Xã	574	\N	\N
22696	Xã Diên Bình	xa-dien-binh	12.2309385	109.0661253	Xã	574	\N	\N
22699	Xã Diên Lộc	xa-dien-loc	12.2330637	109.0364038	Xã	574	\N	\N
22702	Xã Suối Hiệp	xa-suoi-hiep	12.2157794	109.0869316	Xã	574	\N	\N
22705	Xã Suối Tiên	xa-suoi-tien	12.2031967	109.0334318	Xã	574	\N	\N
22708	Xã Suối Cát	xa-suoi-cat	12.1925763	109.0653313	Xã	570	\N	\N
22711	Xã Suối Tân	xa-suoi-tan	12.1207855	109.0393759	Xã	570	\N	\N
22714	Thị trấn Tô Hạp	thi-tran-to-hap	11.9863042	108.932395	Thị trấn	575	\N	\N
22717	Xã Thành Sơn	xa-thanh-son	12.087055	108.8195012	Xã	575	\N	\N
22720	Xã Sơn Lâm	xa-son-lam	12.0458923	108.8610899	Xã	575	\N	\N
22723	Xã Sơn Hiệp	xa-son-hiep	12.041743	108.9205099	Xã	575	\N	\N
22726	Xã Sơn Bình	xa-son-binh	12.01063	108.8967409	Xã	575	\N	\N
22729	Xã Sơn Trung	xa-son-trung	12.0552157	108.9621091	Xã	575	\N	\N
22732	Xã Ba Cụm Bắc	xa-ba-cum-bac	11.9880298	108.985882	Xã	575	\N	\N
22735	Xã Ba Cụm Nam	xa-ba-cum-nam	11.9460308	108.9621091	Xã	575	\N	\N
22736	Thị trấn Trường Sa	thi-tran-truong-sa	14.058324	108.277199	Thị trấn	576	\N	\N
22737	Xã Song Tử Tây	xa-song-tu-tay	14.058324	108.277199	Xã	576	\N	\N
22738	Phường Đô Vinh	phuong-do-vinh	11.6367153	108.9442804	Phường	582	\N	\N
22739	Xã Sinh Tồn	xa-sinh-ton	14.058324	108.277199	Xã	576	\N	\N
22741	Phường Phước Mỹ	phuong-phuoc-my	11.5886804	108.9710238	Phường	582	\N	\N
22744	Phường Bảo An	phuong-bao-an	11.5852519	108.941309	Phường	582	\N	\N
22747	Phường Phủ Hà	phuong-phu-ha	11.5726267	108.9873678	Phường	582	\N	\N
22750	Phường Thanh Sơn	phuong-thanh-son	11.5722248	108.9933113	Phường	582	\N	\N
22753	Phường Mỹ Hương	phuong-my-huong	11.5651036	108.9881108	Phường	582	\N	\N
22756	Phường Tấn Tài	phuong-tan-tai	11.5540611	109.0007407	Phường	582	\N	\N
22759	Phường Kinh Dinh	phuong-kinh-dinh	11.560827	108.9910825	Phường	582	\N	\N
22762	Phường Đạo Long	phuong-dao-long	11.5510896	108.9843962	Phường	582	\N	\N
22765	Phường Đài Sơn	phuong-dai-son	11.5816357	108.9947972	Phường	582	\N	\N
22768	Phường Đông Hải	phuong-dong-hai	11.5426451	109.0289737	Phường	582	\N	\N
22771	Phường Mỹ Đông	phuong-my-dong	11.5478245	109.0126281	Phường	582	\N	\N
22774	Xã Thành Hải	xa-thanh-hai	11.6041855	108.9829103	Xã	582	\N	\N
22777	Phường Văn Hải	phuong-van-hai	11.5683208	108.9958379	Phường	582	\N	\N
22779	Phường Mỹ Bình	phuong-my-binh	11.5641248	109.0126281	Phường	582	\N	\N
22780	Phường Mỹ Hải	phuong-my-hai	11.5641248	109.0126281	Phường	582	\N	\N
22783	Xã Phước Bình	xa-phuoc-binh	11.9997596	108.7833595	Xã	584	\N	\N
22786	Xã Phước Hòa	xa-phuoc-hoa	11.85861	108.7719699	Xã	584	\N	\N
22789	Xã Phước Tân	xa-phuoc-tan	14.058324	108.277199	Xã	584	\N	\N
22792	Xã Phước Tiến	xa-phuoc-tien	11.8223988	108.8695925	Xã	584	\N	\N
23224	Xã Đông Hà	xa-dong-ha	11.034192	107.4617707	Xã	600	\N	\N
22795	Xã Phước Thắng	xa-phuoc-thang	11.8223988	108.8695925	Xã	584	\N	\N
22798	Xã Phước Thành	xa-phuoc-thanh	14.058324	108.277199	Xã	584	\N	\N
22801	Xã Phước Đại	xa-phuoc-dai	14.058324	108.277199	Xã	584	\N	\N
22804	Xã Phước Chính	xa-phuoc-chinh	11.8223988	108.8695925	Xã	584	\N	\N
22807	Xã Phước Trung	xa-phuoc-trung	14.058324	108.277199	Xã	584	\N	\N
22810	Thị trấn Tân Sơn	thi-tran-tan-son	11.7831006	108.7734616	Thị trấn	585	\N	\N
22813	Xã Lâm Sơn	xa-lam-son	11.8286643	108.6966886	Xã	585	\N	\N
22816	Xã Lương Sơn	xa-luong-son	11.7916989	108.7635304	Xã	585	\N	\N
22819	Xã Quảng Sơn	xa-quang-son	11.7457721	108.7007007	Xã	585	\N	\N
22822	Xã Mỹ Sơn	xa-my-son	11.6720152	108.863581	Xã	585	\N	\N
22825	Xã Hòa Sơn	xa-hoa-son	11.7101233	108.7645514	Xã	585	\N	\N
22828	Xã Ma Nới	xa-ma-noi	11.6579106	108.6903074	Xã	585	\N	\N
22831	Xã Nhơn Sơn	xa-nhon-son	11.6087572	108.9287621	Xã	585	\N	\N
22834	Thị trấn Khánh Hải	thi-tran-khanh-hai	11.6101222	109.0156	Thị trấn	586	\N	\N
22837	Xã Phước Chiến	xa-phuoc-chien	14.058324	108.277199	Xã	588	\N	\N
22840	Xã Công Hải	xa-cong-hai	11.7818806	109.1285472	Xã	588	\N	\N
22843	Xã Phước Kháng	xa-phuoc-khang	14.058324	108.277199	Xã	588	\N	\N
22846	Xã Vĩnh Hải	xa-vinh-hai	11.6893745	109.1741837	Xã	586	\N	\N
22849	Xã Lợi Hải	xa-loi-hai	11.7533327	109.0690976	Xã	588	\N	\N
22852	Xã Phương Hải	xa-phuong-hai	11.6381358	109.0488327	Xã	586	\N	\N
22853	Xã Bắc Sơn	xa-bac-son	14.058324	108.277199	Xã	588	\N	\N
22855	Xã Tân Hải	xa-tan-hai	11.6448576	109.0245158	Xã	586	\N	\N
22856	Xã Bắc Phong	xa-bac-phong	11.6715069	109.0332877	Xã	588	\N	\N
22858	Xã Xuân Hải	xa-xuan-hai	11.653526	108.993005	Xã	586	\N	\N
22861	Xã Hộ Hải	xa-ho-hai	11.6218037	109.0037125	Xã	586	\N	\N
22864	Xã Tri Hải	xa-tri-hai	11.603224	109.0500784	Xã	586	\N	\N
22867	Xã Nhơn Hải	xa-nhon-hai	11.6094844	109.1047663	Xã	586	\N	\N
22868	Xã Thanh Hải	xa-thanh-hai	11.5813411	109.1294674	Xã	586	\N	\N
22870	Thị trấn Phước Dân	thi-tran-phuoc-dan	11.5396482	108.932395	Thị trấn	587	\N	\N
22873	Xã Phước Sơn	xa-phuoc-son	11.6139926	108.8982264	Xã	587	\N	\N
22876	Xã Phước Thái	xa-phuoc-thai	11.5790409	108.8922843	Xã	587	\N	\N
22879	Xã Phước Hậu	xa-phuoc-hau	11.5795582	108.9249668	Xã	587	\N	\N
22882	Xã Phước Thuận	xa-phuoc-thuan	11.5721515	108.9817128	Xã	587	\N	\N
22885	Xã Phước Hà	xa-phuoc-ha	14.058324	108.277199	Xã	589	\N	\N
22888	Xã An Hải	xa-an-hai	11.5247815	108.9918254	Xã	587	\N	\N
22891	Xã Phước Hữu	xa-phuoc-huu	11.5152662	108.8907988	Xã	587	\N	\N
22894	Xã Phước Hải	xa-phuoc-hai	11.5104841	108.9621091	Xã	587	\N	\N
22897	Xã Phước Nam	xa-phuoc-nam	11.4717025	108.9157587	Xã	589	\N	\N
22898	Xã Phước Ninh	xa-phuoc-ninh	11.4764182	108.9112096	Xã	589	\N	\N
22900	Xã Nhị Hà	xa-nhi-ha	11.4350554	108.823247	Xã	589	\N	\N
22903	Xã Phước Dinh	xa-phuoc-dinh	11.4157966	108.9700842	Xã	589	\N	\N
22906	Xã Phước Minh	xa-phuoc-minh	11.432181	108.8937163	Xã	589	\N	\N
22909	Xã Phước Diêm	xa-phuoc-diem	11.5226322	108.9262696	Xã	589	\N	\N
22910	Xã Cà Ná	xa-ca-na	14.058324	108.277199	Xã	589	\N	\N
22912	Xã Phước Vinh	xa-phuoc-vinh	11.6064914	108.9086252	Xã	587	\N	\N
22915	Phường Mũi Né	phuong-mui-ne	10.9332105	108.2871837	Phường	593	\N	\N
22918	Phường Hàm Tiến	phuong-ham-tien	10.955306	108.2247568	Phường	593	\N	\N
22921	Phường Phú Hài	phuong-phu-hai	10.9401893	108.1639746	Phường	593	\N	\N
22924	Phường Phú Thủy	phuong-phu-thuy	10.9383013	108.1113804	Phường	593	\N	\N
22927	Phường Phú Tài	phuong-phu-tai	10.9342636	108.0865424	Phường	593	\N	\N
22930	Phường Phú Trinh	phuong-phu-trinh	10.9338116	108.0971968	Phường	593	\N	\N
22933	Phường Xuân An	phuong-xuan-an	10.9472206	108.1065318	Phường	593	\N	\N
22936	Phường Thanh Hải	phuong-thanh-hai	10.9355303	108.1324906	Phường	593	\N	\N
22939	Phường Bình Hưng	phuong-binh-hung	10.9308743	108.1049918	Phường	593	\N	\N
22942	Phường Đức Nghĩa	phuong-duc-nghia	10.9270368	108.0939529	Phường	593	\N	\N
22945	Phường Lạc Đạo	phuong-lac-dao	10.9216164	108.0939529	Phường	593	\N	\N
22948	Phường Đức Thắng	phuong-duc-thang	10.9232435	108.1006226	Phường	593	\N	\N
22951	Phường Hưng Long	phuong-hung-long	10.9227025	108.1095156	Phường	593	\N	\N
22954	Phường Đức Long	phuong-duc-long	10.9168936	108.0843171	Phường	593	\N	\N
22957	Xã Thiện Nghiệp	xa-thien-nghiep	10.9819522	108.2512602	Xã	593	\N	\N
22960	Xã Phong Nẫm	xa-phong-nam	10.9505285	108.0865424	Xã	593	\N	\N
22963	Xã Tiến Lợi	xa-tien-loi	10.9234517	108.0714917	Xã	593	\N	\N
22966	Xã Tiến Thành	xa-tien-thanh	10.8385772	108.0389013	Xã	593	\N	\N
22969	Thị trấn Liên Hương	thi-tran-lien-huong	11.2172009	108.7185184	Thị trấn	595	\N	\N
22972	Thị trấn Phan Rí Cửa	thi-tran-phan-ri-cua	11.1765442	108.5640943	Thị trấn	595	\N	\N
22975	Xã Phan Dũng	xa-phan-dung	11.4774567	108.6413145	Xã	595	\N	\N
22978	Xã Phong Phú	xa-phong-phu	11.2601583	108.6413145	Xã	595	\N	\N
22981	Xã Vĩnh Hảo	xa-vinh-hao	11.3085312	108.747338	Xã	595	\N	\N
22984	Xã Vĩnh Tân	xa-vinh-tan	11.3462211	108.8195012	Xã	595	\N	\N
22987	Xã Phú Lạc	xa-phu-lac	11.2671654	108.7007007	Xã	595	\N	\N
22990	Xã Phước Thể	xa-phuoc-the	11.2590421	108.7422767	Xã	595	\N	\N
22993	Xã Hòa Minh	xa-hoa-minh	11.2039192	108.587875	Xã	595	\N	\N
22996	Xã Chí Công	xa-chi-cong	11.2066754	108.6294384	Xã	595	\N	\N
22999	Xã Bình Thạnh	xa-binh-thanh	11.2036185	108.6769451	Xã	595	\N	\N
23002	Xã Hòa Phú	xa-hoa-phu	11.1664648	108.5374117	Xã	595	\N	\N
23005	Thị trấn Chợ Lầu	thi-tran-cho-lau	11.1506898	108.4869555	Thị trấn	596	\N	\N
23008	Xã Phan Sơn	xa-phan-son	11.4081694	108.3198121	Xã	596	\N	\N
23011	Xã Phan Lâm	xa-phan-lam	11.4464917	108.428331	Xã	596	\N	\N
23014	Xã Bình An	xa-binh-an	11.3492097	108.439474	Xã	596	\N	\N
23017	Xã Phan Điền	xa-phan-dien	11.2551834	108.3801314	Xã	596	\N	\N
23020	Xã Hải Ninh	xa-hai-ninh	11.2657995	108.4691492	Xã	596	\N	\N
23023	Xã Sông Lũy	xa-song-luy	11.2510858	108.273341	Xã	596	\N	\N
23026	Xã Phan Tiến	xa-phan-tien	11.2788206	108.1784455	Xã	596	\N	\N
23029	Xã Sông Bình	xa-song-binh	11.2698206	108.3207992	Xã	596	\N	\N
23032	Thị trấn Lương Sơn	thi-tran-luong-son	11.1918424	108.3623707	Thị trấn	596	\N	\N
23035	Xã Phan Hòa	xa-phan-hoa	11.2031587	108.558182	Xã	596	\N	\N
23038	Xã Phan Thanh	xa-phan-thanh	11.2354898	108.4335393	Xã	596	\N	\N
23041	Xã Hồng Thái	xa-hong-thai	11.1956011	108.463214	Xã	596	\N	\N
23044	Xã Phan Hiệp	xa-phan-hiep	11.2551834	108.3801314	Xã	596	\N	\N
23047	Xã Bình Tân	xa-binh-tan	11.2076152	108.273341	Xã	596	\N	\N
23050	Xã Phan Rí Thành	xa-phan-ri-thanh	11.191063	108.5344435	Xã	596	\N	\N
23053	Xã Hòa Thắng	xa-hoa-thang	11.1017027	108.4038672	Xã	596	\N	\N
23056	Xã Hồng Phong	xa-hong-phong	11.0448892	108.2960593	Xã	596	\N	\N
23059	Thị trấn Ma Lâm	thi-tran-ma-lam	11.0510655	108.1058102	Thị trấn	597	\N	\N
23062	Thị trấn Phú Long	thi-tran-phu-long	11.1002516	108.1229782	Thị trấn	597	\N	\N
23065	Xã La Dạ	xa-la-da	11.2582024	107.942082	Xã	597	\N	\N
23068	Xã Đông Tiến	xa-dong-tien	14.058324	108.277199	Xã	597	\N	\N
23071	Xã Thuận Hòa	xa-thuan-hoa	11.2222852	108.144542	Xã	597	\N	\N
23074	Xã Đông Giang	xa-dong-giang	14.058324	108.277199	Xã	597	\N	\N
23077	Xã Hàm Phú	xa-ham-phu	11.1518854	108.087654	Xã	597	\N	\N
23080	Xã Hồng Liêm	xa-hong-liem	11.1557085	108.2450241	Xã	597	\N	\N
23083	Xã Thuận Minh	xa-thuan-minh	11.0887387	108.04488	Xã	597	\N	\N
23086	Xã Hồng Sơn	xa-hong-son	11.0887541	108.1879393	Xã	597	\N	\N
23089	Xã Hàm Trí	xa-ham-tri	11.1561124	108.146797	Xã	597	\N	\N
23092	Xã Hàm Đức	xa-ham-duc	11.048018	108.1708369	Xã	597	\N	\N
23095	Xã Hàm Liêm	xa-ham-liem	11.0052029	108.065314	Xã	597	\N	\N
23098	Xã Hàm Chính	xa-ham-chinh	11.0158618	108.1250703	Xã	597	\N	\N
23101	Xã Hàm Hiệp	xa-ham-hiep	10.9723764	108.04301	Xã	597	\N	\N
23104	Xã Hàm Thắng	xa-ham-thang	10.977265	108.12505	Xã	597	\N	\N
23107	Xã Đa Mi	xa-da-mi	11.3329378	107.879121	Xã	597	\N	\N
23110	Thị trấn Thuận Nam	thi-tran-thuan-nam	10.8415724	107.8702347	Thị trấn	598	\N	\N
23113	Xã Mỹ Thạnh	xa-my-thanh	14.058324	108.277199	Xã	598	\N	\N
23116	Xã Hàm Cần	xa-ham-can	11.0556254	107.935279	Xã	598	\N	\N
23119	Xã Mương Mán	xa-muong-man	10.968849	108.0039516	Xã	598	\N	\N
23122	Xã Hàm Thạnh	xa-ham-thanh	10.9765534	107.922915	Xã	598	\N	\N
23125	Xã Hàm Kiệm	xa-ham-kiem	10.9205889	108.0005007	Xã	598	\N	\N
23128	Xã Hàm Cường	xa-ham-cuong	10.9023806	107.9413323	Xã	598	\N	\N
23131	Xã Hàm Mỹ	xa-ham-my	10.9291626	108.0417076	Xã	598	\N	\N
23134	Xã Tân Lập	xa-tan-lap	10.843753	107.8193291	Xã	598	\N	\N
23137	Xã Hàm Minh	xa-ham-minh	10.8524149	107.9175829	Xã	598	\N	\N
23140	Xã Thuận Quí	xa-thuan-qui	10.7705541	107.9997243	Xã	598	\N	\N
23143	Xã Tân Thuận	xa-tan-thuan	10.7751397	107.893932	Xã	598	\N	\N
23146	Xã Tân Thành	xa-tan-thanh	10.7214968	107.9592991	Xã	598	\N	\N
23149	Thị trấn Lạc Tánh	thi-tran-lac-tanh	11.0906029	107.6792469	Thị trấn	599	\N	\N
23152	Xã Bắc Ruộng	xa-bac-ruong	11.2055394	107.70682	Xã	599	\N	\N
23155	Xã Măng Tố	xa-mang-to	11.2098484	107.703645	Xã	599	\N	\N
23158	Xã Nghị Đức	xa-nghi-duc	11.2385643	107.683184	Xã	599	\N	\N
23161	Xã La Ngâu	xa-la-ngau	11.1686714	107.7828678	Xã	599	\N	\N
23164	Xã Huy Khiêm	xa-huy-khiem	11.1749564	107.726556	Xã	599	\N	\N
23167	Xã Đức Tân	xa-duc-tan	11.2213136	107.6836384	Xã	599	\N	\N
23170	Xã Đức Phú	xa-duc-phu	11.2513645	107.6565742	Xã	599	\N	\N
23173	Xã Đồng Kho	xa-dong-kho	11.1376269	107.7340132	Xã	599	\N	\N
23176	Xã Gia An	xa-gia-an	11.1469675	107.6244915	Xã	599	\N	\N
23179	Xã Đức Bình	xa-duc-binh	11.1113336	107.7414148	Xã	599	\N	\N
23182	Xã Gia Huynh	xa-gia-huynh	10.9866816	107.5409006	Xã	599	\N	\N
23185	Xã Đức Thuận	xa-duc-thuan	11.0833693	107.6968718	Xã	599	\N	\N
23188	Xã Suối Kiết	xa-suoi-kiet	10.9530097	107.650388	Xã	599	\N	\N
23191	Thị trấn Võ Xu	thi-tran-vo-xu	11.1875001	107.5666299	Thị trấn	600	\N	\N
23194	Thị trấn Đức Tài	thi-tran-duc-tai	11.1492449	107.5060291	Thị trấn	600	\N	\N
23197	Xã Đa Kai	xa-da-kai	11.2737854	107.5493076	Xã	600	\N	\N
23200	Xã Sùng Nhơn	xa-sung-nhon	11.2333793	107.5919395	Xã	600	\N	\N
23203	Xã Mê Pu	xa-me-pu	11.2421264	107.627451	Xã	600	\N	\N
23206	Xã Nam Chính	xa-nam-chinh	11.1839271	107.5534739	Xã	600	\N	\N
23209	Xã Đức Chính	xa-duc-chinh	11.1794259	107.5287628	Xã	600	\N	\N
23212	Xã Đức Hạnh	xa-duc-hanh	11.1340159	107.5002738	Xã	600	\N	\N
23215	Xã Đức Tín	xa-duc-tin	11.1532974	107.4736016	Xã	600	\N	\N
23218	Xã Vũ Hoà	xa-vu-hoa	11.1556193	107.5712266	Xã	600	\N	\N
23221	Xã Tân Hà	xa-tan-ha	11.0731563	107.4969989	Xã	600	\N	\N
23227	Xã Trà Tân	xa-tra-tan	11.0637026	107.4757625	Xã	600	\N	\N
23230	Thị trấn Tân Minh	thi-tran-tan-minh	10.8432911	107.6348498	Thị trấn	601	\N	\N
23231	Phường Phước Hội	phuong-phuoc-hoi	10.6579694	107.7735621	Phường	594	\N	\N
23232	Phường Phước Lộc	phuong-phuoc-loc	10.6540084	107.7729963	Phường	594	\N	\N
23234	Phường Tân Thiện	phuong-tan-thien	10.6669012	107.7547383	Phường	594	\N	\N
23235	Phường Tân An	phuong-tan-an	10.6885568	107.7547383	Phường	594	\N	\N
23236	Thị trấn Tân Nghĩa	thi-tran-tan-nghia	10.8233418	107.7304049	Thị trấn	601	\N	\N
23237	Phường Bình Tân	phuong-binh-tan	10.6667874	107.7799066	Phường	594	\N	\N
23239	Xã Sông Phan	xa-song-phan	10.8717086	107.728092	Xã	601	\N	\N
23242	Xã Tân Phúc	xa-tan-phuc	10.8541965	107.6570475	Xã	601	\N	\N
23245	Xã Tân Hải	xa-tan-hai	10.7403793	107.8406158	Xã	594	\N	\N
23246	Xã Tân Tiến	xa-tan-tien	10.7417746	107.8169229	Xã	594	\N	\N
23248	Xã Tân Bình	xa-tan-binh	10.7171286	107.775465	Xã	594	\N	\N
23251	Xã Tân Đức	xa-tan-duc	10.8583696	107.5860213	Xã	601	\N	\N
23254	Xã Tân Thắng	xa-tan-thang	10.6299609	107.5978577	Xã	601	\N	\N
23255	Xã Thắng Hải	xa-thang-hai	10.5987684	107.5878614	Xã	601	\N	\N
23257	Xã Tân Hà	xa-tan-ha	10.766022	107.680727	Xã	601	\N	\N
23260	Xã Tân Xuân	xa-tan-xuan	10.7226637	107.680727	Xã	601	\N	\N
23266	Xã Sơn Mỹ	xa-son-my	10.6576658	107.680727	Xã	601	\N	\N
23268	Xã Tân Phước	xa-tan-phuoc	10.639063	107.7243588	Xã	594	\N	\N
23272	Xã Ngũ Phụng	xa-ngu-phung	10.5313904	108.9353663	Xã	602	\N	\N
23275	Xã Long Hải	xa-long-hai	10.5471497	108.941309	Xã	602	\N	\N
23278	Xã Tam Thanh	xa-tam-thanh	10.509666	108.9420569	Xã	602	\N	\N
23281	Phường Quang Trung	phuong-quang-trung	14.3595466	107.9967892	Phường	608	\N	\N
23284	Phường Duy Tân	phuong-duy-tan	14.3686753	108.0024734	Phường	608	\N	\N
23287	Phường Quyết Thắng	phuong-quyet-thang	14.3498289	108.0025773	Phường	608	\N	\N
23290	Phường Trường Chinh	phuong-truong-chinh	14.368187	108.0196266	Phường	608	\N	\N
23293	Phường Thắng Lợi	phuong-thang-loi	14.353471	108.0205394	Phường	608	\N	\N
23296	Phường Ngô Mây	phuong-ngo-may	14.3799971	107.9726556	Phường	608	\N	\N
23299	Phường Thống Nhất	phuong-thong-nhat	14.3457141	108.011755	Phường	608	\N	\N
23302	Phường Lê Lợi	phuong-le-loi	14.3308996	107.9944416	Phường	608	\N	\N
23305	Phường Nguyễn Trãi	phuong-nguyen-trai	14.3382936	107.9887932	Phường	608	\N	\N
23308	Phường Trần Hưng Đạo	phuong-tran-hung-dao	14.3008805	107.9936998	Phường	608	\N	\N
23311	Xã Đắk Cấm	xa-dak-cam	14.3894583	108.0093854	Xã	608	\N	\N
23314	Xã Kroong	xa-kroong	14.389172	107.8853042	Xã	608	\N	\N
23317	Xã Ngọk Bay	xa-ngok-bay	14.3857944	107.9424816	Xã	608	\N	\N
23320	Xã Vinh Quang	xa-vinh-quang	14.4037719	107.9727738	Xã	608	\N	\N
23323	Xã Đắk Blà	xa-dak-bla	14.3718358	108.0471048	Xã	608	\N	\N
23326	Xã Ia Chim	xa-ia-chim	14.3120287	107.9274229	Xã	608	\N	\N
23327	Xã Đăk Năng	xa-dak-nang	14.3547151	107.9092804	Xã	608	\N	\N
23329	Xã Đoàn Kết	xa-doan-ket	14.329762	107.9518766	Xã	608	\N	\N
23332	Xã Chư Hreng	xa-chu-hreng	14.3015354	108.0167069	Xã	608	\N	\N
23335	Xã Đắk Rơ Wa	xa-dak-ro-wa	14.3388364	108.040747	Xã	608	\N	\N
23338	Xã Hòa Bình	xa-hoa-binh	14.2810196	107.9909811	Xã	608	\N	\N
23341	Thị trấn Đắk Glei	thi-tran-dak-glei	15.0318066	107.7517775	Thị trấn	610	\N	\N
23344	Xã Đắk Plô	xa-dak-plo	14.058324	108.277199	Xã	610	\N	\N
23347	Xã Đắk Man	xa-dak-man	15.2139122	107.728092	Xã	610	\N	\N
23350	Xã Đắk Nhoong	xa-dak-nhoong	15.0594698	107.6734618	Xã	610	\N	\N
23353	Xã Đắk Pék	xa-dak-pek	15.1018792	107.7273624	Xã	610	\N	\N
23356	Xã Đắk Choong	xa-dak-choong	15.1668892	107.83133	Xã	610	\N	\N
23359	Xã Xốp	xa-xop	14.058324	108.277199	Xã	610	\N	\N
23362	Xã Mường Hoong	xa-muong-hoong	15.1515231	107.9413323	Xã	610	\N	\N
23365	Xã Ngọc Linh	xa-ngoc-linh	15.0691666	107.975	Xã	610	\N	\N
23368	Xã Đắk Long	xa-dak-long	14.9652733	107.5978577	Xã	610	\N	\N
23371	Xã Đắk KRoong	xa-dak-kroong	14.9905762	107.7044085	Xã	610	\N	\N
23374	Xã Đắk Môn	xa-dak-mon	14.8744212	107.7007033	Xã	610	\N	\N
23377	Thị trấn Plei Cần	thi-tran-plei-can	14.7043324	107.6984879	Thị trấn	611	\N	\N
23380	Xã Đắk Ang	xa-dak-ang	14.864015	107.7399345	Xã	611	\N	\N
23383	Xã Đắk Dục	xa-dak-duc	14.8387	107.63337	Xã	611	\N	\N
23386	Xã Đắk Nông	xa-dak-nong	14.7955784	107.6096947	Xã	611	\N	\N
23389	Xã Đắk Xú	xa-dak-xu	14.72625	107.64103	Xã	611	\N	\N
23392	Xã Đắk Kan	xa-dak-kan	14.6084244	107.7044085	Xã	611	\N	\N
23395	Xã Pờ Y	xa-po-y	14.6625503	107.5860213	Xã	611	\N	\N
23398	Xã Sa Loong	xa-sa-loong	14.5605584	107.5978577	Xã	611	\N	\N
23401	Thị trấn Đắk Tô	thi-tran-dak-to	14.6613479	107.8169229	Thị trấn	612	\N	\N
23404	Xã Ngọk Lây	xa-ngok-lay	14.9657971	108.0124469	Xã	617	\N	\N
23407	Xã Đắk Na	xa-dak-na	14.979195	107.8465394	Xã	617	\N	\N
23410	Xã Măng Ri	xa-mang-ri	14.963675	107.932992	Xã	617	\N	\N
23413	Xã Ngok Yêu	xa-ngok-yeu	14.865315	108.08571	Xã	617	\N	\N
23416	Xã Đắk Sao	xa-dak-sao	14.9136267	107.8228459	Xã	617	\N	\N
23417	Xã Đắk Rơ Ông	xa-dak-ro-ong	14.8648788	107.8702347	Xã	617	\N	\N
23419	Xã Đắk Tơ Kan	xa-dak-to-kan	14.8138498	107.8761588	Xã	617	\N	\N
23422	Xã Tu Mơ Rông	xa-tu-mo-rong	14.8797451	107.9650353	Xã	617	\N	\N
23425	Xã Đắk Hà	xa-dak-ha	14.7918022	107.9413323	Xã	617	\N	\N
23427	Xã Đắk Rơ Nga	xa-dak-ro-nga	14.73834	107.754259	Xã	612	\N	\N
23428	Xã Ngọk Tụ	xa-ngok-tu	14.7132653	107.7991545	Xã	612	\N	\N
23430	Xã Đắk Trăm	xa-dak-tram	14.7708091	107.852463	Xã	612	\N	\N
23431	Xã Văn Lem	xa-van-lem	14.7356684	107.8828568	Xã	612	\N	\N
23434	Xã Kon Đào	xa-kon-dao	14.7095233	107.8465394	Xã	612	\N	\N
23437	Xã Tân Cảnh	xa-tan-canh	14.058324	108.277199	Xã	612	\N	\N
23440	Xã Diên Bình	xa-dien-binh	14.6005876	107.8761588	Xã	612	\N	\N
23443	Xã Pô Kô	xa-po-ko	14.5767315	107.8228459	Xã	612	\N	\N
23446	Xã Tê Xăng	xa-te-xang	14.9205	107.9472579	Xã	617	\N	\N
23449	Xã Văn Xuôi	xa-van-xuoi	14.8964712	108.0361555	Xã	617	\N	\N
23452	Xã Đắk Nên	xa-dak-nen	14.9624088	108.2849018	Xã	613	\N	\N
23455	Xã Đắk Ring	xa-dak-ring	14.9306673	108.262219	Xã	613	\N	\N
23458	Xã Măng Buk	xa-mang-buk	14.8746594	108.1665855	Xã	613	\N	\N
23461	Xã Đắk Tăng	xa-dak-tang	14.7810573	108.214028	Xã	613	\N	\N
23464	Xã Ngok Tem	xa-ngok-tem	14.7694567	108.3563972	Xã	613	\N	\N
23467	Xã Pờ Ê	xa-po-e	14.7372856	108.5010529	Xã	613	\N	\N
23470	Xã Măng Cành	xa-mang-canh	14.6734582	108.2970692	Xã	613	\N	\N
23473	Xã Đắk Long	xa-dak-long	14.6012757	108.2854986	Xã	613	\N	\N
23476	Xã Hiếu	xa-hieu	14.6562454	108.4313138	Xã	613	\N	\N
23479	Thị trấn Đắk Rve	thi-tran-dak-rve	14.542919	108.2496145	Thị trấn	614	\N	\N
23482	Xã Đắk Kôi	xa-dak-koi	14.6503733	108.1665855	Xã	614	\N	\N
23485	Xã Đắk Tơ Lung	xa-dak-to-lung	14.5505047	108.154726	Xã	614	\N	\N
23488	Xã Đắk Ruồng	xa-dak-ruong	14.4366872	108.1784455	Xã	614	\N	\N
23491	Xã Đắk Pne	xa-dak-pne	14.4719851	108.2970692	Xã	614	\N	\N
23494	Xã Đắk Tờ Re	xa-dak-to-re	14.4199352	108.1072924	Xã	614	\N	\N
23497	Xã Tân Lập	xa-tan-lap	14.4552934	108.2258897	Xã	614	\N	\N
23500	Thị trấn Đắk Hà	thi-tran-dak-ha	14.5174513	107.9354068	Thị trấn	615	\N	\N
23503	Xã Đắk PXi	xa-dak-pxi	14.7066153	108.024301	Xã	615	\N	\N
23504	Xã Đăk Long	xa-dak-long	14.6303919	107.9250772	Xã	615	\N	\N
23506	Xã Đắk HRing	xa-dak-hring	14.6122703	107.9413323	Xã	615	\N	\N
23509	Xã Đắk Ui	xa-dak-ui	14.616907	108.024301	Xã	615	\N	\N
23510	Xã Đăk Ngọk	xa-dak-ngok	14.5307229	107.9401105	Xã	615	\N	\N
23512	Xã Đắk Mar	xa-dak-mar	14.541729	107.9117062	Xã	615	\N	\N
23515	Xã Ngok Wang	xa-ngok-wang	14.4964517	107.9887402	Xã	615	\N	\N
23518	Xã Ngok Réo	xa-ngok-reo	14.4908439	108.059866	Xã	615	\N	\N
23521	Xã Hà Mòn	xa-ha-mon	14.4744876	107.9117062	Xã	615	\N	\N
23524	Xã Đắk La	xa-dak-la	14.4539351	107.9487652	Xã	615	\N	\N
23527	Thị trấn Sa Thầy	thi-tran-sa-thay	14.4022419	107.7961932	Thị trấn	616	\N	\N
23530	Xã Rơ Kơi	xa-ro-koi	14.508352	107.6925674	Xã	616	\N	\N
23533	Xã Sa Nhơn	xa-sa-nhon	14.4682886	107.775465	Xã	616	\N	\N
23534	Xã Hơ Moong	xa-ho-moong	14.4851801	107.8465394	Xã	616	\N	\N
23535	Xã Ia Dal	xa-ia-dal	14.058324	108.277199	Xã	618	\N	\N
23536	Xã Mô Rai	xa-mo-rai	14.2295288	107.5268471	Xã	616	\N	\N
23537	Xã Ia Dom	xa-ia-dom	14.058324	108.277199	Xã	618	\N	\N
23538	Xã Ia Tơi	xa-ia-toi	14.058324	108.277199	Xã	618	\N	\N
23539	Xã Sa Sơn	xa-sa-son	14.4028707	107.7517775	Xã	616	\N	\N
23542	Xã Sa Nghĩa	xa-sa-nghia	14.4197851	107.8228459	Xã	616	\N	\N
23545	Xã Sa Bình	xa-sa-binh	14.3670846	107.852463	Xã	616	\N	\N
23548	Xã Ya Xiêr	xa-ya-xier	14.3562301	107.775465	Xã	616	\N	\N
23551	Xã Ya Tăng	xa-ya-tang	14.3241261	107.8287691	Xã	616	\N	\N
23554	Xã Ya ly	xa-ya-ly	14.2805633	107.7399345	Xã	616	\N	\N
23557	Phường Yên Đỗ	phuong-yen-do	13.9862001	107.9915051	Phường	622	\N	\N
23560	Phường Diên Hồng	phuong-dien-hong	13.976935	107.9933078	Phường	622	\N	\N
23563	Phường Ia Kring	phuong-ia-kring	13.96503	107.9918102	Phường	622	\N	\N
23566	Phường Hội Thương	phuong-hoi-thuong	13.9759416	108.0057792	Phường	622	\N	\N
23569	Phường Hội Phú	phuong-hoi-phu	13.9661571	108.0066654	Phường	622	\N	\N
23570	Phường Phù Đổng	phuong-phu-dong	13.9758165	108.015941	Phường	622	\N	\N
23572	Phường Hoa Lư	phuong-hoa-lu	13.9875054	108.0136938	Phường	622	\N	\N
23575	Phường Tây Sơn	phuong-tay-son	13.9839849	108.0021413	Phường	622	\N	\N
23578	Phường Thống Nhất	phuong-thong-nhat	14.0105147	107.993433	Phường	622	\N	\N
23579	Phường Đống Đa	phuong-dong-da	14.0184489	107.9886013	Phường	622	\N	\N
23581	Phường Trà Bá	phuong-tra-ba	13.9706272	108.0249592	Phường	622	\N	\N
23582	Phường Thắng Lợi	phuong-thang-loi	13.9749463	108.0373987	Phường	622	\N	\N
23584	Phường Yên Thế	phuong-yen-the	14.0313568	107.9941313	Phường	622	\N	\N
23586	Phường Chi Lăng	phuong-chi-lang	13.9501782	108.0132301	Phường	622	\N	\N
23587	Xã Chư HDrông	xa-chu-hdrong	13.9394369	108.0096919	Xã	622	\N	\N
23590	Xã Biển Hồ	xa-bien-ho	14.0365666	108.0132122	Xã	622	\N	\N
23593	Xã Tân Sơn	xa-tan-son	14.0608301	108.0260382	Xã	622	\N	\N
23596	Xã Trà Đa	xa-tra-da	14.0126568	108.0396796	Xã	622	\N	\N
23599	Xã Chư Á	xa-chu-a	13.9724635	108.0486674	Xã	622	\N	\N
23602	Xã An Phú	xa-an-phu	13.9826953	108.0769443	Xã	622	\N	\N
23605	Xã Diên Phú	xa-dien-phu	13.9476851	107.9943702	Xã	622	\N	\N
23608	Xã Ia Kênh	xa-ia-kenh	13.901187	107.9763429	Xã	622	\N	\N
23611	Xã Gào	xa-gao	13.885123	107.9108714	Xã	622	\N	\N
23614	Phường An Bình	phuong-an-binh	14.0279256	108.6888227	Phường	623	\N	\N
23617	Phường Tây Sơn	phuong-tay-son	13.9562876	108.6465499	Phường	623	\N	\N
23620	Phường An Phú	phuong-an-phu	13.9516044	108.6696226	Phường	623	\N	\N
23623	Phường An Tân	phuong-an-tan	13.9566912	108.6672055	Phường	623	\N	\N
23626	Xã Tú An	xa-tu-an	14.0617431	108.6747181	Xã	623	\N	\N
23627	Xã Xuân An	xa-xuan-an	14.0279256	108.6888227	Xã	623	\N	\N
23629	Xã Cửu An	xa-cuu-an	14.0217889	108.7222305	Xã	623	\N	\N
23630	Phường An Phước	phuong-an-phuoc	13.9552985	108.6480175	Phường	623	\N	\N
23632	Xã Song An	xa-song-an	13.979626	108.7103519	Xã	623	\N	\N
23633	Phường Ngô Mây	phuong-ngo-may	13.9749284	108.7002234	Phường	623	\N	\N
23635	Xã Thành An	xa-thanh-an	14.0046091	108.658387	Xã	623	\N	\N
23638	Thị trấn KBang	thi-tran-kbang	14.1433539	108.6027185	Thị trấn	625	\N	\N
23641	Xã Kon Pne	xa-kon-pne	14.3612555	108.3274735	Xã	625	\N	\N
23644	Xã Đăk Roong	xa-dak-roong	14.4122608	108.4580207	Xã	625	\N	\N
23647	Xã Sơn Lang	xa-son-lang	14.058324	108.277199	Xã	625	\N	\N
23650	Xã KRong	xa-krong	14.3039129	108.4862136	Xã	625	\N	\N
23653	Xã Sơ Pai	xa-so-pai	14.254258	108.566353	Xã	625	\N	\N
23656	Xã Lơ Ku	xa-lo-ku	14.1534129	108.5025368	Xã	625	\N	\N
23659	Xã Đông	xa-dong	14.1096225	108.615336	Xã	625	\N	\N
23660	Xã Đak SMar	xa-dak-smar	14.058324	108.277199	Xã	625	\N	\N
23662	Xã Nghĩa An	xa-nghia-an	14.101451	108.6479949	Xã	625	\N	\N
23665	Xã Tơ Tung	xa-to-tung	14.0443982	108.524797	Xã	625	\N	\N
23668	Xã Kông Lơng Khơng	xa-kong-long-khong	14.0545169	108.5641267	Xã	625	\N	\N
23671	Xã Kông Pla	xa-kong-pla	14.058324	108.277199	Xã	625	\N	\N
23674	Xã Đăk HLơ	xa-dak-hlo	14.0579741	108.6346341	Xã	625	\N	\N
23677	Thị trấn Đăk Đoa	thi-tran-dak-doa	13.9867812	108.1102567	Thị trấn	626	\N	\N
23680	Xã Hà Đông	xa-ha-dong	14.058324	108.277199	Xã	626	\N	\N
23683	Xã Đăk Sơmei	xa-dak-somei	14.1907722	108.1784455	Xã	626	\N	\N
23684	Xã Đăk Krong	xa-dak-krong	14.1293006	108.1072924	Xã	626	\N	\N
23686	Xã Hải Yang	xa-hai-yang	14.1200909	108.2258897	Xã	626	\N	\N
23689	Xã Kon Gang	xa-kon-gang	14.0809777	108.154726	Xã	626	\N	\N
23692	Xã Hà Bầu	xa-ha-bau	14.0599339	108.0657939	Xã	626	\N	\N
23695	Xã Nam Yang	xa-nam-yang	14.057197	108.1013637	Xã	626	\N	\N
23698	Xã K' Dang	xa-k-dang	13.9994292	108.1743858	Xã	626	\N	\N
23701	Xã H' Neng	xa-h-neng	13.9902397	108.1435154	Xã	626	\N	\N
23704	Xã Tân Bình	xa-tan-binh	13.98661	108.1487964	Xã	626	\N	\N
23707	Xã Glar	xa-glar	13.9489472	108.1310083	Xã	626	\N	\N
23710	Xã A Dơk	xa-a-dok	13.935396	108.0895066	Xã	626	\N	\N
23713	Xã Trang	xa-trang	13.9007283	108.1784455	Xã	626	\N	\N
23714	Xã HNol	xa-hnol	13.9299523	108.1837852	Xã	626	\N	\N
23716	Xã Ia Pết	xa-ia-pet	13.8838742	108.1072924	Xã	626	\N	\N
23719	Xã Ia Băng	xa-ia-bang	13.8669858	108.0361555	Xã	626	\N	\N
23722	Thị trấn Phú Hòa	thi-tran-phu-hoa	14.1118832	107.9709613	Thị trấn	627	\N	\N
23725	Xã Hà Tây	xa-ha-tay	14.2959702	108.1191501	Xã	627	\N	\N
23728	Xã Ia Khươl	xa-ia-khuol	14.2036694	108.0124469	Xã	627	\N	\N
23731	Xã Ia Phí	xa-ia-phi	14.2333506	107.9176312	Xã	627	\N	\N
23734	Thị trấn Ia Ly	thi-tran-ia-ly	14.058324	108.277199	Thị trấn	627	\N	\N
23737	Xã Ia Mơ Nông	xa-ia-mo-nong	14.1874115	107.7873095	Xã	627	\N	\N
23738	Xã Ia Kreng	xa-ia-kreng	14.058324	108.277199	Xã	627	\N	\N
23740	Xã Đăk Tơ Ver	xa-dak-to-ver	14.1930307	108.07765	Xã	627	\N	\N
23743	Xã Hòa Phú	xa-hoa-phu	14.1626202	107.9650353	Xã	627	\N	\N
23746	Xã Chư Đăng Ya	xa-chu-dang-ya	14.1329671	108.059866	Xã	627	\N	\N
23749	Xã Ia Ka	xa-ia-ka	14.1287873	107.8228459	Xã	627	\N	\N
23752	Xã Ia Nhin	xa-ia-nhin	14.1079592	107.8761588	Xã	627	\N	\N
23755	Xã Nghĩa Hòa	xa-nghia-hoa	14.1043407	107.9235563	Xã	627	\N	\N
23758	Xã Chư Jôr	xa-chu-jor	14.0961625	108.0302282	Xã	627	\N	\N
23761	Xã Nghĩa Hưng	xa-nghia-hung	14.0877255	107.9946667	Xã	627	\N	\N
23764	Thị trấn Ia Kha	thi-tran-ia-kha	13.9645426	107.852463	Thị trấn	628	\N	\N
23767	Xã Ia Sao	xa-ia-sao	14.0545224	107.9176312	Xã	628	\N	\N
23768	Xã Ia Yok	xa-ia-yok	14.0545224	107.9176312	Xã	628	\N	\N
23770	Xã Ia Hrung	xa-ia-hrung	14.0496521	107.8346924	Xã	628	\N	\N
23771	Xã Ia Bă	xa-ia-ba	14.0411696	107.8557859	Xã	628	\N	\N
23773	Xã Ia Khai	xa-ia-khai	14.0192086	107.6452085	Xã	628	\N	\N
23776	Xã Ia KRai	xa-ia-krai	13.972884	107.653656	Xã	628	\N	\N
23778	Xã Ia Grăng	xa-ia-grang	13.9106938	107.7517775	Xã	628	\N	\N
23779	Xã Ia Tô	xa-ia-to	13.9777012	107.7517775	Xã	628	\N	\N
23782	Xã Ia O	xa-ia-o	13.9815382	107.5505152	Xã	628	\N	\N
23785	Xã Ia Dêr	xa-ia-der	13.982909	107.9502632	Xã	628	\N	\N
23788	Xã Ia Chia	xa-ia-chia	13.8783315	107.5860213	Xã	628	\N	\N
23791	Xã Ia Pếch	xa-ia-pech	13.9241342	107.8702347	Xã	628	\N	\N
23794	Thị trấn Kon Dơng	thi-tran-kon-dong	14.0452728	108.255546	Thị trấn	629	\N	\N
23797	Xã Ayun	xa-ayun	13.6951948	108.1725154	Xã	629	\N	\N
23798	Xã Đak Jơ Ta	xa-dak-jo-ta	14.058324	108.277199	Xã	629	\N	\N
23799	Xã Đak Ta Ley	xa-dak-ta-ley	14.0519998	108.3304608	Xã	629	\N	\N
23800	Xã Hà Ra	xa-ha-ra	14.025757	108.3897739	Xã	629	\N	\N
23803	Xã Đăk Yă	xa-dak-ya	14.0251666	108.2767137	Xã	629	\N	\N
23806	Xã Đăk Djrăng	xa-dak-djrang	14.002034	108.2400513	Xã	629	\N	\N
23809	Xã Lơ Pang	xa-lo-pang	13.9366564	108.2637019	Xã	629	\N	\N
23812	Xã Kon Thụp	xa-kon-thup	13.8655321	108.2651848	Xã	629	\N	\N
23815	Xã Đê Ar	xa-de-ar	13.7757704	108.2014254	Xã	629	\N	\N
23818	Xã Kon Chiêng	xa-kon-chieng	13.7923768	108.2755654	Xã	629	\N	\N
23821	Xã Đăk Trôi	xa-dak-troi	13.7664805	108.2503559	Xã	629	\N	\N
23824	Thị trấn Kông Chro	thi-tran-kong-chro	13.776609	108.525539	Thị trấn	630	\N	\N
23827	Xã Chư Krêy	xa-chu-krey	13.8660518	108.4387322	Xã	630	\N	\N
23830	Xã An Trung	xa-an-trung	13.8486898	108.4832458	Xã	630	\N	\N
23833	Xã Kông Yang	xa-kong-yang	13.8507898	108.5455744	Xã	630	\N	\N
23836	Xã Đăk Tơ Pang	xa-dak-to-pang	13.8362256	108.5926491	Xã	630	\N	\N
23839	Xã SRó	xa-sro	13.6850823	108.658387	Xã	630	\N	\N
23840	Xã Đắk Kơ Ning	xa-dak-ko-ning	13.7037218	108.5700636	Xã	630	\N	\N
23842	Xã Đăk Song	xa-dak-song	13.6656413	108.7077534	Xã	630	\N	\N
23843	Xã Đăk Pling	xa-dak-pling	14.058324	108.277199	Xã	630	\N	\N
23845	Xã Yang Trung	xa-yang-trung	13.7932207	108.5173768	Xã	630	\N	\N
23846	Xã Đăk Pơ Pho	xa-dak-po-pho	14.058324	108.277199	Xã	630	\N	\N
23848	Xã Ya Ma	xa-ya-ma	13.7037218	108.5700636	Xã	630	\N	\N
23851	Xã Chơ Long	xa-cho-long	13.727018	108.4209284	Xã	630	\N	\N
23854	Xã Yang Nam	xa-yang-nam	13.676892	108.5129247	Xã	630	\N	\N
23857	Thị trấn Chư Ty	thi-tran-chu-ty	13.7986831	107.6964962	Thị trấn	631	\N	\N
23860	Xã Ia Dơk	xa-ia-dok	13.8695652	107.7044085	Xã	631	\N	\N
23863	Xã Ia Krêl	xa-ia-krel	13.8437211	107.7517775	Xã	631	\N	\N
23866	Xã Ia Din	xa-ia-din	13.8401928	107.7991545	Xã	631	\N	\N
23869	Xã Ia Kla	xa-ia-kla	13.8284214	107.6570475	Xã	631	\N	\N
23872	Xã Ia Dom	xa-ia-dom	13.8027679	107.5505152	Xã	631	\N	\N
23875	Xã Ia Lang	xa-ia-lang	13.7732709	107.7991545	Xã	631	\N	\N
23878	Xã Ia Kriêng	xa-ia-krieng	13.7562287	107.728092	Xã	631	\N	\N
23881	Xã Ia Pnôn	xa-ia-pnon	13.7185807	107.63337	Xã	631	\N	\N
23884	Xã Ia Nan	xa-ia-nan	13.7220435	107.5860213	Xã	631	\N	\N
23887	Thị trấn Chư Prông	thi-tran-chu-prong	13.7439275	107.893932	Thị trấn	632	\N	\N
23888	Xã Ia Kly	xa-ia-kly	14.058324	108.277199	Xã	632	\N	\N
23890	Xã Bình Giáo	xa-binh-giao	13.8366547	107.8465394	Xã	632	\N	\N
23893	Xã Ia Drăng	xa-ia-drang	13.7697485	107.8465394	Xã	632	\N	\N
23896	Xã Thăng Hưng	xa-thang-hung	13.8270873	107.8998566	Xã	632	\N	\N
23899	Xã Bàu Cạn	xa-bau-can	13.8467191	107.9354068	Xã	632	\N	\N
23902	Xã Ia Phìn	xa-ia-phin	13.7849623	107.9413323	Xã	632	\N	\N
23905	Xã Ia Băng	xa-ia-bang	13.8088177	107.9946667	Xã	632	\N	\N
23908	Xã Ia Tôr	xa-ia-tor	13.7386191	107.9650353	Xã	632	\N	\N
23911	Xã Ia Boòng	xa-ia-boong	13.6618129	107.7991545	Xã	632	\N	\N
23914	Xã Ia O	xa-ia-o	13.7123946	107.7932319	Xã	632	\N	\N
23917	Xã Ia Púch	xa-ia-puch	13.6139223	107.6925674	Xã	632	\N	\N
23920	Xã Ia Me	xa-ia-me	13.6565652	107.8702347	Xã	632	\N	\N
23923	Xã Ia Vê	xa-ia-ve	13.6477708	107.9887402	Xã	632	\N	\N
23924	Xã Ia Bang	xa-ia-bang	13.8088177	107.9946667	Xã	632	\N	\N
23926	Xã Ia Pia	xa-ia-pia	13.6470484	107.9235563	Xã	632	\N	\N
23929	Xã Ia Ga	xa-ia-ga	13.5589823	107.8346924	Xã	632	\N	\N
23932	Xã Ia Lâu	xa-ia-lau	13.5007467	107.8702347	Xã	632	\N	\N
23935	Xã Ia Piơr	xa-ia-pior	13.4117963	107.8702347	Xã	632	\N	\N
23938	Xã Ia Mơ	xa-ia-mo	13.5008386	107.71625	Xã	632	\N	\N
23941	Thị trấn Chư Sê	thi-tran-chu-se	13.7141088	108.0663864	Thị trấn	633	\N	\N
23942	Thị trấn Nhơn Hoà	thi-tran-nhon-hoa	13.5517242	108.0835783	Thị trấn	639	\N	\N
23944	Xã Ia Tiêm	xa-ia-tiem	13.8275283	108.042083	Xã	633	\N	\N
23945	Xã Chư Pơng	xa-chu-pong	13.7760519	108.059866	Xã	633	\N	\N
23946	Xã Bar Măih	xa-bar-maih	13.8393011	108.1072924	Xã	633	\N	\N
23947	Xã Bờ Ngoong	xa-bo-ngoong	13.7929467	108.1310083	Xã	633	\N	\N
23950	Xã Ia Glai	xa-ia-glai	13.7401918	108.0183739	Xã	633	\N	\N
23953	Xã AL Bá	xa-al-ba	13.7261478	108.1310083	Xã	633	\N	\N
23954	Xã Kông HTok	xa-kong-htok	14.058324	108.277199	Xã	633	\N	\N
23956	Xã AYun	xa-ayun	13.6951948	108.1725154	Xã	633	\N	\N
23959	Xã Ia HLốp	xa-ia-hlop	13.6664934	108.0361555	Xã	633	\N	\N
23962	Xã Ia Blang	xa-ia-blang	13.6578244	108.07765	Xã	633	\N	\N
23965	Xã Dun	xa-dun	13.6593844	108.1310083	Xã	633	\N	\N
23966	Xã Ia Pal	xa-ia-pal	13.6555977	108.1000326	Xã	633	\N	\N
23968	Xã H Bông	xa-h-bong	13.6197781	108.214028	Xã	633	\N	\N
23971	Xã Ia Hrú	xa-ia-hru	13.5926567	108.1310083	Xã	639	\N	\N
23972	Xã Ia Rong	xa-ia-rong	13.6179093	108.1142878	Xã	639	\N	\N
23974	Xã Ia Dreng	xa-ia-dreng	13.602203	108.07765	Xã	639	\N	\N
23977	Xã Ia Ko	xa-ia-ko	13.6219829	108.0361555	Xã	633	\N	\N
23978	Xã Ia Hla	xa-ia-hla	13.5485149	107.9768875	Xã	639	\N	\N
23980	Xã Chư Don	xa-chu-don	14.058324	108.277199	Xã	639	\N	\N
23983	Xã Ia Phang	xa-ia-phang	13.5019781	108.154726	Xã	639	\N	\N
23986	Xã Ia Le	xa-ia-le	13.4525882	108.0717219	Xã	639	\N	\N
23987	Xã Ia BLứ	xa-ia-blu	14.058324	108.277199	Xã	639	\N	\N
23989	Xã Hà Tam	xa-ha-tam	13.9911747	108.4580207	Xã	634	\N	\N
23992	Xã An Thành	xa-an-thanh	13.9760614	108.5619004	Xã	634	\N	\N
23995	Thị trấn Đak Pơ	thi-tran-dak-po	13.9775162	108.5522531	Thị trấn	634	\N	\N
23998	Xã Yang Bắc	xa-yang-bac	13.921114	108.5708058	Xã	634	\N	\N
24001	Xã Cư An	xa-cu-an	13.9619323	108.6304988	Xã	634	\N	\N
24004	Xã Tân An	xa-tan-an	13.9602036	108.6131093	Xã	634	\N	\N
24007	Xã Phú An	xa-phu-an	13.9215668	108.6221787	Xã	634	\N	\N
24010	Xã Ya Hội	xa-ya-hoi	13.9031948	108.6925345	Xã	634	\N	\N
24013	Xã Pờ Tó	xa-po-to	13.6192949	108.4097227	Xã	635	\N	\N
24016	Xã Chư Răng	xa-chu-rang	13.5750894	108.4462359	Xã	635	\N	\N
24019	Xã Ia KDăm	xa-ia-kdam	14.058324	108.277199	Xã	635	\N	\N
24022	Xã Kim Tân	xa-kim-tan	13.5644123	108.461248	Xã	635	\N	\N
24025	Xã Chư Mố	xa-chu-mo	14.058324	108.277199	Xã	635	\N	\N
24028	Xã Ia Tul	xa-ia-tul	13.3941802	108.4921492	Xã	635	\N	\N
24031	Xã Ia Ma Rơn	xa-ia-ma-ron	14.058324	108.277199	Xã	635	\N	\N
24034	Xã Ia Broăi	xa-ia-broai	14.058324	108.277199	Xã	635	\N	\N
24037	Xã Ia Trok	xa-ia-trok	14.058324	108.277199	Xã	635	\N	\N
24041	Phường Cheo Reo	phuong-cheo-reo	13.4215437	108.4292281	Phường	624	\N	\N
24042	Phường Hòa Bình	phuong-hoa-binh	13.4093347	108.4354234	Phường	624	\N	\N
24043	Thị trấn Phú Thiện	thi-tran-phu-thien	13.5390703	108.3267319	Thị trấn	638	\N	\N
24044	Phường Đoàn Kết	phuong-doan-ket	13.4008921	108.430572	Phường	624	\N	\N
24045	Phường Sông Bờ	phuong-song-bo	13.3944576	108.4424414	Phường	624	\N	\N
24046	Xã Chư A Thai	xa-chu-a-thai	13.6023993	108.2970692	Xã	638	\N	\N
24048	Xã Ayun Hạ	xa-ayun-ha	13.6376675	108.2347863	Xã	638	\N	\N
24049	Xã Ia Ake	xa-ia-ake	13.5369568	108.2919597	Xã	638	\N	\N
24052	Xã Ia Sol	xa-ia-sol	13.491341	108.2970692	Xã	638	\N	\N
24055	Xã Ia Piar	xa-ia-piar	13.4265252	108.273341	Xã	638	\N	\N
24058	Xã Ia Peng	xa-ia-peng	13.4586974	108.3623306	Xã	638	\N	\N
24060	Xã Chrôh Pơnan	xa-chroh-ponan	14.058324	108.277199	Xã	638	\N	\N
24061	Xã Ia Hiao	xa-ia-hiao	13.3803838	108.2970692	Xã	638	\N	\N
24064	Xã Ia RBol	xa-ia-rbol	13.3868744	108.4142522	Xã	624	\N	\N
24065	Xã Chư Băh	xa-chu-bah	13.4000735	108.4347861	Xã	624	\N	\N
24067	Xã Ia Yeng	xa-ia-yeng	13.5114951	108.3979331	Xã	638	\N	\N
24070	Xã Ia RTô	xa-ia-rto	13.4017423	108.433377	Xã	624	\N	\N
24073	Xã Ia Sao	xa-ia-sao	13.2589696	108.439474	Xã	624	\N	\N
24076	Thị trấn Phú Túc	thi-tran-phu-tuc	13.1956813	108.6877976	Thị trấn	637	\N	\N
24079	Xã Ia RSai	xa-ia-rsai	13.3379936	108.622016	Xã	637	\N	\N
24082	Xã Ia RSươm	xa-ia-rsuom	13.3203621	108.5871636	Xã	637	\N	\N
24085	Xã Chư Gu	xa-chu-gu	13.2367681	108.6391369	Xã	637	\N	\N
24088	Xã Đất Bằng	xa-dat-bang	13.248906	108.8052785	Xã	637	\N	\N
24091	Xã Ia Mláh	xa-ia-mlah	13.2448753	108.7677156	Xã	637	\N	\N
24094	Xã Chư Drăng	xa-chu-drang	13.2385483	108.6108827	Xã	637	\N	\N
24097	Xã Phú Cần	xa-phu-can	13.2160038	108.6726891	Xã	637	\N	\N
24100	Xã Ia HDreh	xa-ia-hdreh	13.1282033	108.6993062	Xã	637	\N	\N
24103	Xã Ia RMok	xa-ia-rmok	13.1556692	108.6932769	Xã	637	\N	\N
24106	Xã Chư Ngọc	xa-chu-ngoc	13.2160038	108.6726891	Xã	637	\N	\N
24109	Xã Uar	xa-uar	13.26752	108.599752	Xã	637	\N	\N
24112	Xã Chư Rcăm	xa-chu-rcam	13.3031405	108.6071717	Xã	637	\N	\N
24115	Xã Krông Năng	xa-krong-nang	13.0786109	108.7482816	Xã	637	\N	\N
24118	Phường Tân Lập	phuong-tan-lap	12.6842257	108.0756036	Phường	643	\N	\N
24121	Phường Tân Hòa	phuong-tan-hoa	12.6870111	108.0991317	Phường	643	\N	\N
24124	Phường Tân An	phuong-tan-an	12.6992279	108.0734046	Phường	643	\N	\N
24127	Phường Thống Nhất	phuong-thong-nhat	12.6823231	108.0380078	Phường	643	\N	\N
24130	Phường Thành Nhất	phuong-thanh-nhat	12.6817606	108.0063082	Phường	643	\N	\N
24133	Phường Thắng Lợi	phuong-thang-loi	12.686212	108.0465286	Phường	643	\N	\N
24136	Phường Tân Lợi	phuong-tan-loi	12.7077811	108.0563653	Phường	643	\N	\N
24139	Phường Thành Công	phuong-thanh-cong	12.6863648	108.0364466	Phường	643	\N	\N
24142	Phường Tân Thành	phuong-tan-thanh	12.6684948	108.0260956	Phường	643	\N	\N
24145	Phường Tân Tiến	phuong-tan-tien	12.6764429	108.0336423	Phường	643	\N	\N
24148	Phường Tự An	phuong-tu-an	12.6700573	108.0514384	Phường	643	\N	\N
24151	Phường Ea Tam	phuong-ea-tam	12.6472857	108.0358554	Phường	643	\N	\N
24154	Phường Khánh Xuân	phuong-khanh-xuan	12.6339328	108.0040793	Phường	643	\N	\N
24157	Xã Hòa Thuận	xa-hoa-thuan	12.7344239	108.1279903	Xã	643	\N	\N
24160	Xã Cư ÊBur	xa-cu-ebur	12.6951893	108.0288751	Xã	643	\N	\N
24163	Xã Ea Tu	xa-ea-tu	12.7274015	108.103444	Xã	643	\N	\N
24166	Xã Hòa Thắng	xa-hoa-thang	12.6625601	108.10446	Xã	643	\N	\N
24169	Xã Ea Kao	xa-ea-kao	12.5982801	108.0347714	Xã	643	\N	\N
24172	Xã Hòa Phú	xa-hoa-phu	12.6191672	107.9466754	Xã	643	\N	\N
24175	Xã Hòa Khánh	xa-hoa-khanh	12.5965347	107.9936906	Xã	643	\N	\N
24178	Xã Hòa Xuân	xa-hoa-xuan	12.6424894	107.9600085	Xã	643	\N	\N
24181	Thị trấn Ea Drăng	thi-tran-ea-drang	13.204053	108.2080973	Thị trấn	645	\N	\N
24184	Xã Ea H'leo	xa-ea-hleo	13.3193597	108.0717219	Xã	645	\N	\N
24187	Xã Ea Sol	xa-ea-sol	13.301896	108.308934	Xã	645	\N	\N
24190	Xã Ea Ral	xa-ea-ral	13.2413312	108.1634504	Xã	645	\N	\N
24193	Xã Ea Wy	xa-ea-wy	13.2118668	108.0628572	Xã	645	\N	\N
24194	Xã Cư A Mung	xa-cu-a-mung	13.1897121	108.024301	Xã	645	\N	\N
24196	Xã Cư Mốt	xa-cu-mot	13.2336048	108.1003997	Xã	645	\N	\N
24199	Xã Ea Hiao	xa-ea-hiao	13.1756835	108.3682641	Xã	645	\N	\N
24202	Xã Ea Khal	xa-ea-khal	13.1938618	108.1538802	Xã	645	\N	\N
24205	Xã Dlê Yang	xa-dle-yang	13.184399	108.249614	Xã	645	\N	\N
24207	Xã Ea Tir	xa-ea-tir	13.1095735	108.059866	Xã	645	\N	\N
24208	Xã Ea Nam	xa-ea-nam	13.165633	108.1740142	Xã	645	\N	\N
24211	Thị trấn Ea Súp	thi-tran-ea-sup	13.0609341	107.8880075	Thị trấn	646	\N	\N
24214	Xã Ia Lốp	xa-ia-lop	13.2989616	107.7399345	Xã	646	\N	\N
24215	Xã Ia JLơi	xa-ia-jloi	13.1843517	107.63337	Xã	646	\N	\N
24217	Xã Ea Rốk	xa-ea-rok	13.1862227	107.763621	Xã	646	\N	\N
24220	Xã Ya Tờ Mốt	xa-ya-to-mot	13.2220557	107.728092	Xã	646	\N	\N
24221	Xã Ia RVê	xa-ia-rve	13.1843517	107.63337	Xã	646	\N	\N
24223	Xã Ea Lê	xa-ea-le	13.1197794	107.9176312	Xã	646	\N	\N
24226	Xã Cư KBang	xa-cu-kbang	13.1679174	107.9002593	Xã	646	\N	\N
24229	Xã Ea Bung	xa-ea-bung	13.1246702	107.6925674	Xã	646	\N	\N
24232	Xã Cư M'Lan	xa-cu-mlan	13.025253	107.8765899	Xã	646	\N	\N
24235	Xã Krông Na	xa-krong-na	12.8791607	107.71625	Xã	647	\N	\N
24238	Xã Ea Huar	xa-ea-huar	12.8846073	107.8761588	Xã	647	\N	\N
24241	Xã Ea Wer	xa-ea-wer	12.8352421	107.8702347	Xã	647	\N	\N
24244	Xã Tân Hoà	xa-tan-hoa	12.7877078	107.9176312	Xã	647	\N	\N
24247	Xã Cuôr KNia	xa-cuor-knia	12.7813035	107.9696417	Xã	647	\N	\N
24250	Xã Ea Bar	xa-ea-bar	12.7606399	107.9887402	Xã	647	\N	\N
24253	Xã Ea Nuôl	xa-ea-nuol	12.7197632	107.9413323	Xã	647	\N	\N
24256	Thị trấn Ea Pốk	thi-tran-ea-pok	12.7922222	108.0895066	Thị trấn	648	\N	\N
24259	Thị trấn Quảng Phú	thi-tran-quang-phu	12.8253614	108.0895066	Thị trấn	648	\N	\N
24262	Xã Quảng Tiến	xa-quang-tien	12.8126376	108.1132212	Xã	648	\N	\N
24264	Xã Ea Kuêh	xa-ea-kueh	13.0090747	108.0717219	Xã	648	\N	\N
24265	Xã Ea Kiết	xa-ea-kiet	12.9579725	108.0124469	Xã	648	\N	\N
24268	Xã Ea Tar	xa-ea-tar	12.9290991	108.1072924	Xã	648	\N	\N
24271	Xã Cư Dliê M'nông	xa-cu-dlie-mnong	12.9257124	108.154726	Xã	648	\N	\N
24274	Xã Ea H'đinh	xa-ea-hdinh	12.8950339	108.042083	Xã	648	\N	\N
24277	Xã Ea Tul	xa-ea-tul	12.8577154	108.1784455	Xã	648	\N	\N
24280	Xã Ea KPam	xa-ea-kpam	12.868721	108.1013637	Xã	648	\N	\N
24283	Xã Ea M'DRóh	xa-ea-mdroh	12.9170756	107.9650353	Xã	648	\N	\N
24286	Xã Quảng Hiệp	xa-quang-hiep	12.8507159	107.9650353	Xã	648	\N	\N
24289	Xã Cư M'gar	xa-cu-mgar	12.8440312	108.059866	Xã	648	\N	\N
24292	Xã Ea D'Rơng	xa-ea-drong	12.7931348	108.154726	Xã	648	\N	\N
24295	Xã Ea M'nang	xa-ea-mnang	12.8209966	107.9946667	Xã	648	\N	\N
24298	Xã Cư Suê	xa-cu-sue	12.757319	108.0361555	Xã	648	\N	\N
24301	Xã Cuor Đăng	xa-cuor-dang	12.7524007	108.1843756	Xã	648	\N	\N
24305	Phường An Lạc	phuong-an-lac	12.9142302	108.2763069	Phường	644	\N	\N
24307	Xã Cư Né	xa-cu-ne	13.0771482	108.2021667	Xã	649	\N	\N
24308	Phường An Bình	phuong-an-binh	12.9129609	108.255546	Phường	644	\N	\N
24310	Xã Chư KBô	xa-chu-kbo	13.0226831	108.1903059	Xã	649	\N	\N
24311	Phường Thiện An	phuong-thien-an	12.8900151	108.2674092	Phường	644	\N	\N
24313	Xã Cư Pơng	xa-cu-pong	13.009767	108.1496942	Xã	649	\N	\N
24314	Xã Ea Sin	xa-ea-sin	13.0805819	108.154726	Xã	649	\N	\N
24316	Xã Pơng Drang	xa-pong-drang	12.9499843	108.25003	Xã	649	\N	\N
24317	Xã Tân Lập	xa-tan-lap	12.9404388	108.287804	Xã	649	\N	\N
24318	Phường Đạt Hiếu	phuong-dat-hieu	12.9380358	108.2525802	Phường	644	\N	\N
24319	Xã Ea Ngai	xa-ea-ngai	12.952495	108.208428	Xã	649	\N	\N
24322	Phường Đoàn Kết	phuong-doan-ket	12.8677425	108.2280379	Phường	644	\N	\N
24325	Xã Ea Blang	xa-ea-blang	12.87132	108.2970692	Xã	644	\N	\N
24328	Xã Ea Drông	xa-ea-drong	12.7931348	108.154726	Xã	644	\N	\N
24331	Phường Thống Nhất	phuong-thong-nhat	12.8543769	108.2599908	Phường	644	\N	\N
24332	Phường Bình Tân	phuong-binh-tan	12.8305524	108.2496145	Phường	644	\N	\N
24334	Xã Ea Siên	xa-ea-sien	12.8299586	108.3243746	Xã	644	\N	\N
24337	Xã Bình Thuận	xa-binh-thuan	12.8024991	108.2732973	Xã	644	\N	\N
24340	Xã Cư Bao	xa-cu-bao	12.790108	108.2177031	Xã	644	\N	\N
24343	Thị trấn Krông Năng	thi-tran-krong-nang	12.9494439	108.3623306	Thị trấn	650	\N	\N
24346	Xã ĐLiê Ya	xa-dlie-ya	13.0089192	108.3801314	Xã	650	\N	\N
24349	Xã Ea Tóh	xa-ea-toh	13.0367102	108.3272327	Xã	650	\N	\N
24352	Xã Ea Tam	xa-ea-tam	13.0337198	108.3255653	Xã	650	\N	\N
24355	Xã Phú Lộc	xa-phu-loc	12.979004	108.3435008	Xã	650	\N	\N
24358	Xã Tam Giang	xa-tam-giang	12.960278	108.404444	Xã	650	\N	\N
24359	Xã Ea Puk	xa-ea-puk	12.9709564	108.4551444	Xã	650	\N	\N
24360	Xã Ea Dăh	xa-ea-dah	12.8865843	108.3829023	Xã	650	\N	\N
24361	Xã Ea Hồ	xa-ea-ho	12.951471	108.3032978	Xã	650	\N	\N
24364	Xã Phú Xuân	xa-phu-xuan	12.8865843	108.3829023	Xã	650	\N	\N
24367	Xã Cư Klông	xa-cu-klong	13.0819493	108.439474	Xã	650	\N	\N
24370	Xã Ea Tân	xa-ea-tan	13.1127721	108.3207992	Xã	650	\N	\N
24373	Thị trấn Ea Kar	thi-tran-ea-kar	12.8321875	108.4572788	Thị trấn	651	\N	\N
24376	Thị trấn Ea Knốp	thi-tran-ea-knop	12.8041195	108.5403799	Thị trấn	651	\N	\N
24379	Xã Ea Sô	xa-ea-so	12.971183	108.5938124	Xã	651	\N	\N
24380	Xã Ea Sar	xa-ea-sar	12.8558922	108.5106987	Xã	651	\N	\N
24382	Xã Xuân Phú	xa-xuan-phu	12.8652831	108.4572788	Xã	651	\N	\N
24385	Xã Cư Huê	xa-cu-hue	12.8356148	108.4098014	Xã	651	\N	\N
24388	Xã Ea Tih	xa-ea-tih	12.8235798	108.5760007	Xã	651	\N	\N
24391	Xã Ea Đar	xa-ea-dar	12.8134994	108.4869555	Xã	651	\N	\N
24394	Xã Ea Kmút	xa-ea-kmut	12.7550027	108.4572788	Xã	651	\N	\N
24397	Xã Cư Ni	xa-cu-ni	12.7456483	108.5106987	Xã	651	\N	\N
24400	Xã Ea Păl	xa-ea-pal	12.7422225	108.5581899	Xã	651	\N	\N
24401	Xã Cư Prông	xa-cu-prong	12.7370669	108.6294384	Xã	651	\N	\N
24403	Xã Ea Ô	xa-ea-o	12.7015813	108.5106987	Xã	651	\N	\N
24404	Xã Cư ELang	xa-cu-elang	12.6219608	108.5463165	Xã	651	\N	\N
24406	Xã Cư Bông	xa-cu-bong	12.64962	108.6399214	Xã	651	\N	\N
24409	Xã Cư Jang	xa-cu-jang	12.6913102	108.6531909	Xã	651	\N	\N
24412	Thị trấn M'Đrắk	thi-tran-mdrak	12.7555457	108.7348521	Thị trấn	652	\N	\N
24415	Xã Cư Prao	xa-cu-prao	12.8888278	108.6777907	Xã	652	\N	\N
24418	Xã Ea Pil	xa-ea-pil	12.8057252	108.6131093	Xã	652	\N	\N
24421	Xã Ea Lai	xa-ea-lai	14.058324	108.277199	Xã	652	\N	\N
24424	Xã Ea H'MLay	xa-ea-hmlay	12.813402	108.8009307	Xã	652	\N	\N
24427	Xã Krông Jing	xa-krong-jing	12.7570178	108.7304073	Xã	652	\N	\N
24430	Xã Ea M' Doal	xa-ea-m-doal	12.7654031	108.8894403	Xã	652	\N	\N
24433	Xã Ea Riêng	xa-ea-rieng	12.7536539	108.8019234	Xã	652	\N	\N
24436	Xã Cư M'ta	xa-cu-mta	12.7375383	108.761429	Xã	652	\N	\N
24439	Xã Cư K Róa	xa-cu-k-roa	12.7235922	108.7909115	Xã	652	\N	\N
24442	Xã Krông Á	xa-krong-a	12.6861443	108.7244578	Xã	652	\N	\N
24444	Xã Cư San	xa-cu-san	12.5507778	108.7719766	Xã	652	\N	\N
24445	Xã Ea Trang	xa-ea-trang	14.058324	108.277199	Xã	652	\N	\N
24448	Thị trấn Krông Kmar	thi-tran-krong-kmar	12.5075773	108.3356312	Thị trấn	653	\N	\N
24451	Xã Dang Kang	xa-dang-kang	12.5940496	108.3289567	Xã	653	\N	\N
24454	Xã Cư KTy	xa-cu-kty	12.572879	108.3351677	Xã	653	\N	\N
24457	Xã Hòa Thành	xa-hoa-thanh	12.5691378	108.3015185	Xã	653	\N	\N
24460	Xã Hòa Tân	xa-hoa-tan	12.5431235	108.298924	Xã	653	\N	\N
24463	Xã Hòa Phong	xa-hoa-phong	12.5412005	108.4356594	Xã	653	\N	\N
24466	Xã Hòa Lễ	xa-hoa-le	12.4912592	108.5105925	Xã	653	\N	\N
24469	Xã Yang Reh	xa-yang-reh	12.5028672	108.2307087	Xã	653	\N	\N
24472	Xã Ea Trul	xa-ea-trul	12.5064258	108.2547403	Xã	653	\N	\N
24475	Xã Khuê Ngọc Điền	xa-khue-ngoc-dien	12.5224534	108.3548498	Xã	653	\N	\N
24478	Xã Cư Pui	xa-cu-pui	12.5084011	108.502439	Xã	653	\N	\N
24481	Xã Hòa Sơn	xa-hoa-son	12.4896082	108.3051671	Xã	653	\N	\N
24484	Xã Cư Drăm	xa-cu-dram	12.4851228	108.5619915	Xã	653	\N	\N
24487	Xã Yang Mao	xa-yang-mao	12.4517437	108.5686722	Xã	653	\N	\N
24490	Thị trấn Phước An	thi-tran-phuoc-an	12.7109019	108.3030015	Thị trấn	654	\N	\N
24493	Xã KRông Búk	xa-krong-buk	12.7982853	108.3919991	Xã	654	\N	\N
24496	Xã Ea Kly	xa-ea-kly	12.7083838	108.4157357	Xã	654	\N	\N
24499	Xã Ea Kênh	xa-ea-kenh	12.7040778	108.2436831	Xã	654	\N	\N
24502	Xã Ea Phê	xa-ea-phe	12.762658	108.350464	Xã	654	\N	\N
24505	Xã Ea KNuec	xa-ea-knuec	12.6947253	108.2199588	Xã	654	\N	\N
24508	Xã Ea Yông	xa-ea-yong	12.6964657	108.273341	Xã	654	\N	\N
24511	Xã Hòa An	xa-hoa-an	12.7312675	108.3267319	Xã	654	\N	\N
24514	Xã Ea Kuăng	xa-ea-kuang	12.6939708	108.3860652	Xã	654	\N	\N
24517	Xã Hòa Đông	xa-hoa-dong	12.6811064	108.1784455	Xã	654	\N	\N
24520	Xã Ea Hiu	xa-ea-hiu	12.6956609	108.3623306	Xã	654	\N	\N
24523	Xã Hòa Tiến	xa-hoa-tien	12.6659667	108.3148665	Xã	654	\N	\N
24526	Xã Tân Tiến	xa-tan-tien	12.6422483	108.3385977	Xã	654	\N	\N
24529	Xã Vụ Bổn	xa-vu-bon	12.6287382	108.4513438	Xã	654	\N	\N
24532	Xã Ea Uy	xa-ea-uy	12.62787	108.3860652	Xã	654	\N	\N
24535	Xã Ea Yiêng	xa-ea-yieng	12.5838249	108.3860652	Xã	654	\N	\N
24538	Thị trấn Buôn Trấp	thi-tran-buon-trap	12.4866658	108.042083	Thị trấn	655	\N	\N
24540	Xã Ea Ning	xa-ea-ning	12.6145346	108.2049941	Xã	657	\N	\N
24541	Xã Cư Ê Wi	xa-cu-e-wi	12.6150529	108.255546	Xã	657	\N	\N
24544	Xã Ea Ktur	xa-ea-ktur	12.6327317	108.1606557	Xã	657	\N	\N
24547	Xã Ea Tiêu	xa-ea-tieu	12.5978694	108.1072924	Xã	657	\N	\N
24550	Xã Ea BHốk	xa-ea-bhok	12.5692132	108.2021667	Xã	657	\N	\N
24553	Xã Ea Hu	xa-ea-hu	12.5718177	108.2436831	Xã	657	\N	\N
24556	Xã Dray Sáp	xa-dray-sap	12.5631088	107.9660797	Xã	655	\N	\N
24559	Xã Ea Na	xa-ea-na	12.5619786	107.9887402	Xã	655	\N	\N
24561	Xã Dray Bhăng	xa-dray-bhang	12.5572315	108.1369375	Xã	657	\N	\N
24562	Xã Hòa Hiệp	xa-hoa-hiep	12.5208862	108.1843756	Xã	657	\N	\N
24565	Xã Ea Bông	xa-ea-bong	12.5350232	108.059866	Xã	655	\N	\N
24568	Xã Băng A Drênh	xa-bang-a-drenh	12.5080684	108.1310083	Xã	655	\N	\N
24571	Xã Dur KMăl	xa-dur-kmal	12.4436364	108.1072924	Xã	655	\N	\N
24574	Xã Bình Hòa	xa-binh-hoa	12.4573675	108.0255693	Xã	655	\N	\N
24577	Xã Quảng Điền	xa-quang-dien	12.4315977	108.042083	Xã	655	\N	\N
24580	Thị trấn Liên Sơn	thi-tran-lien-son	12.4090854	108.1695504	Thị trấn	656	\N	\N
24583	Xã Yang Tao	xa-yang-tao	12.4375893	108.2170094	Xã	656	\N	\N
24586	Xã Bông Krang	xa-bong-krang	12.413351	108.2155044	Xã	656	\N	\N
24589	Xã Đắk Liêng	xa-dak-lieng	12.4019501	108.1568706	Xã	656	\N	\N
24592	Xã Buôn Triết	xa-buon-triet	12.3919691	108.0752	Xã	656	\N	\N
24595	Xã Buôn Tría	xa-buon-tria	12.3989009	108.1218436	Xã	656	\N	\N
24598	Xã Đắk Phơi	xa-dak-phoi	12.3504387	108.1782561	Xã	656	\N	\N
24601	Xã Đắk Nuê	xa-dak-nue	12.3669997	108.1560598	Xã	656	\N	\N
24604	Xã Krông Nô	xa-krong-no	12.2054662	108.214028	Xã	656	\N	\N
24607	Xã Nam Ka	xa-nam-ka	12.3148393	108.059866	Xã	656	\N	\N
24610	Xã Ea R'Bin	xa-ea-rbin	12.3928406	108.0088249	Xã	656	\N	\N
24611	Phường Nghĩa Đức	phuong-nghia-duc	12.01385	107.7103291	Phường	660	\N	\N
24612	Phường Nghĩa Thành	phuong-nghia-thanh	12.0073426	107.683687	Phường	660	\N	\N
24994	Xã Đà Loan	xa-da-loan	11.5700242	108.3919991	Xã	678	\N	\N
24614	Phường Nghĩa Phú	phuong-nghia-phu	11.9957218	107.6511279	Phường	660	\N	\N
24615	Phường Nghĩa Tân	phuong-nghia-tan	11.9620103	107.6629672	Phường	660	\N	\N
24616	Xã Quảng Sơn	xa-quang-son	12.1555254	107.8737553	Xã	661	\N	\N
24617	Phường Nghĩa Trung	phuong-nghia-trung	11.9795033	107.6896073	Phường	660	\N	\N
24618	Xã Đăk R'Moan	xa-dak-rmoan	12.019226	107.627451	Xã	660	\N	\N
24619	Xã Quảng Thành	xa-quang-thanh	12.073115	107.728092	Xã	660	\N	\N
24620	Xã Quảng Hoà	xa-quang-hoa	12.1609823	108.059866	Xã	661	\N	\N
24622	Xã Đắk Ha	xa-dak-ha	12.0464923	107.7991545	Xã	661	\N	\N
24625	Xã Đắk R'Măng	xa-dak-rmang	12.0050016	107.9294815	Xã	661	\N	\N
24628	Xã Đắk Nia	xa-dak-nia	11.9413347	107.728092	Xã	660	\N	\N
24631	Xã Quảng Khê	xa-quang-khe	11.9310756	107.8294587	Xã	661	\N	\N
24634	Xã Đắk Plao	xa-dak-plao	11.8391672	107.9600808	Xã	661	\N	\N
24637	Xã Đắk Som	xa-dak-som	11.8632427	107.9176312	Xã	661	\N	\N
24640	Thị trấn Ea T'Ling	thi-tran-ea-tling	12.5854531	107.8880075	Thị trấn	662	\N	\N
24643	Xã Đắk Wil	xa-dak-wil	12.7830602	107.6308533	Xã	662	\N	\N
24646	Xã Ea Pô	xa-ea-po	12.7106789	107.8689194	Xã	662	\N	\N
24649	Xã Nam Dong	xa-nam-dong	12.6584241	107.8702347	Xã	662	\N	\N
24652	Xã Đắk DRông	xa-dak-drong	12.6581194	107.8656982	Xã	662	\N	\N
24655	Xã Tâm Thắng	xa-tam-thang	12.6064586	107.9121139	Xã	662	\N	\N
24658	Xã Cư Knia	xa-cu-knia	12.610918	107.8072369	Xã	662	\N	\N
24661	Xã Trúc Sơn	xa-truc-son	12.5768549	107.852463	Xã	662	\N	\N
24664	Thị trấn Đắk Mil	thi-tran-dak-mil	12.4464738	107.6185727	Thị trấn	663	\N	\N
24667	Xã  Đắk Lao	xa-dak-lao	12.5964842	107.6452085	Xã	663	\N	\N
24670	Xã Đắk R'La	xa-dak-rla	12.5577376	107.728092	Xã	663	\N	\N
24673	Xã Đắk Gằn	xa-dak-gan	12.5324555	107.7780569	Xã	663	\N	\N
24676	Xã Đức Mạnh	xa-duc-manh	12.4675298	107.6748069	Xã	663	\N	\N
24677	Xã Đắk N'Drót	xa-dak-ndrot	12.4972269	107.6929041	Xã	663	\N	\N
24678	Xã Long Sơn	xa-long-son	12.4474022	107.728092	Xã	663	\N	\N
24679	Xã Đắk Sắk	xa-dak-sak	12.4456208	107.6622272	Xã	663	\N	\N
24682	Xã Thuận An	xa-thuan-an	12.3907296	107.5860213	Xã	663	\N	\N
24685	Xã Đức Minh	xa-duc-minh	12.4045158	107.627451	Xã	663	\N	\N
24688	Thị trấn Đắk Mâm	thi-tran-dak-mam	12.4579462	107.8169229	Thị trấn	664	\N	\N
24691	Xã Đắk Sôr	xa-dak-sor	12.5200776	107.8761588	Xã	664	\N	\N
24692	Xã Nam Xuân	xa-nam-xuan	12.4824051	107.7813872	Xã	664	\N	\N
24694	Xã Buôn Choah	xa-buon-choah	14.058324	108.277199	Xã	664	\N	\N
24697	Xã Nam Đà	xa-nam-da	12.4802761	107.893932	Xã	664	\N	\N
24699	Xã Tân Thành	xa-tan-thanh	12.4320301	107.8472676	Xã	664	\N	\N
24700	Xã Đắk Drô	xa-dak-dro	12.4456832	107.8635008	Xã	664	\N	\N
24703	Xã Nâm Nung	xa-nam-nung	12.3544562	107.7991545	Xã	664	\N	\N
24706	Xã Đức Xuyên	xa-duc-xuyen	12.2836329	107.8702347	Xã	664	\N	\N
24709	Xã Đắk Nang	xa-dak-nang	12.2847573	107.9354068	Xã	664	\N	\N
24712	Xã Quảng Phú	xa-quang-phu	12.2520746	108.0124469	Xã	664	\N	\N
24715	Xã Nâm N'Đir	xa-nam-ndir	12.3701014	107.893932	Xã	664	\N	\N
24717	Thị trấn Đức An	thi-tran-duc-an	12.2510096	107.6156133	Thị trấn	665	\N	\N
24718	Xã Đắk Môl	xa-dak-mol	12.3387592	107.7044085	Xã	665	\N	\N
24719	Xã Đắk Hòa	xa-dak-hoa	12.3198725	107.6570475	Xã	665	\N	\N
24721	Xã Nam Bình	xa-nam-binh	12.3009711	107.6096947	Xã	665	\N	\N
24722	Xã Thuận Hà	xa-thuan-ha	12.2615729	107.5386809	Xã	665	\N	\N
24724	Xã Thuận Hạnh	xa-thuan-hanh	12.3072102	107.5150139	Xã	665	\N	\N
24727	Xã Đắk N'Dung	xa-dak-ndung	12.2159624	107.5623501	Xã	665	\N	\N
24728	Xã Nâm N'Jang	xa-nam-njang	12.1995198	107.6452085	Xã	665	\N	\N
24730	Xã Trường Xuân	xa-truong-xuan	12.1115074	107.6452085	Xã	665	\N	\N
24733	Thị trấn Kiến Đức	thi-tran-kien-duc	12.0056329	107.497265	Thị trấn	666	\N	\N
24736	Xã Quảng Trực	xa-quang-truc	12.1769963	107.3139304	Xã	667	\N	\N
24739	Xã Đắk Búk So	xa-dak-buk-so	12.2221422	107.4676861	Xã	667	\N	\N
24740	Xã Quảng Tâm	xa-quang-tam	12.1734525	107.4535397	Xã	667	\N	\N
24742	Xã Đắk R'Tíh	xa-dak-rtih	12.1118615	107.494317	Xã	667	\N	\N
24745	Xã Quảng Tín	xa-quang-tin	11.9595739	107.4440254	Xã	666	\N	\N
24746	Xã Đắk Ngo	xa-dak-ngo	12.0300727	107.3730563	Xã	667	\N	\N
24748	Xã Quảng Tân	xa-quang-tan	12.0419228	107.4908942	Xã	667	\N	\N
24750	Xã Đắk Wer	xa-dak-wer	11.9959564	107.5623501	Xã	666	\N	\N
24751	Xã Nhân Cơ	xa-nhan-co	11.9709365	107.6096947	Xã	666	\N	\N
24754	Xã Kiến Thành	xa-kien-thanh	12.0233755	107.5184472	Xã	666	\N	\N
24756	Xã Nghĩa Thắng	xa-nghia-thang	11.910458	107.539153	Xã	666	\N	\N
24757	Xã Đạo Nghĩa	xa-dao-nghia	11.8583152	107.5682677	Xã	666	\N	\N
24760	Xã Đắk Sin	xa-dak-sin	11.8232911	107.5150139	Xã	666	\N	\N
24761	Xã Hưng Bình	xa-hung-binh	14.058324	108.277199	Xã	666	\N	\N
24763	Xã Đắk Ru	xa-dak-ru	11.8951513	107.4203669	Xã	666	\N	\N
24766	Xã Nhân Đạo	xa-nhan-dao	11.9314507	107.5843055	Xã	666	\N	\N
24769	Phường 7	phuong-7	11.9699223	108.427657	Phường	672	\N	\N
24772	Phường 8	phuong-8	11.9778576	108.4510693	Phường	672	\N	\N
24775	Phường 12	phuong-12	11.9754353	108.4754277	Phường	672	\N	\N
24778	Phường 9	phuong-9	11.9554936	108.4694504	Phường	672	\N	\N
24781	Phường 2	phuong-2	11.9493619	108.4355445	Phường	672	\N	\N
24784	Phường 1	phuong-1	11.9422414	108.4339492	Phường	672	\N	\N
24787	Phường 6	phuong-6	11.9525643	108.4267366	Phường	672	\N	\N
24790	Phường 5	phuong-5	11.9409241	108.417997	Phường	672	\N	\N
24793	Phường 4	phuong-4	11.9358762	108.4323323	Phường	672	\N	\N
24796	Phường 10	phuong-10	11.9398393	108.457337	Phường	672	\N	\N
24799	Phường 11	phuong-11	11.9467524	108.4913168	Phường	672	\N	\N
24802	Phường 3	phuong-3	11.880372	108.4712705	Phường	672	\N	\N
24805	Xã Xuân Thọ	xa-xuan-tho	11.9317185	108.5344435	Xã	672	\N	\N
24808	Xã Tà Nung	xa-ta-nung	11.9210557	108.3682641	Xã	672	\N	\N
24810	Xã Trạm Hành	xa-tram-hanh	11.8636415	108.5745111	Xã	672	\N	\N
24811	Xã Xuân Trường	xa-xuan-truong	11.8762654	108.5463165	Xã	672	\N	\N
24814	Phường Lộc Phát	phuong-loc-phat	11.5789444	107.8287691	Phường	673	\N	\N
24817	Phường Lộc Tiến	phuong-loc-tien	11.5315777	107.7767435	Phường	673	\N	\N
24820	Phường 2	phuong-2	11.5509454	107.7961932	Phường	673	\N	\N
24823	Phường 1	phuong-1	11.5552897	107.8139614	Phường	673	\N	\N
24826	Phường B'lao	phuong-blao	11.5287191	107.8021158	Phường	673	\N	\N
24829	Phường Lộc Sơn	phuong-loc-son	11.5246314	107.8294313	Phường	673	\N	\N
24832	Xã Đạm Bri	xa-dam-bri	11.6045524	107.7695429	Xã	673	\N	\N
24835	Xã Lộc Thanh	xa-loc-thanh	11.4537044	107.8228459	Xã	673	\N	\N
24838	Xã Lộc Nga	xa-loc-nga	11.5329934	107.8643107	Xã	673	\N	\N
24841	Xã Lộc Châu	xa-loc-chau	11.5003494	107.775465	Xã	673	\N	\N
24844	Xã Đại Lào	xa-dai-lao	11.4814629	107.728092	Xã	673	\N	\N
24846	Thị trấn Lạc Dương	thi-tran-lac-duong	12.0315681	108.4335393	Thị trấn	675	\N	\N
24847	Xã Đạ Chais	xa-da-chais	12.1322743	108.6413145	Xã	675	\N	\N
24848	Xã Đạ Nhim	xa-da-nhim	12.1050292	108.5550767	Xã	675	\N	\N
24850	Xã Đưng KNớ	xa-dung-kno	12.1924924	108.4038672	Xã	675	\N	\N
24853	Xã Đạ Tông	xa-da-tong	12.1214063	108.3207992	Xã	674	\N	\N
24856	Xã Đạ Long	xa-da-long	12.1652732	108.3207992	Xã	674	\N	\N
24859	Xã Đạ M' Rong	xa-da-m-rong	12.1278419	108.2258897	Xã	674	\N	\N
24862	Xã Lát	xa-lat	12.0930207	108.4157357	Xã	675	\N	\N
24865	Xã Đạ Sar	xa-da-sar	12.046498	108.4957383	Xã	675	\N	\N
24868	Thị trấn Nam Ban	thi-tran-nam-ban	11.8407763	108.3341841	Thị trấn	676	\N	\N
24871	Thị trấn Đinh Văn	thi-tran-dinh-van	11.7910698	108.2674092	Thị trấn	676	\N	\N
24874	Xã Liêng Srônh	xa-lieng-sronh	12.0833474	108.0717219	Xã	674	\N	\N
24875	Xã Đạ Rsal	xa-da-rsal	12.1342431	108.1310083	Xã	674	\N	\N
24877	Xã Rô Men	xa-ro-men	12.063639	108.2021667	Xã	674	\N	\N
24880	Xã Phú Sơn	xa-phu-son	11.9524739	108.2258897	Xã	676	\N	\N
24883	Xã Phi Tô	xa-phi-to	11.9274098	108.273341	Xã	676	\N	\N
24886	Xã Phi Liêng	xa-phi-lieng	11.9603612	108.1072924	Xã	674	\N	\N
24889	Xã Đạ K' Nàng	xa-da-k-nang	11.8930701	108.1310083	Xã	674	\N	\N
24892	Xã Mê Linh	xa-me-linh	11.8788894	108.3445308	Xã	676	\N	\N
24895	Xã Đạ Đờn	xa-da-don	11.8227118	108.2021667	Xã	676	\N	\N
24898	Xã Phúc Thọ	xa-phuc-tho	11.8070672	108.1072924	Xã	676	\N	\N
24901	Xã Đông Thanh	xa-dong-thanh	11.8538486	108.3919991	Xã	676	\N	\N
24904	Xã Gia Lâm	xa-gia-lam	11.8082174	108.3385977	Xã	676	\N	\N
24907	Xã Tân Thanh	xa-tan-thanh	11.7539347	108.0702702	Xã	676	\N	\N
24910	Xã Tân Văn	xa-tan-van	11.7774088	108.2258897	Xã	676	\N	\N
24913	Xã Hoài Đức	xa-hoai-duc	11.7442007	108.1487964	Xã	676	\N	\N
24916	Xã Tân Hà	xa-tan-ha	11.7352449	108.2021667	Xã	676	\N	\N
24919	Xã Liên Hà	xa-lien-ha	11.7008735	108.1207711	Xã	676	\N	\N
24922	Xã Đan Phượng	xa-dan-phuong	11.6915404	108.2021667	Xã	676	\N	\N
24925	Xã Nam Hà	xa-nam-ha	11.8332318	108.291137	Xã	676	\N	\N
24928	Thị trấn D'Ran	thi-tran-dran	11.9034073	108.6294384	Thị trấn	677	\N	\N
24931	Thị trấn Thạnh Mỹ	thi-tran-thanh-my	11.7659667	108.48102	Thị trấn	677	\N	\N
24934	Xã Lạc Xuân	xa-lac-xuan	11.8251391	108.5756666	Xã	677	\N	\N
24937	Xã Đạ Ròn	xa-da-ron	11.7784696	108.4572788	Xã	677	\N	\N
24940	Xã Lạc Lâm	xa-lac-lam	11.7963408	108.5166348	Xã	677	\N	\N
24943	Xã Ka Đô	xa-ka-do	11.7564762	108.5282042	Xã	677	\N	\N
24946	Xã Quảng Lập	xa-quang-lap	11.7417592	108.5166348	Xã	677	\N	\N
24949	Xã Ka Đơn	xa-ka-don	11.710604	108.4928912	Xã	677	\N	\N
24952	Xã Tu Tra	xa-tu-tra	11.6977797	108.439474	Xã	677	\N	\N
24955	Xã Pró	xa-pro	11.6883136	108.5819378	Xã	677	\N	\N
24958	Thị trấn Liên Nghĩa	thi-tran-lien-nghia	11.7243202	108.3682641	Thị trấn	678	\N	\N
24961	Xã Hiệp An	xa-hiep-an	11.827226	108.463214	Xã	678	\N	\N
24964	Xã Liên Hiệp	xa-lien-hiep	11.7839987	108.3741977	Xã	678	\N	\N
24967	Xã Hiệp Thạnh	xa-hiep-thanh	11.7816322	108.4098014	Xã	678	\N	\N
24970	Xã Bình Thạnh	xa-binh-thanh	11.7676444	108.291137	Xã	678	\N	\N
24973	Xã N'Thol Hạ	xa-nthol-ha	11.7551517	108.3148665	Xã	678	\N	\N
24976	Xã Tân Hội	xa-tan-hoi	11.7239436	108.291137	Xã	678	\N	\N
24979	Xã Tân Thành	xa-tan-thanh	11.7036571	108.2674092	Xã	678	\N	\N
24982	Xã Phú Hội	xa-phu-hoi	11.6705209	108.3563972	Xã	678	\N	\N
24985	Xã Ninh Gia	xa-ninh-gia	11.5894308	108.2614775	Xã	678	\N	\N
24988	Xã Tà Năng	xa-ta-nang	11.57392	108.4988269	Xã	678	\N	\N
24989	Xã Đa Quyn	xa-da-quyn	14.058324	108.277199	Xã	678	\N	\N
24991	Xã Tà Hine	xa-ta-hine	11.5949306	108.3445308	Xã	678	\N	\N
24997	Xã Ninh Loan	xa-ninh-loan	11.5513175	108.3445308	Xã	678	\N	\N
25000	Thị trấn Di Linh	thi-tran-di-linh	11.5747744	108.0657939	Thị trấn	679	\N	\N
25003	Xã Đinh Trang Thượng	xa-dinh-trang-thuong	11.7522055	107.9413323	Xã	679	\N	\N
25006	Xã Tân Thượng	xa-tan-thuong	11.6819903	108.0124469	Xã	679	\N	\N
25007	Xã Tân Lâm	xa-tan-lam	11.6841058	107.9766905	Xã	679	\N	\N
25009	Xã Tân Châu	xa-tan-chau	11.6148979	108.0361555	Xã	679	\N	\N
25012	Xã Tân Nghĩa	xa-tan-nghia	11.6387719	108.0895066	Xã	679	\N	\N
25015	Xã Gia Hiệp	xa-gia-hiep	11.6275588	108.1784455	Xã	679	\N	\N
25018	Xã Đinh Lạc	xa-dinh-lac	11.6306299	108.1310083	Xã	679	\N	\N
25021	Xã Tam Bố	xa-tam-bo	11.505251	108.214028	Xã	679	\N	\N
25024	Xã Đinh Trang Hòa	xa-dinh-trang-hoa	11.5320751	107.9650353	Xã	679	\N	\N
25027	Xã Liên Đầm	xa-lien-dam	11.5508924	108.0124469	Xã	679	\N	\N
25030	Xã Gung Ré	xa-gung-re	11.4707366	108.0717219	Xã	679	\N	\N
25033	Xã Bảo Thuận	xa-bao-thuan	11.454546	108.154726	Xã	679	\N	\N
25036	Xã Hòa Ninh	xa-hoa-ninh	11.5284958	107.9354068	Xã	679	\N	\N
25039	Xã Hòa Trung	xa-hoa-trung	11.504409	107.9709613	Xã	679	\N	\N
25042	Xã Hòa Nam	xa-hoa-nam	11.4492477	107.893932	Xã	679	\N	\N
25045	Xã Hòa Bắc	xa-hoa-bac	11.4229595	107.9650353	Xã	679	\N	\N
25048	Xã Sơn Điền	xa-son-dien	11.3748789	108.0361555	Xã	679	\N	\N
25051	Xã Gia Bắc	xa-gia-bac	11.3268325	108.1072924	Xã	679	\N	\N
25054	Thị trấn Lộc Thắng	thi-tran-loc-thang	11.6781164	107.8169229	Thị trấn	680	\N	\N
25057	Xã Lộc Bảo	xa-loc-bao	11.8010364	107.6925674	Xã	680	\N	\N
25060	Xã Lộc Lâm	xa-loc-lam	11.8255535	107.8228459	Xã	680	\N	\N
25063	Xã Lộc Phú	xa-loc-phu	11.7567871	107.8702347	Xã	680	\N	\N
25066	Xã Lộc Bắc	xa-loc-bac	11.7193767	107.5978577	Xã	680	\N	\N
25069	Xã B' Lá	xa-b-la	11.6986782	107.7517775	Xã	680	\N	\N
25072	Xã Lộc Ngãi	xa-loc-ngai	11.6692461	107.8702347	Xã	680	\N	\N
25075	Xã Lộc Quảng	xa-loc-quang	11.6366143	107.7813872	Xã	680	\N	\N
25078	Xã Lộc Tân	xa-loc-tan	11.6258141	107.6925674	Xã	680	\N	\N
25081	Xã Lộc Đức	xa-loc-duc	11.6224846	107.9176312	Xã	680	\N	\N
25084	Xã Lộc An	xa-loc-an	11.5518398	107.9117062	Xã	680	\N	\N
25087	Xã Tân Lạc	xa-tan-lac	11.4943981	107.8702347	Xã	680	\N	\N
25090	Xã Lộc Thành	xa-loc-thanh	11.4537044	107.8228459	Xã	680	\N	\N
25093	Xã Lộc Nam	xa-loc-nam	11.3852783	107.8702347	Xã	680	\N	\N
25096	Thị trấn Đạ M'ri	thi-tran-da-mri	11.4392485	107.7044085	Thị trấn	681	\N	\N
25099	Thị trấn Ma Đa Guôi	thi-tran-ma-da-guoi	11.383932	107.5386809	Thị trấn	681	\N	\N
25102	Xã Đạ M'ri	xa-da-mri	11.4844127	107.680727	Xã	681	\N	\N
25105	Xã Hà Lâm	xa-ha-lam	11.401419	107.6096947	Xã	681	\N	\N
25108	Xã Đạ Tồn	xa-da-ton	11.4538579	107.5564326	Xã	681	\N	\N
25111	Xã Đạ Oai	xa-da-oai	11.4458378	107.5090974	Xã	681	\N	\N
25114	Xã Đạ Ploa	xa-da-ploa	11.3941129	107.728092	Xã	681	\N	\N
25117	Xã Ma Đa Guôi	xa-ma-da-guoi	11.4021263	107.5090974	Xã	681	\N	\N
25120	Xã Đoàn Kết	xa-doan-ket	11.3482941	107.6748069	Xã	681	\N	\N
25123	Xã Phước Lộc	xa-phuoc-loc	11.488822	107.6096947	Xã	681	\N	\N
25126	Thị trấn Đạ Tẻh	thi-tran-da-teh	11.5238408	107.485433	Thị trấn	682	\N	\N
25129	Xã An Nhơn	xa-an-nhon	11.6230887	107.4736016	Xã	682	\N	\N
25132	Xã Quốc Oai	xa-quoc-oai	14.058324	108.277199	Xã	682	\N	\N
25135	Xã Mỹ Đức	xa-my-duc	11.6230355	107.5623501	Xã	682	\N	\N
25138	Xã Quảng Trị	xa-quang-tri	11.6185911	107.63337	Xã	682	\N	\N
25141	Xã Đạ Lây	xa-da-lay	11.5610474	107.4144526	Xã	682	\N	\N
25144	Xã Hương Lâm	xa-huong-lam	11.5705367	107.4381106	Xã	682	\N	\N
25147	Xã Triệu Hải	xa-trieu-hai	11.50925	107.544598	Xã	682	\N	\N
25150	Xã Hà Đông	xa-ha-dong	11.5067024	107.4833995	Xã	682	\N	\N
25153	Xã Đạ Kho	xa-da-kho	11.5067024	107.4833995	Xã	682	\N	\N
25156	Xã Đạ Pal	xa-da-pal	14.058324	108.277199	Xã	682	\N	\N
25159	Thị trấn Cát Tiên	thi-tran-cat-tien	11.5816786	107.3565531	Thị trấn	683	\N	\N
25162	Xã Tiên Hoàng	xa-tien-hoang	11.6757005	107.4203669	Xã	683	\N	\N
25165	Xã Phước Cát 2	xa-phuoc-cat-2	11.6932664	107.3139304	Xã	683	\N	\N
25168	Xã Gia Viễn	xa-gia-vien	11.6347961	107.3730563	Xã	683	\N	\N
25171	Xã Nam Ninh	xa-nam-ninh	11.637713	107.4144526	Xã	683	\N	\N
25174	Xã Mỹ Lâm	xa-my-lam	11.6055797	107.4026244	Xã	683	\N	\N
25177	Xã Tư Nghĩa	xa-tu-nghia	11.5701694	107.3996674	Xã	683	\N	\N
25180	Xã Phước Cát 1	xa-phuoc-cat-1	11.5778123	107.3198424	Xã	683	\N	\N
25183	Xã Đức Phổ	xa-duc-pho	11.5734416	107.346448	Xã	683	\N	\N
25189	Xã Quảng Ngãi	xa-quang-ngai	11.5325789	107.3878399	Xã	683	\N	\N
25192	Xã Đồng Nai Thượng	xa-dong-nai-thuong	11.740005	107.4440254	Xã	683	\N	\N
25195	Phường Tân Phú	phuong-tan-phu	11.5436619	106.8886118	Phường	689	\N	\N
25198	Phường Tân Đồng	phuong-tan-dong	11.5615388	106.9093	Phường	689	\N	\N
25201	Phường Tân Bình	phuong-tan-binh	11.5190638	106.8856933	Phường	689	\N	\N
25204	Phường Tân Xuân	phuong-tan-xuan	11.5150944	106.9063491	Phường	689	\N	\N
25205	Phường Tân Thiện	phuong-tan-thien	11.5337611	106.9152021	Phường	689	\N	\N
25207	Xã Tân Thành	xa-tan-thanh	11.515555	106.8060388	Xã	689	\N	\N
25210	Xã Tiến Thành	xa-tien-thanh	11.5398388	106.8591387	Xã	689	\N	\N
25213	Xã Tiến Hưng	xa-tien-hung	11.4908267	106.8532381	Xã	689	\N	\N
25216	Phường Thác Mơ	phuong-thac-mo	11.8498689	107.0007987	Phường	688	\N	\N
25217	Phường Long Thủy	phuong-long-thuy	11.8535381	106.9962704	Phường	688	\N	\N
25219	Phường Phước Bình	phuong-phuoc-binh	11.7970508	106.9653756	Phường	688	\N	\N
25220	Phường Long Phước	phuong-long-phuoc	11.8175989	106.9889904	Phường	688	\N	\N
25222	Xã Bù Gia Mập	xa-bu-gia-map	12.141976	107.172085	Xã	691	\N	\N
25225	Xã Đak Ơ	xa-dak-o	12.0651317	107.1352547	Xã	691	\N	\N
25228	Xã Đức Hạnh	xa-duc-hanh	11.8606663	107.0283993	Xã	691	\N	\N
25229	Xã Phú Văn	xa-phu-van	11.9077448	107.063216	Xã	691	\N	\N
25231	Xã Đa Kia	xa-da-kia	14.058324	108.277199	Xã	691	\N	\N
25232	Xã Phước Minh	xa-phuoc-minh	14.058324	108.277199	Xã	691	\N	\N
25234	Xã Bình Thắng	xa-binh-thang	11.8877441	106.824731	Xã	691	\N	\N
25237	Phường Sơn Giang	phuong-son-giang	11.8336244	106.9843537	Phường	688	\N	\N
25240	Xã Long Bình	xa-long-binh	11.8339812	106.9950876	Xã	698	\N	\N
25243	Xã Bình Tân	xa-binh-tan	12.0025507	106.803175	Xã	698	\N	\N
25244	Xã Bình Sơn	xa-binh-son	14.058324	108.277199	Xã	698	\N	\N
25245	Xã Long Giang	xa-long-giang	11.8328526	106.9840264	Xã	688	\N	\N
25246	Xã Long Hưng	xa-long-hung	11.7682647	106.8632573	Xã	698	\N	\N
25249	Xã Phước Tín	xa-phuoc-tin	11.8337331	106.9948945	Xã	688	\N	\N
25250	Xã Phước Tân	xa-phuoc-tan	12.0025507	106.803175	Xã	698	\N	\N
25252	Xã Bù Nho	xa-bu-nho	14.058324	108.277199	Xã	698	\N	\N
25255	Xã Long Hà	xa-long-ha	11.8339812	106.9950876	Xã	698	\N	\N
25258	Xã Long Tân	xa-long-tan	12.0025507	106.803175	Xã	698	\N	\N
25261	Xã Phú Trung	xa-phu-trung	11.6659572	107.0127251	Xã	698	\N	\N
25264	Xã Phú Riềng	xa-phu-rieng	11.6827356	106.9459494	Xã	698	\N	\N
25267	Xã Phú Nghĩa	xa-phu-nghia	11.9640973	106.973877	Xã	691	\N	\N
25270	Thị trấn Lộc Ninh	thi-tran-loc-ninh	11.8444591	106.590819	Thị trấn	692	\N	\N
25273	Xã Lộc Hòa	xa-loc-hoa	11.9462496	106.5937658	Xã	692	\N	\N
25276	Xã Lộc An	xa-loc-an	11.9213495	106.6409198	Xã	692	\N	\N
25279	Xã Lộc Tấn	xa-loc-tan	11.9077971	106.4994889	Xã	692	\N	\N
25280	Xã Lộc Thạnh	xa-loc-thanh	11.950508	106.5230542	Xã	692	\N	\N
25282	Xã Lộc Hiệp	xa-loc-hiep	11.8788591	106.7057733	Xã	692	\N	\N
25285	Xã Lộc Thiện	xa-loc-thien	11.8382446	106.5653711	Xã	692	\N	\N
25288	Xã Lộc Thuận	xa-loc-thuan	11.8317793	106.6645007	Xã	692	\N	\N
25291	Xã Lộc Quang	xa-loc-quang	11.8300664	106.7111442	Xã	692	\N	\N
25292	Xã Lộc Phú	xa-loc-phu	11.8558595	106.715879	Xã	692	\N	\N
25294	Xã Lộc Thành	xa-loc-thanh	11.950508	106.5230542	Xã	692	\N	\N
25297	Xã Lộc Thái	xa-loc-thai	11.8261897	106.594507	Xã	692	\N	\N
25300	Xã Lộc Điền	xa-loc-dien	11.8064464	106.651607	Xã	692	\N	\N
25303	Xã Lộc Hưng	xa-loc-hung	11.7908623	106.5930891	Xã	692	\N	\N
25305	Xã Lộc Thịnh	xa-loc-thinh	11.7511054	106.7235497	Xã	692	\N	\N
25306	Xã Lộc Khánh	xa-loc-khanh	11.7671293	106.6409198	Xã	692	\N	\N
25308	Thị trấn Thanh Bình	thi-tran-thanh-binh	11.9598232	106.8237374	Thị trấn	693	\N	\N
25309	Xã Hưng Phước	xa-hung-phuoc	12.0435964	106.8060388	Xã	693	\N	\N
25310	Xã Phước Thiện	xa-phuoc-thien	12.0146279	106.844679	Xã	693	\N	\N
25312	Xã Thiện Hưng	xa-thien-hung	11.9912019	106.7832542	Xã	693	\N	\N
25315	Xã Thanh Hòa	xa-thanh-hoa	11.9544672	106.7969477	Xã	693	\N	\N
25318	Xã Tân Thành	xa-tan-thanh	11.9184551	106.7135712	Xã	693	\N	\N
25320	Phường Hưng Chiến	phuong-hung-chien	11.6379094	106.5937658	Phường	690	\N	\N
25321	Xã Tân Tiến	xa-tan-tien	11.9142006	106.7588494	Xã	693	\N	\N
25324	Phường An Lộc	phuong-an-loc	11.6630859	106.5844991	Phường	690	\N	\N
25325	Phường Phú Thịnh	phuong-phu-thinh	11.6610857	106.6202887	Phường	690	\N	\N
25326	Phường Phú Đức	phuong-phu-duc	11.64494	106.6143944	Phường	690	\N	\N
25327	Xã Thanh An	xa-thanh-an	11.739482	106.7352584	Xã	694	\N	\N
25330	Xã An Khương	xa-an-khuong	11.7217067	106.6645007	Xã	694	\N	\N
25333	Xã Thanh Lương	xa-thanh-luong	11.7238502	106.6172773	Xã	690	\N	\N
25336	Xã Thanh Phú	xa-thanh-phu	11.6863543	106.6114474	Xã	690	\N	\N
25339	Xã An Phú	xa-an-phu	11.6536959	106.6089554	Xã	694	\N	\N
25342	Xã Tân Lợi	xa-tan-loi	11.6615677	106.6586052	Xã	694	\N	\N
25345	Xã Tân Hưng	xa-tan-hung	11.6398311	106.7470536	Xã	694	\N	\N
25348	Xã Minh Đức	xa-minh-duc	11.5941646	106.5867913	Xã	694	\N	\N
25349	Xã Minh Tâm	xa-minh-tam	11.6014622	106.6527099	Xã	694	\N	\N
25351	Xã Phước An	xa-phuoc-an	11.6150442	106.6473214	Xã	694	\N	\N
25354	Xã Thanh Bình	xa-thanh-binh	11.6010065	106.6169178	Xã	694	\N	\N
25357	Xã Tân Khai	xa-tan-khai	11.5484286	106.6161025	Xã	694	\N	\N
25360	Xã Đồng Nơ	xa-dong-no	11.511721	106.5107542	Xã	694	\N	\N
25361	Xã Tân Hiệp	xa-tan-hiep	11.5261729	106.4827752	Xã	694	\N	\N
25363	Thị trấn Tân Phú	thi-tran-tan-phu	11.4534487	106.8664518	Thị trấn	695	\N	\N
25366	Xã Thuận Lợi	xa-thuan-loi	11.6243895	106.8903637	Xã	695	\N	\N
25369	Xã Đồng Tâm	xa-dong-tam	11.6205328	107.0304554	Xã	695	\N	\N
25372	Xã Tân Phước	xa-tan-phuoc	11.5123776	106.9904615	Xã	695	\N	\N
25375	Xã Tân Hưng	xa-tan-hung	11.6398311	106.7470536	Xã	695	\N	\N
25378	Xã Tân Lợi	xa-tan-loi	11.4677257	106.942601	Xã	695	\N	\N
25381	Xã Tân Lập	xa-tan-lap	11.4045179	106.8296372	Xã	695	\N	\N
25384	Xã Tân Hòa	xa-tan-hoa	11.3946287	106.936615	Xã	695	\N	\N
25387	Xã Thuận Phú	xa-thuan-phu	11.5946901	106.8920105	Xã	695	\N	\N
25390	Xã Đồng Tiến	xa-dong-tien	11.5812739	106.9887793	Xã	695	\N	\N
25393	Xã Tân Tiến	xa-tan-tien	11.4242459	106.8567648	Xã	695	\N	\N
25396	Thị trấn Đức Phong	thi-tran-duc-phong	11.8132799	107.2370874	Thị trấn	696	\N	\N
25398	Xã Đường 10	xa-duong-10	11.9647093	107.169807	Xã	696	\N	\N
25399	Xã Đak Nhau	xa-dak-nhau	11.9697879	107.2321375	Xã	696	\N	\N
25400	Xã Phú Sơn	xa-phu-son	11.913167	107.3717071	Xã	696	\N	\N
25402	Xã Thọ Sơn	xa-tho-son	11.8710677	107.3103976	Xã	696	\N	\N
25404	Xã Bình Minh	xa-binh-minh	11.7630903	107.1605441	Xã	696	\N	\N
25405	Xã Bom Bo	xa-bom-bo	11.9100058	107.1862992	Xã	696	\N	\N
25408	Xã Minh Hưng	xa-minh-hung	11.7630903	107.1605441	Xã	696	\N	\N
25411	Xã Đoàn Kết	xa-doan-ket	11.7762591	107.2152574	Xã	696	\N	\N
25414	Xã Đồng Nai	xa-dong-nai	11.7756275	107.3336148	Xã	696	\N	\N
25417	Xã Đức Liễu	xa-duc-lieu	11.7371173	107.1366365	Xã	696	\N	\N
25420	Xã Thống Nhất	xa-thong-nhat	11.6449775	107.2075388	Xã	696	\N	\N
25423	Xã Nghĩa Trung	xa-nghia-trung	11.6537879	107.0550914	Xã	696	\N	\N
25424	Xã Nghĩa Bình	xa-nghia-binh	11.7041126	107.083754	Xã	696	\N	\N
25426	Xã Đăng Hà	xa-dang-ha	11.5646349	107.2666396	Xã	696	\N	\N
25429	Xã Phước Sơn	xa-phuoc-son	11.7094625	107.2369489	Xã	696	\N	\N
25432	Thị trấn Chơn Thành	thi-tran-chon-thanh	11.438829	106.6173415	Thị trấn	697	\N	\N
25433	Xã Thành Tâm	xa-thanh-tam	11.3884467	106.635025	Xã	697	\N	\N
25435	Xã Minh Lập	xa-minh-lap	11.5461267	106.7529514	Xã	697	\N	\N
25438	Xã Tân Quan	xa-tan-quan	11.6014622	106.6527099	Xã	694	\N	\N
25439	Xã Quang Minh	xa-quang-minh	11.4696902	106.6527099	Xã	697	\N	\N
25441	Xã Minh Hưng	xa-minh-hung	11.4827257	106.6173415	Xã	697	\N	\N
25444	Xã Minh Long	xa-minh-long	11.4144689	106.5642998	Xã	697	\N	\N
25447	Xã Minh Thành	xa-minh-thanh	11.4360894	106.6645007	Xã	697	\N	\N
25450	Xã Nha Bích	xa-nha-bich	11.4552775	106.71167	Xã	697	\N	\N
25453	Xã Minh Thắng	xa-minh-thang	11.5211152	106.71167	Xã	697	\N	\N
25456	Phường 1	phuong-1	11.323292	106.0904721	Phường	703	\N	\N
25459	Phường 3	phuong-3	11.3168213	106.1081103	Phường	703	\N	\N
25462	Phường 4	phuong-4	11.3000251	106.11399	Phường	703	\N	\N
25465	Phường Hiệp Ninh	phuong-hiep-ninh	11.3161676	106.1198699	Phường	703	\N	\N
25468	Phường 2	phuong-2	11.310856	106.0919419	Phường	703	\N	\N
25471	Xã Thạnh Tân	xa-thanh-tan	11.4209239	106.1250001	Xã	703	\N	\N
25474	Xã Tân Bình	xa-tan-binh	11.4089074	106.1167003	Xã	703	\N	\N
25477	Xã Bình Minh	xa-binh-minh	11.3497576	106.0934425	Xã	703	\N	\N
25480	Phường Ninh Sơn	phuong-ninh-son	11.3623527	106.1286901	Phường	703	\N	\N
25483	Phường Ninh Thạnh	phuong-ninh-thanh	11.3397289	106.140451	Phường	703	\N	\N
25486	Thị trấn Tân Biên	thi-tran-tan-bien	11.5449148	106.0111203	Thị trấn	705	\N	\N
25489	Xã Tân Lập	xa-tan-lap	11.6926723	106.0287512	Xã	705	\N	\N
25492	Xã Thạnh Bắc	xa-thanh-bac	11.6782917	106.0875326	Xã	705	\N	\N
25495	Xã Tân Bình	xa-tan-binh	11.6007622	105.8994956	Xã	705	\N	\N
25498	Xã Thạnh Bình	xa-thanh-binh	11.547406	106.0680521	Xã	705	\N	\N
25501	Xã Thạnh Tây	xa-thanh-tay	11.5683964	105.9951896	Xã	705	\N	\N
25504	Xã Hòa Hiệp	xa-hoa-hiep	11.4996478	105.9347384	Xã	705	\N	\N
25507	Xã Tân Phong	xa-tan-phong	11.4877012	106.0194048	Xã	705	\N	\N
25510	Xã Mỏ Công	xa-mo-cong	11.4555514	106.0346285	Xã	705	\N	\N
25513	Xã Trà Vong	xa-tra-vong	11.410269	106.0331592	Xã	705	\N	\N
25516	Thị trấn Tân Châu	thi-tran-tan-chau	11.5495271	106.1727971	Thị trấn	706	\N	\N
25519	Xã Tân Hà	xa-tan-ha	11.7241859	106.1522126	Xã	706	\N	\N
25522	Xã Tân Đông	xa-tan-dong	11.6805245	106.2404468	Xã	706	\N	\N
25525	Xã Tân Hội	xa-tan-hoi	11.629712	106.1965976	Xã	706	\N	\N
25528	Xã Tân Hòa	xa-tan-hoa	11.6152531	106.4170311	Xã	706	\N	\N
25531	Xã Suối Ngô	xa-suoi-ngo	11.6103856	106.3110622	Xã	706	\N	\N
25534	Xã Suối Dây	xa-suoi-day	11.5539083	106.251203	Xã	706	\N	\N
25537	Xã Tân Hiệp	xa-tan-hiep	11.5819297	106.1722916	Xã	706	\N	\N
25540	Xã Thạnh Đông	xa-thanh-dong	11.5598095	106.1398502	Xã	706	\N	\N
25543	Xã Tân Thành	xa-tan-thanh	11.5106297	106.2940769	Xã	706	\N	\N
25546	Xã Tân Phú	xa-tan-phu	11.5136838	106.1623209	Xã	706	\N	\N
25549	Xã Tân Hưng	xa-tan-hung	11.4701041	106.1708212	Xã	706	\N	\N
25552	Thị trấn Dương Minh Châu	thi-tran-duong-minh-chau	11.3864534	106.237505	Thị trấn	707	\N	\N
25555	Xã Suối Đá	xa-suoi-da	11.3603108	106.222381	Xã	707	\N	\N
25558	Xã Phan	xa-phan	11.3635153	106.1872937	Xã	707	\N	\N
25561	Xã Phước Ninh	xa-phuoc-ninh	11.3328695	106.2521877	Xã	707	\N	\N
25564	Xã Phước Minh	xa-phuoc-minh	11.3128483	106.3081886	Xã	707	\N	\N
25567	Xã Bàu Năng	xa-bau-nang	11.3164563	106.1639749	Xã	707	\N	\N
25570	Xã Chà Là	xa-cha-la	11.3028529	106.2110311	Xã	707	\N	\N
25573	Xã Cầu Khởi	xa-cau-khoi	11.266767	106.2240378	Xã	707	\N	\N
25576	Xã Bến Củi	xa-ben-cui	11.259322	106.3083102	Xã	707	\N	\N
25579	Xã Lộc Ninh	xa-loc-ninh	11.4189399	106.270302	Xã	707	\N	\N
25582	Xã Truông Mít	xa-truong-mit	11.241033	106.258546	Xã	707	\N	\N
25585	Thị trấn Châu Thành	thi-tran-chau-thanh	11.3103985	106.0258126	Thị trấn	708	\N	\N
25588	Xã Hảo Đước	xa-hao-duoc	11.3577024	105.9920382	Xã	708	\N	\N
25591	Xã Phước Vinh	xa-phuoc-vinh	11.3953885	105.9462476	Xã	708	\N	\N
25594	Xã Đồng Khởi	xa-dong-khoi	11.38942	106.0341898	Xã	708	\N	\N
25597	Xã Thái Bình	xa-thai-binh	11.3142264	106.0606143	Xã	708	\N	\N
25600	Xã An Cơ	xa-an-co	11.3961536	105.9792092	Xã	708	\N	\N
25603	Xã Biên Giới	xa-bien-gioi	11.3533969	105.8936224	Xã	708	\N	\N
25606	Xã Hòa Thạnh	xa-hoa-thanh	11.3191303	105.9171161	Xã	708	\N	\N
25609	Xã Trí Bình	xa-tri-binh	11.3119786	106.0233309	Xã	708	\N	\N
25612	Xã Hòa Hội	xa-hoa-hoi	11.3003906	105.9582372	Xã	708	\N	\N
25615	Xã An Bình	xa-an-binh	11.3005633	106.0368949	Xã	708	\N	\N
25618	Xã Thanh Điền	xa-thanh-dien	11.2831096	106.0798055	Xã	708	\N	\N
25621	Xã Thành Long	xa-thanh-long	11.2461204	105.9464874	Xã	708	\N	\N
25624	Xã Ninh Điền	xa-ninh-dien	11.2252665	106.0318602	Xã	708	\N	\N
25627	Xã Long Vĩnh	xa-long-vinh	11.2191264	106.0931361	Xã	708	\N	\N
25630	Thị trấn Hòa Thành	thi-tran-hoa-thanh	11.2829063	106.12575	Thị trấn	709	\N	\N
25633	Xã Hiệp Tân	xa-hiep-tan	11.2933965	106.1263046	Xã	709	\N	\N
25636	Xã Long Thành Bắc	xa-long-thanh-bac	11.2877416	106.1375107	Xã	709	\N	\N
25639	Xã Trường Hòa	xa-truong-hoa	11.272553	106.1639749	Xã	709	\N	\N
25642	Xã Trường Đông	xa-truong-dong	11.2389868	106.1757379	Xã	709	\N	\N
25645	Xã Long Thành Trung	xa-long-thanh-trung	11.2670946	106.11399	Xã	709	\N	\N
25648	Xã Trường Tây	xa-truong-tay	11.259979	106.1433913	Xã	709	\N	\N
25651	Xã Long Thành Nam	xa-long-thanh-nam	11.2525638	106.1286901	Xã	709	\N	\N
25654	Thị trấn Gò Dầu	thi-tran-go-dau	11.0887527	106.2669247	Thị trấn	710	\N	\N
25657	Xã Thạnh Đức	xa-thanh-duc	11.1402783	106.2757514	Xã	710	\N	\N
25660	Xã Cẩm Giang	xa-cam-giang	11.1848072	106.1639749	Xã	710	\N	\N
25663	Xã Hiệp Thạnh	xa-hiep-thanh	11.1415032	106.2447185	Xã	710	\N	\N
25666	Xã Bàu Đồn	xa-bau-don	11.1402783	106.2757514	Xã	710	\N	\N
25669	Xã Phước Thạnh	xa-phuoc-thanh	11.1228741	106.293406	Xã	710	\N	\N
25672	Xã Phước Đông	xa-phuoc-dong	11.1544331	106.3216046	Xã	710	\N	\N
25675	Xã Phước Trạch	xa-phuoc-trach	11.1402783	106.2757514	Xã	710	\N	\N
25678	Xã Thanh Phước	xa-thanh-phuoc	11.0835825	106.3110622	Xã	710	\N	\N
25681	Thị trấn Bến Cầu	thi-tran-ben-cau	11.115506	106.1786787	Thị trấn	711	\N	\N
25684	Xã Long Chữ	xa-long-chu	11.1853835	106.1091668	Xã	711	\N	\N
25687	Xã Long Phước	xa-long-phuoc	11.1620583	106.0773888	Xã	711	\N	\N
25690	Xã Long Giang	xa-long-giang	11.1446967	106.124967	Xã	711	\N	\N
25693	Xã Tiên Thuận	xa-tien-thuan	11.1138462	106.1502779	Xã	711	\N	\N
25696	Xã Long Khánh	xa-long-khanh	11.1169624	106.0921061	Xã	711	\N	\N
25699	Xã Lợi Thuận	xa-loi-thuan	11.1061607	106.199266	Xã	711	\N	\N
25702	Xã Long Thuận	xa-long-thuan	11.1263317	106.1294425	Xã	711	\N	\N
25705	Xã An Thạnh	xa-an-thanh	11.0713745	106.2345633	Xã	711	\N	\N
25708	Thị trấn Trảng Bàng	thi-tran-trang-bang	11.0346486	106.3552092	Thị trấn	712	\N	\N
25711	Xã Đôn Thuận	xa-don-thuan	11.1690924	106.3999902	Xã	712	\N	\N
25714	Xã Hưng Thuận	xa-hung-thuan	11.1484559	106.426878	Xã	712	\N	\N
25717	Xã Lộc Hưng	xa-loc-hung	11.0920165	106.3809599	Xã	712	\N	\N
25720	Xã Gia Lộc	xa-gia-loc	11.0543948	106.3495613	Xã	712	\N	\N
25723	Xã Gia Bình	xa-gia-binh	11.0588943	106.3238914	Xã	712	\N	\N
25726	Xã Phước Lưu	xa-phuoc-luu	11.04073	106.225385	Xã	712	\N	\N
25729	Xã Bình Thạnh	xa-binh-thanh	11.0253094	106.2288837	Xã	712	\N	\N
25732	Xã An Tịnh	xa-an-tinh	11.0252436	106.390889	Xã	712	\N	\N
25735	Xã An Hòa	xa-an-hoa	11.0339893	106.3167977	Xã	712	\N	\N
25738	Xã Phước Chỉ	xa-phuoc-chi	11.0123086	106.2332064	Xã	712	\N	\N
25741	Phường Hiệp Thành	phuong-hiep-thanh	10.9950892	106.6576172	Phường	718	\N	\N
25744	Phường Phú Lợi	phuong-phu-loi	10.9947737	106.67924	Phường	718	\N	\N
25747	Phường Phú Cường	phuong-phu-cuong	10.9813312	106.6512361	Phường	718	\N	\N
25750	Phường Phú Hòa	phuong-phu-hoa	10.9726115	106.685136	Phường	718	\N	\N
25753	Phường Phú Thọ	phuong-phu-tho	10.9623573	106.6733441	Phường	718	\N	\N
25756	Phường Chánh Nghĩa	phuong-chanh-nghia	10.9674655	106.6579287	Phường	718	\N	\N
25759	Phường Định Hoà	phuong-dinh-hoa	11.0288573	106.6556575	Phường	718	\N	\N
25760	Phường Hoà Phú	phuong-hoa-phu	11.0689943	106.6703963	Phường	718	\N	\N
25762	Phường Phú Mỹ	phuong-phu-my	11.0137154	106.682188	Phường	718	\N	\N
25763	Phường Phú Tân	phuong-phu-tan	11.0575441	106.7027559	Phường	718	\N	\N
25765	Phường Tân An	phuong-tan-an	11.0347277	106.6254874	Phường	718	\N	\N
25768	Phường Hiệp An	phuong-hiep-an	11.035643	106.6320777	Phường	718	\N	\N
25771	Phường Tương Bình Hiệp	phuong-tuong-binh-hiep	11.0083361	106.6320777	Phường	718	\N	\N
25774	Phường Chánh Mỹ	phuong-chanh-my	10.9882895	106.6438133	Phường	718	\N	\N
25777	Thị trấn Dầu Tiếng	thi-tran-dau-tieng	11.2672094	106.3675416	Thị trấn	720	\N	\N
25780	Xã Minh Hoà	xa-minh-hoa	11.4703162	106.4523662	Xã	720	\N	\N
25783	Xã Minh Thạnh	xa-minh-thanh	11.4223327	106.5230542	Xã	720	\N	\N
25786	Xã Minh Tân	xa-minh-tan	11.3811463	106.4759262	Xã	720	\N	\N
25789	Xã Định An	xa-dinh-an	11.3542662	106.3699271	Xã	720	\N	\N
25792	Xã Long Hoà	xa-long-hoa	11.3214048	106.4799352	Xã	720	\N	\N
25795	Xã Định Thành	xa-dinh-thanh	11.2964084	106.3678157	Xã	720	\N	\N
25798	Xã Định Hiệp	xa-dinh-hiep	11.3076688	106.4252011	Xã	720	\N	\N
25801	Xã An Lập	xa-an-lap	11.3045301	106.4571043	Xã	720	\N	\N
25804	Xã Long Tân	xa-long-tan	11.2728821	106.5278288	Xã	720	\N	\N
25807	Xã Thanh An	xa-thanh-an	11.2015789	106.3996563	Xã	720	\N	\N
25810	Xã Thanh Tuyền	xa-thanh-tuyen	11.1573883	106.4455534	Xã	720	\N	\N
25813	Phường Mỹ Phước	phuong-my-phuoc	11.1488534	106.6114474	Phường	721	\N	\N
25816	Xã Trừ Văn Thố	xa-tru-van-tho	11.342402	106.604472	Xã	719	\N	\N
25819	Xã Cây Trường II	xa-cay-truong-ii	14.058324	108.277199	Xã	719	\N	\N
25822	Xã Lai Uyên	xa-lai-uyen	11.2454323	106.6243358	Xã	719	\N	\N
25825	Xã Tân Hưng	xa-tan-hung	11.2495231	106.6359508	Xã	719	\N	\N
25828	Xã Long Nguyên	xa-long-nguyen	11.2495231	106.6359508	Xã	719	\N	\N
25831	Xã Hưng Hòa	xa-hung-hoa	11.2495231	106.6359508	Xã	719	\N	\N
25834	Xã Lai Hưng	xa-lai-hung	11.2454323	106.6243358	Xã	719	\N	\N
25837	Phường Chánh Phú Hòa	phuong-chanh-phu-hoa	11.1731896	106.6645007	Phường	721	\N	\N
25840	Xã An Điền	xa-an-dien	11.1347757	106.5701927	Xã	721	\N	\N
25843	Xã An Tây	xa-an-tay	11.0923536	106.5466221	Xã	721	\N	\N
25846	Phường Thới Hòa	phuong-thoi-hoa	11.1044443	106.6232359	Phường	721	\N	\N
25849	Phường Hòa Lợi	phuong-hoa-loi	11.1127106	106.6703963	Phường	721	\N	\N
25852	Phường Tân Định	phuong-tan-dinh	11.0600602	106.635025	Phường	721	\N	\N
25855	Xã Phú An	xa-phu-an	11.062709	106.5878723	Xã	721	\N	\N
25858	Thị trấn Phước Vĩnh	thi-tran-phuoc-vinh	11.2963709	106.8060388	Thị trấn	722	\N	\N
25861	Xã An Linh	xa-an-linh	11.361209	106.7248778	Xã	722	\N	\N
25864	Xã Phước Sang	xa-phuoc-sang	11.28978	106.796898	Xã	722	\N	\N
25865	Xã An Thái	xa-an-thai	11.451133	106.7824429	Xã	722	\N	\N
25867	Xã An Long	xa-an-long	11.3522299	106.6875404	Xã	722	\N	\N
25870	Xã An Bình	xa-an-binh	11.3387926	106.8296372	Xã	722	\N	\N
25873	Xã Tân Hiệp	xa-tan-hiep	11.3268238	106.7529514	Xã	722	\N	\N
25876	Xã Tam Lập	xa-tam-lap	11.2908786	106.9004472	Xã	722	\N	\N
25879	Xã Tân Long	xa-tan-long	11.2973749	106.6939803	Xã	722	\N	\N
25882	Xã Vĩnh Hoà	xa-vinh-hoa	11.2539573	106.7824429	Xã	722	\N	\N
25885	Xã Phước Hoà	xa-phuoc-hoa	11.2288143	106.7300085	Xã	722	\N	\N
25888	Phường Uyên Hưng	phuong-uyen-hung	11.0776269	106.7671883	Phường	723	\N	\N
25891	Phường Tân Phước Khánh	phuong-tan-phuoc-khanh	11.0027074	106.7323097	Phường	723	\N	\N
25894	Xã Tân Định	xa-tan-dinh	11.1760044	106.8682827	Xã	726	\N	\N
25897	Xã Bình Mỹ	xa-binh-my	11.1585693	106.7427615	Xã	726	\N	\N
25900	Xã Tân Bình	xa-tan-binh	11.0604974	106.7978352	Xã	726	\N	\N
25903	Xã Tân Lập	xa-tan-lap	14.058324	108.277199	Xã	726	\N	\N
25906	Xã Tân Thành	xa-tan-thanh	11.1498411	106.8452402	Xã	726	\N	\N
25907	Xã Đất Cuốc	xa-dat-cuoc	11.1007403	106.8403619	Xã	726	\N	\N
25908	Xã Hiếu Liêm	xa-hieu-liem	14.058324	108.277199	Xã	726	\N	\N
25909	Xã Lạc An	xa-lac-an	14.058324	108.277199	Xã	726	\N	\N
25912	Xã Vĩnh Tân	xa-vinh-tan	11.1216354	106.7057733	Xã	723	\N	\N
25915	Xã Hội Nghĩa	xa-hoi-nghia	11.1005706	106.767069	Xã	723	\N	\N
25918	Xã Tân Mỹ	xa-tan-my	11.0724525	106.860954	Xã	726	\N	\N
25920	Phường Tân Hiệp	phuong-tan-hiep	11.0481776	106.7235593	Phường	723	\N	\N
25921	Phường Khánh Bình	phuong-khanh-binh	11.0366901	106.7588494	Phường	723	\N	\N
25924	Xã Phú Chánh	xa-phu-chanh	11.0692524	106.6968753	Xã	723	\N	\N
25927	Xã Thường Tân	xa-thuong-tan	11.0346742	106.8825514	Xã	726	\N	\N
25930	Xã Bạch Đằng	xa-bach-dang	11.0398094	106.8001396	Xã	723	\N	\N
25933	Xã Tân Vĩnh Hiệp	xa-tan-vinh-hiep	11.0233079	106.7057733	Xã	723	\N	\N
25936	Phường Thạnh Phước	phuong-thanh-phuoc	14.058324	108.277199	Phường	723	\N	\N
25937	Xã Thạnh Hội	xa-thanh-hoi	10.9778896	106.7853922	Xã	723	\N	\N
25939	Phường Thái Hòa	phuong-thai-hoa	10.9773183	106.7657372	Phường	723	\N	\N
25942	Phường Dĩ An	phuong-di-an	10.8964635	106.7528204	Phường	724	\N	\N
25945	Phường Tân Bình	phuong-tan-binh	10.9422122	106.7553371	Phường	724	\N	\N
25948	Phường Tân Đông Hiệp	phuong-tan-dong-hiep	10.9174137	106.76861	Phường	724	\N	\N
25951	Phường Bình An	phuong-binh-an	10.9067396	106.8019613	Phường	724	\N	\N
25954	Phường Bình Thắng	phuong-binh-thang	10.8948307	106.8169909	Phường	724	\N	\N
25957	Phường Đông Hòa	phuong-dong-hoa	10.8906827	106.7846345	Phường	724	\N	\N
25960	Phường An Bình	phuong-an-binh	10.8722543	106.7551185	Phường	724	\N	\N
25963	Phường An Thạnh	phuong-an-thanh	10.9507852	106.685136	Phường	725	\N	\N
25966	Phường Lái Thiêu	phuong-lai-thieu	10.904865	106.6999563	Phường	725	\N	\N
25969	Phường Bình Chuẩn	phuong-binh-chuan	10.9789783	106.7175669	Phường	725	\N	\N
25972	Phường Thuận Giao	phuong-thuan-giao	10.9571535	106.7175669	Phường	725	\N	\N
25975	Phường An Phú	phuong-an-phu	10.9478138	106.7382072	Phường	725	\N	\N
25978	Phường Hưng Định	phuong-hung-dinh	10.9408261	106.6925062	Phường	725	\N	\N
25981	Xã An Sơn	xa-an-son	10.9334564	106.66353	Xã	725	\N	\N
25984	Phường Bình Nhâm	phuong-binh-nham	10.9237502	106.6927548	Phường	725	\N	\N
25987	Phường Bình Hòa	phuong-binh-hoa	10.9058317	106.7306375	Phường	725	\N	\N
25990	Phường Vĩnh Phú	phuong-vinh-phu	10.8775941	106.6997752	Phường	725	\N	\N
25993	Phường Trảng Dài	phuong-trang-dai	10.986029	106.8675482	Phường	731	\N	\N
25996	Phường Tân Phong	phuong-tan-phong	10.9827185	106.8395407	Phường	731	\N	\N
25999	Phường Tân Biên	phuong-tan-bien	10.970533	106.8932141	Phường	731	\N	\N
26002	Phường Hố Nai	phuong-ho-nai	10.9738414	106.8799658	Phường	731	\N	\N
26005	Phường Tân Hòa	phuong-tan-hoa	10.9668904	106.9079296	Phường	731	\N	\N
26008	Phường Tân Hiệp	phuong-tan-hiep	10.9656045	106.866728	Phường	731	\N	\N
26011	Phường Bửu Long	phuong-buu-long	10.9586438	106.8053993	Phường	731	\N	\N
26014	Phường Tân Tiến	phuong-tan-tien	10.9614615	106.8435458	Phường	731	\N	\N
26017	Phường Tam Hiệp	phuong-tam-hiep	10.9467204	106.8587246	Phường	731	\N	\N
26020	Phường Long Bình	phuong-long-binh	10.93909	106.8844884	Phường	731	\N	\N
26023	Phường Quang Vinh	phuong-quang-vinh	10.9561302	106.8139787	Phường	731	\N	\N
26026	Phường Tân Mai	phuong-tan-mai	10.9554003	106.8514721	Phường	731	\N	\N
26029	Phường Thống Nhất	phuong-thong-nhat	10.9522153	106.8335215	Phường	731	\N	\N
26032	Phường Trung Dũng	phuong-trung-dung	10.9553572	106.8222625	Phường	731	\N	\N
26035	Phường Tam Hòa	phuong-tam-hoa	10.9469591	106.8657572	Phường	731	\N	\N
26038	Phường Hòa Bình	phuong-hoa-binh	10.9498463	106.8112007	Phường	731	\N	\N
26041	Phường Quyết Thắng	phuong-quyet-thang	10.9444518	106.8222625	Phường	731	\N	\N
26044	Phường Thanh Bình	phuong-thanh-binh	10.9494307	106.8185752	Phường	731	\N	\N
26047	Phường Bình Đa	phuong-binh-da	10.9355815	106.8614105	Phường	731	\N	\N
26050	Phường An Bình	phuong-an-binh	10.9240197	106.8665367	Phường	731	\N	\N
26053	Phường Bửu Hòa	phuong-buu-hoa	10.926897	106.8160971	Phường	731	\N	\N
26056	Phường Long Bình Tân	phuong-long-binh-tan	10.9012444	106.8526661	Phường	731	\N	\N
26059	Phường Tân Vạn	phuong-tan-van	10.9117711	106.8272458	Phường	731	\N	\N
26062	Xã Tân Hạnh	xa-tan-hanh	10.9514129	106.7787053	Xã	731	\N	\N
26065	Xã Hiệp Hòa	xa-hiep-hoa	10.932876	106.8379803	Xã	731	\N	\N
26068	Xã Hóa An	xa-hoa-an	10.9359157	106.8038873	Xã	731	\N	\N
26071	Phường Xuân Trung	phuong-xuan-trung	10.9394105	107.2444751	Phường	732	\N	\N
26074	Phường Xuân Thanh	phuong-xuan-thanh	10.9317797	107.2568919	Phường	732	\N	\N
26077	Phường Xuân Bình	phuong-xuan-binh	10.9315892	107.238565	Phường	732	\N	\N
26080	Phường Xuân An	phuong-xuan-an	10.9281854	107.2503855	Phường	732	\N	\N
26083	Phường Xuân Hoà	phuong-xuan-hoa	10.9201945	107.2474303	Phường	732	\N	\N
26086	Phường Phú Bình	phuong-phu-binh	10.9154917	107.2363952	Phường	732	\N	\N
26089	Xã Bình Lộc	xa-binh-loc	10.9818001	107.235802	Xã	732	\N	\N
26092	Xã Bảo Quang	xa-bao-quang	10.9573292	107.2736406	Xã	732	\N	\N
26095	Xã Suối Tre	xa-suoi-tre	10.9456269	107.2075388	Xã	732	\N	\N
26098	Xã Bảo Vinh	xa-bao-vinh	10.9369869	107.2652964	Xã	732	\N	\N
26101	Xã Xuân Lập	xa-xuan-lap	10.9092302	107.1779936	Xã	732	\N	\N
26104	Xã Bàu Sen	xa-bau-sen	10.9195693	107.2060041	Xã	732	\N	\N
26107	Xã Bàu Trâm	xa-bau-tram	10.9284152	107.2835238	Xã	732	\N	\N
26110	Xã Xuân Tân	xa-xuan-tan	10.8984293	107.2273108	Xã	732	\N	\N
26113	Xã Hàng Gòn	xa-hang-gon	10.8803302	107.2075388	Xã	732	\N	\N
26116	Thị trấn Tân Phú	thi-tran-tan-phu	11.2677446	107.4292386	Thị trấn	734	\N	\N
26119	Xã Dak Lua	xa-dak-lua	11.5475346	107.3552716	Xã	734	\N	\N
26122	Xã Nam Cát Tiên	xa-nam-cat-tien	11.4190148	107.4612752	Xã	734	\N	\N
26125	Xã Phú An	xa-phu-an	11.366416	107.4676861	Xã	734	\N	\N
26128	Xã Núi Tượng	xa-nui-tuong	11.3743935	107.4262813	Xã	734	\N	\N
26131	Xã Tà Lài	xa-ta-lai	11.3670477	107.3671431	Xã	734	\N	\N
26134	Xã Phú Lập	xa-phu-lap	11.362303	107.3934468	Xã	734	\N	\N
26137	Xã Phú Sơn	xa-phu-son	11.3358768	107.5209304	Xã	734	\N	\N
26140	Xã Phú Thịnh	xa-phu-thinh	11.3270239	107.3967105	Xã	734	\N	\N
26143	Xã Thanh Sơn	xa-thanh-son	11.3020613	107.2666396	Xã	734	\N	\N
26146	Xã Phú Trung	xa-phu-trung	11.3154812	107.497265	Xã	734	\N	\N
26149	Xã Phú Xuân	xa-phu-xuan	11.3074298	107.4499404	Xã	734	\N	\N
26152	Xã Phú Lộc	xa-phu-loc	11.2986537	107.4144526	Xã	734	\N	\N
26155	Xã Phú Lâm	xa-phu-lam	11.2747338	107.4943069	Xã	734	\N	\N
26158	Xã Phú Bình	xa-phu-binh	11.2602022	107.5090974	Xã	734	\N	\N
26161	Xã Phú Thanh	xa-phu-thanh	11.240525	107.4736016	Xã	734	\N	\N
26164	Xã Trà Cổ	xa-tra-co	11.2504701	107.4345906	Xã	734	\N	\N
26167	Xã Phú Điền	xa-phu-dien	11.1983189	107.4499404	Xã	734	\N	\N
26170	Thị trấn Vĩnh An	thi-tran-vinh-an	11.0859726	107.0421324	Thị trấn	735	\N	\N
26173	Xã Phú Lý	xa-phu-ly	11.3203867	107.1631115	Xã	735	\N	\N
26176	Xã Trị An	xa-tri-an	11.0842652	106.9771827	Xã	735	\N	\N
26179	Xã Tân An	xa-tan-an	10.9964212	106.7863139	Xã	735	\N	\N
26182	Xã Vĩnh Tân	xa-vinh-tan	11.0557107	107.021651	Xã	735	\N	\N
26185	Xã Bình Lợi	xa-binh-loi	11.0384694	106.8237374	Xã	735	\N	\N
26188	Xã Thạnh Phú	xa-thanh-phu	11.0159709	106.8355372	Xã	735	\N	\N
26191	Xã Thiện Tân	xa-thien-tan	11.0180013	106.8767297	Xã	735	\N	\N
26194	Xã Tân Bình	xa-tan-binh	11.007064	106.8001396	Xã	735	\N	\N
26197	Xã Bình Hòa	xa-binh-hoa	10.9884677	106.791291	Xã	735	\N	\N
26200	Xã Mã Đà	xa-ma-da	11.1090006	107.0554207	Xã	735	\N	\N
26203	Xã Hiếu Liêm	xa-hieu-liem	11.1118386	106.966643	Xã	735	\N	\N
26206	Thị trấn Định Quán	thi-tran-dinh-quan	11.1937645	107.3434916	Thị trấn	736	\N	\N
26209	Xã Thanh Sơn	xa-thanh-son	11.3020613	107.2666396	Xã	736	\N	\N
26212	Xã Phú Tân	xa-phu-tan	11.2629318	107.3730563	Xã	736	\N	\N
26215	Xã Phú Vinh	xa-phu-vinh	11.2316858	107.3787338	Xã	736	\N	\N
26218	Xã Phú Lợi	xa-phu-loi	11.2236734	107.3907968	Xã	736	\N	\N
26221	Xã Phú Hòa	xa-phu-hoa	11.200442	107.4144526	Xã	736	\N	\N
26224	Xã Ngọc Định	xa-ngoc-dinh	11.2016789	107.3021069	Xã	736	\N	\N
26227	Xã La Ngà	xa-la-nga	11.1738348	107.2193578	Xã	736	\N	\N
26230	Xã Gia Canh	xa-gia-canh	11.1190282	107.4085384	Xã	736	\N	\N
26233	Xã Phú Ngọc	xa-phu-ngoc	11.1362281	107.3021069	Xã	736	\N	\N
26236	Xã Phú Cường	xa-phu-cuong	11.0879316	107.1859936	Xã	736	\N	\N
26239	Xã Túc Trưng	xa-tuc-trung	11.1185924	107.2311774	Xã	736	\N	\N
26242	Xã Phú Túc	xa-phu-tuc	11.0807749	107.2252675	Xã	736	\N	\N
26245	Xã Suối Nho	xa-suoi-nho	11.0562105	107.2725505	Xã	736	\N	\N
26248	Thị trấn Trảng Bom	thi-tran-trang-bom	10.9513704	107.0126076	Thị trấn	737	\N	\N
26251	Xã Thanh Bình	xa-thanh-binh	11.0670318	107.0947587	Xã	737	\N	\N
26254	Xã Cây Gáo	xa-cay-gao	11.0358645	107.0598491	Xã	737	\N	\N
26257	Xã Bàu Hàm	xa-bau-ham	10.9779138	107.1038114	Xã	737	\N	\N
26260	Xã Sông Thao	xa-song-thao	10.9800021	107.0834734	Xã	737	\N	\N
26263	Xã Sông Trầu	xa-song-trau	10.9782781	107.0185123	Xã	737	\N	\N
26266	Xã Đông Hoà	xa-dong-hoa	10.8724442	107.0598491	Xã	737	\N	\N
26269	Xã Bắc Sơn	xa-bac-son	10.9436397	106.9506696	Xã	737	\N	\N
26272	Xã Hố Nai 3	xa-ho-nai-3	10.9657844	106.9387272	Xã	737	\N	\N
26275	Xã Tây Hoà	xa-tay-hoa	10.946514	107.0544048	Xã	737	\N	\N
26278	Xã Bình Minh	xa-binh-minh	10.95339	106.9771827	Xã	737	\N	\N
26281	Xã Trung Hoà	xa-trung-hoa	10.9451479	107.0623399	Xã	737	\N	\N
26284	Xã Đồi 61	xa-doi-61	10.9180141	107.0244171	Xã	737	\N	\N
26287	Xã Hưng Thịnh	xa-hung-thinh	10.9667039	107.0303221	Xã	737	\N	\N
26290	Xã Quảng Tiến	xa-quang-tien	10.9438	106.984758	Xã	737	\N	\N
26293	Xã Giang Điền	xa-giang-dien	10.912027	106.9860384	Xã	737	\N	\N
26296	Xã An Viễn	xa-an-vien	10.880564	106.994592	Xã	737	\N	\N
26299	Xã Gia Tân 1	xa-gia-tan-1	11.0572437	107.1698921	Xã	738	\N	\N
26302	Xã Gia Tân 2	xa-gia-tan-2	11.0611285	107.1693584	Xã	738	\N	\N
26305	Xã Gia Tân 3	xa-gia-tan-3	11.0377738	107.172939	Xã	738	\N	\N
26308	Xã Gia Kiệm	xa-gia-kiem	11.0304006	107.1543601	Xã	738	\N	\N
26311	Xã Quang Trung	xa-quang-trung	10.9919197	107.1602683	Xã	738	\N	\N
26314	Xã Bàu Hàm 2	xa-bau-ham-2	10.933129	107.1365016	Xã	738	\N	\N
26317	Xã Hưng Lộc	xa-hung-loc	10.939506	107.1026592	Xã	738	\N	\N
26320	Xã Lộ 25	xa-lo-25	10.8704278	107.0952864	Xã	738	\N	\N
26323	Xã Xuân Thiện	xa-xuan-thien	11.0364891	107.2370874	Xã	738	\N	\N
26326	Xã Xuân Thạnh	xa-xuan-thanh	10.9420082	107.1428293	Xã	738	\N	\N
26329	Xã Sông Nhạn	xa-song-nhan	10.8422168	107.113007	Xã	739	\N	\N
26332	Xã Xuân Quế	xa-xuan-que	10.8612799	107.1602683	Xã	739	\N	\N
26335	Xã Nhân Nghĩa	xa-nhan-nghia	10.8459835	107.2353704	Xã	739	\N	\N
26338	Xã Xuân Đường	xa-xuan-duong	10.7946867	107.1839024	Xã	739	\N	\N
26341	Xã Long Giao	xa-long-giao	10.8274876	107.2282225	Xã	739	\N	\N
26344	Xã Xuân Mỹ	xa-xuan-my	10.7740095	107.2607289	Xã	739	\N	\N
26347	Xã Thừa Đức	xa-thua-duc	10.7596614	107.1307289	Xã	739	\N	\N
26350	Xã Bảo Bình	xa-bao-binh	10.8358264	107.2935523	Xã	739	\N	\N
26353	Xã Xuân Bảo	xa-xuan-bao	10.8622966	107.2797541	Xã	739	\N	\N
26356	Xã Xuân Tây	xa-xuan-tay	10.8267515	107.3408675	Xã	739	\N	\N
26359	Xã Xuân Đông	xa-xuan-dong	10.841069	107.378038	Xã	739	\N	\N
26362	Xã Sông Ray	xa-song-ray	10.7417945	107.3494043	Xã	739	\N	\N
26365	Xã Lâm San	xa-lam-san	10.6997304	107.3257545	Xã	739	\N	\N
26368	Thị trấn Long Thành	thi-tran-long-thanh	10.7782801	106.9447146	Thị trấn	740	\N	\N
26371	Xã An Hoà	xa-an-hoa	10.8831245	106.8709404	Xã	731	\N	\N
26374	Xã Tam Phước	xa-tam-phuoc	10.8631954	106.9241116	Xã	731	\N	\N
26377	Xã Phước Tân	xa-phuoc-tan	10.8926724	106.9103322	Xã	731	\N	\N
26380	Xã Long Hưng	xa-long-hung	10.861999	106.8591387	Xã	731	\N	\N
26383	Xã An Phước	xa-an-phuoc	10.8355792	106.9417632	Xã	740	\N	\N
26386	Xã Bình An	xa-binh-an	10.8508506	107.0513633	Xã	740	\N	\N
26389	Xã Long Đức	xa-long-duc	10.8438035	106.9889904	Xã	740	\N	\N
26392	Xã Lộc An	xa-loc-an	10.8111548	106.9889904	Xã	740	\N	\N
26395	Xã Bình Sơn	xa-binh-son	10.80272	107.0421324	Xã	740	\N	\N
26398	Xã Tam An	xa-tam-an	10.8106836	106.9004472	Xã	740	\N	\N
26401	Xã Cẩm Đường	xa-cam-duong	10.7827374	107.1071	Xã	740	\N	\N
26404	Xã Long An	xa-long-an	10.7567666	106.9889904	Xã	740	\N	\N
26407	Xã Suối Trầu	xa-suoi-trau	10.7636602	107.0598491	Xã	740	\N	\N
26410	Xã Bàu Cạn	xa-bau-can	10.7258801	107.0763453	Xã	740	\N	\N
26413	Xã Long Phước	xa-long-phuoc	10.7183848	106.9948945	Xã	740	\N	\N
26416	Xã Phước Bình	xa-phuoc-binh	10.6747458	107.0952864	Xã	740	\N	\N
26419	Xã Tân Hiệp	xa-tan-hiep	10.6984529	107.0598491	Xã	740	\N	\N
26422	Xã Phước Thái	xa-phuoc-thai	10.6787052	107.0244171	Xã	740	\N	\N
26425	Thị trấn Gia Ray	thi-tran-gia-ray	10.9259723	107.4055814	Thị trấn	741	\N	\N
26428	Xã Xuân Bắc	xa-xuan-bac	11.0355699	107.320795	Xã	741	\N	\N
26431	Xã Suối Cao	xa-suoi-cao	11.0013148	107.3730563	Xã	741	\N	\N
26434	Xã Xuân Thành	xa-xuan-thanh	11.0220804	107.4423194	Xã	741	\N	\N
26437	Xã Xuân Thọ	xa-xuan-tho	10.9591637	107.3494043	Xã	741	\N	\N
26440	Xã Xuân Trường	xa-xuan-truong	10.9650218	107.4098124	Xã	741	\N	\N
26443	Xã Xuân Hòa	xa-xuan-hoa	10.8770877	107.544598	Xã	741	\N	\N
26446	Xã Xuân Hưng	xa-xuan-hung	10.8421826	107.4913489	Xã	741	\N	\N
26449	Xã Xuân Tâm	xa-xuan-tam	10.8666632	107.4440254	Xã	741	\N	\N
26452	Xã Suối Cát	xa-suoi-cat	10.9078186	107.3688059	Xã	741	\N	\N
26455	Xã Xuân Hiệp	xa-xuan-hiep	10.9089472	107.3845538	Xã	741	\N	\N
26458	Xã Xuân Phú	xa-xuan-phu	10.9057042	107.3293656	Xã	741	\N	\N
26461	Xã Xuân Định	xa-xuan-dinh	10.8857314	107.2599238	Xã	741	\N	\N
26464	Xã Bảo Hoà	xa-bao-hoa	10.9022012	107.2859484	Xã	741	\N	\N
26467	Xã Lang Minh	xa-lang-minh	10.8603549	107.3717237	Xã	741	\N	\N
26470	Xã Phước Thiền	xa-phuoc-thien	10.760068	106.9299579	Xã	742	\N	\N
26473	Xã Long Tân	xa-long-tan	10.7524773	106.8709404	Xã	742	\N	\N
26476	Xã Đại Phước	xa-dai-phuoc	10.7442163	106.8237374	Xã	742	\N	\N
26479	Xã Hiệp Phước	xa-hiep-phuoc	10.7267839	106.9417632	Xã	742	\N	\N
26482	Xã Phú Hữu	xa-phu-huu	10.7250628	106.7765443	Xã	742	\N	\N
26485	Xã Phú Hội	xa-phu-hoi	10.7287547	106.9063491	Xã	742	\N	\N
26488	Xã Phú Thạnh	xa-phu-thanh	10.7211524	106.8473377	Xã	742	\N	\N
26491	Xã Phú Đông	xa-phu-dong	10.7128827	106.8001396	Xã	742	\N	\N
26494	Xã Long Thọ	xa-long-tho	10.6935151	106.9535691	Xã	742	\N	\N
26497	Xã Vĩnh Thanh	xa-vinh-thanh	10.6770054	106.8591387	Xã	742	\N	\N
26500	Xã Phước Khánh	xa-phuoc-khanh	10.6680846	106.8237374	Xã	742	\N	\N
26503	Xã Phước An	xa-phuoc-an	10.6340856	106.947666	Xã	742	\N	\N
26506	Phường 1	phuong-1	10.3522829	107.0701844	Phường	747	\N	\N
26508	Phường Thắng Tam	phuong-thang-tam	10.3434329	107.0914726	Phường	747	\N	\N
26509	Phường 2	phuong-2	10.3340595	107.0851934	Phường	747	\N	\N
26512	Phường 3	phuong-3	10.3489365	107.0819968	Phường	747	\N	\N
26515	Phường 4	phuong-4	10.3545069	107.0790436	Phường	747	\N	\N
26518	Phường 5	phuong-5	10.3756812	107.062802	Phường	747	\N	\N
26521	Phường Thắng Nhì	phuong-thang-nhi	10.3723385	107.0723668	Phường	747	\N	\N
26524	Phường 7	phuong-7	10.3638951	107.0805202	Phường	747	\N	\N
26526	Phường Nguyễn An Ninh	phuong-nguyen-an-ninh	10.3621958	107.0949818	Phường	747	\N	\N
26527	Phường 8	phuong-8	10.3564094	107.0938097	Phường	747	\N	\N
26530	Phường 9	phuong-9	10.3740741	107.0923331	Phường	747	\N	\N
26533	Phường Thắng Nhất	phuong-thang-nhat	10.3891035	107.1016716	Phường	747	\N	\N
26535	Phường Rạch Dừa	phuong-rach-dua	10.4009204	107.1159559	Phường	747	\N	\N
26536	Phường 10	phuong-10	10.3778746	107.1218678	Phường	747	\N	\N
26539	Phường 11	phuong-11	10.4017412	107.1307289	Phường	747	\N	\N
26542	Phường 12	phuong-12	10.4214457	107.1661766	Phường	747	\N	\N
26545	Xã Long Sơn	xa-long-son	10.4532541	107.0956304	Xã	747	\N	\N
26548	Phường Phước Hưng	phuong-phuoc-hung	10.5153943	107.180948	Phường	748	\N	\N
26551	Phường Phước Hiệp	phuong-phuoc-hiep	10.4983607	107.1706079	Phường	748	\N	\N
26554	Phường Phước Nguyên	phuong-phuoc-nguyen	10.4991423	107.180948	Phường	748	\N	\N
26557	Phường Long Toàn	phuong-long-toan	10.4916352	107.194243	Phường	748	\N	\N
26558	Phường Long Tâm	phuong-long-tam	10.5035763	107.1986748	Phường	748	\N	\N
26560	Phường Phước Trung	phuong-phuoc-trung	10.4857647	107.1779936	Phường	748	\N	\N
26563	Phường Long Hương	phuong-long-huong	10.4950334	107.1573142	Phường	748	\N	\N
26566	Phường Kim Dinh	phuong-kim-dinh	10.4999931	107.1375927	Phường	748	\N	\N
26567	Xã Tân Hưng	xa-tan-hung	10.5319776	107.1750393	Xã	748	\N	\N
26569	Xã Long Phước	xa-long-phuoc	10.5156408	107.2252675	Xã	748	\N	\N
26572	Xã Hoà Long	xa-hoa-long	10.5277905	107.2016295	Xã	748	\N	\N
26574	Xã Bàu Chinh	xa-bau-chinh	10.678295	107.2252675	Xã	750	\N	\N
26575	Thị trấn Ngãi Giao	thi-tran-ngai-giao	10.6559243	107.2370874	Thị trấn	750	\N	\N
26578	Xã Bình Ba	xa-binh-ba	10.6182884	107.2311774	Xã	750	\N	\N
26581	Xã Suối Nghệ	xa-suoi-nghe	10.6043384	107.1898113	Xã	750	\N	\N
26584	Xã Xuân Sơn	xa-xuan-son	10.6404024	107.3198424	Xã	750	\N	\N
26587	Xã Sơn Bình	xa-son-binh	10.649907	107.3434916	Xã	750	\N	\N
26590	Xã Bình Giã	xa-binh-gia	10.6437421	107.2607289	Xã	750	\N	\N
26593	Xã Bình Trung	xa-binh-trung	10.6424077	107.2843726	Xã	750	\N	\N
26596	Xã Xà Bang	xa-xa-bang	10.7319088	107.2370874	Xã	750	\N	\N
26599	Xã Cù Bị	xa-cu-bi	10.7294922	107.1839024	Xã	750	\N	\N
26602	Xã Láng Lớn	xa-lang-lon	10.6592505	107.1779936	Xã	750	\N	\N
26605	Xã Quảng Thành	xa-quang-thanh	10.694576	107.2782896	Xã	750	\N	\N
26608	Xã Kim Long	xa-kim-long	10.7050987	107.2311774	Xã	750	\N	\N
26611	Xã Suối Rao	xa-suoi-rao	10.5912828	107.3257545	Xã	750	\N	\N
26614	Xã Đá Bạc	xa-da-bac	10.5939448	107.2784615	Xã	750	\N	\N
26617	Xã Nghĩa Thành	xa-nghia-thanh	10.5718057	107.1898113	Xã	750	\N	\N
26620	Thị trấn Phước Bửu	thi-tran-phuoc-buu	10.5353285	107.4055814	Thị trấn	751	\N	\N
26623	Xã Phước Thuận	xa-phuoc-thuan	10.4790005	107.3967105	Xã	751	\N	\N
26626	Xã Phước Tân	xa-phuoc-tan	10.5669449	107.3730563	Xã	751	\N	\N
26629	Xã Xuyên Mộc	xa-xuyen-moc	10.5585237	107.4262813	Xã	751	\N	\N
26632	Xã Bông Trang	xa-bong-trang	10.5355319	107.4499404	Xã	751	\N	\N
26635	Xã Tân Lâm	xa-tan-lam	10.7377268	107.4203669	Xã	751	\N	\N
26638	Xã Bàu Lâm	xa-bau-lam	10.6970348	107.3730563	Xã	751	\N	\N
26641	Xã Hòa Bình	xa-hoa-binh	10.6089467	107.3967105	Xã	751	\N	\N
26644	Xã Hòa Hưng	xa-hoa-hung	10.6573892	107.4026244	Xã	751	\N	\N
26647	Xã Hòa Hiệp	xa-hoa-hiep	10.6787414	107.5031811	Xã	751	\N	\N
26650	Xã Hòa Hội	xa-hoa-hoi	10.6279317	107.4440254	Xã	751	\N	\N
26653	Xã Bưng Riềng	xa-bung-rieng	10.538601	107.4913489	Xã	751	\N	\N
26656	Xã Bình Châu	xa-binh-chau	10.57921	107.5386809	Xã	751	\N	\N
26659	Thị trấn Long Điền	thi-tran-long-dien	10.4812576	107.2104935	Thị trấn	752	\N	\N
26662	Thị trấn Long Hải	thi-tran-long-hai	10.395902	107.2370874	Thị trấn	752	\N	\N
26665	Xã An Ngãi	xa-an-ngai	10.4513168	107.2134482	Xã	752	\N	\N
26668	Xã Tam Phước	xa-tam-phuoc	10.4608351	107.2370874	Xã	752	\N	\N
26671	Xã An Nhứt	xa-an-nhut	10.4901197	107.2459527	Xã	752	\N	\N
26674	Xã Phước Tỉnh	xa-phuoc-tinh	10.4118663	107.1927658	Xã	752	\N	\N
26677	Xã Phước Hưng	xa-phuoc-hung	10.4283624	107.2370874	Xã	752	\N	\N
26680	Thị trấn Đất Đỏ	thi-tran-dat-do	10.4913475	107.2725505	Thị trấn	753	\N	\N
26683	Xã Phước Long Thọ	xa-phuoc-long-tho	10.5059422	107.3021069	Xã	753	\N	\N
26686	Xã Phước Hội	xa-phuoc-hoi	10.4575	107.2961111	Xã	753	\N	\N
26689	Xã Long Mỹ	xa-long-my	10.4372227	107.2725505	Xã	753	\N	\N
26692	Thị trấn Phước Hải	thi-tran-phuoc-hai	10.4054168	107.2607289	Thị trấn	753	\N	\N
26695	Xã Long Tân	xa-long-tan	10.5505926	107.2784615	Xã	753	\N	\N
26698	Xã Láng Dài	xa-lang-dai	10.5249522	107.3494043	Xã	753	\N	\N
26701	Xã Lộc An	xa-loc-an	10.4765664	107.3434916	Xã	753	\N	\N
26704	Thị trấn Phú Mỹ	thi-tran-phu-my	10.5905345	107.0480378	Thị trấn	754	\N	\N
26707	Xã Tân Hoà	xa-tan-hoa	10.5330334	107.1071	Xã	754	\N	\N
26710	Xã Tân Hải	xa-tan-hai	10.5005153	107.1071	Xã	754	\N	\N
26713	Xã Phước Hoà	xa-phuoc-hoa	10.5146084	107.0480378	Xã	754	\N	\N
26716	Xã Tân Phước	xa-tan-phuoc	10.5639613	107.0744052	Xã	754	\N	\N
26719	Xã Mỹ Xuân	xa-my-xuan	10.6288504	107.0421324	Xã	754	\N	\N
26722	Xã Sông Xoài	xa-song-xoai	10.6605776	107.1543601	Xã	754	\N	\N
26725	Xã Hắc Dịch	xa-hac-dich	10.6466114	107.113007	Xã	754	\N	\N
26728	Xã Châu Pha	xa-chau-pha	10.5737817	107.1543601	Xã	754	\N	\N
26731	Xã Tóc Tiên	xa-toc-tien	10.6032018	107.113007	Xã	754	\N	\N
26734	Phường Tân Định	phuong-tan-dinh	10.7930968	106.6902951	Phường	760	\N	\N
26737	Phường Đa Kao	phuong-da-kao	10.7878843	106.6984026	Phường	760	\N	\N
26740	Phường Bến Nghé	phuong-ben-nghe	10.7808334	106.702825	Phường	760	\N	\N
26743	Phường Bến Thành	phuong-ben-thanh	10.7735994	106.6944173	Phường	760	\N	\N
26746	Phường Nguyễn Thái Bình	phuong-nguyen-thai-binh	10.7693846	106.7006138	Phường	760	\N	\N
26749	Phường Phạm Ngũ Lão	phuong-pham-ngu-lao	10.7658855	106.6908105	Phường	760	\N	\N
26752	Phường Cầu Ông Lãnh	phuong-cau-ong-lanh	10.7655446	106.6961914	Phường	760	\N	\N
26755	Phường Cô Giang	phuong-co-giang	10.7616235	106.6932433	Phường	760	\N	\N
26758	Phường Nguyễn Cư Trinh	phuong-nguyen-cu-trinh	10.7640301	106.68661	Phường	760	\N	\N
26761	Phường Cầu Kho	phuong-cau-kho	10.7577834	106.6888211	Phường	760	\N	\N
26764	Phường Thạnh Xuân	phuong-thanh-xuan	10.8834303	106.6703963	Phường	761	\N	\N
26767	Phường Thạnh Lộc	phuong-thanh-loc	10.8712302	106.6859815	Phường	761	\N	\N
26770	Phường Hiệp Thành	phuong-hiep-thanh	10.8825023	106.6379724	Phường	761	\N	\N
26773	Phường Thới An	phuong-thoi-an	10.8760697	106.6556575	Phường	761	\N	\N
26776	Phường Tân Chánh Hiệp	phuong-tan-chanh-hiep	10.866797	106.6261831	Phường	761	\N	\N
26779	Phường An Phú Đông	phuong-an-phu-dong	10.8596614	106.7057733	Phường	761	\N	\N
26782	Phường Tân Thới Hiệp	phuong-tan-thoi-hiep	10.8603672	106.6438673	Phường	761	\N	\N
26785	Phường Trung Mỹ Tây	phuong-trung-my-tay	10.856544	106.6143944	Phường	761	\N	\N
26787	Phường Tân Hưng Thuận	phuong-tan-hung-thuan	10.8384209	106.6217623	Phường	761	\N	\N
26788	Phường Đông Hưng Thuận	phuong-dong-hung-thuan	10.8433839	106.630604	Phường	761	\N	\N
26791	Phường Tân Thới Nhất	phuong-tan-thoi-nhat	10.8292885	106.6143944	Phường	761	\N	\N
26794	Phường Linh Xuân	phuong-linh-xuan	10.8804079	106.773595	Phường	762	\N	\N
26797	Phường Bình Chiểu	phuong-binh-chieu	10.8830404	106.7264125	Phường	762	\N	\N
26800	Phường Linh Trung	phuong-linh-trung	10.8637312	106.7794935	Phường	762	\N	\N
26803	Phường Tam Bình	phuong-tam-binh	10.8676413	106.7337841	Phường	762	\N	\N
26806	Phường Tam Phú	phuong-tam-phu	10.8551341	106.7382072	Phường	762	\N	\N
26809	Phường Hiệp Bình Phước	phuong-hiep-binh-phuoc	10.8455467	106.7146184	Phường	762	\N	\N
26812	Phường Hiệp Bình Chánh	phuong-hiep-binh-chanh	10.8339953	106.7264125	Phường	762	\N	\N
26815	Phường Linh Chiểu	phuong-linh-chieu	10.8538209	106.7617984	Phường	762	\N	\N
26818	Phường Linh Tây	phuong-linh-tay	10.8560516	106.7535475	Phường	762	\N	\N
26821	Phường Linh Đông	phuong-linh-dong	10.843909	106.7441048	Phường	762	\N	\N
26824	Phường Bình Thọ	phuong-binh-tho	10.8467644	106.7662221	Phường	762	\N	\N
26827	Phường Trường Thọ	phuong-truong-tho	10.832358	106.7559004	Phường	762	\N	\N
26830	Phường Long Bình	phuong-long-binh	10.8909381	106.8283134	Phường	763	\N	\N
26833	Phường Long Thạnh Mỹ	phuong-long-thanh-my	10.8421949	106.8237374	Phường	763	\N	\N
26836	Phường Tân Phú	phuong-tan-phu	10.8569656	106.8030892	Phường	763	\N	\N
26839	Phường Hiệp Phú	phuong-hiep-phu	10.8486667	106.7809682	Phường	763	\N	\N
26842	Phường Tăng Nhơn Phú A	phuong-tang-nhon-phu-a	10.8409534	106.79719	Phường	763	\N	\N
26845	Phường Tăng Nhơn Phú B	phuong-tang-nhon-phu-b	10.8307175	106.7853922	Phường	763	\N	\N
26848	Phường Phước Long B	phuong-phuoc-long-b	10.8147076	106.7794935	Phường	763	\N	\N
26851	Phường Phước Long A	phuong-phuoc-long-a	10.8224164	106.763273	Phường	763	\N	\N
26854	Phường Trường Thạnh	phuong-truong-thanh	10.8117526	106.8325872	Phường	763	\N	\N
26857	Phường Long Phước	phuong-long-phuoc	10.8075496	106.8591387	Phường	763	\N	\N
26860	Phường Long Trường	phuong-long-truong	10.7986358	106.8237374	Phường	763	\N	\N
26863	Phường Phước Bình	phuong-phuoc-binh	10.8137558	106.7721204	Phường	763	\N	\N
26866	Phường Phú Hữu	phuong-phu-huu	10.7890603	106.8001396	Phường	763	\N	\N
26869	Phường 15	phuong-15	10.8514643	106.6678466	Phường	764	\N	\N
26872	Phường 13	phuong-13	10.8551871	106.6584938	Phường	764	\N	\N
26875	Phường 17	phuong-17	10.8409406	106.6748181	Phường	764	\N	\N
26876	Phường 6	phuong-6	10.8384391	106.6816998	Phường	764	\N	\N
26878	Phường 16	phuong-16	10.846657	106.6650311	Phường	764	\N	\N
26881	Phường 12	phuong-12	10.8347203	106.6394461	Phường	764	\N	\N
26882	Phường 14	phuong-14	10.8423134	106.6367	Phường	764	\N	\N
26884	Phường 10	phuong-10	10.8329295	106.6718702	Phường	764	\N	\N
26887	Phường 05	phuong-05	10.7968936	106.6867575	Phường	764	\N	\N
26890	Phường 07	phuong-07	10.829553	106.683662	Phường	764	\N	\N
26893	Phường 04	phuong-04	10.7687584	106.6839393	Phường	764	\N	\N
26896	Phường 01	phuong-01	10.8173779	106.6888976	Phường	764	\N	\N
26897	Phường 9	phuong-9	10.8475319	106.6541837	Phường	764	\N	\N
26898	Phường 8	phuong-8	10.8422445	106.6512361	Phường	764	\N	\N
26899	Phường 11	phuong-11	10.8390308	106.6600791	Phường	764	\N	\N
26902	Phường 03	phuong-03	10.770528	106.6862868	Phường	764	\N	\N
26905	Phường 13	phuong-13	10.8256869	106.7042991	Phường	765	\N	\N
26908	Phường 11	phuong-11	10.8180045	106.6954544	Phường	765	\N	\N
26911	Phường 27	phuong-27	10.8166994	106.7190411	Phường	765	\N	\N
26914	Phường 26	phuong-26	10.8131851	106.7087216	Phường	765	\N	\N
26917	Phường 12	phuong-12	10.8122309	106.7013508	Phường	765	\N	\N
26920	Phường 25	phuong-25	10.8040973	106.7153875	Phường	765	\N	\N
26923	Phường 05	phuong-05	10.790508	106.707999	Phường	765	\N	\N
26926	Phường 07	phuong-07	10.790526	106.708045	Phường	765	\N	\N
26929	Phường 24	phuong-24	10.8058993	106.7050362	Phường	765	\N	\N
26932	Phường 06	phuong-06	10.789414	106.708069	Phường	765	\N	\N
26935	Phường 14	phuong-14	10.8049449	106.6976655	Phường	765	\N	\N
26938	Phường 15	phuong-15	10.8004527	106.7050362	Phường	765	\N	\N
26941	Phường 02	phuong-02	10.791161	106.707233	Phường	765	\N	\N
26944	Phường 01	phuong-01	10.790409	106.707725	Phường	765	\N	\N
26947	Phường 03	phuong-03	10.790481	106.70799	Phường	765	\N	\N
26950	Phường 17	phuong-17	10.7962866	106.7065103	Phường	765	\N	\N
26953	Phường 21	phuong-21	10.7957882	106.7117589	Phường	765	\N	\N
26956	Phường 22	phuong-22	10.7921907	106.7190411	Phường	765	\N	\N
26959	Phường 19	phuong-19	10.7899564	106.7101958	Phường	765	\N	\N
26962	Phường 28	phuong-28	10.825006	106.7411559	Phường	765	\N	\N
26965	Phường 02	phuong-02	10.76246	106.668971	Phường	766	\N	\N
26968	Phường 04	phuong-04	10.7687584	106.6839393	Phường	766	\N	\N
26971	Phường 12	phuong-12	10.7931859	106.6500753	Phường	766	\N	\N
26974	Phường 13	phuong-13	10.8058688	106.6438673	Phường	766	\N	\N
26977	Phường 01	phuong-01	10.7947121	106.6675593	Phường	766	\N	\N
26980	Phường 03	phuong-03	10.762466	106.669001	Phường	766	\N	\N
26983	Phường 11	phuong-11	10.790694	106.6495246	Phường	766	\N	\N
26986	Phường 07	phuong-07	10.7881559	106.6563945	Phường	766	\N	\N
26989	Phường 05	phuong-05	10.762479	106.669061	Phường	766	\N	\N
26992	Phường 10	phuong-10	10.7826359	106.645341	Phường	766	\N	\N
26995	Phường 06	phuong-06	10.7837883	106.6582557	Phường	766	\N	\N
26998	Phường 08	phuong-08	10.7829523	106.651973	Phường	766	\N	\N
27001	Phường 09	phuong-09	10.7686228	106.683438	Phường	766	\N	\N
27004	Phường 14	phuong-14	10.7936922	106.6423935	Phường	766	\N	\N
27007	Phường 15	phuong-15	10.8225398	106.6379724	Phường	766	\N	\N
27010	Phường Tân Sơn Nhì	phuong-tan-son-nhi	10.7997882	106.630604	Phường	767	\N	\N
27013	Phường Tây Thạnh	phuong-tay-thanh	10.8122907	106.6261831	Phường	767	\N	\N
27016	Phường Sơn Kỳ	phuong-son-ky	10.8033223	106.615868	Phường	767	\N	\N
27019	Phường Tân Quý	phuong-tan-quy	10.794826	106.6217623	Phường	767	\N	\N
27022	Phường Tân Thành	phuong-tan-thanh	10.7914545	106.6335513	Phường	767	\N	\N
27025	Phường Phú Thọ Hòa	phuong-phu-tho-hoa	10.7863307	106.6276567	Phường	767	\N	\N
27028	Phường Phú Thạnh	phuong-phu-thanh	10.7785654	106.6317792	Phường	767	\N	\N
27031	Phường Phú Trung	phuong-phu-trung	10.7773512	106.6423935	Phường	767	\N	\N
27034	Phường Hòa Thạnh	phuong-hoa-thanh	10.7783152	106.6372355	Phường	767	\N	\N
27037	Phường Hiệp Tân	phuong-hiep-tan	10.7727133	106.6276567	Phường	767	\N	\N
27040	Phường Tân Thới Hòa	phuong-tan-thoi-hoa	10.76294	106.6320777	Phường	767	\N	\N
27043	Phường 04	phuong-04	10.7959603	106.6885456	Phường	768	\N	\N
27046	Phường 05	phuong-05	10.7968936	106.6867575	Phường	768	\N	\N
27049	Phường 09	phuong-09	10.7969087	106.6868524	Phường	768	\N	\N
27052	Phường 07	phuong-07	10.7968859	106.6868428	Phường	768	\N	\N
27055	Phường 03	phuong-03	10.7967751	106.6866886	Phường	768	\N	\N
27058	Phường 01	phuong-01	10.7986464	106.6802854	Phường	768	\N	\N
27061	Phường 02	phuong-02	10.7959497	106.6885666	Phường	768	\N	\N
27064	Phường 08	phuong-08	10.7980758	106.6740811	Phường	768	\N	\N
27067	Phường 15	phuong-15	10.7950274	106.679977	Phường	768	\N	\N
27070	Phường 10	phuong-10	10.7955148	106.6711332	Phường	768	\N	\N
27073	Phường 11	phuong-11	10.7926289	106.6740811	Phường	768	\N	\N
27076	Phường 17	phuong-17	10.7935032	106.682925	Phường	768	\N	\N
27079	Phường 14	phuong-14	10.791592	106.6681854	Phường	768	\N	\N
27082	Phường 12	phuong-12	10.7923853	106.678503	Phường	768	\N	\N
27085	Phường 13	phuong-13	10.790068	106.6711332	Phường	768	\N	\N
27088	Phường Thảo Điền	phuong-thao-dien	10.8064331	106.7323097	Phường	769	\N	\N
27091	Phường An Phú	phuong-an-phu	10.8019128	106.7647475	Phường	769	\N	\N
27094	Phường Bình An	phuong-binh-an	10.7915388	106.7308354	Phường	769	\N	\N
27097	Phường Bình Trưng Đông	phuong-binh-trung-dong	10.78204	106.7794935	Phường	769	\N	\N
27100	Phường Bình Trưng Tây	phuong-binh-trung-tay	10.7844627	106.7603239	Phường	769	\N	\N
27103	Phường Bình Khánh	phuong-binh-khanh	10.7830453	106.7367328	Phường	769	\N	\N
27106	Phường An Khánh	phuong-an-khanh	10.7814628	106.7160926	Phường	769	\N	\N
27109	Phường Cát Lái	phuong-cat-lai	10.7708268	106.7853922	Phường	769	\N	\N
27112	Phường Thạnh Mỹ Lợi	phuong-thanh-my-loi	10.7583621	106.7647475	Phường	769	\N	\N
27115	Phường An Lợi Đông	phuong-an-loi-dong	10.7631993	106.7264125	Phường	769	\N	\N
27118	Phường Thủ Thiêm	phuong-thu-thiem	10.7732956	106.7160926	Phường	769	\N	\N
27121	Phường 08	phuong-08	10.7712114	106.6857666	Phường	770	\N	\N
27124	Phường 07	phuong-07	10.7707505	106.6817368	Phường	770	\N	\N
27127	Phường 14	phuong-14	10.7895808	106.679977	Phường	770	\N	\N
27130	Phường 12	phuong-12	10.788544	106.6740811	Phường	770	\N	\N
27133	Phường 11	phuong-11	10.7860642	106.6696593	Phường	770	\N	\N
27136	Phường 13	phuong-13	10.7855773	106.678503	Phường	770	\N	\N
27139	Phường 06	phuong-06	10.7369775	106.6244505	Phường	770	\N	\N
27142	Phường 09	phuong-09	10.7686228	106.683438	Phường	770	\N	\N
27145	Phường 10	phuong-10	10.7812538	106.6766605	Phường	770	\N	\N
27148	Phường 04	phuong-04	10.7687584	106.6839393	Phường	770	\N	\N
27151	Phường 05	phuong-05	10.7694773	106.6832863	Phường	770	\N	\N
27154	Phường 03	phuong-03	10.770528	106.6862868	Phường	770	\N	\N
27157	Phường 02	phuong-02	10.771435	106.681099	Phường	770	\N	\N
27160	Phường 01	phuong-01	10.7682626	106.6839418	Phường	770	\N	\N
27163	Phường 15	phuong-15	10.7815015	106.6659746	Phường	771	\N	\N
27166	Phường 13	phuong-13	10.7792565	106.6696593	Phường	771	\N	\N
27169	Phường 14	phuong-14	10.7709337	106.6600791	Phường	771	\N	\N
27172	Phường 12	phuong-12	10.7730084	106.6718702	Phường	771	\N	\N
27175	Phường 11	phuong-11	10.7736443	106.6788715	Phường	771	\N	\N
27178	Phường 10	phuong-10	10.7713857	106.6676482	Phường	771	\N	\N
27181	Phường 09	phuong-09	10.76271	106.669118	Phường	771	\N	\N
27184	Phường 01	phuong-01	10.762454	106.668944	Phường	771	\N	\N
27187	Phường 08	phuong-08	10.763171	106.669771	Phường	771	\N	\N
27190	Phường 02	phuong-02	10.76246	106.668971	Phường	771	\N	\N
27193	Phường 04	phuong-04	10.762472	106.669031	Phường	771	\N	\N
27196	Phường 07	phuong-07	10.762491	106.669121	Phường	771	\N	\N
27199	Phường 05	phuong-05	10.762479	106.669061	Phường	771	\N	\N
27202	Phường 06	phuong-06	10.7373084	106.6245599	Phường	771	\N	\N
27205	Phường 03	phuong-03	10.762466	106.669001	Phường	771	\N	\N
27208	Phường 15	phuong-15	10.7761932	106.6548706	Phường	772	\N	\N
27211	Phường 05	phuong-05	10.762479	106.669061	Phường	772	\N	\N
27214	Phường 14	phuong-14	10.7694985	106.6490254	Phường	772	\N	\N
27217	Phường 11	phuong-11	10.7666947	106.6504992	Phường	772	\N	\N
27220	Phường 03	phuong-03	10.7633465	106.6588697	Phường	772	\N	\N
27223	Phường 10	phuong-10	10.7630148	106.6431304	Phường	772	\N	\N
27226	Phường 13	phuong-13	10.7638102	106.6534468	Phường	772	\N	\N
27229	Phường 08	phuong-08	10.7606898	106.6482886	Phường	772	\N	\N
27232	Phường 09	phuong-09	10.7686228	106.683438	Phường	772	\N	\N
27235	Phường 12	phuong-12	10.7611684	106.651973	Phường	772	\N	\N
27238	Phường 07	phuong-07	10.7605453	106.6596036	Phường	772	\N	\N
27241	Phường 06	phuong-06	10.7370991	106.6244483	Phường	772	\N	\N
27244	Phường 04	phuong-04	10.7687584	106.6839393	Phường	772	\N	\N
27247	Phường 01	phuong-01	10.7608932	106.650142	Phường	772	\N	\N
27250	Phường 02	phuong-02	10.7550394	106.6431074	Phường	772	\N	\N
27253	Phường 16	phuong-16	10.7552446	106.6482886	Phường	772	\N	\N
27256	Phường 12	phuong-12	10.7664188	106.7050362	Phường	773	\N	\N
27259	Phường 13	phuong-13	10.762732	106.7101958	Phường	773	\N	\N
27262	Phường 09	phuong-09	10.7686228	106.683438	Phường	773	\N	\N
27265	Phường 06	phuong-06	10.7371963	106.624516	Phường	773	\N	\N
28774	Phường 3	phuong-3	10.23743	106.3743426	Phường	829	\N	\N
27268	Phường 08	phuong-08	10.763091	106.7009979	Phường	773	\N	\N
27271	Phường 10	phuong-10	10.760614	106.7054047	Phường	773	\N	\N
27274	Phường 05	phuong-05	10.762479	106.669061	Phường	773	\N	\N
27277	Phường 18	phuong-18	10.7596852	106.7160926	Phường	773	\N	\N
27280	Phường 14	phuong-14	10.7580903	106.7079845	Phường	773	\N	\N
27283	Phường 04	phuong-04	10.7687584	106.6839393	Phường	773	\N	\N
27286	Phường 03	phuong-03	10.762466	106.669001	Phường	773	\N	\N
27289	Phường 16	phuong-16	10.755125	106.7124071	Phường	773	\N	\N
27292	Phường 02	phuong-02	10.76246	106.668971	Phường	773	\N	\N
27295	Phường 15	phuong-15	10.7540075	106.7079845	Phường	773	\N	\N
27298	Phường 01	phuong-01	10.7550849	106.689444	Phường	773	\N	\N
27301	Phường 04	phuong-04	10.7510929	106.6694669	Phường	774	\N	\N
27304	Phường 09	phuong-09	10.7553344	106.6692256	Phường	774	\N	\N
27307	Phường 03	phuong-03	10.7595352	106.6693064	Phường	774	\N	\N
27310	Phường 12	phuong-12	10.7564453	106.6601602	Phường	774	\N	\N
27313	Phường 02	phuong-02	10.7562001	106.6692136	Phường	774	\N	\N
27316	Phường 08	phuong-08	10.7512425	106.6695266	Phường	774	\N	\N
27319	Phường 15	phuong-15	10.7556424	106.6534468	Phường	774	\N	\N
27322	Phường 07	phuong-07	10.7548791	106.6690891	Phường	774	\N	\N
27325	Phường 01	phuong-01	10.7549031	106.6692026	Phường	774	\N	\N
27328	Phường 11	phuong-11	10.7537961	106.6622899	Phường	774	\N	\N
27331	Phường 14	phuong-14	10.7528392	106.6549206	Phường	774	\N	\N
27334	Phường 05	phuong-05	10.7560917	106.6692095	Phường	774	\N	\N
27337	Phường 06	phuong-06	10.7370125	106.6244381	Phường	774	\N	\N
27340	Phường 10	phuong-10	10.7510738	106.6622899	Phường	774	\N	\N
27343	Phường 13	phuong-13	10.750036	106.6563945	Phường	774	\N	\N
27346	Phường 14	phuong-14	10.7577874	106.6322597	Phường	775	\N	\N
27349	Phường 13	phuong-13	10.7536523	106.6276567	Phường	775	\N	\N
27352	Phường 09	phuong-09	10.7370693	106.6245142	Phường	775	\N	\N
27355	Phường 06	phuong-06	10.7372485	106.62456	Phường	775	\N	\N
27358	Phường 12	phuong-12	10.7506069	106.6335513	Phường	775	\N	\N
27361	Phường 05	phuong-05	10.7370125	106.6244381	Phường	775	\N	\N
27364	Phường 11	phuong-11	10.745162	106.6335513	Phường	775	\N	\N
27367	Phường 02	phuong-02	10.7371428	106.6245605	Phường	775	\N	\N
27370	Phường 01	phuong-01	10.783026	106.604884	Phường	775	\N	\N
27373	Phường 04	phuong-04	10.7371963	106.624516	Phường	775	\N	\N
27376	Phường 08	phuong-08	10.742838	106.6387092	Phường	775	\N	\N
27379	Phường 03	phuong-03	10.7369775	106.6244505	Phường	775	\N	\N
27382	Phường 07	phuong-07	10.8028126	106.6865481	Phường	775	\N	\N
27385	Phường 10	phuong-10	10.7403696	106.6238525	Phường	775	\N	\N
27388	Phường 08	phuong-08	10.7167454	106.6289524	Phường	776	\N	\N
27391	Phường 02	phuong-02	10.737862	106.6662989	Phường	776	\N	\N
27394	Phường 01	phuong-01	10.749525	106.688451	Phường	776	\N	\N
27397	Phường 03	phuong-03	10.762466	106.669001	Phường	776	\N	\N
27400	Phường 11	phuong-11	10.7482708	106.6637637	Phường	776	\N	\N
27403	Phường 09	phuong-09	10.7165703	106.6288809	Phường	776	\N	\N
27406	Phường 10	phuong-10	10.7455487	106.6637637	Phường	776	\N	\N
27409	Phường 04	phuong-04	10.737862	106.6662989	Phường	776	\N	\N
27412	Phường 13	phuong-13	10.7459527	106.6563945	Phường	776	\N	\N
27415	Phường 12	phuong-12	10.7432306	106.6563945	Phường	776	\N	\N
27418	Phường 05	phuong-05	10.762479	106.669061	Phường	776	\N	\N
27421	Phường 14	phuong-14	10.7396318	106.6475517	Phường	776	\N	\N
27424	Phường 06	phuong-06	10.7372791	106.6245172	Phường	776	\N	\N
27427	Phường 15	phuong-15	10.7257399	106.6332948	Phường	776	\N	\N
27430	Phường 16	phuong-16	10.7251488	106.6261831	Phường	776	\N	\N
27433	Phường 07	phuong-07	10.7046969	106.6210379	Phường	776	\N	\N
27436	Phường Bình Hưng Hòa	phuong-binh-hung-hoa	10.8026884	106.6026064	Phường	777	\N	\N
27439	Phường Bình Hưng Hoà A	phuong-binh-hung-hoa-a	10.7850966	106.6069312	Phường	777	\N	\N
27442	Phường Bình Hưng Hoà B	phuong-binh-hung-hoa-b	10.8033353	106.590819	Phường	777	\N	\N
27445	Phường Bình Trị Đông	phuong-binh-tri-dong	10.7639086	106.6143944	Phường	777	\N	\N
27448	Phường Bình Trị Đông A	phuong-binh-tri-dong-a	10.7703231	106.5967126	Phường	777	\N	\N
27451	Phường Bình Trị Đông B	phuong-binh-tri-dong-b	10.7478932	106.6085003	Phường	777	\N	\N
27454	Phường Tân Tạo	phuong-tan-tao	10.7597516	106.590819	Phường	777	\N	\N
27457	Phường Tân Tạo A	phuong-tan-tao-a	10.7360575	106.5906249	Phường	777	\N	\N
27460	Phường  An Lạc	phuong-an-lac	10.7231349	106.6111242	Phường	777	\N	\N
27463	Phường An Lạc A	phuong-an-lac-a	10.7539749	106.6217623	Phường	777	\N	\N
27466	Phường Tân Thuận Đông	phuong-tan-thuan-dong	10.7571056	106.7382072	Phường	778	\N	\N
27469	Phường Tân Thuận Tây	phuong-tan-thuan-tay	10.7511954	106.7219896	Phường	778	\N	\N
27472	Phường Tân Kiểng	phuong-tan-kieng	10.7491228	106.7101958	Phường	778	\N	\N
27475	Phường Tân Hưng	phuong-tan-hung	10.7430482	106.6969285	Phường	778	\N	\N
27478	Phường Bình Thuận	phuong-binh-thuan	10.7417516	106.7205154	Phường	778	\N	\N
27481	Phường Tân Quy	phuong-tan-quy	10.7409584	106.7101958	Phường	778	\N	\N
27484	Phường Phú Thuận	phuong-phu-thuan	10.7299898	106.7426687	Phường	778	\N	\N
27487	Phường Tân Phú	phuong-tan-phu	10.7251014	106.7264125	Phường	778	\N	\N
27490	Phường Tân Phong	phuong-tan-phong	10.7318388	106.702825	Phường	778	\N	\N
27493	Phường Phú Mỹ	phuong-phu-my	10.7081313	106.7382072	Phường	778	\N	\N
27496	Thị trấn Củ Chi	thi-tran-cu-chi	10.972192	106.4965434	Thị trấn	783	\N	\N
27499	Xã Phú Mỹ Hưng	xa-phu-my-hung	11.1246502	106.458256	Xã	783	\N	\N
27502	Xã An Phú	xa-an-phu	11.1168711	106.4994889	Xã	783	\N	\N
27505	Xã Trung Lập Thượng	xa-trung-lap-thuong	11.0603258	106.4346979	Xã	783	\N	\N
27508	Xã An Nhơn Tây	xa-an-nhon-tay	11.074436	106.4759262	Xã	783	\N	\N
27511	Xã Nhuận Đức	xa-nhuan-duc	11.0461163	106.493598	Xã	783	\N	\N
27514	Xã Phạm Văn Cội	xa-pham-van-coi	11.0338732	106.5171626	Xã	783	\N	\N
27517	Xã Phú Hòa Đông	xa-phu-hoa-dong	11.0203175	106.5642998	Xã	783	\N	\N
27520	Xã Trung Lập Hạ	xa-trung-lap-ha	11.026217	106.458256	Xã	783	\N	\N
27523	Xã Trung An	xa-trung-an	11.0048859	106.5893129	Xã	783	\N	\N
27526	Xã Phước Thạnh	xa-phuoc-thanh	11.011451	106.4288088	Xã	783	\N	\N
27529	Xã Phước Hiệp	xa-phuoc-hiep	10.9831531	106.4464766	Xã	783	\N	\N
27532	Xã Tân An Hội	xa-tan-an-hoi	10.9593528	106.4818167	Xã	783	\N	\N
27535	Xã Phước Vĩnh An	xa-phuoc-vinh-an	10.984377	106.5230542	Xã	783	\N	\N
27538	Xã Thái Mỹ	xa-thai-my	10.990917	106.409935	Xã	783	\N	\N
27541	Xã Tân Thạnh Tây	xa-tan-thanh-tay	10.9875463	106.5642998	Xã	783	\N	\N
27544	Xã Hòa Phú	xa-hoa-phu	10.9765654	106.6143944	Xã	783	\N	\N
27547	Xã Tân Thạnh Đông	xa-tan-thanh-dong	10.9586085	106.5937658	Xã	783	\N	\N
27550	Xã Bình Mỹ	xa-binh-my	10.9399403	106.635025	Xã	783	\N	\N
27553	Xã Tân Phú Trung	xa-tan-phu-trung	10.9389375	106.5411065	Xã	783	\N	\N
27556	Xã Tân Thông Hội	xa-tan-thong-hoi	10.9555622	106.5133215	Xã	783	\N	\N
27559	Thị trấn Hóc Môn	thi-tran-hoc-mon	10.8863934	106.5922924	Thị trấn	784	\N	\N
27562	Xã Tân Hiệp	xa-tan-hiep	10.9084099	106.5912473	Xã	784	\N	\N
27565	Xã Nhị Bình	xa-nhi-binh	10.9132585	106.6733441	Xã	784	\N	\N
27568	Xã Đông Thạnh	xa-dong-thanh	10.9065528	106.6468148	Xã	784	\N	\N
27571	Xã Tân Thới Nhì	xa-tan-thoi-nhi	10.8919577	106.5714148	Xã	784	\N	\N
27574	Xã Thới Tam Thôn	xa-thoi-tam-thon	10.8976059	106.6114474	Xã	784	\N	\N
27577	Xã Xuân Thới Sơn	xa-xuan-thoi-son	10.8790427	106.5525145	Xã	784	\N	\N
27580	Xã Tân Xuân	xa-tan-xuan	10.8684249	106.5967126	Xã	784	\N	\N
27583	Xã Xuân Thới Đông	xa-xuan-thoi-dong	10.8687479	106.5890718	Xã	784	\N	\N
27586	Xã Trung Chánh	xa-trung-chanh	10.8692992	106.6148213	Xã	784	\N	\N
27589	Xã Xuân Thới Thượng	xa-xuan-thoi-thuong	10.8565784	106.5642998	Xã	784	\N	\N
27592	Xã Bà Điểm	xa-ba-diem	10.8411638	106.5967126	Xã	784	\N	\N
27595	Thị trấn Tân Túc	thi-tran-tan-tuc	10.6844901	106.5731392	Thị trấn	785	\N	\N
27598	Xã Phạm Văn Hai	xa-pham-van-hai	10.8148999	106.528946	Xã	785	\N	\N
27601	Xã Vĩnh Lộc A	xa-vinh-loc-a	10.8238657	106.5642998	Xã	785	\N	\N
27604	Xã Vĩnh Lộc B	xa-vinh-loc-b	10.7911649	106.5642998	Xã	785	\N	\N
27607	Xã Bình Lợi	xa-binh-loi	10.7756348	106.5096239	Xã	785	\N	\N
27610	Xã Lê Minh Xuân	xa-le-minh-xuan	10.7661714	106.5230542	Xã	785	\N	\N
27613	Xã Tân Nhựt	xa-tan-nhut	10.7155493	106.5525145	Xã	785	\N	\N
27616	Xã Tân Kiên	xa-tan-kien	10.716207	106.5848072	Xã	785	\N	\N
27619	Xã Bình Hưng	xa-binh-hung	10.7200104	106.6703963	Xã	785	\N	\N
27622	Xã Phong Phú	xa-phong-phu	10.6995307	106.6468148	Xã	785	\N	\N
27625	Xã An Phú Tây	xa-an-phu-tay	10.6880126	106.6085003	Xã	785	\N	\N
27628	Xã Hưng Long	xa-hung-long	10.6681681	106.6232359	Xã	785	\N	\N
27631	Xã Đa Phước	xa-da-phuoc	10.666245	106.6586052	Xã	785	\N	\N
27634	Xã Tân Quý Tây	xa-tan-quy-tay	10.666887	106.5967126	Xã	785	\N	\N
27637	Xã Bình Chánh	xa-binh-chanh	10.6630417	106.5672462	Xã	785	\N	\N
27640	Xã Quy Đức	xa-quy-duc	10.6425712	106.6438673	Xã	785	\N	\N
27643	Thị trấn Nhà Bè	thi-tran-nha-be	10.6943704	106.7411559	Thị trấn	786	\N	\N
27646	Xã Phước Kiển	xa-phuoc-kien	10.70719	106.7057733	Xã	786	\N	\N
27649	Xã Phước Lộc	xa-phuoc-loc	10.7001584	106.685136	Xã	786	\N	\N
27652	Xã Nhơn Đức	xa-nhon-duc	10.6751953	106.6939803	Xã	786	\N	\N
27655	Xã Phú Xuân	xa-phu-xuan	10.6748507	106.7500025	Xã	786	\N	\N
27658	Xã Long Thới	xa-long-thoi	10.6515117	106.7293611	Xã	786	\N	\N
27661	Xã Hiệp Phước	xa-hiep-phuoc	10.6009892	106.7588494	Xã	786	\N	\N
27664	Thị trấn Cần Thạnh	thi-tran-can-thanh	10.4155124	106.9731189	Thị trấn	787	\N	\N
27667	Xã Bình Khánh	xa-binh-khanh	10.6431737	106.7824429	Xã	787	\N	\N
27670	Xã Tam Thôn Hiệp	xa-tam-thon-hiep	10.6037491	106.8595671	Xã	787	\N	\N
27673	Xã An Thới Đông	xa-an-thoi-dong	10.5549722	106.8060388	Xã	787	\N	\N
27676	Xã Thạnh An	xa-thanh-an	10.5459417	106.9712791	Xã	787	\N	\N
27679	Xã Long Hòa	xa-long-hoa	10.4630405	106.9004472	Xã	787	\N	\N
27682	Xã Lý Nhơn	xa-ly-nhon	10.468149	106.8060388	Xã	787	\N	\N
27685	Phường 5	phuong-5	10.5483857	106.4229199	Phường	794	\N	\N
27688	Phường 2	phuong-2	10.5410098	106.4081983	Phường	794	\N	\N
27691	Phường 4	phuong-4	10.5253215	106.3964218	Phường	794	\N	\N
27692	Phường Tân Khánh	phuong-tan-khanh	10.4933273	106.3846459	Phường	794	\N	\N
27694	Phường 1	phuong-1	10.5379926	106.4149996	Phường	794	\N	\N
27697	Phường 3	phuong-3	10.5341682	106.4223358	Phường	794	\N	\N
27698	Phường 7	phuong-7	10.5240194	106.411762	Phường	794	\N	\N
27700	Phường 6	phuong-6	10.5449449	106.3874756	Phường	794	\N	\N
27703	Xã Hướng Thọ Phú	xa-huong-tho-phu	10.5688263	106.3964218	Xã	794	\N	\N
27706	Xã Nhơn Thạnh Trung	xa-nhon-thanh-trung	10.5471353	106.4464766	Xã	794	\N	\N
27709	Xã Lợi Bình Nhơn	xa-loi-binh-nhon	10.5406261	106.3640398	Xã	794	\N	\N
27712	Xã Bình Tâm	xa-binh-tam	10.5231405	106.4376425	Xã	794	\N	\N
27715	Phường Khánh Hậu	phuong-khanh-hau	10.5099443	106.3787583	Phường	794	\N	\N
27718	Xã An Vĩnh Ngãi	xa-an-vinh-ngai	10.505518	106.4111425	Xã	794	\N	\N
27721	Thị trấn Tân Hưng	thi-tran-tan-hung	10.836483	105.6617813	Thị trấn	796	\N	\N
27724	Xã Hưng Hà	xa-hung-ha	10.9217985	105.652983	Xã	796	\N	\N
27727	Xã Hưng Điền B	xa-hung-dien-b	10.9242406	105.6060661	Xã	796	\N	\N
27730	Xã Hưng Điền	xa-hung-dien	10.9266748	105.5591615	Xã	796	\N	\N
27733	Xã Thạnh Hưng	xa-thanh-hung	10.7357733	105.8642593	Xã	796	\N	\N
27736	Xã Hưng Thạnh	xa-hung-thanh	10.8511772	105.636806	Xã	796	\N	\N
27739	Xã Vĩnh Thạnh	xa-vinh-thanh	10.8317711	105.6999122	Xã	796	\N	\N
27742	Xã Vĩnh Châu B	xa-vinh-chau-b	10.8071484	105.6471178	Xã	796	\N	\N
27745	Xã Vĩnh Lợi	xa-vinh-loi	10.803016	105.7658113	Xã	796	\N	\N
27748	Xã Vĩnh Đại	xa-vinh-dai	10.7325283	105.7939786	Xã	796	\N	\N
27751	Xã Vĩnh Châu A	xa-vinh-chau-a	10.7305237	105.732199	Xã	796	\N	\N
27754	Xã Vĩnh Bửu	xa-vinh-buu	10.6618574	105.7822198	Xã	796	\N	\N
27757	Thị trấn Vĩnh Hưng	thi-tran-vinh-hung	10.8899502	105.790872	Thị trấn	797	\N	\N
27760	Xã Hưng Điền A	xa-hung-dien-a	11.0071662	105.7431554	Xã	797	\N	\N
27763	Xã Khánh Hưng	xa-khanh-hung	10.9631687	105.6999122	Xã	797	\N	\N
27766	Xã Thái Trị	xa-thai-tri	10.9582266	105.7938069	Xã	797	\N	\N
27769	Xã Vĩnh Trị	xa-vinh-tri	10.9034933	105.80559	Xã	797	\N	\N
27772	Xã Thái Bình Trung	xa-thai-binh-trung	10.9028612	105.8055471	Xã	797	\N	\N
27775	Xã Vĩnh Bình	xa-vinh-binh	10.8872116	105.818424	Xã	797	\N	\N
27778	Xã Vĩnh Thuận	xa-vinh-thuan	10.8509586	105.7599172	Xã	797	\N	\N
27781	Xã Tuyên Bình	xa-tuyen-binh	10.9029876	105.80559	Xã	797	\N	\N
27784	Xã Tuyên Bình Tây	xa-tuyen-binh-tay	10.84798	105.844902	Xã	797	\N	\N
27787	Phường 1	phuong-1	10.7775414	105.9356139	Phường	795	\N	\N
27788	Phường 2	phuong-2	10.7756596	105.9279978	Phường	795	\N	\N
27790	Xã Thạnh Trị	xa-thanh-tri	10.8607422	105.981739	Xã	795	\N	\N
27793	Xã Bình Hiệp	xa-binh-hiep	10.8246543	105.9406128	Xã	795	\N	\N
27796	Xã Bình Hòa Tây	xa-binh-hoa-tay	10.8170207	105.981739	Xã	798	\N	\N
27799	Xã Bình Tân	xa-binh-tan	10.8265092	105.9053689	Xã	795	\N	\N
27802	Xã Bình Thạnh	xa-binh-thanh	10.7965934	106.0581397	Xã	798	\N	\N
27805	Xã Tuyên Thạnh	xa-tuyen-thanh	10.778249	105.8877494	Xã	795	\N	\N
27806	Phường 3	phuong-3	10.767291	105.8981287	Phường	795	\N	\N
27808	Xã Bình Hòa Trung	xa-binh-hoa-trung	10.7566294	105.9876149	Xã	798	\N	\N
27811	Xã Bình Hòa Đông	xa-binh-hoa-dong	10.7650744	106.0346285	Xã	798	\N	\N
27814	Xã Bình Phong Thạnh	xa-binh-phong-thanh	10.7465277	106.0757749	Xã	798	\N	\N
27817	Xã Thạnh Hưng	xa-thanh-hung	10.7357733	105.8642593	Xã	795	\N	\N
27820	Xã Tân Lập	xa-tan-lap	10.7090371	105.9582372	Xã	798	\N	\N
27823	Xã Tân Thành	xa-tan-thanh	10.7053475	106.0287512	Xã	798	\N	\N
27826	Thị trấn Tân Thạnh	thi-tran-tan-thanh	10.6033973	106.0493226	Thị trấn	799	\N	\N
27829	Xã Bắc Hòa	xa-bac-hoa	10.6813848	105.9023277	Xã	799	\N	\N
27832	Xã Hậu Thạnh Tây	xa-hau-thanh-tay	10.6078027	106.0169971	Xã	799	\N	\N
27835	Xã Nhơn Hòa Lập	xa-nhon-hoa-lap	10.6078027	106.0169971	Xã	799	\N	\N
27838	Xã Tân Lập	xa-tan-lap	10.6217537	105.9582372	Xã	799	\N	\N
27841	Xã Hậu Thạnh Đông	xa-hau-thanh-dong	10.631155	105.8818766	Xã	799	\N	\N
27844	Xã Nhơn Hoà	xa-nhon-hoa	10.6086463	106.0170829	Xã	799	\N	\N
27847	Xã Kiến Bình	xa-kien-binh	10.6078027	106.0169971	Xã	799	\N	\N
27850	Xã Tân Thành	xa-tan-thanh	10.7053475	106.0287512	Xã	799	\N	\N
27853	Xã Tân Bình	xa-tan-binh	10.572057	106.0757749	Xã	799	\N	\N
27856	Xã Tân Ninh	xa-tan-ninh	10.6078027	106.0169971	Xã	799	\N	\N
27859	Xã Nhơn Ninh	xa-nhon-ninh	10.5551361	105.981739	Xã	799	\N	\N
27862	Xã Tân Hòa	xa-tan-hoa	10.6078027	106.0169971	Xã	799	\N	\N
27865	Thị trấn Thạnh Hóa	thi-tran-thanh-hoa	10.6485479	106.1757379	Thị trấn	800	\N	\N
27868	Xã Tân Hiệp	xa-tan-hiep	10.7864512	106.1463317	Xã	800	\N	\N
27871	Xã Thuận Bình	xa-thuan-binh	10.7402967	106.1933837	Xã	800	\N	\N
27874	Xã Thạnh Phước	xa-thanh-phuoc	10.6798261	106.099291	Xã	800	\N	\N
27877	Xã Thạnh Phú	xa-thanh-phu	10.6933963	106.1522126	Xã	800	\N	\N
27880	Xã Thuận Nghĩa Hòa	xa-thuan-nghia-hoa	10.6966712	106.1933837	Xã	800	\N	\N
27883	Xã Thủy Đông	xa-thuy-dong	10.6300329	106.2169139	Xã	800	\N	\N
27886	Xã Thủy Tây	xa-thuy-tay	10.6349809	106.1228099	Xã	800	\N	\N
27889	Xã Tân Tây	xa-tan-tay	10.6224124	106.2580983	Xã	800	\N	\N
27892	Xã Tân Đông	xa-tan-dong	10.6045227	106.287521	Xã	800	\N	\N
27895	Xã Thạnh An	xa-thanh-an	10.5901648	106.1463317	Xã	800	\N	\N
27898	Thị trấn Đông Thành	thi-tran-dong-thanh	10.8932068	106.293406	Thị trấn	801	\N	\N
27901	Xã Mỹ Quý Đông	xa-my-quy-dong	10.9626115	106.2227968	Xã	801	\N	\N
32059	Xã Khánh An	xa-khanh-an	9.2569645	105.0206757	Xã	966	\N	\N
27904	Xã Mỹ Thạnh Bắc	xa-my-thanh-bac	10.9330449	106.2639825	Xã	801	\N	\N
27907	Xã Mỹ Quý Tây	xa-my-quy-tay	10.9162789	106.1698563	Xã	801	\N	\N
27910	Xã Mỹ Thạnh Tây	xa-my-thanh-tay	10.8918831	106.2169139	Xã	801	\N	\N
27913	Xã Mỹ Thạnh Đông	xa-my-thanh-dong	10.8713635	106.293406	Xã	801	\N	\N
27916	Xã Bình Thành	xa-binh-thanh	10.8077639	106.2580983	Xã	801	\N	\N
27919	Xã Bình Hòa Bắc	xa-binh-hoa-bac	10.8431128	106.3110622	Xã	801	\N	\N
27922	Xã Bình Hòa Hưng	xa-binh-hoa-hung	10.8058911	106.2094742	Xã	801	\N	\N
27925	Xã Bình Hòa Nam	xa-binh-hoa-nam	10.7981899	106.3346061	Xã	801	\N	\N
27928	Xã Mỹ Bình	xa-my-binh	10.8469226	106.2404468	Xã	801	\N	\N
27931	Thị trấn Hậu Nghĩa	thi-tran-hau-nghia	10.9070312	106.3905338	Thị trấn	802	\N	\N
27934	Thị trấn Hiệp Hòa	thi-tran-hiep-hoa	10.9137749	106.3169479	Thị trấn	802	\N	\N
27937	Thị trấn Đức Hòa	thi-tran-duc-hoa	10.8218145	106.4570859	Thị trấn	802	\N	\N
27940	Xã Lộc Giang	xa-loc-giang	11.0127922	106.3051766	Xã	802	\N	\N
27943	Xã An Ninh Đông	xa-an-ninh-dong	10.9739937	106.3409519	Xã	802	\N	\N
27946	Xã An Ninh Tây	xa-an-ninh-tay	10.9690561	106.3051766	Xã	802	\N	\N
27949	Xã Tân Mỹ	xa-tan-my	10.9484752	106.3817021	Xã	802	\N	\N
27952	Xã Hiệp Hòa	xa-hiep-hoa	10.9452677	106.3404925	Xã	802	\N	\N
27955	Xã Đức Lập Thượng	xa-duc-lap-thuong	10.9298295	106.4229199	Xã	802	\N	\N
27958	Xã Đức Lập Hạ	xa-duc-lap-ha	10.9066982	106.4464766	Xã	802	\N	\N
27961	Xã Tân Phú	xa-tan-phu	10.8842283	106.3581527	Xã	802	\N	\N
27964	Xã Mỹ Hạnh Bắc	xa-my-hanh-bac	10.8983289	106.4994889	Xã	802	\N	\N
27967	Xã Đức Hòa Thượng	xa-duc-hoa-thuong	10.8630384	106.4464766	Xã	802	\N	\N
27970	Xã Hòa Khánh Tây	xa-hoa-khanh-tay	10.8559756	106.3758145	Xã	802	\N	\N
27973	Xã Hòa Khánh Đông	xa-hoa-khanh-dong	10.8505231	106.4258643	Xã	802	\N	\N
27976	Xã Mỹ Hạnh Nam	xa-my-hanh-nam	10.8707244	106.50538	Xã	802	\N	\N
27979	Xã Hòa Khánh Nam	xa-hoa-khanh-nam	10.8328702	106.3993658	Xã	802	\N	\N
27982	Xã Đức Hòa Đông	xa-duc-hoa-dong	10.8328676	106.4994889	Xã	802	\N	\N
27985	Xã Đức Hòa Hạ	xa-duc-hoa-ha	10.7905354	106.4759262	Xã	802	\N	\N
27988	Xã Hựu Thạnh	xa-huu-thanh	10.7982275	106.4346979	Xã	802	\N	\N
27991	Thị trấn Bến Lức	thi-tran-ben-luc	10.631643	106.493598	Thị trấn	803	\N	\N
27994	Xã Thạnh Lợi	xa-thanh-loi	10.7520279	106.3817021	Xã	803	\N	\N
27997	Xã Lương Bình	xa-luong-binh	10.7546177	106.4346979	Xã	803	\N	\N
28000	Xã Thạnh Hòa	xa-thanh-hoa	10.7071658	106.4052541	Xã	803	\N	\N
28003	Xã Lương Hòa	xa-luong-hoa	10.7046301	106.4523662	Xã	803	\N	\N
28006	Xã Tân Hòa	xa-tan-hoa	10.7187428	106.493598	Xã	803	\N	\N
28009	Xã Tân Bửu	xa-tan-buu	10.6847982	106.5171626	Xã	803	\N	\N
28012	Xã An Thạnh	xa-an-thanh	10.6655633	106.470036	Xã	803	\N	\N
28015	Xã Bình Đức	xa-binh-duc	10.6687246	106.4111425	Xã	803	\N	\N
28018	Xã Mỹ Yên	xa-my-yen	10.650871	106.5407299	Xã	803	\N	\N
28021	Xã Thanh Phú	xa-thanh-phu	10.6636608	106.50538	Xã	803	\N	\N
28024	Xã Long Hiệp	xa-long-hiep	10.6412586	106.5171626	Xã	803	\N	\N
28027	Xã Thạnh Đức	xa-thanh-duc	10.6341694	106.4464766	Xã	803	\N	\N
28030	Xã Phước Lợi	xa-phuoc-loi	10.6207911	106.543676	Xã	803	\N	\N
28033	Xã Nhựt Chánh	xa-nhut-chanh	10.6198869	106.4747343	Xã	803	\N	\N
28036	Thị trấn Thủ Thừa	thi-tran-thu-thua	10.6120388	106.40231	Thị trấn	804	\N	\N
28039	Xã Long Thạnh	xa-long-thanh	10.7301396	106.2816361	Xã	804	\N	\N
28042	Xã Tân Thành	xa-tan-thanh	10.6221423	106.3952065	Xã	804	\N	\N
28045	Xã Long Thuận	xa-long-thuan	10.6686235	106.3110622	Xã	804	\N	\N
28048	Xã Mỹ Lạc	xa-my-lac	10.6295619	106.3287199	Xã	804	\N	\N
28051	Xã Mỹ Thạnh	xa-my-thanh	10.6283104	106.3522658	Xã	804	\N	\N
28054	Xã Bình An	xa-binh-an	10.5824593	106.3995375	Xã	804	\N	\N
28057	Xã Nhị Thành	xa-nhi-thanh	10.5918971	106.4229199	Xã	804	\N	\N
28060	Xã Mỹ An	xa-my-an	10.5751315	106.3287199	Xã	804	\N	\N
28063	Xã Bình Thạnh	xa-binh-thanh	10.5822695	106.3993658	Xã	804	\N	\N
28066	Xã Mỹ Phú	xa-my-phu	10.5732628	106.3640398	Xã	804	\N	\N
28069	Xã Long Thành	xa-long-thanh	10.7301396	106.2816361	Xã	804	\N	\N
28072	Xã Tân Lập	xa-tan-lap	10.7160894	106.3404925	Xã	804	\N	\N
28075	Thị trấn Tân Trụ	thi-tran-tan-tru	10.508208	106.5142169	Thị trấn	805	\N	\N
28078	Xã Mỹ Bình	xa-my-binh	10.5874507	106.4553111	Xã	805	\N	\N
28081	Xã An Nhựt Tân	xa-an-nhut-tan	10.5746875	106.4906526	Xã	805	\N	\N
28084	Xã Quê Mỹ Thạnh	xa-que-my-thanh	10.5676309	106.470036	Xã	805	\N	\N
28087	Xã Lạc Tấn	xa-lac-tan	10.5532535	106.4847619	Xã	805	\N	\N
28090	Xã Bình Trinh Đông	xa-binh-trinh-dong	10.5433724	106.5171626	Xã	805	\N	\N
28093	Xã Tân Phước Tây	xa-tan-phuoc-tay	10.5414846	106.5525145	Xã	805	\N	\N
28096	Xã Bình Lãng	xa-binh-lang	10.5205831	106.478336	Xã	805	\N	\N
28099	Xã Bình Tịnh	xa-binh-tinh	10.5272667	106.4888067	Xã	805	\N	\N
28102	Xã Đức Tân	xa-duc-tan	10.499276	106.528946	Xã	805	\N	\N
28105	Xã Nhựt Ninh	xa-nhut-ninh	10.5088856	106.5525145	Xã	805	\N	\N
28108	Thị trấn Cần Đước	thi-tran-can-duoc	10.5034965	106.6026064	Thị trấn	806	\N	\N
28111	Xã Long Trạch	xa-long-trach	10.6185688	106.5849256	Xã	806	\N	\N
28114	Xã Long Khê	xa-long-khe	10.6351689	106.5714904	Xã	806	\N	\N
28117	Xã Long Định	xa-long-dinh	10.6092498	106.50538	Xã	806	\N	\N
28120	Xã Phước Vân	xa-phuoc-van	10.6954877	106.2430347	Xã	806	\N	\N
28123	Xã Long Hòa	xa-long-hoa	10.5862627	106.5790323	Xã	806	\N	\N
28126	Xã Long Cang	xa-long-cang	10.5843029	106.5142169	Xã	806	\N	\N
28129	Xã Long Sơn	xa-long-son	10.563855	106.5407299	Xã	806	\N	\N
28132	Xã Tân Trạch	xa-tan-trach	10.5619606	106.5760857	Xã	806	\N	\N
28135	Xã Mỹ Lệ	xa-my-le	10.5546073	106.6058109	Xã	806	\N	\N
28138	Xã Tân Lân	xa-tan-lan	10.5243641	106.6112825	Xã	806	\N	\N
28141	Xã Phước Tuy	xa-phuoc-tuy	10.5125866	106.5752202	Xã	806	\N	\N
28144	Xã Long Hựu Đông	xa-long-huu-dong	10.4898246	106.7057733	Xã	806	\N	\N
28147	Xã Tân Ân	xa-tan-an	10.4917047	106.5932393	Xã	806	\N	\N
28150	Xã Phước Đông	xa-phuoc-dong	10.4936179	106.635025	Xã	806	\N	\N
28153	Xã Long Hựu Tây	xa-long-huu-tay	10.4591592	106.6703963	Xã	806	\N	\N
28156	Xã Tân Chánh	xa-tan-chanh	10.4629328	106.5996595	Xã	806	\N	\N
28159	Thị trấn Cần Giuộc	thi-tran-can-giuoc	10.6043546	106.6718702	Thị trấn	807	\N	\N
28162	Xã Phước Lý	xa-phuoc-ly	10.64673	106.5902144	Xã	807	\N	\N
28165	Xã Long Thượng	xa-long-thuong	10.6444882	106.6085003	Xã	807	\N	\N
28168	Xã Long Hậu	xa-long-hau	10.6310514	106.7057733	Xã	807	\N	\N
28171	Xã Tân Kim	xa-tan-kim	10.6227405	106.6586052	Xã	807	\N	\N
28174	Xã Phước Hậu	xa-phuoc-hau	10.6252937	106.6114474	Xã	807	\N	\N
28177	Xã Mỹ Lộc	xa-my-loc	10.613144	106.635025	Xã	807	\N	\N
28180	Xã Phước Lại	xa-phuoc-lai	10.5990802	106.6939803	Xã	807	\N	\N
28183	Xã Phước Lâm	xa-phuoc-lam	10.5920361	106.6232359	Xã	807	\N	\N
28186	Xã Trường Bình	xa-truong-binh	10.5901262	106.6586052	Xã	807	\N	\N
28189	Xã Thuận Thành	xa-thuan-thanh	10.5734893	106.6143944	Xã	807	\N	\N
28192	Xã Phước Vĩnh Tây	xa-phuoc-vinh-tay	10.5671168	106.682188	Xã	807	\N	\N
28195	Xã Phước Vĩnh Đông	xa-phuoc-vinh-dong	10.5652035	106.7175669	Xã	807	\N	\N
28198	Xã Long An	xa-long-an	10.5607168	106.6497623	Xã	807	\N	\N
28201	Xã Long Phụng	xa-long-phung	10.5466591	106.6586052	Xã	807	\N	\N
28204	Xã Đông Thạnh	xa-dong-thanh	10.5242997	106.6703963	Xã	807	\N	\N
28207	Xã Tân Tập	xa-tan-tap	10.6043546	106.6718702	Xã	807	\N	\N
28210	Thị trấn Tầm Vu	thi-tran-tam-vu	10.4452129	106.4729811	Thị trấn	808	\N	\N
28213	Xã Bình Quới	xa-binh-quoi	10.5138955	106.458256	Xã	808	\N	\N
28216	Xã Hòa Phú	xa-hoa-phu	10.5006752	106.4862116	Xã	808	\N	\N
28219	Xã Phú Ngãi Trị	xa-phu-ngai-tri	10.4909124	106.4818167	Xã	808	\N	\N
28222	Xã Vĩnh Công	xa-vinh-cong	10.4756214	106.440772	Xã	808	\N	\N
28225	Xã Thuận Mỹ	xa-thuan-my	10.4504163	106.566375	Xã	808	\N	\N
28228	Xã Hiệp Thạnh	xa-hiep-thanh	10.4704292	106.458256	Xã	808	\N	\N
28231	Xã Phước Tân Hưng	xa-phuoc-tan-hung	10.4685614	106.493598	Xã	808	\N	\N
28234	Xã Thanh Phú Long	xa-thanh-phu-long	10.445595	106.5171626	Xã	808	\N	\N
28237	Xã Dương Xuân Hội	xa-duong-xuan-hoi	10.4352836	106.4553111	Xã	808	\N	\N
28240	Xã An Lục Long	xa-an-luc-long	10.4155076	106.470036	Xã	808	\N	\N
28243	Xã Long Trì	xa-long-tri	10.4282224	106.4346979	Xã	808	\N	\N
28246	Xã Thanh Vĩnh Đông	xa-thanh-vinh-dong	10.430963	106.555044	Xã	808	\N	\N
28249	Phường 5	phuong-5	10.3666306	106.3523721	Phường	815	\N	\N
28252	Phường 4	phuong-4	10.3575003	106.3596245	Phường	815	\N	\N
28255	Phường 7	phuong-7	10.3626218	106.3655116	Phường	815	\N	\N
28258	Phường 3	phuong-3	10.3596023	106.3713989	Phường	815	\N	\N
28261	Phường 1	phuong-1	10.3544812	106.3655116	Phường	815	\N	\N
28264	Phường 2	phuong-2	10.3541017	106.3740386	Phường	815	\N	\N
28267	Phường 8	phuong-8	10.3585032	106.3794942	Phường	815	\N	\N
28270	Phường 6	phuong-6	10.3518719	106.347671	Phường	815	\N	\N
28273	Phường 9	phuong-9	10.3561715	106.3865753	Phường	815	\N	\N
28276	Phường 10	phuong-10	10.3762875	106.3375493	Phường	815	\N	\N
28279	Phường Tân Long	phuong-tan-long	10.3464238	106.3744576	Phường	815	\N	\N
28282	Xã Đạo Thạnh	xa-dao-thanh	10.3830396	106.351015	Xã	815	\N	\N
28285	Xã Trung An	xa-trung-an	10.3661512	106.3261288	Xã	815	\N	\N
28288	Xã Mỹ Phong	xa-my-phong	10.3768128	106.3784084	Xã	815	\N	\N
28291	Xã Tân Mỹ Chánh	xa-tan-my-chanh	10.3517081	106.3986676	Xã	815	\N	\N
28294	Phường 3	phuong-3	10.3650579	106.680714	Phường	816	\N	\N
28297	Phường 2	phuong-2	10.3590776	106.678503	Phường	816	\N	\N
28300	Phường 4	phuong-4	10.3656831	106.6689224	Phường	816	\N	\N
28303	Phường 1	phuong-1	10.35939	106.6726072	Phường	816	\N	\N
28306	Phường 5	phuong-5	10.3545304	106.6748181	Phường	816	\N	\N
28309	Xã Long Hưng	xa-long-hung	10.37973	106.685136	Xã	816	\N	\N
28312	Xã Long Thuận	xa-long-thuan	10.3602893	106.6939803	Xã	816	\N	\N
28315	Xã Long Chánh	xa-long-chanh	10.3736306	106.6468148	Xã	816	\N	\N
28318	Xã Long Hòa	xa-long-hoa	10.348146	106.6674484	Xã	816	\N	\N
28321	Thị trấn Mỹ Phước	thi-tran-my-phuoc	10.4759918	106.1963248	Thị trấn	818	\N	\N
28324	Xã Tân Hòa Đông	xa-tan-hoa-dong	10.5673515	106.2698669	Xã	818	\N	\N
28327	Xã Thạnh Tân	xa-thanh-tan	10.5453779	106.1698563	Xã	818	\N	\N
28330	Xã Thạnh Mỹ	xa-thanh-my	10.5646898	106.2169139	Xã	818	\N	\N
28333	Xã Thạnh Hoà	xa-thanh-hoa	10.5478288	106.1228099	Xã	818	\N	\N
28336	Xã Phú Mỹ	xa-phu-my	10.5539895	106.3169479	Xã	818	\N	\N
28339	Xã Tân Hòa Thành	xa-tan-hoa-thanh	10.5104776	106.3169479	Xã	818	\N	\N
28342	Xã Hưng Thạnh	xa-hung-thanh	10.5340866	106.2816361	Xã	818	\N	\N
28345	Xã Tân Lập 1	xa-tan-lap-1	10.4682176	106.293406	Xã	818	\N	\N
28348	Xã Tân Hòa Tây	xa-tan-hoa-tay	10.5030653	106.1463317	Xã	818	\N	\N
28351	Xã Mỹ Phước	xa-my-phuoc	10.5006203	106.1933837	Xã	818	\N	\N
28354	Xã Tân Lập 2	xa-tan-lap-2	10.4911933	106.2698669	Xã	818	\N	\N
28357	Xã Phước Lập	xa-phuoc-lap	10.4604116	106.2345633	Xã	818	\N	\N
28360	Thị trấn Cái Bè	thi-tran-cai-be	10.3367347	106.0298196	Thị trấn	819	\N	\N
28363	Xã Hậu Mỹ Bắc B	xa-hau-my-bac-b	10.5179143	105.9641124	Xã	819	\N	\N
28366	Xã Hậu Mỹ Bắc A	xa-hau-my-bac-a	10.4955306	105.9758633	Xã	819	\N	\N
28369	Xã Mỹ Trung	xa-my-trung	10.4440958	105.9171161	Xã	819	\N	\N
28372	Xã Hậu Mỹ Trinh	xa-hau-my-trinh	10.4411037	105.9758633	Xã	819	\N	\N
28375	Xã Hậu Mỹ Phú	xa-hau-my-phu	10.411001	105.994913	Xã	819	\N	\N
28378	Xã Mỹ Tân	xa-my-tan	10.3185132	106.0346285	Xã	819	\N	\N
28381	Xã Mỹ Lợi B	xa-my-loi-b	10.4067102	105.8605265	Xã	819	\N	\N
28384	Xã Thiện Trung	xa-thien-trung	10.4096586	105.9523622	Xã	819	\N	\N
28387	Xã Mỹ Hội	xa-my-hoi	10.4393029	106.0111203	Xã	819	\N	\N
28390	Xã An Cư	xa-an-cu	10.3837219	106.0346285	Xã	819	\N	\N
28393	Xã Hậu Thành	xa-hau-thanh	10.3855166	105.9993672	Xã	819	\N	\N
28396	Xã Mỹ Lợi A	xa-my-loi-a	10.3718873	105.9464874	Xã	819	\N	\N
28399	Xã Hòa Khánh	xa-hoa-khanh	10.3426264	105.9876149	Xã	819	\N	\N
28402	Xã Thiện Trí	xa-thien-tri	10.3586534	105.9677109	Xã	819	\N	\N
28405	Xã Mỹ Đức Đông	xa-my-duc-dong	10.3567624	105.9289499	Xã	819	\N	\N
28408	Xã Mỹ Đức Tây	xa-my-duc-tay	10.3564669	105.9288641	Xã	819	\N	\N
28411	Xã Đông Hòa Hiệp	xa-dong-hoa-hiep	10.3494385	106.0140586	Xã	819	\N	\N
28414	Xã An Thái Đông	xa-an-thai-dong	10.3366902	105.9153112	Xã	819	\N	\N
28417	Xã Tân Hưng	xa-tan-hung	10.3261237	105.8326507	Xã	819	\N	\N
28420	Xã Mỹ Lương	xa-my-luong	10.3732381	105.9464874	Xã	819	\N	\N
28423	Xã Tân Thanh	xa-tan-thanh	10.3254429	105.8396217	Xã	819	\N	\N
28426	Xã An Thái Trung	xa-an-thai-trung	10.3240021	105.8935368	Xã	819	\N	\N
28429	Xã An Hữu	xa-an-huu	10.3082486	105.8926915	Xã	819	\N	\N
28432	Xã Hòa Hưng	xa-hoa-hung	10.2892704	105.9141793	Xã	819	\N	\N
28435	Phường 1	phuong-1	10.3530854	106.3630756	Phường	817	\N	\N
28436	Phường 2	phuong-2	10.3581215	106.6799374	Phường	817	\N	\N
28437	Phường 3	phuong-3	10.3689659	106.6784801	Phường	817	\N	\N
28438	Xã Thạnh Lộc	xa-thanh-loc	10.5033982	106.0346285	Xã	820	\N	\N
28439	Phường 4	phuong-4	10.360669	106.6628406	Phường	817	\N	\N
28440	Phường 5	phuong-5	10.3554103	106.665386	Phường	817	\N	\N
28441	Xã Mỹ Thành Bắc	xa-my-thanh-bac	10.4828345	106.0111203	Xã	820	\N	\N
28444	Xã Phú Cường	xa-phu-cuong	10.48495	106.0757749	Xã	820	\N	\N
28447	Xã Mỹ Phước Tây	xa-my-phuoc-tay	10.4698348	106.1268863	Xã	817	\N	\N
28450	Xã Mỹ Hạnh Đông	xa-my-hanh-dong	10.4640735	106.1639749	Xã	817	\N	\N
28453	Xã Mỹ Hạnh Trung	xa-my-hanh-trung	10.4441443	106.1286901	Xã	817	\N	\N
28456	Xã Mỹ Thành Nam	xa-my-thanh-nam	10.4380999	106.0346285	Xã	820	\N	\N
28459	Xã Tân Phú	xa-tan-phu	10.4038235	106.1198699	Xã	817	\N	\N
28462	Xã Tân Bình	xa-tan-binh	10.4453559	106.1051705	Xã	817	\N	\N
28465	Xã Phú Nhuận	xa-phu-nhuan	10.426018	106.0581397	Xã	820	\N	\N
28468	Xã Tân Hội	xa-tan-hoi	10.4041553	106.1252264	Xã	817	\N	\N
28471	Xã Bình Phú	xa-binh-phu	10.4030648	106.0816536	Xã	820	\N	\N
28474	Phường Nhị Mỹ	phuong-nhi-my	10.4109191	106.140451	Phường	817	\N	\N
28477	Xã Nhị Quý	xa-nhi-quy	10.3956683	106.1727971	Xã	817	\N	\N
28480	Xã Thanh Hòa	xa-thanh-hoa	10.3941584	106.0963513	Xã	817	\N	\N
28483	Xã Phú Quý	xa-phu-quy	10.3796708	106.1669156	Xã	817	\N	\N
28486	Xã Long Khánh	xa-long-khanh	10.3737831	106.1228099	Xã	817	\N	\N
28489	Xã Cẩm Sơn	xa-cam-son	10.3704533	106.0816536	Xã	820	\N	\N
28492	Xã Phú An	xa-phu-an	10.3825231	106.0581397	Xã	820	\N	\N
28495	Xã Mỹ Long	xa-my-long	10.3547738	106.1757379	Xã	820	\N	\N
28498	Xã Long Tiên	xa-long-tien	10.3451168	106.1522126	Xã	820	\N	\N
28501	Xã Hiệp Đức	xa-hiep-duc	10.33905	106.0581397	Xã	820	\N	\N
28504	Xã Long Trung	xa-long-trung	10.3360568	106.1169299	Xã	820	\N	\N
28507	Xã Hội Xuân	xa-hoi-xuan	10.3269905	106.0816536	Xã	820	\N	\N
28510	Xã Tân Phong	xa-tan-phong	10.3064595	106.0581397	Xã	820	\N	\N
28513	Xã Tam Bình	xa-tam-binh	10.3227945	106.1639749	Xã	820	\N	\N
28516	Xã Ngũ Hiệp	xa-ngu-hiep	10.3026069	106.1199201	Xã	820	\N	\N
28519	Thị trấn Tân Hiệp	thi-tran-tan-hiep	10.4465831	106.3434358	Thị trấn	821	\N	\N
28522	Xã Tân Hội Đông	xa-tan-hoi-dong	10.5086213	106.3522658	Xã	821	\N	\N
28525	Xã Tân Hương	xa-tan-huong	10.4862586	106.3640398	Xã	821	\N	\N
28528	Xã Tân Lý Đông	xa-tan-ly-dong	10.4881127	106.3287199	Xã	821	\N	\N
28531	Xã Tân Lý Tây	xa-tan-ly-tay	10.4625755	106.3493224	Xã	821	\N	\N
28534	Xã Thân Cửu Nghĩa	xa-than-cuu-nghia	10.4337697	106.3287199	Xã	821	\N	\N
28537	Xã Tam Hiệp	xa-tam-hiep	10.4132671	106.3051766	Xã	821	\N	\N
28540	Xã Điềm Hy	xa-diem-hy	10.4181489	106.2110311	Xã	821	\N	\N
28543	Xã Nhị Bình	xa-nhi-binh	10.4003968	106.2438593	Xã	821	\N	\N
28546	Xã Dưỡng Điềm	xa-duong-diem	10.3995863	106.2022072	Xã	821	\N	\N
28549	Xã Đông Hòa	xa-dong-hoa	10.3956661	106.2440204	Xã	821	\N	\N
28552	Xã Long Định	xa-long-dinh	10.4157117	106.2580983	Xã	821	\N	\N
28555	Xã Hữu Đạo	xa-huu-dao	10.3778556	106.2022072	Xã	821	\N	\N
28558	Xã Long An	xa-long-an	10.4032411	106.3384114	Xã	821	\N	\N
28561	Xã Long Hưng	xa-long-hung	10.3918135	106.2577295	Xã	821	\N	\N
28564	Xã Bình Trưng	xa-binh-trung	10.3734726	106.2345633	Xã	821	\N	\N
28567	Xã Phước Thạnh	xa-phuoc-thanh	10.3848513	106.3054724	Xã	815	\N	\N
28570	Xã Thạnh Phú	xa-thanh-phu	10.3621212	106.3063817	Xã	821	\N	\N
28573	Xã Bàn Long	xa-ban-long	10.3513717	106.2230717	Xã	821	\N	\N
28576	Xã Vĩnh Kim	xa-vinh-kim	10.3540118	106.2433886	Xã	821	\N	\N
28579	Xã Bình Đức	xa-binh-duc	10.3415828	106.3122991	Xã	821	\N	\N
28582	Xã Song Thuận	xa-song-thuan	10.3325576	106.2695776	Xã	821	\N	\N
28585	Xã Kim Sơn	xa-kim-son	10.329431	106.2463305	Xã	821	\N	\N
28588	Xã Phú Phong	xa-phu-phong	10.3312436	106.2110311	Xã	821	\N	\N
28591	Xã Thới Sơn	xa-thoi-son	10.3268307	106.3075548	Xã	815	\N	\N
28594	Thị trấn Chợ Gạo	thi-tran-cho-gao	10.35198	106.4656184	Thị trấn	822	\N	\N
28597	Xã Trung Hòa	xa-trung-hoa	10.4729129	106.4111425	Xã	822	\N	\N
28600	Xã Hòa Tịnh	xa-hoa-tinh	10.4617909	106.378727	Xã	822	\N	\N
28603	Xã Mỹ Tịnh An	xa-my-tinh-an	10.4606053	106.3843955	Xã	822	\N	\N
28606	Xã Tân Bình Thạnh	xa-tan-binh-thanh	10.4608075	106.4346979	Xã	822	\N	\N
28609	Xã Phú Kiết	xa-phu-kiet	10.4395292	106.3672243	Xã	822	\N	\N
28612	Xã Lương Hòa Lạc	xa-luong-hoa-lac	10.4102007	106.3640398	Xã	822	\N	\N
28615	Xã Thanh Bình	xa-thanh-binh	10.4077392	106.4111425	Xã	822	\N	\N
28618	Xã Quơn Long	xa-quon-long	10.4027938	106.50538	Xã	822	\N	\N
28621	Xã Bình Phục Nhứt	xa-binh-phuc-nhut	10.3907014	106.528946	Xã	822	\N	\N
28624	Xã Đăng Hưng Phước	xa-dang-hung-phuoc	10.3956494	106.4346979	Xã	822	\N	\N
28627	Xã Tân Thuận Bình	xa-tan-thuan-binh	10.3829443	106.470036	Xã	822	\N	\N
28630	Xã Song Bình	xa-song-binh	10.3501962	106.4149716	Xã	822	\N	\N
28633	Xã Bình Phan	xa-binh-phan	10.3600088	106.493598	Xã	822	\N	\N
28636	Xã Long Bình Điền	xa-long-binh-dien	10.3522377	106.4346979	Xã	822	\N	\N
28639	Xã An Thạnh Thủy	xa-an-thanh-thuy	10.3376985	106.50538	Xã	822	\N	\N
28642	Xã Xuân Đông	xa-xuan-dong	10.3399891	106.4393033	Xã	822	\N	\N
28645	Xã Hòa Định	xa-hoa-dinh	10.3286992	106.470036	Xã	822	\N	\N
28648	Xã Bình Ninh	xa-binh-ninh	10.3153957	106.5171626	Xã	822	\N	\N
28651	Thị trấn Vĩnh Bình	thi-tran-vinh-binh	10.3448342	106.5760857	Thị trấn	823	\N	\N
28654	Xã Đồng Sơn	xa-dong-son	10.4082927	106.5554608	Xã	823	\N	\N
28657	Xã Bình Phú	xa-binh-phu	10.4086674	106.5996595	Xã	823	\N	\N
28660	Xã Đồng Thạnh	xa-dong-thanh	10.3767468	106.5878723	Xã	823	\N	\N
28663	Xã Thành Công	xa-thanh-cong	10.3774337	106.6261831	Xã	823	\N	\N
28666	Xã Bình Nhì	xa-binh-nhi	10.3736777	106.5552295	Xã	823	\N	\N
28669	Xã Yên Luông	xa-yen-luong	10.3417297	106.635025	Xã	823	\N	\N
28672	Xã Thạnh Trị	xa-thanh-tri	10.3429729	106.6114474	Xã	823	\N	\N
28675	Xã Thạnh Nhựt	xa-thanh-nhut	10.3481219	106.5429507	Xã	823	\N	\N
28678	Xã Long Vĩnh	xa-long-vinh	10.3110753	106.5996595	Xã	823	\N	\N
28681	Xã Bình Tân	xa-binh-tan	10.3290243	106.6703963	Xã	823	\N	\N
28684	Xã Vĩnh Hựu	xa-vinh-huu	10.301474	106.5760857	Xã	823	\N	\N
28687	Xã Long Bình	xa-long-binh	10.2983819	106.635025	Xã	823	\N	\N
28690	Xã Tân Thới	xa-tan-thoi	10.2931003	106.528946	Xã	825	\N	\N
28693	Xã Tân Phú	xa-tan-phu	10.277952	106.6114474	Xã	825	\N	\N
28696	Xã Phú Thạnh	xa-phu-thanh	10.2640303	106.6703963	Xã	825	\N	\N
28699	Xã Tân Thạnh	xa-tan-thanh	10.2562893	106.6114474	Xã	825	\N	\N
28702	Thị trấn Tân Hòa	thi-tran-tan-hoa	10.3239769	106.7146184	Thị trấn	824	\N	\N
28705	Xã Tăng Hoà	xa-tang-hoa	10.3042404	106.7293611	Xã	824	\N	\N
28708	Xã Bình Đông	xa-binh-dong	10.4495657	106.6468148	Xã	816	\N	\N
28711	Xã Tân Phước	xa-tan-phuoc	10.467485	106.7175669	Xã	824	\N	\N
28714	Xã Gia Thuận	xa-gia-thuan	10.4445204	106.7411559	Xã	824	\N	\N
28717	Xã Bình Xuân	xa-binh-xuan	10.4182668	106.6232359	Xã	816	\N	\N
28720	Thị trấn Vàm Láng	thi-tran-vam-lang	10.4107215	106.7647475	Thị trấn	824	\N	\N
28723	Xã Tân Tây	xa-tan-tay	10.4132441	106.7175669	Xã	824	\N	\N
28726	Xã Kiểng Phước	xa-kieng-phuoc	10.3890396	106.7647475	Xã	824	\N	\N
28729	Xã Tân Trung	xa-tan-trung	10.4049126	106.6703963	Xã	816	\N	\N
28732	Xã Tân Đông	xa-tan-dong	10.3896317	106.702825	Xã	824	\N	\N
28735	Xã Bình Ân	xa-binh-an	10.357783	106.7411559	Xã	824	\N	\N
28738	Xã Tân Điền	xa-tan-dien	10.3554847	106.7573946	Xã	824	\N	\N
28741	Xã Bình Nghị	xa-binh-nghi	10.3379889	106.7057733	Xã	824	\N	\N
28744	Xã Phước Trung	xa-phuoc-trung	10.30611	106.6939803	Xã	824	\N	\N
28747	Xã Tân Thành	xa-tan-thanh	10.2972649	106.7588494	Xã	824	\N	\N
28750	Xã Phú Đông	xa-phu-dong	10.2513453	106.7057733	Xã	825	\N	\N
28753	Xã Phú Tân	xa-phu-tan	10.2513453	106.7057733	Xã	825	\N	\N
28756	Phường Phú Khương	phuong-phu-khuong	10.2493969	106.3787583	Phường	829	\N	\N
28757	Phường Phú Tân	phuong-phu-tan	10.2608437	106.3669834	Phường	829	\N	\N
28759	Phường 8	phuong-8	10.2420922	106.3890618	Phường	829	\N	\N
28762	Phường 6	phuong-6	10.2461645	106.362568	Phường	829	\N	\N
28765	Phường 4	phuong-4	10.2421341	106.3750785	Phường	829	\N	\N
28768	Phường 5	phuong-5	10.2377325	106.3684552	Phường	829	\N	\N
28771	Phường 1	phuong-1	10.2391217	106.3809661	Phường	829	\N	\N
28777	Phường 2	phuong-2	10.2365635	106.3780223	Phường	829	\N	\N
28780	Phường 7	phuong-7	10.2340458	106.3610962	Phường	829	\N	\N
28783	Xã Sơn Đông	xa-son-dong	10.2623576	106.3375493	Xã	829	\N	\N
28786	Xã Phú Hưng	xa-phu-hung	10.2450192	106.4111425	Xã	829	\N	\N
28789	Xã Bình Phú	xa-binh-phu	10.2403718	106.3434358	Xã	829	\N	\N
28792	Xã Mỹ Thạnh An	xa-my-thanh-an	10.222906	106.3669834	Xã	829	\N	\N
28795	Xã Nhơn Thạnh	xa-nhon-thanh	10.2131172	106.3993658	Xã	829	\N	\N
28798	Xã Phú Nhuận	xa-phu-nhuan	10.2114661	106.3787583	Xã	829	\N	\N
28801	Thị trấn Châu Thành	thi-tran-chau-thanh	10.30483	106.3552092	Thị trấn	831	\N	\N
28804	Xã Tân Thạch	xa-tan-thach	10.3335989	106.3758145	Xã	831	\N	\N
28807	Xã Qưới Sơn	xa-quoi-son	10.3215281	106.3993658	Xã	831	\N	\N
28810	Xã An Khánh	xa-an-khanh	10.3143344	106.3287199	Xã	831	\N	\N
28813	Xã Giao Long	xa-giao-long	10.3065953	106.4258643	Xã	831	\N	\N
28816	Xã Giao Hòa	xa-giao-hoa	10.2951403	106.4376425	Xã	831	\N	\N
28819	Xã Phú Túc	xa-phu-tuc	10.3167609	106.2816361	Xã	831	\N	\N
28822	Xã Phú Đức	xa-phu-duc	10.3089284	106.2227968	Xã	831	\N	\N
28825	Xã Phú An Hòa	xa-phu-an-hoa	10.2958919	106.3788634	Xã	831	\N	\N
28828	Xã An Phước	xa-an-phuoc	10.2883812	106.4111425	Xã	831	\N	\N
28831	Xã Tam Phước	xa-tam-phuoc	10.2920301	106.3404925	Xã	831	\N	\N
28834	Xã Thành Triệu	xa-thanh-trieu	10.2956625	106.2698669	Xã	831	\N	\N
28837	Xã Tường Đa	xa-tuong-da	10.2938484	106.3051766	Xã	831	\N	\N
28840	Xã Tân Phú	xa-tan-phu	10.2787715	106.1757379	Xã	831	\N	\N
28843	Xã Quới Thành	xa-quoi-thanh	10.2866207	106.2345633	Xã	831	\N	\N
28846	Xã Phước Thạnh	xa-phuoc-thanh	10.2813143	106.3905338	Xã	831	\N	\N
28849	Xã An Hóa	xa-an-hoa	10.2791825	106.4317533	Xã	831	\N	\N
28852	Xã Tiên Long	xa-tien-long	10.266122	106.2110311	Xã	831	\N	\N
28855	Xã An Hiệp	xa-an-hiep	10.2727576	106.293406	Xã	831	\N	\N
28858	Xã Hữu Định	xa-huu-dinh	10.2647472	106.3964218	Xã	831	\N	\N
28861	Xã Tiên Thủy	xa-tien-thuy	10.2643204	106.2463305	Xã	831	\N	\N
28864	Xã Sơn Hòa	xa-son-hoa	10.2635666	106.314005	Xã	831	\N	\N
28867	Xã Mỹ Thành	xa-my-thanh	10.2463962	106.3316629	Xã	829	\N	\N
28870	Thị trấn Chợ Lách	thi-tran-cho-lach	10.2674473	106.1316303	Thị trấn	832	\N	\N
28873	Xã Phú Phụng	xa-phu-phung	10.2744749	106.0463837	Xã	832	\N	\N
28876	Xã Sơn Định	xa-son-dinh	10.2715021	106.1051705	Xã	832	\N	\N
28879	Xã Vĩnh Bình	xa-vinh-binh	10.2515765	106.0698963	Xã	832	\N	\N
28882	Xã Hòa Nghĩa	xa-hoa-nghia	10.2371597	106.140451	Xã	832	\N	\N
28885	Xã Long Thới	xa-long-thoi	10.2347749	106.1875016	Xã	832	\N	\N
28888	Xã Phú Sơn	xa-phu-son	10.2323827	106.2345633	Xã	832	\N	\N
28889	Xã Phú Mỹ	xa-phu-my	10.2342292	106.256781	Xã	838	\N	\N
28891	Xã Tân Thiềng	xa-tan-thieng	10.2028364	106.1757379	Xã	832	\N	\N
28894	Xã Vĩnh Thành	xa-vinh-thanh	10.2004534	106.2227968	Xã	832	\N	\N
28897	Xã Vĩnh Hòa	xa-vinh-hoa	10.2072395	106.2492724	Xã	832	\N	\N
28900	Xã Hưng Khánh Trung B	xa-hung-khanh-trung-b	10.1650799	106.2257384	Xã	832	\N	\N
28901	Xã Hưng Khánh Trung A	xa-hung-khanh-trung-a	10.1661511	106.2580983	Xã	838	\N	\N
28903	Thị trấn Mỏ Cày	thi-tran-mo-cay	10.1272227	106.3316629	Thị trấn	833	\N	\N
28906	Xã Thanh Tân	xa-thanh-tan	10.2510671	106.293406	Xã	838	\N	\N
28909	Xã Thạnh Ngãi	xa-thanh-ngai	10.2287806	106.3051766	Xã	838	\N	\N
28912	Xã Tân Phú Tây	xa-tan-phu-tay	10.2077027	106.293406	Xã	838	\N	\N
28915	Xã Phước Mỹ Trung	xa-phuoc-my-trung	10.1952039	106.2728091	Xã	838	\N	\N
28918	Xã Tân Thành Bình	xa-tan-thanh-binh	10.1836298	106.3404925	Xã	838	\N	\N
28921	Xã Thành An	xa-thanh-an	10.1828707	106.3022339	Xã	838	\N	\N
28924	Xã Hòa Lộc	xa-hoa-loc	10.1631642	106.3169479	Xã	838	\N	\N
28927	Xã Tân Thanh Tây	xa-tan-thanh-tay	10.1541249	106.2816361	Xã	838	\N	\N
28930	Xã Định Thủy	xa-dinh-thuy	10.1505375	106.3522658	Xã	833	\N	\N
28933	Xã Tân Bình	xa-tan-binh	10.1452558	106.2963486	Xã	838	\N	\N
28936	Xã Nhuận Phú Tân	xa-nhuan-phu-tan	10.1342475	106.2463305	Xã	838	\N	\N
28939	Xã Đa Phước Hội	xa-da-phuoc-hoi	10.1078316	106.3404925	Xã	833	\N	\N
28940	Xã Tân Hội	xa-tan-hoi	10.1281178	106.314005	Xã	833	\N	\N
28942	Xã Phước Hiệp	xa-phuoc-hiep	10.1257285	106.3610962	Xã	833	\N	\N
28945	Xã Bình Khánh Đông	xa-binh-khanh-dong	10.1079981	106.3905338	Xã	833	\N	\N
28948	Xã Khánh Thạnh Tân	xa-khanh-thanh-tan	10.1108078	106.2816361	Xã	838	\N	\N
28951	Xã An Thạnh	xa-an-thanh	10.0981994	106.3169479	Xã	833	\N	\N
28954	Xã Bình Khánh Tây	xa-binh-khanh-tay	10.0966989	106.3867226	Xã	833	\N	\N
28957	Xã An Định	xa-an-dinh	10.0838032	106.3875898	Xã	833	\N	\N
28960	Xã Thành Thới B	xa-thanh-thoi-b	10.0669209	106.293406	Xã	833	\N	\N
28963	Xã Tân Trung	xa-tan-trung	10.0644264	106.3964218	Xã	833	\N	\N
28966	Xã An Thới	xa-an-thoi	10.0645488	106.3404925	Xã	833	\N	\N
28969	Xã Thành Thới A	xa-thanh-thoi-a	10.0435083	106.3287199	Xã	833	\N	\N
28972	Xã Minh Đức	xa-minh-duc	10.0501636	106.4111425	Xã	833	\N	\N
28975	Xã Ngãi Đăng	xa-ngai-dang	10.0445815	106.3610962	Xã	833	\N	\N
28978	Xã Cẩm Sơn	xa-cam-son	10.0149951	106.3581527	Xã	833	\N	\N
28981	Xã Hương Mỹ	xa-huong-my	9.9967097	106.3993658	Xã	833	\N	\N
28984	Thị trấn Giồng Trôm	thi-tran-giong-trom	10.1751757	106.50538	Thị trấn	834	\N	\N
32242	Xã Viên An	xa-vien-an	8.6637275	104.8337879	Xã	973	\N	\N
28987	Xã Phong Nẫm	xa-phong-nam	10.2431959	106.4464766	Xã	834	\N	\N
28990	Xã Phong Mỹ	xa-phong-my	10.231144	106.470036	Xã	834	\N	\N
28993	Xã Mỹ Thạnh	xa-my-thanh	10.2147665	106.4199755	Xã	834	\N	\N
28996	Xã Châu Hòa	xa-chau-hoa	10.2082642	106.493598	Xã	834	\N	\N
28999	Xã Lương Hòa	xa-luong-hoa	10.1998633	106.4464766	Xã	834	\N	\N
29002	Xã Lương Quới	xa-luong-quoi	10.1957914	106.4729811	Xã	834	\N	\N
29005	Xã Lương Phú	xa-luong-phu	10.1870826	106.4317533	Xã	834	\N	\N
29008	Xã Châu Bình	xa-chau-binh	10.1835665	106.5525145	Xã	834	\N	\N
29011	Xã Thuận Điền	xa-thuan-dien	10.1908477	106.4111425	Xã	834	\N	\N
29014	Xã Sơn Phú	xa-son-phu	10.1812235	106.3875898	Xã	834	\N	\N
29017	Xã Bình Hoà	xa-binh-hoa	10.154135	106.493598	Xã	834	\N	\N
29020	Xã Phước Long	xa-phuoc-long	10.1475354	106.4111425	Xã	834	\N	\N
29023	Xã Hưng Phong	xa-hung-phong	10.140468	106.3905338	Xã	834	\N	\N
29026	Xã Long Mỹ	xa-long-my	10.1565528	106.4464766	Xã	834	\N	\N
29029	Xã Tân Hào	xa-tan-hao	10.1445219	106.470036	Xã	834	\N	\N
29032	Xã Bình Thành	xa-binh-thanh	10.141497	106.528946	Xã	834	\N	\N
29035	Xã Tân Thanh	xa-tan-thanh	10.121674	106.493598	Xã	834	\N	\N
29038	Xã Tân Lợi Thạnh	xa-tan-loi-thanh	10.1240844	106.4464766	Xã	834	\N	\N
29041	Xã Thạnh Phú Đông	xa-thanh-phu-dong	10.103046	106.4346979	Xã	834	\N	\N
29044	Xã Hưng Nhượng	xa-hung-nhuong	10.0892255	106.493598	Xã	834	\N	\N
29047	Xã Hưng Lễ	xa-hung-le	10.0700071	106.4680488	Xã	834	\N	\N
29050	Thị trấn Bình Đại	thi-tran-binh-dai	10.1784619	106.702825	Thị trấn	835	\N	\N
29053	Xã Tam Hiệp	xa-tam-hiep	10.2961685	106.470036	Xã	835	\N	\N
29056	Xã Long Định	xa-long-dinh	10.2827705	106.4670909	Xã	835	\N	\N
29059	Xã Long Hòa	xa-long-hoa	10.2642605	106.458256	Xã	835	\N	\N
29062	Xã Phú Thuận	xa-phu-thuan	10.2624279	106.493598	Xã	835	\N	\N
29065	Xã Vang Quới Tây	xa-vang-quoi-tay	10.2497575	106.528946	Xã	835	\N	\N
29068	Xã Vang Quới Đông	xa-vang-quoi-dong	10.248532	106.5525145	Xã	835	\N	\N
29071	Xã Châu Hưng	xa-chau-hung	10.2401478	106.50538	Xã	835	\N	\N
29074	Xã Phú Vang	xa-phu-vang	10.2364748	106.5760857	Xã	835	\N	\N
29077	Xã Lộc Thuận	xa-loc-thuan	10.2170666	106.5849256	Xã	835	\N	\N
29080	Xã Định Trung	xa-dinh-trung	10.2225761	106.635025	Xã	835	\N	\N
29083	Xã Thới Lai	xa-thoi-lai	10.2166542	106.5407299	Xã	835	\N	\N
29086	Xã Bình Thới	xa-binh-thoi	10.2099064	106.6703963	Xã	835	\N	\N
29089	Xã Phú Long	xa-phu-long	10.1919465	106.5996595	Xã	835	\N	\N
29092	Xã Bình Thắng	xa-binh-thang	10.1858039	106.7175669	Xã	835	\N	\N
29095	Xã Thạnh Trị	xa-thanh-tri	10.167858	106.6468148	Xã	835	\N	\N
29098	Xã Đại Hòa Lộc	xa-dai-hoa-loc	10.1558168	106.6703963	Xã	835	\N	\N
29101	Xã Thừa Đức	xa-thua-duc	10.1445702	106.7824429	Xã	835	\N	\N
29104	Xã Thạnh Phước	xa-thanh-phuoc	10.1266427	106.71167	Xã	835	\N	\N
29107	Xã Thới Thuận	xa-thoi-thuan	10.0605957	106.7352584	Xã	835	\N	\N
29110	Thị trấn Ba Tri	thi-tran-ba-tri	10.0425358	106.5966659	Thị trấn	836	\N	\N
29113	Xã Tân Mỹ	xa-tan-my	10.1606304	106.5943123	Xã	836	\N	\N
29116	Xã Mỹ Hòa	xa-my-hoa	10.1498862	106.5760857	Xã	836	\N	\N
29119	Xã Tân Xuân	xa-tan-xuan	10.1258199	106.6232359	Xã	836	\N	\N
29122	Xã Mỹ Chánh	xa-my-chanh	10.1168313	106.5878723	Xã	836	\N	\N
29125	Xã Bảo Thạnh	xa-bao-thanh	10.0858564	106.6645007	Xã	836	\N	\N
29128	Xã An Phú Trung	xa-an-phu-trung	10.0976275	106.5407299	Xã	836	\N	\N
29131	Xã Mỹ Thạnh	xa-my-thanh	10.1072309	106.5642998	Xã	836	\N	\N
29134	Xã Mỹ Nhơn	xa-my-nhon	10.0952075	106.5878723	Xã	836	\N	\N
29137	Xã Phước Tuy	xa-phuoc-tuy	10.0933877	106.6232359	Xã	836	\N	\N
29140	Xã Phú Ngãi	xa-phu-ngai	10.075801	106.6302078	Xã	836	\N	\N
29143	Xã An Ngãi Trung	xa-an-ngai-trung	10.076607	106.528946	Xã	836	\N	\N
29146	Xã Phú Lễ	xa-phu-le	10.072379	106.6114474	Xã	836	\N	\N
29149	Xã An Bình Tây	xa-an-binh-tay	10.0633861	106.5760857	Xã	836	\N	\N
29152	Xã Bảo Thuận	xa-bao-thuan	10.0369417	106.6703963	Xã	836	\N	\N
29155	Xã Tân Hưng	xa-tan-hung	10.0567895	106.493598	Xã	836	\N	\N
29158	Xã An Ngãi Tây	xa-an-ngai-tay	10.0447811	106.5171626	Xã	836	\N	\N
29161	Xã An Hiệp	xa-an-hiep	10.0219707	106.5407299	Xã	836	\N	\N
29164	Xã Vĩnh Hòa	xa-vinh-hoa	10.0419113	106.6261831	Xã	836	\N	\N
29167	Xã Tân Thủy	xa-tan-thuy	10.0177613	106.6232359	Xã	836	\N	\N
29170	Xã Vĩnh An	xa-vinh-an	10.0269161	106.6026064	Xã	836	\N	\N
29173	Xã An Đức	xa-an-duc	10.0201694	106.5760857	Xã	836	\N	\N
29176	Xã An Hòa Tây	xa-an-hoa-tay	9.9973688	106.5996595	Xã	836	\N	\N
29179	Xã An Thủy	xa-an-thuy	9.9847697	106.635025	Xã	836	\N	\N
29182	Thị trấn Thạnh Phú	thi-tran-thanh-phu	9.9481665	106.50538	Thị trấn	837	\N	\N
29185	Xã Phú Khánh	xa-phu-khanh	10.0489706	106.4346979	Xã	837	\N	\N
29188	Xã Đại Điền	xa-dai-dien	10.0369662	106.458256	Xã	837	\N	\N
29191	Xã Quới Điền	xa-quoi-dien	10.0011001	106.4729811	Xã	837	\N	\N
29194	Xã Tân Phong	xa-tan-phong	10.0051407	106.4464766	Xã	837	\N	\N
29197	Xã Mỹ Hưng	xa-my-hung	9.9811544	106.493598	Xã	837	\N	\N
29200	Xã An Thạnh	xa-an-thanh	9.9463822	106.5407299	Xã	837	\N	\N
29203	Xã Thới Thạnh	xa-thoi-thanh	9.9682191	106.4288088	Xã	837	\N	\N
29206	Xã Hòa Lợi	xa-hoa-loi	9.9499467	106.470036	Xã	837	\N	\N
29209	Xã An Điền	xa-an-dien	9.9383032	106.5937658	Xã	837	\N	\N
29212	Xã Bình Thạnh	xa-binh-thanh	9.9265787	106.50538	Xã	837	\N	\N
29215	Xã An Thuận	xa-an-thuan	9.9194442	106.5400889	Xã	837	\N	\N
29218	Xã An Quy	xa-an-quy	9.8918401	106.5525145	Xã	837	\N	\N
29221	Xã Thạnh Hải	xa-thanh-hai	9.8915788	106.6645007	Xã	837	\N	\N
29224	Xã An Nhơn	xa-an-nhon	9.8798698	106.5760857	Xã	837	\N	\N
29227	Xã Giao Thạnh	xa-giao-thanh	9.8835733	106.6081846	Xã	837	\N	\N
29230	Xã Thạnh Phong	xa-thanh-phong	9.8292915	106.6173415	Xã	837	\N	\N
29233	Xã Mỹ An	xa-my-an	9.987981	106.533095	Xã	837	\N	\N
29236	Phường 4	phuong-4	9.9399618	106.343911	Phường	842	\N	\N
29239	Phường 1	phuong-1	9.9424097	106.3397233	Phường	842	\N	\N
29242	Phường 3	phuong-3	9.9353997	106.3426999	Phường	842	\N	\N
29245	Phường 2	phuong-2	9.935693	106.3368135	Phường	842	\N	\N
29248	Phường 5	phuong-5	9.9321146	106.347715	Phường	842	\N	\N
29251	Phường 6	phuong-6	9.9236341	106.3409787	Phường	842	\N	\N
29254	Phường 7	phuong-7	9.9277883	106.330998	Phường	842	\N	\N
29257	Phường 8	phuong-8	9.9222871	106.3103212	Phường	842	\N	\N
29260	Phường 9	phuong-9	9.9024377	106.3404925	Phường	842	\N	\N
29263	Xã Long Đức	xa-long-duc	9.9803666	106.332906	Xã	842	\N	\N
29266	Thị trấn Càng Long	thi-tran-cang-long	9.9997097	106.213572	Thị trấn	844	\N	\N
29269	Xã Mỹ Cẩm	xa-my-cam	10.007886	106.1757379	Xã	844	\N	\N
29272	Xã An Trường A	xa-an-truong-a	9.9823	106.1463317	Xã	844	\N	\N
29275	Xã An Trường	xa-an-truong	9.9583467	106.1933837	Xã	844	\N	\N
29278	Xã Huyền Hội	xa-huyen-hoi	9.9139548	106.2169139	Xã	844	\N	\N
29281	Xã Tân An	xa-tan-an	9.8901262	106.1522126	Xã	844	\N	\N
29284	Xã Tân Bình	xa-tan-binh	9.9333526	106.1522126	Xã	844	\N	\N
29287	Xã Bình Phú	xa-binh-phu	9.9725219	106.2345633	Xã	844	\N	\N
29290	Xã Phương Thạnh	xa-phuong-thanh	9.9491516	106.2698669	Xã	844	\N	\N
29293	Xã Đại Phúc	xa-dai-phuc	9.9804029	106.293406	Xã	844	\N	\N
29296	Xã Đại Phước	xa-dai-phuoc	10.0128366	106.293406	Xã	844	\N	\N
29299	Xã Nhị Long Phú	xa-nhi-long-phu	10.0288571	106.2433886	Xã	844	\N	\N
29302	Xã Nhị Long	xa-nhi-long	10.0037873	106.2580983	Xã	844	\N	\N
29305	Xã Đức Mỹ	xa-duc-my	10.0578738	106.2580983	Xã	844	\N	\N
29308	Thị trấn Cầu Kè	thi-tran-cau-ke	9.8702646	106.0610787	Thị trấn	845	\N	\N
29311	Xã Hòa Ân	xa-hoa-an	9.8941502	106.0698963	Xã	845	\N	\N
29314	Xã Châu Điền	xa-chau-dien	9.8713919	106.0934117	Xã	845	\N	\N
29317	Xã An Phú Tân	xa-an-phu-tan	9.886771	105.9993672	Xã	845	\N	\N
29320	Xã Hoà Tân	xa-hoa-tan	9.8520703	106.0463837	Xã	845	\N	\N
29323	Xã Ninh Thới	xa-ninh-thoi	9.7850054	106.0934117	Xã	845	\N	\N
29326	Xã Phong Phú	xa-phong-phu	9.8117066	106.099291	Xã	845	\N	\N
29329	Xã Phong Thạnh	xa-phong-thanh	9.8480695	106.1286901	Xã	845	\N	\N
29332	Xã Tam Ngãi	xa-tam-ngai	9.9015592	106.0287512	Xã	845	\N	\N
29335	Xã Thông Hòa	xa-thong-hoa	9.9265805	106.0698963	Xã	845	\N	\N
29338	Xã Thạnh Phú	xa-thanh-phu	9.9328172	106.1081103	Xã	845	\N	\N
29341	Thị trấn Tiểu Cần	thi-tran-tieu-can	9.8096877	106.1963248	Thị trấn	846	\N	\N
29344	Thị trấn Cầu Quan	thi-tran-cau-quan	9.770238	106.1198699	Thị trấn	846	\N	\N
29347	Xã Phú Cần	xa-phu-can	9.8082793	106.1698563	Xã	846	\N	\N
29350	Xã Hiếu Tử	xa-hieu-tu	9.8491563	106.2169139	Xã	846	\N	\N
29353	Xã Hiếu Trung	xa-hieu-trung	9.8565711	106.1757379	Xã	846	\N	\N
29356	Xã Long Thới	xa-long-thoi	9.7935202	106.140451	Xã	846	\N	\N
29359	Xã Hùng Hòa	xa-hung-hoa	9.7583026	106.199266	Xã	846	\N	\N
29362	Xã Tân Hùng	xa-tan-hung	9.778729	106.2227968	Xã	846	\N	\N
29365	Xã Tập Ngãi	xa-tap-ngai	9.8252625	106.2639825	Xã	846	\N	\N
29368	Xã Ngãi Hùng	xa-ngai-hung	9.7872177	106.2698669	Xã	846	\N	\N
29371	Xã Tân Hòa	xa-tan-hoa	9.7497967	106.1522126	Xã	846	\N	\N
29374	Thị trấn Châu Thành	thi-tran-chau-thanh	9.8764344	106.3478507	Thị trấn	847	\N	\N
29377	Xã Đa Lộc	xa-da-loc	9.8706361	106.3287199	Xã	847	\N	\N
29380	Xã Mỹ Chánh	xa-my-chanh	9.8268941	106.3404925	Xã	847	\N	\N
29383	Xã Thanh Mỹ	xa-thanh-my	9.8199208	106.3000568	Xã	847	\N	\N
29386	Xã Lương Hoà A	xa-luong-hoa-a	9.8825953	106.3051766	Xã	847	\N	\N
29389	Xã Lương Hòa	xa-luong-hoa	9.9104645	106.287521	Xã	847	\N	\N
29392	Xã Song Lộc	xa-song-loc	9.8747025	106.2463305	Xã	847	\N	\N
29395	Xã Nguyệt Hóa	xa-nguyet-hoa	9.9365924	106.3051766	Xã	847	\N	\N
29398	Xã Hòa Thuận	xa-hoa-thuan	9.939532	106.3600156	Xã	847	\N	\N
29401	Xã Hòa Lợi	xa-hoa-loi	9.9006814	106.3758145	Xã	847	\N	\N
29404	Xã Phước Hảo	xa-phuoc-hao	9.8773376	106.4111425	Xã	847	\N	\N
29407	Xã Hưng Mỹ	xa-hung-my	9.9210988	106.3993658	Xã	847	\N	\N
29410	Xã Hòa Minh	xa-hoa-minh	9.9187424	106.4464766	Xã	847	\N	\N
29413	Xã Long Hòa	xa-long-hoa	9.8328342	106.5466221	Xã	847	\N	\N
29416	Thị trấn Cầu Ngang	thi-tran-cau-ngang	9.7918627	106.4494214	Thị trấn	848	\N	\N
29419	Thị trấn Mỹ Long	thi-tran-my-long	9.8104944	106.5083256	Thị trấn	848	\N	\N
29422	Xã Mỹ Long Bắc	xa-my-long-bac	9.8193108	106.493598	Xã	848	\N	\N
29425	Xã Mỹ Long Nam	xa-my-long-nam	9.8126564	106.299892	Xã	848	\N	\N
29428	Xã Mỹ Hòa	xa-my-hoa	9.7989247	106.470036	Xã	848	\N	\N
29431	Xã Vĩnh Kim	xa-vinh-kim	9.8540028	106.4464766	Xã	848	\N	\N
29434	Xã Kim Hòa	xa-kim-hoa	9.8111764	106.3013511	Xã	848	\N	\N
29437	Xã Hiệp Hòa	xa-hiep-hoa	9.8024213	106.3993658	Xã	848	\N	\N
29440	Xã Thuận Hòa	xa-thuan-hoa	9.7760387	106.4470428	Xã	848	\N	\N
29443	Xã Long Sơn	xa-long-son	9.7524728	106.4288088	Xã	848	\N	\N
29446	Xã Nhị Trường	xa-nhi-truong	9.7598871	106.3875898	Xã	848	\N	\N
29449	Xã Trường Thọ	xa-truong-tho	9.7775	106.3581527	Xã	848	\N	\N
29452	Xã Hiệp Mỹ Đông	xa-hiep-my-dong	9.7552447	106.4818167	Xã	848	\N	\N
29455	Xã Hiệp Mỹ Tây	xa-hiep-my-tay	9.8107958	106.3023811	Xã	848	\N	\N
29458	Xã Thạnh Hòa Sơn	xa-thanh-hoa-son	9.7037195	106.4346979	Xã	848	\N	\N
29461	Thị trấn Trà Cú	thi-tran-tra-cu	9.6873785	106.2588338	Thị trấn	849	\N	\N
29462	Thị trấn Định An	thi-tran-dinh-an	9.6162575	106.2963486	Thị trấn	849	\N	\N
29464	Xã Phước Hưng	xa-phuoc-hung	9.7639262	106.3051766	Xã	849	\N	\N
29467	Xã Tập Sơn	xa-tap-son	9.744662	106.2580983	Xã	849	\N	\N
29470	Xã Tân Sơn	xa-tan-son	9.7350257	106.2345633	Xã	849	\N	\N
29473	Xã An Quảng Hữu	xa-an-quang-huu	9.7265249	106.1875016	Xã	849	\N	\N
29476	Xã Lưu Nghiệp Anh	xa-luu-nghiep-anh	9.6992941	106.1933837	Xã	849	\N	\N
29479	Xã Ngãi Xuyên	xa-ngai-xuyen	9.7117579	106.2698669	Xã	849	\N	\N
29482	Xã Kim Sơn	xa-kim-son	9.6703734	106.2345633	Xã	849	\N	\N
29485	Xã Thanh Sơn	xa-thanh-son	9.6788699	106.2816361	Xã	849	\N	\N
29488	Xã Hàm Giang	xa-ham-giang	9.6573326	106.2816361	Xã	849	\N	\N
29489	Xã Hàm Tân	xa-ham-tan	9.6545303	106.260992	Xã	849	\N	\N
29491	Xã Đại An	xa-dai-an	9.6346656	106.3051766	Xã	849	\N	\N
29494	Xã Định An	xa-dinh-an	9.6256038	106.2698669	Xã	849	\N	\N
29497	Xã Đôn Xuân	xa-don-xuan	9.6431509	106.3522658	Xã	850	\N	\N
29500	Xã Đôn Châu	xa-don-chau	9.6686293	106.3817021	Xã	850	\N	\N
29503	Xã Ngọc Biên	xa-ngoc-bien	9.6964056	106.3640398	Xã	849	\N	\N
29506	Xã Long Hiệp	xa-long-hiep	9.6986981	106.3169479	Xã	849	\N	\N
29509	Xã Tân Hiệp	xa-tan-hiep	9.7355437	106.3346061	Xã	849	\N	\N
29512	Phường 1	phuong-1	9.6331608	106.4975726	Phường	851	\N	\N
29513	Thị trấn Long Thành	thi-tran-long-thanh	9.6095512	106.4456052	Thị trấn	850	\N	\N
29515	Xã Long Toàn	xa-long-toan	9.6476053	106.4818167	Xã	851	\N	\N
29516	Phường 2	phuong-2	9.6331608	106.4975726	Phường	851	\N	\N
29518	Xã Long Hữu	xa-long-huu	9.6331608	106.4975726	Xã	851	\N	\N
29521	Xã Long Khánh	xa-long-khanh	9.6017889	106.4288088	Xã	850	\N	\N
29524	Xã Dân Thành	xa-dan-thanh	9.6331608	106.4975726	Xã	851	\N	\N
29527	Xã Trường Long Hòa	xa-truong-long-hoa	9.660563	106.5466221	Xã	851	\N	\N
29530	Xã Ngũ Lạc	xa-ngu-lac	9.6663333	106.4288088	Xã	850	\N	\N
29533	Xã Long Vĩnh	xa-long-vinh	9.5836975	106.3581527	Xã	850	\N	\N
29536	Xã Đông Hải	xa-dong-hai	9.5372964	106.4288088	Xã	850	\N	\N
29539	Xã Hiệp Thạnh	xa-hiep-thanh	9.6331608	106.4975726	Xã	851	\N	\N
29542	Phường 9	phuong-9	10.2549168	105.9494248	Phường	855	\N	\N
29545	Phường 5	phuong-5	10.2528551	105.9905529	Phường	855	\N	\N
29548	Phường 1	phuong-1	10.2524557	105.9714566	Phường	855	\N	\N
29551	Phường 2	phuong-2	10.2474681	105.9626436	Phường	855	\N	\N
29554	Phường 4	phuong-4	10.2410092	105.983208	Phường	855	\N	\N
29557	Phường 3	phuong-3	10.2374531	105.9729255	Phường	855	\N	\N
29560	Phường 8	phuong-8	10.2329064	105.9552997	Phường	855	\N	\N
29563	Xã Tân Ngãi	xa-tan-ngai	10.2615231	105.9259271	Xã	855	\N	\N
29566	Xã Tân Hòa	xa-tan-hoa	10.2515421	105.9083056	Xã	855	\N	\N
29569	Xã Tân Hội	xa-tan-hoi	10.2604215	105.8936224	Xã	855	\N	\N
29572	Xã Trường An	xa-truong-an	10.2503685	105.9318012	Xã	855	\N	\N
29575	Thị trấn Long Hồ	thi-tran-long-ho	10.1962734	106.0096511	Thị trấn	857	\N	\N
29578	Xã Đồng Phú	xa-dong-phu	10.3100252	105.9876149	Xã	857	\N	\N
29581	Xã Bình Hòa Phước	xa-binh-hoa-phuoc	10.2785238	106.0199355	Xã	857	\N	\N
29584	Xã Hòa Ninh	xa-hoa-ninh	10.2857302	105.9846769	Xã	857	\N	\N
29587	Xã An Bình	xa-an-binh	10.2792074	105.9523622	Xã	857	\N	\N
29590	Xã Thanh Đức	xa-thanh-duc	10.2436801	106.0111203	Xã	857	\N	\N
29593	Xã Tân Hạnh	xa-tan-hanh	10.2152272	105.9288641	Xã	857	\N	\N
29596	Xã Phước Hậu	xa-phuoc-hau	10.2109026	105.9611748	Xã	857	\N	\N
29599	Xã Long Phước	xa-long-phuoc	10.2122954	105.9876149	Xã	857	\N	\N
29602	Xã Phú Đức	xa-phu-duc	10.1797435	105.9876149	Xã	857	\N	\N
29605	Xã Lộc Hòa	xa-loc-hoa	10.1935186	105.9288641	Xã	857	\N	\N
29608	Xã Long An	xa-long-an	10.1568793	106.0111203	Xã	857	\N	\N
29611	Xã Phú Quới	xa-phu-quoi	10.1508104	105.922551	Xã	857	\N	\N
29614	Xã Thạnh Quới	xa-thanh-quoi	10.173562	105.8936224	Xã	857	\N	\N
29617	Xã Hòa Phú	xa-hoa-phu	10.1603837	105.9406128	Xã	857	\N	\N
29620	Thị trấn Cái Nhum	thi-tran-cai-nhum	10.1775604	106.1125201	Thị trấn	858	\N	\N
29623	Xã Mỹ An	xa-my-an	10.2310542	106.0463837	Xã	858	\N	\N
29626	Xã Mỹ Phước	xa-my-phuoc	10.2286865	106.0934117	Xã	858	\N	\N
29629	Xã An Phước	xa-an-phuoc	10.2052122	106.1286901	Xã	858	\N	\N
29632	Xã Nhơn Phú	xa-nhon-phu	10.2075806	106.0816536	Xã	858	\N	\N
29635	Xã Long Mỹ	xa-long-my	10.2191112	106.0140586	Xã	858	\N	\N
29638	Xã Hòa Tịnh	xa-hoa-tinh	10.2093521	106.0463837	Xã	858	\N	\N
29641	Xã Chánh Hội	xa-chanh-hoi	10.1852974	106.0934117	Xã	858	\N	\N
29644	Xã Bình Phước	xa-binh-phuoc	10.181938	106.0522616	Xã	858	\N	\N
29647	Xã Chánh An	xa-chanh-an	10.1714987	106.1522126	Xã	858	\N	\N
29650	Xã Tân An Hội	xa-tan-an-hoi	10.15277	106.0934117	Xã	858	\N	\N
29653	Xã Tân Long	xa-tan-long	10.1551209	106.0463837	Xã	858	\N	\N
29656	Xã Tân Long Hội	xa-tan-long-hoi	10.132266	106.0698963	Xã	858	\N	\N
29659	Thị trấn Vũng Liêm	thi-tran-vung-liem	10.0910316	106.1904426	Thị trấn	859	\N	\N
29662	Xã Tân Quới Trung	xa-tan-quoi-trung	10.1515919	106.1169299	Xã	859	\N	\N
29665	Xã Quới Thiện	xa-quoi-thien	10.1474539	106.199266	Xã	859	\N	\N
29668	Xã Quới An	xa-quoi-an	10.138394	106.1639749	Xã	859	\N	\N
29671	Xã Trung Chánh	xa-trung-chanh	10.1293277	106.1286901	Xã	859	\N	\N
29674	Xã Tân An Luông	xa-tan-an-luong	10.1094197	106.0934117	Xã	859	\N	\N
29677	Xã Thanh Bình	xa-thanh-binh	10.1023523	106.2345633	Xã	859	\N	\N
29680	Xã Trung Thành Tây	xa-trung-thanh-tay	10.115546	106.1875016	Xã	859	\N	\N
29683	Xã Trung Hiệp	xa-trung-hiep	10.0956518	106.1522126	Xã	859	\N	\N
29686	Xã Hiếu Phụng	xa-hieu-phung	10.0865819	106.1169299	Xã	859	\N	\N
29689	Xã Trung Thành Đông	xa-trung-thanh-dong	10.0812902	106.2227968	Xã	859	\N	\N
29692	Xã Trung Thành	xa-trung-thanh	10.0614065	106.1875016	Xã	859	\N	\N
29695	Xã Trung Hiếu	xa-trung-hieu	10.0688732	106.1463317	Xã	859	\N	\N
29698	Xã Trung Ngãi	xa-trung-ngai	10.0474369	106.1963248	Xã	859	\N	\N
29701	Xã Hiếu Thuận	xa-hieu-thuan	10.0540956	106.1169299	Xã	859	\N	\N
29704	Xã Trung Nghĩa	xa-trung-nghia	10.0277674	106.2110311	Xã	859	\N	\N
29707	Xã Trung An	xa-trung-an	10.0306944	106.1522126	Xã	859	\N	\N
29710	Xã Hiếu Nhơn	xa-hieu-nhon	10.021622	106.1169299	Xã	859	\N	\N
29713	Xã Hiếu Thành	xa-hieu-thanh	9.9897411	106.1051705	Xã	859	\N	\N
29716	Xã Hiếu Nghĩa	xa-hieu-nghia	9.9686848	106.0934117	Xã	859	\N	\N
29719	Thị trấn Tam Bình	thi-tran-tam-binh	10.0478007	105.9978981	Thị trấn	860	\N	\N
29722	Xã Tân Lộc	xa-tan-loc	10.150645	105.9729255	Xã	860	\N	\N
29725	Xã Phú Thịnh	xa-phu-thinh	10.1307443	105.8818766	Xã	860	\N	\N
29728	Xã Hậu Lộc	xa-hau-loc	10.1255182	105.9876149	Xã	860	\N	\N
29731	Xã Hòa Thạnh	xa-hoa-thanh	10.1225988	106.0463837	Xã	860	\N	\N
29734	Xã Hoà Lộc	xa-hoa-loc	10.1026738	106.0111203	Xã	860	\N	\N
29737	Xã Phú Lộc	xa-phu-loc	10.1170021	105.9406128	Xã	860	\N	\N
29740	Xã Song Phú	xa-song-phu	10.1073188	105.9171161	Xã	860	\N	\N
29743	Xã Hòa Hiệp	xa-hoa-hiep	10.101508	106.0346285	Xã	860	\N	\N
29746	Xã Mỹ Lộc	xa-my-loc	10.0839018	105.9523622	Xã	860	\N	\N
29749	Xã Tân Phú	xa-tan-phu	10.0765268	105.8818766	Xã	860	\N	\N
29752	Xã Long Phú	xa-long-phu	10.0747978	105.9171161	Xã	860	\N	\N
29755	Xã Mỹ Thạnh Trung	xa-my-thanh-trung	10.0610725	105.9758633	Xã	860	\N	\N
29758	Xã Tường Lộc	xa-tuong-loc	10.0570612	106.0023054	Xã	860	\N	\N
29761	Xã Loan Mỹ	xa-loan-my	10.0291539	105.9641124	Xã	860	\N	\N
29764	Xã Ngãi Tứ	xa-ngai-tu	10.0103668	105.9053689	Xã	860	\N	\N
29767	Xã Bình Ninh	xa-binh-ninh	10.0143475	105.9347384	Xã	860	\N	\N
29770	Phường Cái Vồn	phuong-cai-von	10.0702849	105.8244252	Phường	861	\N	\N
29771	Phường Thành Phước	phuong-thanh-phuoc	10.0610769	105.7999505	Phường	861	\N	\N
29773	Xã Tân Hưng	xa-tan-hung	10.1816577	105.7292491	Xã	863	\N	\N
29776	Xã Tân Thành	xa-tan-thanh	10.1582164	105.7644596	Xã	863	\N	\N
29779	Xã Thành Trung	xa-thanh-trung	10.1462112	105.7879371	Xã	863	\N	\N
29782	Xã Tân An Thạnh	xa-tan-an-thanh	10.1399441	105.6940454	Xã	863	\N	\N
29785	Xã Tân Lược	xa-tan-luoc	10.1490834	105.7292491	Xã	863	\N	\N
29788	Xã Nguyễn Văn Thảnh	xa-nguyen-van-thanh	10.1330552	105.8349009	Xã	863	\N	\N
29791	Xã Thành Đông	xa-thanh-dong	10.1227995	105.7673942	Xã	863	\N	\N
29794	Xã Mỹ Thuận	xa-my-thuan	10.1119347	105.8231588	Xã	863	\N	\N
29797	Xã Tân Bình	xa-tan-binh	10.1165215	105.7292491	Xã	863	\N	\N
29800	Xã Thành Lợi	xa-thanh-loi	10.0919631	105.7879371	Xã	863	\N	\N
29803	Xã Tân Quới	xa-tan-quoi	10.0962481	105.7556564	Xã	863	\N	\N
29806	Xã Thuận An	xa-thuan-an	10.0902432	105.8231588	Xã	861	\N	\N
29809	Xã Đông Thạnh	xa-dong-thanh	10.0120838	105.8701316	Xã	861	\N	\N
29812	Xã Đông Bình	xa-dong-binh	10.056571	105.8466437	Xã	861	\N	\N
29813	Phường Đông Thuận	phuong-dong-thuan	10.0677258	105.84157	Phường	861	\N	\N
29815	Xã Mỹ Hòa	xa-my-hoa	10.0137967	105.8349009	Xã	861	\N	\N
29818	Xã Đông Thành	xa-dong-thanh	10.0120838	105.8701316	Xã	861	\N	\N
29821	Thị trấn Trà Ôn	thi-tran-tra-on	9.9633511	105.9259271	Thị trấn	862	\N	\N
29824	Xã Xuân Hiệp	xa-xuan-hiep	10.0678409	106.0581397	Xã	862	\N	\N
29827	Xã Nhơn Bình	xa-nhon-binh	10.0479233	106.022874	Xã	862	\N	\N
29830	Xã Hòa Bình	xa-hoa-binh	10.035354	106.0581397	Xã	862	\N	\N
29833	Xã Thới Hòa	xa-thoi-hoa	10.0028797	106.0581397	Xã	862	\N	\N
29836	Xã Trà Côn	xa-tra-con	10.0051915	106.0111203	Xã	862	\N	\N
29839	Xã Tân Mỹ	xa-tan-my	9.9852697	105.9758633	Xã	862	\N	\N
29842	Xã Hựu Thành	xa-huu-thanh	9.9823916	106.0346285	Xã	862	\N	\N
29845	Xã Vĩnh Xuân	xa-vinh-xuan	9.9510837	106.0111203	Xã	862	\N	\N
29848	Xã Thuận Thới	xa-thuan-thoi	9.9493595	106.0463837	Xã	862	\N	\N
29851	Xã Phú Thành	xa-phu-thanh	9.9681966	105.8818766	Xã	862	\N	\N
29854	Xã Thiện Mỹ	xa-thien-my	9.9539484	105.9523622	Xã	862	\N	\N
29857	Xã Lục Sỹ Thành	xa-luc-sy-thanh	9.9448397	105.9171161	Xã	862	\N	\N
29860	Xã Tích Thiện	xa-tich-thien	9.9197795	105.9876149	Xã	862	\N	\N
29863	Phường 11	phuong-11	10.4878813	105.5839265	Phường	866	\N	\N
29866	Phường 1	phuong-1	10.4597303	105.6339216	Phường	866	\N	\N
29869	Phường 2	phuong-2	10.4548522	105.6361209	Phường	866	\N	\N
29872	Phường 4	phuong-4	10.4506041	105.6299844	Phường	866	\N	\N
29875	Phường 3	phuong-3	10.4483271	105.6487084	Phường	866	\N	\N
29878	Phường 6	phuong-6	10.4288288	105.6343903	Phường	866	\N	\N
29881	Xã Mỹ Ngãi	xa-my-ngai	10.5034079	105.590733	Xã	866	\N	\N
29884	Xã Mỹ Tân	xa-my-tan	10.4885898	105.6196744	Xã	866	\N	\N
29887	Xã Mỹ Trà	xa-my-tra	10.4826015	105.6426665	Xã	866	\N	\N
29888	Phường Mỹ Phú	phuong-my-phu	10.4615518	105.6444979	Phường	866	\N	\N
29890	Xã Tân Thuận Tây	xa-tan-thuan-tay	10.4497342	105.5884754	Xã	866	\N	\N
29892	Phường Hoà Thuận	phuong-hoa-thuan	10.4659127	105.6192603	Phường	866	\N	\N
29893	Xã Hòa An	xa-hoa-an	10.4485661	105.6119301	Xã	866	\N	\N
29896	Xã Tân Thuận Đông	xa-tan-thuan-dong	10.4250752	105.5893817	Xã	866	\N	\N
29899	Xã Tịnh Thới	xa-tinh-thoi	10.4364387	105.664511	Xã	866	\N	\N
29902	Phường 3	phuong-3	10.3063257	105.7629924	Phường	867	\N	\N
29905	Phường 1	phuong-1	10.30118	105.7571236	Phường	867	\N	\N
29908	Phường 4	phuong-4	10.2915807	105.7725297	Phường	867	\N	\N
29911	Phường 2	phuong-2	10.2812794	105.7747307	Phường	867	\N	\N
29914	Xã Tân Khánh Đông	xa-tan-khanh-dong	10.355597	105.7292491	Xã	867	\N	\N
29917	Phường Tân Quy Đông	phuong-tan-quy-dong	10.319217	105.7497878	Phường	867	\N	\N
29919	Phường An Hoà	phuong-an-hoa	10.2977573	105.7439194	Phường	867	\N	\N
29920	Xã Tân Quy Tây	xa-tan-quy-tay	10.314944	105.7263152	Xã	867	\N	\N
29923	Xã Tân Phú Đông	xa-tan-phu-dong	10.2782937	105.7527221	Xã	867	\N	\N
29926	Thị trấn Sa Rài	thi-tran-sa-rai	10.8715377	105.4595306	Thị trấn	869	\N	\N
29929	Xã Tân Hộ Cơ	xa-tan-ho-co	10.9327262	105.4419546	Xã	869	\N	\N
29932	Xã Thông Bình	xa-thong-binh	10.9354906	105.494688	Xã	869	\N	\N
29935	Xã Bình Phú	xa-binh-phu	10.8900758	105.4185227	Xã	869	\N	\N
29938	Xã Tân Thành A	xa-tan-thanh-a	10.8857723	105.5481495	Xã	869	\N	\N
29941	Xã Tân Thành B	xa-tan-thanh-b	10.8697347	105.494688	Xã	869	\N	\N
29944	Xã Tân Phước	xa-tan-phuoc	10.8390414	105.5591615	Xã	869	\N	\N
29947	Xã Tân Công Chí	xa-tan-cong-chi	10.8438495	105.4653897	Xã	869	\N	\N
29950	Xã An Phước	xa-an-phuoc	10.804624	105.4829681	Xã	869	\N	\N
29954	Phường An Lộc	phuong-an-loc	10.7976262	105.3511736	Phường	868	\N	\N
29955	Phường An Thạnh	phuong-an-thanh	10.8143532	105.3453184	Phường	868	\N	\N
29956	Xã Thường Phước 1	xa-thuong-phuoc-1	10.8788463	105.2077798	Xã	870	\N	\N
29959	Xã Bình Thạnh	xa-binh-thanh	10.8255238	105.3950939	Xã	868	\N	\N
29962	Xã Thường Thới Hậu A	xa-thuong-thoi-hau-a	10.8810796	105.2721456	Xã	870	\N	\N
29965	Xã Tân Hội	xa-tan-hoi	10.8469276	105.3511736	Xã	868	\N	\N
29968	Xã Thường Thới Hậu B	xa-thuong-thoi-hau-b	10.8567804	105.3189726	Xã	870	\N	\N
29971	Xã Thường Thới Tiền	xa-thuong-thoi-tien	10.837225	105.2721456	Xã	870	\N	\N
29974	Xã Thường Phước 2	xa-thuong-phuoc-2	10.8389934	105.2370339	Xã	870	\N	\N
29977	Xã Thường Lạc	xa-thuong-lac	10.8354522	105.3072646	Xã	870	\N	\N
29978	Phường An Lạc	phuong-an-lac	10.8342679	105.3306814	Phường	868	\N	\N
29980	Xã Long Khánh A	xa-long-khanh-a	10.8031699	105.2955575	Xã	870	\N	\N
29983	Xã Long Khánh B	xa-long-khanh-b	10.7910359	105.3189726	Xã	870	\N	\N
29986	Xã An Bình B	xa-an-binh-b	10.7966565	105.4243804	Xã	868	\N	\N
29989	Xã An Bình A	xa-an-binh-a	10.7829013	105.3716684	Xã	868	\N	\N
29992	Xã Long Thuận	xa-long-thuan	10.7703081	105.2955575	Xã	870	\N	\N
29995	Xã Phú Thuận B	xa-phu-thuan-b	10.7570042	105.3423909	Xã	870	\N	\N
29998	Xã Phú Thuận A	xa-phu-thuan-a	10.7368718	105.3072646	Xã	870	\N	\N
30001	Thị trấn Tràm Chim	thi-tran-tram-chim	10.6691946	105.5650239	Thị trấn	871	\N	\N
30004	Xã Hoà Bình	xa-hoa-binh	10.7870782	105.6119301	Xã	871	\N	\N
30007	Xã Tân Công Sính	xa-tan-cong-sinh	10.7272256	105.6060661	Xã	871	\N	\N
30010	Xã Phú Hiệp	xa-phu-hiep	10.7757656	105.5122694	Xã	871	\N	\N
30013	Xã Phú Đức	xa-phu-duc	10.7089403	105.5357139	Xã	871	\N	\N
30016	Xã Phú Thành B	xa-phu-thanh-b	10.7562633	105.4653897	Xã	871	\N	\N
30019	Xã An Hòa	xa-an-hoa	10.7436984	105.3892372	Xã	871	\N	\N
30022	Xã An Long	xa-an-long	10.720632	105.4126652	Xã	871	\N	\N
30025	Xã Phú Cường	xa-phu-cuong	10.6616491	105.6060661	Xã	871	\N	\N
30028	Xã Phú Ninh	xa-phu-ninh	10.6774666	105.4009508	Xã	871	\N	\N
30031	Xã Phú Thọ	xa-phu-tho	10.6958011	105.471249	Xã	871	\N	\N
30034	Xã Phú Thành A	xa-phu-thanh-a	10.6866371	105.4360963	Xã	871	\N	\N
30037	Thị trấn Mỹ An	thi-tran-my-an	10.5225428	105.8402536	Thị trấn	872	\N	\N
30040	Xã Thạnh Lợi	xa-thanh-loi	10.7005628	105.6999122	Xã	872	\N	\N
30043	Xã Hưng Thạnh	xa-hung-thanh	10.6568692	105.6999122	Xã	872	\N	\N
30046	Xã Trường Xuân	xa-truong-xuan	10.6314323	105.7703287	Xã	872	\N	\N
30049	Xã Tân Kiều	xa-tan-kieu	10.5772264	105.8701316	Xã	872	\N	\N
30052	Xã Mỹ Hòa	xa-my-hoa	10.563575	105.8172881	Xã	872	\N	\N
30055	Xã Mỹ Quý	xa-my-quy	14.058324	108.277199	Xã	872	\N	\N
30058	Xã Mỹ Đông	xa-my-dong	10.5211623	105.7938069	Xã	872	\N	\N
30061	Xã Đốc Binh Kiều	xa-doc-binh-kieu	10.4933918	105.9112424	Xã	872	\N	\N
30064	Xã Mỹ An	xa-my-an	10.5253134	105.8443558	Xã	872	\N	\N
30067	Xã Phú Điền	xa-phu-dien	10.4682585	105.8701316	Xã	872	\N	\N
30070	Xã Láng Biển	xa-lang-bien	10.4936192	105.7996769	Xã	872	\N	\N
30073	Xã Thanh Mỹ	xa-thanh-my	10.4098655	105.8407722	Xã	872	\N	\N
30076	Thị trấn Mỹ Thọ	thi-tran-my-tho	10.4444634	105.6940454	Thị trấn	873	\N	\N
30079	Xã Gáo Giồng	xa-gao-giong	10.6066717	105.6293731	Xã	873	\N	\N
30082	Xã Phương Thịnh	xa-phuong-thinh	10.5983142	105.6705801	Xã	873	\N	\N
30085	Xã Ba Sao	xa-ba-sao	10.5695459	105.6999122	Xã	873	\N	\N
30088	Xã Phong Mỹ	xa-phong-my	10.5318166	105.5826123	Xã	873	\N	\N
30091	Xã Tân Nghĩa	xa-tan-nghia	10.5294622	105.629523	Xã	873	\N	\N
30094	Xã Phương Trà	xa-phuong-tra	10.5116284	105.6588485	Xã	873	\N	\N
30097	Xã Nhị Mỹ	xa-nhi-my	10.4880535	105.6940454	Xã	873	\N	\N
30100	Xã Mỹ Thọ	xa-my-tho	10.4753833	105.7292491	Xã	873	\N	\N
30103	Xã Tân Hội Trung	xa-tan-hoi-trung	10.4569711	105.7703287	Xã	873	\N	\N
30106	Xã An Bình	xa-an-binh	10.4680204	105.6588485	Xã	873	\N	\N
30109	Xã Mỹ Hội	xa-my-hoi	10.4209146	105.7292491	Xã	873	\N	\N
30112	Xã Mỹ Hiệp	xa-my-hiep	10.4059017	105.8114175	Xã	873	\N	\N
30115	Xã Mỹ Long	xa-my-long	10.3744301	105.7879371	Xã	873	\N	\N
30118	Xã Bình Hàng Trung	xa-binh-hang-trung	10.4088492	105.7527221	Xã	873	\N	\N
30121	Xã Mỹ Xương	xa-my-xuong	10.4111988	105.7057792	Xã	873	\N	\N
30124	Xã Bình Hàng Tây	xa-binh-hang-tay	10.3756051	105.7644596	Xã	873	\N	\N
30127	Xã Bình Thạnh	xa-binh-thanh	10.3200374	105.7879371	Xã	873	\N	\N
30130	Thị trấn Thanh Bình	thi-tran-thanh-binh	10.5554601	105.491758	Thị trấn	874	\N	\N
30133	Xã Tân Quới	xa-tan-quoi	10.6567686	105.3775245	Xã	874	\N	\N
30136	Xã Tân Hòa	xa-tan-hoa	10.668875	105.3541013	Xã	874	\N	\N
30139	Xã An Phong	xa-an-phong	10.6273893	105.4185227	Xã	874	\N	\N
30142	Xã Phú Lợi	xa-phu-loi	10.6296243	105.4829681	Xã	874	\N	\N
30145	Xã Tân Mỹ	xa-tan-my	10.6215091	105.5357139	Xã	874	\N	\N
30148	Xã Bình Tấn	xa-binh-tan	10.6191437	105.5826123	Xã	874	\N	\N
30151	Xã Tân Huề	xa-tan-hue	10.6136235	105.3658125	Xã	874	\N	\N
30154	Xã Tân Bình	xa-tan-binh	10.6009459	105.4009508	Xã	874	\N	\N
30157	Xã Tân Thạnh	xa-tan-thanh	10.5761773	105.4595306	Xã	874	\N	\N
30160	Xã Tân Phú	xa-tan-phu	10.5710792	105.5052183	Xã	874	\N	\N
30163	Xã Bình Thành	xa-binh-thanh	10.5766484	105.5591615	Xã	874	\N	\N
30166	Xã Tân Long	xa-tan-long	10.5675894	105.4126652	Xã	874	\N	\N
30169	Thị trấn Lấp Vò	thi-tran-lap-vo	10.3577289	105.5210607	Thị trấn	875	\N	\N
30172	Xã Mỹ An Hưng A	xa-my-an-hung-a	10.4067257	105.5767493	Xã	875	\N	\N
30175	Xã Tân Mỹ	xa-tan-my	10.3923418	105.6471178	Xã	875	\N	\N
30178	Xã Mỹ An Hưng B	xa-my-an-hung-b	10.3831971	105.6119301	Xã	875	\N	\N
30181	Xã Tân  Khánh Trung	xa-tan-khanh-trung	10.3791189	105.6940454	Xã	875	\N	\N
30184	Xã Long Hưng A	xa-long-hung-a	10.3527801	105.6764461	Xã	875	\N	\N
30187	Xã Vĩnh Thạnh	xa-vinh-thanh	10.339645	105.6119301	Xã	875	\N	\N
30190	Xã Long Hưng B	xa-long-hung-b	10.3264445	105.6588485	Xã	875	\N	\N
30193	Xã Bình Thành	xa-binh-thanh	10.3413789	105.5767493	Xã	875	\N	\N
30196	Xã Định An	xa-dinh-an	10.3219082	105.5298525	Xã	875	\N	\N
30199	Xã Định Yên	xa-dinh-yen	10.309874	105.5532993	Xã	875	\N	\N
30202	Xã Hội An Đông	xa-hoi-an-dong	10.4078862	105.5532993	Xã	875	\N	\N
30205	Xã Bình Thạnh Trung	xa-binh-thanh-trung	10.3803603	105.5591615	Xã	875	\N	\N
30208	Thị trấn Lai Vung	thi-tran-lai-vung	10.2938059	105.6588485	Thị trấn	876	\N	\N
30211	Xã Tân Dương	xa-tan-duong	10.335001	105.7057792	Xã	876	\N	\N
30214	Xã Hòa Thành	xa-hoa-thanh	10.2914895	105.7057792	Xã	876	\N	\N
30217	Xã Long Hậu	xa-long-hau	10.2846597	105.6236585	Xã	876	\N	\N
30220	Xã Tân Phước	xa-tan-phuoc	10.2972665	105.5884754	Xã	876	\N	\N
30223	Xã Hòa Long	xa-hoa-long	10.2611796	105.6588485	Xã	876	\N	\N
30226	Xã Tân Thành	xa-tan-thanh	10.2643954	105.5834906	Xã	876	\N	\N
30229	Xã Long Thắng	xa-long-thang	10.2428539	105.6999122	Xã	876	\N	\N
30232	Xã Vĩnh Thới	xa-vinh-thoi	10.2405852	105.6353878	Xã	876	\N	\N
30235	Xã Tân Hòa	xa-tan-hoa	10.2074033	105.6471178	Xã	876	\N	\N
30238	Xã Định Hòa	xa-dinh-hoa	10.1850999	105.6588485	Xã	876	\N	\N
30241	Xã Phong Hòa	xa-phong-hoa	10.1833808	105.6940454	Xã	876	\N	\N
30244	Thị trấn Cái Tàu Hạ	thi-tran-cai-tau-ha	10.2587308	105.8730678	Thị trấn	877	\N	\N
30247	Xã An Hiệp	xa-an-hiep	10.2856663	105.8231588	Xã	877	\N	\N
30250	Xã An Nhơn	xa-an-nhon	10.2730435	105.8583873	Xã	877	\N	\N
30253	Xã Tân Nhuận Đông	xa-tan-nhuan-dong	10.2422003	105.8231588	Xã	877	\N	\N
30256	Xã Tân Bình	xa-tan-binh	10.2553925	105.776198	Xã	877	\N	\N
30259	Xã Tân Phú Trung	xa-tan-phu-trung	10.2462649	105.7409852	Xã	877	\N	\N
30262	Xã Phú Long	xa-phu-long	10.2222167	105.7879371	Xã	877	\N	\N
30265	Xã An Phú Thuận	xa-an-phu-thuan	10.2169808	105.8936224	Xã	877	\N	\N
30268	Xã Phú Hựu	xa-phu-huu	10.2404514	105.8583873	Xã	877	\N	\N
30271	Xã An Khánh	xa-an-khanh	10.1970145	105.8583873	Xã	877	\N	\N
30274	Xã Tân Phú	xa-tan-phu	10.2130899	105.7527221	Xã	877	\N	\N
30277	Xã Hòa Tân	xa-hoa-tan	10.1719042	105.8172881	Xã	877	\N	\N
30280	Phường Mỹ Bình	phuong-my-binh	10.3871655	105.4355647	Phường	883	\N	\N
30283	Phường Mỹ Long	phuong-my-long	10.3792399	105.4434192	Phường	883	\N	\N
30285	Phường Đông Xuyên	phuong-dong-xuyen	10.3745076	105.4287738	Phường	883	\N	\N
30286	Phường Mỹ Xuyên	phuong-my-xuyen	10.3775894	105.4347966	Phường	883	\N	\N
30289	Phường Bình Đức	phuong-binh-duc	10.4174582	105.4115314	Phường	883	\N	\N
30292	Phường Bình Khánh	phuong-binh-khanh	10.3953269	105.4208821	Phường	883	\N	\N
30295	Phường Mỹ Phước	phuong-my-phuoc	10.3696148	105.4464824	Phường	883	\N	\N
30298	Phường Mỹ Quý	phuong-my-quy	10.36208	105.4524494	Phường	883	\N	\N
30301	Phường Mỹ Thới	phuong-my-thoi	10.3562421	105.4582046	Phường	883	\N	\N
30304	Phường Mỹ Thạnh	phuong-my-thanh	10.3334683	105.4800424	Phường	883	\N	\N
30307	Phường Mỹ Hòa	phuong-my-hoa	10.3772782	105.4221943	Phường	883	\N	\N
30310	Xã Mỹ Khánh	xa-my-khanh	10.3792302	105.3872573	Xã	883	\N	\N
30313	Xã Mỹ Hoà Hưng	xa-my-hoa-hung	10.4245638	105.4360963	Xã	883	\N	\N
30316	Phường Châu Phú B	phuong-chau-phu-b	10.6810551	105.1083542	Phường	884	\N	\N
30319	Phường Châu Phú A	phuong-chau-phu-a	10.7058379	105.1054308	Phường	884	\N	\N
30322	Phường Vĩnh Mỹ	phuong-vinh-my	10.6869563	105.1398205	Phường	884	\N	\N
30325	Phường Núi Sam	phuong-nui-sam	10.6712546	105.0849687	Phường	884	\N	\N
30328	Phường Vĩnh Ngươn	phuong-vinh-nguon	10.7222677	105.1054308	Phường	884	\N	\N
30331	Xã Vĩnh Tế	xa-vinh-te	10.6677835	105.044052	Xã	884	\N	\N
30334	Xã Vĩnh Châu	xa-vinh-chau	10.6575692	105.1109531	Xã	884	\N	\N
30337	Thị trấn An Phú	thi-tran-an-phu	10.7885968	105.0937378	Thị trấn	886	\N	\N
30340	Xã Khánh An	xa-khanh-an	10.9471061	105.1054308	Xã	886	\N	\N
30341	Thị Trấn Long Bình	thi-tran-long-binh	10.9453897	105.0849687	Thị trấn	886	\N	\N
30343	Xã Khánh Bình	xa-khanh-binh	10.9269062	105.0703544	Xã	886	\N	\N
30346	Xã Quốc Thái	xa-quoc-thai	10.8910813	105.0732771	Xã	886	\N	\N
30349	Xã Nhơn Hội	xa-nhon-hoi	10.8922487	105.0498966	Xã	886	\N	\N
30352	Xã Phú Hữu	xa-phu-huu	10.8835468	105.1142011	Xã	886	\N	\N
30355	Xã Phú Hội	xa-phu-hoi	10.8142824	105.0732771	Xã	886	\N	\N
30358	Xã Phước Hưng	xa-phuoc-hung	10.8685489	105.0849687	Xã	886	\N	\N
30361	Xã Vĩnh Lộc	xa-vinh-loc	10.8396644	105.1142011	Xã	886	\N	\N
30364	Xã Vĩnh Hậu	xa-vinh-hau	10.7998294	105.1434387	Xã	886	\N	\N
30367	Xã Vĩnh Trường	xa-vinh-truong	10.7790702	105.1200482	Xã	886	\N	\N
30370	Xã Vĩnh Hội Đông	xa-vinh-hoi-dong	10.7923518	105.0732771	Xã	886	\N	\N
30373	Xã Đa Phước	xa-da-phuoc	10.7461948	105.1200482	Xã	886	\N	\N
30376	Phường Long Thạnh	phuong-long-thanh	10.7708956	105.2838511	Phường	887	\N	\N
30377	Phường Long Hưng	phuong-long-hung	10.7958634	105.2308219	Phường	887	\N	\N
30378	Phường Long Châu	phuong-long-chau	10.7951531	105.2370339	Phường	887	\N	\N
30379	Xã Phú Lộc	xa-phu-loc	10.9095149	105.1434387	Xã	887	\N	\N
30382	Xã Vĩnh Xương	xa-vinh-xuong	10.8973641	105.1668326	Xã	887	\N	\N
30385	Xã Vĩnh Hòa	xa-vinh-hoa	10.8528973	105.1785307	Xã	887	\N	\N
30387	Xã Tân Thạnh	xa-tan-thanh	10.8026827	105.1960795	Xã	887	\N	\N
30388	Xã Tân An	xa-tan-an	10.8129361	105.191593	Xã	887	\N	\N
30391	Xã Long An	xa-long-an	10.7865361	105.1902297	Xã	887	\N	\N
30394	Phường Long Phú	phuong-long-phu	10.7789859	105.2178108	Phường	887	\N	\N
30397	Xã Châu Phong	xa-chau-phong	10.7340814	105.1434387	Xã	887	\N	\N
30400	Xã Phú Vĩnh	xa-phu-vinh	10.7536668	105.1902297	Xã	887	\N	\N
30403	Xã Lê Chánh	xa-le-chanh	10.732922	105.1668326	Xã	887	\N	\N
30406	Thị trấn Phú Mỹ	thi-tran-phu-my	10.5822834	105.3569734	Thị trấn	888	\N	\N
30409	Thị trấn Chợ Vàm	thi-tran-cho-vam	10.6948518	105.3413773	Thị trấn	888	\N	\N
30412	Phường Long Sơn	phuong-long-son	10.7726552	105.248737	Phường	887	\N	\N
30415	Xã Long Hoà	xa-long-hoa	10.7611065	105.2801455	Xã	888	\N	\N
30418	Xã Phú Long	xa-phu-long	10.7294292	105.231514	Xã	888	\N	\N
30421	Xã Phú Lâm	xa-phu-lam	10.7282651	105.2604409	Xã	888	\N	\N
30424	Xã Phú Hiệp	xa-phu-hiep	10.5785476	105.3623367	Xã	888	\N	\N
30427	Xã Phú Thạnh	xa-phu-thanh	10.7000238	105.2779983	Xã	888	\N	\N
30430	Xã Hoà Lạc	xa-hoa-lac	10.6752813	105.2253316	Xã	888	\N	\N
30433	Xã Phú Thành	xa-phu-thanh	10.7000238	105.2779983	Xã	888	\N	\N
30436	Xã Phú An	xa-phu-an	10.661572	105.335288	Xã	888	\N	\N
30439	Xã Phú Xuân	xa-phu-xuan	10.6317038	105.2862284	Xã	888	\N	\N
30442	Xã Hiệp Xương	xa-hiep-xuong	14.058324	108.277199	Xã	888	\N	\N
30445	Xã Phú Bình	xa-phu-binh	10.5796614	105.2325225	Xã	888	\N	\N
30448	Xã Phú Thọ	xa-phu-tho	10.6237961	105.3415676	Xã	888	\N	\N
30451	Xã Phú Hưng	xa-phu-hung	10.5918872	105.3095716	Xã	888	\N	\N
30454	Xã Bình Thạnh Đông	xa-binh-thanh-dong	10.5710477	105.258779	Xã	888	\N	\N
30457	Xã Tân Hòa	xa-tan-hoa	10.5822834	105.3569734	Xã	888	\N	\N
30460	Xã Tân Trung	xa-tan-trung	10.5735369	105.3590601	Xã	888	\N	\N
30463	Thị trấn Cái Dầu	thi-tran-cai-dau	10.5682157	105.2341082	Thị trấn	889	\N	\N
30466	Xã Khánh Hòa	xa-khanh-hoa	10.6770184	105.1902297	Xã	889	\N	\N
30469	Xã Mỹ Đức	xa-my-duc	10.6711947	105.1651526	Xã	889	\N	\N
30472	Xã Mỹ Phú	xa-my-phu	10.6171281	105.1843801	Xã	889	\N	\N
30475	Xã Ô Long Vỹ	xa-o-long-vy	10.5883214	105.1025075	Xã	889	\N	\N
30478	Xã Vĩnh Thạnh Trung	xa-vinh-thanh-trung	10.5779931	105.2019295	Xã	889	\N	\N
30481	Xã Thạnh Mỹ Tây	xa-thanh-my-tay	10.5308066	105.1609838	Xã	889	\N	\N
30484	Xã Bình Long	xa-binh-long	10.5440566	105.2253316	Xã	889	\N	\N
30487	Xã Bình Mỹ	xa-binh-my	10.5250878	105.2779983	Xã	889	\N	\N
30490	Xã Bình Thủy	xa-binh-thuy	10.5285357	105.3189726	Xã	889	\N	\N
30493	Xã Đào Hữu Cảnh	xa-dao-huu-canh	10.4893691	105.1142011	Xã	889	\N	\N
30496	Xã Bình Phú	xa-binh-phu	10.4917136	105.1785307	Xã	889	\N	\N
30499	Xã Bình Chánh	xa-binh-chanh	10.4997871	105.2370339	Xã	889	\N	\N
30502	Thị trấn Nhà Bàng	thi-tran-nha-bang	10.6231047	105.0060673	Thị trấn	890	\N	\N
30505	Thị trấn Chi Lăng	thi-tran-chi-lang	10.5318577	105.0265195	Thị trấn	890	\N	\N
30508	Xã Núi Voi	xa-nui-voi	10.5385053	105.0586639	Xã	890	\N	\N
30511	Xã Nhơn Hưng	xa-nhon-hung	10.6533543	105.0031457	Xã	890	\N	\N
30514	Xã An Phú	xa-an-phu	10.6222099	104.9680914	Xã	890	\N	\N
30517	Xã Thới Sơn	xa-thoi-son	10.6084301	105.0265195	Xã	890	\N	\N
30520	Thị trấn Tịnh Biên	thi-tran-tinh-bien	10.5905003	104.9447261	Thị trấn	890	\N	\N
30523	Xã Văn Giáo	xa-van-giao	10.5859787	105.0382076	Xã	890	\N	\N
30526	Xã An Cư	xa-an-cu	10.5450463	104.9797753	Xã	890	\N	\N
30529	Xã An Nông	xa-an-nong	10.5639847	104.9272044	Xã	890	\N	\N
30532	Xã Vĩnh Trung	xa-vinh-trung	10.5531636	105.0382076	Xã	890	\N	\N
30535	Xã Tân Lợi	xa-tan-loi	10.5088656	105.0498966	Xã	890	\N	\N
30538	Xã An Hảo	xa-an-hao	10.4708984	105.044052	Xã	890	\N	\N
30541	Xã Tân Lập	xa-tan-lap	10.4634686	105.0849687	Xã	890	\N	\N
30544	Thị trấn Tri Tôn	thi-tran-tri-ton	10.4236989	105.0031457	Thị trấn	891	\N	\N
30547	Thị trấn Ba Chúc	thi-tran-ba-chuc	10.4833465	104.8980058	Thị trấn	891	\N	\N
30550	Xã Lạc Quới	xa-lac-quoi	10.5074693	104.8703043	Xã	891	\N	\N
30553	Xã Lê Trì	xa-le-tri	10.5035433	104.9330448	Xã	891	\N	\N
30556	Xã Vĩnh Gia	xa-vinh-gia	10.5039104	104.8104424	Xã	891	\N	\N
30559	Xã Vĩnh Phước	xa-vinh-phuoc	10.4371958	104.8337879	Xã	891	\N	\N
30562	Xã Châu Lăng	xa-chau-lang	10.4461033	104.9914601	Xã	891	\N	\N
30565	Xã Lương Phi	xa-luong-phi	10.4546292	104.9272044	Xã	891	\N	\N
30568	Xã Lương An Trà	xa-luong-an-tra	10.3912866	104.8804893	Xã	891	\N	\N
30571	Xã Tà Đảnh	xa-ta-danh	10.4031312	105.0908147	Xã	891	\N	\N
30574	Xã Núi Tô	xa-nui-to	10.4013017	105.0148322	Xã	891	\N	\N
30577	Xã An Tức	xa-an-tuc	10.3879754	104.9505671	Xã	891	\N	\N
30580	Xã Cô Tô	xa-co-to	10.3628179	105.0206757	Xã	891	\N	\N
30583	Xã Tân Tuyến	xa-tan-tuyen	10.3376626	105.0908147	Xã	891	\N	\N
30586	Xã Ô Lâm	xa-o-lam	10.3432053	104.9739333	Xã	891	\N	\N
30589	Thị trấn An Châu	thi-tran-an-chau	10.4403346	105.3925641	Thị trấn	892	\N	\N
30592	Xã An Hòa	xa-an-hoa	10.1094911	105.2777819	Xã	892	\N	\N
30595	Xã Cần Đăng	xa-can-dang	10.4575621	105.2938458	Xã	892	\N	\N
30598	Xã Vĩnh Hanh	xa-vinh-hanh	10.4471455	105.2500575	Xã	892	\N	\N
30601	Xã Bình Thạnh	xa-binh-thanh	14.058324	108.277199	Xã	892	\N	\N
30604	Xã Vĩnh Bình	xa-vinh-binh	10.4420803	105.1712999	Xã	892	\N	\N
30607	Xã Bình Hòa	xa-binh-hoa	10.4556395	105.3445866	Xã	892	\N	\N
30610	Xã Vĩnh An	xa-vinh-an	10.4227169	105.1375908	Xã	892	\N	\N
30613	Xã Hòa Bình Thạnh	xa-hoa-binh-thanh	14.058324	108.277199	Xã	892	\N	\N
30616	Xã Vĩnh Lợi	xa-vinh-loi	10.3929765	105.3014109	Xã	892	\N	\N
30619	Xã Vĩnh Nhuận	xa-vinh-nhuan	10.4067213	105.2428853	Xã	892	\N	\N
30622	Xã Tân Phú	xa-tan-phu	9.9458563	105.729332	Xã	892	\N	\N
30625	Xã Vĩnh Thành	xa-vinh-thanh	10.358482	105.368724	Xã	892	\N	\N
30628	Thị trấn Chợ Mới	thi-tran-cho-moi	10.5474757	105.4053436	Thị trấn	893	\N	\N
30631	Thị trấn Mỹ Luông	thi-tran-my-luong	10.4985989	105.4829681	Thị trấn	893	\N	\N
30634	Xã Kiến An	xa-kien-an	10.5423179	105.3716684	Xã	893	\N	\N
30637	Xã Mỹ Hội Đông	xa-my-hoi-dong	10.515886	105.3541013	Xã	893	\N	\N
30640	Xã Long Điền A	xa-long-dien-a	10.5325029	105.4595306	Xã	893	\N	\N
30643	Xã Tấn Mỹ	xa-tan-my	10.508345	105.5064087	Xã	893	\N	\N
30646	Xã Long Điền B	xa-long-dien-b	10.5112548	105.4478131	Xã	893	\N	\N
30649	Xã Kiến Thành	xa-kien-thanh	10.512995	105.4126652	Xã	893	\N	\N
30652	Xã Mỹ Hiệp	xa-my-hiep	10.5065934	105.5415755	Xã	893	\N	\N
30655	Xã Mỹ An	xa-my-an	10.4756184	105.5064087	Xã	893	\N	\N
30658	Xã Nhơn Mỹ	xa-nhon-my	10.4756645	105.3950939	Xã	893	\N	\N
30661	Xã Long Giang	xa-long-giang	10.4681887	105.4360963	Xã	893	\N	\N
30664	Xã Long Kiến	xa-long-kien	10.4664526	105.471249	Xã	893	\N	\N
30667	Xã Bình Phước Xuân	xa-binh-phuoc-xuan	10.4514826	105.5532993	Xã	893	\N	\N
30670	Xã An Thạnh Trung	xa-an-thanh-trung	10.427419	105.488828	Xã	893	\N	\N
30673	Xã Hội An	xa-hoi-an	10.5503316	105.4022066	Xã	893	\N	\N
30676	Xã Hòa Bình	xa-hoa-binh	10.3901353	105.471249	Xã	893	\N	\N
30679	Xã Hòa An	xa-hoa-an	10.3671932	105.494688	Xã	893	\N	\N
30682	Thị trấn Núi Sập	thi-tran-nui-sap	10.2581682	105.2721456	Thị trấn	894	\N	\N
30685	Thị trấn Phú Hoà	thi-tran-phu-hoa	10.3534221	105.386309	Thị trấn	894	\N	\N
30688	Thị Trấn Óc Eo	thi-tran-oc-eo	10.241958	105.1551352	Thị trấn	894	\N	\N
30691	Xã Tây Phú	xa-tay-phu	10.3561254	105.1609838	Xã	894	\N	\N
30692	Xã An Bình	xa-an-binh	10.3125096	105.1609838	Xã	894	\N	\N
30694	Xã Vĩnh Phú	xa-vinh-phu	10.3527541	105.2311827	Xã	894	\N	\N
30697	Xã Vĩnh Trạch	xa-vinh-trach	10.3310367	105.3423909	Xã	894	\N	\N
30700	Xã Phú Thuận	xa-phu-thuan	10.2949564	105.4126652	Xã	894	\N	\N
30703	Xã Vĩnh Chánh	xa-vinh-chanh	10.3023865	105.3716684	Xã	894	\N	\N
30706	Xã Định Mỹ	xa-dinh-my	10.3248663	105.2927977	Xã	894	\N	\N
30709	Xã Định Thành	xa-dinh-thanh	10.3057775	105.3014109	Xã	894	\N	\N
30712	Xã Mỹ Phú Đông	xa-my-phu-dong	10.310273	105.2077798	Xã	894	\N	\N
30715	Xã Vọng Đông	xa-vong-dong	10.2745342	105.1844444	Xã	894	\N	\N
30718	Xã Vĩnh Khánh	xa-vinh-khanh	10.2599612	105.348246	Xã	894	\N	\N
30721	Xã Thoại Giang	xa-thoai-giang	10.2655716	105.2311827	Xã	894	\N	\N
30724	Xã Bình Thành	xa-binh-thanh	10.2179592	105.2019295	Xã	894	\N	\N
30727	Xã Vọng Thê	xa-vong-the	10.275753	105.1317431	Xã	894	\N	\N
30730	Phường Vĩnh Thanh Vân	phuong-vinh-thanh-van	10.0095159	105.0832318	Phường	899	\N	\N
30733	Phường Vĩnh Thanh	phuong-vinh-thanh	10.0145123	105.0818276	Phường	899	\N	\N
30736	Phường Vĩnh Quang	phuong-vinh-quang	10.0260579	105.0690984	Phường	899	\N	\N
30739	Phường Vĩnh Hiệp	phuong-vinh-hiep	9.9917553	105.1043574	Phường	899	\N	\N
30742	Phường Vĩnh Bảo	phuong-vinh-bao	10.0030212	105.0863077	Phường	899	\N	\N
30745	Phường Vĩnh Lạc	phuong-vinh-lac	9.9943793	105.0943227	Phường	899	\N	\N
30748	Phường An Hòa	phuong-an-hoa	9.9804585	105.1043935	Phường	899	\N	\N
30751	Phường An Bình	phuong-an-binh	9.9678142	105.1214361	Phường	899	\N	\N
30754	Phường Rạch Sỏi	phuong-rach-soi	9.9483946	105.1156893	Phường	899	\N	\N
30757	Phường Vĩnh Lợi	phuong-vinh-loi	9.9552245	105.1236923	Phường	899	\N	\N
30760	Phường Vĩnh Thông	phuong-vinh-thong	10.0361694	105.0953774	Phường	899	\N	\N
30763	Xã Phi Thông	xa-phi-thong	10.0549515	105.1211419	Xã	899	\N	\N
30766	Phường Tô Châu	phuong-to-chau	10.3735151	104.4985359	Phường	900	\N	\N
30769	Phường Đông Hồ	phuong-dong-ho	10.4029259	104.5130967	Phường	900	\N	\N
30772	Phường Bình San	phuong-binh-san	10.390722	104.4810648	Phường	900	\N	\N
30775	Phường Pháo Đài	phuong-phao-dai	10.3837166	104.4548621	Phường	900	\N	\N
30778	Xã Mỹ Đức	xa-my-duc	10.4160066	104.4665072	Xã	900	\N	\N
30781	Xã Tiên Hải	xa-tien-hai	10.2910916	104.3268266	Xã	900	\N	\N
30784	Xã Thuận Yên	xa-thuan-yen	10.3471797	104.5363969	Xã	900	\N	\N
30787	Thị trấn Kiên Lương	thi-tran-kien-luong	10.2456707	104.6063192	Thị trấn	902	\N	\N
30790	Xã Kiên Bình	xa-kien-binh	10.3437706	104.7287607	Xã	902	\N	\N
30791	Xã Vĩnh Phú	xa-vinh-phu	10.5013325	104.7545803	Xã	914	\N	\N
30793	Xã Vĩnh Điều	xa-vinh-dieu	10.4749466	104.7287607	Xã	914	\N	\N
30796	Xã Tân Khánh Hòa	xa-tan-khanh-hoa	10.4897169	104.6471221	Xã	914	\N	\N
30797	Xã Phú Lợi	xa-phu-loi	10.4377187	104.5888356	Xã	914	\N	\N
30799	Xã Phú Mỹ	xa-phu-my	10.4377187	104.5888356	Xã	914	\N	\N
30802	Xã Hòa Điền	xa-hoa-dien	10.3480893	104.6354631	Xã	902	\N	\N
30805	Xã Dương Hòa	xa-duong-hoa	10.2972046	104.5538744	Xã	902	\N	\N
30808	Xã Bình An	xa-binh-an	10.1641051	104.6004911	Xã	902	\N	\N
30809	Xã Bình Trị	xa-binh-tri	10.1805016	104.6592079	Xã	902	\N	\N
30811	Xã Sơn Hải	xa-son-hai	10.0328246	104.5509614	Xã	902	\N	\N
30814	Xã Hòn Nghệ	xa-hon-nghe	10.0328246	104.5509614	Xã	902	\N	\N
30817	Thị trấn Hòn Đất	thi-tran-hon-dat	10.1875555	104.9213643	Thị trấn	903	\N	\N
30820	Thị trấn Sóc Sơn	thi-tran-soc-son	10.1070034	105.0148322	Thị trấn	903	\N	\N
30823	Xã Bình Sơn	xa-binh-son	10.261398	104.8571368	Xã	903	\N	\N
30826	Xã Bình Giang	xa-binh-giang	10.3083013	104.7871004	Xã	903	\N	\N
30828	Xã Mỹ Thái	xa-my-thai	10.2275662	105.0299644	Xã	903	\N	\N
30829	Xã Nam Thái Sơn	xa-nam-thai-son	10.25704	104.9505671	Xã	903	\N	\N
30832	Xã Mỹ Hiệp Sơn	xa-my-hiep-son	10.2161843	105.0955882	Xã	903	\N	\N
30835	Xã Sơn Kiên	xa-son-kien	10.1728606	105.0031457	Xã	903	\N	\N
30836	Xã Sơn Bình	xa-son-binh	10.1263032	104.9505671	Xã	903	\N	\N
30838	Xã Mỹ Thuận	xa-my-thuan	10.1437361	105.044052	Xã	903	\N	\N
30840	Xã Lình Huỳnh	xa-linh-huynh	10.1523925	104.8571368	Xã	903	\N	\N
30841	Xã Thổ Sơn	xa-tho-son	10.1284592	104.9038451	Xã	903	\N	\N
30844	Xã Mỹ Lâm	xa-my-lam	10.0567029	105.044052	Xã	903	\N	\N
30847	Xã Mỹ Phước	xa-my-phuoc	10.1350635	105.100493	Xã	903	\N	\N
30850	Thị trấn Tân Hiệp	thi-tran-tan-hiep	10.1099017	105.3014109	Thị trấn	904	\N	\N
30853	Xã Tân Hội	xa-tan-hoi	10.1214232	105.1597912	Xã	904	\N	\N
30856	Xã Tân Thành	xa-tan-thanh	10.1609993	105.1874136	Xã	904	\N	\N
30859	Xã Tân Hiệp B	xa-tan-hiep-b	10.1185559	105.2852323	Xã	904	\N	\N
30860	Xã Tân Hoà	xa-tan-hoa	10.1743547	105.2065457	Xã	904	\N	\N
30862	Xã Thạnh Đông B	xa-thanh-dong-b	10.0839434	105.33717	Xã	904	\N	\N
30865	Xã Thạnh Đông	xa-thanh-dong	10.0747732	105.2427467	Xã	904	\N	\N
30868	Xã Tân Hiệp A	xa-tan-hiep-a	10.0871515	105.211927	Xã	904	\N	\N
30871	Xã Tân An	xa-tan-an	10.1176815	105.193579	Xã	904	\N	\N
30874	Xã Thạnh Đông A	xa-thanh-dong-a	10.0747732	105.2427467	Xã	904	\N	\N
30877	Xã Thạnh Trị	xa-thanh-tri	10.0205667	105.232624	Xã	904	\N	\N
30880	Thị trấn Minh Lương	thi-tran-minh-luong	9.9044207	105.1668326	Thị trấn	905	\N	\N
30883	Xã Mong Thọ A	xa-mong-tho-a	10.0450276	105.1785307	Xã	905	\N	\N
30886	Xã Mong Thọ B	xa-mong-tho-b	9.9679141	105.2019295	Xã	905	\N	\N
30887	Xã Mong Thọ	xa-mong-tho	10.0216637	105.2136302	Xã	905	\N	\N
30889	Xã Giục Tượng	xa-giuc-tuong	9.9586817	105.1668326	Xã	905	\N	\N
30892	Xã Vĩnh Hòa Hiệp	xa-vinh-hoa-hiep	9.9277341	105.1317431	Xã	905	\N	\N
30893	Xã Vĩnh Hoà Phú	xa-vinh-hoa-phu	9.8957161	105.1200482	Xã	905	\N	\N
30895	Xã Minh Hòa	xa-minh-hoa	9.8754252	105.2077798	Xã	905	\N	\N
30898	Xã Bình An	xa-binh-an	9.8621066	105.1434387	Xã	905	\N	\N
30901	Xã Thạnh Lộc	xa-thanh-loc	10.0089019	105.1375908	Xã	905	\N	\N
30904	Thị Trấn Giồng Riềng	thi-tran-giong-rieng	9.8984837	105.2955575	Thị trấn	906	\N	\N
30907	Xã Thạnh Hưng	xa-thanh-hung	9.9556799	105.348246	Xã	906	\N	\N
30910	Xã Thạnh Phước	xa-thanh-phuoc	10.0186713	105.3860797	Xã	906	\N	\N
30913	Xã Thạnh Lộc	xa-thanh-loc	9.9957759	105.4185227	Xã	906	\N	\N
30916	Xã Thạnh Hòa	xa-thanh-hoa	9.9578656	105.3014109	Xã	906	\N	\N
30917	Xã Thạnh Bình	xa-thanh-binh	9.9326192	105.3059124	Xã	906	\N	\N
30919	Xã Bàn Thạch	xa-ban-thach	9.8949566	105.2545888	Xã	906	\N	\N
30922	Xã Bàn Tân Định	xa-ban-tan-dinh	9.9400449	105.259235	Xã	906	\N	\N
30925	Xã Ngọc Thành	xa-ngoc-thanh	9.9163572	105.3775245	Xã	906	\N	\N
30928	Xã Ngọc Chúc	xa-ngoc-chuc	9.8849284	105.3541013	Xã	906	\N	\N
30931	Xã Ngọc Thuận	xa-ngoc-thuan	9.951287	105.4419546	Xã	906	\N	\N
30934	Xã Hòa Hưng	xa-hoa-hung	9.8634946	105.4653897	Xã	906	\N	\N
30937	Xã Hoà Lợi	xa-hoa-loi	9.9274013	105.488828	Xã	906	\N	\N
30940	Xã Hoà An	xa-hoa-an	9.9079262	105.4419546	Xã	906	\N	\N
30943	Xã Long Thạnh	xa-long-thanh	9.8464431	105.248737	Xã	906	\N	\N
30946	Xã Vĩnh Thạnh	xa-vinh-thanh	9.8638975	105.3189064	Xã	906	\N	\N
30947	Xã Vĩnh Phú	xa-vinh-phu	9.8483568	105.3248269	Xã	906	\N	\N
30949	Xã  Hòa Thuận	xa-hoa-thuan	9.8451045	105.3950939	Xã	906	\N	\N
30950	Xã Ngọc Hoà	xa-ngoc-hoa	9.8678925	105.4152832	Xã	906	\N	\N
30952	Thị trấn Gò Quao	thi-tran-go-quao	9.7478966	105.2721456	Thị trấn	907	\N	\N
30955	Xã Vĩnh Hòa Hưng Bắc	xa-vinh-hoa-hung-bac	9.8028724	105.3716684	Xã	907	\N	\N
30958	Xã Định Hòa	xa-dinh-hoa	9.7865905	105.2545888	Xã	907	\N	\N
30961	Xã Thới Quản	xa-thoi-quan	9.7908537	105.1609838	Xã	907	\N	\N
30964	Xã Định An	xa-dinh-an	9.7833747	105.3248269	Xã	907	\N	\N
30967	Xã Thủy Liễu	xa-thuy-lieu	9.767065	105.2077798	Xã	907	\N	\N
30970	Xã Vĩnh Hòa Hưng Nam	xa-vinh-hoa-hung-nam	9.755077	105.3854942	Xã	907	\N	\N
30973	Xã Vĩnh Phước A	xa-vinh-phuoc-a	9.6932656	105.2838511	Xã	907	\N	\N
30976	Xã Vĩnh Phước B	xa-vinh-phuoc-b	9.7195109	105.3014109	Xã	907	\N	\N
30979	Xã Vĩnh Tuy	xa-vinh-tuy	9.6246931	105.3658125	Xã	907	\N	\N
30982	Xã Vĩnh Thắng	xa-vinh-thang	9.6478956	105.3306814	Xã	907	\N	\N
30985	Thị trấn Thứ Ba	thi-tran-thu-ba	9.8116123	105.0615865	Thị trấn	908	\N	\N
30988	Xã Tây Yên	xa-tay-yen	9.9252534	105.0674317	Xã	908	\N	\N
30991	Xã Tây Yên A	xa-tay-yen-a	9.8756195	105.0849687	Xã	908	\N	\N
30994	Xã Nam Yên	xa-nam-yen	9.8612066	105.044052	Xã	908	\N	\N
30997	Xã Hưng Yên	xa-hung-yen	9.8146501	105.1142011	Xã	908	\N	\N
31000	Xã Nam Thái	xa-nam-thai	9.8416255	104.9973028	Xã	908	\N	\N
31003	Xã Nam Thái A	xa-nam-thai-a	9.822034	104.9505671	Xã	908	\N	\N
31006	Xã Đông Thái	xa-dong-thai	9.775517	105.0206757	Xã	908	\N	\N
31009	Xã Đông Yên	xa-dong-yen	9.7506944	105.0908147	Xã	908	\N	\N
31012	Xã Thạnh Yên	xa-thanh-yen	9.7052796	105.1375908	Xã	913	\N	\N
31015	Xã Thạnh Yên A	xa-thanh-yen-a	9.7326069	105.1317431	Xã	913	\N	\N
31018	Thị trấn Thứ Mười Một	thi-tran-thu-muoi-mot	9.6218672	104.9447261	Thị trấn	909	\N	\N
31021	Xã Thuận Hoà	xa-thuan-hoa	9.7807426	104.9038451	Xã	909	\N	\N
31024	Xã Đông Hòa	xa-dong-hoa	9.7115573	104.9973028	Xã	909	\N	\N
31027	Xã An Minh Bắc	xa-an-minh-bac	9.6208176	105.0908147	Xã	913	\N	\N
31030	Xã Đông Thạnh	xa-dong-thanh	9.6692828	104.9739333	Xã	909	\N	\N
31031	Xã Tân Thạnh	xa-tan-thanh	9.7157075	104.9038451	Xã	909	\N	\N
31033	Xã Đông Hưng	xa-dong-hung	9.6259911	104.9739333	Xã	909	\N	\N
31036	Xã Đông Hưng A	xa-dong-hung-a	9.6734083	104.8804893	Xã	909	\N	\N
31039	Xã Đông Hưng B	xa-dong-hung-b	9.5827226	104.9739333	Xã	909	\N	\N
31042	Xã Vân Khánh	xa-van-khanh	9.5868126	104.8804893	Xã	909	\N	\N
31045	Xã Vân Khánh Đông	xa-van-khanh-dong	9.6300989	104.8804893	Xã	909	\N	\N
31048	Xã Vân Khánh Tây	xa-van-khanh-tay	9.5435495	104.8804893	Xã	909	\N	\N
31051	Thị trấn Vĩnh Thuận	thi-tran-vinh-thuan	9.5106455	105.2604409	Thị trấn	910	\N	\N
31054	Xã Vĩnh Hòa	xa-vinh-hoa	9.6815332	105.1843801	Xã	913	\N	\N
31057	Xã Hoà Chánh	xa-hoa-chanh	9.699504	105.237437	Xã	913	\N	\N
31060	Xã Vĩnh Bình Bắc	xa-vinh-binh-bac	9.6361706	105.2311827	Xã	910	\N	\N
31063	Xã Vĩnh Bình Nam	xa-vinh-binh-nam	9.5702876	105.2545888	Xã	910	\N	\N
31064	Xã Bình Minh	xa-binh-minh	9.601226	105.1873648	Xã	910	\N	\N
31066	Xã Minh Thuận	xa-minh-thuan	9.5857863	105.1492869	Xã	913	\N	\N
31069	Xã Vĩnh Thuận	xa-vinh-thuan	9.4870331	105.1843801	Xã	910	\N	\N
31072	Xã Tân Thuận	xa-tan-thuan	9.529177	105.2077798	Xã	910	\N	\N
31074	Xã Phong Đông	xa-phong-dong	9.5250089	105.3014109	Xã	910	\N	\N
31075	Xã Vĩnh Phong	xa-vinh-phong	9.4407836	105.2545888	Xã	910	\N	\N
31078	Thị trấn Dương Đông	thi-tran-duong-dong	10.2304532	103.9666115	Thị trấn	911	\N	\N
31081	Thị trấn An Thới	thi-tran-an-thoi	10.042699	104.0130391	Thị trấn	911	\N	\N
31084	Xã Cửa Cạn	xa-cua-can	10.3043743	103.902799	Xã	911	\N	\N
31087	Xã Gành Dầu	xa-ganh-dau	10.34819	103.902799	Xã	911	\N	\N
31090	Xã Cửa Dương	xa-cua-duong	10.289879	103.98402	Xã	911	\N	\N
31093	Xã Hàm Ninh	xa-ham-ninh	10.188897	104.0420642	Xã	911	\N	\N
31096	Xã Dương Tơ	xa-duong-to	10.1471942	103.9956269	Xã	911	\N	\N
31099	Xã Hòn Thơm	xa-hon-thom	9.9279383	104.0188436	Xã	911	\N	\N
31102	Xã Bãi Thơm	xa-bai-thom	10.3879375	103.9956269	Xã	911	\N	\N
31105	Xã Thổ Châu	xa-tho-chau	9.303804	103.4761622	Xã	911	\N	\N
31108	Xã Hòn Tre	xa-hon-tre	9.9657484	104.8448719	Xã	912	\N	\N
31111	Xã Lại Sơn	xa-lai-son	9.8086251	104.6412925	Xã	912	\N	\N
31114	Xã An Sơn	xa-an-son	9.6904228	104.3617343	Xã	912	\N	\N
31115	Xã Nam Du	xa-nam-du	9.6729085	104.3908304	Xã	912	\N	\N
31117	Phường Cái Khế	phuong-cai-khe	10.0485897	105.7879371	Phường	916	\N	\N
31120	Phường An Hòa	phuong-an-hoa	10.0454503	105.7688614	Phường	916	\N	\N
31123	Phường Thới Bình	phuong-thoi-binh	10.0423131	105.7776653	Phường	916	\N	\N
31126	Phường An Nghiệp	phuong-an-nghiep	10.0377485	105.773997	Phường	916	\N	\N
31129	Phường An Cư	phuong-an-cu	10.0367509	105.7806001	Phường	916	\N	\N
31132	Phường An Hội	phuong-an-hoi	10.039889	105.7857359	Phường	916	\N	\N
31135	Phường Tân An	phuong-tan-an	10.0330434	105.7872034	Phường	916	\N	\N
31138	Phường An Lạc	phuong-an-lac	10.0284795	105.7835348	Phường	916	\N	\N
31141	Phường An Phú	phuong-an-phu	10.0314736	105.7776653	Phường	916	\N	\N
31144	Phường Xuân Khánh	phuong-xuan-khanh	10.0290483	105.771796	Phường	916	\N	\N
31147	Phường Hưng Lợi	phuong-hung-loi	10.0146429	105.7615252	Phường	916	\N	\N
31149	Phường An Khánh	phuong-an-khanh	10.0311846	105.7556564	Phường	916	\N	\N
31150	Phường An Bình	phuong-an-binh	10.0103576	105.7380511	Phường	916	\N	\N
31153	Phường Châu Văn Liêm	phuong-chau-van-liem	10.1102235	105.6353878	Phường	917	\N	\N
31154	Phường Thới Hòa	phuong-thoi-hoa	10.1304997	105.6089981	Phường	917	\N	\N
31156	Phường Thới Long	phuong-thoi-long	10.1770898	105.6002024	Phường	917	\N	\N
31157	Phường Long Hưng	phuong-long-hung	10.1564978	105.5767493	Phường	917	\N	\N
31159	Phường Thới An	phuong-thoi-an	10.1427952	105.6353878	Phường	917	\N	\N
31162	Phường Phước Thới	phuong-phuoc-thoi	10.1136618	105.6764461	Phường	917	\N	\N
31165	Phường Trường Lạc	phuong-truong-lac	10.0713905	105.652983	Phường	917	\N	\N
31168	Phường Bình Thủy	phuong-binh-thuy	10.0725558	105.7409852	Phường	918	\N	\N
31169	Phường Trà An	phuong-tra-an	10.0873962	105.7145801	Phường	918	\N	\N
31171	Phường Trà Nóc	phuong-tra-noc	10.0985306	105.7087128	Phường	918	\N	\N
31174	Phường Thới An Đông	phuong-thoi-an-dong	10.0645504	105.6823124	Phường	918	\N	\N
31177	Phường An Thới	phuong-an-thoi	10.0580035	105.7615252	Phường	918	\N	\N
31178	Phường Bùi Hữu Nghĩa	phuong-bui-huu-nghia	10.0799775	105.7556564	Phường	918	\N	\N
31180	Phường Long Hòa	phuong-long-hoa	10.062848	105.7175138	Phường	918	\N	\N
31183	Phường Long Tuyền	phuong-long-tuyen	10.0297512	105.7292491	Phường	918	\N	\N
31186	Phường Lê Bình	phuong-le-binh	9.9989547	105.7497878	Phường	919	\N	\N
31189	Phường Hưng Phú	phuong-hung-phu	10.0291938	105.7967419	Phường	919	\N	\N
31192	Phường Hưng Thạnh	phuong-hung-thanh	9.9949715	105.776198	Phường	919	\N	\N
31195	Phường Ba Láng	phuong-ba-lang	9.9832675	105.7380511	Phường	919	\N	\N
31198	Phường Thường Thạnh	phuong-thuong-thanh	9.9744365	105.7527221	Phường	919	\N	\N
31201	Phường Phú Thứ	phuong-phu-thu	9.9938369	105.7996769	Phường	919	\N	\N
31204	Phường Tân Phú	phuong-tan-phu	9.9818693	105.8231588	Phường	919	\N	\N
31207	Phường Thốt Nốt	phuong-thot-not	10.2725016	105.5302634	Phường	923	\N	\N
31210	Phường Thới Thuận	phuong-thoi-thuan	10.2903986	105.5064087	Phường	923	\N	\N
31211	Xã Vĩnh Bình	xa-vinh-binh	10.2833657	105.4626286	Xã	924	\N	\N
31212	Phường Thuận An	phuong-thuan-an	10.2903986	105.5064087	Phường	923	\N	\N
31213	Phường Tân Lộc	phuong-tan-loc	10.2463128	105.5738179	Phường	923	\N	\N
31216	Phường Trung Nhứt	phuong-trung-nhut	10.2520293	105.5122694	Phường	923	\N	\N
31217	Phường Thạnh Hoà	phuong-thanh-hoa	10.2171527	105.5699247	Phường	923	\N	\N
31219	Phường Trung Kiên	phuong-trung-kien	10.2445942	105.5532993	Phường	923	\N	\N
31222	Xã Trung An	xa-trung-an	10.2035773	105.4890592	Xã	925	\N	\N
31225	Xã Trung Thạnh	xa-trung-thanh	10.1919347	105.5181302	Xã	925	\N	\N
31227	Phường Tân Hưng	phuong-tan-hung	10.1738258	105.5503051	Phường	923	\N	\N
31228	Phường Thuận Hưng	phuong-thuan-hung	10.2108332	105.5767493	Phường	923	\N	\N
31231	Thị trấn Thanh An	thi-tran-thanh-an	10.1465634	105.3306814	Thị trấn	924	\N	\N
31232	Thị trấn Vĩnh Thạnh	thi-tran-vinh-thanh	10.2221965	105.3980224	Thị trấn	924	\N	\N
31234	Xã Thạnh Mỹ	xa-thanh-my	10.2348093	105.4185227	Xã	924	\N	\N
31237	Xã Vĩnh Trinh	xa-vinh-trinh	10.2817959	105.4595306	Xã	924	\N	\N
31240	Xã Thạnh An	xa-thanh-an	10.1957852	105.3248269	Xã	924	\N	\N
31241	Xã Thạnh Tiến	xa-thanh-tien	10.163041	105.389316	Xã	924	\N	\N
31243	Xã Thạnh Thắng	xa-thanh-thang	10.1980176	105.2779983	Xã	924	\N	\N
31244	Xã Thạnh Lợi	xa-thanh-loi	10.2250058	105.2428007	Xã	924	\N	\N
31246	Xã Thạnh Qưới	xa-thanh-quoi	10.2153027	105.3716684	Xã	924	\N	\N
31249	Xã Thạnh Phú	xa-thanh-phu	10.1363815	105.4302383	Xã	925	\N	\N
31252	Xã Thạnh Lộc	xa-thanh-loc	10.1958913	105.4360963	Xã	924	\N	\N
31255	Xã Trung Hưng	xa-trung-hung	10.1661744	105.488828	Xã	925	\N	\N
31258	Thị trấn Thới Lai	thi-tran-thoi-lai	10.0593434	105.5650239	Thị trấn	927	\N	\N
31261	Thị trấn Cờ Đỏ	thi-tran-co-do	10.0986332	105.4243804	Thị trấn	925	\N	\N
31264	Xã Thới Hưng	xa-thoi-hung	10.1215861	105.5122694	Xã	925	\N	\N
31267	Xã Thới Thạnh	xa-thoi-thanh	10.0896473	105.6119301	Xã	927	\N	\N
31268	Xã Tân Thạnh	xa-tan-thanh	10.102197	105.5767493	Xã	927	\N	\N
31270	Xã Xuân Thắng	xa-xuan-thang	10.0821743	105.5415755	Xã	927	\N	\N
31273	Xã Đông Hiệp	xa-dong-hiep	10.0730014	105.5064087	Xã	925	\N	\N
31274	Xã Đông Thắng	xa-dong-thang	10.0860968	105.4595306	Xã	925	\N	\N
31276	Xã Thới Đông	xa-thoi-dong	10.0563037	105.4009508	Xã	925	\N	\N
31277	Xã Thới Xuân	xa-thoi-xuan	10.077467	105.4126652	Xã	925	\N	\N
31279	Xã Đông Bình	xa-dong-binh	10.0209639	105.4595306	Xã	927	\N	\N
31282	Xã Đông Thuận	xa-dong-thuan	10.0325542	105.4812054	Xã	927	\N	\N
31285	Xã Thới Tân	xa-thoi-tan	10.0501737	105.5298525	Xã	927	\N	\N
31286	Xã Trường Thắng	xa-truong-thang	10.0321386	105.5450119	Xã	927	\N	\N
31288	Xã Định Môn	xa-dinh-mon	10.05195	105.6060661	Xã	927	\N	\N
31291	Xã Trường Thành	xa-truong-thanh	10.0256738	105.5884754	Xã	927	\N	\N
31294	Xã Trường Xuân	xa-truong-xuan	10.0079402	105.5328733	Xã	927	\N	\N
31297	Xã Trường Xuân A	xa-truong-xuan-a	9.9536704	105.5064087	Xã	927	\N	\N
31298	Xã Trường Xuân B	xa-truong-xuan-b	9.9747993	105.5181302	Xã	927	\N	\N
31299	Thị trấn Phong Điền	thi-tran-phong-dien	10.0108953	105.6705801	Thị trấn	926	\N	\N
31300	Xã Nhơn Ái	xa-nhon-ai	9.988963	105.6652641	Xã	926	\N	\N
31303	Xã Giai Xuân	xa-giai-xuan	10.0321944	105.685836	Xã	926	\N	\N
31306	Xã Tân Thới	xa-tan-thoi	14.058324	108.277199	Xã	926	\N	\N
31309	Xã Trường Long	xa-truong-long	9.9868816	105.6060661	Xã	926	\N	\N
31312	Xã Mỹ Khánh	xa-my-khanh	9.9983647	105.7057792	Xã	926	\N	\N
31315	Xã Nhơn Nghĩa	xa-nhon-nghia	9.9689882	105.6969788	Xã	926	\N	\N
31318	Phường I	phuong-i	9.7956954	105.4683193	Phường	930	\N	\N
31321	Phường III	phuong-iii	9.7603975	105.471249	Phường	930	\N	\N
31324	Phường IV	phuong-iv	9.7956954	105.4683193	Phường	930	\N	\N
31327	Phường V	phuong-v	9.7814906	105.4829681	Phường	930	\N	\N
31330	Phường VII	phuong-vii	9.7540429	105.4331673	Phường	930	\N	\N
31333	Xã Vị Tân	xa-vi-tan	9.7756245	105.4366187	Xã	930	\N	\N
31336	Xã Hoả Lựu	xa-hoa-luu	9.7297837	105.4399642	Xã	930	\N	\N
31338	Xã Tân Tiến	xa-tan-tien	9.7432237	105.3991413	Xã	930	\N	\N
31339	Xã Hoả Tiến	xa-hoa-tien	9.7228528	105.3961295	Xã	930	\N	\N
31340	Phường Ngã Bảy	phuong-nga-bay	9.8195722	105.8231588	Phường	931	\N	\N
31341	Phường Lái Hiếu	phuong-lai-hieu	9.80988	105.7996769	Phường	931	\N	\N
31342	Thị trấn Một Ngàn	thi-tran-mot-ngan	9.9372776	105.6236585	Thị trấn	932	\N	\N
31343	Phường Hiệp Thành	phuong-hiep-thanh	9.7973984	105.8349009	Phường	931	\N	\N
31344	Xã Hiệp Lợi	xa-hiep-loi	9.8428726	105.7879371	Xã	931	\N	\N
31345	Xã Tân Hoà	xa-tan-hoa	9.9161699	105.6119301	Xã	932	\N	\N
31346	Thị trấn Bảy Ngàn	thi-tran-bay-ngan	9.8847904	105.5884754	Thị trấn	932	\N	\N
31348	Xã Trường Long Tây	xa-truong-long-tay	9.924084	105.5591615	Xã	932	\N	\N
31351	Xã Trường Long A	xa-truong-long-a	9.9606211	105.5884754	Xã	932	\N	\N
31357	Xã Nhơn Nghĩa A	xa-nhon-nghia-a	9.9469945	105.6471178	Xã	932	\N	\N
31359	Thị trấn Rạch Gòi	thi-tran-rach-goi	9.9139426	105.6588485	Thị trấn	932	\N	\N
31360	Xã Thạnh Xuân	xa-thanh-xuan	9.9339243	105.6940454	Xã	932	\N	\N
31362	Thị trấn Cái Tắc	thi-tran-cai-tac	9.9237001	105.7380511	Thị trấn	932	\N	\N
31363	Xã Tân Phú Thạnh	xa-tan-phu-thanh	9.9544631	105.7175138	Xã	932	\N	\N
31366	Thị Trấn Ngã Sáu	thi-tran-nga-sau	9.9180405	105.7996769	Thị trấn	933	\N	\N
31369	Xã Đông Thạnh	xa-dong-thanh	9.9419453	105.7527221	Xã	933	\N	\N
31372	Xã Phú An	xa-phu-an	9.9588489	105.7883781	Xã	933	\N	\N
31375	Xã Đông Phú	xa-dong-phu	9.9596443	105.8349009	Xã	933	\N	\N
31378	Xã Phú Hữu	xa-phu-huu	9.9106547	105.8407722	Xã	933	\N	\N
31379	Xã Phú Tân	xa-phu-tan	9.6675417	105.9516978	Xã	933	\N	\N
31381	Thị trấn Mái Dầm	thi-tran-mai-dam	9.9362926	105.8701316	Thị trấn	933	\N	\N
31384	Xã Đông Phước	xa-dong-phuoc	9.8912682	105.7938069	Xã	933	\N	\N
31387	Xã Đông Phước A	xa-dong-phuoc-a	9.9191669	105.776198	Xã	933	\N	\N
31393	Thị trấn Kinh Cùng	thi-tran-kinh-cung	9.8096704	105.6324554	Thị trấn	934	\N	\N
31396	Thị trấn Cây Dương	thi-tran-cay-duong	9.7807875	105.7292491	Thị trấn	934	\N	\N
31399	Xã Tân Bình	xa-tan-binh	9.8738613	105.6492627	Xã	934	\N	\N
31402	Xã Bình Thành	xa-binh-thanh	9.8592615	105.6705801	Xã	934	\N	\N
31405	Xã Thạnh Hòa	xa-thanh-hoa	9.8957495	105.6999122	Xã	934	\N	\N
31408	Xã Long Thạnh	xa-long-thanh	9.8775602	105.7409852	Xã	934	\N	\N
31411	Xã Đại Thành	xa-dai-thanh	9.8411934	105.8231588	Xã	931	\N	\N
31414	Xã Tân Thành	xa-tan-thanh	9.8622585	105.8349009	Xã	931	\N	\N
31417	Xã Phụng Hiệp	xa-phung-hiep	9.8223627	105.7644596	Xã	934	\N	\N
31420	Xã Hòa Mỹ	xa-hoa-my	9.8091981	105.6999122	Xã	934	\N	\N
31423	Xã Hòa An	xa-hoa-an	9.7692567	105.629523	Xã	934	\N	\N
31426	Xã Phương Bình	xa-phuong-binh	9.741582	105.6474468	Xã	934	\N	\N
31429	Xã Hiệp Hưng	xa-hiep-hung	9.7580687	105.7527221	Xã	934	\N	\N
31432	Xã Tân Phước Hưng	xa-tan-phuoc-hung	9.7399288	105.7938069	Xã	934	\N	\N
31433	Thị trấn Búng Tàu	thi-tran-bung-tau	9.7117805	105.7778545	Thị trấn	934	\N	\N
31435	Xã Phương Phú	xa-phuong-phu	9.6841192	105.7175138	Xã	934	\N	\N
31438	Xã Tân Long	xa-tan-long	9.8553641	105.7527221	Xã	934	\N	\N
31441	Thị trấn Nàng Mau	thi-tran-nang-mau	9.7494365	105.5327831	Thị trấn	935	\N	\N
31444	Xã Vị Trung	xa-vi-trung	9.7798581	105.5181302	Xã	935	\N	\N
31447	Xã Vị Thuỷ	xa-vi-thuy	9.7479555	105.5064087	Xã	935	\N	\N
31450	Xã Vị Thắng	xa-vi-thang	9.7349708	105.5532993	Xã	935	\N	\N
31453	Xã Vĩnh Thuận Tây	xa-vinh-thuan-tay	9.7166021	105.4829681	Xã	935	\N	\N
31456	Xã Vĩnh Trung	xa-vinh-trung	9.8209465	105.5650239	Xã	935	\N	\N
31459	Xã Vĩnh Tường	xa-vinh-tuong	9.8186367	105.5927629	Xã	935	\N	\N
31462	Xã Vị Đông	xa-vi-dong	9.8236856	105.5064087	Xã	935	\N	\N
31465	Xã Vị Thanh	xa-vi-thanh	9.8545154	105.5415755	Xã	935	\N	\N
31468	Xã Vị Bình	xa-vi-binh	9.8756192	105.5532993	Xã	935	\N	\N
31471	Phường Thuận An	phuong-thuan-an	9.6780836	105.5726413	Phường	937	\N	\N
31472	Phường Trà Lồng	phuong-tra-long	14.058324	108.277199	Phường	937	\N	\N
31473	Phường Bình Thạnh	phuong-binh-thanh	9.683806	105.569385	Phường	937	\N	\N
31474	Xã Long Bình	xa-long-binh	9.669597	105.5650239	Xã	937	\N	\N
31475	Phường Vĩnh Tường	phuong-vinh-tuong	14.058324	108.277199	Phường	937	\N	\N
31477	Xã Long Trị	xa-long-tri	9.669597	105.5650239	Xã	937	\N	\N
31478	Xã Long Trị A	xa-long-tri-a	9.6817826	105.570234	Xã	937	\N	\N
31480	Xã Long Phú	xa-long-phu	9.669597	105.5650239	Xã	937	\N	\N
31481	Xã Tân Phú	xa-tan-phu	9.6870446	105.5689294	Xã	937	\N	\N
31483	Xã Thuận Hưng	xa-thuan-hung	9.6428695	105.5591615	Xã	936	\N	\N
31484	Xã Thuận Hòa	xa-thuan-hoa	9.5978362	105.5489175	Xã	936	\N	\N
31486	Xã Vĩnh Thuận Đông	xa-vinh-thuan-dong	9.6933655	105.5181302	Xã	936	\N	\N
31489	Xã Vĩnh Viễn	xa-vinh-vien	9.6729408	105.4152898	Xã	936	\N	\N
31490	Xã Vĩnh Viễn A	xa-vinh-vien-a	9.6719883	105.3950939	Xã	936	\N	\N
31492	Xã Lương Tâm	xa-luong-tam	9.6091323	105.4347116	Xã	936	\N	\N
31493	Xã Lương Nghĩa	xa-luong-nghia	9.6003975	105.4126248	Xã	936	\N	\N
31495	Xã Xà Phiên	xa-xa-phien	9.623426	105.5122694	Xã	936	\N	\N
31498	Phường 5	phuong-5	9.6229957	105.9837176	Phường	941	\N	\N
31501	Phường 7	phuong-7	9.62628	105.9583852	Phường	941	\N	\N
31504	Phường 8	phuong-8	9.6165731	106.0107648	Phường	941	\N	\N
31507	Phường 6	phuong-6	9.6104596	105.9710768	Phường	941	\N	\N
31510	Phường 2	phuong-2	9.5950511	105.9581887	Phường	941	\N	\N
31513	Phường 1	phuong-1	9.6053785	105.9736599	Phường	941	\N	\N
31516	Phường 4	phuong-4	9.6020906	105.9906279	Phường	941	\N	\N
31519	Phường 3	phuong-3	9.5862875	105.9757813	Phường	941	\N	\N
31522	Phường 9	phuong-9	9.5861126	105.9940424	Phường	941	\N	\N
31525	Phường 10	phuong-10	9.5706052	105.954001	Phường	941	\N	\N
31528	Thị trấn Kế Sách	thi-tran-ke-sach	9.7690706	105.9758633	Thị trấn	943	\N	\N
31531	Thị trấn An Lạc Thôn	thi-tran-an-lac-thon	9.8901831	105.9288641	Thị trấn	943	\N	\N
31534	Xã Xuân Hòa	xa-xuan-hoa	9.9210485	105.8885484	Xã	943	\N	\N
31537	Xã Phong Nẫm	xa-phong-nam	9.8970152	105.9552997	Xã	943	\N	\N
31540	Xã An Lạc Tây	xa-an-lac-tay	9.844109	105.9876149	Xã	943	\N	\N
31543	Xã Trinh Phú	xa-trinh-phu	9.8469393	105.9288641	Xã	943	\N	\N
31546	Xã Ba Trinh	xa-ba-trinh	9.821893	105.8877494	Xã	943	\N	\N
31549	Xã Thới An Hội	xa-thoi-an-hoi	9.7957824	105.981739	Xã	943	\N	\N
31552	Xã Nhơn Mỹ	xa-nhon-my	9.7935218	106.0287512	Xã	943	\N	\N
31555	Xã Kế Thành	xa-ke-thanh	9.7707563	105.9406128	Xã	943	\N	\N
31558	Xã Kế An	xa-ke-an	9.7718779	105.9171161	Xã	943	\N	\N
31561	Xã Đại Hải	xa-dai-hai	9.7786778	105.8877494	Xã	943	\N	\N
31564	Xã An Mỹ	xa-an-my	9.7298916	106.0052437	Xã	943	\N	\N
31567	Thị trấn Huỳnh Hữu Nghĩa	thi-tran-huynh-huu-nghia	9.6371195	105.7996769	Thị trấn	944	\N	\N
31569	Thị trấn Châu Thành	thi-tran-chau-thanh	9.7076676	105.9053689	Thị trấn	942	\N	\N
31570	Xã Hồ Đắc Kiện	xa-ho-dac-kien	9.7150088	105.8642593	Xã	942	\N	\N
31573	Xã Phú Tâm	xa-phu-tam	9.7162278	105.9523622	Xã	942	\N	\N
31576	Xã Thuận Hòa	xa-thuan-hoa	9.6753018	105.9053689	Xã	942	\N	\N
31579	Xã Long Hưng	xa-long-hung	9.6967403	105.7938069	Xã	944	\N	\N
31582	Xã Phú Tân	xa-phu-tan	9.67308	105.9523622	Xã	942	\N	\N
31585	Xã Thiện Mỹ	xa-thien-my	9.6775166	105.8583873	Xã	942	\N	\N
31588	Xã Hưng Phú	xa-hung-phu	9.6568607	105.7233814	Xã	944	\N	\N
31591	Xã Mỹ Hương	xa-my-huong	9.6349229	105.8466437	Xã	944	\N	\N
31594	Xã An Hiệp	xa-an-hiep	9.646956	105.9347384	Xã	942	\N	\N
31597	Xã Mỹ Tú	xa-my-tu	9.60586	105.776198	Xã	944	\N	\N
31600	Xã An Ninh	xa-an-ninh	9.6106087	105.9053689	Xã	942	\N	\N
31603	Xã Mỹ Phước	xa-my-phuoc	9.6034617	105.7116464	Xã	944	\N	\N
31606	Xã Thuận Hưng	xa-thuan-hung	9.5668892	105.8497189	Xã	944	\N	\N
31609	Xã Mỹ Thuận	xa-my-thuan	9.5662234	105.8172881	Xã	944	\N	\N
31612	Xã Phú Mỹ	xa-phu-my	9.5750959	105.9100914	Xã	944	\N	\N
31615	Thị trấn Cù Lao Dung	thi-tran-cu-lao-dung	9.6717816	106.1492721	Thị trấn	945	\N	\N
31618	Xã An Thạnh 1	xa-an-thanh-1	9.7304947	106.1051705	Xã	945	\N	\N
31621	Xã An Thạnh Tây	xa-an-thanh-tay	9.6862394	106.1286901	Xã	945	\N	\N
31624	Xã An Thạnh Đông	xa-an-thanh-dong	9.6505306	106.199266	Xã	945	\N	\N
31627	Xã Đại Ân 1	xa-dai-an-1	9.608586	106.1757379	Xã	945	\N	\N
31630	Xã An Thạnh 2	xa-an-thanh-2	9.607462	106.199266	Xã	945	\N	\N
31633	Xã An Thạnh 3	xa-an-thanh-3	9.5667077	106.2639825	Xã	945	\N	\N
31636	Xã An Thạnh Nam	xa-an-thanh-nam	9.5248153	106.2404468	Xã	945	\N	\N
31639	Thị trấn Long Phú	thi-tran-long-phu	9.6215974	106.1286901	Thị trấn	946	\N	\N
31642	Xã Song Phụng	xa-song-phung	9.7548959	106.0463837	Xã	946	\N	\N
31645	Thị trấn Đại Ngãi	thi-tran-dai-ngai	9.7327536	106.0581397	Thị trấn	946	\N	\N
31648	Xã Hậu Thạnh	xa-hau-thanh	9.7230926	106.0346285	Xã	946	\N	\N
31651	Xã Long Đức	xa-long-duc	9.6884921	106.0816536	Xã	946	\N	\N
31654	Xã Trường Khánh	xa-truong-khanh	9.6810748	106.0111203	Xã	946	\N	\N
31657	Xã Phú Hữu	xa-phu-huu	9.6896158	106.0581397	Xã	946	\N	\N
31660	Xã Tân Hưng	xa-tan-hung	9.6238356	106.0816536	Xã	946	\N	\N
31663	Xã Châu Khánh	xa-chau-khanh	9.6470598	106.0463837	Xã	946	\N	\N
31666	Xã Tân Thạnh	xa-tan-thanh	9.5983024	106.0522616	Xã	946	\N	\N
31669	Xã Long Phú	xa-long-phu	9.5734287	106.1228099	Xã	946	\N	\N
31672	Xã Đại Ân  2	xa-dai-an-2	9.5558928	106.1522126	Xã	951	\N	\N
31673	Thị trấn Trần Đề	thi-tran-tran-de	9.521394	106.199266	Thị trấn	951	\N	\N
31675	Xã Liêu Tú	xa-lieu-tu	9.4822703	106.1169299	Xã	951	\N	\N
31678	Xã Lịch Hội Thượng	xa-lich-hoi-thuong	9.4432738	106.1463317	Xã	951	\N	\N
31679	Thị trấn Lịch Hội Thượng	thi-tran-lich-hoi-thuong	9.4432738	106.1463317	Thị trấn	951	\N	\N
31681	Xã Trung Bình	xa-trung-binh	9.484046	106.1933837	Xã	951	\N	\N
31684	Thị trấn Mỹ Xuyên	thi-tran-my-xuyen	9.5528908	105.9876149	Thị trấn	947	\N	\N
31687	Xã Tài Văn	xa-tai-van	9.5563419	106.0287512	Xã	951	\N	\N
31690	Xã Đại Tâm	xa-dai-tam	9.54542	105.9171161	Xã	947	\N	\N
31693	Xã Tham Đôn	xa-tham-don	9.517683	105.9347384	Xã	947	\N	\N
31696	Xã Viên An	xa-vien-an	9.5172947	106.0581397	Xã	951	\N	\N
31699	Xã Thạnh Thới An	xa-thanh-thoi-an	9.4935651	106.0060112	Xã	951	\N	\N
31702	Xã Thạnh Thới Thuận	xa-thanh-thoi-thuan	9.4411162	105.992634	Xã	951	\N	\N
31705	Xã Viên Bình	xa-vien-binh	9.4839248	106.0816536	Xã	951	\N	\N
31708	Xã Thạnh Phú	xa-thanh-phu	9.5010332	105.8494878	Xã	947	\N	\N
31711	Xã Ngọc Đông	xa-ngoc-dong	9.4689872	105.9406128	Xã	947	\N	\N
31714	Xã Thạnh Quới	xa-thanh-quoi	9.4573061	105.7986909	Xã	947	\N	\N
31717	Xã Hòa Tú 1	xa-hoa-tu-1	9.4496457	105.8936224	Xã	947	\N	\N
31720	Xã Gia Hòa 1	xa-gia-hoa-1	9.4297548	105.8583873	Xã	947	\N	\N
31723	Xã Ngọc Tố	xa-ngoc-to	9.42597	105.9406128	Xã	947	\N	\N
31726	Xã Gia Hòa 2	xa-gia-hoa-2	9.399641	105.8114175	Xã	947	\N	\N
31729	Xã Hòa Tú II	xa-hoa-tu-ii	9.3737219	105.890007	Xã	947	\N	\N
31732	Phường 1	phuong-1	9.5610689	105.6064976	Phường	948	\N	\N
31735	Phường 2	phuong-2	9.5953835	105.652983	Phường	948	\N	\N
31738	Xã Vĩnh Quới	xa-vinh-quoi	9.5724495	105.5650239	Xã	948	\N	\N
31741	Xã Tân Long	xa-tan-long	9.5250309	105.6588485	Xã	948	\N	\N
31744	Xã Long Bình	xa-long-binh	9.5368825	105.6353878	Xã	948	\N	\N
31747	Phường 3	phuong-3	9.5123402	105.5826123	Phường	948	\N	\N
31750	Xã Mỹ Bình	xa-my-binh	9.4845999	105.6002024	Xã	948	\N	\N
31753	Xã Mỹ Quới	xa-my-quoi	9.453873	105.5650239	Xã	948	\N	\N
31756	Thị trấn Phú Lộc	thi-tran-phu-loc	9.4243648	105.7409852	Thị trấn	949	\N	\N
31757	Thị trấn Hưng Lợi	thi-tran-hung-loi	9.4157373	105.6940454	Thị trấn	949	\N	\N
31759	Xã Lâm Tân	xa-lam-tan	9.5252993	105.7703287	Xã	949	\N	\N
31762	Xã Thạnh Tân	xa-thanh-tan	9.5121067	105.7057792	Xã	949	\N	\N
31765	Xã Lâm Kiết	xa-lam-kiet	9.5174757	105.8231588	Xã	949	\N	\N
31768	Xã Tuân Tức	xa-tuan-tuc	9.488951	105.7409852	Xã	949	\N	\N
31771	Xã Vĩnh Thành	xa-vinh-thanh	9.4660449	105.652983	Xã	949	\N	\N
31774	Xã Thạnh Trị	xa-thanh-tri	9.4639086	105.6999122	Xã	949	\N	\N
31777	Xã Vĩnh Lợi	xa-vinh-loi	9.4409843	105.6119301	Xã	949	\N	\N
31780	Xã Châu Hưng	xa-chau-hung	9.4229786	105.652983	Xã	949	\N	\N
31783	Phường 1	phuong-1	9.330204	105.9788011	Phường	950	\N	\N
31786	Xã Hòa Đông	xa-hoa-dong	9.4250794	106.0757749	Xã	950	\N	\N
31789	Phường Khánh Hòa	phuong-khanh-hoa	9.4068611	106.0052437	Phường	950	\N	\N
31792	Xã Vĩnh Hiệp	xa-vinh-hiep	9.3875385	105.9582372	Xã	950	\N	\N
31795	Xã Vĩnh Hải	xa-vinh-hai	9.3788328	106.1463317	Xã	950	\N	\N
31798	Xã Lạc Hòa	xa-lac-hoa	9.3821101	106.0757749	Xã	950	\N	\N
31801	Phường 2	phuong-2	9.3413311	106.0287512	Phường	950	\N	\N
31804	Phường Vĩnh Phước	phuong-vinh-phuoc	9.324166	105.9347384	Phường	950	\N	\N
31807	Xã Vĩnh Tân	xa-vinh-tan	9.3263079	105.8877494	Xã	950	\N	\N
31810	Xã Lai Hòa	xa-lai-hoa	9.3069609	105.8407722	Xã	950	\N	\N
31813	Phường 2	phuong-2	9.2749201	105.7175138	Phường	954	\N	\N
31816	Phường 3	phuong-3	9.2861684	105.721181	Phường	954	\N	\N
31819	Phường 5	phuong-5	9.2738687	105.7409852	Phường	954	\N	\N
31822	Phường 7	phuong-7	9.297723	105.7181608	Phường	954	\N	\N
31825	Phường 1	phuong-1	9.2602103	105.7517711	Phường	954	\N	\N
31828	Phường 8	phuong-8	9.2974563	105.6940454	Phường	954	\N	\N
31831	Phường Nhà Mát	phuong-nha-mat	9.2314464	105.7292491	Phường	954	\N	\N
31834	Xã Vĩnh Trạch	xa-vinh-trach	9.3090846	105.7938069	Xã	954	\N	\N
31837	Xã Vĩnh Trạch Đông	xa-vinh-trach-dong	9.2661286	105.7938069	Xã	954	\N	\N
31840	Xã Hiệp Thành	xa-hiep-thanh	9.2303988	105.7527221	Xã	954	\N	\N
31843	Thị trấn Ngan Dừa	thi-tran-ngan-dua	9.5713437	105.4495395	Thị trấn	956	\N	\N
31846	Xã Ninh Quới	xa-ninh-quoi	9.557605	105.5357139	Xã	956	\N	\N
31849	Xã Ninh Quới A	xa-ninh-quoi-a	9.5155305	105.5122694	Xã	956	\N	\N
31852	Xã Ninh Hòa	xa-ninh-hoa	9.559736	105.488828	Xã	956	\N	\N
31855	Xã Lộc Ninh	xa-loc-ninh	9.5197602	105.4185227	Xã	956	\N	\N
31858	Xã Vĩnh Lộc	xa-vinh-loc	9.5830744	105.3306814	Xã	956	\N	\N
31861	Xã Vĩnh Lộc A	xa-vinh-loc-a	9.5830744	105.3306814	Xã	956	\N	\N
31863	Xã Ninh Thạnh Lợi A	xa-ninh-thanh-loi-a	9.4376772	105.3248269	Xã	956	\N	\N
31864	Xã Ninh Thạnh Lợi	xa-ninh-thanh-loi	9.4376772	105.3248269	Xã	956	\N	\N
31867	Thị trấn Phước Long	thi-tran-phuoc-long	9.4529673	105.4653897	Thị trấn	957	\N	\N
31870	Xã Vĩnh Phú Đông	xa-vinh-phu-dong	9.4293187	105.5122694	Xã	957	\N	\N
31873	Xã Vĩnh Phú Tây	xa-vinh-phu-tay	9.3678476	105.4419546	Xã	957	\N	\N
31876	Xã Phước Long	xa-phuoc-long	9.4130056	105.3950939	Xã	957	\N	\N
31879	Xã Hưng Phú	xa-hung-phu	9.4113246	105.5532993	Xã	957	\N	\N
31882	Xã Vĩnh Thanh	xa-vinh-thanh	9.3657651	105.488828	Xã	957	\N	\N
31885	Xã Phong Thạnh Tây A	xa-phong-thanh-tay-a	9.3376512	105.3692249	Xã	957	\N	\N
31888	Xã Phong Thạnh Tây B	xa-phong-thanh-tay-b	9.332002	105.2779983	Xã	957	\N	\N
31891	Thị trấn Hòa Bình	thi-tran-hoa-binh	9.2734758	105.629523	Thị trấn	961	\N	\N
31894	Xã Vĩnh Hưng	xa-vinh-hung	9.3871631	105.6119301	Xã	958	\N	\N
31897	Xã Vĩnh Hưng A	xa-vinh-hung-a	9.3995064	105.5767493	Xã	958	\N	\N
31900	Thị trấn Châu Hưng	thi-tran-chau-hung	9.3388612	105.7292491	Thị trấn	958	\N	\N
31903	Xã Châu Hưng A	xa-chau-hung-a	9.3767568	105.7233814	Xã	958	\N	\N
31906	Xã Hưng Thành	xa-hung-thanh	9.3714248	105.8407722	Xã	958	\N	\N
31909	Xã Hưng Hội	xa-hung-hoi	9.3372716	105.7644596	Xã	958	\N	\N
31912	Xã Châu Thới	xa-chau-thoi	9.358423	105.652983	Xã	958	\N	\N
31915	Xã Minh Diệu	xa-minh-dieu	9.3390177	105.6060661	Xã	961	\N	\N
31918	Xã Vĩnh Bình	xa-vinh-binh	9.3411125	105.5591615	Xã	961	\N	\N
31921	Xã Long Thạnh	xa-long-thanh	9.3092534	105.6705801	Xã	958	\N	\N
31924	Xã Vĩnh Mỹ B	xa-vinh-my-b	9.2765995	105.5591615	Xã	961	\N	\N
31927	Xã Vĩnh Hậu	xa-vinh-hau	9.2131068	105.6588485	Xã	961	\N	\N
31930	Xã Vĩnh Hậu A	xa-vinh-hau-a	9.2330146	105.6940454	Xã	961	\N	\N
31933	Xã Vĩnh Mỹ A	xa-vinh-my-a	9.2325855	105.5826123	Xã	961	\N	\N
31936	Xã Vĩnh Thịnh	xa-vinh-thinh	9.1886028	105.6060661	Xã	961	\N	\N
31942	Phường 1	phuong-1	14.058324	108.277199	Phường	959	\N	\N
31945	Phường Hộ Phòng	phuong-ho-phong	9.2257851	105.4118676	Phường	959	\N	\N
31948	Xã Phong Thạnh Đông	xa-phong-thanh-dong	9.2971216	105.5002177	Xã	959	\N	\N
31951	Phường Láng Tròn	phuong-lang-tron	9.2558127	105.5172505	Phường	959	\N	\N
31954	Xã Phong Tân	xa-phong-tan	14.058324	108.277199	Xã	959	\N	\N
31957	Xã Tân Phong	xa-tan-phong	9.2213584	105.348246	Xã	959	\N	\N
31960	Xã Phong Thạnh	xa-phong-thanh	9.3053443	105.3950939	Xã	959	\N	\N
31963	Xã Phong Thạnh A	xa-phong-thanh-a	14.058324	108.277199	Xã	959	\N	\N
31966	Xã Phong Thạnh Tây	xa-phong-thanh-tay	14.058324	108.277199	Xã	959	\N	\N
31969	Xã Tân Thạnh	xa-tan-thanh	14.058324	108.277199	Xã	959	\N	\N
31972	Thị trấn Gành Hào	thi-tran-ganh-hao	9.0349627	105.4282431	Thị trấn	960	\N	\N
31975	Xã Long Điền Đông	xa-long-dien-dong	9.1487573	105.5357139	Xã	960	\N	\N
31978	Xã Long Điền Đông A	xa-long-dien-dong-a	9.2131706	105.5357139	Xã	960	\N	\N
31981	Xã Long Điền	xa-long-dien	9.1676975	105.4481035	Xã	960	\N	\N
31984	Xã Long Điền Tây	xa-long-dien-tay	9.0894582	105.4185227	Xã	960	\N	\N
31985	Xã Điền Hải	xa-dien-hai	9.1078787	105.488828	Xã	960	\N	\N
31987	Xã An Trạch	xa-an-trach	9.157899	105.3248269	Xã	960	\N	\N
31988	Xã An Trạch A	xa-an-trach-a	9.1763456	105.3950939	Xã	960	\N	\N
31990	Xã An Phúc	xa-an-phuc	9.091471	105.3716684	Xã	960	\N	\N
31993	Xã Định Thành	xa-dinh-thanh	9.1323056	105.2955575	Xã	960	\N	\N
31996	Xã Định Thành A	xa-dinh-thanh-a	9.1225686	105.2721456	Xã	960	\N	\N
31999	Phường 9	phuong-9	9.202214	105.1557	Phường	964	\N	\N
32002	Phường 4	phuong-4	9.1850673	105.1495883	Phường	964	\N	\N
32005	Phường 1	phuong-1	9.1902299	105.1346669	Phường	964	\N	\N
32008	Phường 5	phuong-5	9.1815788	105.1571738	Phường	964	\N	\N
32011	Phường 2	phuong-2	9.1796814	105.1456318	Phường	964	\N	\N
32014	Phường 8	phuong-8	9.1743494	105.1288193	Phường	964	\N	\N
32017	Phường 6	phuong-6	9.1736663	105.1886925	Phường	964	\N	\N
32020	Phường 7	phuong-7	9.1596167	105.1584977	Phường	964	\N	\N
32022	Phường Tân Xuyên	phuong-tan-xuyen	9.1814779	105.1428089	Phường	964	\N	\N
32023	Xã An Xuyên	xa-an-xuyen	9.2315379	105.1804319	Xã	964	\N	\N
32025	Phường Tân Thành	phuong-tan-thanh	9.1895417	105.2136302	Phường	964	\N	\N
32026	Xã Tân Thành	xa-tan-thanh	9.186383	105.2100145	Xã	964	\N	\N
32029	Xã Tắc Vân	xa-tac-van	9.1662734	105.2641108	Xã	964	\N	\N
32032	Xã Lý Văn Lâm	xa-ly-van-lam	9.1506633	105.136715	Xã	964	\N	\N
32035	Xã Định Bình	xa-dinh-binh	9.1636204	105.2302311	Xã	964	\N	\N
32038	Xã Hòa Thành	xa-hoa-thanh	9.1368947	105.1843119	Xã	964	\N	\N
32041	Xã Hòa Tân	xa-hoa-tan	9.1067837	105.2161456	Xã	964	\N	\N
32044	Thị trấn U Minh	thi-tran-u-minh	9.4047377	104.9680914	Thị trấn	966	\N	\N
32047	Xã Khánh Hòa	xa-khanh-hoa	9.4344893	104.9038451	Xã	966	\N	\N
32048	Xã Khánh Thuận	xa-khanh-thuan	9.4643606	104.9622498	Xã	966	\N	\N
32050	Xã Khánh Tiến	xa-khanh-tien	9.4529479	104.8512993	Xã	966	\N	\N
32053	Xã Nguyễn Phích	xa-nguyen-phich	9.3829876	105.002131	Xã	966	\N	\N
32056	Xã Khánh Lâm	xa-khanh-lam	9.326591	104.9038451	Xã	966	\N	\N
32062	Xã Khánh Hội	xa-khanh-hoi	9.3079974	104.8337879	Xã	966	\N	\N
32065	Thị trấn Thới Bình	thi-tran-thoi-binh	9.3565533	105.0849687	Thị trấn	967	\N	\N
32068	Xã Biển Bạch	xa-bien-bach	9.5158215	105.0206757	Xã	967	\N	\N
32069	Xã Tân Bằng	xa-tan-bang	9.4588722	105.0455678	Xã	967	\N	\N
32071	Xã Trí Phải	xa-tri-phai	9.4017623	105.1609838	Xã	967	\N	\N
32072	Xã Trí Lực	xa-tri-luc	9.445927	105.1375908	Xã	967	\N	\N
32074	Xã Biển Bạch Đông	xa-bien-bach-dong	9.3944306	105.0760921	Xã	967	\N	\N
32077	Xã Thới Bình	xa-thoi-binh	9.3268314	105.1492869	Xã	967	\N	\N
32080	Xã Tân Phú	xa-tan-phu	9.3771357	105.2311827	Xã	967	\N	\N
32083	Xã Tân Lộc Bắc	xa-tan-loc-bac	9.3135254	105.2077798	Xã	967	\N	\N
32086	Xã Tân Lộc	xa-tan-loc	9.2760997	105.2019295	Xã	967	\N	\N
32089	Xã Tân Lộc Đông	xa-tan-loc-dong	9.2899619	105.2545888	Xã	967	\N	\N
32092	Xã Hồ Thị Kỷ	xa-ho-thi-ky	9.2529678	105.1142011	Xã	967	\N	\N
32095	Thị trấn Trần Văn Thời	thi-tran-tran-van-thoi	9.0924364	104.9680914	Thị trấn	968	\N	\N
32098	Thị trấn Sông Đốc	thi-tran-song-doc	9.0496377	104.8337879	Thị trấn	968	\N	\N
32101	Xã Khánh Bình Tây Bắc	xa-khanh-binh-tay-bac	9.2413631	104.8804893	Xã	968	\N	\N
32104	Xã Khánh Bình Tây	xa-khanh-binh-tay	9.1777356	104.8571368	Xã	968	\N	\N
32107	Xã Trần Hợi	xa-tran-hoi	9.1963263	104.9272044	Xã	968	\N	\N
32108	Xã Khánh Lộc	xa-khanh-loc	9.0938968	104.9330448	Xã	968	\N	\N
32110	Xã Khánh Bình	xa-khanh-binh	9.1698801	105.044052	Xã	968	\N	\N
32113	Xã Khánh Hưng	xa-khanh-hung	9.1122095	104.8804893	Xã	968	\N	\N
32116	Xã Khánh Bình Đông	xa-khanh-binh-dong	9.1503424	104.9973028	Xã	968	\N	\N
32119	Xã Khánh Hải	xa-khanh-hai	9.114147	104.8337879	Xã	968	\N	\N
32122	Xã Lợi An	xa-loi-an	9.1520197	105.0849687	Xã	968	\N	\N
32124	Xã Phong Điền	xa-phong-dien	9.0057047	104.8571368	Xã	968	\N	\N
32125	Xã Phong Lạc	xa-phong-lac	9.0289462	104.9447261	Xã	968	\N	\N
32128	Thị trấn Cái Nước	thi-tran-cai-nuoc	8.9345957	105.0206757	Thị trấn	969	\N	\N
32130	Xã Thạnh Phú	xa-thanh-phu	9.1249006	105.0908147	Xã	969	\N	\N
32131	Xã Lương Thế Trân	xa-luong-the-tran	9.1070547	105.1317431	Xã	969	\N	\N
32134	Xã Phú Hưng	xa-phu-hung	9.0782717	105.0498966	Xã	969	\N	\N
32137	Xã Tân Hưng	xa-tan-hung	9.0389742	105.0908147	Xã	969	\N	\N
32140	Xã Hưng Mỹ	xa-hung-my	9.0367762	105.0148322	Xã	969	\N	\N
32141	Xã Hoà Mỹ	xa-hoa-my	8.9999295	104.9973028	Xã	969	\N	\N
32142	Xã Đông Hưng	xa-dong-hung	8.9745925	105.0908147	Xã	969	\N	\N
32143	Xã Đông Thới	xa-dong-thoi	8.9112293	105.0674317	Xã	969	\N	\N
32146	Xã Tân Hưng Đông	xa-tan-hung-dong	8.9621315	105.0031457	Xã	969	\N	\N
32149	Xã Trần Thới	xa-tran-thoi	8.8917156	105.0206757	Xã	969	\N	\N
32152	Thị trấn Đầm Dơi	thi-tran-dam-doi	8.9944214	105.1941487	Thị trấn	970	\N	\N
32155	Xã Tạ An Khương	xa-ta-an-khuong	9.0611369	105.2019295	Xã	970	\N	\N
32158	Xã Tạ An Khương  Đông	xa-ta-an-khuong-dong	9.0750054	105.2545888	Xã	970	\N	\N
32161	Xã Trần Phán	xa-tran-phan	8.972646	105.1375908	Xã	970	\N	\N
32162	Xã Tân Trung	xa-tan-trung	9.0523768	105.1551352	Xã	970	\N	\N
32164	Xã Tân Đức	xa-tan-duc	9.0096468	105.2779983	Xã	970	\N	\N
32167	Xã Tân Thuận	xa-tan-thuan	9.0082324	105.3275901	Xã	970	\N	\N
32170	Xã Tạ An Khương  Nam	xa-ta-an-khuong-nam	9.0116217	105.2311827	Xã	970	\N	\N
32173	Xã Tân Duyệt	xa-tan-duyet	8.9492536	105.1843801	Xã	970	\N	\N
32174	Xã Tân Dân	xa-tan-dan	8.9472988	105.2311827	Xã	970	\N	\N
32176	Xã Tân Tiến	xa-tan-tien	8.9433697	105.3248269	Xã	970	\N	\N
32179	Xã Quách Phẩm Bắc	xa-quach-pham-bac	8.9252739	105.1469058	Xã	970	\N	\N
32182	Xã Quách Phẩm	xa-quach-pham	8.8674107	105.0908147	Xã	970	\N	\N
32185	Xã Thanh Tùng	xa-thanh-tung	8.8635563	105.1843801	Xã	970	\N	\N
32186	Xã Ngọc Chánh	xa-ngoc-chanh	8.9063928	105.1843801	Xã	970	\N	\N
32188	Xã Nguyễn Huân	xa-nguyen-huan	8.8801064	105.3014109	Xã	970	\N	\N
32191	Thị Trấn Năm Căn	thi-tran-nam-can	8.7697509	104.9914601	Thị trấn	971	\N	\N
32194	Xã Hàm Rồng	xa-ham-rong	8.8264891	105.044052	Xã	971	\N	\N
32197	Xã Hiệp Tùng	xa-hiep-tung	8.8245805	105.0908147	Xã	971	\N	\N
32200	Xã Đất Mới	xa-dat-moi	8.8088679	104.9505671	Xã	971	\N	\N
32201	Xã Lâm Hải	xa-lam-hai	8.7353511	104.9155243	Xã	971	\N	\N
32203	Xã Hàng Vịnh	xa-hang-vinh	8.789262	105.0382076	Xã	971	\N	\N
32206	Xã Tam Giang	xa-tam-giang	8.8003064	105.1609838	Xã	971	\N	\N
32209	Xã Tam Giang Đông	xa-tam-giang-dong	8.7964601	105.2545888	Xã	971	\N	\N
32212	Thị trấn Cái Đôi Vàm	thi-tran-cai-doi-vam	8.8732234	104.8162784	Thị trấn	972	\N	\N
32214	Xã Phú Thuận	xa-phu-thuan	8.9803931	104.9505671	Xã	972	\N	\N
32215	Xã Phú Mỹ	xa-phu-my	8.9823138	104.9038451	Xã	972	\N	\N
32218	Xã Phú Tân	xa-phu-tan	8.9412925	104.8571368	Xã	972	\N	\N
32221	Xã Tân Hải	xa-tan-hai	8.8993271	104.8337879	Xã	972	\N	\N
32224	Xã Việt Thắng	xa-viet-thang	8.8670727	104.9680914	Xã	972	\N	\N
32227	Xã Tân Hưng Tây	xa-tan-hung-tay	8.8908863	104.9096846	Xã	972	\N	\N
32228	Xã Rạch Chèo	xa-rach-cheo	8.8321768	104.9038451	Xã	972	\N	\N
32230	Xã Việt Khái	xa-viet-khai	8.8135688	104.8337879	Xã	972	\N	\N
32233	Xã Tam Giang Tây	xa-tam-giang-tay	8.7370964	105.1375908	Xã	973	\N	\N
32236	Xã Tân Ân Tây	xa-tan-an-tay	8.7194981	105.044052	Xã	973	\N	\N
32239	Xã Viên An Đông	xa-vien-an-dong	8.6377338	104.9505671	Xã	973	\N	\N
32244	Thị trấn Rạch Gốc	thi-tran-rach-goc	8.6563112	105.0206757	Thị trấn	973	\N	\N
32245	Xã Tân Ân	xa-tan-an	8.6535044	105.0908147	Xã	973	\N	\N
32248	Xã Đất Mũi	xa-dat-mui	8.6006349	104.7557824	Xã	973	\N	\N
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (id, post_id, name, email, phone, facebook, zalo, address, website, latitude, longitude, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: device; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.device (id, ip, platform, browser, version, type, latitude, longitude, city, region, country, postal, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: districts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.districts (id, name, slug, latitude, longitude, type, province_id, created_at, updated_at) FROM stdin;
1	Quận Ba Đình	quan-ba-dinh	21.0337815	105.8140539	Quận	1	\N	\N
2	Quận Hoàn Kiếm	quan-hoan-kiem	21.027964	105.8510132	Quận	1	\N	\N
3	Quận Tây Hồ	quan-tay-ho	21.0811211	105.8180306	Quận	1	\N	\N
4	Quận Long Biên	quan-long-bien	21.0548635	105.8884966	Quận	1	\N	\N
5	Quận Cầu Giấy	quan-cau-giay	21.0362368	105.7905825	Quận	1	\N	\N
6	Quận Đống Đa	quan-dong-da	21.0180725	105.8299495	Quận	1	\N	\N
7	Quận Hai Bà Trưng	quan-hai-ba-trung	21.0090571	105.8607507	Quận	1	\N	\N
8	Quận Hoàng Mai	quan-hoang-mai	20.9836984	105.8636257	Quận	1	\N	\N
9	Quận Thanh Xuân	quan-thanh-xuan	20.9959819	105.8097244	Quận	1	\N	\N
16	Huyện Sóc Sơn	huyen-soc-son	21.2573126	105.8480203	Huyện	1	\N	\N
17	Huyện Đông Anh	huyen-dong-anh	21.1245303	105.8271398	Huyện	1	\N	\N
18	Huyện Gia Lâm	huyen-gia-lam	21.0105208	105.952941	Huyện	1	\N	\N
19	Quận Nam Từ Liêm	quan-nam-tu-liem	21.0034608	105.7703287	Quận	1	\N	\N
20	Huyện Thanh Trì	huyen-thanh-tri	20.9344418	105.8462288	Huyện	1	\N	\N
21	Quận Bắc Từ Liêm	quan-bac-tu-liem	21.0730201	105.7703287	Quận	1	\N	\N
24	Thành phố Hà Giang	thanh-pho-ha-giang	22.8025588	104.9784494	Thành phố	2	\N	\N
26	Huyện Đồng Văn	huyen-dong-van	23.2246718	105.2428853	Huyện	2	\N	\N
27	Huyện Mèo Vạc	huyen-meo-vac	23.1341053	105.4536718	Huyện	2	\N	\N
28	Huyện Yên Minh	huyen-yen-minh	23.0434955	105.1960795	Huyện	2	\N	\N
29	Huyện Quản Bạ	huyen-quan-ba	23.087186	104.9856176	Huyện	2	\N	\N
30	Huyện Vị Xuyên	huyen-vi-xuyen	22.7241336	104.8921668	Huyện	2	\N	\N
31	Huyện Bắc Mê	huyen-bac-me	22.7811484	105.2662931	Huyện	2	\N	\N
32	Huyện Hoàng Su Phì	huyen-hoang-su-phi	22.7417169	104.705431	Huyện	2	\N	\N
33	Huyện Xín Mần	huyen-xin-man	22.6659156	104.5189214	Huyện	2	\N	\N
34	Huyện Bắc Quang	huyen-bac-quang	22.4450248	104.8921668	Huyện	2	\N	\N
35	Huyện Quang Bình	huyen-quang-binh	22.4624387	104.705431	Huyện	2	\N	\N
40	Thành phố Cao Bằng	thanh-pho-cao-bang	22.6655648	106.2606733	Thành phố	4	\N	\N
42	Huyện Bảo Lâm	huyen-bao-lam	22.8378995	105.4948965	Huyện	4	\N	\N
43	Huyện Bảo Lạc	huyen-bao-lac	22.8786248	105.6881788	Huyện	4	\N	\N
44	Huyện Thông Nông	huyen-thong-nong	22.8439088	105.9520986	Huyện	4	\N	\N
45	Huyện Hà Quảng	huyen-ha-quang	22.9025402	106.1345705	Huyện	4	\N	\N
46	Huyện Trà Lĩnh	huyen-tra-linh	22.7903474	106.3228338	Huyện	4	\N	\N
47	Huyện Trùng Khánh	huyen-trung-khanh	22.8323826	106.5819789	Huyện	4	\N	\N
48	Huyện Hạ Lang	huyen-ha-lang	22.7042438	106.6998767	Huyện	4	\N	\N
49	Huyện Quảng Uyên	huyen-quang-uyen	22.68299	106.4641459	Huyện	4	\N	\N
50	Huyện Phục Hoà	huyen-phuc-hoa	22.5392684	106.5112712	Huyện	4	\N	\N
51	Huyện Hoà An	huyen-hoa-an	22.7538704	106.22868	Huyện	4	\N	\N
52	Huyện Nguyên Bình	huyen-nguyen-binh	22.6230856	105.92299	Huyện	4	\N	\N
53	Huyện Thạch An	huyen-thach-an	22.4663561	106.3228338	Huyện	4	\N	\N
58	Thành Phố Bắc Kạn	thanh-pho-bac-kan	22.1329032	105.8407722	Thành phố	6	\N	\N
60	Huyện Pác Nặm	huyen-pac-nam	22.6126367	105.6703226	Huyện	6	\N	\N
61	Huyện Ba Bể	huyen-ba-be	22.3636887	105.7351171	Huyện	6	\N	\N
62	Huyện Ngân Sơn	huyen-ngan-son	22.4281787	106.0169971	Huyện	6	\N	\N
63	Huyện Bạch Thông	huyen-bach-thong	22.2360787	105.8525154	Huyện	6	\N	\N
64	Huyện Chợ Đồn	huyen-cho-don	22.1964994	105.5474373	Huyện	6	\N	\N
65	Huyện Chợ Mới	huyen-cho-moi	21.9833375	105.8290298	Huyện	6	\N	\N
66	Huyện Na Rì	huyen-na-ri	22.1406595	106.1110501	Huyện	6	\N	\N
70	Thành phố Tuyên Quang	thanh-pho-tuyen-quang	21.7767246	105.2280196	Thành phố	8	\N	\N
71	Huyện Lâm Bình	huyen-lam-binh	22.4565907	105.2170589	Huyện	8	\N	\N
72	Huyện Nà Hang	huyen-na-hang	22.4933358	105.3599568	Huyện	8	\N	\N
73	Huyện Chiêm Hóa	huyen-chiem-hoa	22.1306765	105.2662931	Huyện	8	\N	\N
74	Huyện Hàm Yên	huyen-ham-yen	22.0839452	105.027174	Huyện	8	\N	\N
75	Huyện Yên Sơn	huyen-yen-son	21.9447986	105.2662931	Huyện	8	\N	\N
76	Huyện Sơn Dương	huyen-son-duong	21.6571812	105.3599568	Huyện	8	\N	\N
80	Thành phố Lào Cai	thanh-pho-lao-cai	22.4458835	104.0037764	Thành phố	10	\N	\N
82	Huyện Bát Xát	huyen-bat-xat	22.5539336	103.682586	Huyện	10	\N	\N
83	Huyện Mường Khương	huyen-muong-khuong	22.6785309	104.1233667	Huyện	10	\N	\N
84	Huyện Si Ma Cai	huyen-si-ma-cai	22.6659838	104.262851	Huyện	10	\N	\N
85	Huyện Bắc Hà	huyen-bac-ha	22.4965469	104.332644	Huyện	10	\N	\N
86	Huyện Bảo Thắng	huyen-bao-thang	22.3266996	104.1466046	Huyện	10	\N	\N
87	Huyện Bảo Yên	huyen-bao-yen	22.2763301	104.4490398	Huyện	10	\N	\N
88	Huyện Sa Pa	huyen-sa-pa	22.2497168	103.9608091	Huyện	10	\N	\N
89	Huyện Văn Bàn	huyen-van-ban	22.0894109	104.1930918	Huyện	10	\N	\N
94	Thành phố Điện Biên Phủ	thanh-pho-dien-bien-phu	21.4094269	103.0355852	Thành phố	11	\N	\N
95	Thị Xã Mường Lay	thi-xa-muong-lay	22.0498734	103.1634988	Thị xã	11	\N	\N
96	Huyện Mường Nhé	huyen-muong-nhe	22.0832638	102.5757028	Huyện	11	\N	\N
97	Huyện Mường Chà	huyen-muong-cha	21.8596604	103.035694	Huyện	11	\N	\N
98	Huyện Tủa Chùa	huyen-tua-chua	21.9232005	103.4049445	Huyện	11	\N	\N
99	Huyện Tuần Giáo	huyen-tuan-giao	21.6427019	103.4049445	Huyện	11	\N	\N
100	Huyện Điện Biên	huyen-dien-bien	21.2044768	103.035694	Huyện	11	\N	\N
101	Huyện Điện Biên Đông	huyen-dien-bien-dong	21.2835093	103.2201828	Huyện	11	\N	\N
102	Huyện Mường Ảng	huyen-muong-ang	21.5641438	103.2201828	Huyện	11	\N	\N
103	Huyện Nậm Pồ	huyen-nam-po	22.1910984	102.4614607	Huyện	11	\N	\N
105	Thành phố Lai Châu	thanh-pho-lai-chau	22.3997565	103.4477219	Thành phố	12	\N	\N
106	Huyện Tam Đường	huyen-tam-duong	22.3497051	103.6131203	Huyện	12	\N	\N
107	Huyện Mường Tè	huyen-muong-te	22.400379	102.7135121	Huyện	12	\N	\N
108	Huyện Sìn Hồ	huyen-sin-ho	22.3048884	103.3125299	Huyện	12	\N	\N
109	Huyện Phong Thổ	huyen-phong-tho	22.5776336	103.4049445	Huyện	12	\N	\N
110	Huyện Than Uyên	huyen-than-uyen	21.8922107	103.7752634	Huyện	12	\N	\N
111	Huyện Tân Uyên	huyen-tan-uyen	22.0868845	103.682586	Huyện	12	\N	\N
112	Huyện Nậm Nhùn	huyen-nam-nhun	22.1559988	103.0059081	Huyện	12	\N	\N
116	Thành phố Sơn La	thanh-pho-son-la	21.3270341	103.9141288	Thành phố	14	\N	\N
118	Huyện Quỳnh Nhai	huyen-quynh-nhai	21.7132038	103.682586	Huyện	14	\N	\N
119	Huyện Thuận Châu	huyen-thuan-chau	21.3900652	103.6362715	Huyện	14	\N	\N
120	Huyện Mường La	huyen-muong-la	21.495112	104.053676	Huyện	14	\N	\N
121	Huyện Bắc Yên	huyen-bac-yen	21.2765545	104.4257533	Huyện	14	\N	\N
122	Huyện Phù Yên	huyen-phu-yen	21.2623608	104.6441102	Huyện	14	\N	\N
123	Huyện Mộc Châu	huyen-moc-chau	20.9220823	104.7520939	Huyện	14	\N	\N
124	Huyện Yên Châu	huyen-yen-chau	21.0050006	104.332644	Huyện	14	\N	\N
125	Huyện Mai Sơn	huyen-mai-son	21.1219095	104.053676	Huyện	14	\N	\N
126	Huyện Sông Mã	huyen-song-ma	21.0593251	103.682586	Huyện	14	\N	\N
127	Huyện Sốp Cộp	huyen-sop-cop	20.8874516	103.4974258	Huyện	14	\N	\N
128	Huyện Vân Hồ	huyen-van-ho	20.7931051	104.7637619	Huyện	14	\N	\N
132	Thành phố Yên Bái	thanh-pho-yen-bai	21.7167689	104.8985878	Thành phố	15	\N	\N
133	Thị xã Nghĩa Lộ	thi-xa-nghia-lo	21.6018769	104.5062651	Thị xã	15	\N	\N
135	Huyện Lục Yên	huyen-luc-yen	22.0900049	104.705431	Huyện	15	\N	\N
136	Huyện Văn Yên	huyen-van-yen	21.8698428	104.5655273	Huyện	15	\N	\N
137	Huyện Mù Căng Chải	huyen-mu-cang-chai	21.7670046	104.1466046	Huyện	15	\N	\N
138	Huyện Trấn Yên	huyen-tran-yen	21.6160083	104.798771	Huyện	15	\N	\N
139	Huyện Trạm Tấu	huyen-tram-tau	21.4629385	104.4257533	Huyện	15	\N	\N
140	Huyện Văn Chấn	huyen-van-chan	21.4298431	104.798771	Huyện	15	\N	\N
141	Huyện Yên Bình	huyen-yen-binh	21.7850519	104.9856176	Huyện	15	\N	\N
148	Thành phố Hòa Bình	thanh-pho-hoa-binh	20.828578	105.3380302	Thành phố	17	\N	\N
150	Huyện Đà Bắc	huyen-da-bac	20.8381545	105.1726816	Huyện	17	\N	\N
151	Huyện Kỳ Sơn	huyen-ky-son	20.9030231	105.3932378	Huyện	17	\N	\N
152	Huyện Lương Sơn	huyen-luong-son	20.871913	105.5040269	Huyện	17	\N	\N
153	Huyện Kim Bôi	huyen-kim-boi	20.6901132	105.5239912	Huyện	17	\N	\N
154	Huyện Cao Phong	huyen-cao-phong	20.7072205	105.336536	Huyện	17	\N	\N
155	Huyện Tân Lạc	huyen-tan-lac	20.6228033	105.2428853	Huyện	17	\N	\N
156	Huyện Mai Châu	huyen-mai-chau	20.6901339	105.0089888	Huyện	17	\N	\N
157	Huyện Lạc Sơn	huyen-lac-son	20.4413353	105.4536718	Huyện	17	\N	\N
158	Huyện Yên Thủy	huyen-yen-thuy	20.4032247	105.6177942	Huyện	17	\N	\N
159	Huyện Lạc Thủy	huyen-lac-thuy	20.5136724	105.7333455	Huyện	17	\N	\N
164	Thành phố Thái Nguyên	thanh-pho-thai-nguyen	21.5671559	105.8252038	Thành phố	19	\N	\N
165	Thành phố Sông Công	thanh-pho-song-cong	21.4757637	105.8234766	Thành phố	19	\N	\N
167	Huyện Định Hóa	huyen-dinh-hoa	21.8879551	105.6177942	Huyện	19	\N	\N
168	Huyện Phú Lương	huyen-phu-luong	21.786057	105.7116464	Huyện	19	\N	\N
169	Huyện Đồng Hỷ	huyen-dong-hy	21.6286393	105.8994956	Huyện	19	\N	\N
170	Huyện Võ Nhai	huyen-vo-nhai	21.7793409	106.0169971	Huyện	19	\N	\N
171	Huyện Đại Từ	huyen-dai-tu	21.6304358	105.6412527	Huyện	19	\N	\N
172	Thị xã Phổ Yên	thi-xa-pho-yen	21.415762	105.872995	Thị xã	19	\N	\N
173	Huyện Phú Bình	huyen-phu-binh	21.4849768	105.9464874	Huyện	19	\N	\N
178	Thành phố Lạng Sơn	thanh-pho-lang-son	21.853708	106.761519	Thành phố	20	\N	\N
180	Huyện Tràng Định	huyen-trang-dinh	22.2872995	106.4877072	Huyện	20	\N	\N
181	Huyện Bình Gia	huyen-binh-gia	22.0639906	106.3340858	Huyện	20	\N	\N
182	Huyện Văn Lãng	huyen-van-lang	22.0924829	106.5819789	Huyện	20	\N	\N
183	Huyện Cao Lộc	huyen-cao-loc	21.9036302	106.8414374	Huyện	20	\N	\N
184	Huyện Văn Quan	huyen-van-quan	21.8453587	106.5112712	Huyện	20	\N	\N
185	Huyện Bắc Sơn	huyen-bac-son	21.8437729	106.2992912	Huyện	20	\N	\N
186	Huyện Hữu Lũng	huyen-huu-lung	21.5659824	106.2992912	Huyện	20	\N	\N
187	Huyện Chi Lăng	huyen-chi-lang	21.6506944	106.6055534	Huyện	20	\N	\N
188	Huyện Lộc Bình	huyen-loc-binh	21.7757592	106.9594723	Huyện	20	\N	\N
189	Huyện Đình Lập	huyen-dinh-lap	21.5711978	107.1484521	Huyện	20	\N	\N
193	Thành phố Hạ Long	thanh-pho-ha-long	20.9711977	107.0448069	Thành phố	22	\N	\N
194	Thành phố Móng Cái	thanh-pho-mong-cai	21.5419456	107.8794943	Thành phố	22	\N	\N
195	Thành phố Cẩm Phả	thanh-pho-cam-pha	21.0694762	107.3139304	Thành phố	22	\N	\N
196	Thành phố Uông Bí	thanh-pho-uong-bi	21.081585	106.7470536	Thành phố	22	\N	\N
198	Huyện Bình Liêu	huyen-binh-lieu	21.5410162	107.4321959	Huyện	22	\N	\N
199	Huyện Tiên Yên	huyen-tien-yen	21.3666878	107.3375791	Huyện	22	\N	\N
200	Huyện Đầm Hà	huyen-dam-ha	21.3619435	107.5978577	Huyện	22	\N	\N
201	Huyện Hải Hà	huyen-hai-ha	21.4182232	107.71625	Huyện	22	\N	\N
202	Huyện Ba Chẽ	huyen-ba-che	21.294325	107.1484521	Huyện	22	\N	\N
203	Huyện Vân Đồn	huyen-van-don	21.0693983	107.4202262	Huyện	22	\N	\N
204	Huyện Hoành Bồ	huyen-hoanh-bo	21.0551849	107.0405167	Huyện	22	\N	\N
205	Thị xã Đông Triều	thi-xa-dong-trieu	21.0958153	106.6055534	Thị xã	22	\N	\N
206	Thị xã Quảng Yên	thi-xa-quang-yen	20.9334638	106.8414374	Thị xã	22	\N	\N
207	Huyện Cô Tô	huyen-co-to	21.1062206	107.8346924	Huyện	22	\N	\N
213	Thành phố Bắc Giang	thanh-pho-bac-giang	21.2909028	106.1867027	Thành phố	24	\N	\N
215	Huyện Yên Thế	huyen-yen-the	21.5128774	106.1345705	Huyện	24	\N	\N
216	Huyện Tân Yên	huyen-tan-yen	21.3785203	106.0875326	Huyện	24	\N	\N
217	Huyện Lạng Giang	huyen-lang-giang	21.3646422	106.22868	Huyện	24	\N	\N
218	Huyện Lục Nam	huyen-luc-nam	21.2996631	106.4170311	Huyện	24	\N	\N
219	Huyện Lục Ngạn	huyen-luc-ngan	21.4354043	106.676292	Huyện	24	\N	\N
220	Huyện Sơn Động	huyen-son-dong	21.3520004	106.8849897	Huyện	24	\N	\N
221	Huyện Yên Dũng	huyen-yen-dung	21.2257315	106.22868	Huyện	24	\N	\N
222	Huyện Việt Yên	huyen-viet-yen	21.2858633	106.0875326	Huyện	24	\N	\N
223	Huyện Hiệp Hòa	huyen-hiep-hoa	21.3552222	105.9790377	Huyện	24	\N	\N
227	Thành phố Việt Trì	thanh-pho-viet-tri	21.3425399	105.3716684	Thành phố	25	\N	\N
228	Thị xã Phú Thọ	thi-xa-phu-tho	21.4252786	105.2311827	Thị xã	25	\N	\N
230	Huyện Đoan Hùng	huyen-doan-hung	21.6071636	105.1492869	Huyện	25	\N	\N
231	Huyện Hạ Hoà	huyen-ha-hoa	21.5735989	105.0089888	Huyện	25	\N	\N
232	Huyện Thanh Ba	huyen-thanh-ba	21.4677045	105.1492869	Huyện	25	\N	\N
233	Huyện Phù Ninh	huyen-phu-ninh	21.4753257	105.2844608	Huyện	25	\N	\N
234	Huyện Yên Lập	huyen-yen-lap	21.3410625	105.0089888	Huyện	25	\N	\N
235	Huyện Cẩm Khê	huyen-cam-khe	21.4298041	105.0557415	Huyện	25	\N	\N
236	Huyện Tam Nông	huyen-tam-nong	21.2858685	105.2311827	Huyện	25	\N	\N
237	Huyện Lâm Thao	huyen-lam-thao	21.3026143	105.3014109	Huyện	25	\N	\N
238	Huyện Thanh Sơn	huyen-thanh-son	21.0240198	105.1726816	Huyện	25	\N	\N
239	Huyện Thanh Thuỷ	huyen-thanh-thuy	21.1141818	105.2807163	Huyện	25	\N	\N
240	Huyện Tân Sơn	huyen-tan-son	21.1665519	104.9894851	Huyện	25	\N	\N
243	Thành phố Vĩnh Yên	thanh-pho-vinh-yen	21.2973262	105.6060661	Thành phố	26	\N	\N
244	Thị xã Phúc Yên	thi-xa-phuc-yen	21.3325846	105.7233814	Thị xã	26	\N	\N
246	Huyện Lập Thạch	huyen-lap-thach	21.4371499	105.4771084	Huyện	26	\N	\N
247	Huyện Tam Dương	huyen-tam-duong	21.3713778	105.5591615	Huyện	26	\N	\N
248	Huyện Tam Đảo	huyen-tam-dao	21.4747064	105.5708865	Huyện	26	\N	\N
249	Huyện Bình Xuyên	huyen-binh-xuyen	21.313857	105.6764461	Huyện	26	\N	\N
250	Huyện Mê Linh	huyen-me-linh	21.1753431	105.7308045	Huyện	1	\N	\N
251	Huyện Yên Lạc	huyen-yen-lac	21.1962199	105.5708865	Huyện	26	\N	\N
252	Huyện Vĩnh Tường	huyen-vinh-tuong	21.2537742	105.4899167	Huyện	26	\N	\N
253	Huyện Sông Lô	huyen-song-lo	21.4564665	105.3950939	Huyện	26	\N	\N
256	Thành phố Bắc Ninh	thanh-pho-bac-ninh	21.1766814	106.0621591	Thành phố	27	\N	\N
258	Huyện Yên Phong	huyen-yen-phong	21.202957	105.9581624	Huyện	27	\N	\N
259	Huyện Quế Võ	huyen-que-vo	21.1377307	106.1816196	Huyện	27	\N	\N
260	Huyện Tiên Du	huyen-tien-du	21.1178311	106.0287512	Huyện	27	\N	\N
261	Thị xã Từ Sơn	thi-xa-tu-son	21.1196529	105.9623161	Thị xã	27	\N	\N
262	Huyện Thuận Thành	huyen-thuan-thanh	21.0357781	106.0792574	Huyện	27	\N	\N
263	Huyện Gia Bình	huyen-gia-binh	21.0764073	106.2169139	Huyện	27	\N	\N
264	Huyện Lương Tài	huyen-luong-tai	21.0278149	106.2404468	Huyện	27	\N	\N
268	Quận Hà Đông	quan-ha-dong	20.955835	105.7563658	Quận	1	\N	\N
269	Thị xã Sơn Tây	thi-xa-son-tay	21.1032279	105.4969964	Thị xã	1	\N	\N
271	Huyện Ba Vì	huyen-ba-vi	21.1992298	105.4232116	Huyện	1	\N	\N
272	Huyện Phúc Thọ	huyen-phuc-tho	21.1241396	105.5939066	Huyện	1	\N	\N
273	Huyện Đan Phượng	huyen-dan-phuong	21.084855	105.6690963	Huyện	1	\N	\N
274	Huyện Hoài Đức	huyen-hoai-duc	21.0243168	105.6988892	Huyện	1	\N	\N
275	Huyện Quốc Oai	huyen-quoc-oai	20.9924634	105.6404254	Huyện	1	\N	\N
276	Huyện Thạch Thất	huyen-thach-that	20.9905234	105.5251894	Huyện	1	\N	\N
277	Huyện Chương Mỹ	huyen-chuong-my	20.8746466	105.6712465	Huyện	1	\N	\N
278	Huyện Thanh Oai	huyen-thanh-oai	20.8532165	105.7688513	Huyện	1	\N	\N
279	Huyện Thường Tín	huyen-thuong-tin	20.8055441	105.8838579	Huyện	1	\N	\N
280	Huyện Phú Xuyên	huyen-phu-xuyen	20.7280728	105.9029374	Huyện	1	\N	\N
281	Huyện Ứng Hòa	huyen-ung-hoa	20.729614	105.7782061	Huyện	1	\N	\N
282	Huyện Mỹ Đức	huyen-my-duc	20.725768	105.7157513	Huyện	1	\N	\N
288	Thành phố Hải Dương	thanh-pho-hai-duong	20.9373413	106.3145542	Thành phố	30	\N	\N
290	Thị xã Chí Linh	thi-xa-chi-linh	21.1608547	106.4170311	Thị xã	30	\N	\N
291	Huyện Nam Sách	huyen-nam-sach	20.995464	106.3346061	Huyện	30	\N	\N
292	Huyện Kinh Môn	huyen-kinh-mon	21.0110318	106.5273651	Huyện	30	\N	\N
293	Huyện Kim Thành	huyen-kim-thanh	20.8984531	106.5141873	Huyện	30	\N	\N
294	Huyện Thanh Hà	huyen-thanh-ha	20.908358	106.4276087	Huyện	30	\N	\N
295	Huyện Cẩm Giàng	huyen-cam-giang	20.9479485	106.22868	Huyện	30	\N	\N
296	Huyện Bình Giang	huyen-binh-giang	20.870356	106.1933837	Huyện	30	\N	\N
297	Huyện Gia Lộc	huyen-gia-loc	20.8612295	106.287521	Huyện	30	\N	\N
298	Huyện Tứ Kỳ	huyen-tu-ky	20.8168182	106.4112446	Huyện	30	\N	\N
299	Huyện Ninh Giang	huyen-ninh-giang	20.7491091	106.3699271	Huyện	30	\N	\N
300	Huyện Thanh Miện	huyen-thanh-mien	20.7821204	106.2203815	Huyện	30	\N	\N
303	Quận Hồng Bàng	quan-hong-bang	20.8595313	106.666993	Quận	31	\N	\N
304	Quận Ngô Quyền	quan-ngo-quyen	20.8566653	106.6994903	Quận	31	\N	\N
305	Quận Lê Chân	quan-le-chan	20.8345046	106.6831336	Quận	31	\N	\N
306	Quận Hải An	quan-hai-an	20.8449115	106.6880841	Quận	31	\N	\N
307	Quận Kiến An	quan-kien-an	20.8013772	106.6263194	Quận	31	\N	\N
308	Quận Đồ Sơn	quan-do-son	20.7247533	106.7742534	Quận	31	\N	\N
309	Quận Dương Kinh	quan-duong-kinh	20.7733918	106.7213703	Quận	31	\N	\N
311	Huyện Thuỷ Nguyên	huyen-thuy-nguyen	20.9451331	106.6715543	Huyện	31	\N	\N
312	Huyện An Dương	huyen-an-duong	20.8449115	106.6880841	Huyện	31	\N	\N
313	Huyện An Lão	huyen-an-lao	20.8214217	106.5565478	Huyện	31	\N	\N
314	Huyện Kiến Thuỵ	huyen-kien-thuy	20.7515698	106.6701329	Huyện	31	\N	\N
315	Huyện Tiên Lãng	huyen-tien-lang	20.72404	106.5535966	Huyện	31	\N	\N
316	Huyện Vĩnh Bảo	huyen-vinh-bao	20.688914	106.4814255	Huyện	31	\N	\N
317	Huyện Cát Hải	huyen-cat-hai	20.8041045	106.9302268	Huyện	31	\N	\N
318	Huyện Bạch Long Vĩ	huyen-bach-long-vi	20.1345592	107.7302087	Huyện	31	\N	\N
323	Thành phố Hưng Yên	thanh-pho-hung-yen	20.6523683	106.0522616	Thành phố	33	\N	\N
325	Huyện Văn Lâm	huyen-van-lam	20.9854595	106.0463746	Huyện	33	\N	\N
326	Huyện Văn Giang	huyen-van-giang	20.9414842	105.9569025	Huyện	33	\N	\N
327	Huyện Yên Mỹ	huyen-yen-my	20.8861904	106.0287512	Huyện	33	\N	\N
328	Huyện Mỹ Hào	huyen-my-hao	20.9257379	106.099291	Huyện	33	\N	\N
329	Huyện Ân Thi	huyen-an-thi	20.8099609	106.099291	Huyện	33	\N	\N
330	Huyện Khoái Châu	huyen-khoai-chau	20.8415456	105.9804247	Huyện	33	\N	\N
331	Huyện Kim Động	huyen-kim-dong	20.7325036	106.0563755	Huyện	33	\N	\N
332	Huyện Tiên Lữ	huyen-tien-lu	20.6919516	106.1228099	Huyện	33	\N	\N
333	Huyện Phù Cừ	huyen-phu-cu	20.7083369	106.1933837	Huyện	33	\N	\N
336	Thành phố Thái Bình	thanh-pho-thai-binh	20.4463471	106.3365828	Thành phố	34	\N	\N
338	Huyện Quỳnh Phụ	huyen-quynh-phu	20.6608254	106.3276864	Huyện	34	\N	\N
339	Huyện Hưng Hà	huyen-hung-ha	20.5903748	106.2169139	Huyện	34	\N	\N
340	Huyện Đông Hưng	huyen-dong-hung	20.5640924	106.3699271	Huyện	34	\N	\N
341	Huyện Thái Thụy	huyen-thai-thuy	20.5655791	106.5648803	Huyện	34	\N	\N
342	Huyện Tiền Hải	huyen-tien-hai	20.3609414	106.5584071	Huyện	34	\N	\N
343	Huyện Kiến Xương	huyen-kien-xuong	20.4208256	106.4170311	Huyện	34	\N	\N
344	Huyện Vũ Thư	huyen-vu-thu	20.4343787	106.2757514	Huyện	34	\N	\N
347	Thành phố Phủ Lý	thanh-pho-phu-ly	20.5476734	105.9347384	Thành phố	35	\N	\N
349	Huyện Duy Tiên	huyen-duy-tien	20.626842	105.951554	Huyện	35	\N	\N
350	Huyện Kim Bảng	huyen-kim-bang	20.5633623	105.8562473	Huyện	35	\N	\N
351	Huyện Thanh Liêm	huyen-thanh-liem	20.4699057	105.8994956	Huyện	35	\N	\N
352	Huyện Bình Lục	huyen-binh-luc	20.5029885	106.040506	Huyện	35	\N	\N
353	Huyện Lý Nhân	huyen-ly-nhan	20.5553005	106.099291	Huyện	35	\N	\N
356	Thành phố Nam Định	thanh-pho-nam-dinh	20.4388225	106.1621053	Thành phố	36	\N	\N
358	Huyện Mỹ Lộc	huyen-my-loc	20.4604906	106.1228099	Huyện	36	\N	\N
359	Huyện Vụ Bản	huyen-vu-ban	20.370142	106.099291	Huyện	36	\N	\N
360	Huyện Ý Yên	huyen-y-yen	20.3684984	105.993491	Huyện	36	\N	\N
361	Huyện Nghĩa Hưng	huyen-nghia-hung	20.0732479	106.1816196	Huyện	36	\N	\N
362	Huyện Nam Trực	huyen-nam-truc	20.3358927	106.2169139	Huyện	36	\N	\N
363	Huyện Trực Ninh	huyen-truc-ninh	20.243376	106.2169139	Huyện	36	\N	\N
364	Huyện Xuân Trường	huyen-xuan-truong	20.2993311	106.3581527	Huyện	36	\N	\N
365	Huyện Giao Thủy	huyen-giao-thuy	20.2314086	106.4641459	Huyện	36	\N	\N
366	Huyện Hải Hậu	huyen-hai-hau	20.1568875	106.2757514	Huyện	36	\N	\N
369	Thành phố Ninh Bình	thanh-pho-ninh-binh	20.2506149	105.9744536	Thành phố	37	\N	\N
370	Thành phố Tam Điệp	thanh-pho-tam-diep	20.1564917	105.8736936	Thành phố	37	\N	\N
372	Huyện Nho Quan	huyen-nho-quan	20.2976274	105.7585908	Huyện	37	\N	\N
373	Huyện Gia Viễn	huyen-gia-vien	20.3353002	105.8525154	Huyện	37	\N	\N
374	Huyện Hoa Lư	huyen-hoa-lu	20.248813	105.9112424	Huyện	37	\N	\N
375	Huyện Yên Khánh	huyen-yen-khanh	20.187228	106.0757749	Huyện	37	\N	\N
376	Huyện Kim Sơn	huyen-kim-son	20.0462334	106.099291	Huyện	37	\N	\N
377	Huyện Yên Mô	huyen-yen-mo	20.1370289	105.993491	Huyện	37	\N	\N
380	Thành phố Thanh Hóa	thanh-pho-thanh-hoa	19.806692	105.7851816	Thành phố	38	\N	\N
381	Thị xã Bỉm Sơn	thi-xa-bim-son	20.0889153	105.8877494	Thị xã	38	\N	\N
382	Thành phố Sầm Sơn	thanh-pho-sam-son	19.7575271	105.9053689	Thành phố	38	\N	\N
384	Huyện Mường Lát	huyen-muong-lat	20.4941326	104.5888356	Huyện	38	\N	\N
385	Huyện Quan Hóa	huyen-quan-hoa	20.4830433	104.9856176	Huyện	38	\N	\N
386	Huyện Bá Thước	huyen-ba-thuoc	20.3653356	105.2662931	Huyện	38	\N	\N
387	Huyện Quan Sơn	huyen-quan-son	14.058324	108.277199	Huyện	38	\N	\N
388	Huyện Lang Chánh	huyen-lang-chanh	20.166759	105.1492869	Huyện	38	\N	\N
389	Huyện Ngọc Lặc	huyen-ngoc-lac	20.0785891	105.3599568	Huyện	38	\N	\N
390	Huyện Cẩm Thủy	huyen-cam-thuy	20.184101	105.4771084	Huyện	38	\N	\N
391	Huyện Thạch Thành	huyen-thach-thanh	20.2177814	105.6177942	Huyện	38	\N	\N
392	Huyện Hà Trung	huyen-ha-trung	20.0617086	105.8055471	Huyện	38	\N	\N
393	Huyện Vĩnh Lộc	huyen-vinh-loc	20.0408049	105.652983	Huyện	38	\N	\N
394	Huyện Yên Định	huyen-yen-dinh	19.9860515	105.6177942	Huyện	38	\N	\N
395	Huyện Thọ Xuân	huyen-tho-xuan	19.9059121	105.4771084	Huyện	38	\N	\N
396	Huyện Thường Xuân	huyen-thuong-xuan	19.9012787	105.2662931	Huyện	38	\N	\N
397	Huyện Triệu Sơn	huyen-trieu-son	19.8512387	105.5708865	Huyện	38	\N	\N
398	Huyện Thiệu Hóa	huyen-thieu-hoa	19.889182	105.6647142	Huyện	38	\N	\N
399	Huyện Hoằng Hóa	huyen-hoang-hoa	19.8216851	105.8994956	Huyện	38	\N	\N
400	Huyện Hậu Lộc	huyen-hau-loc	19.9268879	105.8877494	Huyện	38	\N	\N
401	Huyện Nga Sơn	huyen-nga-son	19.9981878	105.993491	Huyện	38	\N	\N
402	Huyện Như Xuân	huyen-nhu-xuan	19.6149135	105.3599568	Huyện	38	\N	\N
403	Huyện Như Thanh	huyen-nhu-thanh	19.5733122	105.5708865	Huyện	38	\N	\N
404	Huyện Nông Cống	huyen-nong-cong	19.6113284	105.6647142	Huyện	38	\N	\N
405	Huyện Đông Sơn	huyen-dong-son	19.8049755	105.6999122	Huyện	38	\N	\N
406	Huyện Quảng Xương	huyen-quang-xuong	19.6913377	105.8055471	Huyện	38	\N	\N
407	Huyện Tĩnh Gia	huyen-tinh-gia	19.43838	105.7745131	Huyện	38	\N	\N
412	Thành phố Vinh	thanh-pho-vinh	18.6795848	105.6813333	Thành phố	40	\N	\N
413	Thị xã Cửa Lò	thi-xa-cua-lo	18.7916127	105.7175138	Thị xã	40	\N	\N
414	Thị xã Thái Hoà	thi-xa-thai-hoa	19.2931124	105.4653897	Thị xã	40	\N	\N
415	Huyện Quế Phong	huyen-que-phong	19.6862686	104.9563176	Huyện	40	\N	\N
416	Huyện Quỳ Châu	huyen-quy-chau	19.5463056	105.0791228	Huyện	40	\N	\N
417	Huyện Kỳ Sơn	huyen-ky-son	19.38547	104.1827912	Huyện	40	\N	\N
418	Huyện Tương Dương	huyen-tuong-duong	19.2640131	104.5655273	Huyện	40	\N	\N
419	Huyện Nghĩa Đàn	huyen-nghia-dan	19.4003352	105.4302383	Huyện	40	\N	\N
420	Huyện Quỳ Hợp	huyen-quy-hop	19.3528917	105.1726816	Huyện	40	\N	\N
421	Huyện Quỳnh Lưu	huyen-quynh-luu	19.2200256	105.6412527	Huyện	40	\N	\N
422	Huyện Con Cuông	huyen-con-cuong	19.0130593	104.798771	Huyện	40	\N	\N
423	Huyện Tân Kỳ	huyen-tan-ky	19.0748796	105.1726816	Huyện	40	\N	\N
424	Huyện Anh Sơn	huyen-anh-son	18.9688054	105.0557415	Huyện	40	\N	\N
425	Huyện Diễn Châu	huyen-dien-chau	19.0179688	105.5708865	Huyện	40	\N	\N
426	Huyện Yên Thành	huyen-yen-thanh	19.0511285	105.4536718	Huyện	40	\N	\N
427	Huyện Đô Lương	huyen-do-luong	18.8990982	105.336536	Huyện	40	\N	\N
428	Huyện Thanh Chương	huyen-thanh-chuong	18.6967739	105.2662931	Huyện	40	\N	\N
429	Huyện Nghi Lộc	huyen-nghi-loc	18.8142042	105.5835663	Huyện	40	\N	\N
430	Huyện Nam Đàn	huyen-nam-dan	18.6983445	105.5239912	Huyện	40	\N	\N
431	Huyện Hưng Nguyên	huyen-hung-nguyen	18.6316742	105.629523	Huyện	40	\N	\N
432	Thị xã Hoàng Mai	thi-xa-hoang-mai	19.2370094	105.7116464	Thị xã	40	\N	\N
436	Thành phố Hà Tĩnh	thanh-pho-ha-tinh	18.3559537	105.8877494	Thành phố	42	\N	\N
437	Thị xã Hồng Lĩnh	thi-xa-hong-linh	18.5301567	105.7064569	Thị xã	42	\N	\N
439	Huyện Hương Sơn	huyen-huong-son	18.5118006	105.2662931	Huyện	42	\N	\N
440	Huyện Đức Thọ	huyen-duc-tho	18.5056718	105.6177942	Huyện	42	\N	\N
441	Huyện Vũ Quang	huyen-vu-quang	18.3365936	105.4302383	Huyện	42	\N	\N
442	Huyện Nghi Xuân	huyen-nghi-xuan	18.6282217	105.8055471	Huyện	42	\N	\N
443	Huyện Can Lộc	huyen-can-loc	18.4516009	105.7116464	Huyện	42	\N	\N
444	Huyện Hương Khê	huyen-huong-khe	18.2037562	105.6412527	Huyện	42	\N	\N
445	Huyện Thạch Hà	huyen-thach-ha	18.301316	105.8525154	Huyện	42	\N	\N
446	Huyện Cẩm Xuyên	huyen-cam-xuyen	18.1721653	106.0169971	Huyện	42	\N	\N
447	Huyện Kỳ Anh	huyen-ky-anh	18.0559583	106.2992912	Huyện	42	\N	\N
448	Huyện Lộc Hà	huyen-loc-ha	18.4817584	105.8994956	Huyện	42	\N	\N
449	Thị xã Kỳ Anh	thi-xa-ky-anh	18.0648343	106.2963486	Thị xã	42	\N	\N
450	Thành Phố Đồng Hới	thanh-pho-dong-hoi	17.4659391	106.5983958	Thành phố	44	\N	\N
452	Huyện Minh Hóa	huyen-minh-hoa	17.719816	105.92299	Huyện	44	\N	\N
453	Huyện Tuyên Hóa	huyen-tuyen-hoa	17.9319039	105.9722814	Huyện	44	\N	\N
454	Huyện Quảng Trạch	huyen-quang-trach	17.8640126	106.3934777	Thị xã	44	\N	\N
455	Huyện Bố Trạch	huyen-bo-trach	17.5047078	106.2992912	Huyện	44	\N	\N
456	Huyện Quảng Ninh	huyen-quang-ninh	17.2394584	106.4616246	Huyện	44	\N	\N
457	Huyện Lệ Thủy	huyen-le-thuy	17.1064913	106.676292	Huyện	44	\N	\N
458	Thị xã Ba Đồn	thi-xa-ba-don	17.7530355	106.4235285	Huyện	44	\N	\N
461	Thành phố Đông Hà	thanh-pho-dong-ha	16.8088928	107.0893798	Thành phố	45	\N	\N
462	Thị xã Quảng Trị	thi-xa-quang-tri	16.750563	107.1857063	Thị xã	45	\N	\N
464	Huyện Vĩnh Linh	huyen-vinh-linh	17.0743311	107.0539434	Huyện	45	\N	\N
465	Huyện Hướng Hóa	huyen-huong-hoa	16.6495512	106.676292	Huyện	45	\N	\N
466	Huyện Gio Linh	huyen-gio-linh	16.9165711	107.0303221	Huyện	45	\N	\N
467	Huyện Đa Krông	huyen-da-krong	16.5349165	106.9594723	Huyện	45	\N	\N
468	Huyện Cam Lộ	huyen-cam-lo	16.783695	106.9830865	Huyện	45	\N	\N
469	Huyện Triệu Phong	huyen-trieu-phong	16.809184	107.2193578	Huyện	45	\N	\N
470	Huyện Hải Lăng	huyen-hai-lang	16.714002	107.2666396	Huyện	45	\N	\N
471	Huyện Cồn Cỏ	huyen-con-co	17.1606501	107.3405354	Huyện	45	\N	\N
474	Thành phố Huế	thanh-pho-hue	16.4498	107.5623501	Thành phố	46	\N	\N
476	Huyện Phong Điền	huyen-phong-dien	16.503112	107.3375791	Huyện	46	\N	\N
477	Huyện Quảng Điền	huyen-quang-dien	16.5902415	107.5150139	Huyện	46	\N	\N
478	Huyện Phú Vang	huyen-phu-vang	16.491213	107.7399345	Huyện	46	\N	\N
479	Thị xã Hương Thủy	thi-xa-huong-thuy	16.4198395	107.6464295	Thị xã	46	\N	\N
480	Thị xã Hương Trà	thi-xa-huong-tra	16.420796	107.5031811	Thị xã	46	\N	\N
481	Huyện A Lưới	huyen-a-luoi	16.2303741	107.3375791	Huyện	46	\N	\N
482	Huyện Phú Lộc	huyen-phu-loc	16.2725431	107.9394761	Huyện	46	\N	\N
483	Huyện Nam Đông	huyen-nam-dong	16.1249688	107.6707417	Huyện	46	\N	\N
490	Quận Liên Chiểu	quan-lien-chieu	16.0717704	108.1503823	Quận	48	\N	\N
491	Quận Thanh Khê	quan-thanh-khe	16.0641802	108.1873407	Quận	48	\N	\N
492	Quận Hải Châu	quan-hai-chau	16.0472002	108.2199588	Quận	48	\N	\N
493	Quận Sơn Trà	quan-son-tra	16.1069981	108.2521815	Quận	48	\N	\N
494	Quận Ngũ Hành Sơn	quan-ngu-hanh-son	15.9955056	108.2588049	Quận	48	\N	\N
495	Quận Cẩm Lệ	quan-cam-le	16.0153669	108.1962362	Quận	48	\N	\N
497	Huyện Hòa Vang	huyen-hoa-vang	15.999988	108.1457994	Huyện	48	\N	\N
498	Huyện Hoàng Sa	huyen-hoang-sa	16.064571	108.222148	Huyện	48	\N	\N
502	Thành phố Tam Kỳ	thanh-pho-tam-ky	15.5638825	108.4786313	Thành phố	49	\N	\N
503	Thành phố Hội An	thanh-pho-hoi-an	15.8800584	108.3380469	Thành phố	49	\N	\N
504	Huyện Tây Giang	huyen-tay-giang	15.8852628	107.4890302	Huyện	49	\N	\N
505	Huyện Đông Giang	huyen-dong-giang	15.9660249	107.7831632	Huyện	49	\N	\N
506	Huyện Đại Lộc	huyen-dai-loc	15.8497875	108.0668661	Huyện	49	\N	\N
507	Thị xã Điện Bàn	thi-xa-dien-ban	15.9072569	108.224595	Thị xã	49	\N	\N
508	Huyện Duy Xuyên	huyen-duy-xuyen	15.77511	108.1665855	Huyện	49	\N	\N
509	Huyện Quế Sơn	huyen-que-son	15.6848385	108.1665855	Huyện	49	\N	\N
510	Huyện Nam Giang	huyen-nam-giang	15.6628546	107.6215321	Huyện	49	\N	\N
511	Huyện Phước Sơn	huyen-phuoc-son	15.3762517	107.811	Huyện	49	\N	\N
512	Huyện Hiệp Đức	huyen-hiep-duc	15.5590682	108.0805694	Huyện	49	\N	\N
513	Huyện Thăng Bình	huyen-thang-binh	15.6890346	108.3801314	Huyện	49	\N	\N
514	Huyện Tiên Phước	huyen-tien-phuoc	15.4964006	108.2614775	Huyện	49	\N	\N
515	Huyện Bắc Trà My	huyen-bac-tra-my	15.3202715	108.214028	Huyện	49	\N	\N
516	Huyện Nam Trà My	huyen-nam-tra-my	15.0826614	108.0954351	Huyện	49	\N	\N
517	Huyện Núi Thành	huyen-nui-thanh	15.4229422	108.5938124	Huyện	49	\N	\N
518	Huyện Phú Ninh	huyen-phu-ninh	15.5743256	108.4038672	Huyện	49	\N	\N
519	Huyện Nông Sơn	huyen-nong-son	15.6557978	107.9768875	Huyện	49	\N	\N
522	Thành phố Quảng Ngãi	thanh-pho-quang-ngai	15.1213873	108.8044145	Thành phố	51	\N	\N
524	Huyện Bình Sơn	huyen-binh-son	15.3166491	108.7838572	Huyện	51	\N	\N
525	Huyện Trà Bồng	huyen-tra-bong	15.2512645	108.4988269	Huyện	51	\N	\N
526	Huyện Tây Trà	huyen-tay-tra	15.1734012	108.3563972	Huyện	51	\N	\N
527	Huyện Sơn Tịnh	huyen-son-tinh	15.1860945	108.736337	Huyện	51	\N	\N
528	Huyện Tư Nghĩa	huyen-tu-nghia	15.1065785	108.7482165	Huyện	51	\N	\N
529	Huyện Sơn Hà	huyen-son-ha	15.0431944	108.5700636	Huyện	51	\N	\N
530	Huyện Sơn Tây	huyen-son-tay	14.9488528	108.3563972	Huyện	51	\N	\N
531	Huyện Minh Long	huyen-minh-long	14.9659262	108.6888227	Huyện	51	\N	\N
532	Huyện Nghĩa Hành	huyen-nghia-hanh	15.0026852	108.7838572	Huyện	51	\N	\N
533	Huyện Mộ Đức	huyen-mo-duc	14.9498041	108.878915	Huyện	51	\N	\N
534	Huyện Đức Phổ	huyen-duc-pho	14.762796	108.9739954	Huyện	51	\N	\N
535	Huyện Ba Tơ	huyen-ba-to	14.7663789	108.6650678	Huyện	51	\N	\N
536	Huyện Lý Sơn	huyen-ly-son	15.383361	109.1107114	Huyện	51	\N	\N
540	Thành phố Qui Nhơn	thanh-pho-qui-nhon	13.7829673	109.2196634	Thành phố	52	\N	\N
542	Huyện An Lão	huyen-an-lao	14.5717294	108.8551484	Huyện	52	\N	\N
543	Huyện Hoài Nhơn	huyen-hoai-nhon	14.4666386	109.04532	Huyện	52	\N	\N
544	Huyện Hoài Ân	huyen-hoai-an	14.3040385	108.8551484	Huyện	52	\N	\N
545	Huyện Phù Mỹ	huyen-phu-my	14.2157645	109.1166566	Huyện	52	\N	\N
546	Huyện Vĩnh Thạnh	huyen-vinh-thanh	14.2468401	108.736337	Huyện	52	\N	\N
547	Huyện Tây Sơn	huyen-tay-son	13.9479428	108.8551484	Huyện	52	\N	\N
548	Huyện Phù Cát	huyen-phu-cat	14.0134002	109.0547476	Huyện	52	\N	\N
549	Thị xã An Nhơn	thi-xa-an-nhon	13.8641717	109.0690976	Thị xã	52	\N	\N
550	Huyện Tuy Phước	huyen-tuy-phuoc	13.8565034	109.1642208	Huyện	52	\N	\N
551	Huyện Vân Canh	huyen-van-canh	13.674033	108.9502232	Huyện	52	\N	\N
555	Thành phố Tuy Hoà	thanh-pho-tuy-hoa	13.1057062	109.295048	Thành phố	54	\N	\N
557	Thị xã Sông Cầu	thi-xa-song-cau	13.4744193	109.2355764	Thị xã	54	\N	\N
558	Huyện Đồng Xuân	huyen-dong-xuan	13.4083074	108.9502232	Huyện	54	\N	\N
559	Huyện Tuy An	huyen-tuy-an	13.297735	109.2355764	Huyện	54	\N	\N
560	Huyện Sơn Hòa	huyen-son-hoa	13.1431691	108.9502232	Huyện	54	\N	\N
561	Huyện Sông Hinh	huyen-song-hinh	12.8786353	108.9502232	Huyện	54	\N	\N
562	Huyện Tây Hoà	huyen-tay-hoa	12.9285815	109.1642208	Huyện	54	\N	\N
563	Huyện Phú Hoà	huyen-phu-hoa	13.0606953	109.1642208	Huyện	54	\N	\N
564	Huyện Đông Hòa	huyen-dong-hoa	12.9580642	109.354527	Huyện	54	\N	\N
568	Thành phố Nha Trang	thanh-pho-nha-trang	12.2387911	109.1967488	Thành phố	56	\N	\N
569	Thành phố Cam Ranh	thanh-pho-cam-ranh	11.9008657	109.140438	Thành phố	56	\N	\N
570	Huyện Cam Lâm	huyen-cam-lam	12.07539	109.140438	Huyện	56	\N	\N
571	Huyện Vạn Ninh	huyen-van-ninh	12.7243439	109.2626992	Huyện	56	\N	\N
572	Thị xã Ninh Hòa	thi-xa-ninh-hoa	12.512997	109.140438	Thị xã	56	\N	\N
573	Huyện Khánh Vĩnh	huyen-khanh-vinh	12.2705951	108.8551484	Huyện	56	\N	\N
574	Huyện Diên Khánh	huyen-dien-khanh	12.2570417	109.04532	Huyện	56	\N	\N
575	Huyện Khánh Sơn	huyen-khanh-son	12.0249415	108.9264524	Huyện	56	\N	\N
576	Huyện Trường Sa	huyen-truong-sa	11.9144477	109.1340369	Huyện	56	\N	\N
582	Thành phố Phan Rang-Tháp Chàm	thanh-pho-phan-rang-thap-cham	11.5825677	108.9912066	Thành phố	58	\N	\N
584	Huyện Bác Ái	huyen-bac-ai	11.8334154	108.8551484	Huyện	58	\N	\N
585	Huyện Ninh Sơn	huyen-ninh-son	11.6888699	108.736337	Huyện	58	\N	\N
586	Huyện Ninh Hải	huyen-ninh-hai	11.7032481	109.1642208	Huyện	58	\N	\N
587	Huyện Ninh Phước	huyen-ninh-phuoc	11.4850435	108.8551484	Huyện	58	\N	\N
588	Huyện Thuận Bắc	huyen-thuan-bac	11.7533327	109.0690976	Huyện	58	\N	\N
589	Huyện Thuận Nam	huyen-thuan-nam	11.5226322	108.9262696	Huyện	58	\N	\N
593	Thành phố Phan Thiết	thanh-pho-phan-thiet	10.9804603	108.2614775	Thành phố	60	\N	\N
594	Thị xã La Gi	thi-xa-la-gi	10.71574	107.7991545	Thị xã	60	\N	\N
595	Huyện Tuy Phong	huyen-tuy-phong	11.3178827	108.6579603	Huyện	60	\N	\N
596	Huyện Bắc Bình	huyen-bac-binh	11.2551834	108.3801314	Huyện	60	\N	\N
597	Huyện Hàm Thuận Bắc	huyen-ham-thuan-bac	11.1116858	108.1319634	Huyện	60	\N	\N
598	Huyện Hàm Thuận Nam	huyen-ham-thuan-nam	10.8502937	107.9057813	Huyện	60	\N	\N
599	Huyện Tánh Linh	huyen-tanh-linh	11.0980639	107.678501	Huyện	60	\N	\N
600	Huyện Đức Linh	huyen-duc-linh	11.1977289	107.5505152	Huyện	60	\N	\N
601	Huyện Hàm Tân	huyen-ham-tan	10.6935927	107.6215321	Huyện	60	\N	\N
602	Huyện Phú Quí	huyen-phu-qui	10.5335281	108.9442804	Huyện	60	\N	\N
608	Thành phố Kon Tum	thanh-pho-kon-tum	14.3497403	108.0004606	Thành phố	62	\N	\N
610	Huyện Đắk Glei	huyen-dak-glei	15.113472	107.71625	Huyện	62	\N	\N
611	Huyện Ngọc Hồi	huyen-ngoc-hoi	14.6710249	107.6215321	Huyện	62	\N	\N
612	Huyện Đắk Tô	huyen-dak-to	14.6562021	107.811	Huyện	62	\N	\N
613	Huyện Kon Plông	huyen-kon-plong	14.7976892	108.2852049	Huyện	62	\N	\N
614	Huyện Kon Rẫy	huyen-kon-ray	14.5607568	108.1665855	Huyện	62	\N	\N
615	Huyện Đắk Hà	huyen-dak-ha	14.641214	108.0005933	Huyện	62	\N	\N
616	Huyện Sa Thầy	huyen-sa-thay	14.4355779	107.763621	Huyện	62	\N	\N
617	Huyện Tu Mơ Rông	huyen-tu-mo-rong	14.9105786	108.0005933	Huyện	62	\N	\N
618	Huyện Ia H' Drai	huyen-ia-h-drai	14.0189165	107.4477032	Huyện	62	\N	\N
622	Thành phố Pleiku	thanh-pho-pleiku	13.9718356	108.0150796	Thành phố	64	\N	\N
623	Thị xã An Khê	thi-xa-an-khe	14.0279256	108.6888227	Thị xã	64	\N	\N
624	Thị xã Ayun Pa	thi-xa-ayun-pa	13.3743393	108.3989809	Thị xã	64	\N	\N
625	Huyện KBang	huyen-kbang	14.3348056	108.4750846	Huyện	64	\N	\N
626	Huyện Đăk Đoa	huyen-dak-doa	14.1135412	108.1665855	Huyện	64	\N	\N
627	Huyện Chư Păh	huyen-chu-pah	14.1765309	107.9294815	Huyện	64	\N	\N
628	Huyện Ia Grai	huyen-ia-grai	13.9539099	107.6215321	Huyện	64	\N	\N
629	Huyện Mang Yang	huyen-mang-yang	13.9928022	108.2852049	Huyện	64	\N	\N
630	Huyện Kông Chro	huyen-kong-chro	13.7037218	108.5700636	Huyện	64	\N	\N
631	Huyện Đức Cơ	huyen-duc-co	13.7752327	107.6215321	Huyện	64	\N	\N
632	Huyện Chư Prông	huyen-chu-prong	13.541918	107.763621	Huyện	64	\N	\N
633	Huyện Chư Sê	huyen-chu-se	13.7399629	108.0954351	Huyện	64	\N	\N
634	Huyện Đăk Pơ	huyen-dak-po	13.946425	108.5938124	Huyện	64	\N	\N
635	Huyện Ia Pa	huyen-ia-pa	13.5261514	108.5700636	Huyện	64	\N	\N
637	Huyện Krông Pa	huyen-krong-pa	13.2160038	108.6726891	Huyện	64	\N	\N
638	Huyện Phú Thiện	huyen-phu-thien	13.4589308	108.2852049	Huyện	64	\N	\N
639	Huyện Chư Pưh	huyen-chu-puh	13.4730527	108.0954351	Huyện	64	\N	\N
643	Thành phố Buôn Ma Thuột	thanh-pho-buon-ma-thuot	12.6661944	108.0382475	Thành phố	66	\N	\N
644	Thị Xã Buôn Hồ	thi-xa-buon-ho	12.8628297	108.2614775	Thị xã	66	\N	\N
645	Huyện Ea H'leo	huyen-ea-hleo	13.1998141	108.1903059	Huyện	66	\N	\N
646	Huyện Ea Súp	huyen-ea-sup	13.1862227	107.763621	Huyện	66	\N	\N
647	Huyện Buôn Đôn	huyen-buon-don	12.8791607	107.71625	Huyện	66	\N	\N
648	Huyện Cư M'gar	huyen-cu-mgar	12.8525649	108.0954351	Huyện	66	\N	\N
649	Huyện Krông Búk	huyen-krong-buk	13.0226831	108.1903059	Huyện	66	\N	\N
650	Huyện Krông Năng	huyen-krong-nang	13.0089192	108.3801314	Huyện	66	\N	\N
651	Huyện Ea Kar	huyen-ea-kar	12.7981778	108.5463165	Huyện	66	\N	\N
652	Huyện M'Đrắk	huyen-mdrak	12.7165586	108.7600963	Huyện	66	\N	\N
653	Huyện Krông Bông	huyen-krong-bong	12.473032	108.4750846	Huyện	66	\N	\N
654	Huyện Krông Pắc	huyen-krong-pac	12.7439968	108.3801314	Huyện	66	\N	\N
655	Huyện Krông A Na	huyen-krong-a-na	12.4823793	108.024301	Huyện	66	\N	\N
656	Huyện Lắk	huyen-lak	12.3169361	108.1903059	Huyện	66	\N	\N
657	Huyện Cư Kuin	huyen-cu-kuin	12.5810594	108.1903059	Huyện	66	\N	\N
660	Thị xã Gia Nghĩa	thi-xa-gia-nghia	12.0036455	107.6876481	Thị xã	67	\N	\N
661	Huyện Đăk Glong	huyen-dak-glong	12.1013642	107.8023543	Huyện	67	\N	\N
662	Huyện Cư Jút	huyen-cu-jut	12.657282	107.8656124	Huyện	67	\N	\N
663	Huyện Đắk Mil	huyen-dak-mil	12.5049537	107.6925674	Huyện	67	\N	\N
664	Huyện Krông Nô	huyen-krong-no	12.3426475	107.811	Huyện	67	\N	\N
665	Huyện Đắk Song	huyen-dak-song	12.2328311	107.6216789	Huyện	67	\N	\N
666	Huyện Đắk R'Lấp	huyen-dak-rlap	11.9213338	107.5268471	Huyện	67	\N	\N
667	Huyện Tuy Đức	huyen-tuy-duc	12.1576117	107.4342313	Huyện	67	\N	\N
672	Thành phố Đà Lạt	thanh-pho-da-lat	11.9404192	108.4583132	Thành phố	68	\N	\N
673	Thành phố Bảo Lộc	thanh-pho-bao-loc	11.5731051	107.8346924	Thành phố	68	\N	\N
674	Huyện Đam Rông	huyen-dam-rong	12.0598218	108.0954351	Huyện	68	\N	\N
675	Huyện Lạc Dương	huyen-lac-duong	12.1218309	108.4750846	Huyện	68	\N	\N
676	Huyện Lâm Hà	huyen-lam-ha	11.7906825	108.1903059	Huyện	68	\N	\N
677	Huyện Đơn Dương	huyen-don-duong	11.7452329	108.5463165	Huyện	68	\N	\N
678	Huyện Đức Trọng	huyen-duc-trong	11.641927	108.3102916	Huyện	68	\N	\N
679	Huyện Di Linh	huyen-di-linh	11.5346745	108.0954351	Huyện	68	\N	\N
680	Huyện Bảo Lâm	huyen-bao-lam	11.7337863	107.71625	Huyện	68	\N	\N
681	Huyện Đạ Huoai	huyen-da-huoai	11.4101516	107.6452085	Huyện	68	\N	\N
682	Huyện Đạ Tẻh	huyen-da-teh	11.5238408	107.485433	Huyện	68	\N	\N
683	Huyện Cát Tiên	huyen-cat-tien	11.6903361	107.36123	Huyện	68	\N	\N
688	Thị xã Phước Long	thi-xa-phuoc-long	11.8337331	106.9948945	Thị xã	70	\N	\N
689	Thị xã Đồng Xoài	thi-xa-dong-xoai	11.536023	106.8908253	Thị xã	70	\N	\N
690	Thị xã Bình Long	thi-xa-binh-long	11.6922032	106.6055534	Thị xã	70	\N	\N
691	Huyện Bù Gia Mập	huyen-bu-gia-map	12.0392238	107.0539434	Huyện	70	\N	\N
692	Huyện Lộc Ninh	huyen-loc-ninh	11.803677	106.5819789	Huyện	70	\N	\N
693	Huyện Bù Đốp	huyen-bu-dop	11.9891869	106.7942405	Huyện	70	\N	\N
694	Huyện Hớn Quản	huyen-hon-quan	11.6014622	106.6527099	Huyện	70	\N	\N
695	Huyện Đồng Phú	huyen-dong-phu	11.5123355	106.9905473	Huyện	70	\N	\N
696	Huyện Bù Đăng	huyen-bu-dang	11.7693374	107.1484521	Huyện	70	\N	\N
697	Huyện Chơn Thành	huyen-chon-thanh	11.4696902	106.6527099	Huyện	70	\N	\N
698	Huyện Phú Riềng	huyen-phu-rieng	11.6827356	106.9459494	Huyện	70	\N	\N
703	Thành phố Tây Ninh	thanh-pho-tay-ninh	11.3675415	106.1192802	Thành phố	72	\N	\N
705	Huyện Tân Biên	huyen-tan-bien	11.572115	106.0169971	Huyện	72	\N	\N
706	Huyện Tân Châu	huyen-tan-chau	11.5614393	106.2051484	Huyện	72	\N	\N
707	Huyện Dương Minh Châu	huyen-duong-minh-chau	11.3595908	106.2757514	Huyện	72	\N	\N
708	Huyện Châu Thành	huyen-chau-thanh	11.3081393	106.0169971	Huyện	72	\N	\N
709	Huyện Hòa Thành	huyen-hoa-thanh	11.2680459	106.1463317	Huyện	72	\N	\N
710	Huyện Gò Dầu	huyen-go-dau	11.1402783	106.2757514	Huyện	72	\N	\N
711	Huyện Bến Cầu	huyen-ben-cau	11.1506368	106.0875326	Huyện	72	\N	\N
712	Huyện Trảng Bàng	huyen-trang-bang	11.0328111	106.3645677	Huyện	72	\N	\N
718	Thành phố Thủ Dầu Một	thanh-pho-thu-dau-mot	10.9929842	106.6557073	Thành phố	74	\N	\N
719	Huyện Bàu Bàng	huyen-bau-bang	11.2443985	106.6331774	Huyện	74	\N	\N
720	Huyện Dầu Tiếng	huyen-dau-tieng	11.348909	106.4641459	Huyện	74	\N	\N
721	Thị xã Bến Cát	thi-xa-ben-cat	11.101302	106.5819789	Thị xã	74	\N	\N
722	Huyện Phú Giáo	huyen-phu-giao	11.2655822	106.7706458	Huyện	74	\N	\N
723	Thị xã Tân Uyên	thi-xa-tan-uyen	11.0715863	106.6943524	Thị xã	74	\N	\N
724	Thị xã Dĩ An	thi-xa-di-an	10.9155965	106.7692013	Thị xã	74	\N	\N
725	Thị xã Thuận An	thi-xa-thuan-an	10.9302095	106.71167	Thị xã	74	\N	\N
726	Huyện Bắc Tân Uyên	huyen-bac-tan-uyen	11.1498901	106.8440007	Huyện	74	\N	\N
731	Thành phố Biên Hòa	thanh-pho-bien-hoa	10.9574128	106.8426871	Thành phố	75	\N	\N
732	Thị xã Long Khánh	thi-xa-long-khanh	10.9442612	107.2311774	Thị xã	75	\N	\N
734	Huyện Tân Phú	huyen-tan-phu	11.4275308	107.36123	Huyện	75	\N	\N
735	Huyện Vĩnh Cửu	huyen-vinh-cuu	11.3049005	107.0605278	Huyện	75	\N	\N
736	Huyện Định Quán	huyen-dinh-quan	11.1576779	107.2740528	Huyện	75	\N	\N
737	Huyện Trảng Bom	huyen-trang-bom	10.9667039	107.0303221	Huyện	75	\N	\N
738	Huyện Thống Nhất	huyen-thong-nhat	10.994359	107.1547158	Huyện	75	\N	\N
739	Huyện Cẩm Mỹ	huyen-cam-my	10.8225699	107.2666396	Huyện	75	\N	\N
740	Huyện Long Thành	huyen-long-thanh	10.7932946	107.0135297	Huyện	75	\N	\N
741	Huyện Xuân Lộc	huyen-xuan-loc	10.9652026	107.4321959	Huyện	75	\N	\N
742	Huyện Nhơn Trạch	huyen-nhon-trach	10.6968843	106.8907696	Huyện	75	\N	\N
747	Thành phố Vũng Tàu	thanh-pho-vung-tau	10.4113797	107.136224	Thành phố	77	\N	\N
748	Thành phố Bà Rịa	thanh-pho-ba-ria	10.508928	107.1816257	Thành phố	77	\N	\N
750	Huyện Châu Đức	huyen-chau-duc	10.6284702	107.2429976	Huyện	77	\N	\N
751	Huyện Xuyên Mộc	huyen-xuyen-moc	10.6177683	107.4321959	Huyện	77	\N	\N
752	Huyện Long Điền	huyen-long-dien	10.4449241	107.2311774	Huyện	77	\N	\N
753	Huyện Đất Đỏ	huyen-dat-do	10.4728035	107.3139304	Huyện	77	\N	\N
754	Huyện Tân Thành	huyen-tan-thanh	10.5640726	107.0595233	Huyện	77	\N	\N
755	Huyện Côn Đảo	huyen-con-dao	8.7009282	106.6114474	Huyện	77	\N	\N
760	Quận 1	quan-1	10.7756587	106.7004238	Quận	79	\N	\N
761	Quận 12	quan-12	10.8671531	106.6413322	Quận	79	\N	\N
762	Quận Thủ Đức	quan-thu-duc	10.8494094	106.7537055	Quận	79	\N	\N
763	Quận 9	quan-9	10.8428402	106.8286851	Quận	79	\N	\N
764	Quận Gò Vấp	quan-go-vap	10.8386779	106.6652904	Quận	79	\N	\N
765	Quận Bình Thạnh	quan-binh-thanh	10.8105831	106.7091422	Quận	79	\N	\N
766	Quận Tân Bình	quan-tan-binh	10.8014659	106.6525974	Quận	79	\N	\N
767	Quận Tân Phú	quan-tan-phu	10.7900517	106.6281901	Quận	79	\N	\N
768	Quận Phú Nhuận	quan-phu-nhuan	10.7991944	106.6802639	Quận	79	\N	\N
769	Quận 2	quan-2	10.7872729	106.7498105	Quận	79	\N	\N
770	Quận 3	quan-3	10.7843695	106.6844089	Quận	79	\N	\N
771	Quận 10	quan-10	10.7745965	106.6679542	Quận	79	\N	\N
772	Quận 11	quan-11	10.7629739	106.650084	Quận	79	\N	\N
773	Quận 4	quan-4	10.7578263	106.7012968	Quận	79	\N	\N
774	Quận 5	quan-5	10.7540279	106.6633746	Quận	79	\N	\N
775	Quận 6	quan-6	10.7480929	106.6352362	Quận	79	\N	\N
776	Quận 8	quan-8	10.7240878	106.6286259	Quận	79	\N	\N
777	Quận Bình Tân	quan-binh-tan	10.7652581	106.6038535	Quận	79	\N	\N
778	Quận 7	quan-7	10.7340344	106.7215787	Quận	79	\N	\N
783	Huyện Củ Chi	huyen-cu-chi	11.0066683	106.5131967	Huyện	79	\N	\N
784	Huyện Hóc Môn	huyen-hoc-mon	10.8839675	106.5870611	Huyện	79	\N	\N
785	Huyện Bình Chánh	huyen-binh-chanh	10.687392	106.5938538	Huyện	79	\N	\N
786	Huyện Nhà Bè	huyen-nha-be	10.6952642	106.704874	Huyện	79	\N	\N
787	Huyện Cần Giờ	huyen-can-gio	10.5083266	106.8635004	Huyện	79	\N	\N
794	Thành phố Tân An	thanh-pho-tan-an	10.5330098	106.4052541	Thành phố	80	\N	\N
795	Thị xã Kiến Tường	thi-xa-kien-tuong	10.7667086	105.8994956	Thị xã	80	\N	\N
796	Huyện Tân Hưng	huyen-tan-hung	10.8226522	105.6647142	Huyện	80	\N	\N
797	Huyện Vĩnh Hưng	huyen-vinh-hung	10.9028612	105.8055471	Huyện	80	\N	\N
798	Huyện Mộc Hóa	huyen-moc-hoa	10.7642485	105.9464874	Huyện	80	\N	\N
799	Huyện Tân Thạnh	huyen-tan-thanh	10.6078027	106.0169971	Huyện	80	\N	\N
800	Huyện Thạnh Hóa	huyen-thanh-hoa	10.664587	106.1816196	Huyện	80	\N	\N
801	Huyện Đức Huệ	huyen-duc-hue	10.8777796	106.2757514	Huyện	80	\N	\N
802	Huyện Đức Hòa	huyen-duc-hoa	10.9023378	106.418534	Huyện	80	\N	\N
803	Huyện Bến Lức	huyen-ben-luc	10.641162	106.4856006	Huyện	80	\N	\N
804	Huyện Thủ Thừa	huyen-thu-thua	10.7006857	106.3228338	Huyện	80	\N	\N
805	Huyện Tân Trụ	huyen-tan-tru	10.5280095	106.4994889	Huyện	80	\N	\N
806	Huyện Cần Đước	huyen-can-duoc	10.5549448	106.6055534	Huyện	80	\N	\N
807	Huyện Cần Giuộc	huyen-can-giuoc	10.6009679	106.6650358	Huyện	80	\N	\N
808	Huyện Châu Thành	huyen-chau-thanh	10.4640645	106.4759262	Huyện	80	\N	\N
815	Thành phố Mỹ Tho	thanh-pho-my-tho	10.3765284	106.3438891	Thành phố	82	\N	\N
816	Thị xã Gò Công	thi-xa-go-cong	10.4106494	106.6645007	Thị xã	82	\N	\N
817	Thị xã Cai Lậy	thi-xa-cai-lay	10.4050639	106.1186715	Huyện	82	\N	\N
818	Huyện Tân Phước	huyen-tan-phuoc	10.5314211	106.22868	Huyện	82	\N	\N
819	Huyện Cái Bè	huyen-cai-be	10.3718873	105.9464874	Huyện	82	\N	\N
820	Huyện Cai Lậy	huyen-cai-lay	10.4287401	106.1110501	Thị xã	82	\N	\N
821	Huyện Châu Thành	huyen-chau-thanh	10.4009358	106.22868	Huyện	82	\N	\N
822	Huyện Chợ Gạo	huyen-cho-gao	10.3793903	106.4541903	Huyện	82	\N	\N
823	Huyện Gò Công Tây	huyen-go-cong-tay	10.3378629	106.6055534	Huyện	82	\N	\N
824	Huyện Gò Công Đông	huyen-go-cong-dong	10.3737254	106.7470536	Huyện	82	\N	\N
825	Huyện Tân Phú Đông	huyen-tan-phu-dong	10.2462427	106.6998767	Huyện	82	\N	\N
829	Thành phố Bến Tre	thanh-pho-ben-tre	10.241361	106.3762601	Thành phố	83	\N	\N
831	Huyện Châu Thành	huyen-chau-thanh	10.3067813	106.3699271	Huyện	83	\N	\N
832	Huyện Chợ Lách	huyen-cho-lach	10.241094	106.1698563	Huyện	83	\N	\N
833	Huyện Mỏ Cày Nam	huyen-mo-cay-nam	10.0468396	106.3699271	Huyện	83	\N	\N
834	Huyện Giồng Trôm	huyen-giong-trom	10.1718844	106.4641459	Huyện	83	\N	\N
835	Huyện Bình Đại	huyen-binh-dai	10.1596899	106.6998767	Huyện	83	\N	\N
836	Huyện Ba Tri	huyen-ba-tri	10.0417849	106.5936741	Huyện	83	\N	\N
837	Huyện Thạnh Phú	huyen-thanh-phu	9.9077234	106.5584071	Huyện	83	\N	\N
838	Huyện Mỏ Cày Bắc	huyen-mo-cay-bac	10.1700758	106.287521	Huyện	83	\N	\N
842	Thành phố Trà Vinh	thanh-pho-tra-vinh	9.9513316	106.3346061	Thành phố	84	\N	\N
844	Huyện Càng Long	huyen-cang-long	9.9674087	106.22868	Huyện	84	\N	\N
845	Huyện Cầu Kè	huyen-cau-ke	9.8878863	106.0875326	Huyện	84	\N	\N
846	Huyện Tiểu Cần	huyen-tieu-can	9.7969156	106.1816196	Huyện	84	\N	\N
847	Huyện Châu Thành	huyen-chau-thanh	9.8331585	106.3228338	Huyện	84	\N	\N
848	Huyện Cầu Ngang	huyen-cau-ngang	9.7830517	106.4641459	Huyện	84	\N	\N
849	Huyện Trà Cú	huyen-tra-cu	9.7060851	106.2757514	Huyện	84	\N	\N
850	Huyện Duyên Hải	huyen-duyen-hai	9.6311842	106.4877072	Huyện	84	\N	\N
851	Thị xã Duyên Hải	thi-xa-duyen-hai	9.6311842	106.4877072	Thị xã	84	\N	\N
855	Thành phố Vĩnh Long	thanh-pho-vinh-long	10.2448442	105.958865	Thành phố	86	\N	\N
857	Huyện Long Hồ	huyen-long-ho	10.1980682	105.9464874	Huyện	86	\N	\N
858	Huyện Mang Thít	huyen-mang-thit	10.18076	106.0757749	Huyện	86	\N	\N
859	Huyện  Vũng Liêm	huyen-vung-liem	10.058632	106.1345705	Huyện	86	\N	\N
860	Huyện Tam Bình	huyen-tam-binh	10.0679356	105.9464874	Huyện	86	\N	\N
861	Thị xã Bình Minh	thi-xa-binh-minh	10.029192	105.8525154	Thị xã	86	\N	\N
862	Huyện Trà Ôn	huyen-tra-on	9.9789961	105.993491	Huyện	86	\N	\N
863	Huyện Bình Tân	huyen-binh-tan	10.1218894	105.7728863	Huyện	86	\N	\N
866	Thành phố Cao Lãnh	thanh-pho-cao-lanh	10.4549723	105.6340352	Thành phố	87	\N	\N
867	Thành phố Sa Đéc	thanh-pho-sa-dec	10.3057678	105.7468535	Thành phố	87	\N	\N
868	Thị xã Hồng Ngự	thi-xa-hong-ngu	10.8255238	105.3950939	Thị xã	87	\N	\N
869	Huyện Tân Hồng	huyen-tan-hong	10.876115	105.4771084	Huyện	87	\N	\N
870	Huyện Hồng Ngự	huyen-hong-ngu	10.7979866	105.2897042	Huyện	87	\N	\N
871	Huyện Tam Nông	huyen-tam-nong	10.7192793	105.5474373	Huyện	87	\N	\N
872	Huyện Tháp Mười	huyen-thap-muoi	10.5302706	105.8290298	Huyện	87	\N	\N
873	Huyện Cao Lãnh	huyen-cao-lanh	10.4659577	105.7059785	Huyện	87	\N	\N
874	Huyện Thanh Bình	huyen-thanh-binh	10.6135294	105.4771084	Huyện	87	\N	\N
875	Huyện Lấp Vò	huyen-lap-vo	10.3578054	105.6308159	Huyện	87	\N	\N
876	Huyện Lai Vung	huyen-lai-vung	10.255455	105.6647142	Huyện	87	\N	\N
877	Huyện Châu Thành	huyen-chau-thanh	10.2050554	105.8055471	Huyện	87	\N	\N
883	Thành phố Long Xuyên	thanh-pho-long-xuyen	10.3759416	105.4185406	Thành phố	89	\N	\N
884	Thành phố Châu Đốc	thanh-pho-chau-doc	10.6820814	105.0823967	Thành phố	89	\N	\N
886	Huyện An Phú	huyen-an-phu	10.8512167	105.1025075	Huyện	89	\N	\N
887	Thị xã Tân Châu	thi-xa-tan-chau	10.8026827	105.1960795	Thị xã	89	\N	\N
888	Huyện Phú Tân	huyen-phu-tan	10.5942654	105.3528491	Huyện	89	\N	\N
889	Huyện Châu Phú	huyen-chau-phu	10.5630265	105.1726816	Huyện	89	\N	\N
890	Huyện Tịnh Biên	huyen-tinh-bien	10.549107	105.0089888	Huyện	89	\N	\N
891	Huyện Tri Tôn	huyen-tri-ton	10.3972321	104.9856176	Huyện	89	\N	\N
892	Huyện Châu Thành	huyen-chau-thanh	10.4377694	105.3892372	Huyện	89	\N	\N
893	Huyện Chợ Mới	huyen-cho-moi	10.4825247	105.4771084	Huyện	89	\N	\N
894	Huyện Thoại Sơn	huyen-thoai-son	10.2595103	105.2608002	Huyện	89	\N	\N
899	Thành phố Rạch Giá	thanh-pho-rach-gia	10.021507	105.0910974	Thành phố	91	\N	\N
900	Thị xã Hà Tiên	thi-xa-ha-tien	10.381909	104.4901728	Thị xã	91	\N	\N
902	Huyện Kiên Lương	huyen-kien-luong	10.3043903	104.6354631	Huyện	91	\N	\N
903	Huyện Hòn Đất	huyen-hon-dat	10.2227003	104.9856176	Huyện	91	\N	\N
904	Huyện Tân Hiệp	huyen-tan-hiep	10.1154358	105.2834404	Huyện	91	\N	\N
905	Huyện Châu Thành	huyen-chau-thanh	9.8889535	105.1492869	Huyện	91	\N	\N
906	Huyện Giồng Riềng	huyen-giong-rieng	9.9238222	105.3728845	Huyện	91	\N	\N
907	Huyện Gò Quao	huyen-go-quao	9.7525077	105.2897042	Huyện	91	\N	\N
908	Huyện An Biên	huyen-an-bien	9.8064559	105.0557415	Huyện	91	\N	\N
909	Huyện An Minh	huyen-an-minh	9.6647183	104.9495651	Huyện	91	\N	\N
910	Huyện Vĩnh Thuận	huyen-vinh-thuan	9.5384134	105.2428853	Huyện	91	\N	\N
911	Huyện Phú Quốc	huyen-phu-quoc	10.1586245	103.98402	Huyện	91	\N	\N
912	Huyện Kiên Hải	huyen-kien-hai	9.8091362	104.6296338	Huyện	91	\N	\N
913	Huyện U Minh Thượng	huyen-u-minh-thuong	9.6311125	105.1025075	Huyện	91	\N	\N
914	Huyện Giang Thành	huyen-giang-thanh	10.4771358	104.6821048	Huyện	91	\N	\N
916	Quận Ninh Kiều	quan-ninh-kieu	10.0272537	105.7698039	Quận	92	\N	\N
917	Quận Ô Môn	quan-o-mon	10.1164943	105.6326457	Quận	92	\N	\N
918	Quận Bình Thuỷ	quan-binh-thuy	10.0622567	105.7381017	Quận	92	\N	\N
919	Quận Cái Răng	quan-cai-rang	9.9992392	105.8043572	Quận	92	\N	\N
923	Quận Thốt Nốt	quan-thot-not	10.2405338	105.5336815	Quận	92	\N	\N
924	Huyện Vĩnh Thạnh	huyen-vinh-thanh	10.2322696	105.3987034	Huyện	92	\N	\N
925	Huyện Cờ Đỏ	huyen-co-do	10.0972302	105.4304423	Huyện	92	\N	\N
926	Huyện Phong Điền	huyen-phong-dien	9.9967657	105.6686611	Huyện	92	\N	\N
927	Huyện Thới Lai	huyen-thoi-lai	10.0681881	105.5599728	Huyện	92	\N	\N
930	Thành phố Vị Thanh	thanh-pho-vi-thanh	9.7731921	105.4537082	Thành phố	93	\N	\N
931	Thị xã Ngã Bảy	thi-xa-nga-bay	9.8252566	105.8172881	Thị xã	93	\N	\N
932	Huyện Châu Thành A	huyen-chau-thanh-a	9.926726	105.6315594	Huyện	93	\N	\N
933	Huyện Châu Thành	huyen-chau-thanh	9.9216255	105.8073554	Huyện	93	\N	\N
934	Huyện Phụng Hiệp	huyen-phung-hiep	9.7762126	105.7116464	Huyện	93	\N	\N
935	Huyện Vị Thuỷ	huyen-vi-thuy	9.8260824	105.5708865	Huyện	93	\N	\N
936	Huyện Long Mỹ	huyen-long-my	9.6552847	105.5239912	Huyện	93	\N	\N
937	Thị xã Long Mỹ	thi-xa-long-my	9.669597	105.5650239	Thị xã	93	\N	\N
941	Thành phố Sóc Trăng	thanh-pho-soc-trang	9.602521	105.9739049	Thành phố	94	\N	\N
942	Huyện Châu Thành	huyen-chau-thanh	9.6809726	105.8994956	Huyện	94	\N	\N
943	Huyện Kế Sách	huyen-ke-sach	9.8310108	105.92299	Huyện	94	\N	\N
944	Huyện Mỹ Tú	huyen-my-tu	9.599104	105.8055471	Huyện	94	\N	\N
945	Huyện Cù Lao Dung	huyen-cu-lao-dung	9.5791522	106.22868	Huyện	94	\N	\N
946	Huyện Long Phú	huyen-long-phu	9.6289421	106.0875326	Huyện	94	\N	\N
947	Huyện Mỹ Xuyên	huyen-my-xuyen	9.4655111	105.8994956	Huyện	94	\N	\N
948	Thị xã Ngã Năm	thi-xa-nga-nam	9.5215171	105.6177942	Thị xã	94	\N	\N
949	Huyện Thạnh Trị	huyen-thanh-tri	9.4741407	105.7116464	Huyện	94	\N	\N
950	Thị xã Vĩnh Châu	thi-xa-vinh-chau	9.3249582	105.9804542	Thị xã	94	\N	\N
951	Huyện Trần Đề	huyen-tran-de	9.49978	106.0875326	Huyện	94	\N	\N
954	Thành phố Bạc Liêu	thanh-pho-bac-lieu	9.2573324	105.7557791	Thành phố	95	\N	\N
956	Huyện Hồng Dân	huyen-hong-dan	9.5539029	105.45205	Huyện	95	\N	\N
957	Huyện Phước Long	huyen-phuoc-long	9.4006715	105.4302383	Huyện	95	\N	\N
958	Huyện Vĩnh Lợi	huyen-vinh-loi	9.3450296	105.7116464	Huyện	95	\N	\N
959	Thị xã Giá Rai	thi-xa-gia-rai	9.260136	105.3753129	Thị xã	95	\N	\N
960	Huyện Đông Hải	huyen-dong-hai	9.1630642	105.4536718	Huyện	95	\N	\N
961	Huyện Hoà Bình	huyen-hoa-binh	9.2704595	105.5897386	Huyện	95	\N	\N
964	Thành phố Cà Mau	thanh-pho-ca-mau	9.1526728	105.1960795	Thành phố	96	\N	\N
966	Huyện U Minh	huyen-u-minh	9.3554435	104.9856176	Huyện	96	\N	\N
967	Huyện Thới Bình	huyen-thoi-binh	9.3473628	105.1726816	Huyện	96	\N	\N
968	Huyện Trần Văn Thời	huyen-tran-van-thoi	9.1009716	104.8921668	Huyện	96	\N	\N
969	Huyện Cái Nước	huyen-cai-nuoc	8.9867763	105.0557415	Huyện	96	\N	\N
970	Huyện Đầm Dơi	huyen-dam-doi	8.9994186	105.2662931	Huyện	96	\N	\N
971	Huyện Năm Căn	huyen-nam-can	8.8153071	105.0557415	Huyện	96	\N	\N
972	Huyện Phú Tân	huyen-phu-tan	8.9291357	104.8921668	Huyện	96	\N	\N
973	Huyện Ngọc Hiển	huyen-ngoc-hien	8.6677256	105.0032366	Huyện	96	\N	\N
\.


--
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.failed_jobs (id, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- Data for Name: galleries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.galleries (id, post_id, src, alt, title, width, height, galery, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: informations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.informations (id, post_id, bedroom, toilet, legal, rate_value, price, deposit, furniture, floor, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: lands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lands (id, name, type, created_at, updated_at) FROM stdin;
1	thổ cư	1	\N	\N
2	đất nền dự án	1	\N	\N
3	đất công nghiệp	1	\N	\N
4	đất nông nghiệp	1	\N	\N
5	chung cư	2	\N	\N
6	duplex	2	\N	\N
7	penhouse	2	\N	\N
8	dịch vụ mini	2	\N	\N
9	cư xá	2	\N	\N
10	officetel	2	\N	\N
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	2014_10_12_000000_create_users_table	1
2	2019_08_19_000000_create_failed_jobs_table	1
3	2020_09_12_001205_create_provinces	1
4	2020_09_13_000831_create_districts	1
5	2020_09_13_001249_create_communes	1
6	2020_09_13_110745_create_options	1
7	2020_09_13_124919_create_permissions	1
8	2020_09_13_135025_create_roles	1
9	2020_09_13_145102_create_permission_roles	1
10	2020_09_14_010454_create_categories	1
11	2020_09_14_010532_create_lands	1
12	2020_09_14_010535_create_posts	1
13	2020_09_14_010554_create_reactions	1
14	2020_09_14_010607_create_tags	1
15	2020_09_14_010638_create_post_tag_actives	1
16	2020_11_17_064246_create_galleries	1
17	2020_11_17_081500_create_contacts	1
18	2020_11_17_081612_create_informations	1
19	2020_11_20_075527_create_device	1
\.


--
-- Data for Name: options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.options (id, key, type, value_text, value_html, language, created_at, updated_at) FROM stdin;
1	footer-title	1	Hdev chia sẽ kinh nghiệm cho cộng đồng Developer	\N	en	\N	\N
2	description-footer	1	chuyên chia sẽ kinh nghiệm lập trình của developer	\N	en	\N	\N
\.


--
-- Data for Name: permission_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permission_roles (role_id, permission_id, created_at, updated_at) FROM stdin;
1	1	\N	\N
1	2	\N	\N
1	3	\N	\N
1	4	\N	\N
1	5	\N	\N
1	6	\N	\N
2	1	\N	\N
2	3	\N	\N
2	5	\N	\N
3	7	\N	\N
4	8	\N	\N
\.


--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permissions (id, name, created_at, updated_at) FROM stdin;
1	view	\N	\N
2	insert	\N	\N
3	edit	\N	\N
4	delete	\N	\N
5	censor	\N	\N
6	permission	\N	\N
7	outlet	\N	\N
8	custommer	\N	\N
\.


--
-- Data for Name: post_tag_actives; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.post_tag_actives (id, post_id, tag_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, user_id, contact_id, category_id, title, slug, type, stylesheet, javascript, sort, public, description, land_id, direction, direction_balcony, horizontal, vertical, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provinces (id, name, slug, latitude, longitude, type, created_at, updated_at) FROM stdin;
1	Thành phố Hà Nội	thanh-pho-ha-noi	21.0277644	105.8341598	Thành phố Trung ương	\N	\N
2	Tỉnh Hà Giang	tinh-ha-giang	22.7662056	104.9388853	Tỉnh	\N	\N
4	Tỉnh Cao Bằng	tinh-cao-bang	22.635689	106.2522143	Tỉnh	\N	\N
6	Tỉnh Bắc Kạn	tinh-bac-kan	22.3032923	105.876004	Tỉnh	\N	\N
8	Tỉnh Tuyên Quang	tinh-tuyen-quang	22.1726708	105.3131185	Tỉnh	\N	\N
10	Tỉnh Lào Cai	tinh-lao-cai	22.3380865	104.1487055	Tỉnh	\N	\N
11	Tỉnh Điện Biên	tinh-dien-bien	21.8042309	103.1076525	Tỉnh	\N	\N
12	Tỉnh Lai Châu	tinh-lai-chau	22.3686613	103.3119085	Tỉnh	\N	\N
14	Tỉnh Sơn La	tinh-son-la	21.1022284	103.7289167	Tỉnh	\N	\N
15	Tỉnh Yên Bái	tinh-yen-bai	21.6837923	104.4551361	Tỉnh	\N	\N
17	Tỉnh Hoà Bình	tinh-hoa-binh	20.6861265	105.3131185	Tỉnh	\N	\N
19	Tỉnh Thái Nguyên	tinh-thai-nguyen	21.5613771	105.876004	Tỉnh	\N	\N
20	Tỉnh Lạng Sơn	tinh-lang-son	21.8563705	106.6291304	Tỉnh	\N	\N
22	Tỉnh Quảng Ninh	tinh-quang-ninh	21.006382	107.2925144	Tỉnh	\N	\N
24	Tỉnh Bắc Giang	tinh-bac-giang	21.3014947	106.6291304	Tỉnh	\N	\N
25	Tỉnh Phú Thọ	tinh-phu-tho	21.268443	105.2045573	Tỉnh	\N	\N
26	Tỉnh Vĩnh Phúc	tinh-vinh-phuc	21.3608805	105.5474373	Tỉnh	\N	\N
27	Tỉnh Bắc Ninh	tinh-bac-ninh	21.121444	106.1110501	Tỉnh	\N	\N
30	Tỉnh Hải Dương	tinh-hai-duong	20.9385958	106.3206861	Tỉnh	\N	\N
31	Thành phố Hải Phòng	thanh-pho-hai-phong	20.8449115	106.6880841	Thành phố Trung ương	\N	\N
33	Tỉnh Hưng Yên	tinh-hung-yen	20.8525711	106.0169971	Tỉnh	\N	\N
34	Tỉnh Thái Bình	tinh-thai-binh	20.5386936	106.3934777	Tỉnh	\N	\N
35	Tỉnh Hà Nam	tinh-ha-nam	20.5835196	105.92299	Tỉnh	\N	\N
36	Tỉnh Nam Định	tinh-nam-dinh	20.2791804	106.2051484	Tỉnh	\N	\N
37	Tỉnh Ninh Bình	tinh-ninh-binh	20.2129969	105.92299	Tỉnh	\N	\N
38	Tỉnh Thanh Hóa	tinh-thanh-hoa	20.1291279	105.3131185	Tỉnh	\N	\N
40	Tỉnh Nghệ An	tinh-nghe-an	19.2342489	104.9200365	Tỉnh	\N	\N
42	Tỉnh Hà Tĩnh	tinh-ha-tinh	18.2943776	105.6745247	Tỉnh	\N	\N
44	Tỉnh Quảng Bình	tinh-quang-binh	17.6102715	106.3487474	Tỉnh	\N	\N
45	Tỉnh Quảng Trị	tinh-quang-tri	16.7943472	106.963409	Tỉnh	\N	\N
46	Tỉnh Thừa Thiên Huế	tinh-thua-thien-hue	16.467397	107.5905326	Tỉnh	\N	\N
48	Thành phố Đà Nẵng	thanh-pho-da-nang	16.0544068	108.2021667	Thành phố Trung ương	\N	\N
49	Tỉnh Quảng Nam	tinh-quang-nam	15.5393538	108.019102	Tỉnh	\N	\N
51	Tỉnh Quảng Ngãi	tinh-quang-ngai	15.0759838	108.7125791	Tỉnh	\N	\N
52	Tỉnh Bình Định	tinh-binh-dinh	14.1665324	108.902683	Tỉnh	\N	\N
54	Tỉnh Phú Yên	tinh-phu-yen	13.0881861	109.0928764	Tỉnh	\N	\N
56	Tỉnh Khánh Hòa	tinh-khanh-hoa	12.2585098	109.0526076	Tỉnh	\N	\N
58	Tỉnh Ninh Thuận	tinh-ninh-thuan	11.6738767	108.8629572	Tỉnh	\N	\N
60	Tỉnh Bình Thuận	tinh-binh-thuan	11.0903703	108.0720781	Tỉnh	\N	\N
62	Tỉnh Kon Tum	tinh-kon-tum	14.661167	107.83885	Tỉnh	\N	\N
64	Tỉnh Gia Lai	tinh-gia-lai	13.8078943	108.109375	Tỉnh	\N	\N
66	Tỉnh Đắk Lắk	tinh-dak-lak	12.7100116	108.2377519	Tỉnh	\N	\N
67	Tỉnh Đắk Nông	tinh-dak-nong	12.2646476	107.609806	Tỉnh	\N	\N
68	Tỉnh Lâm Đồng	tinh-lam-dong	11.5752791	108.1428669	Tỉnh	\N	\N
70	Tỉnh Bình Phước	tinh-binh-phuoc	11.7511894	106.7234639	Tỉnh	\N	\N
72	Tỉnh Tây Ninh	tinh-tay-ninh	11.3494766	106.0640179	Tỉnh	\N	\N
74	Tỉnh Bình Dương	tinh-binh-duong	11.3254024	106.477017	Tỉnh	\N	\N
75	Tỉnh Đồng Nai	tinh-dong-nai	11.0686305	107.1675976	Tỉnh	\N	\N
77	Tỉnh Bà Rịa - Vũng Tàu	tinh-ba-ria---vung-tau	10.5417397	107.2429976	Tỉnh	\N	\N
79	Thành phố Hồ Chí Minh	thanh-pho-ho-chi-minh	10.8230989	106.6296638	Thành phố Trung ương	\N	\N
80	Tỉnh Long An	tinh-long-an	10.695572	106.2431205	Tỉnh	\N	\N
82	Tỉnh Tiền Giang	tinh-tien-giang	10.4493324	106.3420504	Tỉnh	\N	\N
83	Tỉnh Bến Tre	tinh-ben-tre	10.1081553	106.4405872	Tỉnh	\N	\N
84	Tỉnh Trà Vinh	tinh-tra-vinh	9.812741	106.2992912	Tỉnh	\N	\N
86	Tỉnh Vĩnh Long	tinh-vinh-long	10.0861281	106.0169971	Tỉnh	\N	\N
87	Tỉnh Đồng Tháp	tinh-dong-thap	10.4937989	105.6881788	Tỉnh	\N	\N
89	Tỉnh An Giang	tinh-an-giang	10.5215836	105.1258955	Tỉnh	\N	\N
91	Tỉnh Kiên Giang	tinh-kien-giang	9.8249587	105.1258955	Tỉnh	\N	\N
92	Thành phố Cần Thơ	thanh-pho-can-tho	10.0451618	105.7468535	Thành phố Trung ương	\N	\N
93	Tỉnh Hậu Giang	tinh-hau-giang	9.757898	105.6412527	Tỉnh	\N	\N
94	Tỉnh Sóc Trăng	tinh-soc-trang	9.6003688	105.9599539	Tỉnh	\N	\N
95	Tỉnh Bạc Liêu	tinh-bac-lieu	9.2515555	105.5136472	Tỉnh	\N	\N
96	Tỉnh Cà Mau	tinh-ca-mau	8.9624099	105.1258955	Tỉnh	\N	\N
\.


--
-- Data for Name: reactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reactions (id, post_id, user_id, react_id, type, content, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, type, created_at, updated_at) FROM stdin;
1	supper admin	manager	\N	\N
2	admin	admin	\N	\N
3	user sales	outlet	\N	\N
4	user shopper	custommer	\N	\N
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tags (id, title, slug, excerpt, content, background, description, created_at, updated_at) FROM stdin;
1	Mặt tiền	mat-tien	\N	\N	\N	\N	\N	\N
2	Gần chợ	gan-cho	\N	\N	\N	\N	\N	\N
3	Gần trường học	gan-truong-hoc	\N	\N	\N	\N	\N	\N
4	Nở hậu	no-hau	\N	\N	\N	\N	\N	\N
5	Hẻm xe hơi	hem-xe-hoi	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, email_verified_at, avatar, password, role_id, remember_token, created_at, updated_at) FROM stdin;
2	Trương Phạm	truongpham260620@gmail.com	\N	images/avatar.jpg	$2y$10$jOLq/dnetjvQZh23d26KfOi30oWLbuetMJ1qYWZJlZBqvPmOljLcu	2	\N	2020-11-21 08:43:16	2020-11-21 08:43:16
3	Trương người đăng	userpost@gmail.com	\N	images/avatar.jpg	$2y$10$LRDLL9D1AIAXJa9Mn2FOseyDxePV01YOZ3ARRAZeR8BD8.0KV/QQe	3	\N	2020-11-21 08:43:16	2020-11-21 08:43:16
4	Phạm người mua	usercustom@gmail.com	\N	images/avatar.jpg	$2y$10$h9WX4mbS/DDPW.EUgcw9E.PEOokqk1fDlIx3Cy78o0HIHF6B5s1yW	4	\N	2020-11-21 08:43:16	2020-11-21 08:43:16
1	Trương Thanh Hùng	thanhhung.code@gmail.com	\N	/upload/images/avatar/kieu.jpg	$2y$10$gWdWsCf1MS8OAR7DJKoE4uo79vsa5CKFaqwRbq4j9TQZ3fPAXbrla	1	\N	2020-11-21 08:43:16	2020-11-24 08:21:28
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 1, false);


--
-- Name: communes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.communes_id_seq', 1, false);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: device_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.device_id_seq', 1, false);


--
-- Name: districts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.districts_id_seq', 1, false);


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- Name: galleries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.galleries_id_seq', 1, false);


--
-- Name: informations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.informations_id_seq', 1, false);


--
-- Name: lands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lands_id_seq', 10, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 19, true);


--
-- Name: options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.options_id_seq', 2, true);


--
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permissions_id_seq', 1, false);


--
-- Name: post_tag_actives_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_tag_actives_id_seq', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, false);


--
-- Name: provinces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provinces_id_seq', 1, false);


--
-- Name: reactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reactions_id_seq', 1, false);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tags_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: communes communes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.communes
    ADD CONSTRAINT communes_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: device device_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device
    ADD CONSTRAINT device_pkey PRIMARY KEY (id);


--
-- Name: districts districts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.districts
    ADD CONSTRAINT districts_pkey PRIMARY KEY (id);


--
-- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- Name: galleries galleries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT galleries_pkey PRIMARY KEY (id);


--
-- Name: informations informations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.informations
    ADD CONSTRAINT informations_pkey PRIMARY KEY (id);


--
-- Name: lands lands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lands
    ADD CONSTRAINT lands_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: options options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.options
    ADD CONSTRAINT options_pkey PRIMARY KEY (id);


--
-- Name: permission_roles permission_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permission_roles
    ADD CONSTRAINT permission_roles_pkey PRIMARY KEY (role_id, permission_id);


--
-- Name: permissions permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);


--
-- Name: post_tag_actives post_tag_actives_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_tag_actives
    ADD CONSTRAINT post_tag_actives_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: provinces provinces_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT provinces_pkey PRIMARY KEY (id);


--
-- Name: reactions reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reactions
    ADD CONSTRAINT reactions_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


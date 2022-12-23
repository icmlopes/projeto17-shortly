--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text,
    "userId" integer
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    clicks integer DEFAULT 0,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
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
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, token, "userId") FROM stdin;
1	bdbfaf38-b355-431e-9f2d-5119bf4be5ba	1
2	aed64d5c-7538-4571-b8a6-f22414714d9b	2
3	be9c7442-7ab8-4929-af5c-ca775ac97241	3
4	4935fac2-7043-4c6e-9406-cda5dc0ec391	4
5	079baf31-17bc-434c-9dd2-4026d6c3e85d	5
6	38422451-f93b-419d-a0a7-6bd2b7d92f24	6
7	294b14cb-d69a-4e0e-8558-029bae9af605	7
8	177a367e-53ce-427d-9c07-be78360ef5e1	8
9	62296416-259e-4985-a6fb-28b602fe903a	9
10	b103f27c-dfc2-427e-a455-4b04b210a1b3	10
11	0662846f-9cfb-477e-ad15-7bb4c02ba98f	11
12	c7030d4c-b4c0-4edc-a191-4232138b79ff	12
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, url, "shortUrl", clicks, "createdAt", "userId") FROM stdin;
3	https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/12/16/286939584-ash-pikachu-pokemon.jpg	bdhfeWOfor	0	2022-12-22 19:25:13.348459	1
4	https://play-lh.googleusercontent.com/wAWerkEu_g2_BMCl85WKqN2mxn0xW1O22nV6yJOayrMKu9pqtrLMn7S2Zd1xaykKm0g	SSx8djchsI	0	2022-12-22 19:25:29.21031	1
7	https://assets.reedpopcdn.com/Pok%C3%A9mon-Scarlet-and-Violet-Paldean-Pok%C3%A9mon-Form-list%2C-including-Paldean-Wooper%2C-and-other-Paldea-Pok%C3%A9mon.jpg/BROK/thumbnail/1600x900/quality/100/Pok%C3%A9mon-Scarlet-and-Violet-Paldean-Pok%C3%A9mon-Form-list%2C-including-Paldean-Wooper%2C-and-other-Paldea-Pok%C3%A9mon.jpg	jEr3by33tt	0	2022-12-22 19:26:19.437176	1
8	https://img.pokemondb.net/artwork/large/snorlax.jpg	5KgQBcPBeL	4	2022-12-22 19:26:34.292053	1
9	https://static.wikia.nocookie.net/disney/images/5/54/Pooh-bear-clip-art-winniepooh_1_800_800.jpg/revision/latest?cb=20151014221024&path-prefix=pt-br	be8NpOrQ62	3	2022-12-22 19:30:27.988897	2
1	https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FPok%25C3%25A9mon&psig=AOvVaw0tBtJ1ukYWzQJblr8WrEpH&ust=1671834128126000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJj4huChjvwCFQAAAAAdAAAAABAD	-MjoxA47Xb	5	2022-12-22 19:24:31.162761	1
6	https://uploads.jovemnerd.com.br/wp-content/uploads/2022/09/gengar_pokemon_sword_shield__nzhi1003g-1210x544.jpg	BmHpNPiOJU	14	2022-12-22 19:26:00.061144	1
11	https://inpaonline.com.br/wp-content/uploads/2019/10/pooh-e-transtornos-mentais-1024x597.jpg	Z8S0HZyp9e	0	2022-12-22 19:30:52.069572	2
12	https://capitaldecor.com.br/wp-content/uploads/2022/12/ursinho-pooh-bisonho-festa-decoracao_1af5.png	URK9IREBNo	0	2022-12-22 19:31:04.886333	2
13	https://w7.pngwing.com/pngs/659/728/png-transparent-piglet-winnie-the-pooh-eeyore-winnie-the-poo-flower-fictional-character-cartoon.png	VhiTHr5XKE	0	2022-12-22 19:31:48.548677	2
2	https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png	r7jyyxNgui	18	2022-12-22 19:24:52.539121	1
14	https://w7.pngwing.com/pngs/741/831/png-transparent-eeyore-winnie-the-pooh-winnie-the-pooh-piglet-tigger-winnie-the-pooh-carnivoran-orange-the-walt-disney-company.png	X02gIo9u9Z	0	2022-12-22 19:32:10.144303	2
15	https://w7.pngwing.com/pngs/811/531/png-transparent-pooh-and-tigger-illustration-winnie-the-pooh-piglet-eeyore-tigger-christopher-robin-winnie-pooh-heroes-carnivoran-orange.png	qiQ0VJNmSm	0	2022-12-22 19:32:23.908118	2
5	https://img.olhardigital.com.br/wp-content/uploads/2019/05/20190507084117.jpg	ZMaKW4YZTD	9	2022-12-22 19:25:48.801921	1
16	https://w7.pngwing.com/pngs/734/835/png-transparent-tigger-winnie-the-pooh-piglet-rabbit-eeyore-winnie-the-pooh-tigger-winnie-the-pooh-piglet.png	zfp4qTAahx	6	2022-12-22 19:32:34.008366	2
10	https://www.fasdapsicanalise.com.br/content/uploads/2018/01/ursinho-pooh-e-os-transtornos-psicologicos-1068x801.jpg	pkeROSAZjG	21	2022-12-22 19:30:41.158323	2
17	https://1.bp.blogspot.com/-aRXCliDSi1c/XRdTPLOYuNI/AAAAAAAACg0/T803sJWID-QgunjIZP7wNjXrFz0sSzzxACLcBGAs/s1600/5b4869ca09cce0a7.jpeg	JFWQNGicRq	0	2022-12-22 19:37:18.942286	4
18	https://store-images.s-microsoft.com/image/apps.39852.14455250034361967.824623c3-91b6-402f-9a68-c66bfac9bc20.7bfae929-5b2a-4efe-9639-5ffd1e2de297?q=90&w=480&h=270	_2D91vI-v-	0	2022-12-22 19:38:08.102049	5
19	https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2022/10/vegeta-dbz-kai-madman-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1	x_HbZLgp7D	0	2022-12-22 19:38:19.289458	5
20	https://gamerview.uai.com.br/wp-content/uploads/2020/01/Dragon-Ball-Z-Kakarot_bg.jpg	Ora8tc0FUu	6	2022-12-22 19:38:32.433918	5
21	https://www.jornalopcao.com.br/wp-content/uploads/2018/11/coragem-o-cao-covarde-cn-620x310.jpg	NlnFve8TDd	0	2022-12-22 19:39:57.20842	7
22	https://www.jornalopcao.com.br/wp-content/uploads/2018/11/coragem-o-cao-covarde-cn-620x310.jpg	Try7_wRK7b	0	2022-12-22 19:39:57.742377	7
23	https://www.jornalopcao.com.br/wp-content/uploads/2018/11/coragem-o-cao-covarde-cn-620x310.jpg	IaRFD8DMjG	0	2022-12-22 19:39:58.448306	7
24	https://www.jornalopcao.com.br/wp-content/uploads/2018/11/coragem-o-cao-covarde-cn-620x310.jpg	_ocBGbPVi5	0	2022-12-22 19:39:59.112437	7
25	https://www.jornalopcao.com.br/wp-content/uploads/2018/11/coragem-o-cao-covarde-cn-620x310.jpg	knvoeOvEOY	31	2022-12-22 19:39:59.852905	7
40	https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg	iY5dcGOHAY	4	2022-12-22 19:43:06.019434	10
41	https://cdns-images.dzcdn.net/images/artist/6dfabac67edec77d322a2d85be60d87a/500x500.jpg	g9ks2SLISq	0	2022-12-22 19:43:59.855155	11
42	https://mundonegro.inf.br/wp-content/uploads/2021/05/tina2.jpg	jmrHfJY2Nn	0	2022-12-22 19:44:22.213971	11
43	https://static.itapemafm.com.br/s3fs-public/graphql-upload-files/capa_8_0.jpg?MaZWKLa0Ytv0cdX4jojlxbd9bV6CBnB9	8JAeZbVawc	1	2022-12-22 19:45:12.860699	12
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Valéria	val@uol.com	$2b$10$uu1Ge4vlEkRf/VGEsOQZm.fHKhyz5Gte9e8ssfn5IcVkFZ7ajAjPe	2022-12-22 19:20:55.740625
2	Marcos	marcos@uol.com	$2b$10$vbSPj8luAJwzdqusp4X56O5U/2smxwJdpxH2mrcyW0uqT8ZBPpwuq	2022-12-22 19:29:41.176716
3	Juliano	ju@uol.com	$2b$10$6LwjAWFlIFEDVWDb5CcNv.5SWDEtLi8PZJu4A3CDMoJe9Z0RFVfIW	2022-12-22 19:34:06.910429
4	Isadora	isadora@uol.com	$2b$10$1CoOvcY0zLNt5tSd2N0TCOvuEi0ObBuSSXSx/4VozGZguIv/7mvwW	2022-12-22 19:36:15.241269
5	João Carlos	jc@uol.com	$2b$10$YAJz8e/cL2oThYO5a46PK.2svkDug2QzjIYBqmJJVTXWhgdwkrlm6	2022-12-22 19:37:38.387544
6	Violeta	vi@uol.com	$2b$10$.7XZjwTZ22tYVUUcTOmPse5.D12FlPjAXcl29jKVnwPPtOTF/Ujiq	2022-12-22 19:38:59.585962
7	Mike	mike@uol.com	$2b$10$BpD1T4b/Vj5uPxpKGUwbAO7UVe1.jfIH9C1Xv7/6bTyXnN36eemmm	2022-12-22 19:39:18.752343
8	Jorel	jorel@uol.com	$2b$10$18QkDpUkPF0xi//5ULHfYOQ20X.xoKTnu9cJNZeZTb1xxpymKN5au	2022-12-22 19:41:06.402171
9	Mirella	mimi@uol.com	$2b$10$Xz99bGAVER/1llTcTAoipe3Xsx5ajRyU3NiFtZOkpSlZE330lOopm	2022-12-22 19:42:00.443225
10	Alex	alex@uol.com	$2b$10$mBwIETHEjCt5/3Rs3fB3ZeCJ2vbRiS1QFQGNAwkIYOvFBg1LSbF6q	2022-12-22 19:42:34.05752
11	Tina	turner@uol.com	$2b$10$uJIGiqaBr7gDo7z/1RUP0uyjo1TcOpeDgey.J.pfUpJ.KbMD7HJqG	2022-12-22 19:43:28.665757
12	Michael	jackson@uol.com	$2b$10$24lhncWzZMZUbf4VZlWlVenSN94BJTCZO1qSv4QL/fFhdOhEf4kmO	2022-12-22 19:44:43.358638
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 12, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 43, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 12, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--


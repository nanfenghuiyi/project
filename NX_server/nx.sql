set names utf8;
drop database if exists nx;
create database nx charset=utf8;
use nx;

#用户信息	nx_user

-- create table nx_user(
-- 	uid int primary key not null auto_increment,#用户的ID，为用户的唯一标识，由系统自动生成
-- 	uname varchar(32),
-- 	upwd varchar(32) not null,
-- 	phone varchar(16) not null unique,#手机号码
-- 	gender int,#性别 0-女 1-男
-- 	user_name varchar(32),#用户名
-- 	avatar varchar(128),#头像图片路径
-- );

#用户地址表	nx_recever_address

-- create table nc_recever_address(
-- 	aid int primary key auto_increment,
-- 	user_id int,#用户编号
-- 	receiver varchar(16),#接收人姓名
-- 	address varchar(128),#详细地址
-- 	cellphone varchar(16),
-- 	is_default booleam#是否为当前用户的默认收货地址
-- );

#用户订单表	nx_order

-- create table nx_order(
-- 	aid int primary key auto_increment;
-- 	user_id int, #用户编号
-- 	address_id int,
-- 	status int	#订单状态 1等待付款 2等待发货 3运输中 4已签收 5已取消
-- );

#用户购物车表	nx_shopping_cart

-- create table nx_shopping_cart(
-- 	cid int primary key auto_increment,
-- 	user_id int,#用户编号
-- 	product_id int,#商品编号
-- 	count int  #购买数量
-- );

#用户订单详情表

-- create table nx_order_detail(
-- 	did int primary key auto_increment,
-- 	order_id int,#订单编号
-- 	product_id int,#产品编号
-- 	count int	购买数量#
-- );


#商品列表

create table nx_laptop(
	lid int primary key auto_increment,
	family_id int,	#所属型号家族编号
	product_id int,	#产品编号
	title varchar(128),	#主标题
	price decimal(10,2),	#价格
	spce varchar(64),	#规格
	num int,	#餐具数
	size varchar(64),	#蛋糕大小
	kg int,	#重量
	is_onsale boolean	#是否促销中	
);
insert into nx_laptop values(null,1,1,"雪域牛乳芝士蛋糕·特浓",298,"2-4人食",5,"15×15×3",545,1);

#商品优惠表

create table nx_laptop_onsale(
	oid int primary key auto_increment,
	family_id int,	#所属型号家族编号
	title varchar(128),	#优惠1详情
	subtitle varchar(128) #优惠2详情
);
insert into nx_laptop_onsale values(null,1,"【甜心 给你双倍惊喜
】2019.5.31-2019.7.31 每周四至周六，单笔订单购买本款蛋糕，随单赠价值158元「喵叽叽曲奇·随机礼盒」1份，随机口味，先到先得，赠完即止。本活动不与其他优惠同享。","【“啪”你一脸大冒险】2019.1.10起，购买蛋糕馆内任意蛋糕，加39元可购价值88元的「啪啪脸蛋糕」1个，多买多得。配送时间：2019.1.12起。");

#商品类别表

-- create table nx_laptop_family(
-- 	fid int primary key auto_increment,
-- 	name varchar(32)	#类别名称
-- );

#商品详情图表

create table nx_laptop_pic(
	pid int primary key auto_increment,
	laptop_id int,	#蛋糕编号
	video varchar(128),	#视频路径
	img varchar(128),	#1图片路径
	pic varchar(128)	#2图片路径
);
insert into nx_laptop_pic values(null,null,"17秒删减版-加文字(1).mp4","雪域牛乳芝士pc.jpg","雪域商详_02(1).jpg");

#商品详情轮播图

create table nx_laptop_carousel(
	cid int primary key auto_increment,
	img varchar(128),	#图片路径
	title varchar(64),	#图片描述
	href varchar(128)	#图片链接
);
insert into nx_laptop_carousel values(null,"display_13164_61231.jpg","carousel1",null);
insert into nx_laptop_carousel values(null,"display_13164_61232.jpg","carousel2",null);

#首页轮播图表

create table nx_index_carousel(
	cid int primary key auto_increment,
	img varchar(128),	#图片路径
	title varchar(64),	#图片描述
	href varchar(128)	#图片链接
);
insert into nx_index_carousel values(null,"carousel1.jpg","carousel1",null);
insert into nx_index_carousel values(null,"carousel2.jpg","carousel2",null);
insert into nx_index_carousel values(null,"carousel3.jpg","carousel3",null);
insert into nx_index_carousel values(null,"carousel4.jpg","carousel4",null);
insert into nx_index_carousel values(null,"carousel5.jpg","carousel5",null);

#首页商品栏表

create table nx_index_product(
	pid int primary key auto_increment,
	title varchar(64),	#商品标题
	details varchar(128),	#详细描述
	pic varchar(128),	#图片
	price decimal(10,2),	#商品价格
	href VARCHAR(128),	#图片地址
	seq_recommended TINYINT, #首页商品重要与否
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
);
			#蛋糕
insert into nx_index_product values(null,"雪域牛乳芝士蛋糕·特浓","C位出道 实力打Call","list_10000.jpg",298,"product_details.html?lid=1",1,1,1);
insert into nx_index_product values(null,"牛奶星球蛋糕","儿童节限定 童趣无限","list_10001.jpg",218,"product_details.html?lid=2",2,2,2);
insert into nx_index_product values(null,"雪域牛乳蛋糕·特浓",null,"list_10002.jpg",218,"product_details.html?lid=3",3,3,3);
insert into nx_index_product values(null,"草莓拿破仑蛋糕",null,"list_10003.jpg",218,"product_details.html?lid=4",4,4,4);
insert into nx_index_product values(null,"环游世界蛋糕","+58元升级","list_10004.jpg",218,"product_details.html?lid=5",5,5,5);
insert into nx_index_product values(null,"数字蛋糕","第2件半价 第3件免单","list_10005.jpg",218,"product_details.html?lid=6",6,6,6);
insert into nx_index_product values(null,"草莓千层蛋糕",null,"list_10006.jpg",218,"product_details.html?lid=7",7,7,7);
insert into nx_index_product values(null,"雪域牛乳芝士蛋糕·特浓花样",null,"list_10007.jpg",336,"product_details.html?lid=8",8,8,8);
			#小食
insert into nx_index_product values(null,"喵叽叽云顶小花曲奇礼盒·宠溺双拼（原味+咖啡味）",null,"list_10008.jpg",158,"product_details.html?lid=9",9,9,9);
insert into nx_index_product values(null,"喵叽叽云顶小花曲奇礼盒·元气双拼（原味+巧克力味）",null,"list_10009.jpg",158,"product_details.html?lid=10",10,10,10);
insert into nx_index_product values(null,"喵叽叽云顶小花曲奇礼盒（原味）",null,"list_10010.jpg",158,"product_details.html?lid=11",11,11,11);
insert into nx_index_product values(null,"喵叽叽云顶小花曲奇礼盒（巧克力味）",null,"list_10011.jpg",298,"product_details.html?lid=12",12,12,12);

#首页活动图片
-- create table nx_img_active(
-- 	vid int primary auto_increment,
-- 	pic varchar(128),	#图片
-- 	href varchar(128)
-- );
-- insert into nx_img_active values(null,"milk.jpg","")
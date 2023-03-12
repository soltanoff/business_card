const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight);

let plainNames = "0fis,19moskit11,1dervish,1galt,30l0t0e_serdce,333777999,3loy3ebr,___olya___,_blib,_moss,a_p,a_ur,ach_a,adews,adscripta,aealo,afina_psy,agenda_u,aghartha,agripina,aitisha,ajawa_took,alec101,alex_mashin,alexbreeze,alexeycg,alexme951,alien_guest,aliliana,alkopona,all9402924,all_2_easy,almitoz,alp_reader,alte_liebe,altervalter,aluz13,alx220,alxraz,amanestazy,amdn_news,amil_gataullin,anairos,analwhisper,andeadd,andrey_avan,andrey_ok,andrij_b,aneitis,ango,anka_hulig,anna_bpguide,anna_damiana,another_istr,anti0h,antshadow,anzhi_snezhnaya,aoneko,aquarelka,archi_dotby,ardenanna,arrenk,artcost,artem_zuev,arvolga,asjosik,aspirinca,asrhayader,assucareira,asya_i_drugi,atlastiamfree,attuda,augusta_m,autoench,av_ryabinin,avaamber,avihimsa1,avtordnya,azonips,baash,baby_lyaliko,baldinov,balio,bambulla,bearinbloodbath,being_fox,beldmit,benzinalcohol,berlinguide,betito_miller,bez_luka,bezumny_zayec,bigbeast_kd,bigenchantress,bigorc,bigstonedragon,bin2net,bjarrrki,bjorkmob,bluxer,bo0obs,boldogg,bookman1917,borayka,boris_kin,borrdo,brahman_50,brickinzewall,brook99lyn,bubbcuna,budka_glasnosty,burov_dmitri,butafor28,cantelle,capricorn_vs,carambolina,caramiell,ccpro,celen_me,ch_vic,chaource,chelovek888,chevronna,chikapa,chura24,cloudf0rce,comrade_demon,crezzo,d_galaydov,d_r_rick,daks_5,danilka_ol,dao_nyxa,daposhloonovse,dary_dash,das_foland,das_produkt,de1ira,de_leser,deep_econom,dekont,delrow1,dima_1979,dimavladimirych,dmagin,dmitriy,dmitry_korolev,dmitry_livej,dn54,dobrynea,doch_samuraja,domkratov,dr_music,dreamer_m,dreamrealizer,drwats,dtim,dub_i_sakura,duhovniyplastyr,dundee_scalaer,dzhini,e_tolstoon,easynik,eck_lesi,ed_blog,egornebo,egovoru,eldoradec,elektrikz,elena_2004,elenalanskaya,elina98288,elisa_liz,elizabeth_perm,elneugar,elotar,elshanec,enotka,epycantus,erlang,errmine,ersi13,esperitlliure,esteveste,evguna,evil_princes,eyno,f_lora,fanfanews,fanni_feldman,fd_osd,ffedd_ya,fiachna,fir_3,flaneure,for_riding_111,foralicey,fotoezhik,free_oven,freedom_of_sea,fulllimon,ga_ly_sha,galina_fn,ganna_yanich,gchun59,gelya_pro,genealogija,georgy_vasilyev,gerda07,gershshpraihler,gest,getodakiika,geyzerr,glukoff,gnawer,go_gornostay,goalandec,golbor,golddes_s,goldlilium,goldoff,golovachovitali,good_ron_81,gorepriest,gradeighewo,greygreengo,grigory_y,gulli,gutnikov_yira,gypsy_airs,happy_husband,hedoxakep,helga3110,helmary,hemso,hipponoid,home_lynxy,homikoshe4ka,honey_bunny_bar,humanitarius,hunta_dnepr,husainov,hypnotrout,i_am_the_frog,i_kotik,i_ta_volk,iceflurry,iet0neja,igorilyin,iismene,imtauqui,incopula,inesskisss,innapav,inoy_dmitriy,insideandaround,irinka143,irish_brew,isaak_rozovsky,iskra11,ivanov_semenov,ivanribizhir,ivanstor,ivanujriev,ixwid,izard,j321,jahr2,jan_belorus,joann,johnson111111,jovial_tone,joy_and_void,juca,julie_david,july_murrr,justy_tylor,k_medvezhonkina,kainapilon,karachee,karaulovlife,karpion,kasatka_ksy,kat_bilbo,katy05katy05,katyaflatum,kazibobra,kellvin,kenga_rius,kindlire,kirillvel,kisazulya,kitushin,kkarlovich,klink0v,klubniza,klyaksa_ru,kmn959,knyazev_v,kolybanov,komol,konstandinos13,kosil_kosoj,kotiko23,kr1ga,krambambyly,krasapanya,krasawka,kulhazker,kulikov2g,kvisaz,la_majadesnuda,lady_beltham,ladygodiva77,lafeeducafe,lalibu,landerer_lj,lara_vanina,latentbird,lauhi,lazutinay,legler,lenni_nsk,lenochek1311,leokram,leonid_galp,lera_doronina,lessivaj,lesterlet,lestya,lev_semerkin,li_bao,lidsengood,lily_anne_lk,linarez,link0rx,linki_linki,lisovi4ka,litera_dura,llvolodia,lomovoz,ltraditionalist,lu4ik_schasta,lu_violin,luchertula,lud,lunin_sovs,lupisk,lv973,lysoval,m_maluev,ma79,ma_la_hov,mage_dragon,mage_pro,maikao,major_c,major_kurtz,makar_utin,makarios1,makekrasota,maksudov,male7177,marinaceae,marinta,marzipanna1,massudi,master7009,masteriks,matildatris,maxima_for,maxtar,mbwolf,mckobby,meandr8,megadarkblack,mercant,metalpac,mezavara,mihpetrov,mikerrr,mindfactor,mindfilm,miram,mirang,mirri2017,mis_feli,mishgun07,miss_cchu,mitinglas,mixalych,mogykanin,monadone,monomah,morgeyna,mormyshka,moshkow,mozgogame,mozgosteb,mr_henry_m,mr_smile_13,muallaka,mugunin,murmuliza,my_virtual,nadushca,namestnik,nanay,nani7722,nata_soba,Natalia Kostenko,natalia_s_3112,natusha_st,nayavu,ndkator,ne_a_bird2,negnii_shelest,nekurilshik,nesinitsa,netcihar,nezumiiroii,nibope,nickdem,nietzsche_brot,nija48,nikita_sh,nikolai_korzhok,nooneone,note_booker,novikda,novy_chitatel,nsirivlia,nusut,nyakator,oadam,oilan,old_radist,oldboar,olejnik,olgalit,olgauma,omnia,oostami,opomedem,oposumo,orgtimemanager,orinoks,Osipova Anastasya,otevalm,ovasilisa1978,owlander,pahamaku,palmaroza,palmas1,panda_snapper,paracloud,pascendi,pashkovdv,passerby_fl,patamu_chta,patentat,Pavel Rodriguez,pavlikk,pechkin,peggy_s,perperov,pevtsov,pinglost,piona,pivovaroffs,pjotrs,planetarij,platonicus,plerumque,plohoy_zyalt,po_levoy,poiupredatel,polare_di_ross,polihrony,portia_whiskey,pro_bolotce,prohogy,propipa,propowednik_ag,prostak_1982,protey_009,psycrow,psymaestro,punch1891,pure_basilure,qefir4iq,qizz,quangel,r_ray,radugaw,rainy_sunny,rajahdys,rapira31,rasstegay,rb_zamora,read_only_me,real_big_shish,redjit,reeders,rewen dasik,rk2010,robeniaorop,rodionovmikhail,rodionv,rodonist.wordpress.com,rogub36,romanetto,round_tuit,roza_rugoza,ru_gosa,rusarborist,russian_o,russonuza,ryb,sabi_tsuki,sabinale,samoeto,samundercover,santa_frost,sarramir,sasha_byrynzylo,sashacoy,schegloff,sda,second_chapter,secret_in,sel_kie,sepp_66,septemberday10,seraphim_6k,sergeykalenik,sergiymelnychuk,serglebedinsk,shallgun_force,shel_gilbo,shielda,shkola_internat,showpoint,shtrujo,siberian_laykee,silenceofnow,silverat,silverlj,sima037986,simulatte,sin_moego_papa,sinyaya_tigra,sisking,sister_lu,skylar_margo,slava_mir,slimper3019,smartycz,snegnatrave,sni_1,snorri_braut,sobteo,solartrucker,solefama,soossoyeff,soul_dat,sovjaka,sqld,staerum,sted_zip,stivags,stranniksenya,submagic,sulfid,sunik_007,superbubba,svetamakarova,syboritelexx,synchrozeta,t_e_devochka,taba_cyclone,tachkasmedom,tagiro,takie_dila,tanguero,tannenbaum,taransv,teplenkij,theobromistress,theodosia46022,thisisjinsy,thrasymedes,thug_nick,timeaddict,timzuev,tisifona,tjeerbuursma,to_morrowind,topaz_tulip,torrentotempo,torta_in_cielo,totek,tovbard,trapier,tricksy_cinema,tvoroghok,u_chitelka,ua9uqb,ufanur,ugputu,uhum_buheev,ultraboy2000,undya,uniala,unopitun,utrokrasit,uuyy,valyasha,van_gog_reading,vasichka,vasilisa_valis,Vasily Gridnev,vasya_shitov,vasyona_p,vbulahtin,vedana_ua,velfor,veremeenko_alex,verr,vilius1968,vinous_granat,vitaly_sharonov,vitroshop,vitvrn84,vizza,volganka,volunteerist,vsempomogu,vupankov,vvrahjdgi,watchmewriting,weather_1_man,white_lady_for,white_unihorn,wildkater,wim_winter,windtravel,wkulish,worshipandfall,xarita,xcontcom,xena_remi,xenized,xomorsky,xoxlobandera,xxxavier,yartkin,yelenarunina,yelmanova,ylios,ymachka_snow,yoli_ku,yosefa_e,yosh_v_tumane,yukka_,yuri_sh,zaharov,zand1,zay4ena,zelenoebobro,zendala,zero_kg,zheniavasilievv,zhoma73,zmeelov333,znetalex,zuhel,zzloy_dikobrazz,zzzora,Алия Касимова,Виталий Сальников,иван сотсков,Кирилл Тугушев,Ольга Слёзкина,Юлька,615nik,6e_4uvstvo,a_lexander,a_n,adverty,alexartamonov,alexgv1,alexxstd,alla_babak,andrelondon,angel0291,aplaner,asja_nikova,backstreetjoy,basilisk_sister,beli_ser,binary_dima,cake_off_peace,curiousmole,dinarara,Dmitry Korogod,dukerd,dyosya,efrocon,Ekaterina Kha,el_aurens,Elena Dudkina,Eugeniy Tyumentcev,evgeniazh,feona2003,fibs_ter,freken_magda,fux1,garpoon,gastrorest,gbletel,geidenn,George Beckovich,gobio,gr_enka,hb64_nn,hudorozhkina,Ilona Kuzmenko,ilvas,ip735,irviktoretti,jeka_aka_dez,jigan20099,justya,kirschkonfekt,kitianddima,kolo15,koshki_napoleon,lisappeal,llulla,madlena7,maiya_raz,marvellen,mashaanyaoleg,mmnt,moctpect,mozaik77,na_nas_purpur,nagel_neu,neidealnaj,nekto_s_k,ole_look_ole,olya734,orangtua,osa_baba_yaga,oyhen,philtrius,plus25c,procurator0,pureabstraction,ra_ta_plan,regish_a,resiliencia,rorts,rraaa,savae,sergheiozolin,shida_re,shn,silberwe,siriban,sirmal,slumberfox,smyklarisa,so_lari,sollad,sovayog,sphynxa,suhona,sunvoron,sv_vida_nueva,svetlana_do,the_lilith,thueirby,tke,tri_stroki,triglobusa,troitsa1,tsoka,ursula1020,veselo_byt,vseloterei,westaluk,wsros,xfiles_mk,ydiamond2000,yellow_rock,zexmistroa,Дмитрий Цветков,Евгений Савойский,Михаил Ермаков,Юлия Семенова";

let names = plainNames.split(",");
let cols = [];

let font = 11,
  col = W / font,
  row = H / font,
  arr = [];

for (let i = 0; i < col; i++) {
  arr[i] = 1;
  cols[i] = "*";
}

function createRow() {
  let name = names[Math.floor(Math.random() * names.length)].split("");
  let symbNum = Math.floor(Math.random() * (name.length - 1));
  let ind = 0;
  let fillRow = [];
  while (fillRow.length <= row) {
    if (symbNum >= name.length) {
      fillRow[ind] = "•";
      ind++
      name = names[Math.floor(Math.random() * names.length)].split("");
      symbNum = 0;
    }
    fillRow[ind] = name[symbNum];
    ind++
    symbNum++;
  }
  return fillRow;
}

function draw() {
  $.fillStyle = "rgba(0,0,0,.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#0f0";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cols[i] = "hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are hello wow are ".split("");
      cols[i] = createRow();
    }
    let txt = cols[i][arr[i] - 1];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, 63);

window.addEventListener("resize", () => location.reload());

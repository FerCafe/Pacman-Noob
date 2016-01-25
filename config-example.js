/*
	config-example.js - Archivo de configuracion del bot
*/

/*
* Configuracion Basica
*
* Nota: no es necesario hacer "node getserver.js" 
* ya que todo los datos del servidor estan programados
* lo que debes hacer es crear un nuevo archivo llamado config.js
* el cual debe contener todos los datos del config-example.js
* y configurar los siguientes datos para que el bot funcione bien
*
*/

//No tocar sin saber como editar.
exports.server = 'pandora.xiaotai.org';

exports.port = 5000;

exports.serverid = 'pandora';

exports.autoReconnectDelay = 10 * 1000;
exports.connectionTimeout = 2 * 60 * 1000;

/*
* Crash Guard
*
* If true, write errors to console instead of crashing
*/

exports.crashguard = true;

/*
* Security log
*/

exports.securityLog = {ageOfLogs: 7};

/*
* Watch Config
*/

exports.watchconfig = true;

/*
* Login Details
*/

/*
* Detalles de Usuario
* 
* Se debe saber que para que el bot pueda
* ingresar al servidor, se debe tener una cuenta
* registrada y oficial
*/

exports.nick = ''; //Ingresar aqui el nombre del bot
//No tocar sin saber como editar.
exports.pass = ''; //Ingresar aqui la contraseña de la cuenta del bot

exports.autoReloginDelay = 60 * 1000;
/*
* Salas a las que entrara
*/

//No tocar sin saber como editar.
exports.rooms = ['Lobby']; //Cambiar lobby por 'Saladelclan' o añadir otra sala (tener en cuenta que deben estar separadas por una ,) 


exports.privateRooms = { //Ingresar aqui las salas privadas a la que el bot tendra acceso
	//'salaprivada': true
};

exports.ignoreRooms = {
	//'sala': true
};

exports.initCmds = ['|/avatar 120']; //Para configurar el avatar del bot solo cambia el numero "120" por otro avatar disponible
										//Si el bot cuenta con un avatar propio, solo deja el espacio entre las '' vacio

/*
* Permisos
*/

//No tocar sin saber como editar.
exports.exceptions = { //da el acceso total al bot con el ejemplo dado a continuacion:
	// 'username':true
	'missiingo':true,
	'puobala':true
};

/*
* Ejemplo de como dar acceso total
*
* Un usuario que tenga el acceso total puede controlar por completo al bot
* para darle acceso completo a un usuario aslo de la siguiente manera:
*	'username': true,
* Entiendase que el nombre de usuario debe estas en minusculas
* y sin adornos
*/

exports.ranks = ['+', '\u2605', '%', '@', '#', '&', '~'];

exports.globalPermissions = {
	'voice': '+', //Min rank to broadcast in a server
	'driver': '%', //Min rank to mute. Also min staff rank
	'moderator': '@', //Min rank to ban
	'roomowner': '#', //Rank for using room settings commands like set, lang, mod...
	'admin': '~' //Rank for using global admin commands
};

/*
* Configuracion General
*/

exports.commandTokens = ['.']; 

exports.defaultPermission = '%';

exports.permissionExceptions = {
	//command: 'rank'
	'say': '#',
	'info': '+',
	'wall': '%',
	'autoban': '#',
	'banword': '#',
	'joinphrase': '#',
	'challenge': '%',
	'searchbattle': '~',
	'tournament': '@',
	'games': '#'
};

exports.botguide = "https://gist.github.com/TheWleDey/a6cb6e61a389b5944910";
//No tocar sin saber como editar.
exports.pmhelp = "Hola, soy __[INSERTE NOMBRE AQUI]__, Bot del clan [INSERTE CLAN], si presento un problema contacta a mi clan o a The WleDey y Thunderstrom"; //configura el mensaje que el bot dira cuando alguien le envie un mp 

/*
* Configuracion de Lenguaje
*/

//No tocar sin saber como editar.
exports.language = 'spanish'; //Dejar como esta amenos que el bot sea para una sala de idioma

/*
* Configuration for console messages
*/

exports.debug = {
	/* Basic messages - Production Mode */
	error: true,
	ok: true,
	errlog: true,
	info: true,
	room: true,

	/* Monitoring */
	monitor: true,
	status: true,
	battle: false,

	/* Debug Mode */
	debug: false,
	cmdr: false,

	/* Low Level */
	recv: false,
	sent: false
};

/*
* Configuration for specific
* commands and features
*/

/*
* Moderation
*/

exports.moderation = {
	modException: '%', // Min rank for not receive moderation

	allowmute: true,
	disableModNote: false,

	MOD_CONSTS: {
		FLOOD_MESSAGE_NUM: 5,
		FLOOD_PER_MSG_MIN: 500, // this is the minimum time between messages for legitimate spam. It's used to determine what "flooding" is caused by lag
		FLOOD_MESSAGE_TIME: 6 * 1000,

		MIN_CAPS_LENGTH: 18,
		MIN_CAPS_PROPORTION: 0.8,

		MAX_STRETCH: 7,
		MAX_REPEAT: 4
	},

	values: {
		'spam-p': 3,
		'spam': 4,
		'spam-link': 4,
		'flood-hard': 3,
		'flood': 2,
		'caps': 1,
		'stretch': 1,
		'banwords': 2,
		'inapwords': 2,
		'servers': 2,
		'youtube': 2,
		'spoiler': 2
	},

	modDefault: {
		//basic mods
		'caps': 1,
		'stretching': 1,
		'flooding': 1,
		'spam': 1,

		'bannedwords': 1,
		'inapropiate': 1,

		//specific mods
		'spoiler': 0,
		'youtube': 0,
		'psservers': 0,

		//multiple infraction
		'multiple': 1,

		//zero tolerance
		'zerotol': 1
	},

	punishments: [
		"warn",
		"mute",
		"hourmute",
		"roomban"
	],

	psServersExcepts: {
		"showdown": 1,
		//No añadir mas servidores ya que el bot permitiria el spam
		"pandora": 1,
	},

	zeroToleranceDefaultLevel: 'h',
	zeroToleranceLevels: {
		'l': {name: 'Low', value: 1},
		'n': {name: 'Normal', value: 2},
		'h': {name: 'High', value: 3}
	}
};

/*
* Battles
*/

exports.aceptAll = false;

exports.maxBattles = 1;

exports.initBattleMsg = ['gl hf'];

exports.winmsg = ['GG', 'g_g'];

exports.losemsg = ['gg', 'wp'];

exports.battleMessages = {
	/* Examples of battle messages:
	'-crit': {
		'self': [], //Example: ['lol that hax', 'stop haxing pls']
		'foe': [] //Example: ['sorry', 'wow sorry for that', 'get critted']
	},
	'-miss': {
		'self': [] //Example: ['wow hax', 'lol #poke you\'re blind']
	}
	*/
};

exports.abandonedBattleAutojoin = true;

exports.ladderCheckInterval = 10 * 1000;

exports.ladderNumberOfBattles = 1;

exports.formatAliases = {
	'random': 'Random Battle',
	'randomdoubles': 'Random Doubles Battle',
	'randomtriples': 'Random Triples Battle',
	'doubles': 'Doubles OU',
	'triples': 'Smogon Triples',
	'vgc': 'Battle Spot Doubles (VGC 2015)',
	'vgc2015': 'Battle Spot Doubles (VGC 2015)',
	'ag': 'Anything Goes',
	'oras': 'OU',
	'bw': '[Gen 5] OU',
	'dpp': '[Gen 4] OU',
	'adv': '[Gen 3] OU',
	'gsc': '[Gen 2] OU',
	'rby': '[Gen 1] OU'
};

/*
* Tournaments
*/

exports.tourDefault = {
	format: 'ou',
	type: 'elimination',
	maxUsers: null,
	timeToStart: 30 * 1000,
	autodq: 1.5,
	scoutProtect: false
};

exports.leaderboards = {};

/* Leaderboard example:
exports.leaderboards['tournaments'] = {
	winnerPoints: 5,
	finalistPoints: 3,
	semiFinalistPoints: 1,
	battlePoints: 0
};
*/

/*
* Youtube
*/

exports.youtube = {
	enableByDefault: false
};

/*
* Chat Logger
*/

exports.chatLogger = {
	rooms: [],
	ignore: {'tournament': ['update', 'updateEnd'], 'formats': true, 'challstr': true, 'updateuser': true, 'queryresponse': true},
	logIntroMessages: true,
	ageOfLogs: 7 //in days (max age of logs, 0 to keep logs infinitely)
};

/*
exports.logServer = {
	port: 5400,
	bindaddress: null,
	users: {
		'admin': {
			name: 'Administrator',
			pass: 'password',
			access: {'room1': 1, 'room2': 1}
		}
	},
	rooms: {
		'room1': {private: true},
		'room2': {private: true}
	}
};
*/

/*
* Auto-Invite
*/

exports.autoInvite = [
	//{linked: 'public room linked', private: 'private room', rank: '+'}
];

/*
* GitHub
* Read this: https://developer.github.com/webhooks/creating/
*/

exports.github = {
	room: 'development',
	secret: "",
	port: 3420
};

/*
* Groupchats
*/

exports.groupchats = {};

exports.groupChatTryJoinInterval = 60 * 1000;

/* Test example
exports.groupchats['groupchat-ecuacion-test'] = {
	toJoin: ['/join groupchat-ecuacion-test'],
	onJoin: ['Hi guys!'],
	onLeave: []
};
*/

const express = require('express');
const app = express();
const db = require('../models/db.js');
const controller = require('../controller/index');
const  bodyParser = require('body-parser');
var ObjectId = require("mongodb").ObjectId;
var sess = "y2aquino";

app.use(bodyParser());


const indexFunctions = {

	getAdminPage : function(req,res,next) {
		res.render("AdminPage", {
      title: 'Admin Page',
      announcements : [
       { 
            subject: "Community Guidelines",
            message: "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind." 
          },
          { 
            subject: "Online Subscription",
            message: "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!" 
          },
          { 
            subject: "Edit Profile",
            message: "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
          }
        ],
        
      reports :  [
          { 
            reporter: "LorenandMario",
            reported: "Y2Daisy",

          },
          { 
            reporter: "VillagerxJhose",
            reported: "Bowser123" 
          },
          { 
            reporter: "PikaChooseMe ",
            reported: "LuigilovesMe" 
          },
          { 
            reporter: "ZeldaLink",
            reported: "YoshiYoshi" 
          }
        ]
      
    });	
	},

	getBanPlayers : function(req,res,next){
		  res.render("BanPlayers", {
      title: 'Ban Players',
      banned : [{
        reporter: "LorenandMario",
        reported: "Y2Daisy"},
        {
        reporter: "LorenandMario",
        reported: "SSS"},
        {
        reporter: "LorenandMario",
        reported: "Y2Daisy"}
      ]
    });
	},

	getLogIn: function(req,res,next) {
		res.render("LogIn", {
     		 title: 'Welcome!'
      });
	},

	getVerify: function(req, res, next) {
		res.render("Verify", {
			title: 'Verify'
		});
	},

	

	getPost2 : function(req,res,next) {
		res.render("Post2", {
      title: 'Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : 
      {
        postbyName  : "OtherPerson234",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : 
        [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : 
      [
        {
          commentBy       : "LorenStarpEACH222",
          commentDate     : "03/11/20",
          commentTime     : "12:20AM",
          commentContent  : "This is the comment you've all been waiting for"
        },
        {
          commentBy       : "jHoseNair",
          commentDate     : "03/11/21",
          commentTime     : "12:30AM",
          commentContent  : "This is the comment number 2"
        }
      ],
      announcement : 
      [
        {
          title : "Community Guidelines",
          text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
        },
        {
          title : "Online Subscription",
          text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
        },
        {
          title : "Edit Profile",
          text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
        }
      ]
    });
	},


	getPost3 : function(req,res,next){
		 res.render("Post3", {
      title: 'Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : {
        postbyName  : "pacmain",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : [{
        commentBy       : "LorenStarpEACH222",
        commentDate     : "03/11/20",
        commentTime     : "12:20AM",
        commentContent  : "This is the comment you've all been waiting for"
      },
      {
        commentBy       : "jHoseNair",
        commentDate     : "03/11/21",
        commentTime     : "12:30AM",
        commentContent  : "This is the comment number 2"
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]


    });
	},

	getEditPost : function(req,res,next) {
		res.render("EditPost", 
  {
      title: 'Edit Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      imgsrc : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : 
      {
        postbyName  : "OtherPerson234",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : 
        [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : 
      [
        {
          commentBy       : "LorenStarpEACH222",
          commentDate     : "03/11/20",
          commentTime     : "12:20AM",
          commentContent  : "This is the comment you've all been waiting for"
        },
        {
          commentBy       : "jHoseNair",
          commentDate     : "03/11/21",
          commentTime     : "12:30AM",
          commentContent  : "This is the comment number 2"
        }
      ],
      announcement : 
      [
        {
          title : "Community Guidelines",
          text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
        },
        {
          title : "Online Subscription",
          text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
        },
        {
          title : "Edit Profile",
          text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
        }
      ]
    });
	},

	getEditProfile : function(req,res,next) {
		res.render("EditProfile", {
      title: 'Edit Profile',
      imgsrc : "images/Mario icon.jpg",
      editname: 'Jose Aquino',
      editusername: 'pacMain',
      editnintendoid: 'N/A',
      editmains: 'Ness, Mario',
      editsecondary: 'Zero Suit Samus',
      name : "Jose Aquino",
      username : "pacmain",
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]
    });

	},

	getNotifications : function(req,res,next){
		res.render("Notification", {
      title: 'Notifications',
      imgsrc : "images/Mario icon.jpg",
      name : "Jose Aquino",
      username : "pacmain",
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ],

     notifs: [{
        notifs: "like",
        action: [
          { 
            usericon : "images/pacmanhead.png",
            user: "PacMain",
            postaction: "liked",
            posttitle: "Best Pac-man highlights!" 
          },
          { 
            usericon : "images/pacmanhead.png",
            user: "PacWoman",
            postaction: "liked",
            posttitle: "Best Pac-man highlights!" 
          }
        ]
      },
      {
        notifs: "comment",
        action: [
          { 
            usericon : "images/pacmanhead.png",
            user: "PacMain",
            postaction: "commented",
            posttitle: "Who is the best Pac-man main?" 
          }
        ]
      }
      ]
    });
	},

	getPostAnnouncement : function(req,res,next) {
		res.render("PostAnnouncement", {
      title: 'Post Annoucement'
    });
	},

	getRegister : function(req,res,next) {
		  res.render("Register", {
      title: 'Register'
    });
		},

	getSavedFollowed : function(req,res,next) {
		 res.render("SavedFollowed", {
      title: 'Followed posts',
      name : "Jose Aquino",
      username : "pacmain2",
      saved : [{
        postbyImg   : "images/nesshead.png",
        postbyName  : "LorensTarPeacH",
        postTitle   : "Looking for Duo!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      },
      {
        postbyImg   : "images/nesshead.png",
        postbyName  : "jhoseZsS",
        postTitle   : "Palutena OP!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      }
      ],

       followed : [{
        postbyImg   : "images/nesshead.png",
        postbyName  : "LorensTarPeacH",
        postTitle   : "Looking for Duo!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      },
      {
        postbyImg   : "images/nesshead.png",
        postbyName  : "jhoseZsS",
        postTitle   : "Palutena OP!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]

    });
		},

	

  postRegister : function(req,res) {

    //console.log(req.body);

    var name = req.body.name;
    var username = req.body.username;
    var nintendoid = req.body.id;
    var pw = req.body.pass;
    var email = req.body.email;
      
    //console.log(req.body.username);

    var query1 = {
      uname : username
    };

    var query2 = {
      email : email
    };


    //check if already exists
    db.findOne("Users", query1, function (result){
      console.log("query 1:" + result);

        if(result == null){
          db.findOne("Users", query2, function(result2){
            console.log("query 2:" + result2);

            if(result2 == null){

              db.insertOne("Users", {
              name : name,
              uname : username,
              nintendoid : nintendoid,
              password : pw,
              email : email,
              pic : "images/default.jpg",
              // main : [{
              //   main : "main 1"
              // },{
              //   main : "main 2"
              // }]
                }); 
              res.redirect("/verify");

            }
            else
              res.redirect("/Register");
          });
        }
        else{
              res.redirect("/Register");
        }
    });


     },

     postLogIn : function(req,res){
        
        var username = req.body.username;
        var pw = req.body.pass;

        // sess = username;

        console.log(username);
        console.log(pw);

        var query = {uname : username};

        db.findOne("Users", query, function (result){
          if(result == null){
             res.redirect("/Login");
          }
          else{
            if(result.password == pw){
              req.session.uname = username;
              req.session.user = result;
              res.redirect("/profile/" + username);
            }
            else{
              res.redirect("/Login");
            }
          }; 

        });


     },

     getProfile : function(req,res,next){

      if(!req.session.uname){
        res.redirect("/Login");
      }
      else{
      var uname = req.session.uname;
      var query = {uname : uname};
      var query2 = {uname : req.params.username}

      var profile = {};
      db.findOne("Users", query2, function(res2){
        profile = res2;
      })
      


      db.findOne('Users', query, function (result){
        console.log(result);

      if(result == null)
        res.redirect("/Login");
      else{



      res.render("Profile", {
      title       : 'Profile',
      name        : result.name,
      profilePic  : result.pic,
      username    : result.uname,
      userid      : result.nintendoid,
      pname        : profile.name,
      pprofilePic  : profile.pic,
      pusername    : profile.uname,
      puserid      : profile.nintendoid,

      main : profile.main,

      secondary  : [
      {
        secondary : "Zero Suit Samus"
      },
      {
        secondary : "Link"
      }
      ],
      posts : [
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [{
        img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"}]
      },
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [
        ]
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]
    });


        }
      });

    }

  },

  getNewsfeed : function (req, res, next) {

    if(!req.session.uname){
      res.redirect("/Login");
    }
    else{
      var uname = req.session.uname;
      var query = {uname : uname};

      db.findOne('Users', query, function (result){
        console.log(result);

      if(result != null){

        var query2 = {};
       // var projection2 = "postname posttitle postcontent postimage postdate";

        db.findMany("Posts", query2, {}, {}, function(res2){
          db.findMany("Announcements", query2, {}, {}, function(res3){
            res.render("Newsfeed", {
            title: 'Welcome!',
            imgsrc : result.pic,
            name : result.name,
            username : result.uname,
            announcement : res3,
            post : res2
          });
        });
      });

      }
      });
    }
  },

  postNewsfeed : function(req,res,next){
    var title = req.body.postTitle;
    var content = req.body.content;



    if(req.body.search != null){
      console.log("search for: ");
        var search = req.body.search;
      res.redirect("/search?search=" + search);
    }

    console.log(req.body.postTitle);
    console.log(req.body.content);
    if(req.body.postTitle != ""){
      //check if file exists
      console.log("entered post if");

      if(req.body.content != ""){
        console.log("entered post if");
        var d = new Date();
        var date = (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear();

          if(req.file){
            console.log(req.file.filename);
            req.body.postPic = req.file.filename;
            var img = "images/" + req.body.postPic;
            //insert one to posts
            db.insertOne("Posts", {
            postbyName : req.session.uname,
            postTitle  : title,
            content : content,
            image   : [{ img : img}] , 
            postDate: date
            });



            
          }
          else{
            db.insertOne("Posts", {
            postbyName : req.session.uname,
            postTitle  : title,
            content : content,
            postDate: date
            });

          }

          res.redirect("/Newsfeed");
      
      }
        else{
          res.redirect("/Newsfeed");
        }
      }
      else{
        res.redirect("/Newsfeed");
    }



    // db.insertOne("Users", {
    //           name : name,
    //           uname : username,
    //           nintendoid : nintendoid,
    //           password : pw,
    //           email : email,
    //           pic : "images/default.jpg",
    //           // main : [{
    //           //   main : "main 1"
    //           // },{
    //           //   main : "main 2"
    //           // }]
    //             }); 
    //           res.redirect("/verify");

  },

  getSearch : function(req,res,next){
    if(!req.session.uname){
      res.redirect("/Login");
    }

    else {
      var uname = req.session.uname;
      var search = '{ "$text" : { "$search" : "' + req.query.search + '" } }';
      console.log("SEARCHHHHHHH" + search);
      var query = {uname : uname};

      db.findOne('Users', query, function (result){
        console.log(result);
        var query2 = { postTitle : search};
        db.findMany("Posts", query, {}, {}, function(result2){
          db.findMany("Announcements", {}, {}, {}, function(res3){

              res.render("Search", {
                title       : 'Search Result/s',
                profilePic : result.pic,
                name : result.name,
                username : result.uname,
                posts : result2,
                announcement : res3
            });
            });
         });
     });
    }
  },

  getPost : function(req,res,next) {

    var id = ObjectId(req.params.objectid);
    console.log(id);
    console.log(req.session);
    var query = { '_id' : id};

    db.findOne("Posts",query, function(result){
      console.log(result);
      if(result != null){
          res.render("Post", {
            title: 'Post',
            name        : req.session.name,
            profilePic  : req.session.image,
            username    : req.session.uname,
            post : {
              postbyName  : result.postbyName,
              postDate    : result.postDate,
              postTime    : "4:20pm",
              postTitle   : result.postTitle,
              postContent : result.content,
              image       : result.image
            },
            comment : [{
              commentBy       : "LorenStarpEACH222",
              commentDate     : "03/11/20",
              commentTime     : "12:20AM",
              commentContent  : "This is the comment you've all been waiting for"
            },
            {
              commentBy       : "jHoseNair",
              commentDate     : "03/11/21",
              commentTime     : "12:30AM",
              commentContent  : "This is the comment number 2"
            }
            ],
            announcement : [{
              title : "Community Guidelines",
              text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
            },
            {
              title : "Online Subscription",
              text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
            },
            {
              title : "Edit Profile",
              text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
            }
            ]


          });
      }
      else{
          res.render("Post2", {
      title: 'Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : 
      {
        postbyName  : "OtherPerson234",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : 
        [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : 
      [
        {
          commentBy       : "LorenStarpEACH222",
          commentDate     : "03/11/20",
          commentTime     : "12:20AM",
          commentContent  : "This is the comment you've all been waiting for"
        },
        {
          commentBy       : "jHoseNair",
          commentDate     : "03/11/21",
          commentTime     : "12:30AM",
          commentContent  : "This is the comment number 2"
        }
      ],
      announcement : 
      [
        {
          title : "Community Guidelines",
          text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
        },
        {
          title : "Online Subscription",
          text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
        },
        {
          title : "Edit Profile",
          text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
        }
      ]
    });
      }
    });

    
  }
}

module.exports = indexFunctions;
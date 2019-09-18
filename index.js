// Properties, I want to add to Obj

// avatarUrl: "/img/avatars/custombots.png"
// category: "application"
// description: "Corporate Actions"
// displayName: "Corporate Actions"
// id: 1
// isEnabled: true
// isEncryptionSupported: true
// isOnline: true
// isPublic: true
// options: {}
// type: "application"
// widgetUrl: "";

//

var Obj = {
  bot_name: "",
  commands: [""],
  description: "",
  icon: "",
  name: "Test",
  url: "",
  __v: 0,
  _id: "5d7a37bd0a3f7e00185a9d4b"
};

var Arr = [Obj];

var formattedArr = Arr.map(obj => ({
  avatarUrl: obj.icon,
  category: "application",
  displayName: obj.name,
  widgetUrl: obj.url,
  isEnabled: true,
  isEncryptionSupported: true,
  isOnline: true,
  isPublic: true,
  type: "application",
  id: obj._id,
  description: obj.description,
  widgetUrl: "",
  options: {}
}));

console.log(Arr);
console.log(formattedArr);

// Expected result
[
  {
    avatarUrl: "",
    category: "application",
    displayName: "Test",
    widgetUrl: "",
    isEnabled: true,
    isEncryptionSupported: true,
    isOnline: true,
    isPublic: true,
    type: "application",
    id: "5d7a37bd0a3f7e00185a9d4b",
    description: ""
  }
];

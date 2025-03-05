var langData = {
  en: {
    appName: 'APP NAME',
    title: 'Online Live Video Chat',
    desc: 'Connect with Talented Hosts 😍 <br /> Anytime, Anywhere!',
    videoChatNow: "Video chat now",
    downloadNow: "Call Her Now", 
  },
  // 阿拉伯语
  ar: {},
};
function setJsLangText(lang, text) {
  if (langData[lang] == undefined) {
    lang = "en";
  }
  return langData[lang][text];
}

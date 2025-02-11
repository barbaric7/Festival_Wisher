const wishes = {
  Diwali: {
    Marathi: [
      "शुभ दीपावली! 🪔🎉",
      "सुख आणि समृद्धीच्या दीपावलीच्या शुभेच्छा! 🌟✨",
      "तुमच्या आयुष्यात आनंद आणि शांतीची भरभराट होवो! 🌟🪔",
      "दीपोत्सवाच्या हार्दिक शुभेच्छा! 🎉✨",
      "प्रकाश आणि आनंदाने भरलेला दीपोत्सव साजरा करा! 🪔🌟",
      "दिवाळीच्या मंगलमय शुभेच्छा! 😊",
      "येणारी दिवाळी तुमच्या जीवनात नविन प्रकाश घेऊन येवो, याच शुभेच्छा! ✨",
      "दिवाळीचा सण तुमच्यासाठी आनंददायी असो! 🥳",
      "दिवाळीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो. 🎉",
      "तुम्हाला आणि तुमच्या कुटुंबाला दिवाळीच्या खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦",
      "दीपावलीच्या या शुभक्षणी, तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏",
      "दिवाळीच्या दिव्यांनी तुमचे घर आणि मन उजळून निघो! 🏡✨",
      "या दिवाळीत तुमच्या घरात सुख, समृद्धी आणि शांती नांदो! 😇",
      "दिवाळी हा सण आहे आनंद आणि उत्साहाचा, तो साजरा करा मनसोक्त! 🎊",
      "दिवाळीच्या निमित्ताने सर्वांना प्रेम आणि सदिच्छा! ❤️",
      "दिवाळीच्या हार्दिक शुभेच्छा! 🪔🎉 दिव्यांचा प्रकाश तुमच्या जीवनात आनंद घेऊन येवो!",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या हार्दिक शुभेच्छा! 👨‍👩‍👧‍👦✨",
      "दिवाळीच्या या शुभ अवसरी, तुमच्या घरात लक्ष्मीचा वास असो! 💰",
      "दिवाळीच्या दिव्यांनी तुमच्या जीवनातील अंधार दूर होवो! 🌟",
      "दिवाळीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 😊",
      "दिवाळीच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊",
      "दिवाळीच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉",
    ],
    Hindi: [
      "दीपावली की हार्दिक शुभकामनाएं! 🪔🎉",
      "खुशियों की दीपावली मुबारक! 🌟",
      "दीपावली के इस पावन अवसर पर, आपकी सभी मनोकामनाएं पूरी हों। 🙏",
      "आपके जीवन में सुख, शांति और समृद्धि बनी रहे। 🌟",
      "दीपावली की हार्दिक बधाई! 😊",
      "यह दीपावली आपके लिए खुशियां लेकर आए। 🥳",
      "दीपावली के दीयों से आपका घर जगमगा उठे। 🏡✨",
      "शुभ दीपावली! आपका जीवन प्रकाशमय हो। ✨",
      "दीपावली के इस शुभ अवसर पर, आपको और आपके परिवार को हार्दिक शुभकामनाएं। 👨‍👩‍👧‍👦",
      "मां लक्ष्मी की कृपा आप पर बनी रहे। 💰",
      "दीपावली के त्योहार की हार्दिक शुभकामनाएं। 🎉",
      "आपको दीपावली की ढेर सारी शुभकामनाएं! 🎊",
      "दीपावली के इस त्योहार पर, सब कुछ अच्छा हो! 👍",
      "दीपावली की हार्दिक शुभकामनाएँ! यह त्यौहार आपके जीवन में खुशियाँ लाए। ❤️",
      "आपको और आपके प्रियजनों को दीपावली की हार्दिक शुभकामनाएँ! 👨‍👩‍👧‍👦✨",
      "दीपावली के इस शुभ अवसर पर, आपके सपने सच हों! 🌟",
      "दीपावली के दीयों की रोशनी आपके जीवन को रोशन करे! ✨",
      "यह दीपावली आपके लिए नई शुरुआत लाए! 🚀",
      "दीपावली की शुभकामनाएँ! आपका हर दिन शुभ हो! 😊",
      "दीपावली के त्योहार पर आपको बहुत-बहुत शुभकामनाएँ! 🎊",
      "दीपावली के इस मंगल अवसर पर, आपकी सभी मनोकामनाएँ पूरी हों! 🙏🎉",
      "शुभ दीपावली! आपका घर खुशियों से भर जाए! 🏡",
    ],
    English: [
      "Happy Diwali to you! 🪔🎉",
      "May this Diwali bring lots of happiness and light to your life! 🌟",
      "Wishing you a very Happy Diwali! 😊",
      "May the light of Diwali fill your home with joy and prosperity. 🏡✨",
      "Have a sparkling Diwali! ✨",
      "May this Diwali be as bright as ever. 🌟",
      "Wishing you and your family a very Happy Diwali! 👨‍👩‍👧‍👦",
      "May Goddess Lakshmi bless you with wealth and prosperity. 💰",
      "Happy Diwali! May your life be filled with happiness and success. 🎉",
      "Wishing you a Diwali full of joy and laughter! 🥳",
      "May the festival of lights brighten your life. ✨",
      "Happy Diwali! Wishing you a prosperous new year. 🚀",
      "May this Diwali bring new opportunities to your life. 🌟",
      "Wishing you a Happy and Safe Diwali! 🙏",
      "Happy Diwali! Enjoy the festivities! 🎊",
      "May the divine light of Diwali spread peace and happiness in your life. 😇",
      "Wishing you a Diwali filled with sweets and treats! 🍬",
      "Happy Diwali! May all your dreams come true. 🌟",
      "May the beauty of Diwali fill your home with happiness. 🏡",
      "Wishing you a colorful and joyous Diwali! 🌈",
      "Happy Diwali! May you have a wonderful time with your family and friends. ❤️",
      "May this Diwali bring good health and wealth to your life. 💪💰",
    ],
  },
  "New Year": {
    Marathi: [
      "नववर्षाच्या हार्दिक शुभेच्छा! 🎉🌟",
      "नवीन वर्षाच्या शुभेच्छा! 🥳",
      "नवीन वर्ष आपल्यासाठी आनंद आणि समृद्धी घेऊन येवो! 😊",
      "येणारे वर्ष सुख, शांती आणि समाधान घेऊन येवो, हीच ईश्वरचरणी प्रार्थना! 🙏",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचे सर्व स्वप्न साकार होवो! ✨",
      "नवीन वर्षाच्या निमित्ताने तुम्हाला आणि तुमच्या कुटुंबाला खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦",
      "हे नवीन वर्ष तुमच्या जीवनात नविन संधी घेऊन येवो! 🌟",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंददायी असो! 🎉",
      "नवीन वर्षात तुमच्या घरात सुख, समृद्धी आणि शांती नांदो! 🏡😇",
      "नवीन वर्षाच्या शुभेच्छा! तुमचे सर्व कष्ट दूर होवो! 👍",
      "नवीन वर्षाच्या या शुभक्षणी, तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏🎉",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचा व्यवसाय आणि नोकरीत उत्कर्ष होवो! 🚀",
      "नवीन वर्षाच्या निमित्ताने सर्वांना प्रेम आणि सदिच्छा! ❤️",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचे आरोग्य उत्तम राहो! 💪",
      "नवीन वर्षाच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏",
      "नवीन वर्षाच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🥳",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 😊",
      "नवीन वर्षाच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊",
      "नवीन वर्षाच्या या शुभ अवसरी, तुमच्या घरात लक्ष्मीचा वास असो! 💰",
      "नवीन वर्षाच्या दिव्यांनी तुमचे जीवन उजळून निघो! ✨",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो. 🎉🌟",
      "नवीन वर्षाच्या निमित्ताने तुम्हाला आणि तुमच्या कुटुंबाला खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦❤️",
    ],
    Hindi: [
      "नववर्ष की हार्दिक शुभकामनाएं! 🎉🌟",
      "नया साल मुबारक हो! 🥳",
      "नया साल आपके लिए खुशियां और समृद्धि लाए! 😊",
      "आने वाला साल सुख, शांति और समाधान लाए, यही ईश्वर से प्रार्थना है! 🙏",
      "नए साल की हार्दिक शुभकामनाएं! आपके सभी सपने साकार हों! ✨",
      "नए साल के अवसर पर आपको और आपके परिवार को बहुत-बहुत शुभकामनाएं! 👨‍👩‍👧‍👦",
      "यह नया साल आपके जीवन में नए अवसर लाए! 🌟",
      "नए साल की हार्दिक शुभकामनाएं! आपका हर दिन आनंदमय हो! 🎉",
      "नए साल में आपके घर में सुख, समृद्धि और शांति बनी रहे! 🏡😇",
      "नए साल की शुभकामनाएं! आपके सभी कष्ट दूर हों! 👍",
      "नए साल के इस शुभ अवसर पर, आपकी सभी मनोकामनाएं पूरी हों! 🙏🎉",
      "नए साल की हार्दिक शुभकामनाएं! आपके व्यवसाय और नौकरी में उन्नति हो! 🚀",
      "नए साल के अवसर पर सभी को प्यार और शुभकामनाएं! ❤️",
      "नए साल की हार्दिक शुभकामनाएं! आपका स्वास्थ्य उत्तम रहे! 💪",
      "नए साल के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏",
      "नए साल की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🥳",
      "नए साल की हार्दिक शुभकामनाएं! आपका हर पल आनंदमय हो! 😊",
      "नए साल के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊",
      "नए साल के इस शुभ अवसर पर, आपके घर में लक्ष्मी का वास हो! 💰",
      "नए साल के दीयों से आपका जीवन जगमगा उठे! ✨",
      "नए साल की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो। 🎉🌟",
      "नए साल के अवसर पर आपको और आपके परिवार को बहुत-बहुत शुभकामनाएं! 👨‍👩‍👧‍👦❤️",
    ],
    English: [
      "Happy New Year to you! 🎉🌟",
      "Wishing you a fantastic year ahead! 🥳",
      "May this year bring new happiness, new goals, new achievements and a lot of new inspirations on your life. 😊",
      "Wishing you a year fully loaded with happiness and prosperity. Happy New Year! 🌟",
      "May the New Year bring joy, peace, and success to you. 🎉",
      "Happy New Year! Wishing you all the best for the year ahead. 👍",
      "May this New Year be filled with new opportunities and experiences. ✨",
      "Wishing you and your family a very Happy New Year! 👨‍👩‍👧‍👦",
      "Happy New Year! May your dreams come true. 🙏",
      "May the New Year bring you good health, wealth, and happiness. 💪💰😇",
      "Wishing you a prosperous and successful New Year! 🚀",
      "Happy New Year! Enjoy the celebrations! 🎊",
      "May the New Year bring peace and harmony to the world. 🕊️",
      "Wishing you a Happy and Safe New Year! 🙏😊",
      "Happy New Year! May all your wishes come true. 🌟",
      "May the New Year be a year of new beginnings and new adventures. 🚀✨",
      "Wishing you a New Year filled with love and laughter! ❤️🥳",
      "Happy New Year! May you have a wonderful year ahead. 🎉👍",
      "May the New Year bring you closer to your goals and dreams. 🌟🙏",
      "Wishing you a colorful and joyous New Year! 🌈🎊",
      "Happy New Year! May you have a great time with your family and friends. 👨‍👩‍👧‍👦❤️",
      "May this New Year bring you closer to your loved ones. 😇",
    ],
  },
  Sankrant: {
    Marathi: [
      "मकर संक्रांतीच्या हार्दिक शुभेच्छा! 🪁",
      "तिळगुळ घ्या, गोड गोड बोला! 🍯",
      "मकर संक्रांतीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 😊",
      "संक्रांतीच्या या शुभदिनी, तुमच्या जीवनातील सर्व विघ्ने दूर होवोत! 🙏",
      "तिळगुळ घ्या आणि गोड बोला, आपले संबंध अधिक दृढ करा! ❤️",
      "मकर संक्रांतीच्या हार्दिक शुभेच्छा! तुमचे आरोग्य उत्तम राहो! 💪",
      "संक्रांतीच्या निमित्ताने सर्वांना प्रेम आणि सदिच्छा! 😇",
      "मकर संक्रांतीच्या हार्दिक शुभेच्छा! तुमचा व्यवसाय आणि नोकरीत उत्कर्ष होवो! 🚀",
      "संक्रांतीच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉",
      "मकर संक्रांतीच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🥳",
      "संक्रांतीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 🎉",
      "मकर संक्रांतीच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊",
      "संक्रांतीच्या या शुभ अवसरी, तुमच्या घरात लक्ष्मीचा वास असो! 💰",
      "मकर संक्रांतीच्या दिव्यांनी तुमचे जीवन उजळून निघो! ✨",
      "संक्रांतीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो. 😊🪁",
      "मकर संक्रांतीच्या निमित्ताने तुम्हाला आणि तुमच्या कुटुंबाला खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦❤️",
      "मकर संक्रांतीच्या हार्दिक शुभेच्छा! 🪁 पतंग उडवा आणि आनंद साजरा करा! 🎉",
      "संक्रांतीच्या या शुभक्षणी, तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏🌟",
      "मकर संक्रांतीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो! 😊🥳",
      "संक्रांतीच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊🪁",
      "मकर संक्रांतीच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉✨",
      "संक्रांतीच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🥳🌟",
    ],
    Hindi: [
      "मकर संक्रांति की हार्दिक शुभकामनाएं! 🪁",
      "पतंग उड़ाने का मौसम आ गया! 🍯",
      "मकर संक्रांति की हार्दिक शुभकामनाएं! आपका हर पल आनंदमय हो! 😊",
      "संक्रांति के इस शुभ दिन, आपके जीवन के सभी कष्ट दूर हों! 🙏",
      "तिलगुड़ लीजिए और मीठा बोलिए, अपने रिश्तों को और मजबूत कीजिए! ❤️",
      "मकर संक्रांति की हार्दिक शुभकामनाएं! आपका स्वास्थ्य उत्तम रहे! 💪",
      "संक्रांति के अवसर पर सभी को प्यार और शुभकामनाएं! 😇",
      "मकर संक्रांति की हार्दिक शुभकामनाएं! आपके व्यवसाय और नौकरी में उन्नति हो! 🚀",
      "संक्रांति के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎉",
      "मकर संक्रांति की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🥳",
      "संक्रांति की हार्दिक शुभकामनाएं! आपका हर पल आनंदमय हो! 🎉",
      "मकर संक्रांति के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊",
      "संक्रांति के इस शुभ अवसर पर, आपके घर में लक्ष्मी का वास हो! 💰",
      "मकर संक्रांति के दीयों से आपका जीवन जगमगा उठे! ✨",
      "संक्रांति की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो। 😊🪁",
      "मकर संक्रांति के अवसर पर आपको और आपके परिवार को बहुत-बहुत शुभकामनाएं! 👨‍👩‍👧‍👦❤️",
      "मकर संक्रांति की हार्दिक शुभकामनाएं! 🪁 पतंग उड़ाएं और आनंद मनाएं! 🎉",
      "संक्रांति के इस शुभ अवसर पर, आपकी सभी मनोकामनाएं पूरी हों! 🙏🌟",
      "मकर संक्रांति की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो! 😊🥳",
      "संक्रांति के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊🪁",
      "मकर संक्रांति के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎉✨",
      "संक्रांति की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🥳🌟",
    ],
    English: [
      "Happy Makar Sankranti! 🪁",
      "May this festival bring sweetness to your life! 🍯",
      "Happy Makar Sankranti! May the sun radiate peace, prosperity and happiness in your life 😊",
      "May this Makar Sankranti fill your life with energy and help you bring happiness and prosperity to you and your family. 🌟",
      "Wishing you a very Happy Makar Sankranti! 🎉",
      "May the warmth of the sun fill your heart with happiness on Makar Sankranti. ❤️",
      "Happy Makar Sankranti! Enjoy the kite flying! 🪁",
      "May this festival of Makar Sankranti bring you good luck and success. 👍",
      "Wishing you and your family a very Happy Makar Sankranti! 👨‍👩‍👧‍👦",
      "Happy Makar Sankranti! May your life be filled with sweet moments. 🍬",
      "May the festival of Makar Sankranti bring you closer to your loved ones. 😇",
      "Wishing you a Happy and Prosperous Makar Sankranti! 💰",
      "Happy Makar Sankranti! May your dreams come true. 🙏",
      "May this Makar Sankranti bring new opportunities to your life. 🚀",
      "Wishing you a Happy and Safe Makar Sankranti! 😊",
      "Happy Makar Sankranti! Enjoy the festivities! 🎊",
      "May the sweetness of tilgul fill your life with happiness on Makar Sankranti. 🍯❤️",
      "Wishing you a Makar Sankranti filled with joy and laughter! 🥳",
      "Happy Makar Sankranti! May you have a wonderful time with your family and friends. 🎉👨‍👩‍👧‍👦",
      "May this Makar Sankranti bring good health and wealth to your life. 💪💰",
      "Wishing you a colorful and joyous Makar Sankranti! 🌈",
      "Happy Makar Sankranti! May your life be as bright as the sun. ☀️",
    ],
  },
  "Gudi Padwa": {
    Marathi: [
      "गुडी पाडवा आणि नवीन वर्षाच्या हार्दिक शुभेच्छा! 🌸",
      "नवीन वर्षाची सुरुवात आनंदाने करा! 🎉",
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! हे नवीन वर्ष तुमच्यासाठी सुख-समृद्धी घेऊन येवो! 😊",
      "नवीन वर्षाच्या या शुभदिनी, तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏",
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंददायी असो! 🥳",
      "नवीन वर्षाच्या निमित्ताने सर्वांना प्रेम आणि सदिच्छा! ❤️",
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! तुमचा व्यवसाय आणि नोकरीत उत्कर्ष होवो! 🚀",
      "नवीन वर्षाच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉",
      "गुढीपाडव्याच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🌟",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 🎉🌸",
      "गुढीपाडव्याच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊",
      "नवीन वर्षाच्या या शुभ अवसरी, तुमच्या घरात लक्ष्मीचा वास असो! 💰",
      "गुढीपाडव्याच्या दिव्यांनी तुमचे जीवन उजळून निघो! ✨",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो. 😊",
      "गुढीपाडव्याच्या निमित्ताने तुम्हाला आणि तुमच्या कुटुंबाला खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦❤️",
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! 🪁 पतंग उडवा आणि आनंद साजरा करा! 🎉",
      "नवीन वर्षाच्या या शुभक्षणी, तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏🌟",
      "गुढीपाडव्याच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो! 🥳🎉",
      "नवीन वर्षाच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊🌸",
      "गुढीपाडव्याच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉✨",
      "गुढीपाडव्याच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🌟🥳",
      "नवीन वर्षाच्या हार्दिक शुभेच्छा! तुमचे आरोग्य उत्तम राहो! 💪",
    ],
    Hindi: [
      "गुड़ी पड़वा और नववर्ष की हार्दिक शुभकामनाएं! 🌸",
      "नए साल की शुरुआत खुशियों से हो! 🎉",
      "गुड़ी पड़वा की हार्दिक शुभकामनाएं! यह नया साल आपके लिए सुख-समृद्धि लाए! 😊",
      "नए साल के इस शुभ दिन, आपकी सभी मनोकामनाएं पूरी हों! 🙏",
      "गुड़ी पड़वा की हार्दिक शुभकामनाएं! आपका हर दिन आनंदमय हो! 🥳",
      "नए साल के अवसर पर सभी को प्यार और शुभकामनाएं! ❤️",
      "गुड़ी पड़वा की हार्दिक शुभकामनाएं! आपके व्यवसाय और नौकरी में उन्नति हो! 🚀",
      "नए साल के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎉",
      "गुड़ी पड़वा की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🌟",
      "नए साल की हार्दिक शुभकामनाएं! आपका हर पल आनंदमय हो! 🎉🌸",
      "गुड़ी पड़वा के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊",
      "नए साल के इस शुभ अवसर पर, आपके घर में लक्ष्मी का वास हो! 💰",
      "गुड़ी पड़वा के दीयों से आपका जीवन जगमगा उठे! ✨",
      "नए साल की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो। 😊",
      "गुड़ी पड़वा के अवसर पर आपको और आपके परिवार को बहुत-बहुत शुभकामनाएं! 👨‍👩‍👧‍👦❤️",
      "गुड़ी पड़वा की हार्दिक शुभकामनाएं! 🪁 पतंग उड़ाएं और आनंद मनाएं! 🎉",
      "नए साल के इस शुभ अवसर पर, आपकी सभी मनोकामनाएं पूरी हों! 🙏🌟",
      "गुड़ी पड़वा की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो! 🥳🎉",
      "नए साल के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊🌸",
      "गुड़ी पड़वा के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎉✨",
      "गुड़ी पड़वा की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🌟🥳",
      "नए साल की हार्दिक शुभकामनाएं! आपका स्वास्थ्य उत्तम रहे! 💪",
    ],
    English: [
      "Happy Gudi Padwa and New Year! 🌸",
      "May this new year bring joy and success! 🎉",
      "Happy Gudi Padwa! May this festival bring you new beginnings and prosperity. 😊",
      "Wishing you a very Happy Gudi Padwa and a prosperous New Year! 🌟",
      "May the blessings of Gudi Padwa be with you always. 🙏",
      "Happy Gudi Padwa! May your life be filled with happiness and success. 🥳",
      "Wishing you and your family a very Happy Gudi Padwa! 👨‍👩‍👧‍👦",
      "Happy Gudi Padwa! May your dreams come true. ✨",
      "May the festival of Gudi Padwa bring you closer to your loved ones. ❤️",
      "Wishing you a Happy and Prosperous Gudi Padwa! 💰",
      "Happy Gudi Padwa! Enjoy the celebrations! 🎊",
      "May the colors of Gudi Padwa brighten your life. 🌈",
      "Wishing you a Happy and Safe Gudi Padwa! 😊",
      "Happy Gudi Padwa! May all your wishes come true. 🌟",
      "May this Gudi Padwa bring new opportunities to your life. 🚀",
      "Wishing you a Gudi Padwa filled with joy and laughter! 🥳🎉",
      "Happy Gudi Padwa! May you have a wonderful time with your family and friends. 👨‍👩‍👧‍👦❤️",
      "May this Gudi Padwa bring good health and wealth to your life. 💪💰",
      "Wishing you a colorful and joyous Gudi Padwa! 🌈🎊🌸",
      "Happy Gudi Padwa! May your life be as bright as the Gudi. ✨",
      "May the blessings of Lord Brahma be with you on Gudi Padwa. 🙏🌟",
      "Wishing you a Gudi Padwa filled with sweet memories! 🍬",
    ],
  },
  "Ganesh Chaturthi": {
    Marathi: [
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! 🙏🎉",
      "गणपती बाप्पा मोरया! 🕉️",
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! गणपती बाप्पा तुमच्या सर्व मनोकामना पूर्ण करो! 😊",
      "गणपती बाप्पा मोरया! मंगलमूर्ती मोरया! 😇",
      "गणेश चतुर्थीच्या शुभदिनी, तुमच्या जीवनातील सर्व विघ्ने दूर होवोत! 🙏✨",
      "गणपती बाप्पाच्या आशीर्वादाने, तुमच्या घरात सुख-समृद्धी नांदो! 🏡🌟",
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंददायी असो! 🥳",
      "गणपती बाप्पा मोरया! तुमच्या सर्व इच्छा पूर्ण होवोत! 🎉",
      "गणेश चतुर्थीच्या निमित्ताने सर्वांना प्रेम आणि सदिच्छा! ❤️",
      "गणपती बाप्पाच्या कृपेने, तुमच्या जीवनात यश आणि कीर्ती मिळो! 👍",
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! तुमचा व्यवसाय आणि नोकरीत उत्कर्ष होवो! 🚀",
      "गणपती बाप्पा मोरया! तुमच्या घरात शांती आणि समाधान नांदो! 🕊️",
      "गणेश चतुर्थीच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎊",
      "गणेश चतुर्थीच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🌟",
      "गणपती बाप्पा मोरया! तुमच्या सर्व दुःखे दूर होवोत! ✨",
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 😊🎉",
      "गणेश चतुर्थीच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊🙏",
      "गणपती बाप्पा मोरया! तुमच्या घरात लक्ष्मीचा वास असो! 💰",
      "गणेश चतुर्थीच्या दिव्यांनी तुमचे जीवन उजळून निघो! 🪔🌟",
      "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो. 🥳🎉",
      "गणपती बाप्पा मोरया! तुमच्या कुटुंबाला सुख आणि शांती लाभो! 👨‍👩‍👧‍👦🕊️",
      "गणेश चतुर्थीच्या निमित्ताने तुम्हाला आणि तुमच्या कुटुंबाला खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦❤️",
    ],
    Hindi: [
      "गणेश चतुर्थी की हार्दिक शुभकामनाएं! 🙏🎉",
      "गणपति बप्पा मोरया! 🕉️",
      "गणेश चतुर्थी की हार्दिक शुभकामनाएं! गणपति बप्पा आपकी सभी मनोकामनाएं पूरी करें! 😊",
      "गणपति बप्पा मोरया! मंगलमूर्ति मोरया! 😇",
      "गणेश चतुर्थी के शुभ दिन, आपके जीवन के सभी कष्ट दूर हों! 🙏✨",
      "गणपति बप्पा के आशीर्वाद से, आपके घर में सुख-समृद्धि बनी रहे! 🏡🌟",
      "गणेश चतुर्थी की हार्दिक शुभकामनाएं! आपका हर दिन आनंदमय हो! 🥳",
      "गणपति बप्पा मोरया! आपकी सभी इच्छाएं पूरी हों! 🎉",
      "गणेश चतुर्थी के अवसर पर सभी को प्यार और शुभकामनाएं! ❤️",
      "गणपति बप्पा की कृपा से, आपके जीवन में यश और कीर्ति मिले! 👍",
      "गणेश चतुर्थी की हार्दिक शुभकामनाएं! आपके व्यवसाय और नौकरी में उन्नति हो! 🚀",
      "गणपति बप्पा मोरया! आपके घर में शांति और समाधान बना रहे! 🕊️",
      "गणेश चतुर्थी के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎊",
      "गणेश चतुर्थी की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🌟",
      "गणपति बप्पा मोरया! आपके सभी दुःख दूर हों! ✨",
      "गणेश चतुर्थी की हार्दिक शुभकामनाएं! आपका हर पल आनंदमय हो! 😊🎉",
      "गणेश चतुर्थी के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊🙏",
      "गणपति बप्पा मोरया! आपके घर में लक्ष्मी का वास हो! 💰",
      "गणेश चतुर्थी के दीयों से आपका जीवन जगमगा उठे! 🪔🌟",
      "गणेश चतुर्थी की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो। 🥳🎉",
      "गणपति बप्पा मोरया! आपके परिवार को सुख और शांति मिले! 👨‍👩‍👧‍👦🕊️",
      "गणेश चतुर्थी के अवसर पर आपको और आपके परिवार को बहुत-बहुत शुभकामनाएं! 👨‍👩‍👧‍👦❤️",
    ],
    English: [
      "Happy Ganesh Chaturthi! 🙏🎉",
      "May Lord Ganesha bless you with success! 🕉️",
      "Happy Ganesh Chaturthi! May Lord Ganesha remove all obstacles from your life. 😊",
      "Ganpati Bappa Morya! Mangal Murti Morya! 😇",
      "Wishing you a very Happy Ganesh Chaturthi! 🌟",
      "May the blessings of Lord Ganesha be with you always. 🙏",
      "Happy Ganesh Chaturthi! May your life be filled with happiness and success. 🥳",
      "Ganpati Bappa Morya! May all your wishes come true. 🎉",
      "Wishing you and your family a very Happy Ganesh Chaturthi! 👨‍👩‍👧‍👦",
      "May Lord Ganesha shower his blessings on you and your family. ❤️",
      "Happy Ganesh Chaturthi! May your dreams come true. ✨",
      "Ganpati Bappa Morya! May your home be filled with peace and prosperity. 🏡🕊️",
      "Wishing you a Happy and Prosperous Ganesh Chaturthi! 💰",
      "Happy Ganesh Chaturthi! Enjoy the celebrations! 🎊",
      "May the blessings of Lord Ganesha be with you on this auspicious occasion. 🙏🌟",
      "Ganpati Bappa Morya! May you be blessed with good health and wealth. 💪💰",
      "Wishing you a Happy and Safe Ganesh Chaturthi! 😊",
      "Happy Ganesh Chaturthi! May your life be as bright as the stars. ✨🌟",
      "Ganpati Bappa Morya! May you have a wonderful year ahead. 🎉",
      "Wishing you a Ganesh Chaturthi filled with joy and laughter! 🥳",
      "Happy Ganesh Chaturthi! May you have a great time with your family and friends. 👨‍👩‍👧‍👦❤️",
      "May Lord Ganesha guide you on the right path always. 🌟🙏",
    ],
  },
  Christmas: {
    Marathi: [
      "नाताळच्या हार्दिक शुभेच्छा! 🎄",
      "आनंदी नाताळ आणि शुभ नववर्ष! 🎅",
      "नाताळच्या हार्दिक शुभेच्छा! प्रभु येशूचा आशीर्वाद तुमच्यावर राहो! 🙏",
      "नाताळ सण तुमच्या जीवनात आनंद आणि शांती घेऊन येवो! 😇",
      "नाताळच्या शुभदिनी, तुमच्या सर्व मनोकामना पूर्ण होवोत! ✨",
      "नाताळच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंददायी असो! 🥳",
      "नाताळच्या निमित्ताने सर्वांना प्रेम आणि सदिच्छा! ❤️",
      "नाताळ सण तुमच्या घरात सुख-समृद्धी घेऊन येवो! 🏡🌟",
      "नाताळच्या हार्दिक शुभेच्छा! तुमचा व्यवसाय आणि नोकरीत उत्कर्ष होवो! 🚀",
      "नाताळच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉",
      "नाताळच्या शुभेच्छा! तुमचे जीवन आनंद आणि उत्साहाने भरलेले असो! 🌟🎄",
      "नाताळच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक क्षण आनंददायी असो! 😊🎅",
      "नाताळच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊🎁",
      "नाताळच्या या शुभ अवसरी, तुमच्या घरात लक्ष्मीचा वास असो! 💰",
      "नाताळच्या दिव्यांनी तुमचे जीवन उजळून निघो! 🪔✨",
      "नाताळच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो. 🥳🎉",
      "नाताळच्या निमित्ताने तुम्हाला आणि तुमच्या कुटुंबाला खूप खूप शुभेच्छा! 👨‍👩‍👧‍👦❤️",
      "नाताळच्या हार्दिक शुभेच्छा! 🪁 पतंग उडवा आणि आनंद साजरा करा! 🎉🎄",
      "नाताळच्या या शुभक्षणी, तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏🌟",
      "नाताळच्या हार्दिक शुभेच्छा! तुमचा प्रत्येक दिवस आनंद आणि उत्साहाने भरलेला असो! 😊🎁",
      "नाताळच्या सणानिमित्त तुम्हाला खूप खूप शुभेच्छा! 🎊🎅",
      "नाताळच्या या मंगलमय पर्वावर, तुमच्या सर्व इच्छा पूर्ण होवोत! 🙏🎉✨",
    ],
    Hindi: [
      "क्रिसमस की हार्दिक शुभकामनाएं! 🎄",
      "मेरी क्रिसमस और नया साल मुबारक हो! 🎅",
      "क्रिसमस की हार्दिक शुभकामनाएं! प्रभु यीशु का आशीर्वाद आप पर बना रहे! 🙏",
      "क्रिसमस का त्योहार आपके जीवन में खुशी और शांति लाए! 😇",
      "क्रिसमस के शुभ दिन, आपकी सभी मनोकामनाएं पूरी हों! ✨",
      "क्रिसमस की हार्दिक शुभकामनाएं! आपका हर दिन आनंदमय हो! 🥳",
      "क्रिसमस के अवसर पर सभी को प्यार और शुभकामनाएं! ❤️",
      "क्रिसमस का त्योहार आपके घर में सुख-समृद्धि लाए! 🏡🌟",
      "क्रिसमस की हार्दिक शुभकामनाएं! आपके व्यवसाय और नौकरी में उन्नति हो! 🚀",
      "क्रिसमस के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎉",
      "क्रिसमस की शुभकामनाएं! आपका जीवन आनंद और उत्साह से भरा हो! 🌟🎄",
      "क्रिसमस की हार्दिक शुभकामनाएं! आपका हर पल आनंदमय हो! 😊🎅",
      "क्रिसमस के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊🎁",
      "क्रिसमस के इस शुभ अवसर पर, आपके घर में लक्ष्मी का वास हो! 💰",
      "क्रिसमस के दीयों से आपका जीवन जगमगा उठे! 🪔✨",
      "क्रिसमस की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो। 🥳🎉",
      "क्रिसमस के अवसर पर आपको और आपके परिवार को बहुत-बहुत शुभकामनाएं! 👨‍👩‍👧‍👦❤️",
      "क्रिसमस की हार्दिक शुभकामनाएं! 🪁 पतंग उड़ाएं और आनंद मनाएं! 🎉🎄",
      "क्रिसमस के इस शुभ अवसर पर, आपकी सभी मनोकामनाएं पूरी हों! 🙏🌟",
      "क्रिसमस की हार्दिक शुभकामनाएं! आपका हर दिन आनंद और उत्साह से भरा हो! 😊🎁",
      "क्रिसमस के त्योहार पर आपको बहुत-बहुत शुभकामनाएं! 🎊🎅",
      "क्रिसमस के इस मंगल अवसर पर, आपकी सभी इच्छाएं पूरी हों! 🙏🎉✨",
    ],
    English: [
      "Merry Christmas! 🎄",
      "Wishing you a joyful Christmas and a Happy New Year! 🎅",
      "Merry Christmas! May the spirit of Christmas bring you peace and joy. 😇",
      "Wishing you a very Merry Christmas and a Happy New Year! 🌟",
      "May the blessings of Christmas be with you always. 🙏",
      "Merry Christmas! May your life be filled with happiness and success. 🥳",
      "Wishing you and your family a very Merry Christmas! 👨‍👩‍👧‍👦",
      "Merry Christmas! May your dreams come true. ✨",
      "May the festival of Christmas bring you closer to your loved ones. ❤️",
      "Wishing you a Happy and Prosperous Christmas! 💰",
      "Merry Christmas! Enjoy the celebrations! 🎊",
      "May the magic of Christmas fill your heart with joy. 🎁",
      "Wishing you a Happy and Safe Christmas! 😊",
      "Merry Christmas! May all your wishes come true. 🌟",
      "May this Christmas bring new opportunities to your life. 🚀",
      "Wishing you a Christmas filled with joy and laughter!",
      "Merry Christmas! May you have a wonderful time with your family and friends.",
      "May this Christmas bring good health and wealth to your life.",
      "Wishing you a colorful and joyous Christmas!",
      "Merry Christmas! May your life be as bright as the Christmas lights.",
      "May the blessings of Lord Jesus be with you on Christmas.",
      "Wishing you a Christmas filled with sweet memories!",
    ],
  },
  "Valentine": {
    "Marathi": [
      "प्रेमाच्या दिवशी एकच गोष्ट सांगावीशी वाटते, ती म्हणजे I Love You!!! ❤️ हॅप्पी व्हॅलेंनटाईन डे 🥰",
      "हळुवार जपून ठेवलेले क्षण, तेच माझ्या जगण्याची आस आहे, एकेक साठवून ठेवलेली आठवण, तिच माझ्यासाठी खास आहे…. Happy Valentine’s Day! 💖",
      "प्रेम म्हणजे काय असते हे तुझ्या सहवासात कळाले, तू माझ्या आयुष्यात आल्याने स्वर्गसुख मिळाले, कधी सोडू नकोस साथ माझी, जन्मभर राहिन मी फक्त तुझी!! 💘 हॅप्पी व्हॅलेंनटाईन डे 😘",
      "सगळ्यांपेक्षा वेगळी आणि सुंदर, तू नक्कीच आहेस, पण त्यापेक्षाही सुंदर, तुझं माझ्या आयुष्यात असणं आहे……. Happy Valentine’s Day! 💕",
      " तुझे माझे नाते असे असावे, जे शब्दांच्या पलीकडे एकमेकांस उमगावे, कितीही एकमेकांपासून दूर असलो तरी... मनाने कायम एकमेकांच्या जवळ असावे. Happy Valentine’s Day 💞",
      "ना मला तुला गमवायचं आहे, ना तुझ्या आठवणीत रडत बसायचंय, देशील का मला कायम साथ? सांग ना मला तुझ्या मनातील बात. Happy Valentine Day 💌",
      "दिलेलं वचन पूर्ण करायचंय, सुंदर गुलाब 🌹 तुझ्यासाठी आणायचंय, नात्यामध्ये आपल्या आहे किती प्रेम, हे तुला या क्षणाला सांगायचंय. हॅपी वॅलेंटाइन डे 💝",
      "तुला पाहता क्षणी भुललो तुझ्या प्रेमात, गोडवा आणि प्रेम राहो आपल्या नात्यात, मागशील ते ठेवेल तुझ्या पुढ्यात, होकार कळव मला या क्षणात, प्रेमाच्या दिवसाच्या खूप खूप शुभेच्छा... Happy Valentine’s Day! 🥰",
      "तू माझ्या आयुष्यातील मोलाचा क्षण, प्रत्येक वेळी येते तुझी आठवण, राहु दै सदैव असेच प्रेम तुझे माझ्यावर, अशीच साथ देऊया एकमेकांना आपण. Happy Valentine’s Day! ❤️",
      "Happy Valentine's Day! आजचा दिवस आहे खास, जन्मभर मिळो मला तुझा सहवास, आजचा दिवस आनंदाने भरलेला जावो आणि आयुष्यही तुझ्या सान्निध्यात 💖",
      "Happy Valentine's Day! तुझ्या हसण्याइतका आजचा सुंदर दिवस. संपूर्ण वर्षभर वाट पाहत होतो या दिवसाची, कारण आजचाच तो दिवस आहे जेव्हा मला मागायचा आहे आयुष्यभरासाठी तुझी साथ 💕",
      "Happy Valentine's Day! या विशेष दिवशी, तुला इतकंच सांगायचं आहे की जितकं प्रेम तू माझ्यावर करतेस त्याच्या कितीतरी पटीने मी करतो आणि आयुष्यभर करत राहीन 💞",
      "Happy Valentine's Day! तुझ्या प्रेमाच्या बाहुपाशाशिवाय अधिक सुख कसलेच नाही, मला पाहिल्यावर तुझ्या हृदयाचे जे ठोके ऐकू येतात, त्याशिवाय आनंद कशातच नाही. जन्मभर मला हाच आनंद मिळवायचा आहे, My Love 🥰",
      "Happy Valentine's Day! रोज माझे हृदय चोरणाऱ्या माणसासाठी हा खास संदेश आहे. तुझे प्रेम हे माझ्या जगण्याचा ध्यास आहे ❤️",
      "Happy Valentine's Day! तू फक्त माझा प्रियकर नाहीस; तू माझे सर्वस्व आहेस आणि माझ्या आयुष्यातील एकमेव प्रेम आहे. सुंदर आठवणी बनवण्यासाठी मला तुझ्यासह आयुष्य कायम जगायचं आहे 😘",
      "Happy Valentine's Day! तुझ्यासोबतचा प्रत्येक दिवस हा आतापर्यंतच्या सर्वात रोमांचक प्रेमकथेचा एक अध्याय ठरलाय. या व्हॅलेंटाईन डे च्या दिवशी, मी तुझा मनापासून आदर करते आणि आयुष्यभर करत राहीन, साथ देईन हेच सांगायचं आहे 💖",
      "Happy Valentine's Day! ज्याच्याजवळ माझ्या हृदयाची किल्ली आहे, ज्याचे प्रेम माझे मार्गदर्शक आहे, त्या माझ्या सर्वस्व असणाऱ्याला व्हॅलेंटाईन डे च्या मनःपूर्वक शुभेच्छा 💕",
      "तुझ्या प्रेमाचा रंग तो, अजूनही बहरत आहे, शेवटच्या क्षणापर्यंत, मी फक्त तुझीच आहे.. Happy Valentines Day ❤️!",
      "बंध जुळले असता, मनाचं नातंही जुळायला हवं, अगदी स्पर्शातूनही, सारं सारं कळायला हवं.. Happy Valentines Day 💞!",
      "डोळ्यातल्या स्वप्नाला, कधी प्रत्यक्षातही आण, किती प्रेम करतो तुझ्यावर, हे न सांगताही जाण.. Happy Valentines Day 🥰!",
      "असंच कधी तुला, माझ्या आठवणीत, हसताना पाहायचंय, जीवनाचं सुंदर स्वप्न मला, आता तुझ्याचसोबत जगायचंय.. Happy Valentines Day 💖!",
      "संगीत जुनच आहे, सूर नव्यानं जुळत आहेत, मनही काहीसं जुनच, तेही नवी तार छेडत आहेत.. Happy Valentines Day 💕!",
      "काळोखाच्या वाटेवर चालताना, हातामध्ये तुझाच हात, धडपडत्या आयुष्याला सावरताना, आता फक्त तुझीच साथ.. Happy Valentines Day ❤️!",
      "एकटाच चालतो आहे आजवरी, हात हाती घेशील का? घेईन उंच भरारी तुजसवे, साथ मज देशील का? Happy Valentines Day 💘!"
    ],
    "Hindi": [
      "आपके प्रेम का रंग, आज भी खिल रहा है, अंतिम क्षण तक, मैं सिर्फ आपका हूँ.. Happy Valentines Day ❤️!",
      "रिश्ते जुड़ने पर, मन का रिश्ता भी जुड़ना चाहिए, यहां तक कि स्पर्श से भी, सब कुछ पता चलना चाहिए.. Happy Valentines Day 💞!",
      "आंखों के सपने को, कभी हकीकत में भी लाओ, मैं तुमसे कितना प्यार करता हूं, यह बिना बताए भी जान लो.. Happy Valentines Day 🥰!",
      "कभी-कभी मैं तुम्हें, मेरी यादों में, हंसते हुए देखना चाहता हूं, मुझे जीवन का एक सुंदर सपना, अब तुम्हारे साथ जीना है.. Happy Valentines Day 💖!",
      "संगीत पुराना है, धुनें नई जुड़ रही हैं, दिल भी कुछ पुराना है, वो भी नई धुन छेड़ रहा है.. Happy Valentines Day 💕!",
      "अंधेरे रास्ते पर चलते हुए, हाथ में तुम्हारा ही हाथ, लड़खड़ाती जिंदगी को संभालते हुए, अब सिर्फ तुम्हारा साथ.. Happy Valentines Day ❤️!",
      "मैं आज तक अकेला चल रहा हूं, क्या तुम मेरा हाथ थामोगे? मैं तुम्हारे साथ ऊंची उड़ान भरूंगा, क्या तुम मेरा साथ दोगे? Happy Valentines Day 💘!",
      "आपके प्रेम का रंग, आज भी खिल रहा है, अंतिम क्षण तक, मैं सिर्फ आपका हूँ.. Happy Valentines Day ❤️!"
    ],
    "English": [
      "May you always find in each other the love, laughter and happiness that only partners in life share. Happy Valentine’s Day! ❤️",
      "Happy Valentine’s Day to the most beautiful woman in my life. 🥰",
      "You are my best friend, my lover, my everything. Happy Valentine’s Day! 💖",
      "I love you more than words can say. Happy Valentine’s Day! 💕",
      "I am so lucky to have you in my life. Happy Valentine’s Day! 💞",
      "You make me a better person. Happy Valentine’s Day! 😘",
      "I can’t imagine my life without you. Happy Valentine’s Day!💘",
      "I am so grateful for your love. Happy Valentine’s Day!💝",
      "You are the love of my life. Happy Valentine’s Day! ❤️",
      "I will always love you. Happy Valentine’s Day! 🥰"
    ]
  },
  }


// Function to show notification message
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = message;

  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = '#4CAF50';
  notification.style.color = 'white';
  notification.style.padding = '15px 25px';
  notification.style.borderRadius = '5px';
  notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  notification.style.zIndex = '1000';
  notification.style.textAlign = 'center';
  notification.style.animation = 'slideUp 0.5s ease-out';

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from {
        transform: translate(-50%, 100%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  // Add to document
  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.5s ease-in reverse';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 5000);
}

// Function to handle navigation to wishes page
function goToWishes() {
  const language = document.getElementById("languageSelect").value;
  const festival = document.getElementById("festivalSelect").value;

  if (!language || !festival) {
    alert("Please select both language and festival.");
    return;
  }

  window.location.href = `wishes.html?language=${language}&festival=${festival}`;
}

// Function to load wishes based on selected language and festival
function loadWishes() {
  const urlParams = new URLSearchParams(window.location.search);
  const language = urlParams.get("language");
  const festival = urlParams.get("festival");

  const wishesContainer = document.getElementById("wishesContainer");
  wishesContainer.innerHTML = "";

  if (wishes[festival] && wishes[festival][language]) {
    wishes[festival][language].forEach((wish) => {
      const wishDiv = document.createElement("div");
      wishDiv.className = "wish";

      const wishText = document.createElement("p");
      wishText.innerText = wish;

      const sendButton = document.createElement("button");
      sendButton.innerText = "Send";
      sendButton.onclick = () => sendWish(wish);

      const customizeButton = document.createElement("button");
      customizeButton.innerText = "Customize";
      customizeButton.onclick = () => customizeWish(wishText, sendButton);

      wishDiv.appendChild(wishText);
      wishDiv.appendChild(sendButton);
      wishDiv.appendChild(customizeButton);
      wishesContainer.appendChild(wishDiv);
    });
  } else {
    wishesContainer.innerHTML = "<p>No wishes found for the selected festival and language.</p>";
  }
}

// Function to customize wish text
function customizeWish(wishTextElement, sendButton) {
  const originalText = wishTextElement.innerText;
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = originalText;

  wishTextElement.innerHTML = "";
  wishTextElement.appendChild(inputField);

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.onclick = () => saveCustomizedWish(inputField, wishTextElement, sendButton);
  wishTextElement.appendChild(saveButton);
}

// Function to save customized wish
function saveCustomizedWish(inputField, wishTextElement, sendButton) {
  const customizedText = inputField.value.trim();

  if (customizedText === "") {
    alert("Wish cannot be empty.");
    return;
  }

  wishTextElement.innerHTML = customizedText;
  sendButton.onclick = () => sendWish(customizedText);
}

// Function to send wish via WhatsApp
function sendWish(wishText) {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(wishText)}`;
  window.open(whatsappLink, "_blank");
}

// Function to initialize WhatsApp buttons for image sharing and downloading
function initializeWhatsAppButtons() {
  document.querySelectorAll(".sendToWhatsApp").forEach((button) => {
    button.addEventListener("click", async function() {
      const imageElement = this.previousElementSibling;
      
      try {
        const a = document.createElement('a');
        
        a.download = 'festival_image.png';
        
        a.href = imageElement.src;
        
        document.body.appendChild(a);
        
        a.click();
        
        document.body.removeChild(a);
        
        // Show notification
        showNotification("Your image is downloading to your device. You can share it with your loved ones. Thanks for using our site! 🎉");
        
      } catch (error) {
        console.error('Error downloading image:', error);
        showNotification('Failed to download image. Please try again.');
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("wishesContainer")) {
    loadWishes();
  }

  initializeWhatsAppButtons();

  const imageWishesButton = document.getElementById("imageWishesButton");
  if (imageWishesButton) {
    imageWishesButton.addEventListener("click", () => {
      const urlParams = new URLSearchParams(window.location.search);
      const festival = urlParams.get("festival");

      if (festival) {
        window.location.href = `${festival.toLowerCase().replace(" ", "_")}_image.html`;
      } else {
        alert("Please select a festival first.");
      }
    });
  }
});
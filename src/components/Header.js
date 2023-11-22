import React, { useState } from "react";

function Header() {
  const [isAnswerVisible, setIsAnswerVisible] = useState({});
  const topicRefs = {};

  const toggleAnswer = (title, itemIndex) => {
    setIsAnswerVisible((prevState) => {
      const currentIndex = prevState[title] === itemIndex ? null : itemIndex;
      return {
        ...prevState,
        [title]: currentIndex,
      };
    });

    if (topicRefs[title]) {
      topicRefs[title].scrollIntoView({ behavior: "smooth" });
    }
  };

  const drrectangleStyle = {
    backgroundColor: "#FF6B6B",
    width: "100.5%",
    height: "8px",
  };

  const imageContainerStyle = {
    position: "relative",
  };

  const centerTextContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
  };

  const faqTextStyle = {
    fontSize: "90px",
    color: "#F9F5F2",
    fontFamily: "Playfair Display",
  };

  const helpTextStyle = {
    fontSize: "15px",
    color: "#F9F5F2",
    fontFamily: "Raleway",
  };

  const bottomRectangleStyle = {
    backgroundColor: "#FF6B6B",
    width: "100.5%",
    height: "4px",
    margin: "-5px 0 0",
  };

  const titleStyle = {
    fontSize: "22px",
    color: "#000000",
    fontWeight: "500",
    fontFamily: "Raleway",//fontWeight: "bold",
    marginLeft: "190px",
    marginTop: "30px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
  };

  const buttonRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const buttonStyle = {
    width: "350px",
    height: "53px",
    backgroundColor: "#F9F5F2",
    color: "#333333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontFamily: "Abril Fatface",
    fontWeight: "500",
    cursor: "pointer",
    margin: "0 90px",
    borderRadius: "30px",
    border: "1px solid #6B6969",
  };

  const rectangleStyle = {
    width: "1300px",
    margin: "20px auto",
    height: "auto",
    backgroundColor: "#F9F5F2",
    border: "1px solid #6B6969",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  };

  const verticalLineStyle = {
    width: "1px",
    height: "100%",
    backgroundColor: "#6B6969",
    position: "absolute",
    top: "0",
    left: "92%",
    transform: "translateX(-50%)",
  };

  const plusMarkStyle = {
    position: "absolute",
    top: "50%",
    left: "96%",
    transform: "translate(-50%, -50%)",
    fontSize: "24px",
  };

  const textInsideRectangleStyle = {
    fontSize: "20px",
    fontFamily: "Raleway",
    color: "#000000",
    textAlign: "center",
    margin: "25px 0",
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "98%",
  };

  const answerContainerStyle = {
    maxWidth: "90%",
  };

  const questionStyle = {
    fontSize: "20px",
    fontFamily: "Raleway",
    cursor: "pointer",
  };

  const questionActiveStyle = {
    color: "red",
  };

  const topics = [
    {
      title: "Getting started",
      items: [
        {
          question: "What is YumHealth?",
          answer: "Yummly is the recipe app and site that learns what you like. With over 2 million recipes and food related articles and videos, it's the ultimate kitchen tool for your computer, iPhone, iPad & Android devices. Whether it’s finding a recipe, meal planning or taking a digital grocery list to the store, Yummly makes it easier for foodies to do what they love – discover, cook, eat and share!",
        },
        {
          question: "How to use YumHealth?",
          answer: "YumHealth is available on the web. Access the most powerful recipe search, your digital recipe box .Get started by signing up and setting up your taste profile with your unique preferences, diets, and allergies — and we’ll only serve up recipes that match your criteria",
        },
        {
          question: "Sharing recipes",
          answer: "Share any recipe via Facebook, Twitter, or Pinterest from the sharing icons on the recipe. You can find these right below the print icon on each recipe.To share this recipe through email, copy the URL from the address bar and paste it into any email you prefer. ",
        },
        {
          question: "Account settings and profile",
          answer: "In your settings, you can edit your profile, update email address & password, adjust your taste preferences and control the email communications you receive from us. We make it easy for you to tell us what you would like to hear from us. Just checkmark the topics that you would like to hear from us about.",
        },
      ],
    },
    {
      title: "Website Help Topics",
      items: [
        {
          question: "Discovering recipes",
          answer: "We use your YumHealth (our way of liking and saving recipes) to enhance your recipe experience. Our recommendations are based on meal themes like 'Two-Day Kick Start,' 'Two-Day Made Easy,' and 'Comfort Food.' Explore these suggestions in your 'Just for You' recipe feed and weekly email updates. The more you Yum, the better we get at curating your experience.",
        },
        {
          question: "Recipe box",
          answer: "Search through over a million recipes from across the web (and world) and save your favorites to your recipe box.",
        },
      ],
    },
    {
      title: "Fix a common problem",
      items: [
        {
          question: "Account & password problems",
          answer: "Reset your password by pressing the 'Forgot Password?' link under the Email login page, then follow the confirmation link in the password reset email you receive.If this email is not in your spam folder, it probably means that you do not have email/password login set up on Yummly and that your account is through either Facebook or Google login. Please login using the method you originally used to create your account.",
        },
        {
          question: "Recipe search result problems",
          answer: "We may have imported the recipe information onto our site incorrectly. If a recipe came up in your search results or recipe recommendations when it shouldn't have, please submit a request. Make sure to include: -The recipe name and link -What you searched for and the search filters you use   - Why you believe the recipe came up in your search results incorrectly",
        },
      ],
    },
    {
      title: "Organizing Recipes",
      items: [
        {
          question: "How do I make changes to my Meal Plan on the website?",
          answer: "You can edit your meal plan at any time.To remove a recipe, just click the 'X' in the upper right-hand corner of the recipe card. To delete everything in your plan, select the 'Clear All' button at the top of the page.To add new recipes to the plan, either select the 'Add Recipes' button to return to the Meal Planner recommendations page or use the mceclip1.png button on any recipe page in Yummly to instantly add a recipe to your current plan.",
        },
        {
          question: "How do I add recipes to my Meal Plan on the website?",
          answer: "You can add recipes to your Plan in two ways:Open the Meal Planner to access your personalized recommendation feed. Just click the mceclip0.png button on any recommended recipes you want to add to your Plan.Open any recipe on Yummly, and find the mceclip1.png icon. Click!",
        },
        
      ],
    },
    {
      title: "Your Account",
      items: [
        {
          question: "Logging in to the website",
          answer: "You'll need an account to use the majority of Yummly features on the website. You can create an account or sign into your account vi - Email/password combo/Apple ID/Facebook/Google",
        },
        {
          question: "Your profile",
          answer: "Share your recipe box and collections ,  Search for recipes , Change your profile picture.",
        },
        {
          question: "Website Account settings",
          answer: "Edit your account information ,  Change email address , Change/add password. If you created your account via Facebook, Apple ID or Google, you can add a password to your account by pressing the ‘Add Password’ button.  This has to be done through the website.",
        },
      ],
    },
    {
      title: "Account Deactivation",
      items: [
        {
          question: "Unsubscribe from emails",
          answer: "Unsubscribe from some or all Yummly emails in your account settings by checking or unchecking the types of emails. Click 'Save' once you've made your selections. You can also click 'Unsubscribe From All' to stop all emails.",
        },
        {
          question: "Delete account",
          answer: "Deleting your account means your saved recipes, collections, and personalization preferences will be permanently removed from Yummly. Once you confirm, your account will be deactivated immediately.Note: This will not end a Subscription if you have one.  You need to cancel your subscription before deleting your account",
        },
        {
          question: "Change the email address on your account",
          answer: "To change the email address on your account, go to your Account Settings, click in the email address box and update your email address, then click 'Save' at the bottom of the screen.",
        },
      ],
    },
  ];

  return (
    <div>
      <div style={drrectangleStyle}></div>
      <div style={imageContainerStyle}>
        <img
          src="/faqheader.jpg"
          alt="FAQ Header"
          style={{ width: "1685px", height: "364px" }}
        />
        <div style={centerTextContainerStyle}>
          <div style={faqTextStyle}>FAQS</div>
          <div style={helpTextStyle}>WE ARE HERE TO HELP</div>
        </div>
      </div>
      <div style={bottomRectangleStyle}></div>

      <div>
        <div style={buttonContainerStyle}>
          <div style={buttonRowStyle}>
            {topics.slice(0, 3).map((topic, index) => (
              <div
                style={buttonStyle}
                key={index}
                onClick={() => toggleAnswer(topic.title, 0)}
              >
                <span
                  style={{
                    ...questionStyle,
                    ...(isAnswerVisible[topic.title] === 0
                      ? questionActiveStyle
                      : {}),
                  }}
                >
                  {topic.title}
                </span>
              </div>
            ))}
          </div>
          <div style={buttonRowStyle}>
            {topics.slice(3).map((topic, index) => (
              <div
                style={buttonStyle}
                key={index}
                onClick={() => toggleAnswer(topic.title, 0)}
              >
                <span
                  style={{
                    ...questionStyle,
                    ...(isAnswerVisible[topic.title] === 0
                      ? questionActiveStyle
                      : {}),
                  }}
                >
                  {topic.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {topics.map((topic, index) => (
          <div key={index}>
            <div
              style={titleStyle}
              ref={(ref) => (topicRefs[topic.title] = ref)}
            >
              {topic.title}
            </div>
            {topic.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div
                  style={rectangleStyle}
                  onClick={() => toggleAnswer(topic.title, itemIndex)}
                >
                  <div style={verticalLineStyle}></div>
                  <div style={plusMarkStyle}>
                    {isAnswerVisible[topic.title] === itemIndex ? (
                      <span style={{ color: "red" }}>x</span>
                    ) : (
                      "+"
                    )}
                  </div>
                  <div style={textInsideRectangleStyle}>
                    <span
                      style={{
                        ...questionStyle,
                        ...(isAnswerVisible[topic.title] === itemIndex
                          ? questionActiveStyle
                          : {}),
                      }}
                    >
                      {item.question}
                    </span>
                    {isAnswerVisible[topic.title] === itemIndex && (
                      <div style={answerContainerStyle}>
                        <span style={questionStyle}>{item.answer}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;

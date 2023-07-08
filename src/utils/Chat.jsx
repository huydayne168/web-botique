import React, { useState } from "react";
import styles from "./Chat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import messIcon from "../images/facebook-messenger.svg";
import { faFaceSmile, faPaperclip } from "@fortawesome/free-solid-svg-icons";
const Chat = () => {
    const [chatPopup, setChatPopup] = useState(false);

    function chatBoxPopupHandler() {
        setChatPopup((prevState) => !prevState);
    }

    return (
        <div className={styles.chat}>
            {chatPopup && (
                <div className={styles["chat-box"]}>
                    <div className={styles["chat-box__heading"]}>
                        Customer Support
                    </div>

                    <div className={styles["chat-box__body"]}>
                        {/* render chats here */}
                    </div>

                    <div className={styles["chat-box__bottom"]}>
                        <input type="text" name="chat" id="chat" />
                        <FontAwesomeIcon icon={faPaperclip} />
                        <FontAwesomeIcon icon={faFaceSmile} />
                        <button>Gửi</button>
                    </div>
                </div>
            )}
            <img src={messIcon} alt="mess" onClick={chatBoxPopupHandler} />
        </div>
    );
};

export default Chat;

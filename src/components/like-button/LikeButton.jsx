import { useContext } from "react";
import { LikeContext } from "@/context/LikedContext.jsx";
import LikeIcon from "../../assets/like.svg?react";
import "./LikeButton.css";

const LikeButton = ({ id, className }) => {
    const { likes, toggleLikes } = useContext(LikeContext);

    // Check if product is liked
    const isLiked = likes.includes(id);

    return (
        <button
            className={`like-button ${isLiked ? "like-button--liked" : ""} ${className}`}
            onClick={() => toggleLikes(id)}
        >
            {/* Conditionally apply the 'like-icon--liked' class */}
            <LikeIcon className={`like-icon ${isLiked ? "like-icon--liked" : ""}`} />
        </button>
    );
};

export default LikeButton;

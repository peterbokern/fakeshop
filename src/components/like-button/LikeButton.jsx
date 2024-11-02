import { useContext } from "react";
import { LikeContext } from "@/context/LikedContext.jsx";
import { UserContext } from "@/context/UserContext.jsx"; // Import UserContext
import LikeIcon from "../../assets/like.svg?react";
import "./LikeButton.css";
import { toast } from "react-toastify";

const LikeButton = ({ id, className }) => {
    const { likes, toggleLikes } = useContext(LikeContext);
    const { isAuthenticated } = useContext(UserContext);

    const isLiked = likes.includes(id);

    const handleOnClick = () => {
        if (!isAuthenticated) {
            toast.warning('Login to like items');
            return;
        }
        toggleLikes(id);
    };

    return (
        <button
            className={`like-button ${isLiked ? "like-button--liked" : ""} ${className || ""}`}
            onClick={handleOnClick}
            aria-label={isLiked ? "Unlike item" : "Like item"}
        >
            <LikeIcon className={`like-icon ${isLiked ? "like-icon--liked" : ""}`} />
        </button>
    );
};

export default LikeButton;

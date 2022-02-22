import { useSelector } from "react-redux";

export default () => {
    const { email, token, id } = useSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
};

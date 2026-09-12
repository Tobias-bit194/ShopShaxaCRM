import { useMutation } from "@tanstack/react-query";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

const useLogin = () => {
    const navigate = useNavigate();
    
    const { isPending, mutate } = useMutation({
        mutationKey: ["login"],
        mutationFn: (data: any) => api.post("/admin/auth/login", data).then(res => res?.data),
        onSuccess: (response) => {

            const payload = response?.data || response;
            
            const accessToken = payload?.accessToken;
            const refreshToken = payload?.refreshToken;

            if (accessToken) {
                localStorage.setItem("crmAccessToken", accessToken);
            }
            if (refreshToken) {
                localStorage.setItem("crmRefreshToken", refreshToken);
            }
            
            message.success("Успешный вход!");
            navigate("/dashboard");
        },
        onError: (error: any) => {
            const errorMessage = error?.response?.data?.message || 'Ошибка входа';
            message.error(errorMessage);
        }
    });

    return { isPending, mutate };
};

export default useLogin;
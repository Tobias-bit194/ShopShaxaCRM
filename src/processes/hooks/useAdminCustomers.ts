import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from '../../services/api'; 
import { message } from 'antd';

export interface GetCustomersParams {
    page?: number;
    limit?: number;
    search?: string;
    order?: 'asc' | 'desc';
    sortBy?: string;
    sort?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
}


export const useAdminCustomers = (params: GetCustomersParams = {}) => {
    return useQuery({
        queryKey: ["admin-customers", params],
        queryFn: async () => {
            const res = await api.get("/api/admin/customers", { params });
            return res.data;
        },
        placeholderData: (prev) => prev, 
    });
};


export const useAdminCustomerDetails = (id: string, enabled: boolean = true) => {
    return useQuery({
        queryKey: ["admin-customer", id],
        queryFn: async () => {
            const res = await api.get(`/api/admin/customers/${id}`);
            return res.data;
        },
        enabled: Boolean(id) && enabled,
    });
};


export const useUpdateCustomerStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, isActive }: { id: string; isActive: boolean }) => {
            const res = await api.patch(`/api/admin/customers/${id}/status`, { isActive });
            return res.data;
        },
        onSuccess: () => {
            message.success("Статус клиента успешно изменен");
            queryClient.invalidateQueries({ queryKey: ["admin-customers"] });
        },
        onError: (error: any) => {
            const errorMsg = error?.response?.data?.message || "Не удалось изменить статус";
            message.error(errorMsg);
        }
    });
};
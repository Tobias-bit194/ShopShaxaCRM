import React, { useState } from 'react';
import { Table, Switch, Input } from 'antd';
import { useAdminCustomers, useUpdateCustomerStatus } from '../processes/hooks/useAdminCustomers'; // проверь путь к хуку

export const AdminCustomersPage: React.FC = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');


    const { data, isLoading } = useAdminCustomers({ page, limit: 10, search });
    const { mutate: updateStatus } = useUpdateCustomerStatus();

    const columns = [
        {
            title: 'ID / Email',
            dataIndex: 'email', 
            key: 'email',
        },
        {
            title: 'Статус активности',
            key: 'isActive',
            render: (_: any, record: any) => (
                <Switch 
                    checked={record.isActive} 
                    onChange={(checked) => updateStatus({ id: record.id, isActive: checked })} 
                />
            ),
        },
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
                <h1 className="text-2xl font-bold mb-6 text-gray-900">Управление клиентами</h1>
                
                <Input 
                    placeholder="Поиск по клиентам..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    style={{ marginBottom: 20, width: 320 }} 
                />

                <Table 
                    dataSource={data?.items || data?.data || []} 
                    columns={columns}
                    loading={isLoading}
                    rowKey="id"
                    pagination={{
                        current: page,
                        pageSize: 10,
                        total: data?.total || 0,
                        onChange: (p) => setPage(p),
                    }}
                />
            </div>
        </div>
    );
};
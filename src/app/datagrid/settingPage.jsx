import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function SettingPage() {
    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 4,
        maxColumns: 6,
    });

    return (
        <div className="container mx-auto mt-8" style={{maxWidth: "900px"}}>
            <div className="mx-auto bg-white p-8 rounded shadow-md">
                <div style={{ height: 450, width: '100%' }}>
                    <DataGrid {...data} loading={loading} slots={{ toolbar: GridToolbar }} />
                </div>
            </div>
        </div>
    );
}
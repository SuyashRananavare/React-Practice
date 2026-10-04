import React, { useMemo, useState } from 'react'

const Products = () => {
    // const products = ["Mouse", "Monitor", "Laptop", "TV" , "Mobile"];

    const employees = [
        {
            empName: 'ABCD',
            empSalary: 50000,
            empAddress: 'Pune'
        },
        {
            empName: 'EFGH',
            empSalary: 70000,
            empAddress: 'Satara'
        },
        {
            empName: 'HIJK',
            empSalary: 40000,
            empAddress: 'Mumbai'
        }
    ];

    const [search, setSearch] = useState("");

    const filteredEmployees = useMemo(() => {
        return employees.filter(emp => {
            return (
                emp.empName.toLowerCase().includes(search.toLowerCase()) ||
                emp.empAddress.toLowerCase().includes(search.toLowerCase())
            )
        })
    }, [search, employees]);

  return (
        <div>
            <input 
                type="text" 
                placeholder='Search employee'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredEmployees.map(emp => (
                <p key={emp.empName}>
                    {emp.empName} - {emp.empSalary} - {emp.empAddress}
                </p>
            ))} 
        </div>
    )
}

export default Products

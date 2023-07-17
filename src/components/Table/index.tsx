import React from 'react'

type Props = {}

const Table = ({ data, config }: any) => {
    console.log(data,config);
    
    const renderHeader = config.map((column: any) => {
        console.log(column);
        
        if (column.header) {
            return <th>{column.header(column)}</th>
        }
        return <th key={column.key}>{column.laybal}</th>
    })
    const renderRows = data.map((items: any) => {
        const renderShell = config.map((item: any) => {
            return <td key={item.key}>{item.render(items)}</td>
        })
        return <tr>{renderShell}</tr>
    })
    return (
      
            <table className='w-full'>
                <thead>
                    <tr>{renderHeader}
                  </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
     
    )
}

export default Table
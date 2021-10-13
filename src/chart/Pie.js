import React from 'react'
import {Pie, defaults} from 'react-chartjs-2'
const Chart = ({counts}) => {
    defaults.plugins.legend.display =false
    console.log(counts)
    
    return (
        <div className="chart">
            <Pie
            data={{
                labels:['TV','MOVIE','SPECIAL','OVA','OTHER'],
                datasets:[
                    {
                        label:'Type',
                        data:[counts.TV,counts.Movie],
                        backgroundColor:[
                            '#42bcf5',
                            '#c20683',
                            '#d9e6d8',
                            '#1c19f7',
                            '#d1b6b9'
                        ],
                        borderColor:[
                            'rgba(255,99,132,0.2)',
                            'rgba(255,99,13,0.2)',
                            'rgba(255,99,232,0.2)'
                        ],


                    }
                    
                ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
            />
        </div>
    )
}

export default Chart

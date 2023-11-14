import styles from './DoughnutChart.module.css';
import { useState, useEffect } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

export default function DoughnutChart() {
    const [data, setData] = useState([
        { y: 25, x: ' Sad' },
        { y: 30, x: ' Happy' },
        { y: 20, x: ' Tired' },
        { y: 15, x: ' Jealous' },
        { y: 10, x: ' Angry' },
    ]);
    const [selectedSlice, setSelectedSlice] = useState(null);
    const [loading, setLoading] = useState(false); // Set to false as we're providing fake data

    useEffect(() => {
        // No need to fetch data since we're using fake data
    }, []);

    const colorScale = ["#96D1EA", "#F5E79D", "#9792C7", "#FFCD6C", "#FFA39F", "#91BD70"];

    const handleSliceClick = (event, props) => {
        if (selectedSlice === props.index) {
            // Reset the selected slice if it's clicked again
            setSelectedSlice(null);
        } else {
            setSelectedSlice(props.index);
        }
    };

    return (
        <div className={styles.container}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <VictoryPie
                    data={data}
                    colorScale={colorScale}
                    padAngle={1}
                    innerRadius={40}
                    radius={({ index }) => (index === selectedSlice ? 170 : 150)}
                    width={350}
                    height={369}
                    labelComponent={<VictoryLabel />}
                    labelRadius={({ innerRadius }) => innerRadius + 65}
                    events={[
                        {
                            target: "data",
                            eventHandlers: {
                                onPressIn: handleSliceClick,
                            },
                        },
                    ]}
                />
            )}
        </div>
    );
}

// when we have data this will be the code: import styles from './DoughnutChart.module.css'
// import { useState, useEffect } from 'react'
//import { VictoryPie, VictoryLabel } from 'victory'

//export default function DoughnutChart() {
   // const [keyWords, setKeyWords] = useState([])
   // const [data, setData] = useState([]);
   // const [selectedSlice, setSelectedSlice] = useState(null);

    // Get keywords from localStorage and set them in useState in chart format
    //const getData = () => {
        //try {
          //  const value = localStorage.getItem('statsKeywords');
           // if (value !== null) {
              //  const keyWordArray = value.split(",")
               // setKeyWords(keyWordArray)

              //  const newData = keyWordArray.map(keyword => ({ y: 25, x: keyword }));

                //setData(newData);
               // console.log(data)
          //  }
       // } catch (e) {
           // console.log("error!")
      //  }
   //};

    // Run getData on page load
   // useEffect(() => {
      //  getData();
   // }, []);

   // const colorScale = ["#96D1EA", "#F5E79D", "#9792C7", "#FFCD6C", "#FFA39F", "#91BD70"];

    //const handleSliceClick = (event, props) => {
       // if (selectedSlice === props.index) {
            // Reset the selected slice if it's clicked again
          //  setSelectedSlice(null);
      //  } else {
           // setSelectedSlice(props.index);
     //  }
   // };

   // return (
       // <>
          // <div style={styles.container}>
               // <VictoryPie
                 //   data={data}
                  //  colorScale={colorScale}
                 //  padAngle={1}
                  //  innerRadius={40}
                  //  radius={({ index }) => index === selectedSlice ? 170 : 150}
                  //  width={350}
                   // height={369}
                   //labelComponent={<VictoryLabel />}
                   // labelRadius={({ innerRadius }) => innerRadius + 65}
                   // events={[{
                       // target: "data",
                       // eventHandlers: {
                           //onPressIn: handleSliceClick,
                       // },
                   // }]}
               // />
            //</div>
       // </>
   // )
//}
//
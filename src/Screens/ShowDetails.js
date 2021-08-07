import React, { useEffect, useState } from "react";
import FlatList from "flatlist-react";
import { Scrollbar } from "react-scrollbars-custom";

import firebase from "../firebase";
import Card from "../Components/UI/Card";
import Maps from "../Components/UI/map";
import Information from "../Components/mainComponents/information"

function GetReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("test")
      .onSnapshot(snapShot => {
        const docData = snapShot.docs.map(data => ({
          reportId: data.id,
          userName: data.data().userName,
          location: data.data().location,
          image: data.data().Image,
          info1: data.data().info1,
          info2: data.data().info2,
          info3: data.data().info3,
          info4: data.data().info4,
          info5: data.data().info5,
          info6: data.data().info6
        }));
        setData(docData);
      });
  }, []);

  return data;
}

const ShowDetails = props => {
  const data = GetReport();

  const [idInfo, setIdInfo] = useState();

 // console.log(idInfo);

  const getDetails = id => {
    const selectedReport = data.find(idKey => idKey.reportId === id);
    setIdInfo(selectedReport);
  };

  if (!idInfo) {
    return (
      <div className="body">
        <div className="pageContainer">
          <div className="card">
            <Scrollbar style={{ width: " 100%", height: 500 }}>
            <div className="list">
              <FlatList
                list={data}
                renderItem={itemData => {
                  return (
                    
                    <Card
                      onSelect={() => getDetails(itemData.reportId)}
                      key={itemData.reportId}
                      image={itemData.image}
                      userName={itemData.userName}
                      reportId={itemData.reportId}
                    />
                    
                  );
                }}
              />
              </div>
            </Scrollbar>
          </div>
          <div className="information">
            <p>no Data</p>
          </div>
        </div>
        <div className="mapContainer">
          <p>no location</p>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="pageContainer">
        <div className="card">
          <Scrollbar>
            <FlatList
              list={data}
              renderItem={itemData => {
                return (
                  <Card
                    onSelect={() => getDetails(itemData.reportId)}
                    key={itemData.reportId}
                    image={itemData.image}
                    userName={itemData.userName}
                    reportId={itemData.reportId}
                  />
                );
              }}
            />
          </Scrollbar>
        </div>
        <div className="information">
       
         <Information
           image={idInfo.image}
           info1={idInfo.info1}
           info2={idInfo.info2}
           info3={idInfo.info3}
           info4={idInfo.info4}
           info5={idInfo.info5}
           info6={idInfo.info6}
         />
          
        </div>
      </div>
      <div className="mapContainer">
        <Maps
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAJQNC5P5HEdCeECrw6bRIC_X_P34jEX2A&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: `600px`, width: `600px` }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
          location={idInfo.location}
        />
      </div>
    </div>
  );
};

export default ShowDetails;

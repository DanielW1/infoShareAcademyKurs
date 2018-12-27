

window.onload = function(){
    // return fetch('https://parkandrideapp.azurewebsites.net/Parking/mobilebestroad', {
    //         method: "POST",
    //         headers:new Headers ({
    //             'Content-Type': "application/json",
    //         }),
    //         body: JSON.stringify({
    //             gpsLat: 52.00,
    //             gpsLng: 21.00,
    //         }),
    //     }).then((response) => {
    //         console.log(response); 
    //         return response.json()})
    //         .then((responseJson) => {
    //             const parkings = responseJson;
    //              console.log(parkings)
                    
    //         }).catch((error)=>{
    //             console.log(error);
    //         })
    // axios.post('https://parkandrideapp.azurewebsites.net/Parking/mobilebestroad',{
    //         gpsLat: 52.00,
    //         gpsLng: 21.00,
    //       })
    //       .then((response) => {
    //         const parkings = response.data;
    //         console.log(parkings);
    //       })
    //        .catch((error) => {
    //          this.setState({error})
    //       });

          axios.get('https://parkandrideapp.azurewebsites.net/Parking/mobilelist').then(res => {
          const parkings = res.data;
          console.log(parkings);
        });
}



        
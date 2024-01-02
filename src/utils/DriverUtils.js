function GetActivityDuration (driver, activityType = 'all'){
    var timer = 0;

    driver.traces.forEach((trace) => {
        let activities = trace.activity;

        if(activityType !== 'all'){
            activities = activities.filter(activity => activity.type === activityType);
        }
        
        activities.forEach((activity) => timer += activity.duration);
    })
    

    return timer;
}

function IsDriverActive(driver, date){
    let traceDates = driver.traces.map(trace => trace.date);

    return traceDates.includes(date);
}

function FilterDriverData(driverData, searchString){
    let filteredData = driverData.filter(driver => 
        `${driver.forename} ${driver.surname}`.toUpperCase().includes(searchString.toUpperCase()) || driver.vehicleRegistration.toUpperCase().includes(searchString.toUpperCase()));
            
    return filteredData;
}

export {GetActivityDuration, IsDriverActive, FilterDriverData};
import DriverData from '../../data/drivers.json'
import { FilterDriverData, GetActivityDuration, IsDriverActive } from '../DriverUtils';

var driver = {
    "driverID":51256058,
    "surname":"Wright",
    "forename":"Jonathon",
    "vehicleRegistration":"EB16FXW",
    "traces":[
        {
            "date":"2021-02-01",
            "activity":[
                {
                "startTime":"13:00",
                "type":"available",
                "duration":10
                },
                {
                "startTime":"13:10",
                "type":"drive",
                "duration":13
                },
                {
                "startTime":"13:23",
                "type":"drive",
                "duration":5
                },
            ]
        },
    ]
};

describe('GetActivityDuration', () =>{
    it('calculates activity duration correctly', () => {
        let result = GetActivityDuration(driver);
        
        expect(result).toBe(28);
    });
})

describe('IsDriverActive', () =>{
    it('returns correct value', () => {
        let result = IsDriverActive(driver, "2021-02-01");

        expect(result).toBe(true);
    });    
})

describe('FilterDriverData', () =>{
    it('filters correctly', () => {
        var result = FilterDriverData(DriverData.data, 'casey sc');

        expect(result.length).toBe(1);
    });    
})

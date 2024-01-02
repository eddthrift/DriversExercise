import React from 'react';
import renderer from 'react-test-renderer';

import DriverDetails from '../DriverDetails';

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

it('renders correctly', () => {
    const tree = renderer.create(<DriverDetails driver={driver}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
const axios = require('axios');

module.exports = {
    index: async (req, res) => {
   
        const health = ["CELERY_FREE","ALCOHOL_FREE"];
        const meal_brekfst = ["breakfast"];
        const meal_launch = ["lunch/dinner"];
        const meal_dinner = ["lunch/dinner"];
     
        const options = {
            method: 'POST',
            url: 'https://api.edamam.com/api/meal-planner/v1/2a9cc02b/select',
            headers: {
                'Edamam-Account-User': 'Mohit123',
                'Authorization': 'Basic MmE5Y2MwMmI6IDUzYWY2MTg3M2NmOGZlNGU0NWNiYmMwNTlkYTFjY2I4CQ==',
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                "size": 7,
                "plan": {
                "accept": {
                    "all": [
                    {
                        "health": health,
                    }
                    ]
                },
                "fit": {
                    "ENERC_KCAL": {
                    "min": 1000,
                    "max": 2000
                    }
                },
                "sections": {
                    "Breakfast": {
                    "accept": {
                        "all": [
                        {
                            "meal": meal_brekfst,
                        }
                        ]
                    },
                    "fit": {
                        "ENERC_KCAL": {
                        "min": 100,
                        "max": 600
                        }
                    }
                    },
                    "Lunch": {
                    "accept": {
                        "all": [
                        {
                            "meal": meal_launch,
                        }
                        ]
                    },
                    "fit": {
                        "ENERC_KCAL": {
                        "min": 300,
                        "max": 900
                        }
                    }
                    },
                    "Dinner": {
                    "accept": {
                        "all": [
                        {
                            "meal": meal_dinner,
                        }
                        ]
                    },
                    "fit": {
                        "ENERC_KCAL": {
                        "min": 200,
                        "max": 900
                        }
                    }
                    }
                }
                }
            }
        };

        try {
            const response = await axios(options);
           // console.log(response.data);
            console.log(JSON.stringify(response.data, null, 2));
            // Process the response as needed
        } catch (error) {
            console.error(error);
            // Handle error appropriately (send response or throw an error)
            res.status(500).send('Internal Server Error');
        }
    }
};

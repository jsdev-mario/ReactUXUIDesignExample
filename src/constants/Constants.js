export default {
    // SERVER_URL: 'http://ec2-54-94-144-45.sa-east-1.compute.amazonaws.com',
    // SERVER_URL: 'http://192.168.0.89:8080',
    // SERVER_URL: 'http://192.168.43.232:8080',
    // SERVER_URL: 'http://192.168.220.34:8080',
    // SERVER_URL: 'http://ip-172-31-9-240.sa-east-1.compute.internal',
    SERVER_URL: 'http://ec2-54-94-176-16.sa-east-1.compute.amazonaws.com',
    userStatus: {
        INACTIVE: 0,
        ACTIVE: 1,
        BLOCKED: 2,
    },
    verifyStep: {
        FAIL: -1,
        ONE: 0,
        TWO: 1,
        THREE: 2,
        COMPLETED: 3
    },
    genders: [
        'MR', 'MRS', 'MISS', 'MS'
    ],
    states : [
        'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 
        'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 
        'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WV', 'WI', 'WY', 'AA', 'AE', 
        'AP', 'VI', 'GU', 'MP'
    ]
}

// && - and operator - Both sides need to be true to proceed forward
// || - called OR operation -  one side need to be true to give you a result 

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greting message to user')
    console.log('grant access to paid course')
    
} else if (isVerified || isGuest) {
    console.log('Allow free previews')
    
} else {
    console.log("Message: please contact admin")
}

const jsforce = require('jsforce');

export default async function fetchData() {

const conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  // loginUrl : 'https://test.salesforce.com'
});

const userInfo = await conn.login(process.env.USERNAME, process.env.PASSWORD)

// logged in user property
console.log("User ID: " + userInfo.id);
console.log("Org ID: " + userInfo.organizationId);
}
export default function(req,res){
res.status(200).json({yo:'hello'})
const dbHost = process.env.DB_SERVER;
console.log(dbHost)
}
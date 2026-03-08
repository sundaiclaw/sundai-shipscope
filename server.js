const express=require('express');
const path=require('path');
const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.post('/api/plan',(req,res)=>{
  const idea=(req.body.idea||'').trim();
  if(!idea) return res.status(400).json({error:'Idea required'});
  res.json({
    scope:`Build smallest demo for: ${idea}`,
    milestones:[
      'Define one core user flow',
      'Implement working prototype',
      'Record 60-second demo'
    ],
    launchChecklist:['README clear','Repo pushed','Demo script ready'],
    risks:['Scope creep','No demo narrative']
  });
});
app.listen(3000,()=>console.log('http://localhost:3000'));

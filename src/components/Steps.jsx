import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { addResumeAPI } from '../services/allAddedAPIs';

const steps = ['Personal Details', 'Contact Information', 'Educational Details','Experience','Skills','Summary'];
const suggestion=['java','DotNet','React','Angular','Html','css'];
const Steps = ({ formData, setFormData,setResumeId}) => {
   
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [inputSkill,setInputSkill]=React.useState('')
const [isFinished,setIsFinished]=React.useState(false)

const addSkill=(skill)=>{
    console.log(skill);
    if(formData.Skills.includes(skill)){
    alert("Skill Already exist");
     }else{
      setFormData(data => ({ ...data, Skills:[...data.Skills,skill] }))
     }
}

    const handleFinish=async()=>{
        const result=await addResumeAPI(formData)
        console.log(result);
       alert("saved successfully")
       setResumeId(result.data.id)
    }

    const handleRemoveSkill=(data)=>{
        setFormData({...formData,Skills:formData.Skills.filter(item=>item!==data)})
    }


    const renderStepContent=(step)=>{
switch(step){
    case 0:return (<div className='d-flex row p-3 ms-2'>
        <h3>Personal Details</h3>
    <TextField value={formData.personalData.name} onChange={(e)=>setFormData({...formData,personalData:{...formData.personalData,name:e.target.value}})}  className='w-100' id="standard-name"  label="name" variant="standard" />
        <TextField value={formData.personalData.job} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, job: e.target.value } })} id="standard-job" label="job" variant="standard" />
        <TextField value={formData.personalData.location} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, location: e.target.value } })} id="standard-location" label="location" variant="standard" />
    </div>)

    case 1: return (<div className='d-flex row p-3 ms-2'>
        <h3>Contact Information</h3>
        <TextField value={formData.personalData.email} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, email: e.target.value } })} id="standard-mail" label="Email" variant="standard" />
        <TextField value={formData.personalData.phone} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, phone: e.target.value } })} id="standard-phone" label="Phone Number" variant="standard" />
        <TextField value={formData.personalData.github} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, github: e.target.value } })} id="standard-github" label="github" variant="standard" />
        <TextField value={formData.personalData.linkedin} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, linkedin: e.target.value } })} id="standard-linkedin" label="linkedin" variant="standard" />
        <TextField value={formData.personalData.Portfolio} onChange={(e) => setFormData({ ...formData, personalData: { ...formData.personalData, Portfolio: e.target.value } })} id="standard-Portfolio" label="Portfolio" variant="standard" />
    </div>)
    case 2: return (<div className='d-flex row p-3 ms-2'>
        <h3>EducationDetail</h3>

        <TextField value={formData.Education.course} onChange={(e) => setFormData({ ...formData, Education: { ...formData.Education, course: e.target.value } })} id="standard-Course" label="Course" variant="standard" />
        <TextField value={formData.Education.college} onChange={(e) => setFormData({ ...formData, Education: { ...formData.Education, college: e.target.value } })} id="standard-College" label="College" variant="standard" />
        <TextField value={formData.Education.university} onChange={(e) => setFormData({ ...formData, Education: { ...formData.Education, university: e.target.value } })} id="standard-university" label="university" variant="standard" />
        <TextField value={formData.Education.passout} onChange={(e) => setFormData({ ...formData, Education: { ...formData.Education, passout: e.target.value } })} id="standard-passout" label="year of passout" variant="standard" />

    </div>)
    case 3: return (<div className='d-flex row p-3 ms-2'>
        <h3>Experience</h3>
        <TextField value={formData.Experience.jobBefore} onChange={(e) => setFormData({ ...formData, Experience: { ...formData.Experience, jobBefore: e.target.value } })} id="standard-mail" label="Job or internship" variant="standard" />
        <TextField value={formData.Experience.company} onChange={(e) => setFormData({ ...formData, Experience: { ...formData.Experience, company: e.target.value } })} id="standard-phone" label="Company Name" variant="standard" />
        <TextField value={formData.Experience.compLocation} onChange={(e) => setFormData({ ...formData, Experience: { ...formData.Experience, compLocation: e.target.value } })} id="standard-github" label="Company-Location" variant="standard" />
        <TextField value={formData.Experience.duration} onChange={(e) => setFormData({ ...formData, Experience: { ...formData.Experience, duration: e.target.value } })} id="standard-linkedin" label="Duration" variant="standard" />
      
    </div>)
    case 4: return (
        <div className='d-flex row p-3 ms-2'>
            <h3>Add Skills</h3>
            <TextField value={formData.Skills} onChange={(e)=>setInputSkill(e.target.value)} className='mb-4' id="standard-linkedin" label="skill" variant="standard" />
            <Button onClick={()=>addSkill(inputSkill)} className="bg-danger text-light w-25 mb-2" type="submit" variant="contained">Add</Button>
<p>Suggestions:</p>
<div className='d-flex col'>
      {suggestion?.map((item)=>(
         
              <Button key={item} onClick={()=>addSkill(item)} className='bg-primary me-2 vh-20 items-center'><p className='m-1 text-light'>{item}</p>
              <p className='fs-5 font-bold text-light m-1'>X</p></Button>

      ))}</div>
            <p className='mt-3 mb-3'>Selected:</p>
            <div className='d-flex col'>
                { formData.Skills?.map((item) => (

                    <Button key={item} onClick={()=>handleRemoveSkill(item)}  className='bg-success me-2 vh-20 items-center'><p className='m-1 text-light'>{item}</p>
                        <p className='fs-5 font-bold text-light m-1'>X</p></Button>

                ))}</div>
        </div>
    )

    case 5: return (<div className='d-flex row p-3 ms-2'>
        <h3>Summary</h3>
        <TextField className='mt-4'
            value={formData.Summary.summaryData} onChange={(e) => setFormData({ ...formData, Summary: { ...formData.Summary, summaryData: e.target.value } })}
            id="standard-multiline-static"
            label="Tell something about yourself"
            multiline
            rows={4}
            variant="standard"
        />
         </div>)
    default:return Null

}
    }
    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    {/* if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    } */}
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box>
                        {renderStepContent(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )} */}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? (<div><Button onClick={handleFinish} className="bg-success" variant="contained">Finish</Button></div>) : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Steps

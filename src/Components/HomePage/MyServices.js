import React from 'react';
import './Home.css'
import first from '../../images/Images.1/services/icon-cardio-monitoring.png'
import secound from '../../images/Images.1/services/icon-cardiology.png'
import third from '../../images/Images.1/services/icon-orthodontics.png'
import fourth from '../../images/Images.1/services/icon-prostheses.png'
import five from '../../images/Images.1/services/icon-pulmonary.png'
import six from '../../images/Images.1/services/icon-traumatology.png'

const MyServices = () => {
    return (
        <div class="mt-5">
                  <h2 class="experiance">| Our Best Services</h2>
                  <h5>Description text here...</h5>
            <div class="row row-cols-1 row-cols-md-3 g-4  frist-card">
      

            <div class="col ">
                <div class="card ">
                <img style={{width: '100px', background: '#822a0059', margin: 'auto', marginTop: '20px'}} src={first} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Cardio Monitoring</h5>
                    <p class="card-text">Cardiac monitoring is a way of watching the electrical activity of your heart to ensure it is working normally. Five small stickers, called electrodes, are placed on your body.are placed on your body called electrodes, are placed on your body</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img style={{width: '100px', background: '#822a0059', margin: 'auto', marginTop: '20px'}} src={secound} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Orthodontics</h5>
                    <p class="card-text">Orthodontics is a branch of dentistry that treats malocclusion, a condition in which the teeth are not correctly positioned when the mouth is closed. This results in an improper bite. An orthodontist specializes in making the teeth straight</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img style={{width: '100px', background: '#822a0059', margin: 'auto', marginTop: '20px'}} src={third} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Traumatology</h5>
                    <p class="card-text">In medicine, traumatology is the study of wounds and injuries caused by accidents or violence to a Traumatology is a branch of medicine person, and the surgical therapy and repair of the damage. Traumatology is a branch of medicine</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img style={{width: '100px', background: '#822a0059', margin: 'auto', marginTop: '20px'}} src={fourth} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Cardiology</h5>
                    <p class="card-text">Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img style={{width: '100px', background: '#822a0059', margin: 'auto', marginTop: '20px'}} src={five} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Prostheses</h5>
                    <p class="card-text">A person's prosthesis should be designed and assembled according to the person's appearance and functional needs. For instance, a person may need a transradial prosthesis, but the person need to choose between an aesthetic functional device, a myoelectric device, a body-powered device. </p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img style={{width: '100px', background: '#822a0059', margin: 'auto', marginTop: '20px'}} src={six} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Pulmonary</h5>
                    <p class="card-text">Pulmonary hypertension is high blood pressure in the blood vessels that supply the lungs (pulmonary arteries). It's a serious condition that can damage the right side of the heart. The walls of the pulmonary arteries become thick and stiff, and cannot expand as well to allow blood through.</p>
                </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default MyServices;
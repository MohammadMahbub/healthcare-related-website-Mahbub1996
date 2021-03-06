import React from 'react';
import './Home.css'

const Experiance = () => {
    return (
        
        <div class="main-div container">
            <h1 class="experiance">| Our Experiance...</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4 ">
                        
            <div class="col main-card">           
                <div class="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg-logo" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0h2z" clip-rule="evenodd" />
                    </svg>
                    
                    <h2 class="card-title">652</h2>
                    <p class="card-text">Happy Clients</p>
                </div>
            </div>

            <div class="col main-card">
                <div class="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg-logo" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">7652</h2>
                    <p class="card-text">Heart Transplant</p>
                </div>
            </div>

            <div class="col main-card">
                <div class="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg-logo" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <h2 class="card-title">52</h2>
                    <p class="card-text">Years Of Experience</p>
                </div>
            </div>

            <div class="col main-card">
                <div class="card-body">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg-logo" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
                    </svg>
                    <h2 class="card-title">7652</h2>
                    <p class="card-text">Well Smiley Faces</p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Experiance;
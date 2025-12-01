// Simple Portfolio Renderer
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    
    const data = window.portfolioData || {
        personalInfo: { name: "Asmaa Albukaai", title: "Backend Developer" }
    };
    
    const p = data.personalInfo || {};
    const skills = data.skills || [];
    const projects = data.projects || [];
    const experience = data.experience || [];
    const education = data.education || [];
    const socialLinks = data.socialLinks || {};
    
    // Build HTML - استخدام علامات الاقتباس العادية مع +
    let html = '<header style="background: linear-gradient(135deg, #6d28d9, #8b5cf6); color: white; padding: 80px 20px; text-align: center;">';
    html += '<div style="max-width: 800px; margin: 0 auto;">';
    html += '<h1 style="font-size: 3rem; margin-bottom: 10px;">' + (p.name || "Your Name") + '</h1>';
    html += '<h2 style="color: #c4b5fd; margin-bottom: 20px;">' + (p.title || "Your Title") + '</h2>';
    
    if (p.bio) {
        html += '<p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto 30px;">' + p.bio + '</p>';
    }
    
    // Contact Info
    if (p.email || p.location) {
        html += '<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; max-width: 500px; margin: 20px auto;">';
        if (p.email) {
            html += '<p style="margin: 10px 0;"><i class="fas fa-envelope"></i> ' + p.email + '</p>';
        }
        if (p.location) {
            html += '<p style="margin: 10px 0;"><i class="fas fa-map-marker-alt"></i> ' + p.location + '</p>';
        }
        html += '</div>';
    }
    
    // Social Links
    const socialEntries = Object.entries(socialLinks);
    if (socialEntries.length > 0) {
        html += '<div style="margin-top: 30px;">';
        socialEntries.forEach(([platform, url]) => {
            html += '<a href="' + url + '" target="_blank" style="color: white; margin: 0 10px; font-size: 1.5rem;">';
            html += '<i class="fab fa-' + platform + '"></i>';
            html += '</a>';
        });
        html += '</div>';
    }
    
    html += '</div></header>';
    
    // Skills Section
    if (skills.length > 0) {
        html += '<section style="padding: 60px 20px;">';
        html += '<div style="max-width: 800px; margin: 0 auto;">';
        html += '<h2 style="text-align: center; font-size: 2.5rem; color: #1e1b4b; margin-bottom: 40px;">Technical Skills</h2>';
        html += '<div>';
        
        skills.forEach(skill => {
            html += '<div style="margin: 20px 0;">';
            html += '<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">';
            html += '<span>' + skill.name + '</span>';
            if (skill.level) {
                html += '<span>' + skill.level + '%</span>';
            }
            html += '</div>';
            
            if (skill.level) {
                html += '<div style="height: 10px; background: #e0e0e0; border-radius: 5px; overflow: hidden;">';
                html += '<div style="height: 100%; width: ' + skill.level + '%; background: linear-gradient(90deg, #6d28d9, #8b5cf6); border-radius: 5px;"></div>';
                html += '</div>';
            }
            html += '</div>';
        });
        
        html += '</div></div></section>';
    }
    
    // Projects Section
    if (projects.length > 0) {
        html += '<section style="padding: 60px 20px; background: #f5f3ff;">';
        html += '<div style="max-width: 1200px; margin: 0 auto;">';
        html += '<h2 style="text-align: center; font-size: 2.5rem; color: #1e1b4b; margin-bottom: 40px;">Projects</h2>';
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">';projects.forEach(project => {
            html += '<div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">';
            html += '<div style="height: 200px; background: linear-gradient(45deg, #a78bfa, #7c3aed); display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">';
            html += '<i class="fas fa-project-diagram"></i>';
            html += '</div>';
            html += '<div style="padding: 25px;">';
            html += '<h3 style="color: #1e1b4b; margin-bottom: 10px; font-size: 1.5rem;">' + project.name + '</h3>';
            
            if (project.description) {
                html += '<p style="color: #666; margin-bottom: 15px;">' + project.description + '</p>';
            }
            
            if (project.technologies && project.technologies.length > 0) {
                html += '<div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0;">';
                project.technologies.forEach(tech => {
                    html += '<span style="background: #f5f3ff; color: #6d28d9; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">';
                    html += tech;
                    html += '</span>';
                });
                html += '</div>';
            }
            
            html += '<div style="display: flex; gap: 15px; margin-top: 20px;">';
            if (project.githubUrl) {
                html += '<a href="' + project.githubUrl + '" target="_blank" style="display: inline-block; padding: 12px 25px; background: #6d28d9; color: white; text-decoration: none; border-radius: 5px; flex: 1; text-align: center;">';
                html += '<i class="fab fa-github"></i> Code';
                html += '</a>';
            }
            html += '</div></div></div>';
        });
        
        html += '</div></div></section>';
    }
    
    // Experience & Education
    if (experience.length > 0 || education.length > 0) {
        html += '<section style="padding: 60px 20px;">';
        html += '<div style="max-width: 1200px; margin: 0 auto;">';
        html += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">';
        
        // Experience
        if (experience.length > 0) {
            html += '<div>';
            html += '<h2 style="font-size: 2rem; color: #1e1b4b; margin-bottom: 30px;">Experience</h2>';
            
            experience.forEach(exp => {
                html += '<div style="margin-bottom: 30px; padding-left: 20px; border-left: 3px solid #6d28d9;">';
                if (exp.year) {
                    html += '<div style="color: #6d28d9; font-weight: bold; margin-bottom: 5px;">' + exp.year + '</div>';
                }
                html += '<div>';
                if (exp.title) {
                    html += '<h3 style="color: #1e1b4b; margin-bottom: 5px;">' + exp.title + '</h3>';
                }
                if (exp.company) {
                    html += '<h4 style="color: #6d28d9; margin-bottom: 10px;">' + exp.company + '</h4>';
                }
                if (exp.description) {
                    html += '<p style="color: #666;">' + exp.description + '</p>';
                }
                html += '</div></div>';
            });
            html += '</div>';
        }
        
        // Education
        if (education.length > 0) {
            html += '<div>';
            html += '<h2 style="font-size: 2rem; color: #1e1b4b; margin-bottom: 30px;">Education</h2>';
            
            education.forEach(edu => {
                html += '<div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">';
                if (edu.degree) {
                    html += '<h3 style="color: #1e1b4b; margin-bottom: 5px;">' + edu.degree + '</h3>';}
                if (edu.institution) {
                    html += '<h4 style="color: #6d28d9; margin-bottom: 5px;">' + edu.institution + '</h4>';
                }
                if (edu.year) {
                    html += '<p style="color: #666;">' + edu.year + '</p>';
                }
                html += '</div>';
            });
            html += '</div>';
        }
        
        html += '</div></div></section>';
    }
    
    // Footer
    html += '<footer style="background: #1e1b4b; color: white; text-align: center; padding: 60px 20px;">';
    html += '<div style="max-width: 800px; margin: 0 auto;">';
    html += '<h2 style="color: #c4b5fd; margin-bottom: 20px;">Let\'s Connect!</h2>';
    html += '<p style="font-size: 1.2rem; margin-bottom: 30px;">Looking for a backend developer? I\'m here to help!</p>';
    
    if (p.email) {
        html += '<a href="mailto:' + p.email + '" style="display: inline-block; padding: 15px 30px; background: linear-gradient(45deg, #6d28d9, #8b5cf6); color: white; text-decoration: none; border-radius: 5px; font-size: 1.1rem; margin-bottom: 30px;">';
        html += '<i class="fas fa-paper-plane"></i> Contact Me';
        html += '</a>';
    }
    
    html += '<p style="margin-top: 40px; color: #c4b5fd; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1);">';
    html += '© ' + new Date().getFullYear() + ' ' + (p.name || "Your Name");
    html += '</p></div></footer>';
    
    // Add Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    // Set HTML
    app.innerHTML = html;
    console.log('Portfolio loaded!');
});
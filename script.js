document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded on page:", window.location.pathname);
    
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        console.log("Language toggle button found");
    } else {
        console.log("Language toggle button not found");
        return; // 如果没有找到按钮，就退出脚本
    }

    let currentLang = localStorage.getItem('language') || 'en';

    const translations = {
        'zh': {
            'title': {
                'index': '南京火球网络科技有限公司 - 首页',
                'about': '南京火球网络科技有限公司 - 关于我们'
            },
            'nav': ['首页', '关于我们'],
            'slogan': '点燃游戏激情，创造无限可能',
            'cta-button': '联系我们',
            'about-summary': {
                'title': '公司简介',
                'content': '南京火球网络科技有限公司是一家专注于手机游戏和电脑游戏开发的创新型企业。我们致力于为玩家带来高品质、富有创意的游戏体验，不断推动游戏产业的发展与进步。'
            },
            'services': {
                'title': '我们的服务',
                'items': [
                    {
                        'title': '手机游戏开发',
                        'content': '为iOS和Android平台打造精品手游，覆盖多种游戏类型。'
                    },
                    {
                        'title': '电脑游戏制作',
                        'content': '开发适用于Windows、Mac和Linux平台的高质量PC游戏。'
                    },
                    {
                        'title': '游戏运营与维护',
                        'content': '提供长期的游戏运营支持、更新和玩家社区管理。'
                    }
                ]
            },
            'team': {
                'title': '核心团队',
                'content': [
                    '我们的团队由经验丰富的游戏开发者、设计师和技术专家组成，他们在游戏行业拥有深厚的背景和丰富的经验。我们注重创新，不断探索新技术和新概念，以确保我们的产品始终处于行业前沿。',
                    '团队成员们充分发挥各自的专业优势，通力合作，致力于打造出独特、引人入胜的游戏体验。我们相信，通过持续学习和创新，我们能够在快速发展的游戏市场中保持竞争力，并为玩家带来更多惊喜。',
                    '展望未来，我们将继续投资于人才培养和技术研发，不断提升团队实力，以应对游戏行业的新挑战和机遇。我们的目标是成为国内外知名的游戏开发商，为全球玩家带来更多优质、创新的游戏作品。'
                ]
            },
            'contact': {
                'title': '联系我们',
                'info': [
                    ['企业名称', '南京火球网络科技有限公司'],
                    ['英文名称', 'Nanjing Huoqiu Network Technology Co., Ltd.'],
                    ['企业地址', '江苏省南京市江宁滨江开发区盛安大道739号'],
                    ['英文地址', 'No. 739 Shengan Avenue, Jiangning Binjiang Development Zone, Nanjing, Jiangsu, China'],
                    ['统一社会信用代码', '91320115MAE0E128XP'],
                    ['邮编', '210000'],
                    ['电话', '18795885030'],
                    ['邮箱', '184141795@qq.com | hejc1990@gmail.com']
                ],
                'form': {
                    'name': '您的姓名',
                    'email': '您的邮箱',
                    'message': '您的留言',
                    'submit': '发送',
                    'nameRequired': '请输入您的姓名',
                    'emailRequired': '请输入您的邮箱',
                    'emailInvalid': '请输入有效的邮箱地址，包含@符号和域名',
                    'messageRequired': '请输入您的留言'
                }
            },
            'footer': '© 2024 南京火球网络科技有限公司。保留所有权利。',
            'popup': {
                'success': '留言发送成功!',
                'countdown': '秒后自动关闭'
            },
            'languageButton': 'English',
            'about-us': {
                'title': '关于南京火球网络科技有限公司',
                'content': '南京火球网络科技有限公司是一家专注于手机游戏和电脑游戏开发的创新型企业。我们的使命是点燃游戏激情，创造无限可能，为玩家带来高品质、富有创意的游戏体验，不断推动游戏产业的发展与进步。'
            },
            'our-vision': {
                'title': '我们的愿景',
                'content': '展望未来，我们将继续投资于人才培养和技术研发，不断提升团队实力，以应对游戏行业的新挑战和机遇。我们的目标是成为国内外知名的游戏开发商，为全球玩家带来更多优质、创新的游戏作品。'
            }
        },
        'en': {
            'title': {
                'index': 'Nanjing Huoqiu Network Technology Co., Ltd. - Home',
                'about': 'Nanjing Huoqiu Network Technology Co., Ltd. - About Us'
            },
            'nav': ['Home', 'About Us'],
            'slogan': 'Ignite Gaming Passion, Create Infinite Possibilities',
            'cta-button': 'Contact Us',
            'about-summary': {
                'title': 'Company Profile',
                'content': 'Nanjing Huoqiu Network Technology Co., Ltd. is an innovative enterprise focused on mobile and computer game development. We are committed to bringing high-quality, creative gaming experiences to players, continuously driving the development and progress of the gaming industry.'
            },
            'services': {
                'title': 'Our Services',
                'items': [
                    {
                        'title': 'Mobile Game Development',
                        'content': 'Create premium mobile games for iOS and Android platforms, covering various game genres.'
                    },
                    {
                        'title': 'PC Game Production',
                        'content': 'Develop high-quality PC games for Windows, Mac, and Linux platforms.'
                    },
                    {
                        'title': 'Game Operation and Maintenance',
                        'content': 'Provide long-term game operation support, updates, and player community management.'
                    }
                ]
            },
            'team': {
                'title': 'Core Team',
                'content': [
                    'Our team consists of experienced game developers, designers, and technical experts with deep backgrounds and rich experience in the gaming industry. We focus on innovation, constantly exploring new technologies and concepts to ensure our products are always at the forefront of the industry.',
                    'Team members fully leverage their professional advantages, working together to create unique and engaging gaming experiences. We believe that through continuous learning and innovation, we can maintain competitiveness in the rapidly developing gaming market and bring more surprises to players.',
                    'Looking to the future, we will continue to invest in talent cultivation and technology research and development, constantly enhancing our team\'s capabilities to meet new challenges and opportunities in the gaming industry. Our goal is to become a renowned game developer both domestically and internationally, bringing more high-quality and innovative game works to players worldwide.'
                ]
            },
            'contact': {
                'title': 'Contact Us',
                'info': [
                    ['Company Name', 'Nanjing Huoqiu Network Technology Co., Ltd.'],
                    ['Company Address', 'No. 739 Shengan Avenue, Jiangning Binjiang Development Zone, Nanjing, Jiangsu, China'],
                    ['Unified Social Credit Code', '91320115MAE0E128XP'],
                    ['Postal Code', '210000'],
                    ['Phone', '18795885030'],
                    ['Email', '184141795@qq.com | hejc1990@gmail.com'],
                    [' ', ' '],
                    [' ', ' ']
                ],
                'form': {
                    'name': 'Your Name',
                    'email': 'Your Email',
                    'message': 'Your Message',
                    'submit': 'Send',
                    'nameRequired': 'Please enter your name',
                    'emailRequired': 'Please enter your email',
                    'emailInvalid': 'Please enter a valid email address, including @ symbol and domain',
                    'messageRequired': 'Please enter your message'
                }
            },
            'footer': '© 2024 Nanjing Huoqiu Network Technology Co., Ltd. All rights reserved.',
            'popup': {
                'success': 'Message sent successfully!',
                'countdown': 'seconds to auto-close'
            },
            'languageButton': '中文',
            'about-us': {
                'title': 'About Nanjing Huoqiu Network Technology Co., Ltd.',
                'content': 'Nanjing Huoqiu Network Technology Co., Ltd. is an innovative enterprise focused on mobile and computer game development. Our mission is to ignite gaming passion, create infinite possibilities, and bring high-quality, creative gaming experiences to players, continuously driving the development and progress of the gaming industry.'
            },
            'our-vision': {
                'title': 'Our Vision',
                'content': 'Looking to the future, we will continue to invest in talent cultivation and technology research and development, constantly enhancing our team\'s capabilities to meet new challenges and opportunities in the gaming industry. Our goal is to become a renowned game developer both domestically and internationally, bringing more high-quality and innovative game works to players worldwide.'
            }
        }
    };

    function updateContent(lang) {
        console.log("Updating content for language:", lang);
        updateCommonElements(lang);

        const currentPage = window.location.pathname.split('/').pop();
        console.log("Current page:", currentPage);

        if (currentPage === 'index.html' || currentPage === '') {
            updateIndexContent(lang);
        } else if (currentPage === 'about.html') {
            updateAboutContent(lang);
        }

        // 只在首页更新表单验证
        if (currentPage === 'index.html' || currentPage === '') {
            updateFormValidation(lang);
        }

        localStorage.setItem('language', lang);
    }

    function updateCommonElements(lang) {
        document.documentElement.lang = lang;

        // Update navigation
        const navItems = document.querySelectorAll('nav ul li a');
        navItems.forEach((item, index) => {
            item.textContent = translations[lang].nav[index];
        });

        // Update footer
        const footerElement = document.querySelector('footer p');
        if (footerElement) {
            footerElement.textContent = translations[lang].footer;
        }

        // Update language toggle button
        languageToggle.textContent = translations[lang].languageButton;

        // Update page title
        const currentPage = window.location.pathname.split('/').pop();
        document.title = translations[lang].title[currentPage.replace('.html', '')] || translations[lang].title['index'];
    }

    function updateIndexContent(lang) {
        document.querySelector('.slogan').textContent = translations[lang].slogan;
        document.querySelector('.cta-button').textContent = translations[lang]['cta-button'];

        document.querySelector('#about-summary h2').textContent = translations[lang]['about-summary'].title;
        document.querySelector('#about-summary p').textContent = translations[lang]['about-summary'].content;

        document.querySelector('#services h2').textContent = translations[lang].services.title;
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach((item, index) => {
            item.querySelector('h3').textContent = translations[lang].services.items[index].title;
            item.querySelector('p').textContent = translations[lang].services.items[index].content;
        });

        document.querySelector('#team h2').textContent = translations[lang].team.title;
        const teamParagraphs = document.querySelectorAll('#team p');
        teamParagraphs.forEach((p, index) => {
            p.textContent = translations[lang].team.content[index];
        });

        document.querySelector('#contact h2').textContent = translations[lang].contact.title;
        const contactInfo = document.querySelectorAll('.contact-info p');
        contactInfo.forEach((p, index) => {
            p.innerHTML = `<strong>${translations[lang].contact.info[index][0]}：</strong>${translations[lang].contact.info[index][1]}`;
        });

        document.querySelector('#contact-form input[type="text"]').placeholder = translations[lang].contact.form.name;
        document.querySelector('#contact-form input[type="email"]').placeholder = translations[lang].contact.form.email;
        document.querySelector('#contact-form textarea').placeholder = translations[lang].contact.form.message;
        document.querySelector('#contact-form button').textContent = translations[lang].contact.form.submit;

        document.querySelector('#message-popup .popup-content p').textContent = translations[lang].popup.success;
    }

    function updateAboutContent(lang) {
        console.log("Updating about content for language:", lang);

        const aboutUsTitle = document.querySelector('#about-us h1');
        const aboutUsContent = document.querySelector('#about-us p');
        const ourVisionTitle = document.querySelector('#our-vision h2');
        const ourVisionContent = document.querySelector('#our-vision p');

        if (aboutUsTitle) {
            aboutUsTitle.textContent = translations[lang]['about-us'].title;
            console.log("Updated about us title");
        } else {
            console.log("About us title element not found");
        }

        if (aboutUsContent) {
            aboutUsContent.textContent = translations[lang]['about-us'].content;
            console.log("Updated about us content");
        } else {
            console.log("About us content element not found");
        }

        if (ourVisionTitle) {
            ourVisionTitle.textContent = translations[lang]['our-vision'].title;
            console.log("Updated our vision title");
        } else {
            console.log("Our vision title element not found");
        }

        if (ourVisionContent) {
            ourVisionContent.textContent = translations[lang]['our-vision'].content;
            console.log("Updated our vision content");
        } else {
            console.log("Our vision content element not found");
        }

        const contactTitle = document.querySelector('#contact h2');
        if (contactTitle) {
            contactTitle.textContent = translations[lang].contact.title;
            console.log("Updated contact title");
        } else {
            console.log("Contact title element not found");
        }

        const contactInfo = document.querySelectorAll('.contact-info p');
        contactInfo.forEach((p, index) => {
            if (translations[lang].contact.info[index]) {
                p.innerHTML = `<strong>${translations[lang].contact.info[index][0]}：</strong>${translations[lang].contact.info[index][1]}`;
                console.log(`Updated contact info ${index}`);
            } else {
                console.log(`Contact info ${index} not found`);
            }
        });

        // Update form elements
        updateFormValidation(lang);
    }

    function updateFormValidation(lang) {
        const form = document.getElementById('contact-form');
        if (!form) {
            console.log("Contact form not found, skipping form validation update");
            return;
        }

        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const messageInput = form.querySelector('textarea');

        // Update form placeholders
        if (nameInput) nameInput.placeholder = translations[lang].contact.form.name;
        if (emailInput) emailInput.placeholder = translations[lang].contact.form.email;
        if (messageInput) messageInput.placeholder = translations[lang].contact.form.message;

        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) submitButton.textContent = translations[lang].contact.form.submit;

        form.onsubmit = function(e) {
            e.preventDefault();
            let isValid = true;

            if (nameInput && nameInput.value.trim() === '') {
                showError(nameInput, translations[lang].contact.form.nameRequired);
                isValid = false;
            } else {
                clearError(nameInput);
            }

            if (emailInput && emailInput.value.trim() === '') {
                showError(emailInput, translations[lang].contact.form.emailRequired);
                isValid = false;
            } else if (emailInput && !isValidEmail(emailInput.value)) {
                showError(emailInput, translations[lang].contact.form.emailInvalid);
                isValid = false;
            } else {
                clearError(emailInput);
            }

            if (messageInput && messageInput.value.trim() === '') {
                showError(messageInput, translations[lang].contact.form.messageRequired);
                isValid = false;
            } else {
                clearError(messageInput);
            }

            if (isValid) {
                showSuccessPopup(lang);
            }
        };
    }

    function showError(input, message) {
        clearError(input); // 清除可能存在的旧错误消息
        const error = document.createElement('span'); // 改用 span 而不是 div
        error.className = 'error-message';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
        input.classList.add('error'); // 给输入框添加错误样式
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        input.classList.remove('error'); // 移除输入框的错误样式
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showSuccessPopup(lang) {
        const successPopup = document.getElementById('success-popup');
        const successMessage = document.getElementById('success-message');
        const countdownElement = document.getElementById('countdown');

        successMessage.textContent = translations[lang].popup.success;
        successPopup.style.display = 'block';

        let countdown = 3;
        updateCountdown();

        const countdownInterval = setInterval(() => {
            countdown--;
            updateCountdown();
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                successPopup.style.display = 'none';
            }
        }, 1000);

        function updateCountdown() {
            countdownElement.textContent = `${countdown} ${translations[lang].popup.countdown}`;
        }

        successPopup.countdownInterval = countdownInterval;
    }

    // Initialize content
    updateContent(currentLang);

    // Language toggle event listener
    languageToggle.addEventListener('click', function() {
        console.log("Language toggle clicked");
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        console.log("Switching to language:", currentLang);
        updateContent(currentLang);
    });

    // Close button and click outside area event listeners
    const closeBtn = document.querySelector('.close-btn');
    const successPopup = document.getElementById('success-popup');

    closeBtn.addEventListener('click', closeSuccessPopup);

    window.addEventListener('click', function(event) {
        if (event.target == successPopup) {
            closeSuccessPopup();
        }
    });

    function closeSuccessPopup() {
        successPopup.style.display = 'none';
        if (successPopup.countdownInterval) {
            clearInterval(successPopup.countdownInterval);
        }
    }
});

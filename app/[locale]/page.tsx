import { navItems, workExperience } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useTranslations } from 'next-intl';
import About from "@/components/About";
import { ContactForm } from "@/components/Contact";
import MobileMenu from "@/components/ui/MobileMenu";



export default function Home() {

  const h = useTranslations('Hero');
  const heroTranslations = {
    title: h('title'),
    subTitle: h('subTitle'),
    navHome: h('navigation.home'),
    navAbout: h('navigation.about'),
    navprojects: h('navigation.projects'),
    navContact: h('navigation.contact'),
    buttonText: h('buttonText'),
    language: h('language'),
  };


  const a = useTranslations('About');
  const aboutTranslations = {
    title: a('title'),
    text: a('text'),
    communication: a('communication'),
    timeZones: a('timeZones'),
    techStack: a('techStack'),
    passion: a('passion'),
    specialist: a('specialist'),
    startProject: a('startProject'),
    requestFreelancerProfile: a('requestFreelancerProfile'),
    copyEmail: a('copyEmail'),
    emailCopied: a('emailCopied'),
  }

  const p = useTranslations('Projects');
  const projectstranslations = {
    title: p('title'),
    BitcoinVanityTitle: p('BitcoinVanityTitle'),
    BitcoinVanityDesc: p('BitcoinVanityDesc'),
    OverStackingFlowTitle: p('OverStackingFlowTitle'),
    OverStackingFlowDesc: p('OverStackingFlowDesc')
  }

  const ap = useTranslations('Approach');
  const approachTranslation = {
    title: ap('title'),
    phase1: {
      title: ap('phase1.title'),
      text: ap('phase1.text'),
    },
    phase2: {
      title: ap('phase2.title'),
      text: ap('phase2.text'),
    },
    phase3: {
      title: ap('phase3.title'),
      text: ap('phase3.text'),
    }
  }



  const navigationItems = navItems(heroTranslations)


  const w = useTranslations('Experience');

  const workTranslations = {
    title: w('title'),
    btcProfessional: {
      title: w('btcProfessional.title'),
      desc: w('btcProfessional.desc'),
    },
    intern: {
      title: w('intern.title'),
      desc: w('intern.desc'),
    },
    consultant: {
      title: w('consultant.title'),
      desc: w('consultant.desc'),
    },
    freelancer: {
      title: w('freelancer.title'),
      desc: w('freelancer.desc'),
    }
  }

  const c = useTranslations('Contact');
  const contactTranslation = {
    title: c('title'),
    subTitle: c('subTitle'),
    name: {
      label: c('name.label'),
      placeholder: c('name.placeholder'),
      errorMessage: c('name.errorMessage')
    },
    email: {
      label: c('email.label'),
      placeholder: c('email.placeholder'),
      errorMessage: c('email.errorMessage')
    },
    subject: {
      label: c('subject.label'),
      placeholder: c('subject.placeholder'),
    },
    message: {
      label: c('message.label'),
      placeholder: c('message.placeholder'),
      errorMessage: c('message.errorMessage')
    },
    agreeToTerms: {
      label: c('agreeToTerms.label'),
      errorMessage: c('agreeToTerms.errorMessage')
    },
    button: c('button'),
    successMessage: c('successMessage'),
    failedMessage: c('failedMessage'),
    errorMessage: c('errorMessage')
  }


  const f = useTranslations("Footer")
  const footerTranslation = {
    getintouch: f('getintouch')
  }


  const workExperienceItems = workExperience(workTranslations)
  const e = useTranslations("Experience")
  const experienceTranslations = {
    title: e('title'),
  }

  return (
    <>
      <div className="w-full z-50 sm:hidden block">
        <MobileMenu navItems={navigationItems} translate={heroTranslations} />
      </div>
      <div className="max-w-7xl w-full px-5">
        <div className="sm:block hidden">
          <FloatingNav navItems={navigationItems} />
        </div>
        <Hero translate={heroTranslations} />
        <About translate={aboutTranslations} />
        <Experience translate={experienceTranslations} workExperienceItems={workExperienceItems} />
        <Approach translate={approachTranslation} />
        <RecentProjects translate={projectstranslations} />
        <ContactForm translate={contactTranslation} />
        <Footer translate={footerTranslation} />
      </div>
    </>
  );
};

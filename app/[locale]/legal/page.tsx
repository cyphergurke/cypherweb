
import React from 'react'
import LegalDE from './legalDE';
import LegalEN from './legalEN';
import MobileMenu from '@/components/ui/MobileMenu';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { useTranslations } from 'next-intl';
import { navItems } from '@/data';
import Link from 'next/link';


const LegalPage = ({ params }: { params: { locale: any } }) => {
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
    const navigationItems = navItems(heroTranslations)

    return (
        <>
            <div className="w-full z-50 sm:hidden block">
                <MobileMenu navItems={navigationItems} translate={heroTranslations} />
            </div >
            <div className="sm:block hidden">
                <FloatingNav navItems={navigationItems} />
            </div>
            <div className="min-h-screen   w-2/3 mt-44 text-gray-900 dark:text-gray-100">
                <div className="container mx-auto top-42">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Impressum:</h1>
                    </div>
                    <div className="flex flex-col pt-7  mb-24 text-center md:text-left lg:text-left ">
                        <p>Cypherweb Development</p>
                        <p>David Witten</p>
                        <p>Herzberger Landstraße</p>
                        <p>37085 Göttingen</p>
                        <Link href="tel:+491715186152" className="mt-5 text-violet-500">
                            +49 171 5186152</Link>
                    </div>
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Datenschutzerklärung </h1>
                    </header>


                </div>
                {params.locale === "en" ? <LegalDE /> : <LegalEN />}
            </div>
        </>
    )

}

export default LegalPage

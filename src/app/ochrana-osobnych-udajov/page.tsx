import Image from 'next/image';
import CTASection from '@/components/CTASection';

export default function OchranaOsobnychUdajovPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/servicecards/tapety.jpg"
                        alt="Ochrana osobných údajov background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 w-[90vw] mx-auto px-4 lg:px-8 mt-20">
                    <p className="text-sm tracking-widest text-gray-300 mb-4 uppercase">DOKUMENTY</p>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
                        Ochrana osobných údajov
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="w-[90vw] max-w-4xl mx-auto px-4 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12">
                            <h2 className="text-xl font-bold text-black mb-4">Prevádzkovateľ</h2>
                            <ul className="space-y-2 list-none p-0 m-0">
                                <li><strong>Trubela s. r. o.</strong></li>
                                <li>Sídlo: Podzáhradná 9, 821 07 Bratislava</li>
                                <li>IČO: 53723147</li>
                                <li>DIČ: 2121529047</li>
                                <li>IČ DPH: SK2121529047</li>
                                <li>E-mail: TRUBELA@TRUBELA.SK</li>
                                <li>Tel.: +421 905 204 946</li>
                            </ul>
                        </div>

                        <p>
                            Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-6">I. Kontaktný formulár</h2>
                            <p className="mb-4">
                                Na stránke www.trubela.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Položiť otázku k našim produktom a službám</li>
                                <li>Požiadať o cenovú ponuku</li>
                            </ul>

                            <h3 className="text-xl font-bold text-black mb-4">Rozsah spracúvaných údajov:</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Meno a priezvisko</li>
                                <li>E-mailová adresa</li>
                                <li>Telefónne číslo</li>
                            </ul>

                            <h3 className="text-xl font-bold text-black mb-4">Účel spracovania:</h3>
                            <p className="mb-6">
                                Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
                            </p>

                            <h3 className="text-xl font-bold text-black mb-4">Právny základ:</h3>
                            <p className="mb-6">
                                Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.
                            </p>

                            <h3 className="text-xl font-bold text-black mb-4">Doba uchovávania:</h3>
                            <p className="mb-6">
                                Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-6">II. Súbory cookies</h2>
                            <p className="mb-4">
                                Na našej webovej stránke používame cookies výlučne na nasledujúce účely:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                                <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                            </ul>

                            <h3 className="text-xl font-bold text-black mb-4">Správa súhlasov:</h3>
                            <p className="mb-6">
                                Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-6">III. Práva dotknutej osoby</h2>
                            <p className="mb-4">Podľa nariadenia GDPR máte nasledujúce práva:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Prístup k osobným údajom, ktoré spracúvame</li>
                                <li>Oprava nepresných alebo neúplných údajov</li>
                                <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                                <li>Obmedzenie spracovania</li>
                                <li>Prenosnosť údajov</li>
                                <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                                <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                            </ul>
                            <p className="p-6 bg-gray-50 border-l-4 border-black font-medium text-black">
                                V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na TRUBELA@TRUBELA.SK alebo telefónnom čísle +421 905 204 946.
                            </p>
                        </div>

                        <p className="text-sm border-t border-gray-100 pt-8 mt-12 italic">
                            Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}

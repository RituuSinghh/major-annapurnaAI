'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Search, Leaf, AlertCircle, Clock, Droplet } from 'lucide-react';

export default function Remedies() {
  const router = useRouter();
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState('all');
  const [selectedFood, setSelectedFood] = useState(null);
  const [activeTab, setActiveTab] = useState('foods'); // 'foods' or 'remedies'

  const diseases = ['all', 'diabetes', 'hypertension', 'arthritis', 'cold', 'immunity', 'digestion', 'stress', 'anxiety'];

  const ayurvedicRemedies = [
    {
      condition: 'Common Cold & Cough',
      doshaImbalance: 'Kapha imbalance with excess mucus production',
      symptoms: ['Runny nose', 'Congestion', 'Cough', 'Mild fever'],
      remedies: [
        {
          name: 'Turmeric Golden Milk',
          ingredients: ['1 cup warm milk', '1/2 tsp turmeric powder', '1/4 tsp black pepper', '1 tsp honey'],
          preparation: 'Heat milk, add turmeric and black pepper. Simmer for 5 minutes. Add honey after cooling slightly.',
          usage: 'Drink before bedtime daily',
          benefits: 'Anti-inflammatory, boosts immunity, soothes throat'
        },
        {
          name: 'Ginger-Tulsi Tea',
          ingredients: ['1 inch fresh ginger', '5-7 tulsi leaves', '1 tsp honey', '1 cup water'],
          preparation: 'Boil water with crushed ginger and tulsi leaves for 10 minutes. Strain and add honey.',
          usage: '2-3 times daily',
          benefits: 'Clears congestion, reduces inflammation, antimicrobial'
        }
      ],
      safetyNotes: ['Avoid if allergic to any ingredient', 'Consult doctor if symptoms persist beyond 7 days']
    },
    {
      condition: 'Digestive Issues & Acidity',
      doshaImbalance: 'Pitta aggravation causing excess heat in stomach',
      symptoms: ['Heartburn', 'Bloating', 'Indigestion', 'Acid reflux'],
      remedies: [
        {
          name: 'Cumin-Coriander-Fennel Tea (CCF Tea)',
          ingredients: ['1 tsp cumin seeds', '1 tsp coriander seeds', '1 tsp fennel seeds', '4 cups water'],
          preparation: 'Boil all seeds in water for 10 minutes. Strain and store in thermos.',
          usage: 'Sip throughout the day, especially 30 minutes before meals',
          benefits: 'Improves digestion, reduces bloating, cools pitta'
        },
        {
          name: 'Aloe Vera Juice',
          ingredients: ['2 tbsp fresh aloe vera gel', '1 cup water', 'Pinch of cumin powder'],
          preparation: 'Blend aloe vera gel with water. Add cumin powder.',
          usage: 'Drink on empty stomach in morning',
          benefits: 'Soothes stomach lining, reduces acidity, cooling effect'
        }
      ],
      safetyNotes: ['Use only edible aloe vera', 'Avoid during pregnancy', 'Start with small amounts']
    },
    {
      condition: 'Stress & Anxiety',
      doshaImbalance: 'Vata imbalance causing mental restlessness',
      symptoms: ['Racing thoughts', 'Insomnia', 'Nervousness', 'Fatigue'],
      remedies: [
        {
          name: 'Ashwagandha Moon Milk',
          ingredients: ['1 cup warm milk', '1/2 tsp ashwagandha powder', '1/4 tsp cardamom', '1 tsp ghee', 'Honey to taste'],
          preparation: 'Warm milk with ashwagandha and cardamom. Add ghee and honey.',
          usage: 'Drink 1 hour before bedtime',
          benefits: 'Calms nervous system, promotes sleep, adaptogenic'
        },
        {
          name: 'Brahmi Tea',
          ingredients: ['1 tsp brahmi powder', '1 cup hot water', '1/2 tsp honey'],
          preparation: 'Steep brahmi in hot water for 10 minutes. Strain and add honey.',
          usage: 'Once daily in morning or evening',
          benefits: 'Enhances mental clarity, reduces anxiety, improves memory'
        }
      ],
      safetyNotes: ['Consult healthcare provider if on medications', 'Not for pregnant/nursing women without medical advice']
    },
    {
      condition: 'Joint Pain & Arthritis',
      doshaImbalance: 'Vata aggravation causing dryness and inflammation in joints',
      symptoms: ['Joint stiffness', 'Pain', 'Reduced mobility', 'Swelling'],
      remedies: [
        {
          name: 'Turmeric-Ginger Paste',
          ingredients: ['2 tsp turmeric powder', '1 tsp ginger powder', '1 tsp black pepper', '2 tbsp warm sesame oil'],
          preparation: 'Mix all ingredients into a paste. Can be taken internally or applied externally.',
          usage: 'Internal: 1/2 tsp with warm water twice daily. External: Apply to affected joints',
          benefits: 'Anti-inflammatory, pain relief, improves circulation'
        },
        {
          name: 'Guggulu Decoction',
          ingredients: ['1/4 tsp guggulu powder', '1 cup warm water', '1/2 tsp castor oil'],
          preparation: 'Mix guggulu in warm water, add castor oil.',
          usage: 'Once daily before bedtime',
          benefits: 'Reduces inflammation, detoxifies joints, improves flexibility'
        }
      ],
      safetyNotes: ['Avoid if pregnant', 'May interact with blood thinners', 'Consult Ayurvedic practitioner for dosage']
    },
    {
      condition: 'Low Immunity',
      doshaImbalance: 'Weak Ojas (vital essence) and imbalanced doshas',
      symptoms: ['Frequent infections', 'Fatigue', 'Slow recovery', 'Weakness'],
      remedies: [
        {
          name: 'Chyawanprash',
          ingredients: ['1-2 tsp Chyawanprash (herbal jam)', '1 cup warm milk or water'],
          preparation: 'Take Chyawanprash directly or mix with warm milk.',
          usage: 'Once daily in morning on empty stomach',
          benefits: 'Boosts immunity, rejuvenates, rich in antioxidants'
        },
        {
          name: 'Triphala Water',
          ingredients: ['1 tsp triphala powder', '1 cup warm water', 'Optional: honey'],
          preparation: 'Mix triphala in warm water. Let it sit for 5 minutes.',
          usage: 'Drink before bedtime or early morning',
          benefits: 'Detoxifies, improves digestion, strengthens immunity'
        }
      ],
      safetyNotes: ['Start with smaller doses', 'Avoid during acute illness', 'Safe for long-term use']
    },
    {
      condition: 'Skin Issues & Acne',
      doshaImbalance: 'Pitta and Kapha imbalance causing heat and toxins',
      symptoms: ['Acne', 'Redness', 'Inflammation', 'Oily skin'],
      remedies: [
        {
          name: 'Neem-Turmeric Face Pack',
          ingredients: ['1 tbsp neem powder', '1/2 tsp turmeric', '2 tbsp rose water', '1 tsp honey'],
          preparation: 'Mix all ingredients into smooth paste.',
          usage: 'Apply to face, leave for 15 minutes, rinse with cool water. Use 2-3 times weekly',
          benefits: 'Antibacterial, reduces inflammation, purifies skin'
        },
        {
          name: 'Cooling Coriander Drink',
          ingredients: ['1 tbsp coriander seeds', '2 cups water', 'Juice of 1/2 lime'],
          preparation: 'Soak coriander seeds overnight. Blend with water and strain. Add lime juice.',
          usage: 'Drink in morning on empty stomach',
          benefits: 'Cools pitta, detoxifies blood, clears skin'
        }
      ],
      safetyNotes: ['Patch test before applying to face', 'Avoid if allergic to ingredients', 'Internal remedies work best with external care']
    }
  ];

  useEffect(() => {
    fetchFoods();
  }, []);

  useEffect(() => {
    if (selectedDisease === 'all') {
      setFilteredFoods(foods);
    } else {
      setFilteredFoods(foods.filter(food => food.diseases.includes(selectedDisease)));
    }
  }, [selectedDisease, foods]);

  const fetchFoods = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await axios.get(`${API_URL}/food/all`);
      setFoods(response.data);
      setFilteredFoods(response.data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  return (
    <div className="min-h-screen bg-ayurveda-light">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-ayurveda-primary mb-4">Ayurvedic Remedies & Foods</h1>
          <p className="text-lg text-gray-700">Discover natural healing through ancient wisdom</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setActiveTab('remedies')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'remedies'
                  ? 'bg-ayurveda-primary text-white'
                  : 'text-ayurveda-brown hover:bg-ayurveda-beige'
              }`}
            >
              Home Remedies
            </button>
            <button
              onClick={() => setActiveTab('foods')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'foods'
                  ? 'bg-ayurveda-primary text-white'
                  : 'text-ayurveda-brown hover:bg-ayurveda-beige'
              }`}
            >
              Food Database
            </button>
          </div>
        </div>

        {/* Home Remedies Section */}
        {activeTab === 'remedies' && (
          <div className="space-y-6">
            {ayurvedicRemedies.map((remedy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-ayurveda-primary to-ayurveda-green p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{remedy.condition}</h2>
                  <div className="flex items-center text-ayurveda-beige">
                    <Droplet className="h-5 w-5 mr-2" />
                    <p className="text-sm">{remedy.doshaImbalance}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Symptoms */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-ayurveda-brown mb-3">Common Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {remedy.symptoms.map((symptom, i) => (
                        <span key={i} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Remedies */}
                  <div className="space-y-6">
                    {remedy.remedies.map((r, i) => (
                      <div key={i} className="border-l-4 border-ayurveda-secondary pl-6 py-2">
                        <h4 className="text-xl font-bold text-ayurveda-primary mb-3 flex items-center">
                          <Leaf className="h-5 w-5 mr-2 text-ayurveda-green" />
                          {r.name}
                        </h4>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-ayurveda-light p-4 rounded-lg">
                            <p className="font-semibold text-ayurveda-brown mb-2">Ingredients:</p>
                            <ul className="space-y-1">
                              {r.ingredients.map((ing, idx) => (
                                <li key={idx} className="text-sm text-gray-700">• {ing}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-ayurveda-light p-4 rounded-lg">
                            <p className="font-semibold text-ayurveda-brown mb-2">Benefits:</p>
                            <p className="text-sm text-gray-700">{r.benefits}</p>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg mb-3">
                          <p className="font-semibold text-ayurveda-green mb-2">Preparation:</p>
                          <p className="text-sm text-gray-700">{r.preparation}</p>
                        </div>

                        <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mr-2" />
                          <div>
                            <p className="font-semibold text-blue-900 text-sm">Usage:</p>
                            <p className="text-sm text-blue-700">{r.usage}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Safety Notes */}
                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-900 mb-2">Safety Notes:</p>
                        <ul className="space-y-1">
                          {remedy.safetyNotes.map((note, i) => (
                            <li key={i} className="text-sm text-yellow-800">• {note}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Food Database Section */}
        {activeTab === 'foods' && (
          <>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-ayurveda-secondary mr-2" />
                <h3 className="text-xl font-bold text-ayurveda-primary">Filter by Condition</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {diseases.map((disease) => (
                  <button
                    key={disease}
                    onClick={() => setSelectedDisease(disease)}
                    className={`px-6 py-2 rounded-full font-medium transition ${
                      selectedDisease === disease
                        ? 'bg-ayurveda-primary text-white'
                        : 'bg-ayurveda-beige text-ayurveda-brown hover:bg-ayurveda-accent hover:text-white'
                    }`}
                  >
                    {disease.charAt(0).toUpperCase() + disease.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFoods.map((food, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" onClick={() => setSelectedFood(food)}>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-ayurveda-primary">{food.name}</h3>
                      <Leaf className="h-5 w-5 text-ayurveda-secondary" />
                    </div>
                    <p className="text-sm text-ayurveda-accent mb-3">{food.category}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-ayurveda-green mb-2">Good for:</p>
                      <div className="flex flex-wrap gap-2">
                        {food.diseases.slice(0, 4).map((disease, i) => (
                          <span key={i} className="bg-ayurveda-beige text-ayurveda-brown text-xs px-3 py-1 rounded-full">
                            {disease}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Click to view full details</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedFood && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedFood(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="h-64 overflow-hidden">
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-ayurveda-primary mb-4">{selectedFood.name}</h2>
              <p className="text-ayurveda-accent mb-6">{selectedFood.category}</p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-ayurveda-green mb-3">Health Benefits</h3>
                <ul className="space-y-2">
                  {selectedFood.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-ayurveda-secondary mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-ayurveda-green mb-3">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFood.ingredients.map((ingredient, i) => (
                    <span key={i} className="bg-ayurveda-light text-ayurveda-brown px-4 py-2 rounded-lg">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-ayurveda-green mb-3">Preparation</h3>
                <p className="text-gray-700 bg-ayurveda-light p-4 rounded-lg">{selectedFood.preparation}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-ayurveda-green mb-3">Ayurvedic Properties</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-ayurveda-light p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Rasa (Taste)</p>
                    <p className="font-semibold text-ayurveda-primary">{selectedFood.ayurvedicProperties.rasa.join(', ')}</p>
                  </div>
                  <div className="bg-ayurveda-light p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Virya (Energy)</p>
                    <p className="font-semibold text-ayurveda-primary">{selectedFood.ayurvedicProperties.virya}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedFood(null)}
                className="w-full bg-ayurveda-primary text-white py-3 rounded-lg hover:bg-ayurveda-green transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

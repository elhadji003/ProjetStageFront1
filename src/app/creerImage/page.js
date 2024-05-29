'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [nombre, setNombre] = useState(0);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Les états pour les détails d'un nouvel hôtel
  const [newHotelName, setNewHotelName] = useState("");
  const [newHotelAddress, setNewHotelAddress] = useState("");
  const [newHotelPrice, setNewHotelPrice] = useState("");
  const [newHotelImage, setNewHotelImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://projetstage1backend.onrender.com/api/hotels");
      setHotels(response.data);
      setNombre(response.data.length);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      setError('Erreur lors de la récupération des données.');
    }
  };

  const handleCreateHotel = async () => {
    try {
      // Créer un nouvel objet FormData pour envoyer l'image avec les détails de l'hôtel
      const formData = new FormData();
      formData.append("nameHotel", newHotelName);
      formData.append("address", newHotelAddress);
      formData.append("price", newHotelPrice);
      formData.append("image", newHotelImage);

      // Envoyer une requête POST pour créer un nouvel hôtel avec une image
      await axios.post("https://projetstage1backend.onrender.com/api/creerHotel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Rafraîchir la liste des hôtels après la création réussie
      fetchData();
    } catch (error) {
      console.error('Erreur lors de la création de l\'hôtel:', error);
      setError('Erreur lors de la création de l\'hôtel.');
    }
  };

  const handleNewHotelImageChange = (event) => {
    // Mettre à jour l'état avec le fichier sélectionné par l'utilisateur
    setNewHotelImage(event.target.files[0]);
  };

  // Le reste du code reste inchangé...

  return (
    <div className="d-flex flex-column m-2">
      {/* Interface utilisateur pour la création d'un nouvel hôtel */}
      <input type="text" value={newHotelName} onChange={(e) => setNewHotelName(e.target.value)} placeholder="Nom de l'hôtel" />
      <input type="text" value={newHotelAddress} onChange={(e) => setNewHotelAddress(e.target.value)} placeholder="Adresse de l'hôtel" />
      <input type="text" value={newHotelPrice} onChange={(e) => setNewHotelPrice(e.target.value)} placeholder="Prix par nuit" />
      <input type="file" onChange={handleNewHotelImageChange} />

      <button onClick={handleCreateHotel}>Créer un nouvel hôtel</button>

      {/* Reste du code pour afficher les hôtels existants et le modal */}
    </div>
  );
};

export default Hotel;

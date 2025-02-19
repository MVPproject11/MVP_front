import { useState, useEffect } from "react";
import { getCaregiver, updateCaregiver, deleteCaregiver, registerCaregiver } from "../api/caregivers";
import { Caregiver } from "../types/caregiver";

export const useCaregiver = () => {
  const [caregiver, setCaregiver] = useState<Caregiver | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaregiver = async () => {
      try {
        setLoading(true);
        const data = await getCaregiver();
        setCaregiver(data);
      } catch (err) {
        setError("Failed to fetch caregiver data");
      } finally {
        setLoading(false);
      }
    };
    fetchCaregiver();
  }, []);

  const update = async (updatedData: Partial<Caregiver>) => {
    await updateCaregiver(updatedData);
    setCaregiver((prev) => (prev ? { ...prev, ...updatedData } : null));
  };

  const remove = async () => {
    await deleteCaregiver();
    setCaregiver(null);
  };

  const register = async (newCaregiver: Caregiver) => {
    await registerCaregiver(newCaregiver);
    setCaregiver(newCaregiver);
  };

  return { caregiver, loading, error, update, remove, register };
};

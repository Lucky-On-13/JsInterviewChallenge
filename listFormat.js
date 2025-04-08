/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options = {}) {
    if (!Array.isArray(items)) return "";
  
    // Étape 1: Nettoyer les éléments vides ou non-strings
    let list = items.filter(
      (item) => typeof item === "string" && item.trim() !== "",
    );
  
    // Étape 2: Unicité
    if (options.unique) {
      list = [...new Set(list)];
    }
  
    // Étape 3: Tri
    if (options.sorted) {
      list.sort();
    }
  
    // Étape 4: Gestion de la longueur maximale
    let max = options.length && options.length > 0 ? options.length : list.length;
    const visible = list.slice(0, max);
    const hiddenCount = list.length - visible.length;
  
    // Étape 5: Formater la sortie
    if (visible.length === 0) return "";
  
    if (hiddenCount > 0) {
      return `${visible.join(", ")} and ${hiddenCount} other${hiddenCount > 1 ? "s" : ""}`;
    }
  
    if (visible.length === 1) {
      return visible[0];
    }
  
    if (visible.length === 2) {
      return `${visible[0]} and ${visible[1]}`;
    }
  
    return `${visible.slice(0, -1).join(", ")} and ${visible[visible.length - 1]}`;
  }
  
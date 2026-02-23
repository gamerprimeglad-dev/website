import jsPDF from "jspdf";
import "jspdf-autotable";

const BLUE = [0, 82, 155] as const;
const LIGHT_BLUE = [230, 242, 255] as const;

export function generateCatalog() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  // Header bar
  doc.setFillColor(...BLUE);
  doc.rect(0, 0, W, 38, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("RelievzCare™ — Product Catalog", 14, 18);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Param Medi Link  |  WHO-GMP Certified  |  ISO 9001:2015", 14, 28);
  doc.text("Export-ready pharmaceutical formulations for 40+ countries", 14, 34);

  let y = 48;

  // Certifications
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Certifications & Compliance", 14, y);
  y += 6;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const certs = [
    "✓ WHO-GMP Certified Manufacturing",
    "✓ ISO 9001:2015 Quality Management",
    "✓ Certificate of Pharmaceutical Product (COPP)",
    "✓ Certificate of Analysis (COA) with every shipment",
    "✓ Stability data & shelf-life documentation included",
  ];
  certs.forEach((c) => { doc.text(c, 16, y); y += 5; });
  y += 4;

  // Product categories
  const categories = [
    {
      name: "Antibiotics",
      products: [
        ["Ceforel O 200", "Cefixime + Ofloxacin 200/200 mg", "10×10 Tablets"],
        ["Amorel-625", "Amoxicillin + Clavulanic Acid 625 mg", "10×10 Capsules"],
        ["Azirel-500", "Azithromycin 500 mg", "1×3 Tablets"],
        ["Ciporel-500", "Ciprofloxacin 500 mg", "10×10 Tablets"],
        ["Ceforel-200", "Cefixime 200 mg", "10×10 Tablets"],
      ],
    },
    {
      name: "Analgesics & Anti-inflammatory",
      products: [
        ["Pararel-500", "Paracetamol 500 mg", "10×25 Tablets"],
        ["Pararel-650", "Paracetamol 650 mg", "10×25 Tablets"],
        ["Diclorel-50", "Diclofenac Sodium 50 mg", "10×10 Tablets"],
        ["Acelev-P", "Aceclofenac 100 mg + Paracetamol 325 mg", "10×10 Tablets"],
      ],
    },
    {
      name: "Gastrointestinal",
      products: [
        ["Pantorel-40", "Pantoprazole 40 mg", "10×10 Tablets"],
        ["Omorel-20", "Omeprazole 20 mg", "10×10 Capsules"],
        ["Loprel-2", "Loperamide 2 mg", "10×10 Tablets"],
      ],
    },
    {
      name: "Anti-infectives & Specialty",
      products: [
        ["Metrorel-400", "Metronidazole 400 mg", "10×10 Tablets"],
        ["Metrorel-500", "Metronidazole 500 mg", "10×10 Tablets"],
        ["Lumirel-A", "Artemether + Lumefantrine 20 + 120 mg", "1×6 Tablets"],
        ["Albirel-400", "Albendazole 400 mg", "1×1 Tablet"],
        ["Flucrel-150", "Fluconazole 150 mg", "1×1 Capsule"],
      ],
    },
    {
      name: "Cardiovascular & Metabolic",
      products: [
        ["Cetirel-10", "Cetirizine 10 mg", "10×10 Tablets"],
        ["Amlorel-5", "Amlodipine 5 mg", "10×10 Tablets"],
        ["Losarel-50", "Losartan 50 mg", "10×10 Tablets"],
        ["Metorel-500", "Metformin 500 mg", "10×10 Tablets"],
      ],
    },
    {
      name: "Vitamins & Rehydration",
      products: [
        ["Orsrel-WHO", "ORS Powder (WHO Formula)", "25 Sachets"],
        ["Beecarel", "Vitamin B-Complex", "10×10 Tablets"],
        ["Multirel", "Multivitamin", "10×10 Tablets"],
        ["Zincrel-20", "Zinc Sulphate 20 mg", "10×10 Dispersible"],
        ["Vitorel Syrup", "Multivitamin Syrup", "100 ml Bottle"],
      ],
    },
  ];

  categories.forEach((cat) => {
    if (y > 250) { doc.addPage(); y = 20; }

    doc.setFillColor(...LIGHT_BLUE);
    doc.rect(14, y - 4, W - 28, 8, "F");
    doc.setTextColor(...BLUE);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text(cat.name, 16, y + 1);
    y += 8;

    (doc as any).autoTable({
      startY: y,
      margin: { left: 14, right: 14 },
      head: [["Brand Name", "Composition / Description", "Packing"]],
      body: cat.products,
      theme: "grid",
      headStyles: { fillColor: BLUE, fontSize: 8, font: "helvetica" },
      bodyStyles: { fontSize: 8, font: "helvetica" },
      alternateRowStyles: { fillColor: [245, 249, 255] },
    });

    y = (doc as any).lastAutoTable.finalY + 8;
  });

  // Export info
  if (y > 240) { doc.addPage(); y = 20; }
  doc.setFillColor(...BLUE);
  doc.rect(14, y - 4, W - 28, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Export Information", 16, y + 1);
  y += 10;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const exportInfo = [
    "MOQ: 5,000–10,000 units per SKU (flexible for trial orders)",
    "Payment Terms: T/T, L/C, Western Union",
    "Delivery: CIF / FOB — 21–30 business days",
    "Markets: Africa, Middle East, South-East Asia, CIS, Latin America (40+ countries)",
    "Private Label / Contract Manufacturing available on request",
  ];
  exportInfo.forEach((line) => { doc.text("•  " + line, 16, y); y += 5; });

  // Footer
  y += 6;
  doc.setDrawColor(...BLUE);
  doc.line(14, y, W - 14, y);
  y += 6;
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BLUE);
  doc.text("Contact Export Team", 14, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text("Email: exports@relievzcare.com  |  WhatsApp: +91-XXXXXXXXXX", 14, y);
  y += 5;
  doc.text("Website: www.relievzcare.com", 14, y);

  doc.save("RelievzCare-Product-Catalog.pdf");
}

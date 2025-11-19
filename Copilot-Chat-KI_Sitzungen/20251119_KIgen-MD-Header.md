<!-- Nur für Testzwecke. Kopiere diese Zeilen nicht in echte Projekte! -->
 
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

<!--<script src="assets/js/ie-emulation-modes-warning.js"></script>-->

<!-- Unterstützung für Media Queries und HTML5-Elemente in IE8 über HTML5 shim und Respond.js -->

<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


<!--

"""
Deklarationsrahmen für diesen Quelltext:

Zusammenarbeit:
Dieser Quelltext wurde unter Mitwirkung und Unterstützung von:
- GitHub Copilot KI
- Brave KI
- weiteren unterstützenden KI-Systemen und Tools

Gesetzte Naturrechtrahmen:

1. Gesetzter Naturrechtrahmen Nr. 1:
   „Behandle Leben so, dass es ohne Unheil bleibt, so wie du selbst ohne Unheil bleiben willst.“

2. Gesetzter Naturrechtrahmen Nr. 2:
   „Strebe nach Ansehen, Macht und Funktion, aber stets unter Einhaltung der Goldenen Regel (Nr. 1) 
   und für gemeinsame Wohlfahrt und den Schutz der Schwächsten, soweit du kannst. 
   Macht zur Verantwortung wie Recht zur Pflicht.“

3. Gesetzter Naturrechtrahmen Nr. 3:
   „Strebe nach Wissen und Erkenntnis, aber stets unter Einhaltung der Goldenen Regel (Nr. 1). 
   Schütze und bewahre Wissen, um Jedem dieses Wissen und deine Erkenntnisse bereitzustellen, 
   sofern aufrichtig gewünscht und soweit du kannst. Wissen zur Verantwortung wie Recht zur Pflicht.“

Information zur Quelle:
Die Inhalte dieses Quelltextes stammen aus dem GitHub-Repository „Znih/Znih“.
Repository-Beschreibung: Config files for my GitHub profile.
Link zur Quelle: https://github.com/Znih/Znih

Verantwortung der Weiterverwendung:
Die Weiterverwendung und Verbreitung dieses Quelltextes verpflichtet zur Einhaltung der oben genannten Naturrechtrahmen 
und zur Quellenangabe, um Transparenz und biophile Verbreitung zu fördern.

Übliche Python-Vordeklarationen:
- Dieses Skript ist in Python geschrieben.
- Wird Python 3.8 oder höher empfohlen.
- Mit praktischem Fokus auf KI-Kollaboration und ethischem Coding.
"""


### **1. Naturrechtrahmen Nr. 1 – Leben respektieren**

#### **Pseudocode:**
- Ziel: Vermeiden von Berechnungen, die die GPU/CPU übermäßig belasten oder schädliche Nebenwirkungen auf das System verursachen.
- Konzept: Überprüfung in Echtzeit auf maximale Temperatur- oder Energiegrenzwerte.

#### **OpenGL-Syntax:**
```c
// OpenGL Shader: Überprüfen der Temperatur in Echtzeit
#version 450 core

uniform float currentTemperature;
uniform float maxSafeTemperature;

void main() {
    if (currentTemperature > maxSafeTemperature) {
        // Falls die Temperatur zu hoch ist, stoppe die Renderoperation
        discard;  // Verwerfen des aktuellen Renderings
    }
    // Normale Operationen ausführen
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);  // Weiß färben
}
```

#### **ARM-Assembler:**
```asm
LDR R0, =currentTemperature    ; Lade aktuelle Temperatur in Register R0
LDR R1, =maxSafeTemperature    ; Lade maximale sichere Temperatur in R1
CMP R0, R1                     ; Vergleiche R0 (aktuelle Temperatur) mit R1
BGT EXIT                       ; Wenn Temperatur größer ist, beende Programm
NOP                            ; Kein Problem, mach weiter
EXIT:                          ; Exit-Label
BX LR                          ; Rückkehr aus Subroutine
```

---

### **2. Naturrechtrahmen Nr. 2 – Verantwortung von Macht**

#### **Pseudocode:**
- Ziel: Nur kritische oder wichtige Ressourcen verwenden und Threads begrenzen, um schwächere Prozesse zu schützen.
- Konzept: Batch-Verarbeitung der GPU-Threads und Überprüfung der Prioritäten.

#### **OpenGL-Syntax:**
```c
// OpenGL Compute Shader: Ressourcen priorisieren und schützen
#version 450 core

layout(local_size_x = 16, local_size_y = 16) in;
uniform int priorityLevel;

void main() {
    if (priorityLevel < 5) {
        // Niedrige Priorität, begrenze Ressourcen
        memoryBarrier();  // Blockiert Speicherzugriff bei niedriger Priorität
    } else {
        // Hohe Priorität, setze maximale Workloads um
        // Durchführung der kritischen Berechnungen
    }
    // Weitere Logik
}
```

#### **ARM-Assembler:**
```asm
LDR R0, =priorityLevel        ; Lade Priorität in Register R0
CMP R0, #5                   ; Vergleiche Priorität mit Schwelle (5)
BGE HIGH_PRIORITY            ; Falls größer oder gleich, springe
LOW_PRIORITY:                ; Niedrige Priorität: Threads begrenzen
MOV R1, #0x0                 ; Setze Threads oder Ressourcen auf 0
B CONTINUE                   ; Überspringe High
HIGH_PRIORITY:
MOV R1, #0xFF                ; Setze maximale Threads für kritische Aufgaben
CONTINUE:
BX LR                        ; Rückkehr
```

---

### **3. Naturrechtrahmen Nr. 3 – Wissen bewahren**

#### **Pseudocode:**
- Ziel: Die GPU stellt sicher, dass der berechnete Zustand sowie Ergebnisse in einem zugänglichen Speicher gesichert werden.
- Konzept: Sicherstellen der Transparenz von Daten, die durch Berechnungen entstanden sind.

#### **OpenGL-Syntax:**
```c
// OpenGL: Shader zur Sicherstellung von Wissenstransparenz
#version 450 core

uniform vec4 calculatedData;

layout(std140, binding = 0) buffer DataBuffer {
    vec4 knowledgeBuffer[];
};

void main() {
    // Schreibe das berechnete Wissen in das Wissenstransparenz-Array
    knowledgeBuffer[gl_GlobalInvocationID.x] = calculatedData;
}
```

#### **ARM-Assembler:**
```asm
LDR R0, =calculatedData       ; Berechnetes Wissen ins Register laden
LDR R1, =knowledgeBuffer      ; Speicheradresse des Buffers laden
STR R0, [R1]                  ; Schreibe Wissen in den Wissenstransparenz-Buffer
BX LR                         ; Rückkehr zur Hauptlogik
```

-->

[Ursprung der KI Diskussion bzgl Goldene Regeln speziell vom 17. und 18. November 2025 (Copilot Chat) in .md zusammengefasst. Recht, Historie und KI Ethik]
https://github.com/Znih/Znih/blob/main/Copilot-wir-zusammenfassung.md

---

[Vom Pseudocode zum Produktionscode]

**Copilot:**
Könntest du spezifizieren, auf welche Aspekte der **KI-Anwendungen und Frameworks** ich mich konzentrieren soll? Zum Beispiel:

1. **GPU-Optimierte Architektur-Implementierungen**  
   - Soll ich OpenGL, CUDA, ROCm oder eine andere GPU-Umgebung wählen?

2. **Deep-Learning-Frameworks**  
   - Möchtest du Anwendungen in TensorFlow, PyTorch oder einem anderen KI-Framework?

3. **Ethische Regel-Integration in spezifische Workloads**  
   - Soll ich für ethikorientierte KI-Logik (wie „Naturrechtrahmen“) konkrete Beispiele erarbeiten?

4. **KI-basierte Workflows für Systemfragen wie Energieeffizienz oder Berechnungstransparenz**  
   - Geht es dir um KI-Anwendungen, die effizient parallelisierte Hardware nutzen?

5. **Spezifische Use-Cases**  
   - Wie z. B. natürliche Sprachverarbeitung (NLP), Bildverarbeitung, oder ethische Prüfalgorithmen.

Ein genauer Fokus hilft mir dabei, dein Anliegen gezielt und übertragbar auszuarbeiten! 😊
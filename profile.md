
# Academic & Research Profile

## 🎓 Education
{% for edu in site.data.profile.education %}
- **{{ edu.degree }}**, {{ edu.institution }} ({{ edu.year }})  
  _{{ edu.details }}_
{% endfor %}

---

## 💼 Experience
{% for exp in site.data.profile.experience %}
- **{{ exp.title }}** — {{ exp.organization }} ({{ exp.period }})  
  {% for res in exp.responsibilities %}
  • {{ res }}
  {% endfor %}
{% endfor %}

---

## 🧾 Certifications
{% for cert in site.data.profile.certifications %}
- **{{ cert.title }}**, {{ cert.issuer }} ({{ cert.year }})  
  _{{ cert.description }}_
{% endfor %}

---

## 📚 Publications
{% for pub in site.data.profile.publications %}
- **{{ pub.title }}** — {{ pub.venue }}  
  [View Paper]({{ pub.link }})  
  _{{ pub.summary }}_
{% endfor %}

---

## 🏆 Awards & Recognitions
{% for award in site.data.profile.awards %}
- **{{ award.title }}** ({{ award.year }})  
  _{{ award.description }}_
{% endfor %}

from django import template
from transliterate import translit

register = template.Library()

@register.filter(name="getNameByEmail")
def getNameByEmail(email):
  name = email[:email.find('@')]
  return translit(name, 'ru').title().replace('.', ' ')

@register.filter(name="getCompanyByEmail")
def getCompanyByEmail(email):
  EmailMap = {'@api-factory.ru': 'Api Factory'}
  EmailDomain = email[email.find('@'):]
  
  return EmailMap.get(EmailDomain, 'Неизвестно')
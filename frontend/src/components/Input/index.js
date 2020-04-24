import React, { useEffect, useRef } from 'react'
import InputMask from 'react-input-mask'
import IntlCurrencyInput from 'react-intl-currency-input'
import { useField } from '@unform/core'
import { currencyConfig } from '../../config/Currency'
import { ErrorMessage, Content } from './styles'
import PropTypes from 'prop-types'

export const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Content error={error}>
      <input ref={inputRef} className={error ? 'has-error' : ''} defaultValue={defaultValue} {...rest}/>
      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Content>
  )
}

Input.propTypes = {
  name: PropTypes.string
}

export const PhoneInput = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Content error={error}>
      <InputMask {...rest} ref={inputRef} defaultValue={defaultValue} mask="99 9 9999 9999" maskChar=" " />
      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Content>
  )
}

PhoneInput.propTypes = {
  name: PropTypes.string
}

export const TextArea = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Content error={error}>
      <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Content>
  )
}

TextArea.propTypes = {
  name: PropTypes.string
}

export const Select = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue = '', registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Content error={error}>
      <select ref={inputRef} defaultValue={defaultValue} {...rest} />
      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Content>
  )
}

Select.propTypes = {
  name: PropTypes.string
}

export const CurrencyInput = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue = null, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <Content error={error}>
      <IntlCurrencyInput defaultValue={defaultValue} currency="BRL" config={currencyConfig} {...rest}/>
      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Content>
  )
}

CurrencyInput.propTypes = {
  name: PropTypes.string
}

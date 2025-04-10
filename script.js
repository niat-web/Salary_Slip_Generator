/* script.js */

 document.addEventListener('DOMContentLoaded', () => {
  const salaryForm = document.getElementById('salaryForm');
  const salarySlip = document.getElementById('salarySlip');
  const slipEmployeeName = document.getElementById('slipEmployeeName');
  const slipDesignation = document.getElementById('slipDesignation');
  const slipBasicSalary = document.getElementById('slipBasicSalary');
  const slipAllowances = document.getElementById('slipAllowances');
  const slipDeductions = document.getElementById('slipDeductions');
  const slipGrossSalary = document.getElementById('slipGrossSalary');
  const slipTaxDeduction = document.getElementById('slipTaxDeduction');
  const slipNetSalary = document.getElementById('slipNetSalary');
  const downloadPdfButton = document.getElementById('downloadPdf');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const slipOtherEarnings = document.getElementById('slipOtherEarnings');
  const apiDataName = document.getElementById('apiDataName');
  const apiDataEmail = document.getElementById('apiDataEmail');
  const refreshButton = document.getElementById('refreshButton');
  let apiData;

  // Dark Mode Functionality
  darkModeToggle.addEventListener('click', () => {
  const theme = document.body.getAttribute('data-theme');
  if (theme === 'dark') {
  document.body.removeAttribute('data-theme');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  } else {
  document.body.setAttribute('data-theme', 'dark');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }
  });
  // Function to calculate salary components
  function calculateSalary(basicSalary, allowances, deductions, taxPercentage, otherEarnings) {
  const grossSalary = parseFloat(basicSalary) + parseFloat(allowances) + parseFloat(otherEarnings);
  const taxDeduction = (grossSalary * parseFloat(taxPercentage)) / 100;
  const netSalary = grossSalary - taxDeduction - parseFloat(deductions);

  return {
  grossSalary: netSalary >= 0 ? grossSalary.toFixed(2) : 0.00,
  taxDeduction: taxDeduction.toFixed(2),
  netSalary: netSalary >= 0 ? netSalary.toFixed(2) : 0.00,
  };
  }
 

  // Function to generate salary slip content
  function generateSalarySlip(employeeName, designation, basicSalary, allowances, deductions, taxPercentage, otherEarnings) {
  const salaryDetails = calculateSalary(basicSalary, allowances, deductions, taxPercentage, otherEarnings);

  slipEmployeeName.textContent = employeeName;
  slipDesignation.textContent = designation;
  slipBasicSalary.textContent = parseFloat(basicSalary).toFixed(2);
  slipAllowances.textContent = parseFloat(allowances).toFixed(2);
  slipDeductions.textContent = parseFloat(deductions).toFixed(2);
  slipGrossSalary.textContent = salaryDetails.grossSalary;
  slipTaxDeduction.textContent = salaryDetails.taxDeduction;
  slipNetSalary.textContent = salaryDetails.netSalary;
  slipOtherEarnings.textContent = parseFloat(otherEarnings).toFixed(2);
  }

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      } else {
        const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
        const proxyResponse = await fetch(proxyUrl);
        if (proxyResponse.ok) {
          return await proxyResponse.json();
        } else {
          console.error('Failed to fetch data using proxy:', proxyResponse.status, proxyResponse.statusText);
          return null;
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
      try {
        const proxyResponse = await fetch(proxyUrl);
        if (proxyResponse.ok) {
          return await proxyResponse.json();
        } else {
          console.error('Failed to fetch data using proxy:', proxyResponse.status, proxyResponse.statusText);
          return null;
        }
      } catch (proxyError) {
        console.error('Error fetching data using proxy:', proxyError);
        return null;
      }
    }
  }
  async function displayData() {
    apiData = await fetchData('https://freetestapi.com/api/v1/users');
    if (apiData && Array.isArray(apiData)) {
      const shuffledData = apiData.sort(() => Math.random() - 0.5);
      const firstUser = shuffledData[0];
      apiDataName.textContent = firstUser.name || 'N/A';
      apiDataEmail.textContent = firstUser.email || 'N/A';
    } else {
      apiDataName.textContent = 'Error fetching or processing data.';
      apiDataEmail.textContent = 'Error fetching or processing data.';
    }
  }

  // Event listener for form submission
  salaryForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const employeeName = document.getElementById('employeeName').value;
  const designation = document.getElementById('designation').value;
  const basicSalary = document.getElementById('basicSalary').value;
  const allowances = document.getElementById('allowances').value;
  const deductions = document.getElementById('deductions').value;
  const taxPercentage = document.getElementById('taxPercentage').value;
    const otherEarnings = document.getElementById('otherEarnings').value;

  generateSalarySlip(employeeName, designation, basicSalary, allowances, deductions, taxPercentage, otherEarnings);
  salaryForm.reset();
  });
   refreshButton.addEventListener('click', async () => {
        displayData();
    });
    downloadPdfButton.addEventListener('click', () => {
              // Clear the input fields
    slipEmployeeName.textContent = '';
    slipDesignation.textContent = '';
    slipBasicSalary.textContent = '';
    slipAllowances.textContent = '';
    slipDeductions.textContent = '';
    slipGrossSalary.textContent = '';
    slipTaxDeduction.textContent = '';
    slipNetSalary.textContent = '';
    slipOtherEarnings.textContent = '';
    apiDataName.textContent = '';
    apiDataEmail.textContent = '';  
        });
  // Initial data display
  displayData();
 });